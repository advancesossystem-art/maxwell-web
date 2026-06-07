export interface CrmRequirementInput {
  companyName: string;
  industry: string;
  salesTeamSize: number;
  leadVolumeMonthly: number;
  modules: string[];
  integrations: string[];
  salesProcess: string;
}

export interface CrmRequirementResult {
  documentTitle: string;
  executiveSummary: string;
  functionalRequirements: string[];
  technicalRequirements: string[];
  integrationRequirements: string[];
  automationRules: string[];
  implementationPhases: { phase: string; duration: string; scope: string }[];
  summary: string;
}

const CRM_MODULE_REQUIREMENTS: Record<string, string[]> = {
  "Lead Pipeline": ["Custom pipeline stages matching sales process", "Lead source tracking and attribution", "Win/loss reason capture"],
  "Email Automation": ["Drip sequences for nurture", "Template library with personalization", "Open/click tracking"],
  "Customer Portal": ["Order/status self-service", "Document upload and ticket raising", "Branded portal with SSO option"],
  "Sales Analytics": ["Pipeline value and conversion funnel", "Rep-wise quota vs achievement", "Forecast by stage and probability"],
  "Task Management": ["Follow-up reminders and SLAs", "Activity logging (calls, meetings, notes)", "Manager visibility dashboard"],
  "Integration APIs": ["REST webhooks for lead capture", "Bi-directional ERP order sync", "Marketing tool connectors"],
  "Mobile Sales App": ["Offline lead capture", "GPS check-in for field visits", "Quote generation on mobile"],
  "Custom Dashboards": ["Executive KPI dashboard", "Drill-down by region/product/rep", "Export to Excel/PDF"],
};

export function generateCrmRequirements(input: CrmRequirementInput): CrmRequirementResult {
  const functionalRequirements: string[] = [];
  for (const mod of input.modules) {
    const reqs = CRM_MODULE_REQUIREMENTS[mod];
    if (reqs) functionalRequirements.push(...reqs.map((r) => `[${mod}] ${r}`));
    else functionalRequirements.push(`[${mod}] Per sales process documentation`);
  }

  if (functionalRequirements.length === 0) {
    functionalRequirements.push(
      "Lead capture from web, email, and WhatsApp",
      "Pipeline stages with drag-and-drop kanban",
      "Contact and account hierarchy",
      "Activity timeline per lead/customer",
    );
  }

  const automationRules = [
    input.leadVolumeMonthly > 500
      ? "Auto-assign leads by territory/round-robin within 5 minutes"
      : "Manual assign with SLA reminder at 24 hours",
    "Stale lead alert if no activity for 7 days",
    "Won deal triggers ERP/customer onboarding workflow",
    input.salesProcess.includes("B2B") ? "Multi-stakeholder deal room with approval chain" : "Fast-quote workflow for retail leads",
  ];

  return {
    documentTitle: `CRM Requirements — ${input.companyName}`,
    executiveSummary: `${input.industry} CRM for ${input.salesTeamSize} sales users handling ~${input.leadVolumeMonthly} leads/month. Process: ${input.salesProcess}.`,
    functionalRequirements: functionalRequirements.slice(0, 20),
    technicalRequirements: [
      "Cloud SaaS or custom web CRM with mobile-responsive UI",
      "Role-based access: rep, manager, admin",
      "Duplicate detection on email/phone",
      "Audit log for pipeline changes",
      "99.9% uptime with daily backups",
    ],
    integrationRequirements: input.integrations.length
      ? input.integrations.map((i) => `${i} integration`)
      : ["Email (Gmail/Outlook)", "WhatsApp Business API", "Website lead forms"],
    automationRules,
    implementationPhases: [
      { phase: "Discovery & pipeline design", duration: "1–2 weeks", scope: "Stage mapping, fields, permissions" },
      { phase: "Core CRM build", duration: "6–10 weeks", scope: input.modules.slice(0, 4).join(", ") || "Pipeline, contacts, tasks" },
      { phase: "Integrations & automation", duration: "2–3 weeks", scope: "Email, WhatsApp, ERP hooks" },
      { phase: "Training & rollout", duration: "1–2 weeks", scope: `${input.salesTeamSize} users onboarded` },
    ],
    summary: `Generated ${functionalRequirements.length} CRM requirements for ${input.companyName} with ${automationRules.length} automation rules.`,
  };
}

export const crmModuleOptions = Object.keys(CRM_MODULE_REQUIREMENTS);
export const crmIntegrationOptions = ["ERP/Inventory", "WhatsApp", "Email (Gmail/Outlook)", "Website Forms", "Telephony/IVR", "Marketing Automation"];
