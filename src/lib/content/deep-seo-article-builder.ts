import type { ContentCategorySlug } from "./schema";
import type { ArticleDef } from "./article-factory";
import type { IndustryCatalogEntry, ServiceCatalogEntry } from "../seo/programmatic/types";
import { buildIndustryIntroParagraphs } from "./industry-intro-variants";

function serviceCategory(key: string): ContentCategorySlug {
  switch (key) {
    case "erp":
      return "erp";
    case "crm":
      return "crm";
    case "ai":
      return "ai";
    case "mobile":
      return "mobile-apps";
    case "web":
      return "web-development";
    case "saas":
      return "saas";
    default:
      return "software-development";
  }
}

function serviceModules(service: ServiceCatalogEntry, industry: IndustryCatalogEntry): string[] {
  const base: Record<string, string[]> = {
    erp: [
      "Inventory & warehouse with multi-location stock",
      "Production planning / job-work (ITC-04 ready)",
      "Purchase, GRN, and vendor quality tracking",
      "Sales, dispatch, e-invoice & e-way bill",
      "Finance sync with Tally / Zoho Books",
      "Role-based dashboards for plant heads",
    ],
    crm: [
      "Lead capture from web, WhatsApp, and field visits",
      "Pipeline stages matching your approval chain",
      "Beat planning and visit logging (mobile)",
      "Quotation and sample tracking",
      "Distributor/dealer hierarchy views",
      "Sales vs collection dashboards",
    ],
    ai: [
      "Computer vision for quality or safety (where applicable)",
      "Demand / inventory forecasting models",
      "Document extraction (invoices, POs, certificates)",
      "Exception alerts on operational KPIs",
      "Explainable dashboards—not black-box scores",
    ],
    mobile: [
      "Offline-first field data capture",
      "GPS and photo proof of delivery/visit",
      "Push notifications for approvals",
      "Role-based mobile UX (rep vs manager)",
      "Sync with ERP/CRM backend APIs",
    ],
    web: [
      "SEO-optimized marketing site (Core Web Vitals 95+)",
      "Customer/dealer portal with auth",
      "Admin dashboards for operations",
      "Integration APIs to ERP/CRM",
    ],
    software: [
      "Workflow automation across departments",
      "API integrations with existing tools",
      "Custom reports and audit trails",
      "Mobile companion apps where needed",
    ],
    saas: [
      "Multi-tenant architecture with INR billing",
      "Subscription management (Razorpay/Stripe)",
      "Usage metering and admin console",
      "Customer onboarding flows",
    ],
    digital: [
      "Legacy system assessment",
      "Phased modernization roadmap",
      "Cloud migration and cutover planning",
      "Data pipeline and reporting layer",
    ],
  };
  return base[service.key] ?? base.software;
}

/** Targeted SERP meta overrides — slug-specific only; shared template unchanged. */
const ARTICLE_SEO_OVERRIDES: Record<string, { metaTitle: string; metaDescription: string }> = {
  "software-for-education-india": {
    metaTitle: "School & Education Software India 2026 — ERP, LMS & Management Systems",
    metaDescription:
      "Complete guide to education software in India: ERP for schools, LMS platforms, student data management, and fee collection systems. Compare options and costs. Custom builds from ₹75,000.",
  },
  "ai-for-textile-india": {
    metaTitle: "AI for Textile Manufacturers India 2026 — Defect Detection, Forecasting & Automation",
    metaDescription:
      "How textile manufacturers in Surat, Ahmedabad & Bhilwara are using AI for fabric defect detection, demand forecasting, dye optimization, and production automation. Use cases, ROI, and costs in India.",
  },
  "crm-for-paint-coatings-india": {
    metaTitle: "CRM for Paint & Coatings Manufacturers India 2026 — Dealer & Sales Pipeline",
    metaDescription:
      "CRM for Indian paint and coatings manufacturers — dealer network management, distributor pipelines, sample tracking, and field-force automation. Pricing ₹5L–₹20L. Build vs buy guide.",
  },
  "ai-for-renewable-energy-india": {
    metaTitle: "AI for Solar & Wind EPC India 2026 — O&M, Forecasting & Commissioning",
    metaDescription:
      "AI for Indian solar and wind EPC companies — O&M ticket triage, energy yield forecasting, commissioning checklists, and spares tracking. Costs, use cases & ROI. Implementation guide.",
  },
  "erp-for-renewable-energy-india": {
    metaTitle: "ERP for Renewable Energy Companies India 2026 — Solar & Wind O&M",
    metaDescription:
      "ERP for Indian solar and wind companies — project tracking, O&M management, spares inventory, subcontractor billing, and GST compliance. Pricing ₹8L–₹30L. Compare options.",
  },
  "ai-for-chemical-india": {
    metaTitle: "AI for Chemical Plants India — Cost & ROI Guide",
    metaDescription:
      "Batch traceability, reactor scheduling & MSDS workflows — AI use cases, ₹ pricing and 90-day roadmap for chemical manufacturers. Read now.",
  },
  "ai-for-warehouse-india": {
    metaTitle: "AI for Warehouses India — Pick, Shrink & 3PL Guide",
    metaDescription:
      "Cut pick-path waste and inventory shrinkage with AI for Indian warehouses. Costs, build vs buy & GST workflows explained. Get a free estimate.",
  },
  "software-for-warehouse-india": {
    metaTitle: "Warehouse Software India — WMS Cost Guide 2026",
    metaDescription:
      "WMS features Indian 3PLs need: e-way bill, pick paths, billing disputes & Tally sync. Real pricing and build vs buy. Explore the full guide.",
  },
  "mobile-for-import-export-india": {
    metaTitle: "Import Export App India — LC & Shipping Docs",
    metaDescription:
      "Mobile apps for Indian traders: shipping docs, LC reconciliation & multi-currency invoicing on the go. Cost guide + stack advice. Read more.",
  },
  "cloud-migration-cost-india-2026": {
    metaTitle: "Cloud Migration Cost India 2026 — AWS, Azure & GCP Pricing Guide",
    metaDescription:
      "Cloud migration cost in India 2026: ₹2L–₹25L for SMEs and manufacturers. AWS vs Azure vs GCP, hidden costs, phased migration strategy, and ROI. By Maxwell Electrodeal.",
  },
};

/** Long-form SEO article tuned to search intent: cost, build vs buy, implementation, compliance. */
export function buildDeepIndustryServiceArticle(
  industry: IndustryCatalogEntry,
  service: ServiceCatalogEntry,
  publishedAt: string,
): ArticleDef {
  const slug = `${service.key}-for-${industry.slug}-india`;
  const pain1 = industry.painPoints[0];
  const pain2 = industry.painPoints[1] ?? industry.painPoints[0];
  const modules = serviceModules(service, industry);

  const article: ArticleDef = {
    slug,
    title: `${service.label} for ${industry.name} in India: Cost, Build vs Buy & Implementation Guide (2026)`,
    excerpt: `Complete ${service.shortLabel} guide for ${industry.name} in India—${pain1}, ${service.costRangeInr} cost range, GST/compliance (${industry.compliance}), and 90-day roadmap.`,
    metaDescription: `${service.label} for ${industry.name} India 2026—fix ${pain1}. Pricing ${service.costRangeInr}, build vs buy, modules, Tally/GST integration. By Maxwell Electrodeal.`,
    category: serviceCategory(service.key),
    authorId: "maxwell-team",
    tags: [industry.name, service.shortLabel, "India", industry.slug, "implementation", "cost"],
    publishedAt,
    intro: buildIndustryIntroParagraphs(industry, service),
    sections: [
      {
        heading: `Why ${industry.name} teams search for ${service.shortLabel} in 2026`,
        paragraphs: [
          `Search volume for "${service.shortLabel.toLowerCase()} for ${industry.name.toLowerCase()}" spikes when growth exposes operational ceilings—typically after a bad audit, stock write-off, or lost OEM order traced to data errors.`,
          `Buyers are no longer asking "what is ${service.shortLabel}?" They ask: How much? Build or buy? How long to go-live? Does it work with Tally and GST? This article answers those questions for ${industry.focus}.`,
        ],
        callout: {
          variant: "info",
          title: "Who this guide is for",
          text: `Owners, CFOs, plant heads, and IT managers at ${industry.name} SMEs (₹5–500 crore turnover) evaluating ${service.shortLabel.toLowerCase()} investments in India.`,
        },
      },
      {
        heading: `The real cost of ${pain1}`,
        paragraphs: [
          `${pain1} is not an IT problem—it is a cash-flow problem. When inventory, production, or customer data lives in silos, teams re-key the same information into Tally, Excel, and WhatsApp. Each re-entry adds delay and error rate.`,
          `Most ${industry.name} units we assess underestimate manual cost by 40–60% because overtime, rework, and expedited freight are booked to operations—not "software problems."`,
        ],
        list: industry.painPoints.map(
          (p) => `${p.charAt(0).toUpperCase() + p.slice(1)} — quantified in discovery as hours/week or ₹/month leakage`,
        ),
      },
      {
        heading: `Build vs buy: ${service.shortLabel} for ${industry.name}`,
        paragraphs: [
          `Off-the-shelf tools win when your process matches the vendor's default workflow and user count stays below 25–30. Custom ${service.shortLabel.toLowerCase()} wins when ${pain2} requires workflow logic that no template supports without heavy customization fees.`,
          `Indian SMEs often choose hybrid: keep Tally for statutory accounting while custom modules handle operations, shop floor, or field force—integrated via APIs, not CSV exports.`,
        ],
        subsections: [
          {
            heading: "When to buy off-the-shelf",
            list: [
              "Standard B2B process with minimal job-work or multi-level BOM",
              "Single location, <30 users",
              "Reporting needs match vendor templates",
              "Need go-live in under 8 weeks with accepted trade-offs",
            ],
            paragraphs: [],
          },
          {
            heading: `When to build custom ${service.shortLabel.toLowerCase()}`,
            list: [
              `${industry.compliance} workflows are non-negotiable and non-standard`,
              "Multi-plant / multi-GSTIN operations",
              "Integration with weighbridge, biometric, OEM portals, or legacy machines",
              "Mobile/offline capture is core to daily operations",
              "Competitive advantage tied to how fast you operate—not only what you sell",
            ],
            paragraphs: [],
          },
        ],
      },
      {
        heading: `What ${service.shortLabel} should include for ${industry.name}`,
        paragraphs: [service.description, `Typical module set for ${industry.focus}:`],
        list: modules,
      },
      {
        heading: "Technology stack and architecture (2026)",
        paragraphs: [
          `Modern ${service.shortLabel.toLowerCase()} for Indian SMEs uses API-first architecture: React or Next.js for web, Node.js or Python for services, PostgreSQL for transactional data, Redis for queues, and AWS or Azure India regions for hosting.`,
          `Mobile field apps commonly use Flutter or React Native with offline SQLite sync. AI modules use Python/FastAPI with edge deployment when camera inference runs 24/7.`,
        ],
        list: service.technologies.map((t) => `${t} — production-proven in Maxwell ${industry.name} deployments`),
      },
      {
        heading: `${industry.compliance}: compliance without spreadsheet audits`,
        paragraphs: [
          `${industry.name} buyers face ${industry.compliance}. Software should generate audit trails automatically—who changed batch status, who approved dispatch, which GSTIN was used—not reconstruct logs before inspections.`,
          `GST e-invoice, e-way bill, ITC-04 job-work, and Tally voucher sync should be event-driven from approved transactions, not manual re-entry at month-end.`,
        ],
        list: [
          "Role-based approvals with timestamped audit log",
          "Document attachments on batch/lot/serial where required",
          "Export packs for auditors (PDF + raw data)",
          "Segregation of duties (maker/checker) on financial events",
        ],
      },
      {
        heading: `Cost and pricing: ${service.shortLabel} for ${industry.name} in India`,
        paragraphs: [
          `Indicative investment for ${industry.name} ${service.shortLabel.toLowerCase()} in 2026: ${service.costRangeInr} (${service.costRangeUsd} USD equivalent) depending on modules, integrations, mobile apps, and number of plants/users.`,
          `Pricing drivers: number of integrations (Tally, biometric, OEM API), offline mobile complexity, AI/vision modules, and multi-language UI. Fixed milestone quotes after paid discovery are standard for serious vendors.`,
        ],
        callout: {
          variant: "tip",
          title: "Compare 5-year TCO—not only year-1 license",
          text: `Include implementation, training, annual maintenance, internal IT time, and per-seat fees if evaluating SaaS. Custom build often flattens cost after go-live for 40+ users.`,
        },
        subsections: [
          {
            heading: "Typical milestone payment structure",
            list: [
              "20% — discovery & signed-off scope",
              "30% — core module UAT on staging",
              "30% — integrations + mobile + training",
              "20% — go-live + 30-day hypercare completion",
            ],
            paragraphs: [],
          },
        ],
      },
      {
        heading: "90-day implementation roadmap",
        paragraphs: [
          "Phased delivery beats big-bang. The roadmap below is what procurement teams and CIOs request in RFPs—adapt timelines to module count and integration complexity.",
        ],
        list: [
          "Days 1–14: On-site/remote discovery, process maps, pain quantification, prioritized backlog",
          "Days 15–45: Core modules on staging with weekly demos to plant/sales champions",
          "Days 46–70: Tally/GST integrations, mobile apps, data migration dry runs",
          "Days 71–85: UAT with real transactions on one line/plant/zone",
          "Days 86–90: Phased go-live, hypercare, handover documentation",
        ],
      },
      {
        heading: `Common mistakes when buying ${service.shortLabel} for ${industry.name}`,
        paragraphs: ["These patterns cause 6–18 month delays and six-figure rework:"],
        list: [
          "Skipping shop-floor/field discovery—only HO workshops",
          "Buying generic ERP/CRM and forcing process change without adoption plan",
          "No Tally/integration spec in contract—CSV exports become permanent",
          "Big-bang go-live across all plants before one site is stable",
          "No named post-go-live support SLA",
          "Vendor retains source code—you cannot switch maintainers",
        ],
      },
      {
        heading: "How to evaluate vendors (RFP scorecard)",
        paragraphs: [
          "Score vendors 1–5 on each criterion. Weight industry references and integration proof highest—not slide deck quality.",
        ],
        list: [
          `${industry.name} production references (minimum 2)`,
          "Fixed quote after documented discovery",
          "Weekly demo cadence in contract",
          "100% IP and data export rights",
          "GST/Tally integration demonstrated—not slideware",
          "Training plan for shop floor / field users",
          "Hypercare period with response time SLA",
        ],
      },
      {
        heading: "Next steps",
        paragraphs: [
          `Use Maxwell's free ${service.shortLabel} tools—ROI calculator, requirement generator, and timeline estimator—to build internal business cases before vendor calls.`,
          `Book a discovery workshop to map ${pain1} to modules and produce a fixed milestone quote for ${industry.name} ${service.shortLabel.toLowerCase()}.`,
        ],
        list: [
          `Explore ${service.serviceHref} capabilities`,
          `Run /tools/erp-roi-calculator or /tools/crm-roi-calculator for savings model`,
          `Compare cost ranges at /cost/${service.slug}-cost-india`,
        ],
      },
    ],
    faqs: [
      {
        question: `How much does ${service.shortLabel} cost for ${industry.name} in India?`,
        answer: `Indicative range: ${service.costRangeInr}. Final quote depends on modules, integrations, mobile apps, and user/plant count after discovery. See /cost/${service.slug}-cost-india for benchmarks.`,
      },
      {
        question: `How long does ${service.shortLabel} implementation take for ${industry.name}?`,
        answer: `Focused MVPs: 8–12 weeks. Full ERP/CRM with Tally integration and mobile: 14–20 weeks. Multi-plant rollouts are phased over 6–12 months.`,
      },
      {
        question: `Can ${service.shortLabel} integrate with Tally and GST e-invoice?`,
        answer: `Yes—production integrations should be bi-directional API/event based with reconciliation dashboards, not manual CSV. GST e-invoice/e-way bill should trigger from approved dispatch/sales events.`,
      },
      {
        question: `Build vs buy: what do ${industry.name} companies choose?`,
        answer: `Buy when processes are standard and users <30. Build when ${pain2} requires custom workflow, multi-plant logic, or deep ${industry.compliance} audit trails. Hybrid Tally + custom ops modules is common.`,
      },
      {
        question: `Does Maxwell serve ${industry.name} outside Gujarat?`,
        answer: `Yes—remote delivery nationwide with on-site discovery for Gujarat and major industrial clusters. References available for ${industry.focus} engagements.`,
      },
      {
        question: `What ROI should ${industry.name} expect from ${service.shortLabel}?`,
        answer: `Target measurable outcomes in 90 days: reduced re-keying hours, improved inventory accuracy %, faster lead response, or shorter month-end close. Use /tools/erp-roi-calculator to model payback before signing.`,
      },
    ],
    relatedSlugs: [
      service.key === "erp" ? "erp-development-cost-india-2026" : service.key === "crm" ? "crm-development-cost-india" : "software-development-cost-india-2026",
      "build-vs-buy-software",
      "how-to-choose-software-development-company",
    ].filter(Boolean),
  };

  const override = ARTICLE_SEO_OVERRIDES[slug];
  if (override) {
    return { ...article, metaTitle: override.metaTitle, metaDescription: override.metaDescription };
  }
  return article;
}
