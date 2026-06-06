export interface RfpInput {
  companyName: string;
  projectTitle: string;
  industry: string;
  projectType: string;
  objectives: string;
  budgetRange: string;
  timeline: string;
}

export interface RfpResult {
  documentTitle: string;
  businessObjectives: string[];
  technicalRequirements: string[];
  functionalRequirements: string[];
  timeline: { phase: string; duration: string }[];
  budgetConsiderations: string[];
  evaluationCriteria: string[];
  vendorQuestions: string[];
}

export function buildRfpDocument(input: RfpInput): RfpResult {
  const customObjectives = input.objectives
    .split(/[,;\n]/)
    .map((s) => s.trim())
    .filter(Boolean);

  return {
    documentTitle: `RFP: ${input.projectTitle} — ${input.companyName}`,
    businessObjectives: [
      ...customObjectives,
      `Digitize core ${input.industry} workflows for ${input.projectType}`,
      "Improve operational visibility and reporting accuracy",
      "Reduce manual data entry and process errors",
      "Enable scalable growth without proportional headcount increase",
    ].slice(0, 6),
    technicalRequirements: [
      "Modern web/mobile stack with documented APIs (REST or GraphQL)",
      "Cloud-hosted on AWS or Azure with 99.9% uptime SLA",
      "Role-based access control and audit logging",
      "GST-compliant invoicing and Tally integration (if applicable)",
      "CI/CD pipeline with staging environment",
      "Source code and IP assignment upon final payment",
    ],
    functionalRequirements: [
      `Core ${input.projectType} modules per attached process map`,
      "Admin dashboard for configuration and user management",
      "Export/reporting in PDF and Excel formats",
      "Email and WhatsApp notification hooks",
      "Mobile-responsive or native mobile where specified",
    ],
    timeline: [
      { phase: "Vendor selection & contracting", duration: "2–3 weeks" },
      { phase: "Discovery & design", duration: "3–4 weeks" },
      { phase: "Development sprints", duration: input.timeline === "ASAP" ? "12–16 weeks" : "16–24 weeks" },
      { phase: "UAT, training & go-live", duration: "3–4 weeks" },
    ],
    budgetConsiderations: [
      `Indicative budget: ${input.budgetRange}`,
      "Fixed-price preferred with milestone payments",
      "Change requests billed at agreed day rate",
      "AMC quoted separately for post-launch support",
    ],
    evaluationCriteria: [
      "Relevant industry experience (40%)",
      "Technical approach & architecture (25%)",
      "Timeline & delivery methodology (20%)",
      "Commercial terms & total cost (15%)",
    ],
    vendorQuestions: [
      "Provide 3 similar project references in our industry",
      "Describe your discovery and change management process",
      "What is your average team composition for this scope?",
      "How do you handle data migration and rollback?",
    ],
  };
}
