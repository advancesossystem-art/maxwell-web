/**
 * Phase 2 — Keyword cannibalization ownership.
 * Each commercial head term has one canonical URL; supporting pages declare rel=canonical to it.
 * URLs are never deleted — consolidation is via canonical + differentiated titles/H1/anchors.
 */

import { siteConfig } from "@/lib/constants";

const u = (path: string) =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

/** National & global commercial head terms → single canonical path (relative). */
export const KEYWORD_CANONICAL_PATHS = {
  /** Website development / engineering — India national commercial */
  websiteDevelopmentCompanyIndia: "/services/website-development",
  websiteEngineeringCompany: "/services/website-development",
  webDevelopmentCompanyIndia: "/services/website-development",

  /** Manufacturer website cluster */
  manufacturerWebsiteDevelopment: "/services/website-development-for-manufacturers",

  /** Web application */
  webApplicationDevelopment: "/services/web-application-development",

  /** Supporting software clusters */
  customSoftwareDevelopment: "/services/custom-software-development",
  erpDevelopmentCompany: "/services/erp-development",
  crmDevelopmentCompany: "/services/crm-development",
  aiDevelopmentCompany: "/services/ai-solutions",
  mobileAppDevelopment: "/services/mobile-app-development",

  /** Geo commercial — state & city (distinct modifiers, self-canonical) */
  websiteDevelopmentCompanyGujarat: "/solutions/web-development-company-gujarat",
  websiteDeveloperVadodara: "/solutions/web-development-company-vadodara",

  /** International offshore from India */
  webDevelopmentIndiaUsa: "/solutions/web-development-company-india-usa",
  webDevelopmentIndiaUae: "/solutions/web-development-company-india-uae",
  webDevelopmentIndiaInternational: "/solutions/web-development-company-india-international",

  /** Pricing intent */
  websiteDevelopmentCostIndia: "/cost/web-development-cost-india",

  /** Local presence (office / delivery hub — not commercial head term) */
  locationHubIndia: "/locations/india",
} as const;

/**
 * Supporting pages that must rel=canonical to the keyword owner above.
 * Key = page path, value = canonical path (relative).
 */
export const PAGE_CANONICAL_OVERRIDES: Record<string, string> = {
  // Website national triple-pillar → service pillar
  "/solutions/website-development-company": KEYWORD_CANONICAL_PATHS.websiteDevelopmentCompanyIndia,
  "/solutions/web-development-company-india": KEYWORD_CANONICAL_PATHS.websiteDevelopmentCompanyIndia,

  // Software national geo → custom software service
  "/solutions/software-development-company": KEYWORD_CANONICAL_PATHS.customSoftwareDevelopment,
  "/solutions/software-development-company-india": KEYWORD_CANONICAL_PATHS.customSoftwareDevelopment,
  "/solutions/custom-software-development-company": KEYWORD_CANONICAL_PATHS.customSoftwareDevelopment,

  // ERP / CRM / AI commercial solutions → service depth
  "/solutions/erp-development-company": KEYWORD_CANONICAL_PATHS.erpDevelopmentCompany,
  "/solutions/crm-development-company": KEYWORD_CANONICAL_PATHS.crmDevelopmentCompany,
  "/solutions/ai-development-company": KEYWORD_CANONICAL_PATHS.aiDevelopmentCompany,

  // Legacy international web pages → india-for-market cluster
  "/solutions/web-development-company-usa": KEYWORD_CANONICAL_PATHS.webDevelopmentIndiaUsa,
  "/solutions/web-development-company-uae": KEYWORD_CANONICAL_PATHS.webDevelopmentIndiaUae,
};

export function getCanonicalPathForPage(pagePath: string): string | undefined {
  const normalized = pagePath.startsWith("/") ? pagePath : `/${pagePath}`;
  return PAGE_CANONICAL_OVERRIDES[normalized];
}

export function buildPageCanonicalAlternates(pagePath: string) {
  const override = getCanonicalPathForPage(pagePath);
  const canonicalPath = override ?? (pagePath.startsWith("/") ? pagePath : `/${pagePath}`);
  const canonical = u(canonicalPath);
  return {
    canonical,
    languages: {
      "en-IN": canonical,
      en: canonical,
      "x-default": canonical,
    },
  };
}
