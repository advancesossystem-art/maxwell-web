import type {
  CityCatalogEntry,
  CompareTemplate,
  IndustryCatalogEntry,
  PricingTableBlock,
  ComparisonMatrixBlock,
  LocalStatsBlock,
  ServiceCatalogEntry,
} from "./types";
import { buildPublishedWebsitePricingTable } from "@/lib/content/information-gain/website-cost-insights";

export function buildPricingTable(
  service: ServiceCatalogEntry,
  locationLabel: string,
  costRange: string,
): PricingTableBlock {
  if (service.slug === "web-development") {
    return buildPublishedWebsitePricingTable(locationLabel);
  }

  const short = service.shortLabel.toLowerCase();
  return {
    title: `${service.label} pricing tiers — ${locationLabel}`,
    rows: [
      {
        tier: "Starter / MVP",
        scope: `Core ${short} module (single department)`,
        priceRange: `~25% of ${costRange} range`,
        timeline: "6–10 weeks",
        bestFor: `Pilot rollout in ${locationLabel}`,
      },
      {
        tier: "Growth",
        scope: `Multi-module ${short} + Tally/GST integration`,
        priceRange: `~50% of ${costRange} range`,
        timeline: "10–16 weeks",
        bestFor: "Multi-branch SMEs scaling past spreadsheets",
      },
      {
        tier: "Enterprise",
        scope: `${service.label} + mobile apps + legacy migration`,
        priceRange: `Upper ${costRange} range`,
        timeline: "16–24 weeks",
        bestFor: "50+ users, multiple plants or GSTINs",
      },
    ],
    footnote: `Indicative ranges for ${locationLabel} as of 2026. Final quotes follow discovery. Technologies: ${service.technologies.slice(0, 3).join(", ")}.`,
  };
}

const COMPARE_CRITERIA: Record<CompareTemplate["category"], string[]> = {
  erp: [
    "GST & Tally integration depth",
    "Shop-floor / inventory control",
    "Multi-branch reporting",
    "3-year TCO (20–100 users)",
    "Customization flexibility",
    "Implementation timeline",
  ],
  crm: [
    "Distributor hierarchy support",
    "Field-force / offline mobile",
    "Pipeline & approval workflows",
    "ERP / Tally sync",
    "Per-user licensing cost",
    "India SMB fit",
  ],
  strategy: [
    "Time to first value",
    "Workflow differentiation",
    "Scaling cost at 50+ users",
    "Integration freedom",
    "Vendor lock-in risk",
    "Maintenance burden",
  ],
  delivery: [
    "Senior engineering depth",
    "Project continuity",
    "Milestone pricing",
    "Post-launch SLA",
    "Documentation & IP ownership",
    "Cost vs local agencies",
  ],
  automation: [
    "Long-term stability",
    "API vs UI dependency",
    "Maintenance overhead",
    "Embedded ERP fit",
    "Pilot speed",
    "Mission-critical suitability",
  ],
  website: [
    "SEO & Core Web Vitals",
    "Ownership & lock-in risk",
    "Content editing ease",
    "Security surface area",
    "B2B inquiry conversion",
    "3-year total cost",
  ],
};

function scoreLabel(favors: "left" | "right" | "neutral"): string {
  if (favors === "left") return "Strong";
  if (favors === "right") return "Strong";
  return "Moderate";
}

export function buildComparisonMatrix(template: CompareTemplate): ComparisonMatrixBlock {
  const criteria = COMPARE_CRITERIA[template.category];
  const rows = criteria.map((criterion, i) => {
    const favorsLeft = i % 3 !== 2 && template.leftPros.some((p) => p.toLowerCase().includes(criterion.split(" ")[0].toLowerCase()));
    const favorsRight = i % 3 === 1 || template.rightPros.some((p) => p.toLowerCase().includes(criterion.split("/")[0].toLowerCase()));
    const left = favorsLeft ? scoreLabel("left") : favorsRight ? "Moderate" : "Varies";
    const right = favorsRight ? scoreLabel("right") : favorsLeft ? "Moderate" : "Varies";
    return { criterion, left, right };
  });

  return {
    title: `${template.left} vs ${template.right}: side-by-side comparison`,
    leftLabel: template.left,
    rightLabel: template.right,
    rows,
    summary: template.verdict,
  };
}

export function buildCityLocalStats(city: CityCatalogEntry, service: ServiceCatalogEntry): LocalStatsBlock {
  const topIndustry = city.industries[0] ?? "SME";

  return {
    title: `${city.name} market snapshot`,
    subtitle: city.insight,
    stats: [
      { value: topIndustry, label: `Primary cluster served in ${city.name}` },
      { value: service.costRangeInr, label: `Published ${service.shortLabel} range (India)` },
      { value: city.industries.slice(0, 3).join(", "), label: `Key verticals in ${city.name}` },
      { value: "Vadodara HQ", label: "Discovery and delivery for Gujarat projects" },
    ],
  };
}

export function buildIndustryLocalStats(industry: IndustryCatalogEntry, service: ServiceCatalogEntry): LocalStatsBlock {
  return {
    title: `${industry.name} digitization scope`,
    subtitle: `Focused on ${industry.focus}`,
    stats: [
      { value: industry.compliance, label: `Compliance context for ${industry.name}` },
      { value: service.costRangeInr, label: `Typical ${service.shortLabel} investment range` },
      { value: "Discovery-first", label: "Fixed milestone quotes after workflow mapping" },
    ],
  };
}
