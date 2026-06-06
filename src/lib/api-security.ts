import { NextResponse } from "next/server";

const MAX_JSON_BODY_BYTES = 65_536;

const BLOCKED_USER_AGENTS = [
  /^$/i,
  /sqlmap/i,
  /nikto/i,
  /masscan/i,
  /nmap/i,
  /acunetix/i,
  /nessus/i,
];

function siteOrigins(request: Request): Set<string> {
  const host = request.headers.get("host");
  if (!host) return new Set();

  const origins = new Set([`https://${host}`, `http://${host}`]);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (siteUrl) {
    try {
      origins.add(new URL(siteUrl).origin);
    } catch {
      /* ignore invalid env */
    }
  }

  return origins;
}

/** Reject cross-site form posts to public APIs in production. */
export function assertSameOrigin(request: Request): NextResponse | null {
  if (process.env.NODE_ENV !== "production") return null;

  const allowed = siteOrigins(request);
  if (allowed.size === 0) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  if (origin) {
    return allowed.has(origin) ? null : NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (referer) {
    try {
      const refOrigin = new URL(referer).origin;
      return allowed.has(refOrigin)
        ? null
        : NextResponse.json({ error: "Forbidden" }, { status: 403 });
    } catch {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  // No Origin/Referer — block scripted abuse (legitimate browser form posts send at least one).
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export function assertJsonContentType(request: Request): NextResponse | null {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Content-Type must be application/json" }, { status: 415 });
  }
  return null;
}

export function assertAllowedUserAgent(request: Request): NextResponse | null {
  const ua = request.headers.get("user-agent")?.trim() ?? "";
  if (BLOCKED_USER_AGENTS.some((pattern) => pattern.test(ua))) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return null;
}

/** Honeypot — bots fill hidden fields; return fake success without processing. */
export function isHoneypotTriggered(body: Record<string, unknown>): boolean {
  const trap = body.website_url ?? body.url ?? body.company_website;
  if (typeof trap === "string" && trap.trim().length > 0) return true;
  if (typeof trap === "number") return true;
  return false;
}

export async function readJsonBody(request: Request): Promise<unknown | NextResponse> {
  const length = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(length) && length > MAX_JSON_BODY_BYTES) {
    return NextResponse.json({ error: "Request body too large" }, { status: 413 });
  }

  const raw = await request.text();
  if (raw.length > MAX_JSON_BODY_BYTES) {
    return NextResponse.json({ error: "Request body too large" }, { status: 413 });
  }

  if (!raw.trim()) {
    return NextResponse.json({ error: "Empty request body" }, { status: 400 });
  }

  try {
    return JSON.parse(raw) as unknown;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

export function guardPublicApiPost(request: Request): NextResponse | null {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
  return (
    assertAllowedUserAgent(request) ??
    assertSameOrigin(request) ??
    assertJsonContentType(request)
  );
}

/** Standard security headers for JSON API responses — no caching, no indexing. */
export function withApiSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  response.headers.set("X-Content-Type-Options", "nosniff");
  return response;
}

export function apiJson(
  data: Record<string, unknown>,
  init?: { status?: number; headers?: Record<string, string> },
): NextResponse {
  const response = NextResponse.json(data, { status: init?.status ?? 200 });
  if (init?.headers) {
    for (const [key, value] of Object.entries(init.headers)) {
      response.headers.set(key, value);
    }
  }
  return withApiSecurityHeaders(response);
}
