export interface LeadMagnet {
  id: string;
  title: string;
  description: string;
  format: string;
  downloadPath: string;
  contentSlug?: string;
  contentType?: "resource" | "guide" | "report";
}

export const leadMagnets: Record<string, LeadMagnet> = {
  "erp-readiness-checklist": {
    id: "erp-readiness-checklist",
    title: "ERP Readiness Checklist",
    description: "25-point assessment before your ERP project starts.",
    format: "Downloadable guide",
    downloadPath: "/downloads/erp-readiness-checklist.txt",
    contentSlug: "erp-readiness-checklist",
    contentType: "resource",
  },
  "crm-implementation-guide": {
    id: "crm-implementation-guide",
    title: "CRM Implementation Guide",
    description: "Phase-by-phase CRM rollout playbook for B2B teams.",
    format: "Downloadable guide",
    downloadPath: "/downloads/crm-implementation-guide.txt",
    contentSlug: "crm-implementation-guide",
    contentType: "resource",
  },
  "ai-adoption-framework": {
    id: "ai-adoption-framework",
    title: "AI Adoption Framework",
    description: "Use-case scoring and pilot-to-production checklist.",
    format: "Downloadable guide",
    downloadPath: "/downloads/ai-adoption-framework.txt",
    contentSlug: "ai-adoption-framework",
    contentType: "resource",
  },
  "website-planning-checklist": {
    id: "website-planning-checklist",
    title: "Website Planning Checklist",
    description: "Discovery questions for high-converting business websites.",
    format: "Downloadable guide",
    downloadPath: "/downloads/website-planning-checklist.txt",
    contentSlug: "website-planning-checklist",
    contentType: "resource",
  },
  "vendor-selection-guide": {
    id: "vendor-selection-guide",
    title: "Software Vendor Selection Guide",
    description: "RFP criteria and vendor scorecard template.",
    format: "Downloadable guide",
    downloadPath: "/downloads/software-vendor-selection-guide.txt",
    contentSlug: "software-vendor-selection-guide",
    contentType: "resource",
  },
  "software-cost-calculator": {
    id: "software-cost-calculator",
    title: "Software Cost Calculator PDF",
    description: "Budget planning worksheet for custom software projects.",
    format: "Downloadable guide",
    downloadPath: "/downloads/software-cost-calculator.txt",
  },
  "erp-planning-template": {
    id: "erp-planning-template",
    title: "ERP Planning Template",
    description: "Module scoping and milestone planning spreadsheet.",
    format: "Downloadable template",
    downloadPath: "/downloads/erp-planning-template.txt",
    contentSlug: "complete-erp-development-guide",
    contentType: "guide",
  },
  "ai-adoption-checklist": {
    id: "ai-adoption-checklist",
    title: "AI Adoption Checklist",
    description: "Production readiness checklist for AI pilots.",
    format: "Downloadable guide",
    downloadPath: "/downloads/ai-adoption-checklist.txt",
    contentSlug: "ai-implementation-guide",
    contentType: "guide",
  },
  "crm-selection-framework": {
    id: "crm-selection-framework",
    title: "CRM Selection Framework",
    description: "Build vs buy decision matrix for sales teams.",
    format: "Downloadable guide",
    downloadPath: "/downloads/crm-selection-framework.txt",
  },
  "digital-transformation-roadmap": {
    id: "digital-transformation-roadmap",
    title: "Digital Transformation Roadmap",
    description: "12-month modernization planning template.",
    format: "Downloadable guide",
    downloadPath: "/downloads/digital-transformation-roadmap.txt",
    contentSlug: "digital-transformation-manufacturing",
    contentType: "report",
  },
};

export function getLeadMagnetById(id: string): LeadMagnet | undefined {
  return leadMagnets[id];
}
