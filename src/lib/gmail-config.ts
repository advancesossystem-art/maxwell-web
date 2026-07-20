/** Gmail credentials for form → email alerts (Google App Password). */

import { createHash } from "crypto";

const FALLBACK_INBOX = "maxwellelectrodealsystems@gmail.com";

function cleanAppPassword(value: string): string {
  return value.replace(/^["']|["']$/g, "").replace(/\s+/g, "");
}

/** Gmail address — prefers GMAIL_USER, falls back to SMTP_USER. */
export function getGmailUser(): string | undefined {
  return process.env.GMAIL_USER?.trim() || process.env.SMTP_USER?.trim();
}

/** 16-char Google App Password — prefers GMAIL_APP_PASSWORD, falls back to SMTP_PASS. */
export function getGmailAppPassword(): string | undefined {
  const raw = process.env.GMAIL_APP_PASSWORD?.trim() || process.env.SMTP_PASS?.trim();
  if (!raw) return undefined;
  return cleanAppPassword(raw);
}

export function isGmailConfigured(): boolean {
  return Boolean(getGmailUser() && getGmailAppPassword());
}

/** Non-secret fingerprint so you can confirm which App Password the process loaded. */
export function getGmailCredentialFingerprint(): {
  user: string | undefined;
  inbox: string;
  source: "GMAIL_APP_PASSWORD" | "SMTP_PASS" | "none";
  passLen: number;
  last4Masked: string;
  fingerprint: string;
} {
  const user = getGmailUser();
  const fromGmail = Boolean(process.env.GMAIL_APP_PASSWORD?.trim());
  const fromSmtp = Boolean(process.env.SMTP_PASS?.trim());
  const pass = getGmailAppPassword();
  const source = pass
    ? fromGmail
      ? "GMAIL_APP_PASSWORD"
      : fromSmtp
        ? "SMTP_PASS"
        : "none"
    : "none";

  return {
    user,
    inbox: getLeadInbox(),
    source,
    passLen: pass?.length ?? 0,
    last4Masked: pass && pass.length >= 4 ? `****${pass.slice(-4)}` : "(none)",
    fingerprint: pass
      ? createHash("sha256").update(pass).digest("hex").slice(0, 8)
      : "(none)",
  };
}

let credentialLogPrinted = false;

/** Log once per process — never prints the full App Password. */
export function logGmailCredentialFingerprintOnce(reason = "startup"): void {
  if (credentialLogPrinted) return;
  credentialLogPrinted = true;
  const fp = getGmailCredentialFingerprint();
  console.log("[GMAIL-CRED] runtime credential loaded", {
    reason,
    nodeEnv: process.env.NODE_ENV,
    user: fp.user ?? "(unset)",
    inbox: fp.inbox,
    passwordSource: fp.source,
    passwordLength: fp.passLen,
    passwordLast4: fp.last4Masked,
    passwordFingerprint: fp.fingerprint,
    note: "Compare passwordFingerprint after regenerating App Password — if unchanged, runtime still has the old value.",
  });
}

/** Inbox that receives contact / lead form alerts. */
export function getLeadInbox(): string {
  return process.env.LEAD_NOTIFICATION_EMAIL?.trim() || getGmailUser() || FALLBACK_INBOX;
}

/** Gmail always sends from the authenticated account. */
export function getGmailFromAddress(): string {
  const user = getGmailUser();
  if (user) return user;
  return FALLBACK_INBOX;
}
