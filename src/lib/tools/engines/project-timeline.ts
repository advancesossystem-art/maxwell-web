export interface ProjectTimelineInput {
  projectType: string;
  industry: string;
  scopeSize: "mvp" | "standard" | "enterprise";
  moduleCount: number;
  integrationCount: number;
  hasCompliance: boolean;
  urgency: string;
}

export interface ProjectTimelineResult {
  totalDuration: string;
  totalWeeksMin: number;
  totalWeeksMax: number;
  phases: { name: string; duration: string; weeksMin: number; weeksMax: number }[];
  criticalPath: string[];
  riskFactors: string[];
  summary: string;
}

const BASE_WEEKS: Record<string, number> = {
  Website: 6,
  "Mobile App": 14,
  ERP: 20,
  CRM: 12,
  AI: 10,
  SaaS: 18,
  "Custom Software": 14,
};

const SCOPE_MULTIPLIER: Record<ProjectTimelineInput["scopeSize"], number> = {
  mvp: 0.65,
  standard: 1,
  enterprise: 1.45,
};

export function estimateProjectTimeline(input: ProjectTimelineInput): ProjectTimelineResult {
  const base = BASE_WEEKS[input.projectType] ?? 14;
  const scopeMult = SCOPE_MULTIPLIER[input.scopeSize];
  const moduleAdd = Math.max(0, input.moduleCount - 3) * 1.5;
  const integrationAdd = input.integrationCount * 1.2;
  const complianceAdd = input.hasCompliance ? 3 : 0;
  const urgencyMult = input.urgency === "ASAP" ? 0.85 : input.urgency === "Flexible" ? 1.1 : 1;

  const coreWeeks = (base + moduleAdd + integrationAdd + complianceAdd) * scopeMult * urgencyMult;
  const totalWeeksMin = Math.max(4, Math.round(coreWeeks * 0.85));
  const totalWeeksMax = Math.round(coreWeeks * 1.2);

  const discoveryPct = 0.12;
  const designPct = 0.15;
  const devPct = 0.55;
  const launchPct = 0.18;

  const phases = [
    {
      name: "Discovery & requirements",
      weeksMin: Math.max(1, Math.round(totalWeeksMin * discoveryPct)),
      weeksMax: Math.max(2, Math.round(totalWeeksMax * discoveryPct)),
    },
    {
      name: "Design & architecture",
      weeksMin: Math.max(1, Math.round(totalWeeksMin * designPct)),
      weeksMax: Math.max(2, Math.round(totalWeeksMax * designPct)),
    },
    {
      name: "Development & integration",
      weeksMin: Math.round(totalWeeksMin * devPct),
      weeksMax: Math.round(totalWeeksMax * devPct),
    },
    {
      name: "UAT, training & go-live",
      weeksMin: Math.max(2, Math.round(totalWeeksMin * launchPct)),
      weeksMax: Math.max(3, Math.round(totalWeeksMax * launchPct)),
    },
  ].map((p) => ({
    ...p,
    duration: `${p.weeksMin}–${p.weeksMax} weeks`,
  }));

  const criticalPath: string[] = [];
  if (input.integrationCount >= 3) criticalPath.push("Third-party API availability and sandbox access");
  if (input.projectType === "ERP" || input.projectType === "CRM")
    criticalPath.push("Data migration from legacy systems");
  if (input.hasCompliance) criticalPath.push("Security review and compliance sign-off");
  if (input.urgency === "ASAP") criticalPath.push("Parallel design + dev sprints (requires dedicated client PO)");
  if (criticalPath.length === 0) criticalPath.push("Stakeholder review cycles on weekly demos");

  const riskFactors: string[] = [];
  if (input.scopeSize === "enterprise") riskFactors.push("Phased rollout recommended to de-risk go-live");
  if (input.moduleCount > 8) riskFactors.push("Consider MVP module subset for first release");
  if (input.urgency === "ASAP") riskFactors.push("Compressed timeline increases change-request risk—freeze scope early");

  return {
    totalDuration: `${totalWeeksMin}–${totalWeeksMax} weeks`,
    totalWeeksMin,
    totalWeeksMax,
    phases,
    criticalPath,
    riskFactors,
    summary: `${input.projectType} (${input.scopeSize}) for ${input.industry}: ${totalWeeksMin}–${totalWeeksMax} weeks including ${input.moduleCount} modules and ${input.integrationCount} integrations.`,
  };
}
