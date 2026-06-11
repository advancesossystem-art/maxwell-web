import { z } from "zod";

const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  LEAD_WEBHOOK_URL: z.string().url().optional(),
  LEAD_WEBHOOK_SECRET: z.string().min(16).optional(),
  HUBSPOT_WEBHOOK_URL: z.string().url().optional(),
  ZOHO_WEBHOOK_URL: z.string().url().optional(),
  SALESFORCE_WEBHOOK_URL: z.string().url().optional(),
  LEAD_NOTIFICATION_EMAIL: z.string().email().optional(),
  GMAIL_USER: z.string().email().optional(),
  GMAIL_APP_PASSWORD: z.string().min(16).optional(),
  RESEND_API_KEY: z.string().min(1).optional(),
  RESEND_FROM_EMAIL: z.string().min(3).optional(),
  EMAIL_PROVIDER: z.enum(["gmail", "smtp", "google", "resend", "auto"]).optional(),
  SMTP_HOST: z.string().min(1).optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_SECURE: z.enum(["true", "false"]).optional(),
  SMTP_USER: z.string().min(1).optional(),
  SMTP_PASS: z.string().min(1).optional(),
  SMTP_FROM: z.string().min(3).optional(),
  ADMIN_AUDIT_TOKEN: z.string().min(16).optional(),
  ENABLE_PORTAL_DEMO: z.enum(["true", "false"]).optional(),
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_META_PIXEL_ID: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_CALENDLY_URL: z.string().url().optional(),
  NEXT_PUBLIC_CLARITY_PROJECT_ID: z.string().optional(),
  NEXT_PUBLIC_ENABLE_PORTAL_DEMO: z.enum(["true", "false"]).optional(),
});

export type ServerEnv = z.infer<typeof serverSchema>;
export type ClientEnv = z.infer<typeof clientSchema>;

export function getServerEnv(): ServerEnv {
  return serverSchema.parse(process.env);
}

export function getClientEnv(): ClientEnv {
  return clientSchema.parse({
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL,
    NEXT_PUBLIC_CLARITY_PROJECT_ID: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
    NEXT_PUBLIC_ENABLE_PORTAL_DEMO: process.env.NEXT_PUBLIC_ENABLE_PORTAL_DEMO,
  });
}

export const secretManagementChecklist = [
  "Store all secrets in hosting env vars (Production only) — never in git",
  "Never commit .env.local — use .env.example as template",
  "Set ADMIN_AUDIT_TOKEN (min 16 chars) before exposing /admin in production",
  "Set ENABLE_PORTAL_DEMO=false in production unless demo is intentional",
  "Set NEXT_PUBLIC_ENABLE_PORTAL_DEMO=true when portal demo is enabled in production",
  "Set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN for distributed API rate limits",
  "Optional LEAD_WEBHOOK_SECRET — Bearer token on outbound CRM webhooks",
  "Rotate GMAIL_APP_PASSWORD and API keys if ever exposed in chat or screenshots",
  "Use separate env vars for Preview vs Production on Vercel",
  "Enable Vercel Deployment Protection for preview URLs",
  "Only NEXT_PUBLIC_* vars are browser-visible — never put GMAIL_APP_PASSWORD or API keys there",
] as const;
