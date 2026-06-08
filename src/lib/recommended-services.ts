/** Phase N — recommended services for internal navigation */

export const recommendedServicesBySlug: Record<string, { slug: string; reason: string }[]> = {
  "erp-development": [
    { slug: "crm-development", reason: "Connect sales pipeline to inventory and dispatch" },
    { slug: "mobile-app-development", reason: "Shop-floor and warehouse mobile capture" },
  ],
  "crm-development": [
    { slug: "erp-development", reason: "Sync orders, stock, and invoicing with CRM" },
    { slug: "ai-solutions", reason: "Lead scoring and sales forecasting" },
  ],
  "ai-solutions": [
    { slug: "custom-software-development", reason: "Embed AI in operational workflows" },
    { slug: "erp-development", reason: "Demand forecasting and inventory optimization" },
  ],
  "custom-software-development": [
    { slug: "erp-development", reason: "Scale into full operations platform" },
    { slug: "cloud-solutions", reason: "Reliable hosting and DevOps" },
  ],
  "mobile-app-development": [
    { slug: "crm-development", reason: "Field sales and visit logging" },
    { slug: "erp-development", reason: "Warehouse and production mobile apps" },
  ],
  "website-development": [
    { slug: "crm-development", reason: "Capture and nurture web leads" },
    { slug: "custom-software-development", reason: "Customer portals and dashboards" },
  ],
  "saas-development": [
    { slug: "cloud-solutions", reason: "Multi-tenant infrastructure" },
    { slug: "ai-solutions", reason: "Product intelligence features" },
  ],
  "cloud-solutions": [
    { slug: "custom-software-development", reason: "Application modernization" },
    { slug: "saas-development", reason: "Cloud-native SaaS architecture" },
  ],
};

export function getRecommendedServices(serviceSlug: string) {
  return recommendedServicesBySlug[serviceSlug] ?? [
    { slug: "erp-development", reason: "Operations and inventory control" },
    { slug: "crm-development", reason: "Sales pipeline and customer visibility" },
  ];
}

export const recommendedToolsByService: Record<string, { slug: string; label: string }[]> = {
  "erp-development": [
    { slug: "erp-roi-calculator", label: "ERP ROI Calculator" },
    { slug: "erp-requirement-generator", label: "ERP Requirement Generator" },
  ],
  "crm-development": [
    { slug: "crm-roi-calculator", label: "CRM ROI Calculator" },
    { slug: "crm-requirement-generator", label: "CRM Requirement Generator" },
  ],
  default: [
    { slug: "software-cost-calculator", label: "Software Cost Calculator" },
    { slug: "project-timeline-estimator", label: "Timeline Estimator" },
  ],
};

export function getRecommendedTools(serviceSlug: string) {
  return recommendedToolsByService[serviceSlug] ?? recommendedToolsByService.default;
}
