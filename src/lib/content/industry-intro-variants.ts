import type { IndustryCatalogEntry, ServiceCatalogEntry } from "../seo/programmatic/types";

function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

type IntroBuilder = (industry: IndustryCatalogEntry, service: ServiceCatalogEntry) => string;

const INTRO_BUILDERS: IntroBuilder[] = [
  (industry, service) =>
    `${industry.name} leaders managing ${industry.focus} know that ${industry.painPoints[0]} is rarely an IT ticket—it is margin leakage traced to delayed decisions. Before evaluating ${service.shortLabel.toLowerCase()} vendors, quantify how many hours per week your team spends reconciling data that should live in one system.`,
  (industry, service) =>
    `Regulatory pressure around ${industry.compliance} is accelerating ${industry.name.toLowerCase()} digitization in 2026. Teams still patching ${industry.painPoints[1] ?? industry.painPoints[0]} with spreadsheets face audit risk long before they feel competitive pressure—${service.label.toLowerCase()} becomes a compliance investment, not a luxury.`,
  (industry, service) =>
    `Growth in ${industry.name.toLowerCase()} exposes operational ceilings faster than revenue charts suggest: ${industry.painPoints[2] ?? industry.painPoints[0]} compounds when order volume doubles but headcount does not. ${service.shortLabel} buyers in India now ask for TCO and go-live proof—not feature checklists.`,
  (industry, service) =>
    `Every ${industry.name.toLowerCase()} plant we visit has a different twist on ${industry.focus}, yet the same failure mode—${industry.painPoints[0]} hidden inside WhatsApp approvals and month-end Tally catch-up. ${service.label} should encode how your team actually works, not force a generic template.`,
  (industry, service) =>
    `Export-focused and domestic ${industry.name.toLowerCase()} units alike are searching "${service.shortLabel.toLowerCase()} for ${industry.name.toLowerCase()}" after a lost order, stock write-off, or failed audit tied to ${industry.painPoints[1] ?? industry.painPoints[0]}. This guide answers the questions CFOs and plant heads ask before signing a vendor.`,
];

const ICON_LEADS: Partial<Record<IndustryCatalogEntry["icon"], IntroBuilder>> = {
  factory: (industry, service) =>
    `Shop-floor and plant managers in ${industry.name.toLowerCase()} cannot wait for HO to email Excel snapshots—${industry.painPoints[0]} costs shifts, not quarters. ${service.shortLabel} for ${industry.focus} must work where operators stand, not only where finance sits.`,
  health: (industry, service) =>
    `${industry.name} networks balancing patient flow and billing reconciliation need ${service.shortLabel.toLowerCase()} with audit-grade trails—${industry.compliance} is not optional. ${industry.painPoints[0]} in healthcare operations directly impacts revenue cycle time.`,
  logistics: (industry, service) =>
    `Dispatch delays and ${industry.painPoints[0]} in ${industry.name.toLowerCase()} are measured in hours, not sprints. ${service.label} for ${industry.focus} must integrate e-way bill workflows and POD reconciliation without re-keying into Tally.`,
  retail: (industry, service) =>
    `Omnichannel ${industry.name.toLowerCase()} teams fighting ${industry.painPoints[0]} need ${service.shortLabel.toLowerCase()} that syncs POS, warehouse, and GST invoicing—not another dashboard nobody opens during peak season.`,
};

/** Unique opening paragraph per industry × service pair (indexed, not noindexed). */
export function buildIndustryIntroLead(
  industry: IndustryCatalogEntry,
  service: ServiceCatalogEntry,
): string {
  const iconBuilder = ICON_LEADS[industry.icon];
  if (iconBuilder) return iconBuilder(industry, service);
  const idx = slugHash(`${industry.slug}-${service.key}`) % INTRO_BUILDERS.length;
  return INTRO_BUILDERS[idx](industry, service);
}

export function buildIndustryIntroParagraphs(
  industry: IndustryCatalogEntry,
  service: ServiceCatalogEntry,
): string[] {
  const pain1 = industry.painPoints[0];
  const pain2 = industry.painPoints[1] ?? pain1;
  const pain3 = industry.painPoints[2] ?? pain1;

  return [
    buildIndustryIntroLead(industry, service),
    `${industry.name} companies running ${industry.focus} operations also battle ${pain2} and ${pain3}. Generic software forces expensive workarounds when ${industry.compliance} workflows are non-negotiable—this guide covers build vs buy, realistic ${service.costRangeInr} pricing, and a 90-day roadmap for RFPs.`,
    `Maxwell Electrodeal engineers ${service.shortLabel.toLowerCase()} for ${industry.name} nationwide from Vadodara HQ—with on-site discovery for Gujarat plants and remote delivery for Mumbai, Bengaluru, Delhi NCR, and export-focused ${industry.name.toLowerCase()} units.`,
  ];
}
