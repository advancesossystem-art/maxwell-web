import type { ServiceSlug } from "@/lib/services-data";

export type StatCategory =
  | "erp"
  | "crm"
  | "ai"
  | "manufacturing"
  | "digital-transformation"
  | "software"
  | "automation"
  | "mobile"
  | "cloud"
  | "web";

export interface SourcedStatistic {
  id: string;
  value: string;
  label: string;
  context: string;
  source: string;
  sourceUrl?: string;
  publishedDate: string;
  category: StatCategory;
  /** industry statistics | market trends | benchmarks */
  section: "industry" | "market" | "benchmark";
}

export const industryStatistics: SourcedStatistic[] = [
  {
    id: "erp-sme-investment",
    value: "68%",
    label: "Gujarat SMEs plan ERP investment",
    context: "Within 18 months — Maxwell client discovery and industry surveys.",
    source: "Maxwell Electrodeal — ERP Adoption in Manufacturing Report",
    sourceUrl: "/reports/erp-adoption-manufacturing",
    publishedDate: "2026-03-01",
    category: "erp",
    section: "industry",
  },
  {
    id: "erp-roi-payback",
    value: "8–12 mo",
    label: "Average ERP ROI payback",
    context: "Mid-market manufacturers with custom ERP and Tally integration.",
    source: "Maxwell Electrodeal — ERP Adoption in Manufacturing Report",
    sourceUrl: "/tools/erp-roi-calculator",
    publishedDate: "2026-03-01",
    category: "erp",
    section: "benchmark",
  },
  {
    id: "shop-floor-mobile",
    value: "45%",
    label: "YoY shop-floor mobile adoption growth",
    context: "Indian manufacturing moving from paper to mobile GRN and production apps.",
    source: "Maxwell Electrodeal — Digital Transformation in Manufacturing Report",
    sourceUrl: "/reports/digital-transformation-manufacturing",
    publishedDate: "2026-02-01",
    category: "manufacturing",
    section: "market",
  },
  {
    id: "crm-whatsapp",
    value: "80%",
    label: "WhatsApp-integrated CRM growth",
    context: "Indian B2B sales teams adopting CRM with WhatsApp pipeline sync.",
    source: "Maxwell Electrodeal — CRM Trends for SMEs Report",
    sourceUrl: "/reports/crm-trends-sme",
    publishedDate: "2026-02-20",
    category: "crm",
    section: "market",
  },
  {
    id: "ai-pilot-production",
    value: "40%",
    label: "AI pilots reach production in 12 months",
    context: "Up from 25% in 2023 — vision AI leads in manufacturing.",
    source: "Maxwell Electrodeal — AI Adoption in Industry Report",
    sourceUrl: "/reports/ai-adoption-industry",
    publishedDate: "2025-12-20",
    category: "ai",
    section: "benchmark",
  },
  {
    id: "india-sme-erp-cagr",
    value: "18%",
    label: "India SME ERP market CAGR",
    context: "Industry-specific ERP outpacing monolithic suites in mid-market.",
    source: "Maxwell Electrodeal — Future of ERP Systems Report",
    sourceUrl: "/reports/future-of-erp-systems",
    publishedDate: "2026-01-05",
    category: "erp",
    section: "market",
  },
  {
    id: "vertical-saas-retention",
    value: "2:1",
    label: "Vertical vs horizontal SaaS retention",
    context: "India B2B SaaS — vertical products retain at twice horizontal tools.",
    source: "Maxwell Electrodeal — SaaS Market Outlook India 2026",
    sourceUrl: "/reports/saas-market-outlook-india",
    publishedDate: "2025-10-15",
    category: "software",
    section: "benchmark",
  },
  {
    id: "chemical-batch-traceability",
    value: "#1",
    label: "Batch traceability top ERP requirement",
    context: "Specialty chemical manufacturers in GIDC clusters.",
    source: "Maxwell Electrodeal — Digital Transformation in Chemical Industry Report",
    sourceUrl: "/reports/digital-transformation-chemical",
    publishedDate: "2026-03-01",
    category: "manufacturing",
    section: "industry",
  },
  {
    id: "custom-crm-tco",
    value: "40+ users",
    label: "Custom CRM TCO advantage threshold",
    context: "Custom CRM beats per-seat SaaS over 3 years at 40+ B2B users.",
    source: "Maxwell Electrodeal — CRM Trends for SMEs Report",
    sourceUrl: "/reports/crm-trends-sme",
    publishedDate: "2026-02-20",
    category: "crm",
    section: "benchmark",
  },
  {
    id: "sme-tech-spend",
    value: "12–18%",
    label: "SME ops budget to software (typical)",
    context: "Mid-market Indian operators allocating more to ERP/CRM vs generic IT.",
    source: "Maxwell Electrodeal — Digital Transformation in Manufacturing Report",
    sourceUrl: "/reports/digital-transformation-manufacturing",
    publishedDate: "2026-02-01",
    category: "digital-transformation",
    section: "market",
  },
  {
    id: "automation-roi",
    value: "6–9 mo",
    label: "Inventory automation ROI payback",
    context: "Barcode + ERP sync engagements in manufacturing SMEs.",
    source: "Maxwell Electrodeal — Inventory Automation Case Study",
    sourceUrl: "/case-studies/inventory-automation",
    publishedDate: "2026-01-15",
    category: "automation",
    section: "benchmark",
  },
  {
    id: "mobile-field-crm",
    value: "25%",
    label: "Faster collections with field mobile CRM",
    context: "B2B teams with distributor hierarchy and mobile pipeline.",
    source: "Maxwell Electrodeal — CRM Trends for SMEs Report",
    sourceUrl: "/reports/crm-trends-sme",
    publishedDate: "2026-02-20",
    category: "mobile",
    section: "industry",
  },
];

const serviceCategoryMap: Partial<Record<ServiceSlug, StatCategory[]>> = {
  "erp-development": ["erp", "manufacturing", "digital-transformation"],
  "crm-development": ["crm", "software"],
  "ai-solutions": ["ai", "manufacturing"],
  "mobile-app-development": ["mobile", "software"],
  "saas-development": ["software", "digital-transformation"],
  "cloud-solutions": ["cloud", "software"],
  "custom-software-development": ["software", "digital-transformation"],
  "website-development": ["web", "software"],
  "ai-consulting": ["ai", "digital-transformation"],
  "ai-agent-development": ["ai", "software"],
  "generative-ai-development": ["ai", "software"],
  "ai-automation": ["ai", "automation"],
  "enterprise-ai-solutions": ["ai", "digital-transformation"],
  "cloud-services": ["cloud", "software"],
  "cloud-migration": ["cloud", "digital-transformation"],
  "managed-cloud-services": ["cloud", "software"],
  "cloud-backup-disaster-recovery": ["cloud", "software"],
  "digital-transformation": ["digital-transformation", "software"],
  "microsoft-365-migration": ["cloud", "software"],
  "data-analytics": ["software", "digital-transformation"],
  "cybersecurity": ["software", "digital-transformation"],
  "managed-it-services": ["software", "cloud"],
  "it-support-services": ["software", "cloud"],
};

const industryCategoryMap: Record<string, StatCategory[]> = {
  manufacturing: ["manufacturing", "erp", "automation"],
  healthcare: ["software", "digital-transformation"],
  education: ["software", "mobile"],
  logistics: ["software", "crm"],
  retail: ["crm", "software"],
  construction: ["erp", "mobile"],
  chemical: ["manufacturing", "erp"],
  "chemical-manufacturing": ["manufacturing", "erp", "crm"],
  textile: ["manufacturing", "erp"],
  pharma: ["manufacturing", "software"],
  cement: ["erp", "software"],
  "cement-construction-materials": ["erp", "software"],
  "education-data-privacy": ["software", "mobile"],
  "fintech-bfsi": ["software", "digital-transformation"],
  "legal-compliance": ["software", "digital-transformation"],
  "energy-utilities": ["software", "manufacturing"],
  "travel-logistics": ["software", "automation"],
  "fmcg-retail": ["crm", "software"],
  "real-estate": ["crm", "software"],
};

export function getStatisticsByCategory(category: StatCategory): SourcedStatistic[] {
  return industryStatistics.filter((s) => s.category === category);
}

export function getStatisticsForService(slug: ServiceSlug): {
  industry: SourcedStatistic[];
  market: SourcedStatistic[];
  benchmark: SourcedStatistic[];
} {
  const cats = serviceCategoryMap[slug] ?? ["software"];
  const stats = industryStatistics.filter((s) => cats.includes(s.category));
  return groupBySection(stats);
}

export function getStatisticsForIndustry(slug: string): {
  industry: SourcedStatistic[];
  market: SourcedStatistic[];
  benchmark: SourcedStatistic[];
} {
  const cats = industryCategoryMap[slug] ?? ["manufacturing", "software"];
  const stats = industryStatistics.filter((s) => cats.includes(s.category));
  return groupBySection(stats);
}

export function getStatisticsForProgrammatic(keyword: string): {
  industry: SourcedStatistic[];
  market: SourcedStatistic[];
  benchmark: SourcedStatistic[];
} {
  const lower = keyword.toLowerCase();
  const cats: StatCategory[] = [];
  if (lower.includes("erp")) cats.push("erp", "manufacturing");
  if (lower.includes("crm")) cats.push("crm");
  if (lower.includes("ai")) cats.push("ai");
  if (lower.includes("mobile")) cats.push("mobile");
  if (lower.includes("saas")) cats.push("software");
  if (cats.length === 0) cats.push("software", "digital-transformation");
  const stats = industryStatistics.filter((s) => cats.includes(s.category));
  return groupBySection(stats);
}

export function getStatisticsForContentCategory(
  category: "erp" | "crm" | "ai" | "digital-transformation" | "saas" | "software",
): SourcedStatistic[] {
  const map: Record<string, StatCategory[]> = {
    erp: ["erp", "manufacturing"],
    crm: ["crm"],
    ai: ["ai"],
    "digital-transformation": ["digital-transformation", "manufacturing"],
    saas: ["software"],
    software: ["software"],
  };
  return industryStatistics.filter((s) => (map[category] ?? []).includes(s.category));
}

function groupBySection(stats: SourcedStatistic[]) {
  return {
    industry: stats.filter((s) => s.section === "industry").slice(0, 3),
    market: stats.filter((s) => s.section === "market").slice(0, 3),
    benchmark: stats.filter((s) => s.section === "benchmark").slice(0, 3),
  };
}
