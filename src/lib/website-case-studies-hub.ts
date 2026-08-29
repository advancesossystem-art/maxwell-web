/** Website-first case studies shown at top of /case-studies hub (hand-built pages). */

export type WebsiteHubCaseStudy = {
  slug: string;
  href: string;
  title: string;
  subtitle: string;
  highlight: string;
  tags: string[];
  accent: string;
};

export const WEBSITE_HUB_CASE_STUDIES: readonly WebsiteHubCaseStudy[] = [
  {
    slug: "drashti-chemicals",
    href: "/case-studies/drashti-chemicals",
    title: "Drashti Chemicals — 263-page Next.js catalog",
    subtitle: "Vadodara chemical manufacturer · 154 products · 94 mobile PageSpeed",
    highlight: "263 pages · RFQ on every SKU",
    tags: ["Next.js", "Manufacturer catalog", "Vadodara"],
    accent: "#4F46E5",
  },
  {
    slug: "maxwell-website-rebuild",
    href: "/case-studies/maxwell-website-rebuild",
    title: "Our site — 80 Google clicks in 28 days",
    subtitle: "Search Console proof · no ads · technical SEO + programmatic architecture",
    highlight: "80 clicks · 296 pages indexed",
    tags: ["SEO", "Next.js", "Internal linking"],
    accent: "#059669",
  },
] as const;

/** ERP/software legacy slugs — sort to bottom of hub grid. */
export const LEGACY_ERP_CASE_STUDY_SLUGS = new Set([
  "manufacturing-erp",
  "manufacturing-crm",
  "healthcare-management",
  "logistics-platform",
  "saas-workforce-management",
  "chemical-industry-erp",
]);
