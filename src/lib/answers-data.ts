import type { ContentCategorySlug, ContentFAQ } from "./content/schema";

export interface MaxwellAnswer {
  slug: string;
  question: string;
  shortAnswer: string;
  metaTitle: string;
  metaDescription: string;
  category: ContentCategorySlug;
  authorId: string;
  publishedAt: string;
  updatedAt: string;
  definition?: { term: string; text: string };
  examples: string[];
  businessContext: string;
  benefits: string[];
  limitations: string[];
  comparisonTable?: { headers: string[]; rows: string[][] };
  expertQuote?: { author: string; role: string; text: string };
  statistics?: { value: string; label: string; source: string; sourceUrl?: string }[];
  faqs: ContentFAQ[];
  relatedLinks: { label: string; href: string }[];
  cta: { title: string; description: string; href: string; label: string };
}

const answers: MaxwellAnswer[] = [
  {
    slug: "best-erp-for-manufacturing",
    question: "What ERP is best for manufacturing companies?",
    shortAnswer:
      "The best ERP for manufacturing is one built around your BOM, job-work, shop-floor, and Tally/GST workflows — not a generic template. Mid-market manufacturers in India typically succeed with custom or highly configured ERP when multi-plant, batch, or job-work logic is core to operations.",
    metaTitle: "What ERP Is Best For Manufacturing Companies? — Maxwell Answers",
    metaDescription:
      "Direct answer: best ERP for manufacturing depends on BOM, job-work, shop-floor mobile, and Tally integration. Compare custom vs SAP with examples and ROI context.",
    category: "erp",
    authorId: "maxwell-team",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-01",
    definition: {
      term: "Manufacturing ERP",
      text: "An enterprise resource planning system tailored to production: inventory, BOM, shop-floor, quality, dispatch, and finance sync — often integrated with Tally for Indian GST compliance.",
    },
    examples: [
      "Precision parts manufacturer: custom ERP with barcode GRN, production scheduling, and Tally voucher sync — 40% less manual entry.",
      "Chemical batch plant: batch traceability, MSDS, reactor scheduling — generic ERP failed without ₹30L+ customization.",
      "Multi-GSTIN textile unit: job-work tracking, grey-to-finish WIP, distributor dispatch — off-the-shelf ERP lacked hierarchy logic.",
    ],
    businessContext:
      "Indian manufacturers often outgrow Excel and Tally-only workflows between ₹5Cr–₹100Cr revenue. The decision is not SAP vs Zoho — it is whether your production logic is standard enough for a template or specific enough to justify custom modules.",
    benefits: [
      "Real-time inventory and WIP visibility across plants",
      "Faster month-end with automated Tally sync",
      "Shop-floor mobile reduces paper and data lag",
      "Audit-ready traceability for quality and compliance",
    ],
    limitations: [
      "Custom ERP requires disciplined discovery (2–4 weeks minimum)",
      "Change management is as important as software",
      "Integration debt grows if Tally/GST rules are deferred",
    ],
    comparisonTable: {
      headers: ["Approach", "Best for", "Typical timeline", "Risk"],
      rows: [
        ["Custom ERP", "Unique BOM/job-work/multi-plant", "12–20 weeks", "Scope creep without discovery"],
        ["Configured SAP/Oracle", "Large enterprise, standard processes", "9–18 months", "High TCO for mid-market"],
        ["Vertical SaaS ERP", "Simple discrete manufacturing", "4–8 weeks", "Workflow fit gaps at scale"],
      ],
    },
    expertQuote: {
      author: "Sneha Reddy",
      role: "ERP Solutions Lead, Maxwell Electrodeal",
      text: "Manufacturing ERP wins when shop-floor reality is mapped before modules are named. Spend time on the floor — not in vendor demo rooms.",
    },
    statistics: [
      {
        value: "68%",
        label: "Gujarat SMEs plan ERP investment within 18 months",
        source: "Maxwell ERP Adoption in Manufacturing Report",
        sourceUrl: "/reports/erp-adoption-manufacturing",
      },
    ],
    faqs: [
      {
        question: "Is SAP best for small manufacturers?",
        answer:
          "SAP can work at scale but mid-market manufacturers with job-work or custom BOM often face high customization cost and long timelines. Custom or vertical ERP frequently delivers faster ROI below ₹100Cr revenue.",
      },
      {
        question: "Does manufacturing ERP need Tally integration?",
        answer:
          "In India, yes for most SMEs — finance teams rely on Tally for GST, vouchers, and audit. Bi-directional sync with conflict resolution is a core requirement, not a phase-2 nice-to-have.",
      },
    ],
    relatedLinks: [
      { label: "Complete ERP Development Guide", href: "/guides/complete-erp-development-guide" },
      { label: "ERP Adoption in Manufacturing Report", href: "/reports/erp-adoption-manufacturing" },
      { label: "Manufacturing ERP Case Study", href: "/case-studies/manufacturing-erp" },
    ],
    cta: {
      title: "Need an ERP fit assessment?",
      description: "Get a scoped recommendation based on your BOM, plants, and Tally setup.",
      href: "/get-estimate?service=erp",
      label: "Get ERP estimate",
    },
  },
  {
    slug: "erp-implementation-cost",
    question: "How much does ERP implementation cost?",
    shortAnswer:
      "ERP implementation for Indian mid-market manufacturers typically ranges from ₹8L–₹35L for custom builds and ₹15L–₹80L+ for enterprise suites with heavy customization. Cost drivers: module count, integrations (Tally, logistics), shop-floor mobile, and data migration complexity.",
    metaTitle: "How Much Does ERP Implementation Cost? — Maxwell Answers",
    metaDescription:
      "ERP implementation cost in India: ₹8L–₹35L custom, enterprise higher. Modules, Tally integration, mobile, and migration drive price. Examples and ROI context.",
    category: "erp",
    authorId: "maxwell-team",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-01",
    examples: [
      "Single-plant discrete manufacturer: ₹12L–₹18L — inventory, production, QC, Tally sync, 14-week rollout.",
      "Multi-plant with job-work: ₹22L–₹35L — WIP, inter-plant transfers, mobile shop-floor.",
      "Chemical batch ERP: ₹25L–₹40L — batch traceability, MSDS, compliance reporting.",
    ],
    businessContext:
      "Price without scope is misleading. A ₹10L ERP with missing Tally sync costs more in manual reconciliation than a ₹18L system with automated finance sync. Always compare TCO over 3 years, not license sticker price.",
    benefits: ["Predictable milestone billing", "Phased go-live reduces cash-flow spike", "Owned IP — no per-seat tax"],
    limitations: ["Underscoped discovery leads to change orders", "Data migration often underestimated"],
    statistics: [
      {
        value: "8–12 mo",
        label: "Average ERP ROI payback for mid-market",
        source: "Maxwell ERP Adoption Report",
        sourceUrl: "/reports/erp-adoption-manufacturing",
      },
    ],
    faqs: [
      {
        question: "What is included in ERP implementation cost?",
        answer:
          "Discovery, architecture, development, QA, deployment, training, and hypercare. Integrations, mobile apps, and migration are line items that should be explicit in the SOW.",
      },
    ],
    relatedLinks: [
      { label: "ERP cost guide", href: "/cost/erp-development-cost" },
      { label: "ERP ROI Calculator", href: "/tools/erp-roi-calculator" },
    ],
    cta: {
      title: "Get a scoped ERP estimate",
      description: "Module-level pricing based on your workflow — no generic rate cards.",
      href: "/get-estimate?service=erp",
      label: "Request estimate",
    },
  },
  {
    slug: "erp-vs-crm-which-one",
    question: "ERP vs CRM: Which one does your business need?",
    shortAnswer:
      "Choose ERP when operations, inventory, production, or finance sync is the bottleneck. Choose CRM when pipeline visibility, follow-ups, and revenue predictability are the gap. Many growing B2B companies need both — integrated, not duplicated.",
    metaTitle: "ERP vs CRM: Which One Does Your Business Need? — Maxwell Answers",
    metaDescription:
      "ERP vs CRM explained: when to prioritize operations vs sales pipeline. Comparison table, examples, and integration guidance for Indian B2B companies.",
    category: "crm",
    authorId: "maxwell-team",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-01",
    definition: {
      term: "ERP vs CRM",
      text: "ERP manages operations and resources (inventory, production, finance). CRM manages customer relationships (leads, deals, follow-ups). They overlap on customer master data but serve different primary users.",
    },
    examples: [
      "Distributor with stockouts but strong sales team: ERP first — then CRM for pipeline.",
      "Services firm with long sales cycles, no inventory: CRM first — lightweight ops later.",
      "Manufacturer selling B2B with repeat orders: ERP + CRM with shared customer and order sync.",
    ],
    businessContext:
      "Spreadsheets often mask the real gap. If month-end reconciliation hurts, ERP. If deals slip because follow-ups are informal, CRM. Revenue between ₹2Cr–₹50Cr is where both systems start compounding.",
    benefits: ["Clear ownership per team", "Single customer truth when integrated", "Better forecasting with ops + sales data"],
    limitations: ["Two systems without integration creates duplicate entry", "SaaS per-seat costs scale quickly for field teams"],
    comparisonTable: {
      headers: ["", "ERP", "CRM"],
      rows: [
        ["Primary users", "Operations, finance, production", "Sales, marketing, account managers"],
        ["Core problem", "Stock, production, billing accuracy", "Pipeline, follow-up, conversion"],
        ["Typical ROI signal", "Inventory accuracy, faster close", "Shorter sales cycle, higher win rate"],
      ],
    },
    faqs: [
      {
        question: "Can one system do both?",
        answer:
          "Some suites claim both; mid-market manufacturers often need deeper ops modules than CRM suites provide. Integration between best-fit systems is common.",
      },
    ],
    relatedLinks: [
      { label: "CRM Trends for SMEs", href: "/reports/crm-trends-sme" },
      { label: "Manufacturing CRM Case Study", href: "/case-studies/manufacturing-crm" },
      { label: "ERP vs CRM compare page", href: "/compare/erp-vs-crm" },
    ],
    cta: {
      title: "Unsure which to prioritize?",
      description: "Book a discovery call — we map pain points to ERP, CRM, or both.",
      href: "/book-consultation",
      label: "Book discovery call",
    },
  },
  {
    slug: "when-to-move-beyond-excel",
    question: "When should a company move beyond Excel?",
    shortAnswer:
      "Move beyond Excel when reconciliation takes more than 3–5 days monthly, multiple people edit the same sheets, version conflicts cause stock or billing errors, or leadership cannot trust real-time numbers. That threshold often hits between 30–150 employees or 3+ locations.",
    metaTitle: "When Should A Company Move Beyond Excel? — Maxwell Answers",
    metaDescription:
      "Signs you have outgrown Excel: reconciliation delays, version conflicts, no real-time visibility. Thresholds, examples, and next steps for Indian businesses.",
    category: "digital-transformation",
    authorId: "maxwell-team",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-01",
    examples: [
      "Three warehouses sharing one inventory sheet — stockouts despite 'system' showing stock.",
      "Production schedule on WhatsApp + Excel — no capacity view, missed dispatch dates.",
      "Finance spends 2 weeks on month-end — shop-floor data re-keyed into Tally.",
    ],
    businessContext:
      "Excel is not the enemy — it is the wrong system of record at scale. The transition should be phased: stabilize master data, digitize the highest-error process first, then expand modules.",
    benefits: ["Single source of truth", "Role-based access", "Audit trail", "Automation of repetitive entry"],
    limitations: ["Migration requires data cleanup", "Teams need training and champions"],
    statistics: [
      {
        value: "87% → 99%",
        label: "Inventory accuracy improvement after ERP (client benchmark)",
        source: "Manufacturing ERP Case Study",
        sourceUrl: "/case-studies/manufacturing-erp",
      },
    ],
    faqs: [
      {
        question: "Can we keep Excel for analysis?",
        answer: "Yes — export from ERP/CRM for ad-hoc analysis. Excel should not be the live operational database.",
      },
    ],
    relatedLinks: [
      { label: "Digital Transformation Assessment", href: "/tools/digital-transformation-assessment" },
      { label: "Business Process Automation", href: "/case-studies/business-process-automation" },
    ],
    cta: {
      title: "Ready for a phased digitization plan?",
      description: "Start with the process costing you the most manual hours.",
      href: "/get-estimate",
      label: "Get free estimate",
    },
  },
  {
    slug: "erp-implementation-timeline",
    question: "How long does ERP implementation take?",
    shortAnswer:
      "Custom ERP for mid-market manufacturers typically takes 12–20 weeks for core modules (inventory, production, finance sync). Enterprise suite rollouts often run 9–18 months. Phased go-live — one plant or module at a time — reduces risk and can put ROI on the board in quarter one.",
    metaTitle: "How Long Does ERP Implementation Take? — Maxwell Answers",
    metaDescription:
      "ERP implementation timeline: 12–20 weeks custom mid-market, 9–18 months enterprise. Phased rollout, milestones, and factors that speed or delay go-live.",
    category: "erp",
    authorId: "maxwell-team",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-01",
    examples: [
      "14-week manufacturing ERP: discovery (2w) → core modules (8w) → UAT + go-live (4w).",
      "Phased chemical ERP: batch traceability first, then MSDS and advanced scheduling.",
    ],
    businessContext:
      "Timeline extends with unclear scope, missing executive sponsor, or parallel legacy processes. Weekly demos and milestone billing keep delivery accountable.",
    benefits: ["Phased value delivery", "Earlier ROI on priority modules", "Lower big-bang risk"],
    limitations: ["Parallel run periods add calendar time", "Data migration quality affects go-live confidence"],
    comparisonTable: {
      headers: ["Phase", "Duration", "Output"],
      rows: [
        ["Discovery", "2–4 weeks", "Process maps, integration spec, roadmap"],
        ["Build", "6–12 weeks", "Core modules, Tally sync, mobile"],
        ["UAT & go-live", "2–4 weeks", "Training, hypercare, production cutover"],
      ],
    },
    faqs: [
      {
        question: "Can ERP go live faster than 12 weeks?",
        answer:
          "Possible for narrow scope (e.g., inventory + dispatch only) with clean master data. Adding production, QC, and multi-plant logic realistically needs 12+ weeks.",
      },
    ],
    relatedLinks: [
      { label: "Project Timeline Estimator", href: "/tools/project-timeline-estimator" },
      { label: "Complete ERP Development Guide", href: "/guides/complete-erp-development-guide" },
    ],
    cta: {
      title: "Need a realistic timeline for your scope?",
      description: "We map modules and integrations to a milestone plan.",
      href: "/project-calculator",
      label: "Use project calculator",
    },
  },
  {
    slug: "roi-of-erp-implementation",
    question: "What is the ROI of ERP?",
    shortAnswer:
      "ERP ROI for mid-market manufacturers commonly pays back in 8–12 months through reduced manual entry, inventory accuracy, faster billing, and fewer stockouts. Typical operational gains: 25–40% less manual data work, 99%+ inventory accuracy, and ₹8L–₹15L+ annual savings for multi-site operators.",
    metaTitle: "What Is The ROI Of ERP? — Maxwell Answers",
    metaDescription:
      "ERP ROI benchmarks: 8–12 month payback, 25–40% less manual work, inventory accuracy gains. Real examples and calculation approach for Indian manufacturers.",
    category: "erp",
    authorId: "maxwell-team",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-01",
    examples: [
      "₹12L annual savings — 3-facility manufacturer, 40% less manual entry, 99.2% inventory accuracy.",
      "8-month AI quality ROI — vision inspection reducing rework scrap (related ops intelligence).",
    ],
    businessContext:
      "ROI = (manual hours saved × loaded cost) + (stockout/waste reduction) + (faster collections) − (implementation + run cost). Use your numbers — benchmarks orient, they do not replace a business case.",
    benefits: ["Quantifiable efficiency gains", "Fewer reconciliation errors", "Leadership visibility for decisions"],
    limitations: ["ROI lags if adoption is weak", "Savings require process change, not software alone"],
    statistics: [
      {
        value: "8–12 mo",
        label: "ERP payback period (mid-market benchmark)",
        source: "Maxwell ERP Adoption Report",
        sourceUrl: "/reports/erp-adoption-manufacturing",
      },
      {
        value: "40%",
        label: "Reduction in manual data entry (case benchmark)",
        source: "Manufacturing ERP Case Study",
        sourceUrl: "/case-studies/manufacturing-erp",
      },
    ],
    faqs: [
      {
        question: "How do I calculate ERP ROI?",
        answer:
          "Use the ERP ROI Calculator, then validate with discovery: count hours on reconciliation, stockouts, and rework — multiply by fully loaded cost.",
      },
    ],
    relatedLinks: [
      { label: "ERP ROI Calculator", href: "/tools/erp-roi-calculator" },
      { label: "Manufacturing ERP Case Study", href: "/case-studies/manufacturing-erp" },
    ],
    cta: {
      title: "Model your ERP ROI",
      description: "Use our calculator or request a custom business case.",
      href: "/tools/erp-roi-calculator",
      label: "Calculate ROI",
    },
  },
];

export const answerSlugs = answers.map((a) => a.slug);

export function getAllAnswers(): MaxwellAnswer[] {
  return answers;
}

export function getAnswerBySlug(slug: string): MaxwellAnswer | undefined {
  return answers.find((a) => a.slug === slug);
}
