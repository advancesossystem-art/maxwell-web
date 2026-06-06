import { safeEqual } from "@/lib/security/timing-safe";

export const ADMIN_COOKIE_NAME = "maxwell_admin_session";

export function getAdminSecret(): string | null {
  const secret = process.env.ADMIN_AUDIT_TOKEN?.trim();
  if (!secret || secret.length < 16) return null;
  return secret;
}

export function isValidAdminToken(provided: string | null | undefined): boolean {
  const secret = getAdminSecret();
  if (!secret || !provided) return false;
  return safeEqual(provided.trim(), secret);
}

export function adminCookieOptions(maxAgeSeconds = 60 * 60 * 8) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/admin",
    maxAge: maxAgeSeconds,
  };
}
