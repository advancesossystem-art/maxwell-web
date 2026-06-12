/** Maxwell Research — original analysis linked to reports and case studies. */
export interface ResearchStudy {
  slug: string;
  title: string;
  excerpt: string;
  reportHref: string;
  industry: string;
  publishedAt: string;
  keyStats: { value: string; label: string }[];
  citations: { label: string; href: string }[];
  featured?: boolean;
}

export const researchStudies: ResearchStudy[] = [
  {
    slug: "manufacturing-technology-2026",
    title: "Manufacturing Technology Report 2026",
    excerpt: "ERP adoption, shop-floor mobile, IoT, and AI on the production line — Indian manufacturing priorities.",
    reportHref: "/reports/digital-transformation-manufacturing",
    industry: "Manufacturing",
    publishedAt: "2026-02-01",
    featured: true,
    keyStats: [
      { value: "68%", label: "SMEs planning ERP investment" },
      { value: "45%", label: "Shop-floor mobile YoY growth" },
    ],
    citations: [
      { label: "ERP Adoption in Manufacturing", href: "/reports/erp-adoption-manufacturing" },
      { label: "Manufacturing ERP Case Study", href: "/case-studies/manufacturing-erp" },
    ],
  },
  {
    slug: "erp-adoption-india",
    title: "ERP Adoption Report India",
    excerpt: "Custom vs suite ERP, Tally integration patterns, and ROI benchmarks for Indian mid-market.",
    reportHref: "/reports/erp-adoption-manufacturing",
    industry: "Cross-Industry",
    publishedAt: "2026-03-01",
    featured: true,
    keyStats: [
      { value: "18%", label: "SME ERP market CAGR" },
      { value: "8–12 mo", label: "Average payback period" },
    ],
    citations: [
      { label: "Future of ERP Systems", href: "/reports/future-of-erp-systems" },
      { label: "ERP implementation cost answer", href: "/answers/erp-implementation-cost" },
    ],
  },
  {
    slug: "crm-adoption-india",
    title: "CRM Adoption Report India",
    excerpt: "WhatsApp CRM, field mobile, distributor hierarchy, and custom vs SaaS TCO for Indian B2B.",
    reportHref: "/reports/crm-trends-sme",
    industry: "Cross-Industry",
    publishedAt: "2026-02-20",
    keyStats: [
      { value: "80%", label: "WhatsApp-integrated CRM growth" },
      { value: "25%", label: "Faster collections with field CRM" },
    ],
    citations: [
      { label: "Manufacturing CRM Case Study", href: "/case-studies/manufacturing-crm" },
      { label: "CRM ROI Calculator", href: "/tools/crm-roi-calculator" },
    ],
  },
  {
    slug: "digital-transformation-trends-india",
    title: "Digital Transformation Trends India",
    excerpt: "Phased digitization, cloud adoption, and change management patterns across verticals.",
    reportHref: "/reports/digital-transformation-manufacturing",
    industry: "Cross-Industry",
    publishedAt: "2026-02-01",
    keyStats: [
      { value: "40+", label: "Client engagements analyzed" },
      { value: "2:1", label: "Vertical SaaS retention advantage" },
    ],
    citations: [
      { label: "SaaS Market Outlook India", href: "/reports/saas-market-outlook-india" },
      { label: "Digital Transformation Roadmap", href: "/resources/digital-transformation-roadmap-template" },
    ],
  },
  {
    slug: "ai-adoption-manufacturing",
    title: "AI Adoption in Manufacturing",
    excerpt: "Vision AI, quality inspection ROI, and production LLM use cases on the shop floor.",
    reportHref: "/reports/ai-adoption-industry",
    industry: "Manufacturing",
    publishedAt: "2025-12-20",
    keyStats: [
      { value: "40%", label: "Pilots reaching production in 12 months" },
      { value: "8 mo", label: "Average vision AI ROI" },
    ],
    citations: [
      { label: "AI Safety Monitoring Case Study", href: "/case-studies/ai-safety-monitoring" },
      { label: "AI Readiness Assessment", href: "/tools/ai-readiness-assessment" },
    ],
  },
];
