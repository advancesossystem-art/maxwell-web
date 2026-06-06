import type { Report } from "./schema";
import { calculateReadingTime } from "./utils";

function report(def: Omit<Report, "type" | "readingTimeMinutes">): Report {
  return {
    ...def,
    type: "report",
    readingTimeMinutes: calculateReadingTime(def.sections, 800),
  };
}

export const reportsList: Report[] = [
  report({
    slug: "digital-transformation-manufacturing",
    title: "Digital Transformation in Manufacturing",
    excerpt: "2026 industry report: ERP adoption, IoT integration, and AI on the shop floor across Indian manufacturing.",
    metaTitle: "Digital Transformation in Manufacturing — Industry Report",
    metaDescription: "Manufacturing digital transformation report 2026: ERP, IoT, AI adoption trends in Indian industry.",
    publishedAt: "2026-02-01",
    updatedAt: "2026-02-01",
    authorId: "maxwell-team",
    category: "digital-transformation",
    tags: ["Manufacturing", "Report"],
    industry: "Manufacturing",
    featured: true,
    gated: true,
    downloadMagnetId: "digital-transformation-roadmap",
    keyFindings: [
      "68% of Gujarat SMEs plan ERP investment within 18 months",
      "Shop-floor mobile adoption grew 45% YoY",
      "AI quality inspection ROI averages 8 months",
      "Tally integration remains #1 technical requirement",
    ],
    sections: [
      { type: "paragraph", text: "Indian manufacturing is digitizing faster than global averages—but adoption gaps remain between large enterprises and SMEs." },
      { type: "heading", level: 2, text: "Executive Summary" },
      { type: "paragraph", text: "Based on 40+ client engagements and industry surveys, this report maps technology priorities for 2026–2028." },
      { type: "heading", level: 2, text: "ERP & Operations" },
      { type: "paragraph", text: "Custom ERP outpaces generic SAP implementations for mid-market manufacturers with unique shop-floor processes." },
      { type: "heading", level: 2, text: "AI on the Shop Floor" },
      { type: "paragraph", text: "Computer vision for safety and quality leads AI adoption—LLM use cases remain in back-office functions." },
    ],
  }),
  report({
    slug: "healthcare-software-trends",
    title: "Healthcare Software Trends 2026",
    excerpt: "Patient portals, telehealth, HIPAA-aware architecture, and hospital management system evolution.",
    metaTitle: "Healthcare Software Trends — 2026 Report",
    metaDescription: "Healthcare software trends 2026: patient apps, telehealth, compliance, and HMS evolution in India.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    authorId: "maxwell-team",
    category: "software-development",
    tags: ["Healthcare", "Report"],
    industry: "Healthcare",
    gated: true,
    downloadMagnetId: "digital-transformation-roadmap",
    keyFindings: [
      "Patient portal MAU grew 120% post-2024",
      "ABDM integration now standard in new HMS builds",
      "Offline-first clinic apps essential for tier-2 cities",
      "Telehealth consolidation around 3–4 dominant platforms",
    ],
    sections: [
      { type: "paragraph", text: "Healthcare digitization accelerated post-pandemic—but compliance and offline access define winners in Indian markets." },
      { type: "heading", level: 2, text: "Patient Engagement" },
      { type: "paragraph", text: "Apps with appointment booking, records access, and WhatsApp reminders drive highest satisfaction scores." },
    ],
  }),
  report({
    slug: "ai-adoption-industry",
    title: "AI Adoption in Industry",
    excerpt: "Cross-industry analysis of AI pilots, production deployments, and ROI benchmarks.",
    metaTitle: "AI Adoption in Industry — 2026 Report",
    metaDescription: "AI adoption industry report: pilot success rates, production patterns, ROI by vertical.",
    publishedAt: "2025-12-20",
    updatedAt: "2026-01-10",
    authorId: "maxwell-team",
    category: "ai",
    tags: ["AI", "Report"],
    industry: "Cross-Industry",
    trending: true,
    gated: true,
    downloadMagnetId: "ai-adoption-framework",
    keyFindings: [
      "40% of AI pilots reach production within 12 months (up from 25% in 2023)",
      "Vision AI delivers fastest measurable ROI in manufacturing",
      "LLM ROI strongest in document processing and support",
      "Data quality investment correlates 0.8 with pilot success",
    ],
    sections: [
      { type: "paragraph", text: "AI hype is cooling; production engineering is accelerating. This report separates signal from vendor noise." },
      { type: "heading", level: 2, text: "Adoption by Vertical" },
      { type: "paragraph", text: "Manufacturing leads vision AI; healthcare leads document AI; logistics leads route optimization." },
    ],
  }),
  report({
    slug: "future-of-erp-systems",
    title: "The Future of ERP Systems",
    excerpt: "Cloud ERP, AI-assisted forecasting, and composable architecture trends through 2030.",
    metaTitle: "Future of ERP Systems — Industry Report",
    metaDescription: "Future of ERP report: cloud, AI forecasting, composable ERP, and India market trends to 2030.",
    publishedAt: "2025-11-01",
    updatedAt: "2026-01-05",
    authorId: "maxwell-team",
    category: "erp",
    tags: ["ERP", "Report"],
    industry: "Cross-Industry",
    gated: false,
    keyFindings: [
      "Composable ERP modules replace monolithic suites for mid-market",
      "AI forecasting embedded in inventory modules by 2028",
      "Mobile shop-floor becomes default, not addon",
      "India SME ERP market growing 18% CAGR",
    ],
    sections: [
      { type: "paragraph", text: "ERP is evolving from record systems to operational intelligence platforms—with India as a high-growth market." },
      { type: "heading", level: 2, text: "2030 Predictions" },
      { type: "paragraph", text: "Natural language interfaces for shop-floor queries; automated exception handling; predictive maintenance standard." },
    ],
  }),
  report({
    slug: "saas-market-outlook-india",
    title: "SaaS Market Outlook India 2026",
    excerpt: "B2B SaaS funding, vertical SaaS, and build-vs-buy trends in the Indian market.",
    metaTitle: "SaaS Market Outlook India 2026",
    metaDescription: "India SaaS market outlook 2026: B2B trends, vertical SaaS, funding, and product engineering.",
    publishedAt: "2025-10-15",
    updatedAt: "2025-12-01",
    authorId: "maxwell-team",
    category: "saas",
    tags: ["SaaS", "India", "Report"],
    industry: "Technology",
    popular: true,
    gated: true,
    downloadMagnetId: "software-cost-calculator",
    keyFindings: [
      "Vertical SaaS outpaces horizontal in India 2:1 on retention",
      "Median MVP timeline compressed to 7 weeks with offshore partners",
      "GST-native billing is competitive requirement",
      "AI features increase conversion 25% on tier upgrades",
    ],
    sections: [
      { type: "paragraph", text: "India's B2B SaaS ecosystem is maturing—investors demand faster path to revenue and defensible vertical depth." },
      { type: "heading", level: 2, text: "Market Dynamics" },
      { type: "paragraph", text: "Global capability centers and startup studios drive demand for product engineering partners with SaaS DNA." },
    ],
  }),
];

export const reportSlugs = reportsList.map((r) => r.slug);
export const reportsMap = Object.fromEntries(reportsList.map((r) => [r.slug, r]));

export function getReportBySlug(slug: string): Report | undefined {
  return reportsMap[slug];
}

export function getAllReports(): Report[] {
  return reportsList;
}
