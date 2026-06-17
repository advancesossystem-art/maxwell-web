export interface ToolRelatedLink {
  href: string;
  label: string;
  description?: string;
}

export const toolRelatedLinks: Record<string, ToolRelatedLink[]> = {
  "erp-roi-calculator": [
    { href: "/services/erp-development", label: "ERP Development", description: "Custom ERP for manufacturing & distribution" },
    { href: "/tools/erp-requirement-generator", label: "ERP Requirement Generator" },
    { href: "/tools/software-cost-calculator", label: "Software Cost Calculator" },
    { href: "/case-studies/manufacturing-erp", label: "Manufacturing ERP Case Study" },
  ],
  "crm-roi-calculator": [
    { href: "/services/crm-development", label: "CRM Development" },
    { href: "/tools/crm-requirement-generator", label: "CRM Requirement Generator" },
    { href: "/tools/vendor-comparison-scorecard", label: "Vendor Comparison Scorecard" },
    { href: "/get-estimate", label: "Get Project Estimate" },
  ],
  "software-cost-calculator": [
    { href: "/cost", label: "Cost Guides", description: "City & service pricing benchmarks" },
    { href: "/tools/project-timeline-estimator", label: "Project Timeline Estimator" },
    { href: "/tools/team-size-calculator", label: "Team Size Calculator" },
    { href: "/book-consultation", label: "Book Free Consultation" },
  ],
  "digital-transformation-assessment": [
    { href: "/tools/ai-readiness-assessment", label: "AI Readiness Assessment" },
    { href: "/services/custom-software-development", label: "Custom Software Development" },
    { href: "/resources", label: "Resource Center" },
    { href: "/book-consultation", label: "Book Consultation" },
  ],
  "roi-calculator": [
    { href: "/services/ai-solutions", label: "AI & Automation Solutions" },
    { href: "/tools/erp-roi-calculator", label: "ERP ROI Calculator" },
    { href: "/tools/crm-roi-calculator", label: "CRM ROI Calculator" },
  ],
  "ai-readiness-assessment": [
    { href: "/services/ai-solutions", label: "AI Solutions" },
    { href: "/tools/digital-transformation-assessment", label: "Digital Transformation Assessment" },
    { href: "/tools/erp-requirement-generator", label: "ERP Requirement Generator" },
    { href: "/book-consultation", label: "Book AI Strategy Call" },
  ],
  "vendor-comparison-scorecard": [
    { href: "/compare", label: "Vendor Comparison Guides" },
    { href: "/tools/rfp-builder", label: "RFP Builder" },
    { href: "/tools/erp-requirement-generator", label: "ERP Requirement Generator" },
    { href: "/get-estimate", label: "Get Maxwell Quote" },
  ],
  "erp-requirement-generator": [
    { href: "/services/erp-development", label: "ERP Development Services" },
    { href: "/tools/erp-roi-calculator", label: "ERP ROI Calculator" },
    { href: "/cost/erp-development-cost-india", label: "ERP Cost Guide" },
    { href: "/case-studies/manufacturing-erp", label: "ERP Case Study" },
  ],
  "crm-requirement-generator": [
    { href: "/services/crm-development", label: "CRM Development Services" },
    { href: "/tools/crm-roi-calculator", label: "CRM ROI Calculator" },
    { href: "/cost/crm-development-cost-india", label: "CRM Cost Guide" },
    { href: "/case-studies/retail-analytics", label: "CRM Case Study" },
  ],
  "project-timeline-estimator": [
    { href: "/tools/project-roadmap", label: "Project Roadmap Generator" },
    { href: "/tools/team-size-calculator", label: "Team Size Calculator" },
    { href: "/tools/software-cost-calculator", label: "Software Cost Calculator" },
    { href: "/process", label: "Our Delivery Process" },
  ],
  "team-size-calculator": [
    { href: "/tools/project-timeline-estimator", label: "Project Timeline Estimator" },
    { href: "/tools/software-cost-calculator", label: "Software Cost Calculator" },
    { href: "/team", label: "Meet Our Team" },
    { href: "/get-estimate", label: "Get Staffing Estimate" },
  ],
};

export function getToolRelatedLinks(slug: string): ToolRelatedLink[] {
  return toolRelatedLinks[slug] ?? [
    { href: "/tools", label: "All Tools" },
    { href: "/get-estimate", label: "Get Project Estimate" },
    { href: "/book-consultation", label: "Book Consultation" },
  ];
}
