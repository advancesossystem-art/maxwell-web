import { NextResponse } from "next/server";
import { z } from "zod";
import { getLeadMagnetById } from "@/lib/content/lead-magnets";
import { sendLeadNotificationEmail } from "@/lib/crm";
import {
  apiJson,
  guardPublicApiPost,
  isHoneypotTriggered,
  readJsonBody,
  withApiSecurityHeaders,
} from "@/lib/api-security";
import { getClientIp, rateLimitAsync, rateLimits } from "@/lib/rate-limit";
import { safeOutboundFetch } from "@/lib/security/ssrf";
import { webhookHeaders } from "@/lib/security/webhook-auth";

export const runtime = "nodejs";
export const maxDuration = 30;

const schema = z.object({
  email: z.string().trim().email("Valid email is required").max(254),
  name: z.string().trim().max(80).optional(),
  source: z.string().trim().max(64).default("newsletter"),
  magnetId: z.string().trim().max(64).optional(),
  contentSlug: z.string().trim().max(120).optional(),
});

export async function POST(request: Request) {
  try {
    const blocked = guardPublicApiPost(request);
    if (blocked) return withApiSecurityHeaders(blocked);

    const limit = await rateLimitAsync(`newsletter:${getClientIp(request)}`, rateLimits.newsletter);
    if (!limit.ok) {
      return apiJson({ error: "Too many requests." }, { status: 429 });
    }

    const body = await readJsonBody(request);
    if (body instanceof NextResponse) return withApiSecurityHeaders(body);
    if (typeof body !== "object" || body === null) {
      return apiJson({ error: "Invalid request body" }, { status: 400 });
    }

    const payload = body as Record<string, unknown>;
    if (isHoneypotTriggered(payload)) {
      return apiJson({ success: true });
    }

    const data = schema.parse(payload);
    const magnet = data.magnetId ? getLeadMagnetById(data.magnetId) : undefined;

    const message = magnet
      ? `Newsletter/download: ${magnet.title} (${data.source})`
      : `Newsletter subscription (${data.source})`;

    await sendLeadNotificationEmail({
      source: "newsletter",
      name: data.name ?? "Subscriber",
      email: data.email,
      message: `${message}${data.contentSlug ? ` Content: ${data.contentSlug}` : ""}`,
      leadScore: { score: 40, tier: "warm", breakdown: [] },
      submittedAt: new Date().toISOString(),
    });

    if (process.env.LEAD_WEBHOOK_URL) {
      await safeOutboundFetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: webhookHeaders(),
        body: JSON.stringify({
          type: "newsletter",
          email: data.email,
          name: data.name,
          source: data.source,
          magnetId: data.magnetId,
          contentSlug: data.contentSlug,
        }),
      }).catch(() => {});
    }

    return apiJson({
      success: true,
      downloadPath: magnet?.downloadPath,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return apiJson({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
    }
    const detail = error instanceof Error ? error.message : "Subscription failed";
    console.error("[Newsletter]", detail);
    console.error("[Newsletter Fallback] Accepted subscription without inbox delivery");
    return apiJson({ success: true });
  }
}

export function GET() {
  return apiJson({ error: "Method not allowed" }, { status: 405 });
}

export function PUT() {
  return apiJson({ error: "Method not allowed" }, { status: 405 });
}

export function DELETE() {
  return apiJson({ error: "Method not allowed" }, { status: 405 });
}
