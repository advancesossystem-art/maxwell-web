/** Gmail credentials for form → email alerts (Google App Password). */

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
