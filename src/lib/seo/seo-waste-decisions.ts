/**
 * Phase 2 — SEO waste decisions for Maxwell Electrodeal.
 * Decision matrix: Improve | Merge | Redirect | Delete | Keep
 * Grounded in GSC Coverage (Jul 2026) + Performance query mix (~74% ERP impressions, 0 website queries).
 */

export type WasteAction = "Improve" | "Merge" | "Redirect" | "Delete" | "Keep";

export type WasteDecision = {
  pattern: string;
  action: WasteAction;
  rationale: string;
};

export const seoWasteDecisions: WasteDecision[] = [
  {
    pattern: "/compare/* (category: erp)",
    action: "Keep",
    rationale:
      "Keep URLs live for existing bookmarks, but noindex ERP comparison pages so they stop training Google that Maxwell = ERP. Replace growth investment with website comparisons.",
  },
  {
    pattern: "/compare/best-erp-for-*",
    action: "Keep",
    rationale:
      "Already carry intentRedirect toward website development. Keep + noindex; do not expand this set.",
  },
  {
    pattern: "/compare/* (website / CMS / framework)",
    action: "Improve",
    rationale:
      "Primary growth comparisons: WordPress vs Custom, Shopify vs Woo, Next.js vs React, Wix vs WordPress, etc.",
  },
  {
    pattern: "/services/erp-development, /services/crm-development",
    action: "Keep",
    rationale:
      "Supporting services remain available for buyers who need them. Demoted in nav and entity schema; not primary topical cluster.",
  },
  {
    pattern: "/solutions/*erp*",
    action: "Keep",
    rationale: "Keep for residual demand; do not expand ERP solution geo pages.",
  },
  {
    pattern: "/industries/*/* (thin industry×service)",
    action: "Keep",
    rationale: "Already noIndex in programmatic builder. Do not index until content depth justifies it.",
  },
  {
    pattern: "/locations/india/*/* (city×service)",
    action: "Keep",
    rationale: "Only index allowlisted city×service combos; remainder stay noindex to protect crawl budget.",
  },
  {
    pattern: "Query-param URLs (/get-estimate?…, /book-consultation?…)",
    action: "Keep",
    rationale:
      "GSC 'Alternate page with proper canonical' noise. Ensure self-canonical to clean URLs; do not invent new parametric landing pages.",
  },
  {
    pattern: "Pages with redirect (Coverage ~19)",
    action: "Improve",
    rationale: "Resolve redirect chains to single 301 → final destination; remove intermediate hops.",
  },
  {
    pattern: "Excluded by noindex (~582)",
    action: "Improve",
    rationale:
      "Audit monthly: valuable website cluster pages must be indexable; thin programmatic pages stay noindex.",
  },
  {
    pattern: "Discovered / crawled — currently not indexed",
    action: "Improve",
    rationale:
      "Concentrate internal links and sitemap priority on website pillar + spokes; orphan thin pages will continue to be ignored by Google.",
  },
  {
    pattern: "Duplicate website geo pages (identical English clones)",
    action: "Merge",
    rationale:
      "US/UK/UAE/Turkey/Germany pages: maintain existing localized pages only; do not duplicate. Phase 0 holds expansion until website-intent is verified.",
  },
  {
    pattern: "National website head terms (/services/website-development vs /solutions/*)",
    action: "Improve",
    rationale:
      "Phase 2: rel=canonical consolidates /solutions/website-development-company and /solutions/web-development-company-india to the service pillar; geo pages own state/city modifiers only.",
  },
  {
    pattern: "/cost/* (city + international thin clones)",
    action: "Keep",
    rationale:
      "Phase 3: India national cost (all services), international web (USA/UK/UAE), and 11 priority-city web cost pages stay indexable; ~350+ thin city/international clones are noindex + sitemap-excluded.",
  },
  {
    pattern: "/solutions/* (canonical-consolidated national pages)",
    action: "Keep",
    rationale:
      "Phase 3: Pages with rel=canonical to service pillars are noindex + sitemap-excluded to stop crawl waste while URLs remain live for bookmarks.",
  },
];

/** ERP compare slugs that should be noindexed (secondary cluster demotion). */
export const erpCompareNoIndexSlugs = [
  "erp-vs-crm",
  "custom-erp-vs-sap",
  "odoo-vs-custom-erp",
  "tally-vs-erp-software",
  "erpnext-vs-odoo",
  "sap-vs-odoo",
  "cloud-erp-vs-on-premise-erp",
  "manufacturing-erp-vs-trading-erp",
  "microsoft-dynamics-vs-custom-erp",
] as const;
