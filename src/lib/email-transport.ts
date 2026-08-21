import { getGmailAppPassword, getGmailUser, isGmailConfigured, logGmailCredentialFingerprintOnce, getLeadInbox } from "@/lib/gmail-config";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export type OutboundEmail = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
};

function hasResendConfig(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

function hasLegacySmtpConfig(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim(),
  );
}

function formSubmitEnabled(): boolean {
  if (process.env.FORMSUBMIT_FALLBACK?.trim().toLowerCase() === "false") return false;
  return true;
}

/** Vercel serverless often cannot open smtp.gmail.com — skip slow timeouts. */
function isVercelRuntime(): boolean {
  return Boolean(process.env.VERCEL || process.env.VERCEL_ENV);
}

export function isEmailDeliveryConfigured(): boolean {
  return isGmailConfigured() || hasResendConfig() || hasLegacySmtpConfig() || formSubmitEnabled();
}

async function sendViaResend(email: OutboundEmail): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY!.trim();
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: email.from,
      to: [email.to],
      reply_to: email.replyTo,
      subject: email.subject,
      html: email.html,
      text: email.text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(
      process.env.NODE_ENV === "production"
        ? `Email delivery failed (${res.status})`
        : `Resend failed (${res.status}): ${detail.slice(0, 200)}`,
    );
  }
}

/**
 * Fast inbox delivery — no App Password on Vercel.
 * First ever send: FormSubmit emails maxwellelectrodealsystems@gmail.com
 * an activation link — click it once, then leads arrive normally.
 */
async function sendViaFormSubmit(email: OutboundEmail): Promise<void> {
  const inbox = email.to || getLeadInbox();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: email.subject,
        _template: "table",
        _captcha: "false",
        _replyto: email.replyTo || undefined,
        message: email.text,
        html: email.html,
        from_site: "maxwellelectrodeal.com",
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const detail = await res.text();
      throw new Error(`FormSubmit failed (${res.status}): ${detail.slice(0, 200)}`);
    }

    const body = (await res.json().catch(() => ({}))) as {
      success?: string | boolean;
      message?: string;
    };
    if (body.success === false) {
      throw new Error(body.message || "FormSubmit rejected the message");
    }
  } finally {
    clearTimeout(timeout);
  }
}

async function sendMailWithTransport(
  options: SMTPTransport.Options,
  email: OutboundEmail,
  from: string,
): Promise<void> {
  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.createTransport(options);
  await transporter.sendMail({
    from,
    to: email.to,
    replyTo: email.replyTo,
    subject: email.subject,
    html: email.html,
    text: email.text,
  });
}

async function sendViaGmail(email: OutboundEmail): Promise<void> {
  const user = getGmailUser()!;
  const pass = getGmailAppPassword()!;
  const tls = { rejectUnauthorized: process.env.NODE_ENV === "production" };
  // Short timeouts — on Vercel SMTP usually hangs; fail fast to FormSubmit.
  const timeoutMs = isVercelRuntime() ? 4_000 : 12_000;

  const attempts: SMTPTransport.Options[] = [
    {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      tls,
      connectionTimeout: timeoutMs,
      greetingTimeout: timeoutMs,
      socketTimeout: timeoutMs + 2_000,
    },
    {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: { user, pass },
      tls,
      connectionTimeout: timeoutMs,
      greetingTimeout: timeoutMs,
      socketTimeout: timeoutMs + 2_000,
    },
  ];

  // On Vercel only try one port — both hang the same way.
  const toTry = isVercelRuntime() ? attempts.slice(0, 1) : attempts;
  const errors: string[] = [];

  for (const options of toTry) {
    try {
      await sendMailWithTransport(options, email, user);
      console.log("[LEAD-DIAG] nodemailer.sendMail called OK", {
        to: email.to,
        port: options.port,
      });
      return;
    } catch (error) {
      const detail = error instanceof Error ? error.message : "Gmail send failed";
      errors.push(`port ${options.port}: ${detail}`);
      console.log("[LEAD-DIAG] nodemailer.sendMail FAILED", { port: options.port, detail });
    }
  }

  throw new Error(
    process.env.NODE_ENV === "production" ? "Email delivery failed" : errors.join(" | "),
  );
}

async function sendViaLegacySmtp(email: OutboundEmail): Promise<void> {
  const user = process.env.SMTP_USER!.trim();
  const pass = getGmailAppPassword() ?? process.env.SMTP_PASS!.trim();
  await sendMailWithTransport(
    {
      host: process.env.SMTP_HOST!.trim(),
      port: Number(process.env.SMTP_PORT?.trim() || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user, pass },
      connectionTimeout: 8_000,
      greetingTimeout: 8_000,
      socketTimeout: 10_000,
    },
    email,
    email.from,
  );
}

function emailProviderPreference(): "gmail" | "resend" | "auto" {
  const raw = process.env.EMAIL_PROVIDER?.trim().toLowerCase();
  if (raw === "gmail" || raw === "smtp" || raw === "google") return "gmail";
  if (raw === "resend") return "resend";
  return "auto";
}

/**
 * Production (Vercel): FormSubmit first (fast), then Resend, then quick Gmail try.
 * Local: Gmail first, then FormSubmit.
 */
export async function sendOutboundEmail(
  email: OutboundEmail,
): Promise<"resend" | "smtp" | "formsubmit"> {
  logGmailCredentialFingerprintOnce("sendOutboundEmail");
  const preference = emailProviderPreference();
  const gmailOk = isGmailConfigured();
  const resendOk = hasResendConfig();
  const legacyOk = hasLegacySmtpConfig();
  const formSubmitOk = formSubmitEnabled();
  const onVercel = isVercelRuntime();
  const inbox = getLeadInbox().trim().toLowerCase();
  const toInbox = email.to.trim().toLowerCase() === inbox;

  console.log("[TRANSPORT-DIAG] sendOutboundEmail entered", {
    preference,
    onVercel,
    toInbox,
    branchFlags: { gmailOk, resendOk, legacyOk, formSubmitOk },
    to: email.to,
    subject: email.subject,
  });

  if (preference === "resend") {
    if (!hasResendConfig()) {
      throw new Error("EMAIL_PROVIDER=resend but RESEND_API_KEY is missing");
    }
    await sendViaResend(email);
    return "resend";
  }

  const forceGmail = preference === "gmail";
  const errors: string[] = [];

  // Vercel: hit FormSubmit first for Maxwell inbox (SMTP hangs ~30–60s).
  if (onVercel && formSubmitOk && toInbox && !forceGmail) {
    try {
      console.log("[TRANSPORT-DIAG] PROVIDER SELECTED: formsubmit (Vercel primary)");
      await sendViaFormSubmit(email);
      console.log("[TRANSPORT-DIAG] FormSubmit SUCCESS");
      return "formsubmit";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      errors.push(`formsubmit: ${detail}`);
      console.log("[TRANSPORT-DIAG] FormSubmit failed — trying next", { detail });
    }
  }

  if (gmailOk && (!onVercel || forceGmail || !toInbox)) {
    try {
      await sendViaGmail(email);
      console.log("[TRANSPORT-DIAG] Gmail SMTP SUCCESS");
      return "smtp";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      errors.push(`gmail: ${detail}`);
      if (forceGmail) throw error;
    }
  } else if (gmailOk && onVercel) {
    // Optional quick SMTP attempt after FormSubmit failed
    try {
      await sendViaGmail(email);
      return "smtp";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      errors.push(`gmail: ${detail}`);
    }
  }

  if (legacyOk) {
    try {
      await sendViaLegacySmtp(email);
      return "smtp";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      errors.push(`legacy-smtp: ${detail}`);
    }
  }

  if (resendOk) {
    try {
      await sendViaResend(email);
      return "resend";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      errors.push(`resend: ${detail}`);
    }
  }

  // Non-Vercel / auto-reply fallback to FormSubmit for inbox only
  if (formSubmitOk && toInbox) {
    try {
      await sendViaFormSubmit(email);
      return "formsubmit";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      errors.push(`formsubmit: ${detail}`);
    }
  }

  console.log("[TRANSPORT-DIAG] NO PROVIDER SUCCEEDED", { errors });
  throw new Error(
    process.env.NODE_ENV === "production"
      ? "Email delivery failed"
      : errors.join(" | ") || "Email not configured",
  );
}
