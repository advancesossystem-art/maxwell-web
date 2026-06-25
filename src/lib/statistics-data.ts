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
    value: "22%",
    label: "Indian SMEs use formal ERP",
    context: "Majority still rely on spreadsheets, Tally-only setups, or fragmented tools.",
    source: "IDC India SMB Survey 2024",
    publishedDate: "2024-06-01",
    category: "erp",
    section: "industry",
  },
  {
    id: "erp-roi-payback",
    value: "8–12 mo",
    label: "Average ERP ROI payback",
    context: "Mid-market manufacturers with custom ERP and Tally integration.",
    source: "Deloitte India Operations Report 2023",
    publishedDate: "2023-09-01",
    category: "erp",
    section: "benchmark",
  },
  {
    id: "shop-floor-mobile",
    value: "30%",
    label: "Operational errors from manual data entry",
    context: "Manufacturing teams re-keying dispatch, GRN, and production data into spreadsheets.",
    source: "Deloitte India Operations Report 2023",
    publishedDate: "2023-09-01",
    category: "manufacturing",
    section: "market",
  },
  {
    id: "crm-whatsapp",
    value: "60%",
    label: "Sales teams use spreadsheets as primary CRM",
    context: "Indian B2B teams tracking pipeline in Excel and WhatsApp threads outside any system.",
    source: "Inc42 India SaaS Report 2024",
    publishedDate: "2024-03-01",
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
    value: "$2.5B",
    label: "India ERP market by 2027",
    context: "Projected market size driven by SME digitization and GST compliance pressure.",
    source: "NASSCOM 2024 SMB Tech Report",
    publishedDate: "2024-11-01",
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
    value: "38%",
    label: "B2B SaaS adoption growth in manufacturing",
    context: "Year-over-year increase in formal CRM and operations software among Indian manufacturers.",
    source: "NASSCOM 2025",
    publishedDate: "2025-01-01",
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
    context: "B2B teams with distributor hierarchy and mobile pipeline logging.",
    source: "Inc42 India SaaS Report 2024",
    publishedDate: "2024-03-01",
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
