import { getGoogleScriptUrl } from "@/lib/gmail-script-config";

export type ScriptEmailPayload = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

type ScriptResponse = { success?: boolean; error?: string; _status?: number };

const MAX_REDIRECTS = 5;

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

function isRedirectStatus(status: number): boolean {
  return status === 301 || status === 302 || status === 303 || status === 307 || status === 308;
}

async function postToGoogleScript(url: string, body: string, signal: AbortSignal): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    signal,
    cache: "no-store",
    // GAS always 302s; doPost runs on this POST. Never re-POST the redirect URL (405).
    redirect: "manual",
  });
}

async function getGoogleScript(url: string, signal: AbortSignal): Promise<Response> {
  return fetch(url, {
    method: "GET",
    signal,
    cache: "no-store",
    redirect: "manual",
  });
}

/**
 * GAS web apps: POST to /exec → 302 → GET redirect URL returns doPost JSON output.
 * @see https://tanaikech.github.io/2023/07/25/understanding-flow-of-request-to-web-apps-created-by-google-apps-script/
 */
async function followGoogleScriptRedirect(
  initial: Response,
  signal: AbortSignal,
): Promise<Response> {
  let res = initial;
  let redirects = 0;

  while (isRedirectStatus(res.status) && redirects < MAX_REDIRECTS) {
    const location = res.headers.get("location");
    if (!location) {
      throw new Error("Google Script redirect missing Location header");
    }
    res = await getGoogleScript(location, signal);
    redirects += 1;
  }

  return res;
}

/**
 * GAS web apps always return HTTP 200 from ContentService — errors use `_status` in JSON.
 * Some deployments also return empty/HTML bodies after a successful send.
 */
function readScriptResponse(res: Response, raw: string): { ok: boolean; detail: string } {
  const trimmed = raw.replace(/^\uFEFF/, "").trim();

  if (!trimmed) {
    return res.status >= 200 && res.status < 300
      ? { ok: true, detail: "empty-200" }
      : { ok: false, detail: `HTTP ${res.status}` };
  }

  if (trimmed.startsWith("<")) {
    // GAS occasionally returns an HTML shell even when MailApp already sent.
    return res.status >= 200 && res.status < 300
      ? { ok: true, detail: "html-200" }
      : {
          ok: false,
          detail:
            "Google Script returned HTML (check deployment access is 'Anyone' and URL is the /exec web app URL)",
        };
  }

  let body: ScriptResponse = {};
  try {
    body = JSON.parse(trimmed) as ScriptResponse;
  } catch {
    return res.status >= 200 && res.status < 300
      ? { ok: true, detail: "non-json-200" }
      : { ok: false, detail: "Google Script returned invalid JSON" };
  }

  if (typeof body._status === "number" && body._status >= 400) {
    return { ok: false, detail: body.error || `Script status ${body._status}` };
  }

  if (body.error) {
    return { ok: false, detail: body.error };
  }

  if (body.success === false) {
    return { ok: false, detail: body.error || "Script returned success: false" };
  }

  if (body.success === true || body.success === undefined) {
    return { ok: true, detail: "ok" };
  }

  return { ok: false, detail: body.error || `Unexpected script response (HTTP ${res.status})` };
}

export async function sendViaGoogleAppsScript(payload: ScriptEmailPayload): Promise<void> {
  const url = getGoogleScriptUrl();
  if (!url) {
    throw new Error("Google Apps Script URL is not configured");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 28_000);
  const body = buildScriptBody(payload);

  try {
    const postRes = await postToGoogleScript(url, body, controller.signal);
    const res = isRedirectStatus(postRes.status)
      ? await followGoogleScriptRedirect(postRes, controller.signal)
      : postRes;

    const parsed = readScriptResponse(res, await res.text());
    if (!parsed.ok) {
      // doPost already ran on the initial POST — 405 means redirect was followed with POST (legacy bug).
      if (isRedirectStatus(postRes.status) && res.status === 405) {
        console.warn(
          "[Lead Email] Google Script POST delivered but redirect returned 405 — treating as success",
        );
        return;
      }

      console.error("[Lead Email] Google Script:", parsed.detail);
      if (process.env.NODE_ENV === "production") {
        throw new Error(`Email delivery failed: ${parsed.detail}`);
      }
      throw new Error(`Google Script email failed: ${parsed.detail}`);
    }

    if (parsed.detail !== "ok") {
      console.warn(
        `[Lead Email] Google Script non-standard response (${parsed.detail}) — treating as delivered`,
      );
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      // MailApp often completes after the HTTP client times out — don't fail the form.
      console.warn("[Lead Email] Google Script timed out — email may already have been delivered");
      return;
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

function isScriptConfigError(message: string): boolean {
  return /unauthorized|not configured|invalid json/i.test(message);
}

export function isGoogleScriptConfigError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  return isScriptConfigError(error.message);
}
