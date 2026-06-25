import type { GeoContent } from "@/lib/geo-content-types";
import type { IndustryPageData } from "@/lib/industries-data";
import type { ProgrammaticPageData } from "@/lib/seo/programmatic/types";
import type { ServicePageData, ServiceSlug } from "@/lib/services-data";
import { companyMetricDisplay } from "@/lib/company-metrics";
import { siteConfig } from "@/lib/constants";

const ENGINEERING_TEAM = "Maxwell Electrodeal Engineering Team";

type ServiceGeoOverride = {
  expertQuote: string;
  summary: string;
  definition: string;
  keyTakeaways: string[];
};

const SERVICE_GEO_OVERRIDES: Partial<Record<ServiceSlug, ServiceGeoOverride>> = {
  "erp-development": {
    expertQuote:
      "Most ERP failures in Indian manufacturing happen at data entry, not architecture. Operators using the system are often warehouse staff or shop-floor supervisors — not accountants. We design ERP screens for the person doing the work, not the person who signed the PO.",
    summary:
      "Maxwell Electrodeal builds ERP for how Indian manufacturers actually operate — multi-GSTIN billing, Tally sync, weighbridge integration, and shop-floor screens designed for workers wearing gloves. Every implementation starts with a process walk, not a module checklist. Clients in Gujarat use the same platform from a single trader in Ankleshwar to a 3-plant auto-components group in Pune.",
    definition:
      "Custom ERP at Maxwell Electrodeal means software built around your actual inventory, billing, and production workflows — not around what a generic template supports. We build for Indian GST compliance, Tally integration, and shop-floor reality from day one.",
    keyTakeaways: [
      "Multi-GSTIN billing, e-invoice, and Tally sync scoped before module build",
      "Shop-floor and warehouse screens designed for gloved hands and barcode guns",
      "Phased rollout — core inventory live before advanced MRP",
      "Indicative starting investment: ₹2L–₹20L with milestone billing",
    ],
  },
  "crm-development": {
    expertQuote:
      "Indian B2B sales rarely follows a linear pipeline. There are dealer schemes, credit holds, sampling requests, and WhatsApp threads that override everything in the system. A CRM that ignores this gets abandoned within 60 days. We build around how your team actually sells.",
    summary:
      "Maxwell Electrodeal builds CRM for Indian B2B sales teams where the pipeline includes distributor beat plans, scheme approvals, and WhatsApp threads that never make it into Salesforce. We map the actual sales motion — from field visit to dispatch to payment — before writing a screen. The result is a system your team uses because it matches reality, not one that gets abandoned after onboarding.",
    definition:
      "Custom CRM at Maxwell Electrodeal means pipeline software that matches how your sales team actually operates in India — distributor hierarchies, WhatsApp-based follow-up, scheme approvals, and ERP-connected order flow. No per-seat fees, no template workarounds.",
    keyTakeaways: [
      "Dealer hierarchy, beat plans, and scheme approvals mapped before UI design",
      "WhatsApp and telephony logging built into the daily sales workflow",
      "Flat infrastructure cost — no per-seat licensing at 40+ users",
      "ERP order sync from closed deal to dispatch and invoice",
    ],
  },
  "ai-solutions": {
    expertQuote:
      "AI projects fail when the data isn't ready and the use case isn't specific. We don't start with the model — we start with the decision your team needs to make faster, and work backward from there.",
    summary:
      "Maxwell Electrodeal approaches AI as an operations problem, not a technology showcase. Before any model selection, we audit the data your team already generates — dispatch records, quality inspection logs, customer call summaries — and identify the one decision that AI can make faster or more accurately. That scope discipline is why our AI projects go live in 90 days instead of running for 18 months on a proof-of-concept.",
    definition:
      "AI solutions at Maxwell Electrodeal start with a specific operational decision — defect detection on a line, demand forecasting for a SKU, or document extraction from vendor invoices — not a generic chatbot bolted onto existing software.",
    keyTakeaways: [
      "Use-case scoping and data audit before model selection",
      "Production deployment in 90 days for focused operational AI",
      "Vision AI, LLM integration, and workflow automation on owned infrastructure",
      "Compliance and data residency scoped to your industry requirements",
    ],
  },
  "mobile-app-development": {
    expertQuote:
      "Field teams don't have time to learn an app during a customer visit. Every tap we remove from a daily workflow is the difference between adoption and abandonment. We prototype with real field users before writing production code.",
    summary:
      "Maxwell Electrodeal builds mobile apps for the people who use them in difficult conditions — warehouse staff scanning barcodes, field engineers logging site visits, delivery drivers confirming PODs offline. Every app we build is tested on real devices in real conditions before go-live, with offline sync as a default, not an afterthought.",
    definition:
      "Mobile app development at Maxwell Electrodeal means React Native and Flutter apps tested with field users in Gujarat warehouses and on 4G networks — offline sync, barcode scanning, and vernacular UX included by default.",
    keyTakeaways: [
      "Offline-first architecture for field teams with patchy connectivity",
      "Prototype tested with real users before production build",
      "Barcode, GPS, camera, and biometric integrations for operations apps",
      "App Store and Play Store launch support included",
    ],
  },
  "cloud-solutions": {
    expertQuote:
      "Cloud migration decisions in India are often made on cost alone — which is how you end up with a ₹2L/month AWS bill for a system that needed a ₹15K VPS. We scope infrastructure to the actual traffic and compliance requirement, not a vendor's upsell path.",
    summary:
      "Maxwell Electrodeal scopes cloud infrastructure to actual business requirements — traffic patterns, compliance obligations, and team capability to manage it. We have migrated manufacturers from on-premise servers to AWS, moved healthcare platforms to HIPAA-aligned architecture, and built hybrid setups for clients with data residency requirements. We do not recommend cloud where on-premise serves better.",
    definition:
      "Cloud solutions at Maxwell Electrodeal mean infrastructure sized to your traffic and compliance needs — AWS, Azure, or GCP with CI/CD, monitoring, and cost controls, not a default lift-and-shift to the most expensive tier.",
    keyTakeaways: [
      "Infrastructure scoped to actual traffic — not vendor upsell defaults",
      "AWS, GCP, and Azure with CI/CD pipelines and monitoring",
      "HIPAA-aware and data-residency setups for healthcare and enterprise",
      "Hybrid and on-premise retained where cloud adds no operational value",
    ],
  },
  "website-development": {
    expertQuote:
      "A B2B website's job is to make a COO feel confident enough to fill out a form. That means clear pricing signals, real case outcomes, and loading in under 2 seconds on a 4G connection in Surat. We build for that buyer, not for award juries.",
    summary:
      "Maxwell Electrodeal builds Next.js websites that rank, load fast, and convert B2B buyers. Core Web Vitals 95+ is a baseline, not a selling point. Every site we build includes structured data, server-side rendering, and page speed optimized for Indian mobile networks — because your buyer is on a 4G connection in a Gujarat industrial estate, not a Bengaluru coworking space.",
    definition:
      "Website development at Maxwell Electrodeal means Next.js sites engineered for B2B conversion — fast load on 4G, structured data for search, and pricing signals that help a COO decide to call, not just browse.",
    keyTakeaways: [
      "Next.js with server-side rendering and structured data for SEO",
      "Core Web Vitals 95+ baseline on Indian mobile networks",
      "Conversion-focused layouts with clear pricing and case outcome signals",
      "CMS integration for marketing teams without developer dependency",
    ],
  },
  "saas-development": {
    expertQuote:
      "SaaS MVPs fail when founders optimize for features investors might ask about instead of the workflow that earns the first 20 paying customers. We scope subscription billing, tenant isolation, and onboarding for that first revenue cohort — not a hypothetical Series B scale.",
    summary:
      "Maxwell Electrodeal builds SaaS platforms from MVP to scale-ready — multi-tenant architecture, Stripe or Razorpay billing, admin dashboards, and usage analytics. We have shipped investor-ready MVPs in 8 weeks and scaled platforms to 500+ subscribers without re-architecture. You own the code; we stay for the roadmap.",
    definition:
      "SaaS development at Maxwell Electrodeal means multi-tenant architecture, subscription billing, and admin tooling scoped for your first paying customers — then built to scale without a rewrite.",
    keyTakeaways: [
      "Multi-tenant architecture with Stripe or Razorpay billing from MVP",
      "Investor-ready demos in 6–10 weeks for seed-stage founders",
      "Admin dashboards, usage analytics, and role-based access",
      "100% IP ownership on completion",
    ],
  },
  "custom-software-development": {
    expertQuote:
      "Internal software projects stall when IT writes requirements without sitting with the team that runs the process. We embed with warehouse supervisors, finance controllers, and dispatch coordinators before we lock architecture — because their workarounds are usually the real spec.",
    summary:
      "Maxwell Electrodeal builds custom software for operations teams who have outgrown spreadsheets and off-the-shelf tools — inventory portals, dispatch systems, quality dashboards, and internal workflow apps. Every project starts with a process walk on your shop floor or in your back office, not a requirements document written in isolation.",
    definition:
      "Custom software at Maxwell Electrodeal means internal tools and customer-facing platforms built around how your team actually works — with full source code ownership and no vendor lock-in.",
    keyTakeaways: [
      "Process walk with operations teams before architecture is locked",
      "API integrations with Tally, ERP, WhatsApp, and legacy databases",
      "Phased delivery with weekly demos and milestone billing",
      `${companyMetricDisplay.clientRetention} client retention after go-live`,
    ],
  },
};

function getServiceGeoOverride(service: ServicePageData): ServiceGeoOverride | undefined {
  return SERVICE_GEO_OVERRIDES[service.slug as ServiceSlug];
}

export function buildServiceGeo(service: ServicePageData): GeoContent {
  const override = getServiceGeoOverride(service);

  return {
    quickAnswerQuestion: `What does ${service.title.toLowerCase()} include for Indian businesses?`,
    quickAnswer: `${service.subheadline} Typical engagements start from ${service.startingPrice} with milestone billing, full IP ownership, and delivery aligned to GST, Tally, and operational workflows where relevant.`,
    keyTakeaways:
      override?.keyTakeaways ??
      [
        service.solutions[0]?.title ?? "Custom workflow fit",
        service.features[0]?.title ?? "Full IP ownership",
        `Indicative starting investment: ${service.startingPrice}`,
        "Weekly demos, documented handoff, and post-launch support",
      ].slice(0, 4),
    definition: {
      term: service.title,
      text:
        override?.definition ??
        `${service.title} at ${siteConfig.name} means custom engineering for your workflows — ${service.features[0]?.description ?? service.subheadline}`,
    },
    expertQuote: {
      author: ENGINEERING_TEAM,
      role: "",
      text:
        override?.expertQuote ??
        `We scope ${service.title.toLowerCase()} from operational reality first — GST, Tally, mobile, and branch logic included when your business requires them, not as change-order surprises later.`,
    },
    summary:
      override?.summary ??
      `${siteConfig.name} delivers ${service.title.toLowerCase()} with milestone billing, owned code, and engineers who have shipped production systems in ${service.industries.slice(0, 2).map((i) => i.name).join(" and ")}.`,
    faqs: service.faqs,
  };
}

export function buildIndustryGeo(industry: IndustryPageData): GeoContent {
  const priceNote = industry.startingPrice ? ` Typical engagements start from ${industry.startingPrice}.` : "";
  return {
    quickAnswerQuestion: `What software do ${industry.title.toLowerCase()} companies need?`,
    quickAnswer: `${industry.subheadline}${priceNote}`.trim(),
    keyTakeaways: [
      ...industry.impactMetrics.slice(0, 2).map((m) => `${m.value} ${m.label}`),
      ...industry.solutions.slice(0, 2).map((s) => s.title),
    ].slice(0, 5),
    definition: {
      term: `${industry.title} software`,
      text: `Industry-specific platforms for ${industry.title.toLowerCase()} — addressing ${industry.challenges[0]?.title ?? "operational visibility"}, compliance, and integration with finance and field teams.`,
    },
    expertQuote: {
      author: ENGINEERING_TEAM,
      role: "",
      text: `${industry.title} operators need software that matches batch, shop-floor, or patient workflows — not generic modules renamed for your vertical.`,
    },
    summary: `${siteConfig.name} builds for ${industry.title.toLowerCase()} with phased rollouts, measurable ROI, and references from comparable engagements documented in our case studies.`,
    faqs: industry.faqs,
  };
}

export function buildProgrammaticGeo(page: ProgrammaticPageData): GeoContent {
  const isCost = page.pageType === "cost";
  const isCompare = page.pageType === "compare";

  const quickAnswerQuestion = isCost
    ? `What does ${page.primaryKeyword} cost?`
    : isCompare
      ? `${page.primaryKeyword} — which is better?`
      : `What should you know about ${page.primaryKeyword}?`;

  const quickAnswer = isCost
    ? `${page.subheadline} Indicative ranges are in the pricing table below; final quotes depend on modules, integrations (Tally/GST), mobile apps, and data migration scope.`
    : isCompare && page.comparisonMatrix
      ? page.comparisonMatrix.summary
      : page.intro.split(".").slice(0, 2).join(".") + ".";

  const keyTakeaways = [
    ...page.approach.slice(0, 3),
    ...(page.sections[0]?.bullets?.slice(0, 2) ?? []),
  ].slice(0, 5);

  return {
    quickAnswerQuestion,
    quickAnswer,
    keyTakeaways,
    expertQuote: {
      author: ENGINEERING_TEAM,
      role: "",
      text: isCost
        ? "Budget with tier scope and integration line items explicit — Tally sync and shop-floor mobile are where 'cheap' quotes become expensive change orders."
        : "Compare build-vs-buy on 3-year TCO and workflow fit, not demo polish or license sticker price.",
    },
    summary: page.sections[page.sections.length - 1]?.content ?? page.intro,
    faqs: page.faqs,
  };
}

export function buildReportGeo(report: {
  title: string;
  excerpt: string;
  industry: string;
  keyFindings: string[];
  category: string;
}): GeoContent {
  return {
    quickAnswerQuestion: `What does this report cover?`,
    quickAnswer: report.excerpt,
    keyTakeaways: report.keyFindings.slice(0, 5),
    expertQuote: {
      author: ENGINEERING_TEAM,
      role: "",
      text: `This ${report.industry} analysis reflects delivery patterns from Maxwell Electrodeal engagements — use it to benchmark your roadmap, not as generic market hype.`,
    },
    summary: report.keyFindings.join(" "),
  };
}

export function buildResourceGeo(resource: {
  title: string;
  excerpt: string;
  benefits: string[];
  resourceType: string;
}): GeoContent {
  return {
    quickAnswerQuestion: `What is the ${resource.title}?`,
    quickAnswer: resource.excerpt,
    keyTakeaways: resource.benefits.slice(0, 5),
    summary: `Downloadable ${resource.resourceType.replace("-", " ")} — ${resource.benefits[0] ?? resource.excerpt}`,
  };
}
