export interface AiReadinessAnswers {
  dataQuality: number;
  infrastructure: number;
  useCaseClarity: number;
  teamSkills: number;
  governance: number;
  integrationReadiness: number;
}

export interface AiReadinessResult {
  readinessScore: number;
  readinessLabel: string;
  dimensions: { name: string; score: number; max: number }[];
  gaps: string[];
  recommendedUseCases: string[];
  nextSteps: { phase: string; action: string }[];
  summary: string;
}

export const aiReadinessQuestions = [
  { id: "dataQuality" as const, label: "Data quality & accessibility", help: "1 = siloed/poor data, 5 = clean governed datasets" },
  { id: "infrastructure" as const, label: "Cloud & compute infrastructure", help: "1 = on-prem only, 5 = scalable cloud with APIs" },
  { id: "useCaseClarity" as const, label: "Use case clarity", help: "1 = exploratory, 5 = defined ROI use cases" },
  { id: "teamSkills" as const, label: "Team AI literacy", help: "1 = no AI experience, 5 = internal champions" },
  { id: "governance" as const, label: "Governance & compliance", help: "1 = no policy, 5 = AI policy & data privacy in place" },
  { id: "integrationReadiness" as const, label: "System integration readiness", help: "1 = manual exports, 5 = API-connected ERP/CRM" },
];

export function assessAiReadiness(answers: AiReadinessAnswers): AiReadinessResult {
  const dimensions = [
    { name: "Data Quality", score: answers.dataQuality, max: 5 },
    { name: "Infrastructure", score: answers.infrastructure, max: 5 },
    { name: "Use Case Clarity", score: answers.useCaseClarity, max: 5 },
    { name: "Team Skills", score: answers.teamSkills, max: 5 },
    { name: "Governance", score: answers.governance, max: 5 },
    { name: "Integration", score: answers.integrationReadiness, max: 5 },
  ];

  const total = dimensions.reduce((s, d) => s + d.score, 0);
  const readinessScore = Math.round((total / (dimensions.length * 5)) * 100);

  const readinessLabel =
    readinessScore >= 75 ? "AI Ready" : readinessScore >= 55 ? "Pilot Ready" : readinessScore >= 35 ? "Foundation Building" : "Not Yet Ready";

  const gaps: string[] = [];
  if (answers.dataQuality <= 2) gaps.push("Establish data cleansing and a single source of truth before model training");
  if (answers.infrastructure <= 2) gaps.push("Move workloads to cloud with API layer for AI services");
  if (answers.useCaseClarity <= 2) gaps.push("Prioritize 1–2 high-ROI use cases (e.g. demand forecast, document OCR)");
  if (answers.teamSkills <= 2) gaps.push("Train operations leads on AI-assisted workflows and change management");
  if (answers.governance <= 2) gaps.push("Define AI usage policy, PII handling, and human-in-the-loop review");
  if (answers.integrationReadiness <= 2) gaps.push("Connect ERP/CRM via APIs so AI outputs feed operational systems");
  if (gaps.length === 0) gaps.push("Scale successful pilots across departments with MLOps monitoring");

  const useCaseMap: Record<string, string[]> = {
    low: ["Document digitization (invoices, POs)", "Chatbot for internal SOP queries", "Email/call summarization for sales"],
    mid: ["Demand forecasting from sales history", "Predictive maintenance alerts", "Lead scoring from CRM data"],
    high: ["Computer vision QC on production line", "Dynamic pricing optimization", "Autonomous workflow agents with ERP write-back"],
  };

  const tier = readinessScore >= 70 ? "high" : readinessScore >= 45 ? "mid" : "low";
  const recommendedUseCases = useCaseMap[tier];

  const nextSteps =
    readinessScore >= 70
      ? [
          { phase: "Month 1", action: "Launch production pilot on highest-ROI use case" },
          { phase: "Month 2–3", action: "Measure accuracy, latency, and business KPI impact" },
          { phase: "Month 4–6", action: "Expand to adjacent workflows with shared data pipeline" },
        ]
      : readinessScore >= 45
        ? [
            { phase: "Month 1", action: "Data audit + integration sprint on ERP/CRM APIs" },
            { phase: "Month 2", action: "Proof-of-concept on one bounded use case" },
            { phase: "Month 3", action: "Governance review and pilot go/no-go" },
          ]
        : [
            { phase: "Month 1–2", action: "Digitize core processes and reporting (DX foundation)" },
            { phase: "Month 3", action: "Data governance workshop and cloud migration plan" },
            { phase: "Month 4+", action: "Re-assess AI readiness after systems integration" },
          ];

  return {
    readinessScore,
    readinessLabel,
    dimensions,
    gaps: gaps.slice(0, 5),
    recommendedUseCases,
    nextSteps,
    summary: `AI readiness score: ${readinessScore}/100 (${readinessLabel}). ${gaps[0] ?? "Proceed with controlled pilot deployment."}`,
  };
}
