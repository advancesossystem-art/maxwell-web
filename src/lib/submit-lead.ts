import { z } from "zod";
import {
  isValidFullName,
  isValidIndianPhone,
  isValidWorkEmail,
  normalizeIndianPhone,
} from "@/lib/form-validation";
import { calculateLeadScore, type LeadSource } from "@/lib/lead-scoring";
import { calculateProjectEstimate } from "@/lib/project-estimator";
import { dispatchLeadToCRM, sendLeadNotificationEmail, type LeadPayload } from "@/lib/crm";
import { logLeadReceived } from "@/lib/safe-log";

const PHONE_REQUIRED_SOURCES = new Set([
  "contact",
  "book-consultation",
  "discovery-call",
  "get-estimate",
]);

const MESSAGE_REQUIRED_SOURCES = new Set([
  "contact",
  "book-consultation",
  "discovery-call",
  "get-estimate",
]);

export const leadSchema = z
  .object({
    source: z.union([
      z.enum([
        "contact",
        "get-estimate",
        "project-calculator",
        "book-consultation",
        "discovery-call",
        "careers",
      ]),
      z.string().regex(/^tool-[a-z0-9-]+$/),
    ]),
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(80, "Name is too long")
      .refine(isValidFullName, "Enter a valid full name"),
    email: z
      .string()
      .trim()
      .refine(isValidWorkEmail, "Enter a valid work email address"),
    phone: z.string().trim().max(20).optional(),
    company: z.string().trim().max(120).optional(),
    message: z.string().trim().max(8000).optional(),
    projectType: z.string().trim().max(120).optional(),
    industry: z.string().trim().max(80).optional(),
    scope: z.string().trim().max(80).optional(),
    features: z.array(z.string().trim().max(80)).max(24).optional(),
    timeline: z.string().trim().max(80).optional(),
    budget: z.string().trim().max(80).optional(),
    companySize: z.string().trim().max(40).optional(),
    estimate: z
      .object({
        costMin: z.number().optional(),
        costMax: z.number().optional(),
        developmentTime: z.string().optional(),
        teamSize: z.string().optional(),
        complexityScore: z.number().optional(),
      })
      .optional(),
  })
  .superRefine((data, ctx) => {
    const phone = data.phone?.trim() ?? "";

    if (PHONE_REQUIRED_SOURCES.has(data.source)) {
      if (!phone) {
        ctx.addIssue({
          code: "custom",
          message: "Phone number is required",
          path: ["phone"],
        });
      } else if (!isValidIndianPhone(phone)) {
        ctx.addIssue({
          code: "custom",
          message: "Enter a valid 10-digit Indian mobile number",
          path: ["phone"],
        });
      }
    } else if (phone && !isValidIndianPhone(phone)) {
      ctx.addIssue({
        code: "custom",
        message: "Enter a valid 10-digit Indian mobile number",
        path: ["phone"],
      });
    }

    if (MESSAGE_REQUIRED_SOURCES.has(data.source) && (!data.message || data.message.trim().length < 20)) {
      ctx.addIssue({
        code: "custom",
        message: "Please describe your project in at least 20 characters",
        path: ["message"],
      });
    }
  });

export type SubmitLeadResult =
  | { ok: true; leadScore: number; leadTier: string }
  | { ok: false; error: string; status: 400 | 503 };

export async function submitLead(raw: Record<string, unknown>): Promise<SubmitLeadResult> {
  const data = leadSchema.parse(raw);

  const message =
    data.message ??
    (data.source === "get-estimate"
      ? `Estimate request: ${data.projectType}, ${data.industry}, scope ${data.scope}, budget ${data.budget}, timeline ${data.timeline}. Features: ${data.features?.join(", ") || "none"}.`
      : data.source === "project-calculator"
        ? `Calculator estimate: ${data.projectType}, scope ${data.scope}, timeline ${data.timeline}.`
        : undefined);

  const leadScore = calculateLeadScore({
    budget: data.budget,
    timeline: data.timeline,
    projectType: data.projectType,
    industry: data.industry,
    companySize: data.companySize,
    company: data.company,
    phone: data.phone,
    scope: data.scope,
    features: data.features,
    email: data.email,
    source: data.source,
  });

  let estimate = data.estimate;
  if (data.source === "get-estimate" && data.projectType && !estimate) {
    const calc = calculateProjectEstimate({
      projectType: data.projectType,
      industry: data.industry,
      scope: data.scope,
      features: data.features,
      timeline: data.timeline,
    });
    estimate = {
      costMin: calc.estimatedCost.min,
      costMax: calc.estimatedCost.max,
      developmentTime: calc.developmentTime,
      teamSize: calc.teamSize,
      complexityScore: calc.complexityScore,
    };
  }

  const normalizedPhone = data.phone ? normalizeIndianPhone(data.phone) ?? data.phone : undefined;

  const payload: LeadPayload = {
    source: data.source as LeadSource,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: normalizedPhone,
    company: data.company,
    message,
    projectType: data.projectType,
    industry: data.industry,
    scope: data.scope,
    features: data.features,
    timeline: data.timeline,
    budget: data.budget,
    companySize: data.companySize,
    estimate,
    leadScore,
    submittedAt: new Date().toISOString(),
  };

  logLeadReceived({
    source: payload.source,
    score: leadScore.score,
    tier: leadScore.tier,
  });

  void dispatchLeadToCRM(payload).catch((err) => {
    console.error("[Lead CRM]", err instanceof Error ? err.message : "CRM dispatch failed");
  });

  try {
    await sendLeadNotificationEmail(payload);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Email send failed";
    console.error("[Lead Email]", message);
    return {
      ok: false,
      error:
        process.env.NODE_ENV === "production"
          ? "We could not deliver your message right now. Please email maxwellelectrodealsystems@gmail.com or call us directly."
          : `Email failed: ${message}. Regenerate App Password at https://myaccount.google.com/apppasswords`,
      status: 503,
    };
  }

  return {
    ok: true,
    leadScore: leadScore.score,
    leadTier: leadScore.tier,
  };
}
