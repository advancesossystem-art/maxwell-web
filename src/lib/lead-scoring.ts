import type { LeadBudget, LeadIndustry, LeadProjectType, LeadTimeline } from "./leads-data";

export type LeadTier = "hot" | "warm" | "cold";

export type LeadSource =
  | "contact"
  | "get-estimate"
  | "project-calculator"
  | "book-consultation"
  | "discovery-call"
  | "newsletter"
  | "careers"
  | `tool-${string}`;

export interface LeadScoringInput {
  budget?: string;
  timeline?: string;
  projectType?: string;
  industry?: string;
  companySize?: string;
  company?: string;
  phone?: string;
  scope?: string;
  features?: string[];
  email?: string;
}

export interface LeadScoreResult {
  score: number;
  tier: LeadTier;
  breakdown: { factor: string; points: number; max: number }[];
}

const BUDGET_SCORES: Record<string, number> = {
  "₹10L+": 30,
  "₹10L–₹25L+": 30,
  "₹5L–₹10L": 25,
  "₹1L–₹5L": 18,
  "₹50K–₹1L": 10,
  "₹50,000 – ₹2,00,000": 10,
  "₹2,00,000 – ₹5,00,000": 18,
  "₹5,00,000 – ₹10,00,000": 25,
  "₹10,00,000 – ₹25,00,000+": 30,
  "Not sure yet": 5,
};

const TIMELINE_SCORES: Record<string, number> = {
  ASAP: 25,
  "1 Month": 20,
  "3 Months": 15,
  "6 Months": 10,
  Flexible: 8,
};

const PROJECT_TYPE_SCORES: Record<string, number> = {
  ERP: 20,
  SaaS: 20,
  AI: 18,
  "Custom Software": 16,
  CRM: 15,
  "Mobile App": 12,
  Website: 8,
};

const INDUSTRY_SCORES: Record<string, number> = {
  Manufacturing: 12,
  Healthcare: 12,
  Logistics: 10,
  Retail: 10,
  Construction: 10,
  Education: 8,
  Other: 5,
};

const SCOPE_SCORES: Record<string, number> = {
  Enterprise: 15,
  Large: 12,
  Medium: 8,
  Small: 5,
};

const COMPANY_SIZE_SCORES: Record<string, number> = {
  "200+ employees": 15,
  "51–200 employees": 12,
  "11–50 employees": 8,
  "1–10 employees": 5,
};

function scoreMap(value: string | undefined, map: Record<string, number>, max: number, factor: string, breakdown: LeadScoreResult["breakdown"]) {
  const points = value ? (map[value] ?? 0) : 0;
  breakdown.push({ factor, points, max });
  return points;
}

export function calculateLeadScore(input: LeadScoringInput): LeadScoreResult {
  const breakdown: LeadScoreResult["breakdown"] = [];
  let score = 0;

  score += scoreMap(input.budget, BUDGET_SCORES, 30, "Budget", breakdown);
  score += scoreMap(input.timeline, TIMELINE_SCORES, 25, "Timeline / Urgency", breakdown);
  score += scoreMap(input.projectType, PROJECT_TYPE_SCORES, 20, "Project Type", breakdown);
  score += scoreMap(input.industry, INDUSTRY_SCORES, 12, "Industry", breakdown);
  score += scoreMap(input.scope, SCOPE_SCORES, 15, "Project Scope", breakdown);
  score += scoreMap(input.companySize, COMPANY_SIZE_SCORES, 15, "Company Size", breakdown);

  if (input.phone && input.phone.replace(/\D/g, "").length >= 10) {
    breakdown.push({ factor: "Phone Provided", points: 5, max: 5 });
    score += 5;
  } else {
    breakdown.push({ factor: "Phone Provided", points: 0, max: 5 });
  }

  if (input.company && input.company.trim().length >= 2) {
    breakdown.push({ factor: "Company Provided", points: 5, max: 5 });
    score += 5;
  } else {
    breakdown.push({ factor: "Company Provided", points: 0, max: 5 });
  }

  const featureCount = input.features?.length ?? 0;
  const featurePoints = Math.min(featureCount * 2, 10);
  breakdown.push({ factor: "Feature Detail", points: featurePoints, max: 10 });
  score += featurePoints;

  const tier: LeadTier = score >= 70 ? "hot" : score >= 45 ? "warm" : "cold";

  return { score: Math.min(score, 100), tier, breakdown };
}

export function getLeadTierLabel(tier: LeadTier): string {
  if (tier === "hot") return "Hot Lead";
  if (tier === "warm") return "Warm Lead";
  return "Cold Lead";
}

export function getLeadTierColor(tier: LeadTier): string {
  if (tier === "hot") return "#EF4444";
  if (tier === "warm") return "#F59E0B";
  return "#6B7280";
}

export type EstimateFormData = {
  projectType: LeadProjectType;
  industry: LeadIndustry;
  scope: string;
  features: string[];
  timeline: LeadTimeline;
  budget: LeadBudget;
  name: string;
  company: string;
  email: string;
  phone: string;
};
