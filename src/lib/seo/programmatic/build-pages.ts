import { siteConfig } from "@/lib/constants";
import {
  compareTemplates,
  getIndustryCatalog,
  programmaticCities,
  programmaticCountries,
  programmaticIndustries,
  programmaticServices,
  resolveIndustrySlug,
} from "./catalog";
import {
  buildCityLocalStats,
  buildComparisonMatrix,
  buildIndustryLocalStats,
  buildPricingTable,
} from "./content-blocks";
import type { IndustryCatalogEntry, ProgrammaticPageData, ServiceCatalogEntry } from "./types";

/** Per-route SERP overrides for high-priority city × service pages (indexable). */
const CITY_SERVICE_SEO_OVERRIDES: Record<string, { metaTitle: string; metaDescription: string }> = {
  "surat-custom-software-development": {
    metaTitle: "Custom Software Company Surat — Textile & Diamond",
    metaDescription:
      "ERP, inventory & dealer systems for Surat textile and diamond businesses. On-site discovery + Vadodara delivery. Get a Surat project estimate.",
  },
  "halol-ai-development": {
    metaTitle: "AI for Manufacturers in Halol — GIDC Specialists",
    metaDescription:
      "Computer vision, predictive maintenance & process automation for Halol GIDC plants. India HQ, on-site discovery. Book a free AI feasibility call.",
  },
};

function isIndexableCityServiceSlug(slug: string): boolean {
  return slug in CITY_SERVICE_SEO_OVERRIDES;
}

function cityServiceHrefToSlug(href: string): string | null {
  const match = href.match(/^\/locations\/india\/([^/]+)\/([^/]+)$/);
  if (!match) return null;
  return `${match[1]}-${match[2]}`;
}

type InternalLinkCtx = {
  service?: ServiceCatalogEntry;
  industry?: IndustryCatalogEntry;
  industrySlug?: string;
  citySlug?: string;
  cityName?: string;
};

/** Programmatic routes marked noIndex — exclude from hub internal link graphs. */
function isNoIndexHref(href: string): boolean {
  if (/^\/industries\/[^/]+\/[^/]+$/.test(href)) return true;
  const cityServiceSlug = cityServiceHrefToSlug(href);
  if (cityServiceSlug) return !isIndexableCityServiceSlug(cityServiceSlug);
  return false;
}

function buildInternalLinks(
  base: { label: string; href: string; description?: string }[],
  ctx: InternalLinkCtx = {},
): ProgrammaticPageData["internalLinks"] {
  const links: ProgrammaticPageData["internalLinks"] = [...base];

  if (ctx.service) {
    links.push({
      label: ctx.service.label,
      href: `/solutions/${ctx.service.solutionSlug}`,
      description: `${ctx.service.shortLabel} service pillar`,
    });
    links.push({
      label: `${ctx.service.shortLabel} Services`,
      href: ctx.service.serviceHref,
      description: "Detailed service capabilities",
    });
  }

  if (ctx.industry && ctx.industrySlug) {
    links.push({
      label: `${ctx.industry.name} Industry Hub`,
      href: `/industries/${ctx.industrySlug}`,
      description: `Solutions for ${ctx.industry.focus}`,
    });
  }

  if (ctx.citySlug && ctx.cityName && ctx.service) {
    links.push({
      label: `${ctx.service.shortLabel} Cost — ${ctx.cityName}`,
      href: `/cost/${ctx.service.slug}-cost-${ctx.citySlug}`,
      description: "City pricing guide",
    });
  }

  const conversion: ProgrammaticPageData["internalLinks"] = [
    { label: "Get Free Estimate", href: "/get-estimate", description: "Ballpark pricing in 24 hours" },
    { label: "Book Free Consultation", href: "/book-consultation", description: "30-min discovery with our team" },
  ];

  const seen = new Set<string>();
  return [...links, ...conversion].filter((link) => {
    if (isNoIndexHref(link.href)) return false;
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
}

export function buildComparePage(template: (typeof compareTemplates)[number]): ProgrammaticPageData {
  const path = `/compare/${template.slug}`;
  const categoryLabel =
    template.category === "erp" ? "ERP" : template.category === "crm" ? "CRM" : template.category;
  const relatedService =
    template.category === "crm"
      ? programmaticServices.find((s) => s.key === "crm")
      : template.category === "automation"
        ? programmaticServices.find((s) => s.key === "automation")
        : programmaticServices.find((s) => s.key === "erp");

  return {
    slug: template.slug,
    path,
    pageType: "compare",
    metaTitle: `${template.left} vs ${template.right} for Indian ${categoryLabel} Teams (2026) | ${siteConfig.name}`,
    metaDescription: `${template.title} for India: side-by-side matrix, TCO factors, and when ${template.left} beats ${template.right} for GST-aware SMEs. ${template.verdict.slice(0, 80)}…`,
    comparisonMatrix: buildComparisonMatrix(template),
    primaryKeyword: template.title,
    secondaryKeywords: [
      `${template.left} vs ${template.right}`,
      `${template.left} or ${template.right}`,
      `difference between ${template.left} and ${template.right}`,
      `${template.category} comparison India`,
    ],
    headline: `${template.title}: Complete Comparison Guide`,
    subheadline: template.verdict,
    intro: `${siteConfig.name} helps Indian manufacturers, distributors, and enterprises choose between ${template.left} and ${template.right} every month. This guide cuts through vendor marketing so CTOs and operations heads can decide with clarity—not hype.`,
    sections: [
      {
        title: `When ${template.left} wins`,
        content: template.chooseLeft,
        bullets: template.leftPros,
      },
      {
        title: `When ${template.right} wins`,
        content: template.chooseRight,
        bullets: template.rightPros,
      },
      {
        title: "Our recommendation for Indian businesses",
        content: `${template.verdict} Maxwell Electrodeal builds custom ${template.category === "crm" ? "CRM" : template.category === "erp" ? "ERP" : "software"} when off-the-shelf tools force costly workarounds—especially for GST, Tally, shop-floor mobile, and distributor workflows.`,
        bullets: [
          "Book a free discovery call before committing to a platform",
          "Run a 2-week workflow audit to score build-vs-buy fit",
          "Model 3-year TCO including customization and per-user licenses",
        ],
      },
    ],
    challenges: [
      { title: "Vendor bias in comparisons", description: "Resellers promote whichever product pays highest commission—not what fits your workflow." },
      { title: "Hidden customization costs", description: "Off-the-shelf platforms often need ₹5L–₹20L+ customization to match how your team actually works." },
      { title: "Integration debt", description: "Choosing without Tally, GST, or shop-floor requirements leads to expensive phase-two projects." },
    ],
    approach: [
      "Map your top 10 workflows before comparing platforms",
      "Score each option on GST, Tally, mobile, and branch requirements",
      "Get independent build-vs-buy analysis from a delivery partner—not a reseller",
      "Pilot with one department before enterprise rollout",
    ],
    faqs: [
      { question: `${template.title}—which is better?`, answer: `Neither is universally better. ${template.verdict}` },
      { question: `Can Maxwell implement ${template.left} or ${template.right}?`, answer: `We implement custom alternatives and integrate with platforms when off-the-shelf fits. We do not resell licenses—we advise based on your workflow.` },
      { question: "How long does a comparison-led project take?", answer: "Discovery and recommendation: 1–2 weeks. Implementation: 8–20 weeks depending on scope and integrations." },
      { question: "Do you serve businesses outside India?", answer: "Yes. We deliver for India, USA, UK, UAE, Canada, and Australia with offshore cost advantages." },
    ],
    internalLinks: buildInternalLinks(
      [
        { label: "All Comparisons", href: "/compare", description: "Browse comparison guides" },
        ...(template.category === "erp"
          ? [{ label: "ERP Development Cost India", href: "/cost/erp-development-cost-india", description: "Pricing benchmarks" }]
          : template.category === "crm"
            ? [{ label: "CRM Development Cost India", href: "/cost/crm-development-cost-india", description: "Pricing benchmarks" }]
            : []),
      ],
      { service: relatedService },
    ),
    accent: "#2563EB",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Compare", href: "/compare" },
      { label: template.title },
    ],
  };
}

export function buildBestForIndustryCompare(industrySlug: string): ProgrammaticPageData | null {
  const industry = getIndustryCatalog(industrySlug);
  if (!industry) return null;
  const slug = `best-erp-for-${industrySlug}`;
  const path = `/compare/${slug}`;
  return {
    slug,
    path,
    pageType: "compare",
    metaTitle: `Best ERP for ${industry.name} India 2026 | ${industry.compliance.split(",")[0]} | ${siteConfig.name}`,
    metaDescription: `Best ERP for ${industry.name} (${industry.focus}): custom vs SAP/Odoo/Tally, ${industry.painPoints[0]}, GST integration. Compare options for Indian ${industry.name.toLowerCase()} SMEs.`,
    comparisonMatrix: buildComparisonMatrix({
      slug: `best-erp-${industrySlug}`,
      title: `Custom ERP vs Off-the-Shelf for ${industry.name}`,
      left: "Custom ERP",
      right: "SAP / Odoo / Tally",
      category: "erp",
      verdict: `For ${industry.name}, custom ERP wins when ${industry.painPoints[0]} requires workflow logic off-the-shelf cannot match without heavy customization.`,
      leftPros: ["Workflow-fit for " + industry.focus, "Tally/GST depth", "No per-user license creep"],
      rightPros: ["Faster module activation", "Known vendor brands", "Accountant familiarity (Tally)"],
      chooseLeft: `Choose custom when ${industry.painPoints[1] ?? industry.painPoints[0]} is core to operations.`,
      chooseRight: "Choose off-the-shelf when processes are standard and users stay under 25.",
    }),
    primaryKeyword: `Best ERP for ${industry.name}`,
    secondaryKeywords: [
      `${industry.name} ERP software India`,
      `ERP for ${industry.name}`,
      `${industry.name} ERP cost India`,
      `custom ERP ${industry.name}`,
    ],
    headline: `Best ERP Software for ${industry.name} in India`,
    subheadline: `How ${industry.name} leaders choose ERP—custom build vs SAP, Odoo, and Tally for ${industry.focus}.`,
    intro: `${industry.name} businesses face ${industry.painPoints[0]} and ${industry.painPoints[1]}. Generic ERP templates rarely handle ${industry.focus} without expensive customization. This guide compares options for Indian ${industry.name.toLowerCase()} companies evaluating ERP in 2026.`,
    sections: [
      {
        title: `${industry.name} ERP requirements`,
        content: `Compliance: ${industry.compliance}. Operations must address ${industry.painPoints.join(", ")}.`,
        bullets: industry.painPoints,
      },
      {
        title: "Custom ERP vs off-the-shelf for this vertical",
        content: `When batch logic, shop-floor mobile, or distributor schemes are core to ${industry.name}, custom ERP often beats Odoo/SAP on 3-year TCO for 20–150 user Indian SMEs.`,
        bullets: ["Workflow-fit scoring before vendor selection", "Tally and GST integration as non-negotiables", "Phased rollout by department"],
      },
      {
        title: "Implementation approach",
        content: `${siteConfig.name} runs on-site discovery for ${industry.name} clients in Gujarat, Maharashtra, and nationwide—mapping workflows before writing code.`,
      },
    ],
    challenges: industry.painPoints.map((p, i) => ({
      title: `Challenge ${i + 1}`,
      description: p.charAt(0).toUpperCase() + p.slice(1) + `—common in ${industry.name} before ERP digitization.`,
    })),
    approach: [
      "2-week discovery workshop at your plant or office",
      "Module prioritization: inventory → production → finance",
      "GST and Tally integration in phase one",
      "Shop-floor mobile apps where applicable",
    ],
    faqs: [
      { question: `What is the best ERP for ${industry.name}?`, answer: `The best ERP matches ${industry.focus} workflows—not brand name. Evaluate custom vs Odoo vs SAP on workflow-fit, GST depth, and 3-year TCO.` },
      { question: `How much does ${industry.name} ERP cost in India?`, answer: `Typical custom ${industry.name} ERP ranges ₹8L–₹45L+ depending on modules, branches, and integrations. See /cost/erp-development-cost-india.` },
      { question: `Does Maxwell have ${industry.name} case studies?`, answer: `We publish relevant case studies on our work page and tailor references during discovery under NDA.` },
    ],
    internalLinks: buildInternalLinks(
      [
        { label: "ERP vs CRM", href: "/compare/erp-vs-crm", description: "Related comparison" },
        { label: `${industry.name} ERP Cost`, href: `/cost/erp-development-cost-india`, description: "India pricing guide" },
      ],
      {
        industry,
        industrySlug,
        service: programmaticServices.find((s) => s.key === "erp"),
      },
    ),
    accent: "#1A4B8C",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Compare", href: "/compare" },
      { label: `Best ERP for ${industry.name}` },
    ],
  };
}

export function buildCostPage(
  serviceSlug: string,
  market: { type: "country"; slug: string; name: string; currency: "INR" | "USD" | "GBP" | "AED" | "CAD" | "AUD" } | { type: "city"; slug: string; name: string; state: string },
): ProgrammaticPageData | null {
  const service = programmaticServices.find((s) => s.slug === serviceSlug);
  if (!service) return null;

  const isIndia = market.type === "country" ? market.slug === "india" : true;
  const locationLabel = market.type === "city" ? market.name : market.name;
  const slug =
    market.type === "city"
      ? `${service.slug}-cost-${market.slug}`
      : `${service.slug}-cost-${market.slug}`;
  const path = `/cost/${slug}`;
  const costRange = isIndia || market.type === "country" && market.currency === "INR"
    ? service.costRangeInr
    : service.costRangeUsd;
  const keyword =
    market.type === "city"
      ? `${service.label} cost ${locationLabel}`
      : `${service.label} cost ${locationLabel}`;
  const locationMeta =
    market.type === "city"
      ? `${market.name}, ${market.state}`
      : `${market.name} (${market.currency})`;
  const marketModifier =
    market.type === "city"
      ? `${market.state} ${market.name} businesses`
      : `${market.name} buyers sourcing from India`;

  return {
    slug,
    path,
    pageType: "cost",
    metaTitle: `${service.shortLabel} Cost in ${locationMeta} 2026 | From ${costRange.split("–")[0].trim()} | ${siteConfig.name}`,
    metaDescription: `${service.label} pricing for ${marketModifier}: ${costRange}. Tier breakdown, timeline, GST/Tally factors, and milestone quotes from ${siteConfig.name}.`,
    pricingTable: buildPricingTable(service, locationLabel, costRange),
    primaryKeyword: keyword,
    secondaryKeywords: [
      `${service.shortLabel} development price ${locationLabel}`,
      `${service.shortLabel} project cost India`,
      `how much does ${service.shortLabel.toLowerCase()} cost`,
      `${service.shortLabel} development company ${locationLabel}`,
    ],
    headline: `${service.label} Cost in ${locationLabel}`,
    subheadline: `Transparent pricing ranges, cost drivers, and timeline expectations for ${locationLabel} businesses—updated for 2026.`,
    intro: `${siteConfig.name} publishes indicative ${service.label.toLowerCase()} costs so CTOs and founders can budget before discovery calls. Typical ${locationLabel} projects range ${costRange} depending on modules, integrations, and team size. ${service.description}`,
    sections: [
      {
        title: "Indicative cost range",
        content: `For ${locationLabel}, expect ${costRange} for a production-grade ${service.shortLabel.toLowerCase()} project with documentation, testing, and deployment support.`,
        bullets: [
          "MVP / single-module: lower end of range",
          "Multi-branch ERP/CRM with Tally: mid to upper range",
          "Enterprise integrations and mobile apps: upper range+",
        ],
      },
      {
        title: "What drives the price",
        content: "Scope, integrations, compliance, and user count affect final quotes more than hourly rates alone.",
        bullets: [
          "Number of modules and user roles",
          "GST, Tally, payment gateway, and logistics integrations",
          "Mobile apps and offline field force requirements",
          "Migration from legacy spreadsheets or old ERP",
          "Post-launch SLA and hosting",
        ],
      },
      {
        title: "Timeline expectations",
        content: "Most projects run 8–20 weeks in phased milestones with weekly demos. Rush timelines increase cost 15–30%.",
      },
    ],
    challenges: [
      { title: "Quotes without discovery", description: "Vendors quoting ₹2L for ERP without site visit usually exclude integrations you'll need later." },
      { title: "Per-hour vs milestone pricing", description: "Hourly billing creates scope creep; milestone pricing aligns incentives." },
      { title: "Hidden license costs", description: "Off-the-shelf platforms add per-user fees that exceed custom build TCO within 2–3 years." },
    ],
    approach: [
      "Use our Software Cost Calculator for a ballpark",
      "Book discovery for a fixed-scope milestone quote",
      "Compare 3-year TCO vs SaaS alternatives",
      "Start with one module, expand by ROI proof",
    ],
    faqs: [
      { question: `How much does ${service.label.toLowerCase()} cost in ${locationLabel}?`, answer: `Indicative range: ${costRange}. Final quotes follow discovery.` },
      { question: "Do you offer fixed-price contracts?", answer: "Yes. We prefer milestone-based fixed pricing after scope documentation." },
      { question: "Is offshore delivery cheaper?", answer: "India-based delivery typically saves 40–60% vs local US/UK agencies with same senior engineering depth." },
    ],
    internalLinks: buildInternalLinks(
      [
        { label: "Software Cost Calculator", href: "/tools/software-cost-calculator", description: "Instant estimate" },
        { label: "All Cost Guides", href: "/cost", description: "Browse pricing pages" },
        ...(market.type === "city"
          ? [
              {
                label: `${service.shortLabel} in ${market.name}`,
                href: `/locations/india/${market.slug}/${service.slug}`,
                description: "Local company page",
              },
            ]
          : []),
      ],
      {
        service,
        ...(market.type === "city"
          ? { citySlug: market.slug, cityName: market.name }
          : {}),
      },
    ),
    accent: "#F59E0B",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Cost Guides", href: "/cost" },
      { label: `${service.shortLabel} — ${locationLabel}` },
    ],
  };
}

export function buildIndustryServicePage(industrySlug: string, serviceSlug: string): ProgrammaticPageData | null {
  const industry = getIndustryCatalog(industrySlug);
  const service = programmaticServices.find((s) => s.slug === serviceSlug);
  if (!industry || !service) return null;

  const path = `/industries/${industrySlug}/${serviceSlug}`;
  const slug = `${industrySlug}-${serviceSlug}`;

  return {
    slug,
    path,
    pageType: "industry-service",
    noIndex: true,
    metaTitle: `${service.shortLabel} for ${industry.name} | ${industry.focus} | ${siteConfig.name}`,
    metaDescription: `${service.label} for ${industry.name}: fix ${industry.painPoints[0]}. ${industry.compliance}. ${service.costRangeInr} typical range. ${siteConfig.name} India delivery.`,
    localStats: buildIndustryLocalStats(industry, service),
    primaryKeyword: `${service.shortLabel} for ${industry.name}`,
    secondaryKeywords: [
      `${industry.name} ${service.shortLabel} software India`,
      `${service.shortLabel} ${industry.name} company`,
      `custom ${service.shortLabel} ${industry.name}`,
    ],
    headline: `${service.label} for ${industry.name}`,
    subheadline: `Purpose-built ${service.shortLabel.toLowerCase()} for ${industry.focus}—not generic templates forced onto your operations team.`,
    intro: `${industry.name} companies struggle with ${industry.painPoints.join(", ")}. ${siteConfig.name} engineers ${service.label.toLowerCase()} around ${industry.focus} with ${industry.compliance} built in from day one.`,
    sections: [
      {
        title: `Why ${industry.name} needs specialized ${service.shortLabel}`,
        content: `Generic ${service.shortLabel} fails when ${industry.painPoints[0]}—we map your actual workflows first.`,
        bullets: industry.painPoints,
      },
      {
        title: "Modules we typically deliver",
        content: service.description,
        bullets: service.technologies,
      },
      {
        title: "Compliance and integrations",
        content: industry.compliance,
        bullets: ["GST and e-invoicing", "Tally integration", "Role-based audit trails", "Multi-branch reporting"],
      },
    ],
    challenges: industry.painPoints.map((p, i) => ({
      title: `${industry.name} challenge ${i + 1}`,
      description: p,
    })),
    approach: [
      "On-site or virtual discovery with operations team",
      "Phased module delivery with weekly demos",
      "Training and SOP documentation included",
      "Post-launch SLA support from Vadodara HQ",
    ],
    faqs: [
      { question: `How long does ${service.shortLabel} take for ${industry.name}?`, answer: "Typically 8–20 weeks depending on modules and integrations." },
      { question: `Do you understand ${industry.name} workflows?`, answer: `Yes—we specialize in ${industry.focus} for Indian businesses with relevant case studies.` },
      { question: "Can you integrate with Tally?", answer: "Yes. Tally sync is standard for Indian ERP and finance modules." },
    ],
    internalLinks: buildInternalLinks(
      [
        { label: `Best ERP for ${industry.name}`, href: `/compare/best-erp-for-${industrySlug}`, description: "Build vs buy comparison" },
        { label: `${service.shortLabel} Cost India`, href: `/cost/${service.slug}-cost-india`, description: "Pricing guide" },
      ],
      { service, industry, industrySlug },
    ),
    accent: "#2563EB",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: industry.name, href: `/industries/${industrySlug}` },
      { label: service.shortLabel },
    ],
  };
}

export function buildCityServicePage(citySlug: string, serviceSlug: string): ProgrammaticPageData | null {
  const city = programmaticCities.find((c) => c.slug === citySlug);
  const service = programmaticServices.find((s) => s.slug === serviceSlug);
  if (!city || !service) return null;

  const path = `/locations/india/${citySlug}/${serviceSlug}`;
  const slug = `${citySlug}-${serviceSlug}`;
  const seoOverride = CITY_SERVICE_SEO_OVERRIDES[slug];

  return {
    slug,
    path,
    pageType: "city-service",
    noIndex: !isIndexableCityServiceSlug(slug),
    metaTitle:
      seoOverride?.metaTitle ??
      `${service.shortLabel} Company ${city.name}, ${city.state} | ${city.industries[0]} Focus | ${siteConfig.name}`,
    metaDescription:
      seoOverride?.metaDescription ??
      `${service.label} in ${city.name}, ${city.state}: ${city.insight} Serving ${city.industries.join(", ")}. On-site discovery + Vadodara HQ delivery. Book consultation.`,
    localStats: buildCityLocalStats(city, service),
    primaryKeyword: `${service.label} company ${city.name}`,
    secondaryKeywords: [
      `${service.shortLabel} development ${city.name}`,
      `${service.shortLabel} ${city.state}`,
      `IT company ${city.name}`,
      `software company ${city.name}`,
    ],
    headline: `${service.label} Company in ${city.name}`,
    subheadline: `${city.insight} Maxwell Electrodeal delivers ${service.shortLabel.toLowerCase()} for ${city.name} businesses with India HQ support.`,
    intro: `Businesses in ${city.name} choose ${siteConfig.name} for ${service.label.toLowerCase()} when local freelancers lack ERP depth and big-city agencies lack ${city.state} market understanding. We combine on-site discovery access with enterprise engineering.`,
    sections: [
      {
        title: `Why ${city.name} businesses choose Maxwell`,
        content: city.insight,
        bullets: city.industries.map((i) => `${i} software expertise`),
      },
      {
        title: `Our ${service.shortLabel} capabilities`,
        content: service.description,
        bullets: service.technologies,
      },
      {
        title: "Delivery model",
        content: `Hybrid delivery: discovery in ${city.name}, development from Vadodara HQ, milestone demos via video, on-site go-live support.`,
      },
    ],
    challenges: [
      { title: "Local talent gaps", description: `${city.name} SMEs struggle to hire full-stack ${service.shortLabel} teams in competitive markets.` },
      { title: "Integration complexity", description: "GST, Tally, and logistics integrations require experienced engineers—not brochure website vendors." },
      { title: "Project continuity", description: "Freelancer dropout risk is unacceptable for production ${service.shortLabel} systems." },
    ],
    approach: [
      `Discovery workshop in ${city.name} or virtual`,
      "Fixed milestone pricing after scope sign-off",
      "Full IP ownership and documentation",
      "Optional AMC post go-live",
    ],
    faqs: [
      { question: `Do you have an office in ${city.name}?`, answer: `HQ is Vadodara; we serve ${city.name} with on-site discovery and nationwide delivery.` },
      { question: `What industries do you serve in ${city.name}?`, answer: city.industries.join(", ") + ", and more." },
      { question: `How do I get a quote for ${city.name}?`, answer: "Use /get-estimate or /contact with your city—we respond within one business day." },
    ],
    internalLinks: buildInternalLinks(
      [
        { label: `${city.name} Location Hub`, href: `/locations/india/${citySlug}`, description: "All services in this city" },
        ...(() => {
          const industrySlug = resolveIndustrySlug(city.industries[0] ?? "");
          return industrySlug
            ? [
                {
                  label: `${city.industries[0]} Software`,
                  href: `/industries/${industrySlug}`,
                  description: "Industry vertical hub",
                },
              ]
            : [];
        })(),
      ],
      { service, citySlug, cityName: city.name },
    ),
    accent: "#06B6D4",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Locations", href: "/locations" },
      { label: "India", href: "/locations/india" },
      { label: city.name, href: `/locations/india/${citySlug}` },
      { label: service.shortLabel },
    ],
  };
}

// Build all pages at module load
const comparePagesMap = new Map<string, ProgrammaticPageData>();
for (const t of compareTemplates) {
  const page = buildComparePage(t);
  comparePagesMap.set(page.slug, page);
}
for (const ind of programmaticIndustries) {
  const page = buildBestForIndustryCompare(ind.slug);
  if (page) comparePagesMap.set(page.slug, page);
}

// Slug-specific meta overrides for compare pages with high impressions but zero clicks
const compareMetaOverrides: Record<string, {
  metaTitle: string;
  metaDescription: string;
  extraSections?: { title: string; content: string; bullets?: string[] }[];
}> = {
  "best-erp-for-fmcg": {
    metaTitle: "Best ERP for FMCG India 2026 — Compare SAP, Odoo & Custom ERP",
    metaDescription:
      "Best ERP for FMCG companies in India 2026: compare SAP B1 (₹12L+), Odoo (₹6L+), and custom ERP (₹8L–₹25L) for route sales, distributor claims, and scheme management. Free estimate.",
    extraSections: [
      {
        title: "FMCG ERP Software in India 2026 — What to Look For",
        content:
          "FMCG companies in India operate in a high-velocity distribution environment where generic ERP fails. The right FMCG ERP must handle van sales and secondary sales tracking (route-to-market), distributor management with scheme and debit/credit note automation, beat planning for field sales teams, and FIFO inventory for perishable goods. Production planning for seasonal demand peaks, GST and e-way bill integration, real-time sales MIS dashboards, and distributor claim settlement are non-negotiable for mid-market FMCG companies.\n\nPackaged foods, beverages, personal care, and FMCD (fast-moving consumer durables) companies all share this architecture. SAP Business One starts at ₹50L+ and is sized for large enterprises. Odoo needs an implementation partner and 4–8 months to configure distribution logic properly. Maxwell Electrodeal builds custom FMCG ERP from ₹10L–₹30L that includes the van sales module, distributor portal, and scheme management out of the box — without per-user license creep.",
        bullets: [
          "Van sales and route-to-market tracking",
          "Distributor scheme management and debit/credit notes",
          "Beat planning for field sales teams",
          "FIFO inventory for perishables",
          "GST e-invoice and e-way bill integration",
          "Real-time MIS dashboards for sales and production",
          "Custom FMCG ERP from ₹10L–₹30L",
        ],
      },
    ],
  },
  "best-erp-for-chemical-manufacturing": {
    metaTitle: "Best ERP for Chemical Manufacturing India 2026 — Batch, SDS & Compliance",
    metaDescription:
      "Best ERP for chemical manufacturers in India 2026: batch traceability, SDS management, CPCB compliance, and hazmat inventory. Compare SAP B1 (₹25L+), Odoo, and custom ERP (₹8L–₹25L). Free estimate.",
    extraSections: [
      {
        title: "What Makes Chemical Manufacturing ERP Different from Generic ERP?",
        content:
          "Chemical manufacturers in India require ERP capabilities that standard SAP or Tally modules simply do not support out of the box. Batch and lot tracking — mandatory for specialty chemical, API pharma, and industrial chemical sectors — must be forward and backward traceable from raw material receipt to customer dispatch. Material Safety Data Sheet (MSDS/SDS) management requires a version-controlled vault linked to SKUs and batches, with automatic expiry alerts.\n\nBeyond batch traceability, chemical ERP in India must handle: BIS, BIS-CML, and CPCB compliance documentation; chemical inventory tracked simultaneously in weight AND volume units; hazardous goods transport documentation (Form 9, CPCB consent forms); Certificate of Analysis (COA) generation per batch; raw material quality testing integration; and export documentation (SDF, ARE-1 form) for chemical exporters in the Bharuch–Ankleshwar and Vadodara–Halol corridors.\n\nSAP Business One covers many of these requirements but costs ₹25L+ for initial implementation — beyond the budget of most Indian chemical SMEs. Odoo has the architecture but requires 12–18 months of heavy customization to match chemical-specific workflows. Maxwell Electrodeal builds custom chemical ERP from ₹8L–₹25L, with all the above features included as part of the standard build — not expensive bolt-on modules.",
        bullets: [
          "Batch and lot traceability — forward and backward",
          "SDS/MSDS version-controlled vault linked to batches",
          "BIS, BIS-CML, CPCB compliance documentation",
          "Chemical inventory in weight AND volume units",
          "Hazardous goods transport documentation",
          "COA generation per batch",
          "Export documentation (SDF, ARE-1) for chemical exporters",
          "Custom ERP from ₹8L–₹25L — no per-module add-ons",
        ],
      },
    ],
  },
};
for (const [slug, override] of Object.entries(compareMetaOverrides)) {
  const existing = comparePagesMap.get(slug);
  if (existing) {
    const updatedSections = override.extraSections
      ? [...override.extraSections, ...existing.sections]
      : existing.sections;
    comparePagesMap.set(slug, {
      ...existing,
      metaTitle: override.metaTitle,
      metaDescription: override.metaDescription,
      sections: updatedSections,
    });
  }
}

const costPagesMap = new Map<string, ProgrammaticPageData>();
for (const service of programmaticServices) {
  for (const country of programmaticCountries) {
    const page = buildCostPage(service.slug, { type: "country", ...country });
    if (page) costPagesMap.set(page.slug, page);
  }
  for (const city of programmaticCities) {
    const page = buildCostPage(service.slug, { type: "city", slug: city.slug, name: city.name, state: city.state });
    if (page) costPagesMap.set(page.slug, page);
  }
}

const industryServiceMap = new Map<string, ProgrammaticPageData>();
export const industryServiceParams: { industry: string; service: string }[] = [];
for (const ind of programmaticIndustries) {
  for (const svc of programmaticServices) {
    const page = buildIndustryServicePage(ind.slug, svc.slug);
    if (page) {
      industryServiceMap.set(`${ind.slug}/${svc.slug}`, page);
      industryServiceParams.push({ industry: ind.slug, service: svc.slug });
    }
  }
}

const cityServiceMap = new Map<string, ProgrammaticPageData>();
export const cityServiceParams: { country: string; city: string; service: string }[] = [];
for (const city of programmaticCities) {
  for (const svc of programmaticServices) {
    const page = buildCityServicePage(city.slug, svc.slug);
    if (page) {
      cityServiceMap.set(`india/${city.slug}/${svc.slug}`, page);
      cityServiceParams.push({ country: "india", city: city.slug, service: svc.slug });
    }
  }
}

export const compareSlugs = [...comparePagesMap.keys()];
export const costSlugs = [...costPagesMap.keys()];

export function getComparePage(slug: string): ProgrammaticPageData | undefined {
  return comparePagesMap.get(slug);
}

export function getCostPage(slug: string): ProgrammaticPageData | undefined {
  return costPagesMap.get(slug);
}

export function getIndustryServicePage(industry: string, service: string): ProgrammaticPageData | undefined {
  return industryServiceMap.get(`${industry}/${service}`);
}

export function getCityServicePage(country: string, city: string, service: string): ProgrammaticPageData | undefined {
  if (country !== "india") return undefined;
  return cityServiceMap.get(`${country}/${city}/${service}`);
}

export function getIndexableCityServicePages(): ProgrammaticPageData[] {
  return [...cityServiceMap.values()].filter((page) => !page.noIndex);
}

export function getAllComparePages(): ProgrammaticPageData[] {
  return [...comparePagesMap.values()];
}

export function getAllCostPages(): ProgrammaticPageData[] {
  return [...costPagesMap.values()];
}

export function getProgrammaticPageCount(): number {
  return comparePagesMap.size + costPagesMap.size + industryServiceMap.size + cityServiceMap.size;
}
