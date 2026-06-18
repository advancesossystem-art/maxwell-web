import { getGoogleScriptUrl } from "@/lib/gmail-script-config";

export type ScriptEmailPayload = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

type ScriptResponse = { success?: boolean; error?: string; _status?: number };

function buildScriptBody(payload: ScriptEmailPayload): string {
  const replyTo =
    payload.replyTo && payload.replyTo.trim().toLowerCase() !== payload.to.trim().toLowerCase()
      ? payload.replyTo
      : undefined;

  return JSON.stringify({
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
    text: payload.text,
    replyTo,
    ...(process.env.GMAIL_APPS_SCRIPT_SECRET
      ? { secret: process.env.GMAIL_APPS_SCRIPT_SECRET }
      : {}),
  });
}

async function postToGoogleScript(url: string, body: string, signal: AbortSignal): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    signal,
    cache: "no-store",
    // GAS /exec returns 302; auto-follow can downgrade POST → GET and drop the JSON body.
    redirect: "manual",
  });
}

function isRedirectStatus(status: number): boolean {
  return status === 301 || status === 302 || status === 303 || status === 307 || status === 308;
}

async function readScriptResponse(res: Response): Promise<{ ok: boolean; detail: string }> {
  const raw = await res.text();

  if (raw.trimStart().startsWith("<")) {
    return {
      ok: false,
      detail:
        "Google Script returned HTML (check deployment access is 'Anyone' and URL is the /exec web app URL)",
    };
  }

  let body: ScriptResponse = {};
  try {
    body = raw ? (JSON.parse(raw) as ScriptResponse) : {};
  } catch {
    return { ok: false, detail: "Google Script returned invalid JSON" };
  }

  if (!res.ok || body.error || body.success !== true) {
    return { ok: false, detail: body.error || `HTTP ${res.status}` };
  }

  return { ok: true, detail: "ok" };
}

export async function sendViaGoogleAppsScript(payload: ScriptEmailPayload): Promise<void> {
  const url = getGoogleScriptUrl();
  if (!url) {
    throw new Error("Google Apps Script URL is not configured");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25_000);
  const body = buildScriptBody(payload);

  try {
    let res = await postToGoogleScript(url, body, controller.signal);

    if (isRedirectStatus(res.status)) {
      const location = res.headers.get("location");
      if (!location) {
        throw new Error("Google Script redirect missing Location header");
      }
      res = await postToGoogleScript(location, body, controller.signal);
    }

    const parsed = await readScriptResponse(res);
    if (!parsed.ok) {
      console.error("[Lead Email] Google Script:", parsed.detail);
      if (process.env.NODE_ENV === "production") {
        throw new Error("Email delivery failed");
      }
      throw new Error(`Google Script email failed: ${parsed.detail}`);
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
