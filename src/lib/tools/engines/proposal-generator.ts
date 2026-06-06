import { calculateProjectEstimate } from "@/lib/project-estimator";

export interface ProposalInput {
  clientName: string;
  industry: string;
  projectType: string;
  requirements: string;
  budget: string;
}

export interface ProposalResult {
  title: string;
  executiveSummary: string;
  scope: string[];
  timeline: string;
  stack: string[];
  investment: string;
  investmentRange: { min: number; max: number };
  terms: string[];
  nextSteps: string[];
}

const SCOPE_BY_TYPE: Record<string, string[]> = {
  Website: ["Responsive marketing site", "SEO architecture", "CMS & lead capture", "Analytics integration"],
  "Mobile App": ["iOS & Android cross-platform app", "Offline-first architecture", "Push notifications", "App Store deployment"],
  ERP: ["Inventory & production modules", "Finance/Tally integration", "Shop-floor mobile app", "Role-based dashboards"],
  CRM: ["Custom sales pipeline", "Lead automation", "Customer portal", "Reporting & analytics"],
  AI: ["Use-case discovery", "Model training & integration", "Production deployment", "Monitoring & guardrails"],
  SaaS: ["Multi-tenant architecture", "Subscription billing", "Admin & tenant dashboards", "CI/CD pipeline"],
  "Custom Software": ["Discovery & architecture", "Custom workflow platform", "API integrations", "Documentation & training"],
};

export function generateProposal(input: ProposalInput): ProposalResult {
  const scopeMap = input.requirements
    .split(/[,;\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
  const baseScope = SCOPE_BY_TYPE[input.projectType] ?? SCOPE_BY_TYPE["Custom Software"];
  const scope = [...new Set([...baseScope, ...scopeMap.slice(0, 4)])].slice(0, 8);

  const estimate = calculateProjectEstimate({
    projectType: input.projectType,
    industry: input.industry,
    scope: input.budget === "₹10L+" ? "Large" : input.budget === "₹5L–₹10L" ? "Medium" : "Small",
    timeline: "3 Months",
  });

  return {
    title: `${input.projectType} Proposal — ${input.clientName}`,
    executiveSummary: `${input.clientName} requires a ${input.projectType.toLowerCase()} solution tailored to ${input.industry} operations. Maxwell Electrodeal proposes a phased delivery model with transparent milestones, senior engineering from day one, and 100% IP ownership upon completion.`,
    scope,
    timeline: estimate.developmentTime,
    stack: estimate.technologies,
    investment: estimate.estimatedCost.display,
    investmentRange: { min: estimate.estimatedCost.min, max: estimate.estimatedCost.max },
    terms: [
      "Milestone-based billing (30% kickoff, 40% mid-project, 30% delivery)",
      "2-week sprint demos with written progress reports",
      "90-day warranty on delivered code",
      "Optional AMC with SLA-backed support",
    ],
    nextSteps: [
      "Discovery workshop (complimentary, 2 hours)",
      "Detailed SOW & fixed quote within 5 business days",
      "Project kickoff within 1 week of agreement",
    ],
  };
}
