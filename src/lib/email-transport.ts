import { getGmailAppPassword, getGmailUser, isGmailConfigured, logGmailCredentialFingerprintOnce } from "@/lib/gmail-config";
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

  const options: SMTPTransport.Options = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
    // Local Windows antivirus / corporate proxies often intercept SMTP TLS
    tls: { rejectUnauthorized: process.env.NODE_ENV === "production" },
  };
  const transporter = nodemailer.createTransport(options);

  try {
    await transporter.sendMail({
      from: user,
      to: email.to,
      replyTo: email.replyTo,
      subject: email.subject,
      html: email.html,
      text: email.text,
    });
    console.log("[LEAD-DIAG] nodemailer.sendMail called OK", {
      to: email.to,
      subject: email.subject,
      from: user,
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Gmail send failed";
    console.log("[LEAD-DIAG] nodemailer.sendMail FAILED", { detail });
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

  const options: SMTPTransport.Options = {
    host: process.env.SMTP_HOST!.trim(),
    port: Number(process.env.SMTP_PORT?.trim() || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  };
  const transporter = nodemailer.createTransport(options);

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
  logGmailCredentialFingerprintOnce("sendOutboundEmail");
  const preference = emailProviderPreference();
  const gmailUser = getGmailUser();
  const gmailPass = getGmailAppPassword();
  const gmailOk = isGmailConfigured();
  const resendOk = hasResendConfig();
  const legacyOk = hasLegacySmtpConfig();

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
    },
    branchFlags: { gmailOk, resendOk, legacyOk },
    to: email.to,
    subject: email.subject,
  });

  if (preference === "resend") {
    console.log("[TRANSPORT-DIAG] PROVIDER SELECTED: resend (forced by EMAIL_PROVIDER)");
    if (!hasResendConfig()) {
      throw new Error("EMAIL_PROVIDER=resend but RESEND_API_KEY is missing");
    }
    try {
      await sendViaResend(email);
      console.log("[TRANSPORT-DIAG] Resend SUCCESS");
      return "resend";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      console.log("[TRANSPORT-DIAG] Resend THREW — no fallback when EMAIL_PROVIDER=resend", { detail });
      throw error;
    }
  }

  if (gmailOk) {
    console.log("[TRANSPORT-DIAG] PROVIDER SELECTED: gmail-smtp", {
      why: "isGmailConfigured() true and EMAIL_PROVIDER is not forcing resend",
      host: "smtp.gmail.com:465",
      user: gmailUser,
      passLen: gmailPass?.length ?? 0,
    });
    try {
      await sendViaGmail(email);
      console.log("[TRANSPORT-DIAG] Gmail SMTP SUCCESS — no other provider attempted");
      return "smtp";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      console.log("[TRANSPORT-DIAG] Gmail SMTP THREW — no fallback to Resend/legacy when Gmail is configured", {
        detail,
        nextProvidersSkipped: [
          legacyOk ? "legacy-smtp (skipped: gmail tried first and threw)" : "legacy-smtp (not configured)",
          resendOk ? "resend (skipped: gmail tried first and threw)" : "resend (not configured)",
        ],
      });
      throw error;
    }
  }

  if (legacyOk) {
    console.log("[TRANSPORT-DIAG] PROVIDER SELECTED: legacy-smtp", {
      why: "Gmail not configured; SMTP_HOST+USER+PASS present",
      host: process.env.SMTP_HOST,
    });
    try {
      await sendViaLegacySmtp(email);
      console.log("[TRANSPORT-DIAG] Legacy SMTP SUCCESS");
      return "smtp";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      console.log("[TRANSPORT-DIAG] Legacy SMTP THREW — no further fallback", { detail });
      throw error;
    }
  }

  if (resendOk) {
    console.log("[TRANSPORT-DIAG] PROVIDER SELECTED: resend", {
      why: "Gmail and legacy SMTP not configured; RESEND_API_KEY present",
    });
    try {
      await sendViaResend(email);
      console.log("[TRANSPORT-DIAG] Resend SUCCESS");
      return "resend";
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      console.log("[TRANSPORT-DIAG] Resend THREW — no further fallback", { detail });
      throw error;
    }
  }

  console.log("[TRANSPORT-DIAG] NO PROVIDER AVAILABLE");
  throw new Error(
    "Email not configured. Add GMAIL_USER + GMAIL_APP_PASSWORD in .env.local (see .env.local.example)",
  );
}
