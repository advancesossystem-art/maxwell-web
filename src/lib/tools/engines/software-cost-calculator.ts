import { calculateProjectEstimate } from "@/lib/project-estimator";
import { formatINR } from "../format";

export interface AdvancedCostInput {
  projectType: string;
  industry: string;
  scope: string;
  timeline: string;
  features: string[];
  userCount: string;
  integrations: number;
  securityLevel: string;
  compliance: string[];
}

export interface TeamRole {
  role: string;
  count: number;
  allocation: string;
}

export interface AdvancedCostResult {
  costMin: number;
  costMax: number;
  costDisplay: string;
  timeline: string;
  complexityScore: number;
  team: TeamRole[];
  technologies: string[];
  breakdown: { label: string; impact: string }[];
  summary: string;
}

const USER_MULT: Record<string, number> = {
  "< 100": 1,
  "100–1,000": 1.1,
  "1,000–10,000": 1.25,
  "10,000+": 1.45,
};

const SECURITY_MULT: Record<string, number> = {
  Standard: 1,
  Enhanced: 1.12,
  Enterprise: 1.28,
};

export function calculateAdvancedSoftwareCost(input: AdvancedCostInput): AdvancedCostResult {
  const base = calculateProjectEstimate({
    projectType: input.projectType,
    industry: input.industry,
    scope: input.scope,
    features: input.features,
    timeline: input.timeline,
  });

  const userMul = USER_MULT[input.userCount] ?? 1;
  const secMul = SECURITY_MULT[input.securityLevel] ?? 1;
  const intMul = 1 + Math.min(input.integrations * 0.06, 0.3);
  const compMul = 1 + Math.min(input.compliance.length * 0.05, 0.2);

  const costMin = Math.round(base.estimatedCost.min * userMul * secMul * intMul * compMul);
  const costMax = Math.round(base.estimatedCost.max * userMul * secMul * intMul * compMul);

  const team: TeamRole[] = [
    { role: "Tech Lead / Architect", count: 1, allocation: "Full-time" },
    { role: "Senior Engineers", count: input.scope === "Enterprise" ? 4 : 2, allocation: "Full-time" },
    { role: "UI/UX Designer", count: 1, allocation: input.scope === "Small" ? "Part-time" : "Full-time" },
    { role: "QA Engineer", count: 1, allocation: "Sprint 2+" },
    { role: "Project Manager", count: 1, allocation: "20% capacity" },
  ];

  if (input.compliance.length > 0) {
    team.push({ role: "Security Review", count: 1, allocation: "Milestone gates" });
  }

  return {
    costMin,
    costMax,
    costDisplay: `${formatINR(costMin)} – ${formatINR(costMax)}`,
    timeline: base.developmentTime,
    complexityScore: Math.min(base.complexityScore + input.integrations * 2 + input.compliance.length * 3, 100),
    team,
    technologies: base.technologies,
    breakdown: [
      { label: "Base project type", impact: base.estimatedCost.display },
      { label: "User scale", impact: `×${userMul.toFixed(2)}` },
      { label: "Integrations", impact: `+${input.integrations} systems` },
      { label: "Security tier", impact: input.securityLevel },
      { label: "Compliance", impact: input.compliance.length ? input.compliance.join(", ") : "None" },
    ],
    summary: `Advanced estimate for ${input.scope.toLowerCase()} ${input.projectType} with ${input.features.length} features, ${input.userCount} users, and ${input.integrations} integrations.`,
  };
}
