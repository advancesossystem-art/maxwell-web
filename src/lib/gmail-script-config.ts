/**
 * Google Apps Script web app URL (deploy scripts/gmail-form-relay.gs).
 * When set, production uses this instead of Gmail SMTP — no App Password on Vercel.
 *
 * Override with env GMAIL_APPS_SCRIPT_URL if preferred.
 */
export const GMAIL_APPS_SCRIPT_URL = "";

export function getGoogleScriptUrl(): string | undefined {
  const fromEnv = process.env.GMAIL_APPS_SCRIPT_URL?.trim();
  if (fromEnv) return fromEnv;
  if (GMAIL_APPS_SCRIPT_URL.trim()) return GMAIL_APPS_SCRIPT_URL.trim();
  return undefined;
}

export function isGoogleScriptConfigured(): boolean {
  return Boolean(getGoogleScriptUrl());
}
