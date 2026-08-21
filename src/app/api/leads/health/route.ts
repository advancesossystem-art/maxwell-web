import { apiJson, withApiSecurityHeaders } from "@/lib/api-security";
import { isEmailDeliveryConfigured } from "@/lib/email-transport";
import { isGmailConfigured, getLeadInbox } from "@/lib/gmail-config";
import { isGoogleScriptConfigured } from "@/lib/gmail-script-config";

export const runtime = "nodejs";

function maskInbox(email: string): string {
  const [local, domain] = email.split("@");
  if (!local || !domain) return "(invalid)";
  const visible = local.slice(0, 2);
  return `${visible}${"*".repeat(Math.max(local.length - 2, 1))}@${domain}`;
}

/** Public, non-secret health check for form email wiring. */
export async function GET() {
  const gmail = isGmailConfigured();
  const appsScript = isGoogleScriptConfigured();
  const resend = Boolean(process.env.RESEND_API_KEY?.trim());
  const formsubmit = process.env.FORMSUBMIT_FALLBACK?.trim().toLowerCase() !== "false";
  const configured = isEmailDeliveryConfigured() || appsScript;
  const inbox = getLeadInbox();
  const rawLeadEnv = process.env.LEAD_NOTIFICATION_EMAIL?.trim() ?? "";
  const leadEnvLooksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawLeadEnv);

  return withApiSecurityHeaders(
    apiJson({
      ok: configured,
      inboxMasked: maskInbox(inbox),
      leadEnvValid: rawLeadEnv ? leadEnvLooksLikeEmail : true,
      providers: {
        gmailSmtp: gmail,
        appsScript,
        resend,
        formSubmitFallback: formsubmit,
      },
      hint: !rawLeadEnv || leadEnvLooksLikeEmail
        ? configured
          ? "Lead forms can deliver email"
          : "Configure GMAIL_APP_PASSWORD or GMAIL_APPS_SCRIPT_URL on Vercel"
        : "LEAD_NOTIFICATION_EMAIL on Vercel is not an email — set it to maxwellelectrodealsystems@gmail.com (App Password belongs only in GMAIL_APP_PASSWORD)",
    }),
  );
}

export function POST() {
  return apiJson({ error: "Method not allowed" }, { status: 405 });
}
