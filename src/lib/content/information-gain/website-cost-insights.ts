/**
 * Phase 6A — Unique cost-page content for indexable web-development URLs.
 */

import { websitePricingTiers, pricingTerms } from "@/lib/pricing-data";
import { getWebsiteBudgetDecisionSections, getWebsiteBudgetFaqs } from "./budget-decision-framework";
import type { PricingTableBlock } from "@/lib/seo/programmatic/types";

const CITY_WEB_CONTEXT: Record<string, { cluster: string; buyerNote: string }> = {
  vadodara: {
    cluster: "Vadodara GIDC and Makarpura industrial belt",
    buyerNote:
      "Chemical, engineering, and pharma buyers often compare 3–5 local vendors — catalog depth and PageSpeed matter more than brochure design.",
  },
  ahmedabad: {
    cluster: "Ahmedabad pharma, textile, and engineering clusters",
    buyerNote:
      "Multi-division groups need clear product taxonomy — buyers search by grade, application, and certification.",
  },
  surat: {
    cluster: "Surat textile and diamond ancillary manufacturers",
    buyerNote:
      "Fabric and yarn exporters need sample-request flows and export inquiry fields — not generic contact forms.",
  },
  rajkot: {
    cluster: "Rajkot engineering, auto parts, and casting units",
    buyerNote:
      "RFQ forms should capture drawing/spec uploads and MOQ — engineering buyers rarely call first.",
  },
  morbi: {
    cluster: "Morbi ceramic and sanitary ware exporters",
    buyerNote:
      "Tile catalogs need size/finish filters and container-load inquiry — international buyers browse on mobile.",
  },
  mumbai: {
    cluster: "Mumbai corporate HQ with Gujarat plant delivery",
    buyerNote:
      "HQ sites need investor-grade pages; plant sites need catalog and compliance — often split or unified with clear navigation.",
  },
  pune: {
    cluster: "Pune auto, engineering, and industrial suppliers",
    buyerNote:
      "Tier-1 supplier audits drive certification and traceability pages — plan these in discovery, not after launch.",
  },
  bengaluru: {
    cluster: "Bengaluru tech-enabled manufacturers and exporters",
    buyerNote:
      "Buyers expect fast Core Web Vitals and structured data — template sites often fail enterprise procurement checks.",
  },
  hyderabad: {
    cluster: "Hyderabad pharma API and formulation manufacturers",
    buyerNote:
      "GMP, DMF, and facility pages are evaluation criteria — separate marketing fluff from audit-ready facts.",
  },
  chennai: {
    cluster: "Chennai automotive and industrial components",
    buyerNote:
      "OEM buyers search by part number and application — catalog URL structure should mirror how buyers think.",
  },
  delhi: {
    cluster: "Delhi NCR trading houses and north India distributors",
    buyerNote:
      "Dealer locator and multi-brand catalog pages are common — avoid duplicate thin city pages without unique inventory story.",
  },
};

export function buildPublishedWebsitePricingTable(locationLabel: string): PricingTableBlock {
  return {
    title: `Published website packages — ${locationLabel} (Maxwell Electrodeal)`,
    rows: websitePricingTiers.map((tier) => ({
      tier: tier.name,
      scope: tier.scope,
      priceRange: tier.price,
      timeline: tier.timeline,
      bestFor: tier.bestFor,
    })),
    footnote: `${pricingTerms.gst} · ${pricingTerms.payment} · ${pricingTerms.ownership} Full tier details: /pricing.`,
  };
}

export function getWebDevelopmentCostSections(
  locationLabel: string,
  marketType: "country" | "city",
  citySlug?: string,
): { title: string; content: string; bullets?: string[] }[] {
  const cityCtx = citySlug ? CITY_WEB_CONTEXT[citySlug] : undefined;
  const base = getWebsiteBudgetDecisionSections();

  const scopeSection = {
    title: "What drives website cost (beyond page count)",
    content: `For ${locationLabel}, price moves with catalog depth, integrations, and buyer workflow — not hourly rates alone.`,
    bullets: [
      "Number of products needing individual SEO landing pages",
      "Filters, spec tables, SDS/GMP downloads, export inquiry fields",
      "CMS choice (marketing edits without developers)",
      "Tally/CRM/Zoho integration in phase 1 vs phase 2",
      "Multi-language or multi-GSTIN entity structure",
      `Payment terms: ${pricingTerms.payment}`,
    ],
  };

  const tierFeatures = {
    title: "Package scope at a glance",
    content: "Published Maxwell tiers — same numbers on /pricing and manufacturer hub.",
    bullets: websitePricingTiers.flatMap((t) => [
      `${t.name} (${t.price}): ${t.features.slice(0, 3).join("; ")}`,
    ]),
  };

  if (marketType === "city" && cityCtx) {
    return [
      {
        title: `${locationLabel} industrial context`,
        content: `${cityCtx.cluster}. ${cityCtx.buyerNote}`,
        bullets: [
          "On-site discovery available for Gujarat clusters from Vadodara HQ",
          "See city-specific manufacturer pages under /services/website-development/",
          "Drashti Chemicals case study: 263-page catalog delivered in 6 weeks",
        ],
      },
      scopeSection,
      tierFeatures,
      ...base,
    ];
  }

  return [scopeSection, tierFeatures, ...base];
}

export function getWebDevelopmentCostFaqs(locationLabel: string) {
  return [
    ...getWebsiteBudgetFaqs(locationLabel),
    {
      question: `How long does a manufacturer website take in ${locationLabel}?`,
      answer: `Published timelines: Starter ${websitePricingTiers[0].timeline}, Professional ${websitePricingTiers[1].timeline}, Growth ${websitePricingTiers[2].timeline}. Catalogs with 100+ SKUs may run longer — scoped in discovery.`,
    },
    {
      question: "Do you publish fixed prices or only custom quotes?",
      answer: `${pricingTerms.noGames} Tier prices are on /pricing; custom scope (ERP portal, dealer login) is quoted after discovery.`,
    },
  ];
}

export function getInternationalWebCostNote(countryName: string, costRangeUsd: string) {
  return {
    title: `Offshore website delivery for ${countryName} buyers`,
    content: `India-based engineering typically ranges ${costRangeUsd} for business websites when sourced from Maxwell Electrodeal — milestone billing, English communication, and IP assignment on delivery.`,
    bullets: [
      "Timezone overlap for US East / UK / UAE morning calls",
      "Fixed-scope SOW with weekly demos — no open-ended hourly burn",
      "Next.js stack targeting Core Web Vitals and structured data",
      "See /solutions/web-development-company-india-international for engagement models",
    ],
  };
}
