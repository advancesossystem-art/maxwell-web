export interface DxAssessmentAnswers {
  currentSystems: number;
  processes: number;
  automation: number;
  reporting: number;
  dataManagement: number;
}

export interface DxAssessmentResult {
  maturityScore: number;
  maturityLabel: string;
  dimensions: { name: string; score: number; max: number }[];
  opportunities: string[];
  roadmap: { quarter: string; initiative: string }[];
  summary: string;
}

const LABELS = ["Manual / Ad-hoc", "Basic digital", "Partially integrated", "Mostly digital", "Optimized & data-driven"];

export function assessDigitalTransformation(answers: DxAssessmentAnswers): DxAssessmentResult {
  const scores = [
    { name: "Current Systems", score: answers.currentSystems, max: 5 },
    { name: "Process Digitization", score: answers.processes, max: 5 },
    { name: "Automation Level", score: answers.automation, max: 5 },
    { name: "Reporting & Analytics", score: answers.reporting, max: 5 },
    { name: "Data Management", score: answers.dataManagement, max: 5 },
  ];

  const total = scores.reduce((s, d) => s + d.score, 0);
  const max = scores.length * 5;
  const maturityScore = Math.round((total / max) * 100);

  const maturityLabel =
    maturityScore >= 80
      ? "Digital Leader"
      : maturityScore >= 60
        ? "Scaling Digital"
        : maturityScore >= 40
          ? "Emerging Digital"
          : "Early Stage";

  const opportunities: string[] = [];
  if (answers.currentSystems <= 2) opportunities.push("Consolidate disconnected spreadsheets into a unified operations platform");
  if (answers.automation <= 2) opportunities.push("Automate high-volume manual workflows (inventory, approvals, notifications)");
  if (answers.reporting <= 2) opportunities.push("Deploy real-time executive dashboards fed from single source of truth");
  if (answers.dataManagement <= 2) opportunities.push("Establish data governance, cleansing, and integration before AI initiatives");
  if (answers.processes <= 3) opportunities.push("Map and standardize core processes before large ERP investment");
  if (opportunities.length === 0) opportunities.push("Explore AI-assisted forecasting and predictive maintenance on your digital foundation");

  const roadmap = [
    { quarter: "Q1", initiative: "Visibility — dashboards & inventory/sales digitization" },
    { quarter: "Q2", initiative: "Core systems — ERP/CRM module rollout" },
    { quarter: "Q3", initiative: "Automation — workflows, integrations, mobile field apps" },
    { quarter: "Q4", initiative: "Intelligence — AI/analytics on clean operational data" },
  ];

  if (maturityScore >= 70) {
    roadmap[0] = { quarter: "Q1", initiative: "AI pilots on existing data — quality & safety use cases" };
  }

  return {
    maturityScore,
    maturityLabel,
    dimensions: scores,
    opportunities: opportunities.slice(0, 5),
    roadmap,
    summary: `Your organization scores ${maturityScore}/100 (${maturityLabel}). Focus on ${opportunities[0]?.toLowerCase() ?? "continuous optimization"}.`,
  };
}

export const dxQuestions = [
  { id: "currentSystems" as const, label: "Current systems maturity", help: "1 = spreadsheets only, 5 = integrated ERP/CRM" },
  { id: "processes" as const, label: "Process digitization", help: "1 = mostly manual, 5 = end-to-end digital" },
  { id: "automation" as const, label: "Automation level", help: "1 = none, 5 = extensive workflow automation" },
  { id: "reporting" as const, label: "Reporting & analytics", help: "1 = manual reports, 5 = real-time dashboards" },
  { id: "dataManagement" as const, label: "Data management", help: "1 = siloed data, 5 = governed single source of truth" },
];

export { LABELS as dxScoreLabels };
