export interface RoadmapInput {
  projectType: string;
  industry: string;
  budget: string;
  timeline: string;
  teamSize: string;
}

export interface RoadmapPhase {
  name: string;
  duration: string;
  milestones: string[];
  deliverables: string[];
}

export interface RoadmapResult {
  totalWeeks: string;
  phases: RoadmapPhase[];
  summary: string;
  recommendations: string[];
}

const BUDGET_PHASES: Record<string, number> = {
  "₹50K–₹1L": 3,
  "₹1L–₹5L": 4,
  "₹5L–₹10L": 5,
  "₹10L+": 6,
};

export function generateProjectRoadmap(input: RoadmapInput): RoadmapResult {
  const phaseCount = BUDGET_PHASES[input.budget] ?? 4;
  const isEnterprise = input.teamSize.includes("200") || input.budget === "₹10L+";
  const hasCompliance = ["Healthcare", "Manufacturing", "Logistics"].includes(input.industry);

  const phases: RoadmapPhase[] = [
    {
      name: "Discovery & Architecture",
      duration: isEnterprise ? "2–3 weeks" : "1–2 weeks",
      milestones: ["Stakeholder workshops", "Process mapping", "Technical architecture sign-off"],
      deliverables: ["Requirements document", "Solution architecture", "Project plan & RACI"],
    },
    {
      name: "Design & Prototyping",
      duration: "2–3 weeks",
      milestones: ["UX flows approved", "Interactive prototype review", "Design system baseline"],
      deliverables: ["Wireframes", "UI mockups", "Clickable prototype"],
    },
    {
      name: "Core Development — Sprint 1",
      duration: input.timeline === "ASAP" ? "3–4 weeks" : "4–6 weeks",
      milestones: ["MVP module complete", "CI/CD pipeline live", "Staging environment"],
      deliverables: ["Core features", "API layer", "Admin dashboard v1"],
    },
  ];

  if (phaseCount >= 4) {
    phases.push({
      name: "Core Development — Sprint 2",
      duration: "4–6 weeks",
      milestones: ["Integration testing", "UAT round 1", "Performance baseline"],
      deliverables: ["Extended modules", "Third-party integrations", "Reporting layer"],
    });
  }

  if (phaseCount >= 5 || hasCompliance) {
    phases.push({
      name: "Integrations & Compliance",
      duration: "2–4 weeks",
      milestones: ["Tally/GST sync verified", "Security review", "Compliance checklist"],
      deliverables: ["Integration connectors", "Audit logs", "Security documentation"],
    });
  }

  phases.push({
    name: "Launch & Hypercare",
    duration: "2–3 weeks",
    milestones: ["Production deployment", "User training", "30-day hypercare complete"],
    deliverables: ["Go-live runbook", "Training materials", "Support SLA handover"],
  });

  const weekRanges: Record<string, string> = {
    ASAP: "14–20 weeks",
    "1 Month": "12–18 weeks",
    "3 Months": "16–24 weeks",
    "6 Months": "20–28 weeks",
    Flexible: "18–26 weeks",
  };

  return {
    totalWeeks: weekRanges[input.timeline] ?? "16–24 weeks",
    phases,
    summary: `Recommended ${input.projectType} roadmap for ${input.industry} with ${input.teamSize} organization, ${input.budget} budget, targeting ${input.timeline} delivery.`,
    recommendations: [
      `Align ${input.teamSize} internal champions before sprint 1`,
      input.industry === "Manufacturing" ? "Include shop-floor discovery in phase 1" : "Schedule weekly demo cadence with stakeholders",
      isEnterprise ? "Plan phased rollout by business unit" : "Start with highest-ROI module first",
    ],
  };
}
