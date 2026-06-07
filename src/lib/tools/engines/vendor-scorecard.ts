export interface VendorScorecardInput {
  vendorA: string;
  vendorB: string;
  vendorC?: string;
  scores: {
    industryExperience: Record<string, number>;
    technicalApproach: Record<string, number>;
    pricingTransparency: Record<string, number>;
    timelineRealism: Record<string, number>;
    supportAmc: Record<string, number>;
    references: Record<string, number>;
  };
}

export interface VendorScore {
  name: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  strengths: string[];
  concerns: string[];
}

export interface VendorScorecardResult {
  vendors: VendorScore[];
  recommendedVendor: string;
  criteriaBreakdown: { criterion: string; weights: Record<string, number> }[];
  summary: string;
}

const CRITERIA = [
  { key: "industryExperience" as const, label: "Industry experience", weight: 25 },
  { key: "technicalApproach" as const, label: "Technical approach", weight: 25 },
  { key: "pricingTransparency" as const, label: "Pricing transparency", weight: 15 },
  { key: "timelineRealism" as const, label: "Timeline realism", weight: 15 },
  { key: "supportAmc" as const, label: "Support & AMC", weight: 10 },
  { key: "references" as const, label: "References & credibility", weight: 10 },
];

function vendorNames(input: VendorScorecardInput): string[] {
  return [input.vendorA, input.vendorB, input.vendorC].filter(Boolean) as string[];
}

export function scoreVendors(input: VendorScorecardInput): VendorScorecardResult {
  const names = vendorNames(input);
  const maxPerVendor = CRITERIA.reduce((s, c) => s + c.weight, 0);

  const vendors: VendorScore[] = names.map((name) => {
    let total = 0;
    const strengths: string[] = [];
    const concerns: string[] = [];

    for (const c of CRITERIA) {
      const raw = input.scores[c.key][name] ?? 3;
      const weighted = (raw / 5) * c.weight;
      total += weighted;
      if (raw >= 4) strengths.push(`Strong ${c.label.toLowerCase()}`);
      if (raw <= 2) concerns.push(`Weak ${c.label.toLowerCase()}`);
    }

    return {
      name,
      totalScore: Math.round(total * 10) / 10,
      maxScore: maxPerVendor,
      percentage: Math.round((total / maxPerVendor) * 100),
      strengths: strengths.slice(0, 3),
      concerns: concerns.slice(0, 3),
    };
  });

  vendors.sort((a, b) => b.totalScore - a.totalScore);
  const recommendedVendor = vendors[0]?.name ?? input.vendorA;

  const criteriaBreakdown = CRITERIA.map((c) => ({
    criterion: c.label,
    weights: Object.fromEntries(
      names.map((n) => [n, Math.round(((input.scores[c.key][n] ?? 3) / 5) * c.weight * 10) / 10]),
    ),
  }));

  const gap = vendors.length > 1 ? vendors[0].totalScore - vendors[1].totalScore : 0;
  const summary =
    gap >= 10
      ? `${recommendedVendor} leads with ${vendors[0].percentage}% weighted score—a clear front-runner for shortlisting.`
      : gap >= 5
        ? `${recommendedVendor} edges ahead (${vendors[0].percentage}%). Request detailed references before final selection.`
        : `Scores are close. Run a paid discovery sprint with top 2 vendors before committing.`;

  return { vendors, recommendedVendor, criteriaBreakdown, summary };
}

export { CRITERIA as vendorScorecardCriteria };
