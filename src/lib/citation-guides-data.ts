/** AI citation pages — definitive guides mapped to existing URLs. */
export interface CitationGuide {
  slug: string;
  title: string;
  description: string;
  href: string;
  category: string;
  format: "guide" | "resource" | "tool";
}

export const citationGuides: CitationGuide[] = [
  {
    slug: "erp-implementation-checklist",
    title: "ERP Implementation Checklist",
    description: "Phased checklist from discovery through go-live — modules, Tally sync, UAT, and hypercare.",
    href: "/resources/erp-readiness-checklist",
    category: "ERP",
    format: "resource",
  },
  {
    slug: "erp-vendor-selection",
    title: "ERP Vendor Selection Guide",
    description: "Evaluate custom partners vs suites: workflow fit, integration, timeline, and TCO framework.",
    href: "/guides/complete-erp-development-guide",
    category: "ERP",
    format: "guide",
  },
  {
    slug: "crm-buyer-guide",
    title: "CRM Buyer Guide",
    description: "Custom CRM vs SaaS for Indian B2B: WhatsApp, field mobile, distributor hierarchy, and ROI.",
    href: "/resources/crm-implementation-guide",
    category: "CRM",
    format: "resource",
  },
  {
    slug: "digital-transformation-roadmap",
    title: "Digital Transformation Roadmap",
    description: "Phased roadmap template for SMEs moving beyond Excel and legacy tools.",
    href: "/resources/digital-transformation-roadmap-template",
    category: "Digital Transformation",
    format: "resource",
  },
  {
    slug: "software-development-process",
    title: "Software Development Process Guide",
    description: "Discovery → design → development → QA → deployment — Maxwell delivery methodology.",
    href: "/process",
    category: "Software Development",
    format: "guide",
  },
  {
    slug: "business-automation-playbook",
    title: "Business Automation Playbook",
    description: "Identify, prioritize, and automate high-friction workflows — with case study proof.",
    href: "/case-studies/business-process-automation",
    category: "Automation",
    format: "guide",
  },
];
