/**
 * Phase 3 — Index quality & crawl-budget policy.
 * Pages remain live at their URLs; thin matrices are noindex + excluded from sitemaps.
 */

import { getCanonicalPathForPage } from "@/lib/seo/keyword-canonical";

/** Solution pages consolidated to service pillars — noindex to save crawl budget. */
export function isConsolidatedSolutionPath(path: string): boolean {
  return Boolean(getCanonicalPathForPage(path));
}

/** India priority cities allowed for indexable web-development cost pages. */
export const INDEXABLE_WEB_COST_CITY_SLUGS = new Set([
  "vadodara",
  "ahmedabad",
  "surat",
  "rajkot",
  "mumbai",
  "pune",
  "bengaluru",
  "hyderabad",
  "chennai",
  "delhi",
  "morbi",
]);

/** International markets allowed for indexable web-development country cost pages. */
export const INDEXABLE_WEB_COST_COUNTRY_SLUGS = new Set(["india", "usa", "uk", "uae"]);

/**
 * Cost pages: only India national (all services), international web (usa/uk/uae),
 * and priority-city web-development qualify for index.
 */
export function isIndexableCostSlug(slug: string): boolean {
  const countryMatch = slug.match(/^(.+)-cost-(india|usa|uk|uae|canada|australia|singapore|germany)$/);
  if (countryMatch) {
    const [, serviceSlug, country] = countryMatch;
    if (country === "india") return true;
    return serviceSlug === "web-development" && INDEXABLE_WEB_COST_COUNTRY_SLUGS.has(country);
  }

  const cityMatch = slug.match(/^web-development-cost-([a-z0-9-]+)$/);
  if (cityMatch) {
    return INDEXABLE_WEB_COST_CITY_SLUGS.has(cityMatch[1]);
  }

  return false;
}

/** Compare slugs that must stay out of the index (ERP demotion + industry ERP guides). */
export function isErpCompareNoIndexSlug(slug: string): boolean {
  return slug.startsWith("best-erp-for-");
}

export function shouldNoIndexSolutionPath(path: string): boolean {
  return isConsolidatedSolutionPath(path);
}
