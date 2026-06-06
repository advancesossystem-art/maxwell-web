import { NextResponse } from "next/server";
import { z } from "zod";
import {
  apiJson,
  guardPublicApiPost,
  readJsonBody,
  withApiSecurityHeaders,
} from "@/lib/api-security";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import {
  ADMIN_COOKIE_NAME,
  adminCookieOptions,
  getAdminSecret,
  isValidAdminToken,
} from "@/lib/security/admin-auth";

const schema = z.object({
  token: z.string().min(16).max(256),
});

/** Exchange admin token for httpOnly session cookie (avoids token in URL/logs). */
export async function POST(request: Request) {
  const blocked = guardPublicApiPost(request);
  if (blocked) return withApiSecurityHeaders(blocked);

  const limit = rateLimit(`admin-auth:${getClientIp(request)}`, 5);
  if (!limit.ok) {
    return apiJson({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  const secret = getAdminSecret();
  if (!secret) {
    return apiJson({ error: "Admin access is not configured" }, { status: 503 });
  }

  const body = await readJsonBody(request);
  if (body instanceof NextResponse) return withApiSecurityHeaders(body);

  try {
    const { token } = schema.parse(body);
    if (!isValidAdminToken(token)) {
      return apiJson({ error: "Invalid token" }, { status: 401 });
    }

    const response = apiJson({ success: true });
    response.cookies.set(ADMIN_COOKIE_NAME, secret, adminCookieOptions());
    return response;
  } catch {
    return apiJson({ error: "Invalid request" }, { status: 400 });
  }
}

export function GET() {
  return apiJson({ error: "Method not allowed" }, { status: 405 });
}
