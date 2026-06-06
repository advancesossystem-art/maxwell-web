import { getGmailAppPassword, getGmailUser, isGmailConfigured } from "@/lib/gmail-config";

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

export function isEmailDeliveryConfigured(): boolean {
  return isGmailConfigured() || hasResendConfig() || hasLegacySmtpConfig();
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

async function sendViaGmail(email: OutboundEmail): Promise<void> {
  const nodemailer = await import("nodemailer");
  const user = getGmailUser()!;
  const pass = getGmailAppPassword()!;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: user,
      to: email.to,
      replyTo: email.replyTo,
      subject: email.subject,
      html: email.html,
      text: email.text,
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Gmail send failed";
    if (process.env.NODE_ENV === "production") {
      throw new Error("Email delivery failed");
    }
    throw new Error(detail);
  }
}

async function sendViaLegacySmtp(email: OutboundEmail): Promise<void> {
  const nodemailer = await import("nodemailer");
  const user = process.env.SMTP_USER!.trim();
  const pass = getGmailAppPassword() ?? process.env.SMTP_PASS!.trim();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!.trim(),
    port: Number(process.env.SMTP_PORT?.trim() || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: email.from,
    to: email.to,
    replyTo: email.replyTo,
    subject: email.subject,
    html: email.html,
    text: email.text,
  });
}

function emailProviderPreference(): "gmail" | "resend" | "auto" {
  const raw = process.env.EMAIL_PROVIDER?.trim().toLowerCase();
  if (raw === "gmail" || raw === "smtp" || raw === "google") return "gmail";
  if (raw === "resend") return "resend";
  return "auto";
}

/**
 * Gmail SMTP (Google App Password) is the default when configured.
 * Set EMAIL_PROVIDER=resend to force Resend instead.
 */
export async function sendOutboundEmail(email: OutboundEmail): Promise<"resend" | "smtp"> {
  const preference = emailProviderPreference();

  if (preference === "resend") {
    if (!hasResendConfig()) {
      throw new Error("EMAIL_PROVIDER=resend but RESEND_API_KEY is missing");
    }
    await sendViaResend(email);
    return "resend";
  }

  if (isGmailConfigured()) {
    await sendViaGmail(email);
    return "smtp";
  }

  if (hasLegacySmtpConfig()) {
    await sendViaLegacySmtp(email);
    return "smtp";
  }

  if (hasResendConfig()) {
    await sendViaResend(email);
    return "resend";
  }

  throw new Error(
    "Email not configured. Add GMAIL_USER + GMAIL_APP_PASSWORD in .env.local (see .env.local.example)",
  );
}
