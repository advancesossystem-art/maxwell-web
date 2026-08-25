import { siteConfig } from "./constants";
import {
  companyStats,
  getTrustMetricsGrid,
  companyMetricDisplay,
} from "./company-metrics";

export { companyStats };

export const trustMetrics = getTrustMetricsGrid();

export const certifications = [
  "ISO 27001-aligned practices",
  "AWS deployment practices",
  "Agile & Scrum delivery practices",
  "GDPR-aware development",
  "SOC 2-aligned practices",
] as const;

export const companyStory = {
  headline: "Website engineering for Vadodara businesses since 2018",
  paragraphs: [
    "Maxwell Electrodeal started in 2018 with a clear problem: Gujarat businesses with strong products and services were invisible on Google. Many relied on paid directories or weak brochure sites while buyers searched elsewhere.",
    "The solution was an owned website — a direct channel where your services, products, or catalog show up when a buyer searches Google. First inquiry comes to your WhatsApp or inbox. No platform middleman. No competitor adjacency. No annual listing tax.",
    "Our early catalog work included specialty suppliers in Nandesari GIDC, Vadodara — 263 pages, 154 products, PageSpeed 94, live in 6 weeks — and that same craft now serves manufacturers, traders, exporters, clinics, and growing companies across India.",
    "That discipline hasn't changed. We still start every project with a discovery call or site visit — not a template form. We build for your actual offerings and buyers. Every Maxwell website is a custom Next.js build: owned codebase, no plugin subscriptions, no annual WordPress tax. Manufacturer and industrial catalogs remain a specialty.",
  ],
  mission:
    "Build websites, catalogs, and RFQ systems that make businesses visible on Google and turn search into owned inquiries.",
  vision:
    "Be the web engineering partner Gujarat businesses call when they are ready to own their buyer channel — before their competitor does.",
} as const;

export const aboutPageIndustries = [
  {
    slug: "chemical-manufacturing",
    title: "Chemical & Pharma Manufacturing",
    description:
      "Product catalog websites for specialty chemical manufacturers, chemical distributors, and pharma equipment suppliers. CAS number pages, SDS/MSDS downloads, COA request forms, and category SEO — for manufacturers in Nandesari, Ankleshwar, and Bharuch chemical corridors.",
  },
  {
    slug: "manufacturing",
    title: "Engineering & Machinery",
    description:
      "B2B supplier websites for precision engineering companies, OEM machinery manufacturers, and auto component suppliers in Makarpura and Savli GIDC. Spec sheet pages, RFQ forms, ISO/CE certification display, and export-ready catalog architecture.",
  },
  {
    slug: "pharma",
    title: "Pharma Equipment & API",
    description:
      "Catalog websites for pharma equipment manufacturers and bulk drug API suppliers. WHO-GMP compliant product formats, pharmacopeia specification pages, export inquiry forms, and international buyer targeting for manufacturers in Halol, Padra, and Vapi.",
  },
  {
    slug: "ceramics",
    title: "Ceramic & Tile Exporters (Morbi)",
    description:
      "Product catalog websites for Morbi tile manufacturers and ceramic exporters — size/finish/PEI rating catalog pages, dealer portal architecture, and export inquiry flows targeting international buyers. Specialist in Morbi corridor digital presence.",
  },
  {
    slug: "food-processing",
    title: "FMCG & Food Processing",
    description:
      "Supplier websites for food processing manufacturers, packaging suppliers, and FMCG distributors. Private label inquiry flows, FSSAI compliance display, and B2B buyer targeting for manufacturers in Waghodia and Anand corridors.",
  },
  {
    slug: "export",
    title: "Export-Ready Manufacturer Websites",
    description:
      "English-language product catalogs for Indian exporters targeting German, UK, UAE, and US industrial buyers. HS code product pages, container inquiry forms, certification badge display, and SEO targeting international buyer search terms.",
  },
] as const;

export const coreValues = [
  { title: "Engineering Excellence", description: "Security, performance, and scalability built in—not bolted on.", icon: "⚡" },
  { title: "Radical Transparency", description: "Honest timelines, visible progress, and clear communication always.", icon: "🔍" },
  { title: "Client Success First", description: "We measure success by your outcomes, not lines of code shipped.", icon: "🎯" },
  { title: "Modern delivery", description: "Current stacks and practical AI where they save real hours—not hype for slide decks.", icon: "🚀" },
  { title: "Long-Term Partnership", description: "We build relationships, not transactions. Support extends beyond launch.", icon: "🤝" },
  { title: "Integrity & Ownership", description: "Your code, your IP. NDAs standard. No vendor lock-in.", icon: "🔒" },
] as const;

export const companyJourney = [
  { year: "2018", title: "Founded in Vadodara", description: "Started as a web and software engineering company serving local manufacturers and businesses in Vadodara, Gujarat." },
  { year: "2019", title: "First industrial catalog", description: "Delivered first product catalog website for a Vadodara-based industrial supplier — owned inquiry flow replacing directory dependency." },
  { year: "2020", title: "GIDC corridor focus", description: "Began specialising in GIDC estate manufacturers: Makarpura, Nandesari, Ankleshwar — chemical, engineering, pharma." },
  { year: "2021", title: "RFQ system launches", description: "Launched first B2B RFQ portal with grade/spec/MOQ fields and WhatsApp notification — for a specialty chemical exporter." },
  { year: "2022", title: "Export-ready websites", description: "First manufacturer clients started receiving direct inquiries from UAE, Germany, and UK buyers via website." },
  { year: "2023", title: "Next.js catalog architecture", description: "Migrated all manufacturer websites to Next.js SSG — 90+ PageSpeed, 200+ indexed product pages, direct GSC traffic." },
  { year: "2024", title: "50+ manufacturer projects", description: "Crossed 50+ delivered websites and catalog systems for chemical, pharma equipment, engineering, FMCG, and tile manufacturers." },
  { year: "2025", title: "Drashti Chemicals goes live", description: "Launched drashtichemical.com — 263 pages, 154 products, PageSpeed 94, first direct buyer inquiry within 30 days." },
] as const;

export const technologyExpertise = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Mobile", items: ["React Native", "Flutter", "iOS", "Android"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "CI/CD"] },
  { category: "AI & Data", items: ["LLM Integration", "Computer Vision", "Python ML", "Analytics"] },
  { category: "Enterprise", items: ["ERP", "CRM", "SaaS", "Multi-tenant"] },
] as const;

export const globalDeliveryModel = {
  overview:
    "Hybrid delivery combining India-based engineering excellence with global timezone overlap. Dedicated teams, English-first communication, and enterprise-grade project management.",
  regions: [
    { name: "India HQ", role: "Engineering & Delivery Center", coverage: "Primary development hub" },
    { name: "Middle East", role: "Client Success & Support", coverage: "GST + UAE timezone overlap" },
    { name: "Southeast Asia", role: "Regional Delivery", coverage: "Singapore & Jakarta clients" },
    { name: "Global Remote", role: "Worldwide Clients", coverage: "US, UK, Europe, Australia" },
  ],
} as const;

export const companyOverview = {
  businessModel:
    "Project-based delivery for defined scopes, dedicated team augmentation for ongoing needs, and SaaS MVP partnerships for startups. Transparent fixed-price or time-and-materials engagements with milestone billing.",
  deliveryMethodology:
    "Agile/Scrum with 2-week sprints, weekly client demos, and continuous integration. Discovery → Design → Development → QA → Deployment → Support lifecycle with documented handoffs at each phase.",
  qualityStandards:
    "Code reviews on every PR, automated testing pipelines, security scanning, performance benchmarks (Lighthouse 95+ for web), and UAT sign-off before production deployment.",
  clientEngagement:
    "Dedicated project manager, Slack/WhatsApp channel for daily communication, bi-weekly steering meetings for enterprise projects, and transparent Jira/Linear boards for full visibility.",
  futureVision:
    "Expand AI-native product development, deepen industry-specific platforms for manufacturing and healthcare, and build a Maxwell Academy for client team upskilling.",
} as const;

export type TeamDepartment =
  | "Leadership"
  | "Engineering"
  | "Design"
  | "Project Management"
  | "AI Specialists"
  | "Cloud Specialists";

export interface TeamMember {
  name: string;
  role: string;
  department: TeamDepartment;
  bio: string;
  experience: string;
  skills: string[];
  linkedin?: string;
  initials: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sanjay Prajapati",
    role: "Founder & CEO",
    department: "Leadership",
    bio: "Founder & CEO of Maxwell Electrodeal. Started the company in Vadodara in 2018. Leads website engineering projects personally — from initial discovery at the client's factory to final go-live. Has delivered 50+ projects for manufacturers, exporters, and industrial suppliers across Gujarat and India.",
    experience: "Leading Maxwell since 2018",
    skills: ["Website Engineering", "Industrial Catalogs", "RFQ Systems", "GIDC SEO", "Manufacturing B2B"],
    initials: "SP",
    linkedin: "https://www.linkedin.com/company/maxwellelectrodeal",
  },
];

export const teamDepartments: TeamDepartment[] = [
  "Leadership",
];

export const sdlcPhases = [
  {
    id: "discovery",
    title: "Discovery",
    duration: "3–7 days",
    description:
      "Site visit or call to map products, buyers, certificates, and enquiry paths — not a generic software requirements dump.",
    deliverables: ["Sitemap & page list", "SEO keyword / corridor notes", "Scope & timeline"],
    clientInvolvement: "Product list, brand assets, competitor URLs, priority pages",
    outcomes: ["Aligned scope", "Clear Starter vs Professional fit", "Go-live target"],
  },
  {
    id: "design",
    title: "Design",
    duration: "1–2 weeks",
    description: "Wireframes and UI for catalog, RFQ, and trust pages — mobile-first, brand-aligned.",
    deliverables: ["Key page wireframes", "UI mockups", "Component notes"],
    clientInvolvement: "Design review, brand feedback, content owners named",
    outcomes: ["Approved look & IA", "Build-ready specs", "Fewer mid-build changes"],
  },
  {
    id: "build",
    title: "Build",
    duration: "2–5 weeks",
    description: "Next.js implementation: pages, forms, WhatsApp CTAs, CMS where needed, weekly demos.",
    deliverables: ["Working site increments", "Forms & enquiry paths", "Staging URL"],
    clientInvolvement: "Weekly demos, content upload, feedback in one channel",
    outcomes: ["Visible progress", "Early content gaps spotted", "Milestone delivery"],
  },
  {
    id: "seo-go-live",
    title: "SEO go-live",
    duration: "3–7 days",
    description:
      "Technical SEO, schema, Search Console, Analytics, redirects if redesign — then production launch.",
    deliverables: ["Live site", "Sitemap + Search Console", "GA4 / conversion events"],
    clientInvolvement: "DNS / hosting access, go-live approval, training session",
    outcomes: ["Indexed foundations", "Owned enquiry tracking", "Pay-after-go-live handoff"],
  },
  {
    id: "amc",
    title: "AMC",
    duration: "Ongoing",
    description:
      "Optional monthly AMC: product changes, updates, SEO report, and published articles so the site keeps working.",
    deliverables: ["Monthly update log", "SEO report", "Security / uptime checks"],
    clientInvolvement: "Change requests, quarterly priorities",
    outcomes: ["Reliable site", "Steady content", "Long-term partnership"],
  },
] as const;

export const careersBenefits = [
  "Competitive salary & performance bonuses",
  "Remote-first with flexible hours",
  "Health insurance for you & family",
  "Learning budget (courses, conferences)",
  "Latest MacBook / dev equipment",
  "Paid certifications (AWS, Azure, etc.)",
  "20+ days annual leave",
  "Festival & performance bonuses",
] as const;

export const workCulture = [
  { title: "Engineering-First", description: "Code quality, architecture, and best practices are non-negotiable." },
  { title: "Remote-Friendly", description: "Work from anywhere in India with optional office meetups." },
  { title: "Growth-Oriented", description: "Clear career paths from junior to lead to architect." },
  { title: "Client Impact", description: "See your work deliver real business outcomes for diverse industries." },
] as const;

export const openPositions = [
  { title: "Senior Full-Stack Developer", department: "Engineering", location: "Remote (India)", type: "Full-time" },
  { title: "React Native Developer", department: "Engineering", location: "Remote (India)", type: "Full-time" },
  { title: "UI/UX Designer", department: "Design", location: "Remote / Hybrid", type: "Full-time" },
  { title: "AI/ML Engineer", department: "AI Specialists", location: "Remote (India)", type: "Full-time" },
  { title: "DevOps Engineer", department: "Cloud Specialists", location: "Remote (India)", type: "Full-time" },
  { title: "Project Manager", department: "Project Management", location: "Remote (India)", type: "Full-time" },
] as const;

export const growthPaths = [
  { track: "Engineering", path: "Junior → Mid → Senior → Lead → Architect" },
  { track: "Design", path: "Designer → Senior Designer → Lead → Design Director" },
  { track: "Management", path: "PM → Senior PM → Delivery Manager → VP Delivery" },
  { track: "AI/Cloud", path: "Specialist → Senior → Architect → Practice Lead" },
] as const;

export const competitorComparison = {
  criteria: ["Communication", "Speed", "Quality", "Support", "Scalability", "Pricing", "Industry Expertise"],
  options: [
    {
      name: "Freelancers",
      scores: { Communication: 2, Speed: 3, Quality: 2, Support: 1, Scalability: 1, Pricing: 5, "Industry Expertise": 1 },
      summary: "Low cost but high risk—single point of failure, no process, limited accountability.",
    },
    {
      name: "Small Agencies",
      scores: { Communication: 3, Speed: 3, Quality: 3, Support: 2, Scalability: 2, Pricing: 4, "Industry Expertise": 2 },
      summary: "Affordable but often lack depth for enterprise ERP, AI, or multi-platform projects.",
    },
    {
      name: "Large Agencies",
      scores: { Communication: 2, Speed: 2, Quality: 4, Support: 3, Scalability: 5, Pricing: 1, "Industry Expertise": 3 },
      summary: "Enterprise capability but slow, expensive, and you may get junior teams at senior rates.",
    },
    {
      name: "Maxwell Electrodeal",
      scores: { Communication: 5, Speed: 4, Quality: 5, Support: 5, Scalability: 4, Pricing: 4, "Industry Expertise": 5 },
      summary: "Senior team, transparent process, industry depth, and enterprise quality at competitive India rates.",
      highlight: true,
    },
  ],
} as const;

export const whyMaxwellOutcomes = [
  { metric: "40%", label: "Avg. Efficiency Gain", caseStudy: "/case-studies/manufacturing-erp" },
  { metric: "99.9%", label: "Platform Uptime", caseStudy: "/case-studies/healthcare-management" },
  { metric: "8 mo", label: "Avg. ROI Timeline", caseStudy: "/case-studies/retail-analytics" },
  { metric: "₹12L+", label: "Annual Savings (ERP)", caseStudy: "/case-studies/manufacturing-erp" },
] as const;

export const companyFaqs = [
  {
    question: "How long has Maxwell Electrodeal been in business?",
    answer: "Founded in 2018, we have 8+ years of delivering enterprise software across manufacturing, healthcare, logistics, education, retail, and construction.",
  },
  {
    question: "Where is your team located?",
    answer: "Our engineering hub is in India with remote team members nationwide. We serve clients globally with timezone overlap for US, UK, UAE, and APAC.",
  },
  {
    question: "What is your project delivery track record?",
    answer: `${companyMetricDisplay.deliverySuccess} on-time milestone delivery, ${companyMetricDisplay.clientRetention} client retention, and ${companyMetricDisplay.projectsCompleted} completed projects with documented case studies and measurable ROI.`,
  },
  {
    question: "Do you sign NDAs and who owns the code?",
    answer: "Yes. NDAs are standard. Upon final payment, clients receive 100% ownership of all source code, designs, and intellectual property.",
  },
  {
    question: "How do you ensure quality?",
    answer: "Code reviews on every PR, automated testing, security scanning, performance benchmarks, and UAT sign-off before production deployment.",
  },
] as const;

export const processTrustFramework = {
  headline: "Why clients trust our website delivery",
  riskReduction: [
    "Fixed-scope discovery before build commitments",
    "No advance on website packages — pay within 3 days of go-live",
    "100% source code and IP transfer on completion",
    "NDA and role-based access controls by default",
  ],
  qualityGates: [
    "Sitemap and IA approved before design lock",
    "Staging review before production go-live",
    "Core Web Vitals and form checks before launch",
    "Search Console + Analytics confirmed at handoff",
  ],
  reviewCycles: [
    "Weekly client demos with recorded decisions",
    "Single feedback channel (WhatsApp or email)",
    "Transparent task board with clear owners",
  ],
  testingStandards: [
    "Mobile and desktop checks on money pages",
    "Form and WhatsApp path verification",
    "Redirect and sitemap checks on redesigns",
  ],
  communication: [
    "Dedicated project contact and single escalation path",
    "WhatsApp channel with business-hours response target",
    "Clear RACI for content and approvals",
  ],
  escalation: [
    "L1: Project contact within 4 business hours",
    "L2: Engineering lead same business day",
    "L3: Founder engagement for production-critical issues",
  ],
} as const;

export const teamDepartmentHighlights = [
  {
    department: "Leadership" as const,
    headline: "Accountability at the executive level",
    summary: "Founders and practice leads remain engaged on architecture, scope, and delivery health—not handed off after sales.",
    highlights: ["8+ years enterprise delivery", "Direct CTO access on critical decisions", "Transparent executive reporting"],
  },
  {
    department: "Engineering" as const,
    headline: "Product-grade engineering discipline",
    summary: "Full-stack squads shipping React, Node, mobile, and data systems with documented handoffs and code ownership for clients.",
    highlights: ["50+ engineers", "Agile sprints with weekly demos", "Documented architecture & runbooks"],
  },
  {
    department: "AI Specialists" as const,
    headline: "Practical AI with measurable ROI",
    summary: "LLM integrations, automation, and computer vision scoped to business outcomes—not experimental prototypes.",
    highlights: ["Production LLM deployments", "Workflow automation", "Vision systems for operations"],
  },
  {
    department: "Cloud Specialists" as const,
    headline: "Cloud-native reliability",
    summary: "AWS and Azure delivery with CI/CD, monitoring, and cost-aware infrastructure design.",
    highlights: ["IaC & CI/CD pipelines", "24/7 monitoring options", "Well-Architected practices"],
  },
] as const;

export const orgStructure = [
  { level: "Leadership", teams: ["CEO — Sanjay Prajapati", "CTO", "VP Engineering"] },
  { level: "Delivery", teams: ["Project Management", "Client Success"] },
  { level: "Engineering", teams: ["Full-Stack", "Mobile", "Backend", "QA"] },
  { level: "Specialists", teams: ["AI/ML", "Cloud/DevOps", "Design"] },
] as const;
