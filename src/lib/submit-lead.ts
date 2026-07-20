import { z } from "zod";
import {
  isValidFullName,
  isValidInternationalPhone,
  isValidWorkEmail,
  normalizeInternationalPhone,
} from "@/lib/form-validation";
import { calculateLeadScore, type LeadSource } from "@/lib/lead-scoring";
import { calculateProjectEstimate } from "@/lib/project-estimator";
import { dispatchLeadToCRM, sendLeadNotificationEmail, type LeadPayload } from "@/lib/crm";
import { sendLeadAutoReplyEmail } from "@/lib/lead-notification-email";
import { logLeadReceived } from "@/lib/safe-log";

const PHONE_REQUIRED_SOURCES = new Set([
  "contact",
  "book-consultation",
  "discovery-call",
  "get-estimate",
  "homepage-assessment",
]);

const MESSAGE_DEFAULT_SOURCES = new Set(["contact", "book-consultation", "discovery-call"]);

function isServiceSource(source: string): boolean {
  return /^service-[a-z0-9-]+$/.test(source);
}

function isIndustrySource(source: string): boolean {
  return /^industry-[a-z0-9-]+$/.test(source);
}

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
        "exit-intent",
        "homepage-assessment",
      ]),
      z.string().regex(/^tool-[a-z0-9-]+$/),
      z.string().regex(/^service-[a-z0-9-]+$/),
      z.string().regex(/^industry-[a-z0-9-]+$/),
    ]),
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(80, "Name is too long")
      .refine(isValidFullName, "Enter a valid full name"),
    email: z
      .string({ error: "Email is required" })
      .trim()
      .min(1, "Email is required")
      .refine(isValidWorkEmail, "Enter a valid work email address"),
    phone: z.string().trim().max(25).optional(),
    company: z.string().trim().max(120).optional(),
    message: z.string().trim().max(8000).optional(),
    businessType: z.string().trim().max(80).optional(),
    services: z.array(z.string().trim().max(80)).max(12).optional(),
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
    const phoneRequired =
      PHONE_REQUIRED_SOURCES.has(data.source) ||
      isServiceSource(data.source) ||
      isIndustrySource(data.source);

    if (phoneRequired) {
      if (!phone) {
        ctx.addIssue({
          code: "custom",
          message: "Phone number is required",
          path: ["phone"],
        });
      } else if (!isValidInternationalPhone(phone)) {
        ctx.addIssue({
          code: "custom",
          message: "Enter a valid international phone number with country code",
          path: ["phone"],
        });
      }
    } else if (phone && !isValidInternationalPhone(phone)) {
      ctx.addIssue({
        code: "custom",
        message: "Enter a valid international phone number with country code",
        path: ["phone"],
      });
    }

    // Contact / service / industry: allow short messages — defaults applied in submitLead
    // (matches Book Strategy Call, which does not require a long message).
    if (
      (isServiceSource(data.source) || isIndustrySource(data.source)) &&
      (!data.message || data.message.trim().length < 20)
    ) {
      // ServiceLeadForm pads short messages client-side; keep a soft server check only when empty
      if (!data.message?.trim()) {
        ctx.addIssue({
          code: "custom",
          message: "Please describe your project in at least 20 characters",
          path: ["message"],
        });
      }
    }
  });

export type SubmitLeadResult =
  | { ok: true; leadScore: number; leadTier: string; emailDelivered: boolean }
  | { ok: false; error: string; status: 400 | 503 };

function diag(step: string, detail?: Record<string, unknown>) {
  console.log(`[LEAD-DIAG] ${step}`, detail ?? "");
}

export async function submitLead(raw: Record<string, unknown>): Promise<SubmitLeadResult> {
  diag("FORM RECEIVED", {
    source: raw.source,
    hasName: Boolean(raw.name),
    hasEmail: Boolean(raw.email),
    hasPhone: Boolean(raw.phone),
    hasMessage: Boolean(raw.message),
    keys: Object.keys(raw),
  });

  const data = leadSchema.parse(raw);
  diag("VALIDATION OK", { source: data.source, email: data.email });

  const message =
    data.message?.trim() ||
    (data.source === "homepage-assessment"
      ? `Assessment request. Business: ${data.businessType ?? data.industry ?? "—"}. Services: ${data.services?.join(", ") || data.features?.join(", ") || "—"}.`
      : data.source === "exit-intent"
        ? "Exit-intent popup — free software audit request."
        : MESSAGE_DEFAULT_SOURCES.has(data.source)
      ? "Consultation request — details to be discussed on the call."
      : data.source === "get-estimate"
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

  const normalizedPhone = data.phone ? normalizeInternationalPhone(data.phone) ?? data.phone : undefined;

  const payload: LeadPayload = {
    source: data.source as LeadSource,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: normalizedPhone,
    company: data.company,
    message,
    projectType: data.projectType,
    industry: data.industry ?? data.businessType,
    scope: data.scope,
    features: data.features ?? data.services,
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
  diag("LEAD ACCEPTED (no DB write — email + CRM only)", {
    source: payload.source,
    score: leadScore.score,
    tier: leadScore.tier,
  });

  void dispatchLeadToCRM(payload).catch((err) => {
    console.error("[Lead CRM]", err instanceof Error ? err.message : "CRM dispatch failed");
  });

  try {
    diag("EMAIL FUNCTION ENTERED", {
      source: payload.source,
      toHint: "LEAD_NOTIFICATION_EMAIL / GMAIL_USER",
      subjectSource: payload.source,
    });
    await sendLeadNotificationEmail(payload);
    diag("EMAIL SEND SUCCESS", { source: payload.source });
    void sendLeadAutoReplyEmail(payload).catch((err) => {
      console.error("[Lead Auto-Reply]", err instanceof Error ? err.message : "Auto-reply failed");
    });
    return {
      ok: true,
      leadScore: leadScore.score,
      leadTier: leadScore.tier,
      emailDelivered: true,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Email send failed";
    console.error("[Lead Email]", message);
    diag("EMAIL SEND FAILURE", { source: payload.source, error: message });
    // Never drop a validated lead because SMTP failed — log enough to recover from host logs.
    console.error("[Lead Email Fallback] Accepted lead without inbox delivery:", {
      source: payload.source,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      company: payload.company,
      projectType: payload.projectType,
      budget: payload.budget,
      message: payload.message?.slice(0, 500),
      submittedAt: payload.submittedAt,
      leadScore: leadScore.score,
      leadTier: leadScore.tier,
    });
    return {
      ok: true,
      leadScore: leadScore.score,
      leadTier: leadScore.tier,
      emailDelivered: false,
    };
  }
}
