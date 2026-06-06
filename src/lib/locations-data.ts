import { siteConfig } from "./constants";

export interface LocationChallenge {
  title: string;
  description: string;
}

export interface CityPageData {
  slug: string;
  name: string;
  countrySlug: string;
  countryName: string;
  state?: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  relatedSearches: string[];
  headline: string;
  subheadline: string;
  localInsights: string;
  localChallenges: LocationChallenge[];
  recommendedSolutions: { title: string; description: string; href: string }[];
  industryFocus: { name: string; href: string }[];
  caseStudySlugs: string[];
  roiExamples: { metric: string; label: string }[];
  faqs: { question: string; answer: string }[];
  serviceSlugs: string[];
  technologies: string[];
}

export interface CountryPageData {
  slug: string;
  name: string;
  region: "india" | "international";
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  overview: string;
  citySlugs: string[];
  localChallenges: LocationChallenge[];
  faqs: { question: string; answer: string }[];
}

type CityConfig = {
  slug: string;
  name: string;
  state: string;
  insight: string;
  industries: string[];
  challengeFocus: string;
};

const indiaCityConfigs: CityConfig[] = [
  { slug: "gujarat", name: "Gujarat", state: "Gujarat", insight: "India's industrial powerhouse—manufacturing, textile, diamond, pharma, and auto sectors driving ERP, mobile, and AI digitization across Vadodara, Ahmedabad, Surat, and Rajkot.", industries: ["Manufacturing", "Logistics", "Retail"], challengeFocus: "multi-city manufacturing and inventory operations" },
  { slug: "vadodara", name: "Vadodara", state: "Gujarat", insight: "Gujarat's cultural capital with growing IT parks, manufacturing hubs, and SME digitization demand.", industries: ["Manufacturing", "Education", "Retail"], challengeFocus: "manufacturing SMEs adopting ERP" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", insight: "One of India's fastest-growing startup ecosystems with strong textile, pharma, and fintech sectors.", industries: ["Manufacturing", "Healthcare", "Retail"], challengeFocus: "scaling operations across multiple business units" },
  { slug: "surat", name: "Surat", state: "Gujarat", insight: "Diamond and textile capital driving demand for inventory, logistics, and B2B commerce platforms.", industries: ["Manufacturing", "Logistics", "Retail"], challengeFocus: "inventory-heavy businesses needing real-time systems" },
  { slug: "rajkot", name: "Rajkot", state: "Gujarat", insight: "Auto components and engineering hub with increasing adoption of shop-floor digitization.", industries: ["Manufacturing", "Construction", "Retail"], challengeFocus: "production tracking and supplier coordination" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", insight: "India's financial capital—enterprises and funded startups need scalable SaaS, fintech, and mobile products.", industries: ["Retail", "Healthcare", "Logistics"], challengeFocus: "high-stakes digital products with compliance requirements" },
  { slug: "pune", name: "Pune", state: "Maharashtra", insight: "IT and automotive corridor with strong demand for enterprise software and product engineering.", industries: ["Manufacturing", "Education", "Healthcare"], challengeFocus: "enterprise integrations and multi-tenant SaaS" },
  { slug: "bengaluru", name: "Bengaluru", state: "Karnataka", insight: "India's Silicon Valley—startups and GCCs need world-class engineering partners for speed and scale.", industries: ["Education", "Healthcare", "Retail"], challengeFocus: "MVP velocity and cloud-native architecture" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", insight: "Pharma, IT, and government tech initiatives driving large-scale platform development.", industries: ["Healthcare", "Education", "Logistics"], challengeFocus: "regulated industries and high-availability systems" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", insight: "Manufacturing and automotive powerhouse with legacy system modernization needs.", industries: ["Manufacturing", "Logistics", "Construction"], challengeFocus: "legacy ERP replacement and IoT integration" },
  { slug: "delhi", name: "Delhi NCR", state: "Delhi", insight: "National capital region serving government, enterprise, and consumer brands across North India.", industries: ["Education", "Healthcare", "Retail"], challengeFocus: "multi-location operations and consumer-facing apps" },
];

function buildCityPage(config: CityConfig): CityPageData {
  const city = config.name;
  const primaryKeyword = `Software Development Company in ${city}`;

  return {
    slug: config.slug,
    name: config.name,
    countrySlug: "india",
    countryName: "India",
    state: config.state,
    metaTitle: `Software Development Company in ${city} — ${siteConfig.name}`,
    metaDescription: `Hire ${siteConfig.name} for website, mobile app, ERP, CRM, AI & SaaS development in ${city}. Enterprise-grade software with local market expertise. Free consultation.`,
    primaryKeyword,
    secondaryKeywords: [
      `Website Development Company in ${city}`,
      `Mobile App Development ${city}`,
      `ERP Development ${city}`,
      `Custom Software ${city}`,
      `IT Company ${city}`,
    ],
    relatedSearches: [
      `best software company ${city}`,
      `app development cost ${city}`,
      `ERP software ${config.state}`,
    ],
    headline: `Software Development Company in ${city}`,
    subheadline: `Enterprise-grade websites, apps, ERP, and AI solutions for ${city} businesses—built by ${siteConfig.name} with measurable ROI.`,
    localInsights: config.insight,
    localChallenges: [
      { title: "Legacy Systems Holding Growth", description: `${city} businesses often run on spreadsheets and disconnected tools—limiting visibility as ${config.challengeFocus} scales.` },
      { title: "Talent & Delivery Risk", description: "Hiring in-house teams in competitive markets is expensive; unreliable freelancers create project risk for mission-critical software." },
      { title: "Compliance & Integration", description: "GST, industry regulations, and third-party integrations (Tally, payment gateways, logistics APIs) require experienced engineering." },
    ],
    recommendedSolutions: [
      { title: "Custom Software Development", description: `Bespoke platforms aligned to ${city} business workflows.`, href: config.slug === "vadodara" ? "/solutions/software-development-company-vadodara" : config.slug === "gujarat" ? "/solutions/software-development-company-gujarat" : "/solutions/custom-software-development-company" },
      { title: "ERP & Operations Systems", description: "Unify inventory, production, and finance for manufacturing and distribution.", href: config.slug === "vadodara" ? "/solutions/erp-development-company-vadodara" : config.slug === "gujarat" ? "/solutions/erp-development-company-gujarat" : "/solutions/erp-development-company" },
      { title: "Mobile Apps", description: "Customer and field-team apps for Android and iOS.", href: config.slug === "vadodara" ? "/solutions/mobile-app-development-company-vadodara" : "/solutions/mobile-app-development-company" },
      { title: "AI & Automation", description: "Intelligent automation for repetitive operational tasks.", href: config.slug === "gujarat" || config.slug === "vadodara" ? "/solutions/ai-development-company-india" : "/solutions/ai-development-company" },
    ],
    industryFocus: config.industries.map((ind) => ({
      name: ind,
      href: `/industries/${ind.toLowerCase().replace(/\s+/g, "-") === "manufacturing" ? "manufacturing" : ind.toLowerCase()}`,
    })),
    caseStudySlugs: ["manufacturing-erp", "healthcare-management", "logistics-platform"],
    roiExamples: [
      { metric: "40%", label: "Less manual data entry (ERP clients)" },
      { metric: "₹12L", label: "Annual operational savings" },
      { metric: "8 mo", label: "Average ROI timeline" },
    ],
    faqs: [
      { question: `Does ${siteConfig.name} work with businesses in ${city}?`, answer: `Yes. We serve ${city} and ${config.state} clients remotely and on-site for discovery workshops. Our team has delivered projects for manufacturing, healthcare, retail, and logistics companies across the region.` },
      { question: `What is the typical project cost in ${city}?`, answer: "Projects typically range from ₹5L for focused MVPs to ₹50L+ for enterprise ERP and multi-platform solutions. We provide transparent milestone-based pricing after a free discovery call." },
      { question: `How fast can you start a project in ${city}?`, answer: "Discovery can begin within 1 week. MVPs often launch in 6–10 weeks; enterprise platforms in 3–6 months depending on scope." },
      { question: "Do you offer post-launch support?", answer: "Yes. We offer flexible support retainers with SLA-backed response times, including 24/7 monitoring for critical production systems." },
    ],
    serviceSlugs: ["custom-software-development", "erp-development", "website-development", "mobile-app-development"],
    technologies: ["React", "Next.js", "Node.js", "Flutter", "PostgreSQL", "AWS"],
  };
}

export const indiaCities: CityPageData[] = indiaCityConfigs.map(buildCityPage);

// Fix industry href mapping - use proper slugs
const industrySlugMap: Record<string, string> = {
  Manufacturing: "manufacturing",
  Healthcare: "healthcare",
  Education: "education",
  Logistics: "logistics",
  Retail: "retail",
  Construction: "construction",
};

indiaCities.forEach((city) => {
  city.industryFocus = city.industryFocus.map((ind) => ({
    name: ind.name,
    href: `/industries/${industrySlugMap[ind.name] ?? "manufacturing"}`,
  }));
});

export const internationalCountries: CountryPageData[] = [
  {
    slug: "usa",
    name: "United States",
    region: "international",
    metaTitle: "Software Development Company for USA Clients",
    metaDescription: `${siteConfig.name} delivers enterprise software for US startups and enterprises. Timezone overlap, English-first delivery, IP ownership.`,
    headline: "Software Development for USA Businesses",
    subheadline: "India-based engineering excellence with US timezone overlap and enterprise delivery standards.",
    overview: "US clients partner with Maxwell for cost-effective senior engineering without sacrificing quality. We align to EST/PST hours for standups and deliver SOC-aligned development practices.",
    citySlugs: [],
    localChallenges: [
      { title: "High US Development Costs", description: "US hourly rates for senior engineers often exceed $150/hr—making offshore partnership essential for funded startups and cost-conscious enterprises." },
      { title: "Timezone Coordination", description: "Successful US partnerships require deliberate overlap windows and async documentation—not just cheap labor." },
    ],
    faqs: [
      { question: "Do you work with US clients?", answer: "Yes. We serve clients across the United States with EST/PST overlap for meetings and English-first communication." },
      { question: "How do you handle IP and contracts?", answer: "US-standard MSAs, NDAs, and 100% IP assignment upon payment. We work with your legal team." },
    ],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    region: "international",
    metaTitle: "Software Development Company UK — Maxwell Electrodeal",
    metaDescription: "UK software development partner. GDPR-aware builds, dedicated teams, websites, apps, ERP, SaaS for British businesses.",
    headline: "Software Development for UK Businesses",
    subheadline: "GDPR-aware engineering with BST-friendly delivery and transparent milestone billing.",
    overview: "UK SMEs and enterprises choose Maxwell for Brexit-era supply chain software, fintech integrations, and digital transformation at competitive rates versus London agencies.",
    citySlugs: [],
    localChallenges: [
      { title: "GDPR & Data Residency", description: "UK businesses need GDPR-compliant architecture, data processing agreements, and clear sub-processor documentation." },
      { title: "Agency Cost Pressure", description: "London agency rates push UK businesses to seek senior offshore teams with proven delivery track records." },
    ],
    faqs: [
      { question: "Are you GDPR compliant?", answer: "We build GDPR-aware systems with DPA support, data minimization, and EU/UK hosting options on AWS/Azure." },
    ],
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    region: "international",
    metaTitle: "Software Development Company UAE — Dubai & GCC",
    metaDescription: "Software development for UAE and GCC. ERP, mobile apps, websites, AI solutions with Gulf timezone overlap.",
    headline: "Software Development for UAE & GCC",
    subheadline: "Enterprise software for Dubai, Abu Dhabi, and GCC enterprises—with Gulf timezone alignment.",
    overview: "UAE's diversification beyond oil drives demand for logistics, retail, healthcare, and construction software. We deliver with GST/UAE invoicing familiarity and Arabic-ready UI options.",
    citySlugs: [],
    localChallenges: [
      { title: "Rapid Digital Transformation", description: "UAE Vision 2030 initiatives push traditional businesses to modernize operations quickly with reliable technology partners." },
      { title: "Multi-country GCC Operations", description: "Businesses operating across UAE, Saudi, and Qatar need unified platforms with localization support." },
    ],
    faqs: [
      { question: "Do you support Arabic interfaces?", answer: "Yes. We build RTL-ready UIs and bilingual content management for GCC market requirements." },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    region: "international",
    metaTitle: "Software Development Company Canada",
    metaDescription: "Canadian software development partner. Remote teams, ERP, SaaS, mobile apps with North American timezone overlap.",
    headline: "Software Development for Canadian Businesses",
    subheadline: "Senior engineering teams with EST/PST overlap for Canadian startups and enterprises.",
    overview: "Canadian tech hubs in Toronto, Vancouver, and Montreal partner with Maxwell for product engineering, reducing burn rate while maintaining code quality.",
    citySlugs: [],
    localChallenges: [
      { title: "Startup Runway Optimization", description: "Canadian startups extend runway by partnering with offshore teams that deliver investor-ready MVPs in 6–8 weeks." },
    ],
    faqs: [
      { question: "What timezone do you overlap with Canada?", answer: "We overlap with EST and PST for daily standups and weekly demos." },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    region: "international",
    metaTitle: "Software Development Company Australia",
    metaDescription: "Australian software development. AEST overlap, websites, mobile apps, ERP for AU businesses.",
    headline: "Software Development for Australian Businesses",
    subheadline: "Quality engineering with AEST-friendly communication and milestone transparency.",
    overview: "Australian businesses in mining tech, logistics, healthcare, and retail use Maxwell for scalable platforms without Sydney agency price tags.",
    citySlugs: [],
    localChallenges: [
      { title: "Geographic Isolation Costs", description: "Australia's remote geography increases the value of reliable digital logistics and operations platforms." },
    ],
    faqs: [
      { question: "Can you work Australian business hours?", answer: "Yes. We schedule overlap with AEST/AEDT for key meetings and maintain async updates outside those hours." },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    region: "international",
    metaTitle: "Software Development Company Germany",
    metaDescription: "German software development partner. GDPR, Mittelstand ERP, Industry 4.0 solutions from Maxwell Electrodeal.",
    headline: "Software Development for German Businesses",
    subheadline: "GDPR-compliant engineering for Mittelstand manufacturing and enterprise digitalization.",
    overview: "German Mittelstand manufacturers need ERP, IoT, and shop-floor integration. We deliver with documentation rigor and quality processes aligned to German expectations.",
    citySlugs: [],
    localChallenges: [
      { title: "Industry 4.0 Integration", description: "German manufacturers require shop-floor digitization, OPC-UA integrations, and audit-ready software documentation." },
    ],
    faqs: [
      { question: "Do you provide documentation in English?", answer: "Yes. Full technical documentation, API specs, and user manuals in English; German localization available on request." },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    region: "international",
    metaTitle: "Software Development Company Singapore",
    metaDescription: "Singapore software development. APAC hub for fintech, logistics, SaaS. Maxwell Electrodeal enterprise delivery.",
    headline: "Software Development for Singapore & APAC",
    subheadline: "APAC-focused delivery for fintech, logistics, and enterprise platforms.",
    overview: "Singapore serves as APAC headquarters for many firms. We support regional rollouts with multi-currency, compliance-aware architecture.",
    citySlugs: [],
    localChallenges: [
      { title: "APAC Multi-market Launch", description: "Singapore HQs need software that scales across Southeast Asian markets with payment and regulatory variations." },
    ],
    faqs: [
      { question: "Do you support Singapore timezone?", answer: "Yes. SGT overlap for standups and APAC-friendly delivery schedules." },
    ],
  },
];

export const countrySlugs = ["india", ...internationalCountries.map((c) => c.slug)] as const;
export type CountrySlug = (typeof countrySlugs)[number];

export const citySlugs = indiaCities.map((c) => c.slug);
export type CitySlug = (typeof citySlugs)[number];

const citiesMap = Object.fromEntries(indiaCities.map((c) => [c.slug, c])) as Record<CitySlug, CityPageData>;
const countriesMap: Record<string, CountryPageData> = {
  india: {
    slug: "india",
    name: "India",
    region: "india",
    metaTitle: "Software Development Company in India — All Cities",
    metaDescription: "Maxwell Electrodeal serves Vadodara, Mumbai, Bengaluru, Delhi, and cities across India. ERP, mobile apps, websites, AI solutions.",
    headline: "Software Development Across India",
    subheadline: "Local expertise in Gujarat, Maharashtra, Karnataka, and national enterprise delivery.",
    overview: "Headquartered in India, Maxwell Electrodeal combines local market understanding with enterprise-grade engineering for businesses from SMEs to large enterprises.",
    citySlugs: citySlugs,
    localChallenges: [
      { title: "SME Digitization Gap", description: "Millions of Indian SMEs still operate manually—creating massive opportunity for ERP, CRM, and mobile-first solutions." },
      { title: "GST & Compliance Complexity", description: "Software must integrate with GST, e-invoicing, and industry-specific compliance from day one." },
    ],
    faqs: [
      { question: "Which Indian cities do you serve?", answer: "We actively serve Vadodara, Ahmedabad, Surat, Rajkot, Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Delhi NCR, and clients nationwide. See our Gujarat and Vadodara solution pages for local delivery." },
    ],
  },
  ...Object.fromEntries(internationalCountries.map((c) => [c.slug, c])),
};

export function getCountryBySlug(slug: string): CountryPageData | undefined {
  return countriesMap[slug];
}

export function getCityBySlug(countrySlug: string, citySlug: string): CityPageData | undefined {
  if (countrySlug !== "india") return undefined;
  return citiesMap[citySlug as CitySlug];
}

export function getAllCountries(): CountryPageData[] {
  return Object.values(countriesMap);
}

export function getAllCities(): CityPageData[] {
  return indiaCities;
}

export function getLocationStaticParams(): { country: string; city?: string }[] {
  const params: { country: string; city?: string }[] = [{ country: "india" }];
  indiaCities.forEach((c) => params.push({ country: "india", city: c.slug }));
  internationalCountries.forEach((c) => params.push({ country: c.slug }));
  return params;
}

/** Programmatic title templates for SEO scale */
export const programmaticTemplates = [
  "Software Development Company in {city}",
  "Website Development Company in {city}",
  "Mobile App Development Company in {city}",
  "ERP Development Company in {city}",
  "AI Development Company in {city}",
] as const;
