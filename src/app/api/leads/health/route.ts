import { apiJson, withApiSecurityHeaders } from "@/lib/api-security";
import { isEmailDeliveryConfigured } from "@/lib/email-transport";
import { isGmailConfigured, getLeadInbox } from "@/lib/gmail-config";
import { isGoogleScriptConfigured } from "@/lib/gmail-script-config";

export const runtime = "nodejs";

/** Public, non-secret health check for form email wiring. */
export async function GET() {
  const gmail = isGmailConfigured();
  const appsScript = isGoogleScriptConfigured();
  const resend = Boolean(process.env.RESEND_API_KEY?.trim());
  const formsubmit = process.env.FORMSUBMIT_FALLBACK?.trim().toLowerCase() !== "false";
  const configured = isEmailDeliveryConfigured() || appsScript;

  return withApiSecurityHeaders(
    apiJson({
      ok: configured,
      inbox: getLeadInbox(),
      providers: {
        gmailSmtp: gmail,
        appsScript,
        resend,
        formSubmitFallback: formsubmit,
      },
      hint: configured
        ? "Lead forms can deliver email"
        : "Configure GMAIL_APP_PASSWORD or GMAIL_APPS_SCRIPT_URL on Vercel",
    }),
  );
}

export function POST() {
  return apiJson({ error: "Method not allowed" }, { status: 405 });
}
