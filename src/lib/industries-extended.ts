import type { IndustryPageData } from "./industries-data";
import { getIndustryCatalog, programmaticIndustries } from "./seo/programmatic/catalog";

const sharedWhyMaxwell = [
  { title: "Industry-Native Engineering", description: "We understand your workflows—not just code. Domain expertise built into every sprint." },
  { title: "Compliance-Aware Architecture", description: "Security, audit trails, and regulatory requirements designed in from day one." },
  { title: "Measurable ROI Focus", description: "We define success metrics upfront and build toward quantifiable business outcomes." },
  { title: "Long-Term Partnership", description: "Post-launch support, optimization, and feature expansion as your operations evolve." },
] as const;

const coreSlugs = new Set(["manufacturing", "healthcare", "education", "logistics", "retail", "construction"]);

export function buildExtendedIndustry(slug: string): IndustryPageData | undefined {
  if (coreSlugs.has(slug)) return undefined;
  const entry = getIndustryCatalog(slug);
  if (!entry) return undefined;

  const name = entry.name;
  return {
    slug: entry.slug as IndustryPageData["slug"],
    title: name,
    headline: `Software for ${name}. Built for How You Operate.`,
    subheadline: `Custom ERP, CRM, mobile apps, and AI for ${entry.focus}—GST-ready, Tally-integrated, engineered by ${name} domain specialists.`,
    metaTitle: `${name} Software Development Company India | ERP, CRM & AI`,
    metaDescription: `${name} software development in India—custom ERP, CRM, mobile apps & AI for ${entry.focus}. Compliance: ${entry.compliance}. Maxwell Electrodeal.`,
    keywords: [
      `${name.toLowerCase()} software development company`,
      `${name.toLowerCase()} ERP development India`,
      `custom software for ${name.toLowerCase()}`,
      `${name.toLowerCase()} digital transformation`,
    ],
    icon: entry.icon,
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    accent: "#2563EB",
    focusAreas: entry.painPoints.map((p, i) => ({
      title: `Focus ${i + 1}`,
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
      title: `${name} Digital Transformation`,
      client: `Leading ${name.toLowerCase()} organization`,
      challenge: entry.painPoints[0] ?? "Manual operations limiting growth.",
      solution: `Custom ERP and mobile apps tailored to ${entry.focus}.`,
      results: ["Reduced manual reporting", "Improved inventory accuracy", "Faster order fulfillment"],
      tech: ["React", "Node.js", "PostgreSQL", "Flutter"],
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
      { question: `Do you build software for ${name}?`, answer: `Yes. We engineer ERP, CRM, mobile, and AI for ${entry.focus} with ${entry.compliance} considerations.` },
      { question: `How much does ${name} software cost?`, answer: "Typical projects range ₹6L–₹45L+ depending on modules. See our cost guides or get a free estimate." },
      { question: "Can you integrate Tally and GST?", answer: "Yes. Tally sync and GST e-invoicing are standard for Indian deployments." },
      { question: `What is the timeline for ${name} ERP?`, answer: "Most projects run 8–20 weeks in phased milestones." },
    ],
  };
}

export const extendedIndustrySlugs = programmaticIndustries
  .map((i) => i.slug)
  .filter((s) => !coreSlugs.has(s));

export function getExtendedIndustry(slug: string): IndustryPageData | undefined {
  return buildExtendedIndustry(slug);
}
