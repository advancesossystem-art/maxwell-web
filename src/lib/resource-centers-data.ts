export interface IndustryResourceCenter {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  industryHref: string;
  guides: { label: string; href: string }[];
  caseStudies: { label: string; href: string }[];
  research: { label: string; href: string }[];
  reports: { label: string; href: string }[];
  tools: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
}

export const resourceCenterSlugs = [
  "manufacturing",
  "chemical",
  "textile",
  "pharma",
] as const;

export type ResourceCenterSlug = (typeof resourceCenterSlugs)[number];

const centers: Record<ResourceCenterSlug, IndustryResourceCenter> = {
  manufacturing: {
    slug: "manufacturing",
    title: "Manufacturing Resource Center",
    metaTitle: "Manufacturing Resource Center — ERP, Automation & Case Studies",
    metaDescription:
      "Manufacturing software resources: ERP guides, shop-floor mobile, case studies, research, and tools for Indian manufacturers.",
    description:
      "Guides, case studies, research, and tools for precision manufacturing, discrete production, and multi-plant operators.",
    industryHref: "/industries/manufacturing",
    guides: [
      { label: "Complete ERP Development Guide", href: "/guides/complete-erp-development-guide" },
      { label: "Best ERP for manufacturing (answer)", href: "/answers/best-erp-for-manufacturing" },
    ],
    caseStudies: [
      { label: "Manufacturing ERP", href: "/case-studies/manufacturing-erp" },
      { label: "Inventory Automation", href: "/case-studies/inventory-automation" },
      { label: "AI Safety Monitoring", href: "/case-studies/ai-safety-monitoring" },
    ],
    research: [
      { label: "Manufacturing Technology Report 2026", href: "/research" },
      { label: "ERP Adoption India", href: "/research" },
    ],
    reports: [
      { label: "ERP Adoption in Manufacturing", href: "/reports/erp-adoption-manufacturing" },
      { label: "Digital Transformation in Manufacturing", href: "/reports/digital-transformation-manufacturing" },
    ],
    tools: [
      { label: "ERP ROI Calculator", href: "/tools/erp-roi-calculator" },
      { label: "ERP Requirement Generator", href: "/tools/erp-requirement-generator" },
    ],
    faqs: [
      {
        question: "What ERP modules do manufacturers need first?",
        answer: "Inventory, production, and Tally/GST sync — then QC, maintenance, and mobile shop-floor.",
      },
      {
        question: "How long does manufacturing ERP take?",
        answer: "Typically 12–20 weeks for custom mid-market scope with phased go-live.",
      },
    ],
  },
  chemical: {
    slug: "chemical",
    title: "Chemical Industry Resource Center",
    metaTitle: "Chemical Industry Software Resources — Batch ERP & Compliance",
    metaDescription:
      "Chemical industry ERP resources: batch traceability, MSDS, reactor scheduling, case studies, and compliance guides.",
    description:
      "Batch ERP, MSDS management, traceability, and GIDC-specific workflow patterns for specialty chemical manufacturers.",
    industryHref: "/industries/manufacturing",
    guides: [{ label: "Complete ERP Development Guide", href: "/guides/complete-erp-development-guide" }],
    caseStudies: [{ label: "Chemical Industry ERP", href: "/case-studies/chemical-industry-erp" }],
    research: [{ label: "AI Adoption in Manufacturing", href: "/research" }],
    reports: [{ label: "Digital Transformation in Chemical Industry", href: "/reports/digital-transformation-chemical" }],
    tools: [{ label: "ERP Requirement Generator", href: "/tools/erp-requirement-generator" }],
    faqs: [
      {
        question: "Why do chemical plants need batch ERP?",
        answer: "Lot traceability, MSDS, reactor scheduling, and export compliance require batch-level logic generic ERP lacks.",
      },
    ],
  },
  textile: {
    slug: "textile",
    title: "Textile Industry Resource Center",
    metaTitle: "Textile Industry ERP Resources — Job-Work & WIP Tracking",
    metaDescription:
      "Textile ERP resources: job-work, grey-to-finish WIP, distributor dispatch, and case studies for textile manufacturers.",
    description: "Job-work tracking, multi-stage WIP, and distributor hierarchy for textile and garment operations.",
    industryHref: "/industries/manufacturing",
    guides: [{ label: "Complete ERP Development Guide", href: "/guides/complete-erp-development-guide" }],
    caseStudies: [{ label: "Textile Industry ERP", href: "/case-studies/textile-industry-erp" }],
    research: [{ label: "ERP Adoption India", href: "/research" }],
    reports: [{ label: "ERP Adoption in Manufacturing", href: "/reports/erp-adoption-manufacturing" }],
    tools: [{ label: "ERP ROI Calculator", href: "/tools/erp-roi-calculator" }],
    faqs: [
      {
        question: "What is unique about textile ERP?",
        answer: "Job-work between processes, grey/finish WIP, and complex distributor dispatch need hierarchy-aware inventory.",
      },
    ],
  },
  pharma: {
    slug: "pharma",
    title: "Pharma Industry Resource Center",
    metaTitle: "Pharma Software Resources — Compliance, Traceability & HMS",
    metaDescription:
      "Pharma and healthcare software resources: compliance, batch traceability, patient systems, and industry reports.",
    description: "Compliance-aware software patterns for pharma manufacturing adjacency and healthcare operators.",
    industryHref: "/industries/healthcare",
    guides: [{ label: "Healthcare software trends", href: "/reports/healthcare-software-trends" }],
    caseStudies: [{ label: "Healthcare Management", href: "/case-studies/healthcare-management" }],
    research: [{ label: "Healthcare Software Trends", href: "/reports/healthcare-software-trends" }],
    reports: [{ label: "Healthcare Software Trends 2026", href: "/reports/healthcare-software-trends" }],
    tools: [{ label: "Digital Transformation Assessment", href: "/tools/digital-transformation-assessment" }],
    faqs: [
      {
        question: "What systems do pharma-adjacent manufacturers need?",
        answer: "Batch traceability, audit trails, document control, and integration with quality workflows — often alongside Tally finance.",
      },
    ],
  },
};

export function getResourceCenterBySlug(slug: string): IndustryResourceCenter | undefined {
  return centers[slug as ResourceCenterSlug];
}

export function getAllResourceCenters(): IndustryResourceCenter[] {
  return resourceCenterSlugs.map((slug) => centers[slug]);
}
