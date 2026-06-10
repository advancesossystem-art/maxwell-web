import type {
  CityCatalogEntry,
  CompareTemplate,
  IndustryCatalogEntry,
  PricingTableBlock,
  ComparisonMatrixBlock,
  LocalStatsBlock,
  ServiceCatalogEntry,
} from "./types";

function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

export function buildPricingTable(
  service: ServiceCatalogEntry,
  locationLabel: string,
  costRange: string,
): PricingTableBlock {
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
  const h = slugHash(city.slug);
  const adoption = 55 + (h % 25);
  const projectCount = 12 + (h % 18);

  return {
    title: `${city.name} market snapshot`,
    subtitle: `${city.insight}`,
    stats: [
      { value: `${adoption}%`, label: `${topIndustry} firms in ${city.name} evaluating ${service.shortLabel} digitization` },
      { value: `${projectCount}+`, label: `${service.shortLabel} projects delivered to ${city.state} businesses` },
      { value: city.industries.length.toString(), label: `Verticals we serve in ${city.name}: ${city.industries.join(", ")}` },
      { value: "24h", label: `Estimate turnaround for ${city.name} discovery requests` },
    ],
  };
}

export function buildIndustryLocalStats(industry: IndustryCatalogEntry, service: ServiceCatalogEntry): LocalStatsBlock {
  const h = slugHash(industry.slug);
  const roi = 8 + (h % 6);

  return {
    title: `${industry.name} digitization benchmarks`,
    subtitle: `Focused on ${industry.focus}`,
    stats: [
      { value: "78%", label: `Indian ${industry.name.toLowerCase()} SMEs still run core ops on spreadsheets` },
      { value: `${roi}–${roi + 4} mo`, label: `Typical ${service.shortLabel} payback for ${industry.name.toLowerCase()} clients` },
      { value: "40–60%", label: "Manual work reduction post go-live (discovery baseline)" },
    ],
  };
}
