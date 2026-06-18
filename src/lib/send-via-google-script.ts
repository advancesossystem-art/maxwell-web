import { getGoogleScriptUrl } from "@/lib/gmail-script-config";

export type ScriptEmailPayload = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export async function sendViaGoogleAppsScript(payload: ScriptEmailPayload): Promise<void> {
  const url = getGoogleScriptUrl();
  if (!url) {
    throw new Error("Google Apps Script URL is not configured");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25_000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.GMAIL_APPS_SCRIPT_SECRET
          ? { "X-Maxwell-Relay-Secret": process.env.GMAIL_APPS_SCRIPT_SECRET }
          : {}),
      },
      body: JSON.stringify({
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
        text: payload.text,
        replyTo: payload.replyTo,
        ...(process.env.GMAIL_APPS_SCRIPT_SECRET
          ? { secret: process.env.GMAIL_APPS_SCRIPT_SECRET }
          : {}),
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    const raw = await res.text();
    let body: { success?: boolean; error?: string; _status?: number } = {};
    try {
      body = raw ? (JSON.parse(raw) as typeof body) : {};
    } catch {
      throw new Error("Google Script returned invalid response");
    }

    if (!res.ok || body.error || body.success !== true) {
      const detail = body.error || `HTTP ${res.status}`;
      if (process.env.NODE_ENV === "production") {
        throw new Error("Email delivery failed");
      }
      throw new Error(`Google Script email failed: ${detail}`);
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Email delivery timed out");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
