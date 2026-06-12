export interface KnowledgePillar {
  id: string;
  title: string;
  description: string;
  href: string;
  links: { label: string; href: string }[];
}

export const knowledgePillars: KnowledgePillar[] = [
  {
    id: "erp",
    title: "ERP Knowledge",
    description: "Planning, Tally integration, manufacturing workflows, and ERP ROI for Indian operators.",
    href: "/blog?category=erp",
    links: [
      { label: "Complete ERP Development Guide", href: "/guides/complete-erp-development-guide" },
      { label: "ERP Adoption in Manufacturing Report", href: "/reports/erp-adoption-manufacturing" },
      { label: "ERP ROI Calculator", href: "/tools/erp-roi-calculator" },
      { label: "What ERP is best for manufacturing?", href: "/answers/best-erp-for-manufacturing" },
    ],
  },
  {
    id: "crm",
    title: "CRM Knowledge",
    description: "B2B pipelines, field mobile CRM, WhatsApp integration, and custom vs SaaS decisions.",
    href: "/blog?category=crm",
    links: [
      { label: "CRM Trends for SMEs Report", href: "/reports/crm-trends-sme" },
      { label: "CRM ROI Calculator", href: "/tools/crm-roi-calculator" },
      { label: "ERP vs CRM: which do you need?", href: "/answers/erp-vs-crm-which-one" },
    ],
  },
  {
    id: "ai",
    title: "AI Knowledge",
    description: "Production AI, computer vision, LLM integration, and adoption benchmarks.",
    href: "/blog?category=ai",
    links: [
      { label: "AI Adoption in Industry Report", href: "/reports/ai-adoption-industry" },
      { label: "AI Readiness Assessment", href: "/tools/ai-readiness-assessment" },
      { label: "AI ROI in manufacturing", href: "/answers/roi-of-erp-implementation" },
    ],
  },
  {
    id: "automation",
    title: "Automation Knowledge",
    description: "Business process automation, inventory automation, and workflow digitization.",
    href: "/case-studies/business-process-automation",
    links: [
      { label: "Inventory Automation Case Study", href: "/case-studies/inventory-automation" },
      { label: "Business Process Automation Case Study", href: "/case-studies/business-process-automation" },
      { label: "When to move beyond Excel", href: "/answers/when-to-move-beyond-excel" },
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Knowledge",
    description: "Roadmaps, change management, and phased technology adoption for SMEs and enterprises.",
    href: "/blog?category=digital-transformation",
    links: [
      { label: "Digital Transformation Assessment", href: "/tools/digital-transformation-assessment" },
      { label: "Manufacturing Digital Transformation Report", href: "/reports/digital-transformation-manufacturing" },
      { label: "Digital Transformation Roadmap (template)", href: "/resources/digital-transformation-roadmap-template" },
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing Technology Knowledge",
    description: "Shop-floor mobile, batch ERP, traceability, and industry-specific software patterns.",
    href: "/industries/manufacturing",
    links: [
      { label: "Manufacturing Resource Center", href: "/resource-centers/manufacturing" },
      { label: "Manufacturing ERP Case Study", href: "/case-studies/manufacturing-erp" },
      { label: "Chemical Industry ERP Case Study", href: "/case-studies/chemical-industry-erp" },
    ],
  },
];

export const knowledgeHubLinks = [
  { label: "Maxwell Answers", href: "/answers" },
  { label: "Guides", href: "/guides" },
  { label: "Reports", href: "/reports" },
  { label: "Research", href: "/research" },
  { label: "Resources", href: "/resources" },
  { label: "Tools", href: "/tools" },
  { label: "Founder Insights", href: "/founder-insights" },
  { label: "Project Gallery", href: "/project-gallery" },
  { label: "Citation Guides", href: "/citation-guides" },
] as const;
