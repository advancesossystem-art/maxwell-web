/**
 * Surgical SEO — only these URLs enter XML sitemaps.
 * ~30–40 high-value money pages. Everything else may stay live (noindex/doorway)
 * but must not be advertised in sitemaps or global nav equity.
 */

import { siteConfig } from "@/lib/constants";

export type MoneySitemapEntry = {
  path: string;
  priority: number;
  changeFreq?: "daily" | "weekly" | "monthly" | "yearly";
  lastModified?: Date;
};

const LAUNCH = new Date("2026-08-25T00:00:00.000Z");

/**
 * Exact allowlist for Google crawl focus.
 * Keep in sync with permanentRedirects destinations (never list sources that 301).
 */
export const MONEY_SITEMAP_ALLOWLIST: readonly MoneySitemapEntry[] = [
  { path: "/", priority: 1, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/process", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/about", priority: 0.7, changeFreq: "monthly" },
  { path: "/authors", priority: 0.72, changeFreq: "monthly" },
  { path: "/authors/sanjay-prajapati", priority: 0.75, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/contact", priority: 0.95, changeFreq: "monthly" },
  { path: "/get-estimate", priority: 0.95, changeFreq: "monthly" },
  { path: "/pricing", priority: 0.94, changeFreq: "monthly" },
  { path: "/reviews", priority: 0.85, changeFreq: "monthly", lastModified: LAUNCH },

  // Geo money
  { path: "/solutions/web-development-company-vadodara", priority: 0.98, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/solutions/web-development-company-gujarat", priority: 0.96, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/solutions/web-development-company-india", priority: 0.97, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/solutions/seo-company-vadodara", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/locations/india/vadodara", priority: 0.94, changeFreq: "monthly", lastModified: LAUNCH },

  // Manufacturer + industrial silos
  { path: "/services/website-development", priority: 0.95, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/website-development-for-manufacturers", priority: 0.98, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/industrial-website-design", priority: 0.97, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/rfq-website-development", priority: 0.97, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/industrial-catalog-development", priority: 0.96, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/website-development/owned-enquiry-channel", priority: 0.93, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/dealer-portal-development", priority: 0.88, changeFreq: "monthly" },
  { path: "/services/website-maintenance", priority: 0.92, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-technologies", priority: 0.91, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/web-design", priority: 0.94, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/website-seo", priority: 0.94, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/website-redesign", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/ecommerce-website-development", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/wordpress-website-development", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/business-website-development", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/solutions/web-design-company-vadodara", priority: 0.95, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/solutions/best-website-development-company-vadodara", priority: 0.93, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/solutions/best-website-development-company-india", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/solutions/wordpress-website-vadodara", priority: 0.86, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/solutions/ecommerce-website-vadodara", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/solutions/website-redesign-vadodara", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/solutions/website-amc-vadodara", priority: 0.92, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/solutions/website-development-company-ahmedabad", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/solutions/business-website-vadodara", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },

  // Canonical verticals (after 301 consolidation)
  { path: "/services/website-development/chemical-manufacturers", priority: 0.95, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/website-development/engineering-machinery", priority: 0.95, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/website-development/ceramic-exporters", priority: 0.95, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/website-development/pharma-equipment", priority: 0.95, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/services/website-development/electrical-manufacturer", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-development/bharuch-ankleshwar-chemical", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-development/morbi-ceramic-website", priority: 0.93, changeFreq: "monthly", lastModified: LAUNCH },

  // Additional live verticals — fully indexed
  { path: "/services/website-development/textile-manufacturer", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-development/food-processing-company", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-development/plastic-manufacturer", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-development/paint-coating-company", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-development/auto-parts-manufacturer", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-development/msme-india", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-development/exporter-india", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-development/manufacturer-export-website", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/services/website-development/surat-textile-manufacturer", priority: 0.87, changeFreq: "monthly", lastModified: LAUNCH },

  // GIDC corridors (trimmed cluster)
  { path: "/locations/india/gujarat/gidc", priority: 0.94, changeFreq: "weekly", lastModified: LAUNCH },
  { path: "/locations/india/gujarat/makarpura-gidc", priority: 0.93, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/locations/india/gujarat/savli-gidc", priority: 0.93, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/locations/india/gujarat/ankleshwar-gidc", priority: 0.93, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/locations/india/gujarat/nandesari-gidc", priority: 0.93, changeFreq: "monthly", lastModified: LAUNCH },

  // Cost + tools + TCO
  { path: "/cost/web-development-cost-vadodara", priority: 0.92, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/cost/web-development-cost-india", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/cost/manufacturing-website-cost", priority: 0.93, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/tools/industrial-website-rfq-estimator", priority: 0.96, changeFreq: "weekly", lastModified: LAUNCH },

  // Chemical manufacturing — high impression page closest to page 1
  { path: "/industries/chemical-manufacturing", priority: 0.96, changeFreq: "weekly", lastModified: LAUNCH },

  // Additional geo/SEO money pages
  { path: "/solutions/seo-company-gujarat", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },

  // Proof
  { path: "/case-studies/drashti-chemicals", priority: 0.94, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/case-studies/maxwell-website-rebuild", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },

  // High-intent hand blogs only (never programmatic batch)
  { path: "/blog/nextjs-vs-wordpress-industrial-website", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/blog/vadodara-manufacturers-directory-to-nextjs-catalog", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/blog/b2b-rfq-website-architecture-manufacturers", priority: 0.88, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/blog/how-to-structure-industrial-product-catalogue-online", priority: 0.87, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/blog/gidc-manufacturer-website-checklist-vadodara", priority: 0.87, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/blog/manufacturer-website-seo-timeline-gujarat", priority: 0.86, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/blog/gujarat-manufacturer-buyers-search-google-2026", priority: 0.9, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/blog/gidc-plant-google-enquiries-owned-website", priority: 0.87, changeFreq: "monthly", lastModified: LAUNCH },
  { path: "/blog/vadodara-manufacturers-outdated-websites-export-orders", priority: 0.86, changeFreq: "monthly", lastModified: LAUNCH },
] as const;

export const MONEY_SITEMAP_PATH_SET = new Set(
  MONEY_SITEMAP_ALLOWLIST.map((e) => (e.path === "/" ? "/" : e.path.replace(/\/$/, ""))),
);

export function isMoneySitemapPath(path: string): boolean {
  const n = path.startsWith("/") ? path : `/${path}`;
  const clean = n === "/" ? "/" : n.replace(/\/$/, "");
  return MONEY_SITEMAP_PATH_SET.has(clean);
}

export function toSitemapXmlEntries(
  filter?: (path: string) => boolean,
): { url: string; priority: number; changeFreq?: "daily" | "weekly" | "monthly" | "yearly"; lastModified?: Date }[] {
  return MONEY_SITEMAP_ALLOWLIST.filter((e) => (filter ? filter(e.path) : true)).map((e) => ({
    url: e.path === "/" ? siteConfig.url : `${siteConfig.url}${e.path}`,
    priority: e.priority,
    changeFreq: e.changeFreq,
    lastModified: e.lastModified,
  }));
}

/** Count check for audits/docs */
export function moneySitemapCount(): number {
  return MONEY_SITEMAP_ALLOWLIST.length;
}
