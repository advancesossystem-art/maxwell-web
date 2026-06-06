import type { LeadScoreResult, LeadSource } from "./lead-scoring";
import { safeOutboundFetch } from "@/lib/security/ssrf";
import { webhookHeaders } from "@/lib/security/webhook-auth";

export type LeadPayload = {
  source: LeadSource;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  projectType?: string;
  industry?: string;
  scope?: string;
  features?: string[];
  timeline?: string;
  budget?: string;
  companySize?: string;
  estimate?: {
    costMin?: number;
    costMax?: number;
    developmentTime?: string;
    teamSize?: string;
    complexityScore?: number;
  };
  leadScore: LeadScoreResult;
  submittedAt: string;
  metadata?: Record<string, string>;
};

export type CRMProvider = "hubspot" | "zoho" | "salesforce" | "webhook";

export async function dispatchLeadToCRM(payload: LeadPayload): Promise<{ sent: CRMProvider[]; errors: string[] }> {
  const sent: CRMProvider[] = [];
  const errors: string[] = [];

  const tasks: { provider: CRMProvider; fn: () => Promise<void> }[] = [];

  if (process.env.HUBSPOT_WEBHOOK_URL) {
    tasks.push({ provider: "hubspot", fn: () => sendHubSpot(payload) });
  }
  if (process.env.ZOHO_WEBHOOK_URL) {
    tasks.push({ provider: "zoho", fn: () => sendZoho(payload) });
  }
  if (process.env.SALESFORCE_WEBHOOK_URL) {
    tasks.push({ provider: "salesforce", fn: () => sendSalesforce(payload) });
  }
  if (process.env.LEAD_WEBHOOK_URL) {
    tasks.push({ provider: "webhook", fn: () => sendGenericWebhook(payload, process.env.LEAD_WEBHOOK_URL!) });
  }

  await Promise.allSettled(
    tasks.map(async ({ provider, fn }) => {
      try {
        await fn();
        sent.push(provider);
      } catch (e) {
        errors.push(`${provider}: ${e instanceof Error ? e.message : "Unknown error"}`);
      }
    }),
  );

  return { sent, errors };
}

async function sendHubSpot(payload: LeadPayload) {
  const url = process.env.HUBSPOT_WEBHOOK_URL!;
  await safeOutboundFetch(url, {
    method: "POST",
    headers: webhookHeaders(),
    body: JSON.stringify({
      properties: {
        email: payload.email,
        firstname: payload.name.split(" ")[0],
        lastname: payload.name.split(" ").slice(1).join(" ") || payload.name,
        phone: payload.phone,
        company: payload.company,
        lead_source: payload.source,
        lead_score: payload.leadScore.score,
        lead_tier: payload.leadScore.tier,
        project_type: payload.projectType,
        budget: payload.budget,
        timeline: payload.timeline,
        message: payload.message,
      },
    }),
  });
}

async function sendZoho(payload: LeadPayload) {
  const url = process.env.ZOHO_WEBHOOK_URL!;
  await safeOutboundFetch(url, {
    method: "POST",
    headers: webhookHeaders(),
    body: JSON.stringify({
      data: [
        {
          Last_Name: payload.name,
          Email: payload.email,
          Phone: payload.phone,
          Company: payload.company,
          Lead_Source: payload.source,
          Description: buildLeadDescription(payload),
        },
      ],
    }),
  });
}

async function sendSalesforce(payload: LeadPayload) {
  const url = process.env.SALESFORCE_WEBHOOK_URL!;
  await safeOutboundFetch(url, {
    method: "POST",
    headers: webhookHeaders(),
    body: JSON.stringify({
      LastName: payload.name,
      Email: payload.email,
      Phone: payload.phone,
      Company: payload.company ?? "Unknown",
      LeadSource: payload.source,
      Description: buildLeadDescription(payload),
      Rating: payload.leadScore.tier === "hot" ? "Hot" : payload.leadScore.tier === "warm" ? "Warm" : "Cold",
    }),
  });
}

async function sendGenericWebhook(payload: LeadPayload, url: string) {
  await safeOutboundFetch(url, {
    method: "POST",
    headers: webhookHeaders(),
    body: JSON.stringify(payload),
  });
}

function buildLeadDescription(payload: LeadPayload): string {
  const lines = [
    `Source: ${payload.source}`,
    `Score: ${payload.leadScore.score} (${payload.leadScore.tier})`,
    payload.projectType && `Project: ${payload.projectType}`,
    payload.industry && `Industry: ${payload.industry}`,
    payload.scope && `Scope: ${payload.scope}`,
    payload.timeline && `Timeline: ${payload.timeline}`,
    payload.budget && `Budget: ${payload.budget}`,
    payload.features?.length && `Features: ${payload.features.join(", ")}`,
    payload.message && `Message: ${payload.message}`,
    payload.estimate && `Estimate: ${payload.estimate.costMin}–${payload.estimate.costMax}`,
  ].filter(Boolean);
  return lines.join("\n");
}

export async function sendLeadNotificationEmail(payload: LeadPayload): Promise<void> {
  const { deliverLeadNotificationEmail } = await import("@/lib/lead-notification-email");
  await deliverLeadNotificationEmail(payload);
}
