"use client";

import { trackFormComplete, trackFormStart } from "@/lib/conversion-events";

export type LeadFormPayload = Record<string, unknown>;

export async function submitLeadForm(
  payload: LeadFormPayload,
  options?: { trackStart?: boolean },
): Promise<{
  success: boolean;
  message?: string;
  leadScore?: number;
  leadTier?: string;
  emailDelivered?: boolean;
  error?: string;
}> {
  if (options?.trackStart !== false && typeof payload.source === "string") {
    trackFormStart(payload.source);
  }

  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ website_url: "", ...payload }),
  });

  let body: {
    success?: boolean;
    message?: string;
    leadScore?: number;
    leadTier?: string;
    emailDelivered?: boolean;
    error?: string;
  } = {};

  try {
    body = (await res.json()) as typeof body;
  } catch {
    return {
      success: false,
      error: res.ok
        ? "Unexpected server response. Please check your email — we may have received your message."
        : "Something went wrong. Please try again.",
    };
  }

  if (!res.ok) {
    return { success: false, error: body.error || "Something went wrong. Please try again." };
  }

  if (typeof payload.source === "string") {
    trackFormComplete(payload.source, body.leadTier, body.leadScore);
  }

  return {
    success: true,
    message: body.message,
    leadScore: body.leadScore,
    leadTier: body.leadTier,
    emailDelivered: body.emailDelivered,
  };
}
