export interface TeamSizeInput {
  projectType: string;
  scopeSize: "mvp" | "standard" | "enterprise";
  moduleCount: number;
  timelineWeeks: number;
  needsDesign: boolean;
  needsMobile: boolean;
}

export interface TeamSizeRole {
  role: string;
  count: number;
  allocation: string;
  responsibility: string;
}

export interface TeamSizeResult {
  totalFte: number;
  roles: TeamSizeRole[];
  maxwellRecommendation: string;
  costIndicator: string;
  summary: string;
}

const BASE_DEVS: Record<string, number> = {
  Website: 2,
  "Mobile App": 3,
  ERP: 4,
  CRM: 3,
  AI: 3,
  SaaS: 4,
  "Custom Software": 3,
};

export function calculateTeamSize(input: TeamSizeInput): TeamSizeResult {
  const baseDevs = BASE_DEVS[input.projectType] ?? 3;
  const scopeMult = input.scopeSize === "mvp" ? 0.7 : input.scopeSize === "enterprise" ? 1.4 : 1;
  const moduleAdd = Math.max(0, input.moduleCount - 4) * 0.35;
  const timelinePressure = input.timelineWeeks < 12 ? 1.25 : input.timelineWeeks > 24 ? 0.9 : 1;

  const devCount = Math.max(1, Math.ceil((baseDevs + moduleAdd) * scopeMult * timelinePressure));
  const qaCount = devCount >= 4 ? 2 : 1;
  const pmCount = 1;
  const designCount = input.needsDesign ? (input.scopeSize === "enterprise" ? 2 : 1) : 0;
  const mobileCount = input.needsMobile ? Math.min(2, Math.ceil(devCount / 2)) : 0;
  const backendCount = Math.max(1, devCount - mobileCount);

  const roles: TeamSizeRole[] = [
    {
      role: "Project Manager",
      count: pmCount,
      allocation: "Full-time",
      responsibility: "Sprint planning, client communication, delivery tracking",
    },
    ...(designCount
      ? [{ role: "UI/UX Designer", count: designCount, allocation: "Full-time (first 4–6 weeks)", responsibility: "Wireframes, design system, prototypes" }]
      : []),
    {
      role: mobileCount ? "Backend Developer" : "Full-stack Developer",
      count: backendCount,
      allocation: "Full-time",
      responsibility: "Core features, APIs, integrations, database",
    },
    ...(mobileCount
      ? [{ role: "Mobile Developer", count: mobileCount, allocation: "Full-time", responsibility: "iOS/Android or React Native app" }]
      : []),
    {
      role: "QA Engineer",
      count: qaCount,
      allocation: qaCount > 1 ? "Full-time from sprint 2" : "Part-time → full-time pre-launch",
      responsibility: "Test plans, regression, UAT support",
    },
  ];

  const totalFte = roles.reduce((s, r) => s + r.count, 0);

  const monthlyBurnMin = totalFte * 180000;
  const monthlyBurnMax = totalFte * 280000;

  return {
    totalFte,
    roles,
    maxwellRecommendation:
      totalFte <= 4
        ? "Dedicated pod: 1 PM + 2–3 engineers + shared QA—ideal for Maxwell fixed-scope delivery."
        : "Squad model: lead architect + 2 feature teams with shared QA/DevOps for enterprise scope.",
    costIndicator: `₹${(monthlyBurnMin / 100000).toFixed(1)}L–₹${(monthlyBurnMax / 100000).toFixed(1)}L/month`,
    summary: `${input.projectType} (${input.scopeSize}): recommend ${totalFte} FTE over ~${input.timelineWeeks} weeks for ${input.moduleCount} modules.`,
  };
}
