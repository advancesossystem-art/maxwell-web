import { NextResponse } from "next/server";
import { z } from "zod";
import {
  apiJson,
  guardPublicApiPost,
  isHoneypotTriggered,
  readJsonBody,
  withApiSecurityHeaders,
} from "@/lib/api-security";
import { getClientIp, rateLimit, rateLimits } from "@/lib/rate-limit";
import { submitLead } from "@/lib/submit-lead";

/** @deprecated Prefer POST /api/leads — kept for backward compatibility. */
export async function POST(request: Request) {
  const blocked = guardPublicApiPost(request);
  if (blocked) return withApiSecurityHeaders(blocked);

  const limit = rateLimit(`contact:${getClientIp(request)}`, rateLimits.leads);
  if (!limit.ok) {
    return apiJson({ error: "Too many requests." }, { status: 429 });
  }

  const body = await readJsonBody(request);
  if (body instanceof NextResponse) return withApiSecurityHeaders(body);
  if (typeof body !== "object" || body === null) {
    return apiJson({ error: "Invalid request body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  if (isHoneypotTriggered(data)) {
    return apiJson({ success: true, message: "Lead received" });
  }

  try {
    const result = await submitLead({
      source: "contact",
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      message: data.message,
      projectType: data.service ?? data.projectType,
      budget: data.budget,
      industry: data.industry,
    });

    if (!result.ok) {
      return apiJson({ error: result.error }, { status: result.status });
    }

    return apiJson({
      success: true,
      leadScore: result.leadScore,
      leadTier: result.leadTier,
      message: "Lead received",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return apiJson({ error: error.issues[0]?.message ?? "Invalid form data" }, { status: 400 });
    }
    return apiJson({ error: "Internal server error" }, { status: 500 });
  }
}

export function GET() {
  return apiJson({ error: "Method not allowed" }, { status: 405 });
}
