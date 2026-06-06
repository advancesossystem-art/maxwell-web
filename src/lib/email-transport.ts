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

function hasSmtpConfig(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim(),
  );
}

export function isEmailDeliveryConfigured(): boolean {
  return hasResendConfig() || hasSmtpConfig();
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

function smtpPassword(): string {
  const raw = process.env.SMTP_PASS?.trim() ?? "";
  return raw.replace(/^["']|["']$/g, "").replace(/\s+/g, "");
}

async function sendViaSmtp(email: OutboundEmail): Promise<void> {
  const nodemailer = await import("nodemailer");
  const user = process.env.SMTP_USER!.trim();
  const pass = smtpPassword();
  const host = process.env.SMTP_HOST?.trim().toLowerCase();
  const isGmail = host === "smtp.gmail.com" || user.endsWith("@gmail.com");

  const transporter = isGmail
    ? nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: { user, pass },
      })
    : nodemailer.createTransport({
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

  if (hasSmtpConfig()) {
    await sendViaSmtp(email);
    return "smtp";
  }

  if (hasResendConfig()) {
    await sendViaResend(email);
    return "resend";
  }

  throw new Error(
    "Email not configured. Add Gmail SMTP (SMTP_HOST, SMTP_USER, SMTP_PASS) or RESEND_API_KEY in .env.local",
  );
}
