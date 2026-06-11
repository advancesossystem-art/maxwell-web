type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 60_000;

const LIMITS = {
  leads: 8,
  newsletter: 5,
  api: 15,
  default: 12,
} as const;

let lastCleanup = Date.now();

type UpstashLimiter = {
  limit: (key: string) => Promise<{ success: boolean; remaining: number; reset: number }>;
};

const upstashLimiters = new Map<number, UpstashLimiter>();
let upstashUnavailable = false;

async function getUpstashLimiter(maxRequests: number): Promise<UpstashLimiter | null> {
  if (upstashUnavailable) return null;

  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }

  const cached = upstashLimiters.get(maxRequests);
  if (cached) return cached;

  try {
    const [{ Ratelimit }, { Redis }] = await Promise.all([
      import("@upstash/ratelimit"),
      import("@upstash/redis"),
    ]);
    const limiter = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(maxRequests, "1 m"),
      analytics: false,
      prefix: `maxwell-rl-${maxRequests}`,
    });
    upstashLimiters.set(maxRequests, limiter);
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
): { ok: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  cleanupBuckets(now);

  let bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    bucket = { count: 0, resetAt: now + WINDOW_MS };
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
): Promise<{ ok: boolean; remaining: number; resetIn: number }> {
  const upstash = await getUpstashLimiter(maxRequests);
  if (upstash) {
    const result = await upstash.limit(key);
    const resetIn = Math.max(0, result.reset - Date.now());
    return {
      ok: result.success,
      remaining: result.remaining,
      resetIn,
    };
  }

  return rateLimitInMemory(key, maxRequests);
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
