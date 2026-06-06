import type { LeadPayload } from "@/lib/crm";
import { isEmailDeliveryConfigured, sendOutboundEmail } from "@/lib/email-transport";
import { sanitizeEmailHeader } from "@/lib/security/sanitize";

/** Inbox for consultation, contact, estimate, and newsletter lead alerts */
export const LEAD_NOTIFICATION_EMAIL = "maxwellelctrodealsystems@gmail.com";

const SOURCE_LABELS: Record<string, string> = {
  contact: "Contact form",
  "book-consultation": "Consultation request",
  "discovery-call": "Discovery call request",
  "get-estimate": "Project estimate",
  "project-calculator": "Project calculator",
  careers: "Careers application",
  newsletter: "Newsletter signup",
};

function sourceLabel(source: string): string {
  if (SOURCE_LABELS[source]) return SOURCE_LABELS[source];
  if (source.startsWith("tool-")) return `Tool lead (${source.replace(/^tool-/, "")})`;
  return source;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value?: string | number): string {
  if (value === undefined || value === null || String(value).trim() === "") return "";
  return `<tr><td style="padding:8px 12px;font-weight:600;color:#475569;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#0f172a">${escapeHtml(String(value))}</td></tr>`;
}

export function buildLeadEmailSubject(payload: LeadPayload): string {
  return sanitizeEmailHeader(`[Maxwell] ${sourceLabel(payload.source)} — ${payload.name}`);
}

export function buildLeadEmailText(payload: LeadPayload): string {
  const lines = [
    `New lead from ${sourceLabel(payload.source)}`,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone && `Phone: ${payload.phone}`,
    payload.company && `Company: ${payload.company}`,
    payload.projectType && `Service / project: ${payload.projectType}`,
    payload.industry && `Industry: ${payload.industry}`,
    payload.budget && `Budget: ${payload.budget}`,
    payload.timeline && `Timeline: ${payload.timeline}`,
    payload.scope && `Scope: ${payload.scope}`,
    payload.features?.length && `Features: ${payload.features.join(", ")}`,
    payload.message && `Message:\n${payload.message}`,
    payload.estimate &&
      `Estimate: ₹${payload.estimate.costMin?.toLocaleString("en-IN")} – ₹${payload.estimate.costMax?.toLocaleString("en-IN")} (${payload.estimate.developmentTime}, team ${payload.estimate.teamSize})`,
    "",
    `Lead score: ${payload.leadScore.score} (${payload.leadScore.tier})`,
    `Submitted: ${payload.submittedAt}`,
  ].filter(Boolean) as string[];
  return lines.join("\n");
}

export function buildLeadEmailHtml(payload: LeadPayload): string {
  const estimate =
    payload.estimate?.costMin != null && payload.estimate?.costMax != null
      ? `₹${payload.estimate.costMin.toLocaleString("en-IN")} – ₹${payload.estimate.costMax.toLocaleString("en-IN")} (${payload.estimate.developmentTime ?? "—"})`
      : undefined;

  const rows = [
    row("Source", sourceLabel(payload.source)),
    row("Name", payload.name),
    row("Email", payload.email),
    row("Phone", payload.phone),
    row("Company", payload.company),
    row("Service / project", payload.projectType),
    row("Industry", payload.industry),
    row("Budget", payload.budget),
    row("Timeline", payload.timeline),
    row("Scope", payload.scope),
    row("Features", payload.features?.join(", ")),
    row("Message", payload.message),
    row("Estimate", estimate),
    row("Lead score", `${payload.leadScore.score} (${payload.leadScore.tier})`),
    row("Submitted", new Date(payload.submittedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })),
  ].join("");

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;background:#f8fafc;padding:24px">
<table style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden">
<tr><td style="padding:20px 24px;background:#4f46e5;color:#fff;font-size:18px;font-weight:700">New website lead</td></tr>
<tr><td style="padding:8px 8px 16px"><table width="100%" cellpadding="0" cellspacing="0">${rows}</table></td></tr>
</table>
<p style="max-width:560px;margin:16px auto 0;font-size:12px;color:#64748b">Reply to this email to reach the prospect at ${escapeHtml(payload.email)}.</p>
</body></html>`;
}

function resolveFromAddress(): string {
  if (process.env.RESEND_FROM_EMAIL?.trim()) {
    return process.env.RESEND_FROM_EMAIL.trim();
  }
  if (process.env.SMTP_FROM?.trim()) {
    return process.env.SMTP_FROM.trim();
  }
  const user = process.env.SMTP_USER?.trim();
  if (user) {
    return `Maxwell Electrodeal <${user}>`;
  }
  return "Maxwell Electrodeal <maxwellelctrodealsystems@gmail.com>";
}

export async function deliverLeadNotificationEmail(payload: LeadPayload): Promise<void> {
  const to = process.env.LEAD_NOTIFICATION_EMAIL?.trim() || LEAD_NOTIFICATION_EMAIL;
  const subject = buildLeadEmailSubject(payload);
  const text = buildLeadEmailText(payload);
  const html = buildLeadEmailHtml(payload);

  if (!isEmailDeliveryConfigured()) {
    console.warn(
      "[Lead Email] No email provider configured — lead saved in logs only. Set Gmail SMTP (SMTP_*) or RESEND_API_KEY in .env.local",
    );
    console.log("[Lead Email preview]", { to, subject, text });
    return;
  }

  const provider = await sendOutboundEmail({
    to,
    from: resolveFromAddress(),
    replyTo: sanitizeEmailHeader(payload.email),
    subject,
    html,
    text,
  });

  if (process.env.NODE_ENV !== "production") {
    console.log(`[Lead Email] Sent via ${provider} to ${to}`);
  }
}
