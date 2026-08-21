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
  // Default ON as last-resort when SMTP/Apps Script fail.
  // Set FORMSUBMIT_FALLBACK=false to disable.
  if (process.env.FORMSUBMIT_FALLBACK?.trim().toLowerCase() === "false") return false;
  return true;
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
    const message =
      process.env.NODE_ENV === "production"
        ? `Email delivery failed (${res.status})`
        : `Resend failed (${res.status}): ${detail.slice(0, 200)}`;
    throw new Error(message);
  }
}

/**
 * Last-resort inbox delivery — no API key required.
 * First production send may need one-click confirmation from FormSubmit email.
 */
async function sendViaFormSubmit(email: OutboundEmail): Promise<void> {
  const inbox = email.to || getLeadInbox();
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
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`FormSubmit failed (${res.status}): ${detail.slice(0, 200)}`);
  }

  const body = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
  if (body.success === false) {
    throw new Error(body.message || "FormSubmit rejected the message");
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

/** Gmail on Vercel often blocks port 465. Try 465 first, then 587 STARTTLS. */
async function sendViaGmail(email: OutboundEmail): Promise<void> {
  const user = getGmailUser()!;
  const pass = getGmailAppPassword()!;
  const tls = { rejectUnauthorized: process.env.NODE_ENV === "production" };

  const attempts: SMTPTransport.Options[] = [
    {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      tls,
      connectionTimeout: 12_000,
      greetingTimeout: 12_000,
      socketTimeout: 20_000,
    },
    {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: { user, pass },
      tls,
      connectionTimeout: 12_000,
      greetingTimeout: 12_000,
      socketTimeout: 20_000,
    },
  ];

  const errors: string[] = [];
  for (const options of attempts) {
    try {
      await sendMailWithTransport(options, email, user);
      console.log("[LEAD-DIAG] nodemailer.sendMail called OK", {
        to: email.to,
        subject: email.subject,
        from: user,
        port: options.port,
      });
      return;
    } catch (error) {
      const detail = error instanceof Error ? error.message : "Gmail send failed";
      errors.push(`port ${options.port}: ${detail}`);
      console.log("[LEAD-DIAG] nodemailer.sendMail FAILED", {
        port: options.port,
        detail,
      });
    }
  }

  throw new Error(
    process.env.NODE_ENV === "production" ? "Email delivery failed" : errors.join(" | "),
  );
}

async function sendViaLegacySmtp(email: OutboundEmail): Promise<void> {
  const user = process.env.SMTP_USER!.trim();
  const pass = getGmailAppPassword() ?? process.env.SMTP_PASS!.trim();

  const options: SMTPTransport.Options = {
    host: process.env.SMTP_HOST!.trim(),
    port: Number(process.env.SMTP_PORT?.trim() || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  };
  await sendMailWithTransport(options, email, email.from);
}

function emailProviderPreference(): "gmail" | "resend" | "auto" {
  const raw = process.env.EMAIL_PROVIDER?.trim().toLowerCase();
  if (raw === "gmail" || raw === "smtp" || raw === "google") return "gmail";
  if (raw === "resend") return "resend";
  return "auto";
}

/**
 * Tries Gmail SMTP (465→587), then legacy SMTP, then Resend, then FormSubmit.
 */
export async function sendOutboundEmail(
  email: OutboundEmail,
): Promise<"resend" | "smtp" | "formsubmit"> {
  logGmailCredentialFingerprintOnce("sendOutboundEmail");
  const preference = emailProviderPreference();
  const gmailUser = getGmailUser();
  const gmailPass = getGmailAppPassword();
  const gmailOk = isGmailConfigured();
  const resendOk = hasResendConfig();
  const legacyOk = hasLegacySmtpConfig();
  const formSubmitOk = formSubmitEnabled();

  console.log("[TRANSPORT-DIAG] sendOutboundEmail entered", {
    preference,
    EMAIL_PROVIDER: process.env.EMAIL_PROVIDER ?? "(unset)",
    envPresent: {
      GMAIL_USER: Boolean(gmailUser),
      GMAIL_APP_PASSWORD: Boolean(gmailPass),
      GMAIL_APP_PASSWORD_len: gmailPass?.length ?? 0,
      RESEND_API_KEY: resendOk,
      SMTP_HOST: Boolean(process.env.SMTP_HOST?.trim()),
      SMTP_USER: Boolean(process.env.SMTP_USER?.trim()),
      SMTP_PASS: Boolean(process.env.SMTP_PASS?.trim()),
      GMAIL_APPS_SCRIPT_URL: Boolean(process.env.GMAIL_APPS_SCRIPT_URL?.trim()),
      FORMSUBMIT_FALLBACK: formSubmitOk,
    },
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

  if (gmailOk) {
    try {
      await sendViaGmail(email);
      console.log("[TRANSPORT-DIAG] Gmail SMTP SUCCESS");
      return "smtp";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      errors.push(`gmail: ${detail}`);
      console.log("[TRANSPORT-DIAG] Gmail SMTP failed — trying next provider", { detail });
      if (forceGmail) throw error;
    }
  }

  if (legacyOk) {
    try {
      await sendViaLegacySmtp(email);
      console.log("[TRANSPORT-DIAG] Legacy SMTP SUCCESS");
      return "smtp";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      errors.push(`legacy-smtp: ${detail}`);
    }
  }

  if (resendOk) {
    try {
      await sendViaResend(email);
      console.log("[TRANSPORT-DIAG] Resend SUCCESS");
      return "resend";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      errors.push(`resend: ${detail}`);
    }
  }

  if (formSubmitOk) {
    const inbox = getLeadInbox().trim().toLowerCase();
    const toInbox = email.to.trim().toLowerCase() === inbox;
    if (!toInbox) {
      errors.push("formsubmit: skipped (only used for Maxwell inbox, not auto-replies)");
    } else {
      try {
        await sendViaFormSubmit(email);
        console.log("[TRANSPORT-DIAG] FormSubmit SUCCESS");
        return "formsubmit";
      } catch (error) {
        const detail = error instanceof Error ? error.message : String(error);
        errors.push(`formsubmit: ${detail}`);
      }
    }
  }

  console.log("[TRANSPORT-DIAG] NO PROVIDER SUCCEEDED", { errors });
  throw new Error(
    process.env.NODE_ENV === "production"
      ? "Email delivery failed"
      : errors.join(" | ") || "Email not configured",
  );
}
