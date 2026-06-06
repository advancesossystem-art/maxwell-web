import type { LeadIndustry, LeadProjectType, LeadScope, LeadTimeline } from "./leads-data";

export interface ProjectEstimateInput {
  projectType: LeadProjectType | string;
  industry?: LeadIndustry | string;
  scope?: LeadScope | string;
  features?: string[];
  timeline?: LeadTimeline | string;
}

export interface ProjectEstimateResult {
  estimatedCost: { min: number; max: number; display: string };
  developmentTime: string;
  teamSize: string;
  technologies: string[];
  complexityScore: number;
  complexityLabel: string;
  summary: string;
}

const BASE_COST: Record<string, { min: number; max: number }> = {
  Website: { min: 80000, max: 300000 },
  "Mobile App": { min: 300000, max: 1200000 },
  ERP: { min: 800000, max: 3500000 },
  CRM: { min: 400000, max: 1800000 },
  AI: { min: 500000, max: 2500000 },
  SaaS: { min: 600000, max: 3000000 },
  "Custom Software": { min: 400000, max: 2000000 },
};

const SCOPE_MULTIPLIER: Record<string, number> = {
  Small: 0.6,
  Medium: 1,
  Large: 1.6,
  Enterprise: 2.4,
};

const TIMELINE_MULTIPLIER: Record<string, number> = {
  ASAP: 1.25,
  "1 Month": 1.15,
  "3 Months": 1,
  "6 Months": 0.95,
  Flexible: 0.9,
};

const TECH_BY_TYPE: Record<string, string[]> = {
  Website: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  "Mobile App": ["React Native", "Flutter", "Node.js", "Firebase", "AWS"],
  ERP: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
  CRM: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
  AI: ["Python", "FastAPI", "React", "PostgreSQL", "AWS / GPU"],
  SaaS: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
  "Custom Software": ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
};

const TEAM_BY_SCOPE: Record<string, string> = {
  Small: "2–3 specialists",
  Medium: "4–5 engineers",
  Large: "6–8 engineers",
  Enterprise: "8–12 engineers",
};

const WEEKS_BY_SCOPE: Record<string, { min: number; max: number }> = {
  Small: { min: 4, max: 8 },
  Medium: { min: 8, max: 16 },
  Large: { min: 16, max: 28 },
  Enterprise: { min: 24, max: 40 },
};

function formatINR(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
  return `₹${(amount / 1000).toFixed(0)}K`;
}

export function calculateProjectEstimate(input: ProjectEstimateInput): ProjectEstimateResult {
  const type = input.projectType || "Custom Software";
  const scope = input.scope || "Medium";
  const timeline = input.timeline || "3 Months";
  const features = input.features ?? [];

  const base = BASE_COST[type] ?? BASE_COST["Custom Software"];
  const scopeMul = SCOPE_MULTIPLIER[scope] ?? 1;
  const timelineMul = TIMELINE_MULTIPLIER[timeline] ?? 1;
  const featureMul = 1 + Math.min(features.length * 0.05, 0.35);

  const min = Math.round(base.min * scopeMul * timelineMul * featureMul);
  const max = Math.round(base.max * scopeMul * timelineMul * featureMul);

  const weeks = WEEKS_BY_SCOPE[scope] ?? WEEKS_BY_SCOPE.Medium;
  const timelineAdj = timeline === "ASAP" ? 0.85 : timeline === "1 Month" ? 0.9 : 1;
  const devMin = Math.round(weeks.min * timelineAdj);
  const devMax = Math.round(weeks.max * timelineAdj);

  let complexityScore = 30;
  complexityScore += (SCOPE_MULTIPLIER[scope] ?? 1) * 15;
  complexityScore += Math.min(features.length * 3, 25);
  if (["ERP", "AI", "SaaS"].includes(type)) complexityScore += 15;
  if (input.industry && input.industry !== "Other") complexityScore += 5;
  complexityScore = Math.min(Math.round(complexityScore), 100);

  const complexityLabel =
    complexityScore >= 75 ? "High Complexity" : complexityScore >= 50 ? "Medium Complexity" : "Standard Complexity";

  const technologies = TECH_BY_TYPE[type] ?? TECH_BY_TYPE["Custom Software"];

  const summary = `Based on a ${scope.toLowerCase()} ${type.toLowerCase()} project with ${features.length} selected features, we estimate ${formatINR(min)}–${formatINR(max)} over ${devMin}–${devMax} weeks with a ${TEAM_BY_SCOPE[scope] ?? "4–5 engineers"}. Recommended stack: ${technologies.slice(0, 3).join(", ")}.`;

  return {
    estimatedCost: { min, max, display: `${formatINR(min)} – ${formatINR(max)}` },
    developmentTime: `${devMin}–${devMax} weeks`,
    teamSize: TEAM_BY_SCOPE[scope] ?? "4–5 engineers",
    technologies,
    complexityScore,
    complexityLabel,
    summary,
  };
}
