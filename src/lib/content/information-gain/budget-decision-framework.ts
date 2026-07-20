/**
 * Phase 6A — Budget decision framework for website buyers (India).
 * Uses published Maxwell pricing from pricing-data.ts — no invented numbers.
 */

import { pricingTerms, websitePricingTiers } from "@/lib/pricing-data";

export type BudgetBand = {
  label: string;
  maxInr: number;
  verdict: string;
  whatYouGet: string[];
  whatYouMiss: string[];
  maxwellFit: string;
};

export const websiteBudgetBands: BudgetBand[] = [
  {
    label: "Under ₹20,000",
    maxInr: 20_000,
    verdict: "Template or freelancer territory — rarely a production-grade B2B catalog.",
    whatYouGet: [
      "5-page WordPress/Wix template with your logo",
      "Shared hosting, limited customization",
      "Little or no product catalog architecture",
    ],
    whatYouMiss: [
      "Structured product/category SEO",
      "GST quote workflows and inquiry qualification",
      "Core Web Vitals engineering and schema markup",
      "Source code ownership and milestone documentation",
    ],
    maxwellFit: `Maxwell Starter tier is ${websitePricingTiers[0].price} (${websitePricingTiers[0].scope}) — published on /pricing with ${pricingTerms.payment}.`,
  },
  {
    label: "₹20,000 – ₹30,000",
    maxInr: 30_000,
    verdict: "Enough for a brochure site — not for a manufacturer product catalog that ranks.",
    whatYouGet: [
      "Basic CMS site with contact form",
      "Mobile-responsive theme",
      "Minimal on-page SEO",
    ],
    whatYouMiss: [
      "50+ product pages with filters and spec tables",
      "Export inquiry flows (IEC, HS code fields)",
      "Performance budget for industrial buyers on mobile data",
    ],
    maxwellFit: `Most manufacturers need Professional (${websitePricingTiers[1].price}, ${websitePricingTiers[1].scope}) for catalog + inquiry conversion.`,
  },
  {
    label: "₹30,000 – ₹50,000",
    maxInr: 50_000,
    verdict: "Overlaps Maxwell Starter — viable for simple service businesses, tight for catalogs.",
    whatYouGet: [
      "Small business website with 5–10 pages",
      "WhatsApp and basic lead capture",
      "Starter SEO setup",
    ],
    whatYouMiss: [
      "Programmatic category pages at scale",
      "Industry-specific compliance blocks (SDS, GMP, CoA)",
      "Multi-language or export buyer journeys",
    ],
    maxwellFit: `Starter (${websitePricingTiers[0].price}) fits here; catalog manufacturers should budget Professional (${websitePricingTiers[1].price}) or Growth (${websitePricingTiers[2].price}).`,
  },
  {
    label: "₹50,000+",
    maxInr: Infinity,
    verdict: "Entry point for serious B2B manufacturer websites with catalog depth.",
    whatYouGet: [
      "Custom design aligned to buyer workflow",
      "Product catalog with search, filters, inquiry per SKU",
      "Technical SEO, schema, and analytics foundation",
    ],
    whatYouMiss: [],
    maxwellFit: `Published tiers: Starter ${websitePricingTiers[0].price}, Professional ${websitePricingTiers[1].price}, Growth ${websitePricingTiers[2].price}. ${pricingTerms.gst}.`,
  },
];

export function getWebsiteBudgetDecisionSections() {
  return [
    {
      title: "How to choose a budget band (decision framework)",
      content:
        "Match spend to buyer journey complexity — not page count alone. A 6-page corporate site and a 150-SKU chemical catalog solve different problems.",
      bullets: [
        "List your top 3 buyer actions (call, RFQ, download SDS, sample request)",
        "Count products that need individual Google landing pages",
        "Decide if IndiaMART/TradeIndia leads are enough — or you need owned SEO",
        "Check if Tally/CRM integration is phase 1 or phase 2",
      ],
    },
    {
      title: "What ₹20K, ₹30K, and ₹50K actually buy in India (2026)",
      content: websiteBudgetBands.map((b) => `${b.label}: ${b.verdict}`).join(" "),
      bullets: websiteBudgetBands.map((b) => `${b.label} — ${b.maxwellFit}`),
    },
    {
      title: "Website vs marketplace (evaluation, not either/or)",
      content:
        "Marketplaces like IndiaMART generate shared RFQs; an owned website captures exclusive inquiries when buyers search your product or factory name on Google.",
      bullets: [
        "Keep marketplace listings while building owned SEO — layer first, taper later",
        "Owned site: you control catalog depth, certifications, and inquiry data",
        "Marketplace: fast RFQ volume but shared with competitors on the same listing",
        "See /compare pages for WordPress vs custom and platform comparisons",
      ],
    },
  ];
}

export function getWebsiteBudgetFaqs(locationLabel: string) {
  return [
    {
      question: `Can I get a business website under ₹20,000 in ${locationLabel}?`,
      answer: websiteBudgetBands[0].verdict + " " + websiteBudgetBands[0].maxwellFit,
    },
    {
      question: `What is a realistic website budget for a manufacturer in ${locationLabel}?`,
      answer: `Published Maxwell manufacturer packages start at ${websitePricingTiers[0].price} (Starter) and ${websitePricingTiers[1].price} (Professional catalog). Growth tier (${websitePricingTiers[2].price}) suits 40+ pages and export buyers. ${pricingTerms.gst}.`,
    },
    {
      question: "Should I build a website or rely on IndiaMART?",
      answer:
        "Use both during transition: marketplaces for RFQ volume, owned website for exclusive leads and product-specific Google rankings. Maxwell builds manufacturer catalogs designed for direct inquiry — see /services/website-development-for-manufacturers.",
    },
  ];
}
