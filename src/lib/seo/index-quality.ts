/**
 * Phase 3 + CEO Founder Blueprint — Index quality & crawl-budget policy.
 * Pages remain live at their URLs; thin matrices are noindex + excluded from sitemaps.
 *
 * Indexable (keep): industrial silos, manufacturer hub/verticals, GIDC hand pages,
 * Vadodara/Gujarat solutions, core cost guides (India / Vadodara / manufacturing),
 * industrial tools, quality industry verticals.
 *
 * Soft noindex (URLs stay live): city×service doorway matrix, thin city cost clones,
 * industry×service matrix, ERP compare demotion, consolidated solution paths.
 */

import { getCanonicalPathForPage } from "@/lib/seo/keyword-canonical";
import { erpCompareNoIndexSlugs } from "@/lib/seo/seo-waste-decisions";

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
 * Explicit hand-authored cost paths that stay indexable even if slug pattern is narrow.
 * (Standalone pages under /cost/* not only the programmatic [slug] matrix.)
 */
export const INDEXABLE_HANDCRAFTED_COST_PATHS = new Set([
  "/cost/web-development-cost-india",
  "/cost/web-development-cost-vadodara",
  "/cost/manufacturing-website-cost",
]);

/**
 * Cost pages: only India national (all services), international web (usa/uk/uae),
 * and priority-city web-development qualify for index.
 */
export function isIndexableCostSlug(slug: string): boolean {
  if (INDEXABLE_HANDCRAFTED_COST_PATHS.has(`/cost/${slug}`)) return true;

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
  if (slug.startsWith("best-erp-for-")) return true;
  return (erpCompareNoIndexSlugs as readonly string[]).includes(slug);
}

export function shouldNoIndexSolutionPath(path: string): boolean {
  return isConsolidatedSolutionPath(path);
}

/** Allowlisted city×service combos that remain indexable (must match build-pages overrides). */
const INDEXABLE_CITY_SERVICE_SLUGS = new Set([
  "surat-custom-software-development",
  "halol-ai-development",
]);

/**
 * Central helper for path-level noindex decisions (metadata generators, audits, docs).
 * Prefers soft noindex over deletion — URLs remain live for bookmarks.
 */
export function shouldNoIndexPath(path: string): boolean {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const clean = normalized.replace(/\/$/, "") || "/";

  // Industry × service matrix (doorway)
  if (/^\/industries\/[^/]+\/[^/]+$/.test(clean)) return true;

  // City × service matrix — only allowlisted combos stay indexed
  if (/^\/locations\/india\/[^/]+\/[^/]+$/.test(clean)) {
    if (/\/gujarat\/[^/]+-gidc$/.test(clean) || clean === "/locations/india/gujarat/gidc") {
      return false;
    }
    const parts = clean.split("/").filter(Boolean);
    // /locations/india/{city}/{service} → 4 parts
    if (parts.length === 4) {
      const slug = `${parts[2]}-${parts[3]}`;
      return !INDEXABLE_CITY_SERVICE_SLUGS.has(slug);
    }
  }

  // Thin cost matrix
  const costMatch = clean.match(/^\/cost\/(.+)$/);
  if (costMatch) {
    return !isIndexableCostSlug(costMatch[1]);
  }

  // ERP compare demotion
  const compareMatch = clean.match(/^\/compare\/(.+)$/);
  if (compareMatch && isErpCompareNoIndexSlug(compareMatch[1])) return true;

  // Consolidated solution paths
  if (clean.startsWith("/solutions/") && shouldNoIndexSolutionPath(clean)) return true;

  return false;
}
