import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getClientIp, rateLimit, rateLimits } from "@/lib/rate-limit";
import {
  ADMIN_COOKIE_NAME,
  getAdminSecret,
  isValidAdminToken,
} from "@/lib/security/admin-auth";
import { safeEqual } from "@/lib/security/timing-safe";
import { isPortalDemoEnabledServer } from "@/lib/portal/demo-config";

const isProduction = process.env.NODE_ENV === "production";

function buildCsp(nonce: string): string {
  const devEval = isProduction ? "" : " 'unsafe-eval'";
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${devEval} https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.clarity.ms https://assets.calendly.com`,
    `style-src 'self' 'nonce-${nonce}' https://assets.calendly.com`,
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com https://www.clarity.ms https://*.clarity.ms",
    "frame-src 'self' https://www.googletagmanager.com https://calendly.com https://*.calendly.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

/** Block probes for env files, git, CMS exploits, and path traversal. */
const BLOCKED_PATH_PATTERNS = [
  /^\/\.env/i,
  /^\/\.git/i,
  /^\/\.vscode/i,
  /^\/\.cursor/i,
  /\/\.env/i,
  /\/\.git/i,
  /\.\./,
  /\/wp-admin/i,
  /\/wp-login/i,
  /\/wp-content/i,
  /\/xmlrpc\.php/i,
  /\/phpmyadmin/i,
  /\/\.aws/i,
  /\.(sql|bak|old|log|ini|config|pem|key)$/i,
];

function isBlockedPath(pathname: string): boolean {
  return BLOCKED_PATH_PATTERNS.some((pattern) => pattern.test(pathname));
}

function isAdminAuthorized(request: NextRequest): boolean {
  const secret = getAdminSecret();
  if (!secret) return false;

  const cookieToken = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (cookieToken && safeEqual(cookieToken, secret)) return true;

  const headerToken = request.headers.get("x-admin-token")?.trim();
  if (headerToken && isValidAdminToken(headerToken)) return true;

  // Query token only in development — production tokens must not appear in URLs/logs.
  if (!isProduction) {
    const queryToken = request.nextUrl.searchParams.get("token")?.trim();
    if (queryToken && isValidAdminToken(queryToken)) return true;
  }

  return false;
}

function apiMethodBlocked(request: NextRequest): NextResponse | null {
  if (!request.nextUrl.pathname.startsWith("/api/")) return null;
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
  return null;
}

function apiEdgeRateLimit(request: NextRequest): NextResponse | null {
  if (!request.nextUrl.pathname.startsWith("/api/")) return null;
  const ip = getClientIp(request);
  const limit = rateLimit(`mw:api:${ip}`, rateLimits.api);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(limit.resetIn / 1000)) },
      },
    );
  }
  return null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isBlockedPath(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  const apiBlocked = apiMethodBlocked(request);
  if (apiBlocked) return apiBlocked;

  const apiLimited = apiEdgeRateLimit(request);
  if (apiLimited) return apiLimited;

  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") {
      // Public login page; still noindex via page metadata.
    } else if (isProduction && !isAdminAuthorized(request)) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname.startsWith("/portal") && isProduction && !isPortalDemoEnabledServer()) {
    return NextResponse.rewrite(new URL("/_not-found", request.url));
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-site");

  if (pathname.startsWith("/api/")) {
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|manifest.webmanifest).*)"],
};
