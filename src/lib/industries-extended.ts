import type { IndustryPageData } from "./industries-data";
import { getIndustryCatalog, programmaticIndustries } from "./seo/programmatic/catalog";

function painPointToFocusTitle(pain: string): string {
  const segment = pain.split(/[—–,:]/)[0]?.trim() ?? pain;
  return segment.length > 55 ? `${segment.slice(0, 52)}…` : segment;
}

const sharedWhyMaxwell = [
  { title: "Industry-Native Engineering", description: "We understand your workflows—not just code. Domain expertise built into every sprint." },
  { title: "Compliance-Aware Architecture", description: "Security, audit trails, and regulatory requirements designed in from day one." },
  { title: "Measurable ROI Focus", description: "We define success metrics upfront and build toward quantifiable business outcomes." },
  { title: "Long-Term Partnership", description: "Post-launch support, optimization, and feature expansion as your operations evolve." },
] as const;

const coreSlugs = new Set(["manufacturing", "healthcare", "education", "logistics", "retail", "construction"]);

const EXTENDED_INDUSTRY_SEO: Partial<
  Record<string, Pick<IndustryPageData, "metaTitle" | "metaDescription" | "startingPrice">>
> = {
  cement: {
    metaTitle: "Cement Plant Software India — Dispatch & Dealer ERP",
    metaDescription:
      "Production tracking, weighbridge dispatch & dealer portals for cement plants and RMC units. GST-ready ERP from ₹5L. Get a cement software quote.",
    startingPrice: "₹5,00,000",
  },
};

export function buildExtendedIndustry(slug: string): IndustryPageData | undefined {
  if (coreSlugs.has(slug)) return undefined;
  const entry = getIndustryCatalog(slug);
  if (!entry) return undefined;

  const name = entry.name;
  const seo = EXTENDED_INDUSTRY_SEO[slug];
  return {
    slug: entry.slug as IndustryPageData["slug"],
    title: name,
    headline: `Software for ${name}. Built for How You Operate.`,
    subheadline: `Custom ERP, CRM, mobile apps, and AI for ${entry.focus}—GST-ready, Tally-integrated, engineered by ${name} domain specialists.`,
    metaTitle: seo?.metaTitle ?? `${name} Website Engineering India | Business Websites, ERP & AI`,
    metaDescription:
      seo?.metaDescription ??
      `${name} website engineering in India—business websites, custom ERP, CRM, mobile apps & AI for ${entry.focus}. Compliance: ${entry.compliance}. Maxwell Electrodeal.`,
    ...(seo?.startingPrice ? { startingPrice: seo.startingPrice } : {}),
    keywords: [
      `${name.toLowerCase()} software development company`,
      `${name.toLowerCase()} ERP development India`,
      `custom software for ${name.toLowerCase()}`,
      `${name.toLowerCase()} digital transformation`,
    ],
    icon: entry.icon,
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    accent: "#2563EB",
    focusAreas: entry.painPoints.map((p) => ({
      title: painPointToFocusTitle(p),
      description: p.charAt(0).toUpperCase() + p.slice(1),
    })),
    challenges: entry.painPoints.map((p, i) => ({
      title: `${name} challenge ${i + 1}`,
      description: p,
    })),
    solutions: [
      { title: "Custom ERP", description: `ERP modules for ${entry.focus}.`, category: "ERP", serviceSlug: "erp-development" },
      { title: "CRM & Sales", description: "Pipeline and distributor CRM.", category: "CRM", serviceSlug: "crm-development" },
      { title: "Mobile Field Apps", description: "Offline-capable mobile for plant and field teams.", category: "Mobile", serviceSlug: "mobile-app-development" },
      { title: "Industrial AI", description: "Computer vision and predictive analytics.", category: "AI", serviceSlug: "ai-solutions" },
    ],
    softwareStack: [
      { name: "React / Next.js", purpose: "Web dashboards" },
      { name: "Node.js / Python", purpose: "API and AI backends" },
      { name: "PostgreSQL", purpose: "Transactional data" },
      { name: "Flutter", purpose: "Mobile apps" },
    ],
    impactMetrics: [
      { value: "30–50%", label: "Manual work reduction", description: "Typical after ERP go-live" },
      { value: "99%+", label: "Inventory accuracy", description: "With barcode and batch tracking" },
      { value: "100%", label: "IP ownership", description: "Your code, your servers" },
    ],
    useCases: [
      { title: "Operations digitization", description: `Replace spreadsheets across ${entry.focus}.`, outcome: "Single source of truth for management" },
      { title: "Compliance reporting", description: entry.compliance, outcome: "Audit-ready documentation" },
      { title: "Multi-branch visibility", description: "Real-time dashboards across locations.", outcome: "Faster decision-making" },
      { title: "Mobile workforce", description: "Field and shop-floor data capture.", outcome: "Same-day operational visibility" },
    ],
    caseStudy: {
      title: `${name} digitization patterns`,
      client: "Published case studies — not a fabricated client",
      challenge: entry.painPoints[0] ?? "Manual operations limiting growth.",
      solution: `Website engineering and ${entry.focus} software scoped after discovery — see /case-studies for documented deliveries.`,
      results: [
        "Fixed milestone scope after workflow mapping",
        `Compliance context: ${entry.compliance}`,
        "100% IP ownership on delivery",
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "Flutter"],
    },
    workflowSteps: [
      { step: "01", title: "Discovery", description: "Map workflows on-site or virtual" },
      { step: "02", title: "Design", description: "Architecture and module prioritization" },
      { step: "03", title: "Build", description: "Agile sprints with weekly demos" },
      { step: "04", title: "Deploy", description: "Training, go-live, hypercare" },
      { step: "05", title: "Support", description: "AMC and feature expansion" },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      { question: `Do you build software for ${name}?`, answer: `Yes. We engineer websites, ERP, CRM, mobile, and AI for ${entry.focus} with ${entry.compliance} considerations.` },
      { question: `What website or software budget should a ${name.toLowerCase()} company plan?`, answer: `Business websites from published /pricing tiers; ERP/software typically ${entry.painPoints.length > 0 ? "₹6L–₹45L+ after discovery" : "scoped per module"}. See /cost guides.` },
      { question: `How is ${name} software different from generic ERP?`, answer: `${entry.compliance} workflows and ${entry.focus} require domain-specific modules — not template customization alone.` },
      { question: "Can you integrate Tally and GST?", answer: "Yes. Tally sync and GST e-invoicing are standard for Indian deployments when in scope." },
    ],
  };
}

export const extendedIndustrySlugs = programmaticIndustries
  .map((i) => i.slug)
  .filter((s) => !coreSlugs.has(s));

export function getExtendedIndustry(slug: string): IndustryPageData | undefined {
  return buildExtendedIndustry(slug);
}
