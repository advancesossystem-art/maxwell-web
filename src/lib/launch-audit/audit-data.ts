import { siteConfig } from "@/lib/constants";
import { secretManagementChecklist } from "@/lib/env";
import { serviceSlugs } from "@/lib/services-data";
import { industrySlugs } from "@/lib/industries-data";
import { toolSlugs } from "@/lib/tools/registry";
import { articleSlugs } from "@/lib/content/articles";
import { guideSlugs } from "@/lib/content/guides";
import { resourceSlugs } from "@/lib/content/resources";
import { reportSlugs } from "@/lib/content/reports";
import { projectSlugs } from "@/lib/projects-data";
import { caseStudySlugs } from "@/lib/case-studies-data";
import { solutionSlugs } from "@/lib/solutions-data";
import { getLocationStaticParams } from "@/lib/locations-data";
import { authors } from "@/lib/content/authors";
import { mockProposals, mockProjects } from "@/lib/portal/mock-data";

export type AuditStatus = "pass" | "warn" | "fail" | "pending";

export type AuditCheck = {
  id: string;
  category: string;
  label: string;
  status: AuditStatus;
  detail: string;
};

function countStaticPages(): number {
  const locations = getLocationStaticParams().length;
  return (
    1 + // home
    25 + // static marketing + legal + portal public
    serviceSlugs.length +
    industrySlugs.length +
    projectSlugs.length +
    caseStudySlugs.length +
    solutionSlugs.length +
    locations +
    articleSlugs.length +
    guideSlugs.length +
    resourceSlugs.length +
    reportSlugs.length +
    authors.length +
    toolSlugs.length +
    mockProposals.length +
    mockProjects.length +
    12 // portal app routes approx
  );
}

export const estimatedPageCount = countStaticPages();

export const performanceTargets = {
  lcp: { target: "≤ 2.5s", score: 95 },
  fcp: { target: "≤ 1.8s", score: 95 },
  inp: { target: "≤ 200ms", score: 95 },
  cls: { target: "≤ 0.1", score: 95 },
  ttfb: { target: "≤ 800ms", score: 95 },
} as const;

export const lighthouseProjections = {
  performance: 96,
  seo: 100,
  accessibility: 97,
  bestPractices: 100,
  note: "Static SSG, minimal JS on content pages, next/font, no render-blocking images. Run Lighthouse on production URL after deploy for verified scores.",
} as const;

export function buildAuditChecks(): AuditCheck[] {
  const hasGtm = Boolean(process.env.NEXT_PUBLIC_GTM_ID);
  const hasGa = Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  const hasCrm = Boolean(
    process.env.LEAD_WEBHOOK_URL ||
      process.env.HUBSPOT_WEBHOOK_URL ||
      process.env.ZOHO_WEBHOOK_URL ||
      process.env.SALESFORCE_WEBHOOK_URL,
  );

  return [
    { id: "perf-ssg", category: "Performance", label: "Static generation (186+ routes)", status: "pass", detail: "Full SSG build; edge-friendly pages" },
    { id: "perf-fonts", category: "Performance", label: "next/font with display swap", status: "pass", detail: "Inter + DM Sans preloaded" },
    { id: "perf-images", category: "Performance", label: "No unoptimized raster LCP", status: "pass", detail: "CSS/SVG-first UI; dynamic OG image route" },
    { id: "perf-packages", category: "Performance", label: "Package import optimization", status: "pass", detail: "animejs, lenis tree-shaken; unused three.js removed" },
    { id: "img-og", category: "Images", label: "Open Graph image", status: "pass", detail: "/opengraph-image (auto-generated PNG)" },
    { id: "img-next", category: "Images", label: "next/image pipeline", status: "warn", detail: "Configured; add Image when photos are introduced" },
    { id: "a11y-skip", category: "Accessibility", label: "Skip to main content", status: "pass", detail: "SkipLink + #main-content landmark" },
    { id: "a11y-forms", category: "Accessibility", label: "Form labels", status: "pass", detail: "FormField with htmlFor across leads/portal" },
    { id: "a11y-focus", category: "Accessibility", label: "Focus states", status: "pass", detail: "focus-visible rings on Button" },
    { id: "a11y-aria", category: "Accessibility", label: "ARIA on nav/FAQ", status: "pass", detail: "Header, FAQ, breadcrumbs labeled" },
    { id: "a11y-motion", category: "Accessibility", label: "Reduced motion", status: "warn", detail: "Hero particles respect prefers-reduced-motion; audit GSAP sections" },
    { id: "seo-meta", category: "SEO", label: "Metadata on all routes", status: "pass", detail: "createMetadata + buildPageMetadata" },
    { id: "seo-canonical", category: "SEO", label: "Canonical URLs", status: "pass", detail: "Per-page canonical in metadata" },
    { id: "seo-schema", category: "SEO", label: "JSON-LD schema", status: "pass", detail: "Organization, Service, FAQ, Article, LocalBusiness" },
    { id: "seo-sitemap", category: "SEO", label: "Segmented sitemaps (8)", status: "pass", detail: "pages, services, industries, work, locations, solutions, content, tools" },
    { id: "seo-og", category: "SEO", label: "Open Graph + Twitter", status: "pass", detail: "OG tags + opengraph-image" },
    { id: "seo-portal-noindex", category: "SEO", label: "Portal auth pages noindex", status: "pass", detail: "Dashboard and inner portal noIndex" },
    { id: "sec-headers", category: "Security", label: "Security headers", status: "pass", detail: "CSP, HSTS, X-Frame-Options via proxy" },
    { id: "sec-rate", category: "Security", label: "API rate limiting", status: "pass", detail: "20 req/min per IP on /api/leads" },
    { id: "sec-zod", category: "Security", label: "Input validation (Zod)", status: "pass", detail: "Leads + newsletter APIs" },
    { id: "sec-honeypot", category: "Security", label: "Honeypot field", status: "pass", detail: "website_url field rejects bots" },
    { id: "sec-portal", category: "Security", label: "Portal production auth", status: "warn", detail: "Demo sessionStorage — replace before enterprise clients" },
    { id: "legal-pages", category: "Legal", label: "Legal document suite", status: "pass", detail: "5 policies + redirects from legacy URLs" },
    { id: "legal-cookie", category: "Legal", label: "Cookie consent banner", status: "pass", detail: "Accept/reject all — UK/EU GDPR" },
    { id: "analytics-dl", category: "Analytics", label: "dataLayer events", status: "pass", detail: "Leads, tools, portal events wired" },
    { id: "analytics-gtm", category: "Analytics", label: "GTM / GA4 scripts", status: hasGtm || hasGa ? "pass" : "pending", detail: hasGtm || hasGa ? "IDs configured" : "Set NEXT_PUBLIC_GTM_ID or GA_MEASUREMENT_ID" },
    { id: "analytics-meta", category: "Analytics", label: "Meta Pixel", status: process.env.NEXT_PUBLIC_META_PIXEL_ID ? "pass" : "pending", detail: "Optional NEXT_PUBLIC_META_PIXEL_ID" },
    { id: "crm-webhooks", category: "CRM", label: "CRM webhooks", status: hasCrm ? "pass" : "pending", detail: hasCrm ? "Webhook URL configured" : "Configure HUBSPOT/ZOHO/SALESFORCE/LEAD_WEBHOOK_URL" },
    { id: "crm-email", category: "CRM", label: "Lead notification email", status: process.env.LEAD_NOTIFICATION_EMAIL ? "warn" : "pending", detail: "Console stub — integrate Resend/SendGrid" },
    { id: "mobile-responsive", category: "Mobile", label: "Responsive layouts", status: "pass", detail: "Tailwind breakpoints sitewide" },
    { id: "mobile-touch", category: "Mobile", label: "Touch targets", status: "pass", detail: "Buttons min 44px; sticky CTAs" },
    { id: "deploy-env", category: "Deployment", label: "Environment template", status: "pass", detail: ".env.example documented" },
  ];
}

export function calculateLaunchScore(checks: AuditCheck[]): number {
  const weights = { pass: 1, warn: 0.85, pending: 0.7, fail: 0 };
  const total = checks.reduce((s, c) => s + weights[c.status], 0);
  return Math.round((total / checks.length) * 100);
}

export const priorityIssues = [
  { priority: "P1", issue: "Configure GTM/GA4 env vars before launch campaigns", area: "Analytics" },
  { priority: "P1", issue: "Connect CRM webhook (HubSpot/Zoho/generic) for lead routing", area: "CRM" },
  { priority: "P2", issue: "Replace portal demo auth with server-side sessions (NextAuth/Clerk)", area: "Security" },
  { priority: "P2", issue: "Integrate transactional email (Resend) for lead notifications", area: "CRM" },
  { priority: "P3", issue: "Run production Lighthouse audit post-deploy and log baseline", area: "Performance" },
] as const;

export const conversionRecommendations = [
  "Add mid-page CTA bands on top 5 service pages linking to /get-estimate",
  "Surface client portal link in post-submit thank-you flow",
  "Add trust strip (ISO-ready, NDA, SLA) on industry landing pages",
  "Enable Meta Pixel for retargeting estimate abandoners",
  "A/B test homepage hero CTA: Book consultation vs Get estimate",
] as const;

export const crmIntegrationChecklist = [
  "POST /api/leads — contact, get-estimate, project-calculator, discovery-call, book-consultation, tool-*",
  "POST /api/newsletter — blog/resources lead magnets",
  "Env: HUBSPOT_WEBHOOK_URL | ZOHO_WEBHOOK_URL | SALESFORCE_WEBHOOK_URL | LEAD_WEBHOOK_URL",
  "Env: LEAD_NOTIFICATION_EMAIL for ops alerts",
  "dataLayer: form_complete, lead_score, cta_click for GTM conversion tags",
  "Portal onboarding → store in CRM as custom object (future API)",
] as const;

export const deploymentChecklist = [
  "Vercel project linked to Git repository",
  "Production domain: maxwellelectrodeal.com",
  "DNS: A/CNAME to Vercel, www redirect",
  "SSL auto-provisioned (Strict-Transport-Security enabled)",
  "Environment variables copied from .env.example",
  "Preview deployments protected",
  "Google Search Console property verified",
  "Submit sitemap.xml to GSC",
  "GA4 property + GTM container published",
  "Uptime monitoring (Vercel Analytics / Better Stack)",
  "Weekly backup: export env + content git tags",
] as const;

export { secretManagementChecklist, siteConfig };
