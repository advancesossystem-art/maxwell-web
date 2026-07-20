import { NextResponse } from "next/server";
import { z } from "zod";
import {
  apiJson,
  guardPublicApiPost,
  isHoneypotTriggered,
  readJsonBody,
  withApiSecurityHeaders,
} from "@/lib/api-security";
import { getClientIp, rateLimitLeads } from "@/lib/rate-limit";
import { submitLead } from "@/lib/submit-lead";
import { logGmailCredentialFingerprintOnce } from "@/lib/gmail-config";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(request: Request) {
  logGmailCredentialFingerprintOnce("POST /api/leads");
  try {
    const blocked = guardPublicApiPost(request);
    if (blocked) return withApiSecurityHeaders(blocked);

    const ip = getClientIp(request);
    const limit = await rateLimitLeads(ip);
    if (!limit.ok) {
      return apiJson(
        { error: "Too many requests. Please try again shortly." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil(limit.resetIn / 1000)) },
        },
      );
    }

    const body = await readJsonBody(request);
    if (body instanceof NextResponse) return withApiSecurityHeaders(body);
    if (typeof body !== "object" || body === null) {
      return apiJson({ error: "Invalid request body" }, { status: 400 });
    }

    const raw = body as Record<string, unknown>;
    if (isHoneypotTriggered(raw)) {
      return apiJson({ success: true, message: "Lead received" });
    }

    const result = await submitLead(raw);
    if (!result.ok) {
      return apiJson({ error: result.error }, { status: result.status });
    }

    return apiJson({
      success: true,
      leadScore: result.leadScore,
      leadTier: result.leadTier,
      emailDelivered: result.emailDelivered,
      message: "Lead received",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issue = error.issues[0];
      const field = issue?.path?.length ? String(issue.path[0]) : "";
      const message =
        field && issue?.message
          ? issue.message
          : issue?.message || "Invalid form data";
      return apiJson({ error: message }, { status: 400 });
    }
    return apiJson({ error: "Internal server error" }, { status: 500 });
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

export function PATCH() {
  return apiJson({ error: "Method not allowed" }, { status: 405 });
}
