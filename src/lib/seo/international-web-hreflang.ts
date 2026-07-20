import { siteConfig } from "@/lib/constants";
import { getMarketInvestment } from "@/lib/seo/market-intent";

/**
 * Bidirectional hreflang set for Maxwell international website pages.
 * Google requires each page list itself + all alternates; include x-default.
 * Phase 0: expand only India; maintain US/UK/UAE/DE; hold TR expansion.
 */

export const internationalWebUrls = {
  international: `${siteConfig.url}/solutions/web-development-company-india-international`,
  usa: `${siteConfig.url}/solutions/web-development-company-india-usa`,
  uk: `${siteConfig.url}/solutions/web-development-company-india-uk`,
  uae: `${siteConfig.url}/solutions/web-development-company-india-uae`,
  germany: `${siteConfig.url}/solutions/web-development-company-india-germany`,
  turkey: `${siteConfig.url}/solutions/web-development-company-india-turkey`,
  india: `${siteConfig.url}/solutions/web-development-company-india`,
  websiteService: `${siteConfig.url}/services/website-development`,
} as const;

export type InternationalWebMarket =
  | "international"
  | "usa"
  | "uk"
  | "uae"
  | "germany"
  | "turkey";

/** Full reciprocal hreflang map — identical on every market page in the set. */
export function buildInternationalWebLanguageAlternates(canonicalPathOrUrl: string) {
  const canonical = canonicalPathOrUrl.startsWith("http")
    ? canonicalPathOrUrl
    : `${siteConfig.url}${canonicalPathOrUrl.startsWith("/") ? "" : "/"}${canonicalPathOrUrl}`;

  return {
    canonical,
    languages: {
      "en-IN": internationalWebUrls.india,
      "en-US": internationalWebUrls.usa,
      "en-GB": internationalWebUrls.uk,
      "en-AE": internationalWebUrls.uae,
      "en-DE": internationalWebUrls.germany,
      "en-TR": internationalWebUrls.turkey,
      en: internationalWebUrls.international,
      "x-default": internationalWebUrls.international,
    },
  };
}

export function marketExpansionNote(iso: string): string {
  const investment = getMarketInvestment(iso);
  if (investment === "invest") {
    return "Primary investment market — deepen website-development content and internal links.";
  }
  if (investment === "maintain") {
    return "Maintain this localized page; do not add new country spokes until website-intent queries are verified in Search Console.";
  }
  return "Hold expansion. Country impressions may be ERP-legacy; verify query intent before investing.";
}
