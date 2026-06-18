type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 60_000;
const HOUR_MS = 3_600_000;

const LIMITS = {
  leads: 5,
  leadsBurst: 3,
  newsletter: 5,
  api: 15,
  default: 12,
} as const;

let lastCleanup = Date.now();

type UpstashLimiter = {
  limit: (key: string) => Promise<{ success: boolean; remaining: number; reset: number }>;
};

const upstashLimiters = new Map<string, UpstashLimiter>();
let upstashUnavailable = false;

async function getUpstashLimiter(
  maxRequests: number,
  window: "1 m" | "1 h" = "1 m",
): Promise<UpstashLimiter | null> {
  if (upstashUnavailable) return null;

  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }

  const cacheKey = `${maxRequests}:${window}`;
  const cached = upstashLimiters.get(cacheKey);
  if (cached) return cached;

  try {
    const [{ Ratelimit }, { Redis }] = await Promise.all([
      import("@upstash/ratelimit"),
      import("@upstash/redis"),
    ]);
    const limiter = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(maxRequests, window),
      analytics: false,
      prefix: `maxwell-rl-${maxRequests}-${window}`,
    });
    upstashLimiters.set(cacheKey, limiter);
    return limiter;
  } catch {
    upstashUnavailable = true;
    return null;
  }
}

function cleanupBuckets(now: number): void {
  if (now - lastCleanup < 120_000) return;
  lastCleanup = now;
  for (const [key, bucket] of buckets) {
    if (now > bucket.resetAt) buckets.delete(key);
  }
}

function rateLimitInMemory(
  key: string,
  maxRequests: number,
  windowMs: number = WINDOW_MS,
): { ok: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  cleanupBuckets(now);

  let bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    bucket = { count: 0, resetAt: now + windowMs };
    buckets.set(key, bucket);
  }

  bucket.count += 1;
  const remaining = Math.max(0, maxRequests - bucket.count);
  const resetIn = Math.max(0, bucket.resetAt - now);

  return { ok: bucket.count <= maxRequests, remaining, resetIn };
}

/** Sync in-memory limiter for proxy edge (Upstash is async). */
export function rateLimit(
  key: string,
  maxRequests: number = LIMITS.default,
): { ok: boolean; remaining: number; resetIn: number } {
  return rateLimitInMemory(key, maxRequests);
}

/** Async limiter — uses Upstash Redis when configured, else in-memory fallback. */
export async function rateLimitAsync(
  key: string,
  maxRequests: number = LIMITS.default,
  windowMs: number = WINDOW_MS,
): Promise<{ ok: boolean; remaining: number; resetIn: number }> {
  const upstashWindow = windowMs >= HOUR_MS ? "1 h" : "1 m";
  const upstash = await getUpstashLimiter(maxRequests, upstashWindow);
  if (upstash) {
    const result = await upstash.limit(key);
    const resetIn = Math.max(0, result.reset - Date.now());
    return {
      ok: result.success,
      remaining: result.remaining,
      resetIn,
    };
  }

  return rateLimitInMemory(key, maxRequests, windowMs);
}

/** Leads API: max 5 submissions per IP per hour (+ burst guard per minute). */
export async function rateLimitLeads(ip: string): Promise<{ ok: boolean; resetIn: number }> {
  const hourly = await rateLimitAsync(`leads-hour:${ip}`, LIMITS.leads, HOUR_MS);
  if (!hourly.ok) return hourly;
  const burst = await rateLimitAsync(`leads-burst:${ip}`, LIMITS.leadsBurst, WINDOW_MS);
  return burst;
}

export const rateLimits = LIMITS;

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first && first.length <= 45) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp && realIp.length <= 45) return realIp;
  return "unknown";
}
