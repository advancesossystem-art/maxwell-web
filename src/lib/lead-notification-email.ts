import type { LeadPayload } from "@/lib/crm";
import { isEmailDeliveryConfigured, sendOutboundEmail } from "@/lib/email-transport";
import { getGmailFromAddress, getLeadInbox } from "@/lib/gmail-config";
import { isGoogleScriptConfigured } from "@/lib/gmail-script-config";
import { isGoogleScriptConfigError, sendViaGoogleAppsScript } from "@/lib/send-via-google-script";
import { sanitizeEmailHeader } from "@/lib/security/sanitize";

/** Fallback inbox if env vars are missing */
export const LEAD_NOTIFICATION_EMAIL = "maxwellelectrodealsystems@gmail.com";

const SOURCE_LABELS: Record<string, string> = {
  contact: "Contact form",
  "book-consultation": "Consultation request",
  "discovery-call": "Discovery call request",
  "get-estimate": "Project estimate",
  "project-calculator": "Project calculator",
  careers: "Careers application",
  newsletter: "Newsletter signup",
  "exit-intent": "Exit intent popup",
  "homepage-assessment": "Homepage assessment",
};

function sourceLabel(source: string): string {
  if (SOURCE_LABELS[source]) return SOURCE_LABELS[source];
  if (source.startsWith("tool-")) return `Tool lead (${source.replace(/^tool-/, "")})`;
  if (source.startsWith("service-")) return `Service page (${source.replace(/^service-/, "")})`;
  if (source.startsWith("industry-")) return `Industry page (${source.replace(/^industry-/, "")})`;
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

function extractCareersPosition(payload: LeadPayload): string | undefined {
  const match = payload.message?.match(/Career application for:\s*(.+)/i);
  return match?.[1]?.split("\n")[0]?.trim();
}

export function buildLeadEmailSubject(payload: LeadPayload): string {
  if (payload.source === "careers") {
    const position = extractCareersPosition(payload);
    return sanitizeEmailHeader(
      position
        ? `[Maxwell Careers] ${position} — ${payload.name}`
        : `[Maxwell Careers] Job application — ${payload.name}`,
    );
  }
  return sanitizeEmailHeader(`[Maxwell] ${sourceLabel(payload.source)} — ${payload.name}`);
}

export function buildLeadEmailText(payload: LeadPayload): string {
  const careersPosition =
    payload.source === "careers" ? extractCareersPosition(payload) : undefined;

  const lines = [
    payload.source === "careers"
      ? `New job application from ${payload.name}`
      : `New lead from ${sourceLabel(payload.source)}`,
    "",
    careersPosition && `Position: ${careersPosition}`,
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

  const careersPosition =
    payload.source === "careers" ? extractCareersPosition(payload) : undefined;

  const rows = [
    row("Source", sourceLabel(payload.source)),
    row("Position applied for", careersPosition),
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

  const headerTitle =
    payload.source === "careers" ? "New job application" : "New website lead";
  const headerColor = payload.source === "careers" ? "#0f766e" : "#4f46e5";

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;background:#f8fafc;padding:24px">
<table style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden">
<tr><td style="padding:20px 24px;background:${headerColor};color:#fff;font-size:18px;font-weight:700">${headerTitle}</td></tr>
<tr><td style="padding:8px 8px 16px"><table width="100%" cellpadding="0" cellspacing="0">${rows}</table></td></tr>
</table>
<p style="max-width:560px;margin:16px auto 0;font-size:12px;color:#64748b">Reply to this email to reach the prospect at ${escapeHtml(payload.email)}.</p>
</body></html>`;
}

function resolveFromAddress(): string {
  if (process.env.RESEND_FROM_EMAIL?.trim()) {
    return process.env.RESEND_FROM_EMAIL.trim();
  }
  return getGmailFromAddress();
}

function leadReplyTo(payload: LeadPayload, inbox: string): string | undefined {
  const prospect = sanitizeEmailHeader(payload.email);
  if (!prospect || prospect.toLowerCase() === inbox.trim().toLowerCase()) {
    return undefined;
  }
  return prospect;
}

async function sendLeadInboxViaSmtp(
  payload: LeadPayload,
  to: string,
  subject: string,
  text: string,
  html: string,
): Promise<void> {
  const provider = await sendOutboundEmail({
    to,
    from: resolveFromAddress(),
    replyTo: leadReplyTo(payload, to),
    subject,
    html,
    text,
  });

  if (process.env.NODE_ENV !== "production") {
    console.log(`[Lead Email] Sent via ${provider} to ${to}`);
  }
}

export async function deliverLeadNotificationEmail(payload: LeadPayload): Promise<void> {
  const to = getLeadInbox();
  const subject = buildLeadEmailSubject(payload);
  const text = buildLeadEmailText(payload);
  const html = buildLeadEmailHtml(payload);
  const replyTo = leadReplyTo(payload, to);

  if (!isGoogleScriptConfigured() && !isEmailDeliveryConfigured()) {
    const hint =
      "Set GMAIL_APPS_SCRIPT_URL (recommended for production) or GMAIL_USER + GMAIL_APP_PASSWORD";
    if (process.env.NODE_ENV === "production") {
      throw new Error(`Form email not configured. ${hint}`);
    }
    console.warn(`[Lead Email] ${hint}`);
    console.log("[Lead Email preview]", { to, subject, text });
    return;
  }

  if (isGoogleScriptConfigured()) {
    try {
      await sendViaGoogleAppsScript({ to, subject, html, text, replyTo });
      if (process.env.NODE_ENV !== "production") {
        console.log(`[Lead Email] Sent via Google Apps Script to ${to}`);
      }
      return;
    } catch (scriptError) {
      const detail = scriptError instanceof Error ? scriptError.message : "Google Script failed";
      // Only fall back to SMTP for clear config/auth failures — not after a likely successful send.
      if (!isEmailDeliveryConfigured() || !isGoogleScriptConfigError(scriptError)) {
        throw scriptError;
      }
      console.error(`[Lead Email] Google Script failed (${detail}), trying SMTP fallback`);
    }
  }

  await sendLeadInboxViaSmtp(payload, to, subject, text, html);
}

function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || fullName;
}

export function buildLeadAutoReplySubject(payload: LeadPayload): string {
  return sanitizeEmailHeader(`Thanks ${firstName(payload.name)} — We'll be in touch within 4 hours`);
}

export function buildLeadAutoReplyHtml(payload: LeadPayload): string {
  const name = escapeHtml(firstName(payload.name));
  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;background:#f8fafc;padding:24px">
<table style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden">
<tr><td style="padding:24px">
<p style="margin:0 0 12px;font-size:16px;color:#0f172a">Hi ${name},</p>
<p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#334155">Thank you for reaching out to Maxwell Electrodeal. We received your request and a solutions consultant will respond within <strong>4 business hours</strong>.</p>
<p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#334155"><strong>What happens next:</strong></p>
<ul style="margin:0 0 16px;padding-left:20px;font-size:14px;line-height:1.7;color:#475569">
<li>We review your requirements and current processes</li>
<li>A consultant calls or emails with tailored recommendations</li>
<li>You receive a clear scope, timeline, and investment range — no obligation</li>
</ul>
<p style="margin:0;font-size:14px;color:#64748b">Need to speak sooner? Reply to this email or call us at +91 95868 68538.</p>
</td></tr>
</table>
</body></html>`;
}

export function buildLeadAutoReplyText(payload: LeadPayload): string {
  const name = firstName(payload.name);
  return [
    `Hi ${name},`,
    "",
    "Thank you for reaching out to Maxwell Electrodeal. We received your request and will respond within 4 business hours.",
    "",
    "What happens next:",
    "- We review your requirements",
    "- A consultant follows up with tailored recommendations",
    "- You receive scope, timeline, and investment range — no obligation",
    "",
    "Questions? Reply to this email or call +91 95868 68538.",
  ].join("\n");
}

export async function sendLeadAutoReplyEmail(payload: LeadPayload): Promise<void> {
  if (payload.source === "newsletter" || payload.source === "careers") return;

  const subject = buildLeadAutoReplySubject(payload);
  const text = buildLeadAutoReplyText(payload);
  const html = buildLeadAutoReplyHtml(payload);

  if (!isGoogleScriptConfigured() && !isEmailDeliveryConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[Lead Auto-Reply preview]", { to: payload.email, subject });
    }
    return;
  }

  if (isGoogleScriptConfigured()) {
    await sendViaGoogleAppsScript({
      to: payload.email,
      subject,
      html,
      text,
    });
    return;
  }

  await sendOutboundEmail({
    to: payload.email,
    from: resolveFromAddress(),
    replyTo: getLeadInbox(),
    subject,
    html,
    text,
  });
}
