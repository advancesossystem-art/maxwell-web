import { siteConfig } from "./constants";
import { TCO_FAQ_ANSWER } from "./tco-model";
import type { SolutionPageData } from "./solutions-types";

type IndiaServiceKey = "software" | "erp" | "web" | "mobile" | "crm" | "ai";

const indiaServiceBase: Record<
  IndiaServiceKey,
  {
    serviceHref: string;
    technologies: string[];
    caseStudySlugs: string[];
    industryLinks: { name: string; href: string }[];
    gradient: string;
    accent: string;
  }
> = {
  software: {
    serviceHref: "/services/custom-software-development",
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
    caseStudySlugs: ["construction-platform", "healthcare-management"],
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Healthcare", href: "/industries/healthcare" },
    ],
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    accent: "#2563EB",
  },
  erp: {
    serviceHref: "/services/erp-development",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
    caseStudySlugs: ["manufacturing-erp", "logistics-platform"],
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Logistics", href: "/industries/logistics" },
    ],
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    accent: "#2563EB",
  },
  web: {
    serviceHref: "/services/website-development",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    caseStudySlugs: ["drashti-chemicals"],
    industryLinks: [
      { name: "Chemical manufacturers", href: "/services/website-development/chemical-manufacturers" },
      { name: "Engineering & machinery", href: "/services/website-development/engineering-machinery" },
    ],
    gradient: "from-cyan-950 via-blue-900 to-slate-950",
    accent: "#06B6D4",
  },
  mobile: {
    serviceHref: "/services/mobile-app-development",
    technologies: ["React Native", "Flutter", "Node.js", "Firebase", "AWS"],
    caseStudySlugs: ["healthcare-management", "logistics-platform"],
    industryLinks: [
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Logistics", href: "/industries/logistics" },
    ],
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    accent: "#10B981",
  },
  crm: {
    serviceHref: "/services/crm-development",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    caseStudySlugs: ["retail-analytics"],
    industryLinks: [
      { name: "Retail", href: "/industries/retail" },
      { name: "Healthcare", href: "/industries/healthcare" },
    ],
    gradient: "from-violet-950 via-purple-900 to-slate-950",
    accent: "#8B5CF6",
  },
  ai: {
    serviceHref: "/services/ai-solutions",
    technologies: ["Python", "FastAPI", "React", "AWS", "OpenCV"],
    caseStudySlugs: ["ai-safety-monitoring"],
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Healthcare", href: "/industries/healthcare" },
    ],
    gradient: "from-indigo-950 via-violet-900 to-slate-950",
    accent: "#6366F1",
  },
};

function buildIndiaGeo(
  key: IndiaServiceKey,
  page: Omit<
    SolutionPageData,
    "serviceHref" | "technologies" | "caseStudySlugs" | "industryLinks" | "gradient" | "accent"
  >,
): SolutionPageData {
  const base = indiaServiceBase[key];
  return { ...page, ...base };
}

export const indiaGeoSolutionSlugs = [
  "software-development-company-india",
  "software-development-company-gujarat",
  "software-development-company-vadodara",
  "erp-development-company-gujarat",
  "erp-development-company-vadodara",
  "web-development-company-india",
  "web-development-company-gujarat",
  "web-development-company-vadodara",
  "mobile-app-development-company-vadodara",
  "crm-development-company-india",
  "ai-development-company-india",
] as const;

export type IndiaGeoSolutionSlug = (typeof indiaGeoSolutionSlugs)[number];

export const indiaGeoSolutionsData: Record<IndiaGeoSolutionSlug, SolutionPageData> = {
  "software-development-company-india": buildIndiaGeo("software", {
    slug: "software-development-company-india",
    title: "Software Development Company India",
    headline: "Custom Software for Businesses — After Your Industrial Website Works",
    subheadline:
      "Maxwell is a website engineering company first. For manufacturers and B2B firms that need catalogs and RFQs, we then build supporting custom software, ERP, CRM, and web apps — GST-aware delivery from Vadodara, not generic agency theatre.",
    metaTitle: "Custom Software for Indian Businesses | Industrial Web + Systems | Maxwell",
    metaDescription:
      "Custom software and operational systems for Indian manufacturers and SMEs — after your industrial website and RFQ channel. Vadodara HQ. Website packages from ₹45,000; software scoped separately.",
    primaryKeyword: "custom software development India",
    secondaryKeywords: [
      "custom software for manufacturers India",
      "business software development Gujarat",
      "ERP and CRM after website India",
      "industrial digital systems Vadodara",
      "software development company India manufacturers",
      "GST ready custom software India",
    ],
    relatedSearches: [
      "manufacturer website India",
      "industrial website design",
      "RFQ website development",
      "manufacturing software India",
    ],
    marketInsights:
      "Buyers who land on generic Software Development Company India pages often bounce when they wanted industrial websites, RFQs, or plant catalogs. Maxwell leads with manufacturer and industrial web, then scopes custom software, ERP, and CRM only when workflows need them — so the right intent stays on the right URL.",
    industryChallenges: [
      {
        title: "Wrong Intent on Agency Head Terms",
        description:
          "National software head terms attract curiosity traffic with weak commercial fit. Ranking for industrial website and RFQ long-tails converts better for Gujarat plants.",
      },
      {
        title: "Software Before Owned Enquiries",
        description:
          "Many SMEs buy software before Google can find their factory. We recommend owned catalog + RFQ first (from ₹45,000), then systems — so software has clean lead data to process.",
      },
    ],
    recommendedApproach: [
      "Confirm industrial / manufacturer website readiness",
      "Discovery for operational systems only when RFQ volume justifies it",
      "Phased MVP with GST/Tally integration where required",
      "Dedicated squad with weekly demos and IP ownership",
    ],
    roiExamples: [
      { metric: "₹45K+", label: "Website Wedge", description: "Owned enquiry first" },
      { metric: "100%", label: "IP Ownership", description: "Your code, always" },
      { metric: "Phased", label: "Software Scope", description: "Milestones after web" },
    ],
    internalLinks: [
      { label: "Industrial Website Design", href: "/services/industrial-website-design", description: "Primary commercial" },
      { label: "Manufacturer Websites", href: "/services/website-development-for-manufacturers", description: "Catalog hub" },
      { label: "Industrial Cost Estimator", href: "/tools/industrial-website-rfq-estimator", description: "Budget planner" },
      { label: "Custom Software Service", href: "/services/custom-software-development", description: "Depth page" },
      { label: "Get Estimate", href: "/get-estimate", description: "Free scoped quote" },
    ],
    faqs: [
      {
        question: "Should we hire for software company India or manufacturer websites first?",
        answer:
          "If buyers need product specs and RFQs, start with an industrial or manufacturer website. Custom software and ERP help after enquiries and data routines exist — Maxwell sequences website first for most Gujarat plants.",
      },
      {
        question: "How much does custom software development cost in India with Maxwell?",
        answer:
          "Focused tools from roughly ₹2L; multi-module ERP-class systems higher and quoted after discovery with milestone billing. Website packages remain separate (Starter ₹45,000 / Professional ₹75,000 anchors).",
      },
      {
        question: "Do you still offer ERP and CRM?",
        answer:
          "Yes as supporting practices. Primary growth focus is industrial websites, RFQ systems, catalogs, and GIDC locality pages — ERP/CRM when operations need them.",
      },
    ],
  }),

  "software-development-company-gujarat": buildIndiaGeo("software", {
    slug: "software-development-company-gujarat",
    title: "Software Development Company Gujarat",
    headline: "Software Development Company in Gujarat",
    subheadline:
      "ERP, mobile apps, and custom software for Gujarat's manufacturing, textile, diamond, and pharma sectors—local market knowledge with enterprise engineering.",
    metaTitle: "Software Development Company in Gujarat | ERP & Custom Software",
    metaDescription:
      "Software development company in Gujarat. ERP, CRM, mobile apps for Vadodara, Ahmedabad, Surat, Rajkot. Maxwell Electrodeal — manufacturing & SME expertise.",
    primaryKeyword: "Software Development Company in Gujarat",
    secondaryKeywords: [
      "IT company Gujarat",
      "software company Gujarat",
      "ERP development company Gujarat",
      "web development company Gujarat",
      "mobile app development Gujarat",
      "custom software development Gujarat",
    ],
    relatedSearches: [
      "best software company Gujarat",
      "ERP software Gujarat",
      "app development Ahmedabad",
      "software development Surat",
    ],
    marketInsights:
      "Gujarat contributes over 8% of India's GDP with dense manufacturing in Vadodara, Ahmedabad, Surat, and Rajkot. A software development company in Gujarat must understand shop-floor workflows, Tally sync, and multi-plant inventory—not generic SaaS templates.",
    industryChallenges: [
      {
        title: "Multi-Plant Inventory Chaos",
        description:
          "Gujarat manufacturers run multiple facilities without unified stock visibility—custom ERP solves real-time production and dispatch.",
      },
      {
        title: "Textile & Diamond Workflow Specificity",
        description: "Surat and Rajkot businesses need industry-specific modules for grading, job-work, and supplier coordination.",
      },
    ],
    recommendedApproach: [
      "On-site discovery in Gujarat industrial areas",
      "Tally + GST bi-directional integration",
      "Barcode/shop-floor mobile apps",
      "Phased ERP rollout per plant",
    ],
    roiExamples: [
      { metric: "₹12L", label: "Annual Savings", description: "ERP manufacturing client" },
      { metric: "40%", label: "Less Manual Entry", description: "Shop-floor digitization" },
      { metric: "4", label: "Gujarat Cities Served", description: "Vadodara to Rajkot" },
    ],
    internalLinks: [
      { label: "Vadodara", href: "/locations/india/vadodara", description: "HQ" },
      { label: "Ahmedabad", href: "/locations/india/ahmedabad", description: "Startup hub" },
      { label: "Surat", href: "/locations/india/surat", description: "Textile & diamond" },
      { label: "Manufacturing ERP", href: "/industries/manufacturing", description: "Industry page" },
    ],
    faqs: [
      {
        question: "Which Gujarat cities do you serve?",
        answer:
          "We actively deliver in Vadodara, Ahmedabad, Surat, Rajkot, and statewide—with on-site workshops across Gujarat industrial corridors.",
      },
      {
        question: "Do you integrate with Tally for Gujarat businesses?",
        answer: "Yes—bi-directional Tally sync for GST, e-invoicing, and operational modules is standard in our Gujarat ERP projects.",
      },
    ],
  }),

  "software-development-company-vadodara": buildIndiaGeo("software", {
    slug: "software-development-company-vadodara",
    title: "Software Development Company Vadodara",
    headline: "Software Development Company in Vadodara",
    subheadline:
      `${siteConfig.name} is headquartered in Vadodara—delivering custom software, ERP, CRM, mobile apps, and AI for Gujarat SMEs with local accountability and global engineering standards.`,
    metaTitle: "Software Development Company in Vadodara | Maxwell Electrodeal HQ",
    metaDescription:
      "Software development company in Vadodara, Gujarat. ERP, CRM, mobile apps, AI & custom software. Local HQ team. Maxwell Electrodeal — book a free consultation.",
    primaryKeyword: "Software Development Company in Vadodara",
    secondaryKeywords: [
      "IT company in Vadodara",
      "software company Vadodara",
      "web development company Vadodara",
      "mobile app development company Vadodara",
      "ERP development company Vadodara",
      "CRM development company Vadodara",
    ],
    relatedSearches: [
      "best software company in Vadodara",
      "app development Vadodara",
      "ERP software Vadodara",
      "IT company Vadodara Gujarat",
    ],
    marketInsights:
      "Vadodara combines manufacturing heritage with growing IT parks and SME digitization demand. As a Vadodara-headquartered software development company, Maxwell Electrodeal offers same-city discovery workshops and long-term support—not distant offshore handoffs.",
    industryChallenges: [
      {
        title: "Local SME Digitization Gap",
        description:
          "Vadodara manufacturers still run production on spreadsheets—creating inventory errors and delayed dispatch.",
      },
      {
        title: "Unreliable Local Vendors",
        description: "One-person shops lack ERP depth; enterprises need documented delivery and production SLAs.",
      },
    ],
    recommendedApproach: [
      "On-site Vadodara discovery",
      "Manufacturing ERP and mobile field apps",
      "AI safety monitoring for industrial clients",
      "Post-launch support retainers",
    ],
    roiExamples: [
      { metric: "HQ", label: "Vadodara Based", description: "Local accountability" },
      { metric: "99.2%", label: "Vision AI Accuracy", description: "Industrial safety" },
      { metric: "6–10 wk", label: "MVP Timeline", description: "Typical SMB apps" },
    ],
    internalLinks: [
      { label: "Vadodara Location", href: "/locations/india/vadodara", description: "City hub" },
      { label: "ERP Development", href: "/solutions/erp-development-company-vadodara", description: "Local ERP" },
      { label: "Contact", href: "/contact", description: "Visit or call" },
      { label: "About Us", href: "/about", description: "Our team" },
    ],
    faqs: [
      {
        question: "Is Maxwell Electrodeal based in Vadodara?",
        answer:
          `Yes—${siteConfig.name} is headquartered in Vadodara, Gujarat. We offer on-site discovery for local clients and serve national and international clients remotely.`,
      },
      {
        question: "What is the best software company in Vadodara?",
        answer:
          "Choose a team with documented ERP/manufacturing deliveries, Tally integration experience, Core Web Vitals proof, and transparent milestone pricing—criteria we meet for Vadodara SMEs and enterprises.",
      },
    ],
  }),

  "erp-development-company-gujarat": buildIndiaGeo("erp", {
    slug: "erp-development-company-gujarat",
    title: "ERP Development Company Gujarat",
    headline: "ERP Development Company in Gujarat",
    subheadline:
      "Custom manufacturing ERP for Gujarat's production hubs—inventory, shop-floor, Tally/GST sync, and multi-plant visibility.",
    metaTitle: "ERP Development Company in Gujarat | Manufacturing ERP",
    metaDescription:
      "ERP development company in Gujarat. Custom manufacturing ERP, inventory, Tally integration for Vadodara, Ahmedabad, Surat. Maxwell Electrodeal.",
    primaryKeyword: "ERP Development Company in Gujarat",
    secondaryKeywords: [
      "ERP software development Gujarat",
      "manufacturing ERP Gujarat",
      "custom ERP Vadodara",
      "ERP development India",
      "GST ERP software Gujarat",
    ],
    relatedSearches: ["ERP software price India", "ERP vs Excel manufacturing", "Tally ERP integration"],
    marketInsights:
      "Gujarat manufacturers lose lakhs monthly to disconnected inventory and production data. Custom ERP development in Gujarat pays back in 8–12 months when built around actual shop-floor workflows—not generic SAP templates.",
    industryChallenges: [
      { title: "Generic ERP Misfit", description: "Standard ERP modules don't match Gujarat job-work and subcontractor models." },
      { title: "Tally Disconnect", description: "Operations and finance teams reconcile manually between shop-floor and accounting." },
    ],
    recommendedApproach: ["Shop-floor discovery", "Phased module rollout", "Tally bi-directional sync", "Mobile barcode apps"],
    roiExamples: [
      { metric: "99.2%", label: "Inventory Accuracy", description: "Post-ERP deployment" },
      { metric: "₹12L", label: "Annual Savings", description: "Manufacturing client" },
      { metric: "8 mo", label: "ROI Timeline", description: "Typical Gujarat SME" },
    ],
    internalLinks: [
      { label: "Manufacturing", href: "/industries/manufacturing", description: "Industry solutions" },
      { label: "ERP Service", href: "/services/erp-development", description: "Capabilities" },
      { label: "Vadodara ERP", href: "/solutions/erp-development-company-vadodara", description: "City page" },
      { label: "ERP Cost Guide", href: "/blog/erp-development-cost-india-2026", description: "Pricing blog" },
    ],
    faqs: [
      {
        question: "How much does ERP development cost in India?",
        answer: "Gujarat SME ERP projects typically range ₹15L–₹50L depending on modules, plants, and Tally integrations—quoted after discovery.",
      },
      {
        question: "ERP vs Excel for manufacturing?",
        answer: "Excel breaks at multi-plant scale—custom ERP provides real-time inventory, production tracking, and GST-compliant finance integration.",
      },
    ],
  }),

  "erp-development-company-vadodara": buildIndiaGeo("erp", {
    slug: "erp-development-company-vadodara",
    title: "ERP Development Company Vadodara",
    headline: "Custom ERP Development Company in Vadodara",
    subheadline:
      "Maxwell Electrodeal is a custom ERP development company based in Vadodara, Gujarat — serving manufacturers across the Vadodara–Bharuch–Ankleshwar corridor. On-site discovery at GIDC estates, Makarpura, Savli, and Baroda city. ERP software development Vadodara teams meet you where production happens.",
    metaTitle: "Custom ERP Development Company Vadodara — ERP Software for Manufacturers",
    metaDescription:
      "Custom ERP development company in Vadodara, Gujarat. ERP for manufacturers — inventory, production, GST e-invoicing, Tally sync, multi-plant. Local HQ team. From ₹8L. Free discovery call.",
    primaryKeyword: "Custom ERP Development Company Vadodara",
    secondaryKeywords: [
      "ERP software development Vadodara",
      "custom ERP software development company Vadodara",
      "ERP for manufacturers Gujarat",
      "manufacturing ERP Vadodara",
      "ERP company Gujarat",
    ],
    relatedSearches: ["ERP development cost India", "best ERP company Vadodara", "Tally integration ERP", "ERP for chemical manufacturers Gujarat"],
    marketInsights:
      "Vadodara is Gujarat's industrial capital — home to over 2,000 manufacturing units across chemical, pharma, engineering, and FMCG sectors. Maxwell Electrodeal, headquartered in Vadodara since 2018, is a custom ERP development company that builds ERP software specifically for manufacturers in the Vadodara–Bharuch–Ankleshwar industrial corridor.\n\nWe build ERP for manufacturers Gujarat-wide, covering: inventory and multi-location warehouse management, production planning with BOM and job-work (ITC-04), GST e-invoicing and e-way bill automation, Tally sync with bi-directional reconciliation, shop-floor mobile apps for Android, and multi-plant operations. Our ERP is built on modern React + Node.js + PostgreSQL — not outdated legacy frameworks like FoxPro or older Delphi-based systems still common in the region.\n\nMilestone-based billing ensures you pay for delivered results: 30% on project start, 40% on delivery of core modules, 30% on go-live. Typical Vadodara manufacturer ERP project timelines range from 16 to 24 weeks for mid-complexity rollouts, with costs from ₹8L to ₹30L depending on scope, number of modules, and integrations.\n\nWe work on-site with clients at GIDC Makarpura, GIDC Savli, Halol GIDC, and Baroda city offices — providing the face-to-face shop-floor discovery that remote-only vendors cannot offer. Our primary client types in Vadodara include chemical companies, pharma API manufacturers, engineering fabrication units, and FMCG distributors.",
    industryChallenges: [
      { title: "Production Visibility", description: "Plant managers lack real-time WIP status across Vadodara facilities — Excel-based production logs arrive 24 hours late." },
      { title: "GST Compliance Gaps", description: "Manual invoicing and Excel-based e-way bill generation create audit risk without integrated e-invoice flows." },
      { title: "Tally Not Enough", description: "Tally handles accounts but cannot manage production BOM, job-work challans, or shop-floor QC — leaving critical operations in spreadsheets." },
    ],
    recommendedApproach: [
      "On-site Vadodara discovery workshops at your GIDC facility",
      "Inventory → production → finance phased rollout",
      "Shop-floor Android apps for real-time WIP",
      "Tally sync + GST e-invoice automation",
      "Milestone-based billing: 30–40–30%",
    ],
    roiExamples: [
      { metric: "40%", label: "Less Manual Entry", description: "Shop-floor clients on production ERP" },
      { metric: "16–24 wk", label: "First Full Module Live", description: "Phased ERP rollout timeline" },
      { metric: "₹8L+", label: "Starting Cost", description: "Single-plant manufacturer ERP" },
    ],
    internalLinks: [
      { label: "Vadodara office", href: "/locations/india/vadodara", description: "City hub" },
      { label: "chemical manufacturers", href: "/industries/chemical-manufacturing", description: "Chemical vertical" },
      { label: "ERP development services", href: "/services/erp-development", description: "Service page" },
      { label: "Gujarat ERP", href: "/solutions/erp-development-company-gujarat", description: "State page" },
      { label: "Get Estimate", href: "/get-estimate", description: "Quote" },
    ],
    faqs: [
      {
        question: "Are you a custom ERP development company in Vadodara?",
        answer:
          "Yes. Maxwell Electrodeal is headquartered in Vadodara, Gujarat — we build custom ERP software for manufacturers in Vadodara, Bharuch, Ankleshwar, Savli, and across Gujarat. We offer on-site discovery workshops at your factory or GIDC unit.",
      },
      {
        question: "Can you visit our Vadodara factory for ERP discovery?",
        answer: "Yes — we conduct on-site discovery workshops across Vadodara industrial areas as part of ERP scoping. This includes GIDC Makarpura, GIDC Savli, Halol GIDC, and city-side offices.",
      },
      {
        question: "What is the cost of ERP development in Vadodara?",
        answer:
          "ERP software development in Vadodara typically starts from ₹8L for a focused single-plant inventory and billing system. Mid-complexity manufacturing ERP with production planning, job-work, and Tally sync costs ₹12L–₹20L. Multi-plant or compliance-heavy systems (chemical, pharma) range from ₹20L–₹30L. We quote fixed-price milestones after a paid discovery sprint.",
      },
      {
        question: "Which industries do your Vadodara ERP clients belong to?",
        answer:
          "Our Vadodara ERP clients span chemical manufacturers, pharma API suppliers, engineering fabrication units, FMCG distributors, and textile traders. ERP for manufacturers Gujarat-wide is our core strength.",
      },
    ],
  }),

  "web-development-company-india": buildIndiaGeo("web", {
    slug: "web-development-company-india",
    title: "Website Development Company India",
    headline: "Website Development Company in India",
    subheadline:
      "Business and manufacturer websites from ₹35,000. Catalog + WhatsApp enquiry, SEO, monthly AMC from ₹15,000. Vadodara team, delivered anywhere in India. GST invoice. Pay after go-live.",
    metaTitle: "Website Development Company in India | From ₹35,000 | Maxwell",
    metaDescription:
      "Website development company in India — business and manufacturer sites from ₹35,000. Catalog, SEO, AMC from ₹15,000. Vadodara HQ. Request a quote.",
    primaryKeyword: "Website Development Company India",
    secondaryKeywords: [
      "website development company in India",
      "web development company India",
      "business website development India",
      "manufacturer website India",
      "website development cost India",
    ],
    relatedSearches: [
      "website development cost India",
      "best website development company India",
      "website development company Gujarat",
      "website development company Vadodara",
    ],
    marketInsights:
      "Buyers in India Google a vendor before they call. A directory listing does not show your full product list, and you do not own the lead. A site from ₹35,000 with WhatsApp and Search Console is the owned channel. Maxwell is a Vadodara company — websites, SEO, AMC. Not ERP.",
    industryChallenges: [
      { title: "You rent the lead", description: "IndiaMART and similar charge every year. The buyer data stays on their platform." },
      { title: "The site does not load", description: "Cheap WordPress themes fail on phone data. Google then hides you." },
      { title: "No way to enquire", description: "A brochure site without products, RFQ, or WhatsApp cannot convert the search you already paid for." },
    ],
    recommendedApproach: [
      "Write the page list from how buyers search (product + city)",
      "Build on Next.js so the catalog is fast on mobile",
      "Put WhatsApp and quote on every money page",
      "Connect Search Console and a sitemap at go-live",
      "Optional AMC ₹15,000/month for edits and SEO",
    ],
    roiExamples: [
      { metric: "₹35,000", label: "Starter site", description: "25–30 pages + SEO setup" },
      { metric: "₹15,000", label: "Monthly AMC", description: "Edits, SEO, two articles" },
      { metric: "94/100", label: "Drashti mobile", description: "Live catalog, not a target" },
    ],
    internalLinks: [
      { label: "Gujarat", href: "/solutions/web-development-company-gujarat", description: "State page" },
      { label: "Vadodara", href: "/solutions/web-development-company-vadodara", description: "HQ city" },
      { label: "Website pricing", href: "/pricing", description: "Published tiers" },
      { label: "Request Quote", href: "/get-estimate", description: "Written scope" },
    ],
    faqs: [
      {
        question: "How much does website development cost in India?",
        answer:
          "Starter business websites from ₹35,000 (25–30 pages + core SEO). Professional catalogs from ₹75,000. Growth / large SKU sites from ₹1,50,000. Website packages: no advance — full payment within 3 days of go-live (+18% GST). Monthly AMC from ₹15,000.",
      },
      {
        question: "Do you serve clients outside Vadodara and Gujarat?",
        answer:
          "Yes. Discovery is Zoom, Drive, and WhatsApp for the rest of India. On-site plant visits are Gujarat-first (Vadodara GIDC, Ankleshwar, Halol, Savli, Makarpura).",
      },
      {
        question: "Will my website rank on Google?",
        answer:
          "We ship speed, titles, schema, and Search Console. Ranking for a product name needs those product pages to exist. Monthly AMC is the ongoing SEO work after launch.",
      },
    ],
  }),

  "web-development-company-gujarat": buildIndiaGeo("web", {
    slug: "web-development-company-gujarat",
    title: "Website Development Company Gujarat",
    headline: "Website Development Company in Gujarat",
    subheadline:
      "Manufacturer catalogs and MSME sites from ₹35,000. AMC ₹15,000/month. Vadodara HQ — Ahmedabad, Surat, Rajkot, Morbi, Ankleshwar. GST invoice. Pay after go-live.",
    metaTitle: "Website Development Company in Gujarat | From ₹35,000 | Maxwell",
    metaDescription:
      "Website development company in Gujarat — manufacturer catalogs and MSME sites from ₹35,000. AMC from ₹15,000. Vadodara HQ. Request a quote.",
    primaryKeyword: "Website Development Company Gujarat",
    secondaryKeywords: [
      "website development company in Gujarat",
      "web development company Gujarat",
      "website development Vadodara Gujarat",
      "manufacturer website Gujarat",
      "website development Ahmedabad Surat Rajkot",
    ],
    relatedSearches: [
      "website development cost Gujarat",
      "best web development company Vadodara",
      "manufacturer website Morbi ceramic",
      "chemical company website Ankleshwar",
    ],
    marketInsights:
      "Gujarat buyers search product + city before they call. A directory slot next to five competitors is not a catalog. Maxwell is in Vadodara: websites from ₹35,000, AMC ₹15,000/month, plant visits on the GIDC belt. Not ERP.",
    industryChallenges: [
      { title: "You rent the lead", description: "IndiaMART renews every year. You never own the buyer list." },
      { title: "The brochure is a PDF", description: "Purchase managers need grade, size, and a quote form — not a 12MB download." },
      { title: "The site dies on phone data", description: "Cheap WordPress themes fail Core Web Vitals. Google then hides GIDC units." },
    ],
    recommendedApproach: [
      "Page list from how buyers search (product + GIDC / city)",
      "Catalog + WhatsApp + RFQ on money pages",
      "Next.js so it loads on Jio 4G",
      "Search Console at go-live",
      "Optional AMC ₹15,000/month",
    ],
    roiExamples: [
      { metric: "₹35,000", label: "Starter site", description: "25–30 pages + SEO setup" },
      { metric: "263", label: "Drashti pages", description: "Live Vadodara catalog" },
      { metric: "₹15,000", label: "Monthly AMC", description: "Edits + SEO + two articles" },
    ],
    internalLinks: [
      { label: "Vadodara", href: "/solutions/web-development-company-vadodara", description: "HQ city page" },
      { label: "India Nationwide", href: "/solutions/web-development-company-india", description: "Pan-India" },
      { label: "Manufacturer Websites", href: "/services/website-development-for-manufacturers", description: "Industrial focus" },
      { label: "Website pricing", href: "/pricing", description: "Published tiers" },
      { label: "Request Quote", href: "/get-estimate", description: "Written scope" },
    ],
    faqs: [
      {
        question: "How much does website development cost in Gujarat?",
        answer:
          "Starter from ₹35,000 (25–30 pages + core SEO). Professional catalogs from ₹75,000. Growth / large SKU sites from ₹1,50,000. No advance — pay within 3 days of go-live (+18% GST). Monthly AMC from ₹15,000.",
      },
      {
        question: "Do you visit factories in Gujarat for discovery?",
        answer:
          "Yes, when the catalog is wrong without walking the floor — Vadodara GIDC, Ankleshwar, Halol, Savli, Makarpura. Ahmedabad, Surat, Rajkot, and Morbi can start on Zoom with photos and an Excel list.",
      },
      {
        question: "Can you build export-ready websites for Gujarat manufacturers?",
        answer:
          "Yes. English product pages, spec / SDS / COA paths where needed, container or RFQ forms, and SEO aimed at how overseas buyers search.",
      },
    ],
  }),

  "web-development-company-vadodara": buildIndiaGeo("web", {
    slug: "web-development-company-vadodara",
    title: "Website Development Company Vadodara",
    headline: "Website Development Company in Vadodara",
    subheadline:
      "Manufacturer catalogs and business sites from ₹35,000. AMC ₹15,000/month. Jetalpur Road office. GIDC plant visits. GST invoice. Pay after go-live.",
    metaTitle: "Website Development Company in Vadodara | From ₹35,000 | Maxwell",
    metaDescription:
      "Website development company in Vadodara — manufacturer catalogs, GIDC estates, sites from ₹35,000. AMC from ₹15,000. Request a quote.",
    primaryKeyword: "website development company in Vadodara",
    secondaryKeywords: [
      "website development company Vadodara",
      "website developer in Vadodara",
      "web development company Vadodara",
      "custom web development Vadodara",
      "website development services Vadodara",
      "Next.js website development Vadodara",
      "best website developer Vadodara",
      "manufacturer website Vadodara",
      "Makarpura GIDC website",
      "website development Vadodara Gujarat",
    ],
    relatedSearches: [
      "website development cost Vadodara",
      "website development company Gujarat",
      "total cost of ownership website Vadodara",
      "WordPress vs Next.js website India",
      "professional website development Vadodara",
      "manufacturer website Vadodara",
    ],
    marketInsights:
      "Vadodara manufacturers still send PDF catalogs and IndiaMART links. Buyers in Pune and Dubai Google the product name first. Maxwell is on Jetalpur Road: sites from ₹35,000, AMC ₹15,000/month, plant visits in Makarpura, Savli, Nandesari, Waghodia. Live proof is the Drashti Chemicals catalog — not a TCO spreadsheet.",
    industryChallenges: [
      {
        title: "Legacy WordPress Competitor Advantage",
        description:
          "Competitors like H Cube (2009), M2 Web Solution (2009), and Dreamsdesign rank page 1 despite slow, vulnerable WordPress sites. Their advantage is domain age and local citations, not technical quality.",
      },
      {
        title: "Hidden Total Cost of Ownership",
        description:
          "₹25,000 WordPress sites cost ₹2,77,000 over 3 years when plugin renewals (₹15K), hosting (₹8K), maintenance (₹12K), developer overhead (₹14K), and performance revenue loss (₹30K/yr) are included.",
      },
      {
        title: "Poor Google Rankings from Template Sites",
        description:
          "WordPress theme sites routinely fail Core Web Vitals — causing Google to suppress rankings for Vadodara businesses whose competitors have identical templates.",
      },
      {
        title: "No Lead Architecture",
        description:
          "Brochure websites without RFQ forms, WhatsApp CTAs, and GA4 event tracking cannot convert search traffic into sales pipeline for Vadodara manufacturers.",
      },
    ],
    recommendedApproach: [
      "On-site Vadodara discovery at your GIDC facility or office",
      "SEO-first information architecture with local keyword mapping",
      "Next.js 14 SSG/SSR for 94+ PageSpeed and crawlability",
      "JSON-LD schema: ProfessionalService, Product, FAQ, BreadcrumbList",
      "Conversion CTAs + GA4 e-commerce and lead tracking",
      "Google Business Profile citation alignment (NAP consistency)",
    ],
    roiExamples: [
      {
        metric: "₹1,57,000",
        label: "3-Year TCO Savings",
        description: "Custom Next.js vs. standard WordPress",
      },
      {
        metric: "94+",
        label: "PageSpeed Score",
        description: "Performance target — Lighthouse mobile",
      },
      {
        metric: "4 hr",
        label: "Guaranteed Response",
        description: "Local Vadodara team",
      },
    ],
    internalLinks: [
      {
        label: "Vadodara Office & Service Hub",
        href: "/locations/india/vadodara",
        description: "Local city page",
      },
      {
        label: "Gujarat GIDC Estates",
        href: "/locations/india/gujarat/gidc",
        description: "Makarpura to Vatva",
      },
      {
        label: "Manufacturer Website Service",
        href: "/services/website-development-for-manufacturers",
        description: "Industrial focus",
      },
      {
        label: "Web Development Cost Vadodara",
        href: "/cost/web-development-cost-vadodara",
        description: "Published tiers from ₹45,000",
      },
      {
        label: "SEO Company Vadodara",
        href: "/solutions/seo-company-vadodara",
        description: "Technical SEO + clusters",
      },
      {
        label: "Gujarat Website Development",
        href: "/solutions/web-development-company-gujarat",
        description: "State-wide page",
      },
      {
        label: "Owned Enquiry Channel",
        href: "/services/website-development/owned-enquiry-channel",
        description: "Vs paid listings",
      },
      {
        label: "Chemical Catalog Case Study",
        href: "/case-studies/drashti-chemicals",
        description: "263-page chemical catalog",
      },
      {
        label: "Book Free Consultation",
        href: "/book-consultation",
        description: "Free 30-min strategy call",
      },
    ],
    faqs: [
      {
        question: "Why is a custom Next.js website cheaper than WordPress over 3 years in Vadodara?",
        answer:
          "A standard WordPress site costs ₹25,000 upfront but adds ₹54,000/year in recurring costs — plugin licences (₹15,000), hosting (₹8,000), maintenance (₹12,000), and developer overhead (₹14,000) — totalling ₹1,87,000 over 3 years, plus ₹90,000 in estimated performance revenue loss. Maxwell's custom Next.js site starts at ₹75,000 with only ₹15,000/year in cloud hosting and core maintenance, totalling ₹1,20,000 — saving you ₹1,57,000 with zero plugin dependency.",
      },
      {
        question: "Who is the best website development company in Vadodara?",
        answer:
          "Look for a GST-registered company with published case studies, Core Web Vitals above 90, documented delivery milestones, and the ability to visit your site. Maxwell Electrodeal is headquartered at 419 Lalita Tower, Near Hotel Rajpath, Jetalpur Road, Vadodara — and has delivered 50+ projects including a 263-page chemical supplier product catalog with 94+ PageSpeed.",
      },
      {
        question: "How much does website development cost in Vadodara?",
        answer:
          "Business and corporate websites start from ₹45,000 (25–30 pages + core SEO). Manufacturer product catalog websites often start at ₹75,000. Website packages: no advance — full payment within 3 days after go-live (+18% GST). Response in 4 hours.",
      },
      {
        question: "Do you have a local office in Vadodara?",
        answer:
          "Yes. Maxwell Electrodeal is at 419 Lalita Tower, Near Hotel Rajpath, Jetalpur Road, Vadodara, Gujarat 390007. We welcome in-person meetings by appointment and conduct on-site discovery at GIDC Makarpura, Savli, Halol, and Bharuch-Ankleshwar.",
      },
      {
        question: "Can you build export-ready websites for Vadodara manufacturers?",
        answer:
          "Yes. We build English-language product catalogs with spec sheets, certification badges, container inquiry forms, and SEO targeting international buyer search terms — including chemical exporters in Nandesari and GIDC Makarpura engineering companies.",
      },
      {
        question: "Why does Google rank older Vadodara agencies above newer companies like Maxwell?",
        answer:
          "Domain age, local citations, and Google Business Profile consistency give legacy agencies (founded 2009–2011) a structural backlink advantage. We counter this with superior technical performance (94+ PageSpeed vs. their 40–60 scores), structured data schemas, and NAP consistency — signals that now carry increasing weight in 2026 Google algorithms.",
      },
      {
        question: "Why Next.js 14 instead of WordPress for Vadodara businesses?",
        answer:
          "Next.js 14 delivers server-rendered SEO, sub-2-second LCP scores, zero plugin vulnerability surface, and headless architecture for content updates without developer involvement — critical for Google and AI search visibility in 2026. WordPress plugins introduce recurring costs, security gaps, and Core Web Vitals failures that suppress rankings.",
      },
      {
        question: "What is the total cost of ownership (TCO) for a website in Vadodara?",
        answer: TCO_FAQ_ANSWER,
      },
    ],
  }),

  "mobile-app-development-company-vadodara": buildIndiaGeo("mobile", {
    slug: "mobile-app-development-company-vadodara",
    title: "Mobile App Development Company Vadodara",
    headline: "Mobile App Development Company in Vadodara",
    subheadline: "Flutter and React Native apps for Vadodara businesses—field teams, customer portals, and offline-ready enterprise mobility.",
    metaTitle: "Mobile App Development Company in Vadodara | iOS & Android",
    metaDescription:
      "Mobile app development company in Vadodara. Flutter, React Native, iOS, Android. Maxwell Electrodeal — local team, store-ready apps.",
    primaryKeyword: "Mobile App Development Company in Vadodara",
    secondaryKeywords: [
      "Android app development company Vadodara",
      "iOS app development Vadodara",
      "Flutter app development company",
      "cross platform app development",
      "business mobile applications",
      "app development company Gujarat",
    ],
    relatedSearches: [
      "mobile app development cost India",
      "Flutter vs React Native",
      "MVP app development Vadodara",
    ],
    marketInsights:
      "India has 750M+ smartphone users. Vadodara field teams in logistics, healthcare, and manufacturing need offline-capable mobile apps—not desktop-only ERP screens.",
    industryChallenges: [
      { title: "Dual Platform Cost", description: "Separate iOS and Android builds double budget—cross-platform saves 35–45%." },
      { title: "Offline Field Use", description: "Low-connectivity factory floors require offline-first sync architecture." },
    ],
    recommendedApproach: ["Flutter or React Native", "Offline sync", "Push notifications", "Play Store / App Store launch"],
    roiExamples: [
      { metric: "4.8★", label: "App Store Rating", description: "Healthcare client" },
      { metric: "40%", label: "Dev Cost Savings", description: "Cross-platform" },
      { metric: "₹3L–₹20L", label: "App Cost Range", description: "MVP to enterprise" },
    ],
    internalLinks: [
      { label: "Mobile Service", href: "/services/mobile-app-development", description: "Capabilities" },
      { label: "Healthcare Apps", href: "/industries/healthcare", description: "Industry" },
      { label: "App Cost India", href: "/blog/mobile-app-development-cost-india-2026", description: "Pricing guide" },
      { label: "Get Estimate", href: "/get-estimate", description: "Quote" },
    ],
    faqs: [
      {
        question: "Flutter vs React Native for Vadodara businesses?",
        answer: "Both deliver production quality—we recommend based on team skills, hardware APIs, and performance needs. Cross-platform typically saves 35–45% versus dual native builds.",
      },
      {
        question: "How much does mobile app development cost in India?",
        answer: "MVPs from ₹3L; full enterprise apps ₹8L–₹20L depending on offline sync, roles, and integrations.",
      },
    ],
  }),

  "crm-development-company-india": buildIndiaGeo("crm", {
    slug: "crm-development-company-india",
    title: "CRM Development Company India",
    headline: "CRM Development Company in India",
    subheadline: "Custom CRM pipelines, WhatsApp automation, and B2B sales dashboards—no per-seat Salesforce fees, full workflow ownership.",
    metaTitle: "CRM Development Company India | Custom CRM Software",
    metaDescription:
      "CRM development company in India. Custom sales CRM, pipelines, automation. Maxwell Electrodeal — B2B teams, no per-seat SaaS fees.",
    primaryKeyword: "CRM Development Company India",
    secondaryKeywords: [
      "CRM development India",
      "custom CRM development",
      "best CRM software development company",
      "sales CRM development India",
      "custom CRM vs Salesforce",
    ],
    relatedSearches: ["CRM development cost", "CRM vs ERP", "custom CRM vs HubSpot"],
    marketInsights:
      "Indian B2B sales teams lose 30% of leads to poor follow-up. A CRM development company in India can build pipeline stages matching your approval workflows—without ₹3,000/seat/month SaaS scaling costs.",
    industryChallenges: [
      { title: "Per-Seat SaaS Scaling", description: "Salesforce costs explode beyond 20 seats for growing Indian sales teams." },
      { title: "WhatsApp-First Sales", description: "Generic CRMs lack India-native WhatsApp and regional language workflows." },
    ],
    recommendedApproach: ["Sales process mapping", "Custom pipeline stages", "WhatsApp/email automation", "Executive dashboards"],
    roiExamples: [
      { metric: "50%", label: "Faster Follow-up", description: "Automated routing" },
      { metric: "2.5×", label: "Repeat Purchases", description: "Retail integration" },
      { metric: "0", label: "Per-Seat Fees", description: "Custom ownership" },
    ],
    internalLinks: [
      { label: "CRM Service", href: "/services/crm-development", description: "Capabilities" },
      { label: "CRM vs Salesforce", href: "/blog/custom-crm-vs-salesforce", description: "Comparison" },
      { label: "Retail", href: "/industries/retail", description: "Industry" },
      { label: "Contact", href: "/contact", description: "Sales inquiry" },
    ],
    faqs: [
      {
        question: "Custom CRM vs Salesforce for Indian businesses?",
        answer: "Custom CRM wins when approval workflows, WhatsApp integration, or 20+ seats make SaaS costs prohibitive—you own the data model and pay no per-user fees.",
      },
      {
        question: "How much does CRM development cost in India?",
        answer: "Sales CRM MVPs from ₹5L–₹12L; enterprise multi-role systems ₹15L–₹30L+ with integrations and analytics.",
      },
    ],
  }),

  "ai-development-company-india": buildIndiaGeo("ai", {
    slug: "ai-development-company-india",
    title: "AI Development Company India",
    headline: "AI Development Company in India — Industrial & Enterprise AI",
    subheadline:
      "LLM automation, computer vision, industrial safety AI, PPE detection, and production ML—built for measurable ROI, not pilot purgatory.",
    metaTitle: "AI Development Company India | Industrial AI & Computer Vision",
    metaDescription:
      "AI development company in India. Industrial AI, computer vision, PPE detection, LLM automation, chatbots. Maxwell Electrodeal — AdvanceSafe workplace safety AI.",
    primaryKeyword: "AI Development Company India",
    secondaryKeywords: [
      "AI software development company",
      "artificial intelligence solutions",
      "AI automation services",
      "industrial AI solutions",
      "computer vision solutions",
      "AI chatbot development",
      "machine learning solutions",
      "workplace safety AI",
      "PPE detection system",
    ],
    relatedSearches: [
      "AI for manufacturing",
      "computer vision safety monitoring",
      "AI video analytics industrial",
      "AI software development company for businesses",
    ],
    marketInsights:
      "Enterprise AI adoption in India grew 3× since 2023—but 60% of pilots fail without production MLOps. Maxwell delivers industrial AI including AdvanceSafe workplace safety monitoring: PPE detection, computer vision safety analytics, and real-time incident alerts for factories.",
    industryChallenges: [
      { title: "Pilot Purgatory", description: "POCs never reach production without edge deployment and integration engineering." },
      { title: "Generic Models Fail", description: "Facility-specific vision tasks need custom training on your camera angles and PPE rules." },
    ],
    recommendedApproach: [
      "ROI-validated use cases",
      "Custom YOLO/computer vision models",
      "Edge deployment on factory cameras",
      "LLM agents for document and support automation",
    ],
    roiExamples: [
      { metric: "99.2%", label: "Detection Accuracy", description: "Safety vision AI" },
      { metric: "75%", label: "Incident Reduction", description: "6-month post-deploy" },
      { metric: "60%", label: "Faster Inspection", description: "vs manual rounds" },
    ],
    internalLinks: [
      { label: "AI Service", href: "/services/ai-solutions", description: "Capabilities" },
      { label: "Manufacturing AI", href: "/blog/ai-for-manufacturing-industrial-safety", description: "Industry blog" },
      { label: "Safety Case Study", href: "/case-studies/ai-safety-monitoring", description: "Vision AI" },
      { label: "Manufacturing", href: "/industries/manufacturing", description: "Industry" },
    ],
    faqs: [
      {
        question: "What is industrial AI?",
        answer:
          "Industrial AI applies computer vision, predictive analytics, and automation to factory floors—PPE detection, quality inspection, and safety monitoring with measurable incident reduction.",
      },
      {
        question: "Do you build PPE detection systems?",
        answer:
          "Yes—AdvanceSafe and custom vision systems detect helmet, vest, and zone violations in real time with dashboard alerts and audit trails for EHS teams.",
      },
      {
        question: "AI chatbot development for businesses?",
        answer: "We build LLM-powered support bots, document Q&A, and workflow agents integrated with your CRM, ERP, and knowledge base—not generic ChatGPT wrappers.",
      },
    ],
  }),
};
