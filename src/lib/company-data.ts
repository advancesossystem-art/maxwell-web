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
  headline: "Website engineering for Vadodara manufacturers since 2018",
  paragraphs: [
    'Maxwell Electrodeal started in 2018 with a clear problem: Gujarat manufacturers with genuinely world-class products were invisible on Google. Their buyers were finding them on IndiaMart alongside five competitors, on a shared listing that cost ₹1.5–3L a year and shared their leads with rivals.',
    "The solution was an owned catalog website — a direct channel where a manufacturer's chemical products, engineering components, or pharma equipment showed up when a procurement manager searched Google at 11pm. First inquiry comes directly to their WhatsApp. No platform middleman. No competitor adjacency. No annual renewal.",
    "Our first full product catalog was for a specialty chemical supplier in Nandesari GIDC, Vadodara. 263 pages. 154 products. PageSpeed 94. Live in 6 weeks. The client received the first direct online inquiry from a buyer in Pune within 30 days — someone who found them by searching their product category, not the company name.",
    "That discipline hasn't changed. We still start every project with a site visit or discovery call — not a template form. We build for the manufacturer's actual products, certifications, and buyers, not generic service pages. Every Maxwell website is a custom Next.js build: owned codebase, no plugin subscriptions, no annual WordPress tax.",
  ],
  mission:
    "Build catalog websites and RFQ systems that make Gujarat manufacturers visible on Google and eliminate dependence on paid directories.",
  vision:
    "Be the web engineering partner that industrial manufacturers in Gujarat call when they are ready to own their buyer channel — before their competitor does.",
} as const;

export const aboutPageIndustries = [
  {
    slug: "chemical-manufacturing",
    title: "Chemical & Pharma Manufacturing",
    description:
      "Product catalog websites for specialty chemical manufacturers, chemical distributors, and pharma equipment suppliers. CAS number pages, SDS/MSDS downloads, COA request forms, and category SEO — for manufacturers in Nandesari, Ankleshwar, Bharuch-Ankleshwar, and Vatva GIDC corridors.",
  },
  {
    slug: "manufacturing",
    title: "Engineering & Machinery",
    description:
      "B2B supplier websites for precision engineering companies, OEM machinery manufacturers, and auto component suppliers in Makarpura, Savli, and Halol GIDC. Spec sheet pages, RFQ forms, ISO/CE certification display, and export-ready catalog architecture.",
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
    title: "Real Estate & Construction",
    description:
      "RERA-compliant CRM, booking reconciliation, and broker commission tracking for developers. Construction project ERP with material tracking, subcontractor billing, and site progress dashboards.",
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
    duration: "1–3 weeks",
    description: "Deep-dive into business goals, users, technical requirements, and success metrics.",
    deliverables: ["Requirements document", "Technical feasibility assessment", "Project roadmap"],
    clientInvolvement: "Stakeholder interviews, workflow walkthroughs, priority workshops",
    outcomes: ["Aligned scope", "Clear timeline", "Risk identification"],
  },
  {
    id: "planning",
    title: "Planning",
    duration: "1–2 weeks",
    description: "Architecture design, sprint planning, resource allocation, and milestone definition.",
    deliverables: ["Architecture document", "Sprint backlog", "Communication plan"],
    clientInvolvement: "Architecture review, milestone approval, team introduction",
    outcomes: ["Signed-off architecture", "Sprint 1 ready", "Clear accountability"],
  },
  {
    id: "design",
    title: "Design",
    duration: "2–4 weeks",
    description: "Wireframes, UI/UX design, interactive prototypes, and design system creation.",
    deliverables: ["Wireframes", "UI mockups", "Interactive prototype", "Design system"],
    clientInvolvement: "Design reviews, user testing feedback, brand alignment",
    outcomes: ["Approved designs", "Developer-ready specs", "Reduced rework"],
  },
  {
    id: "development",
    title: "Development",
    duration: "4–20+ weeks",
    description: "Agile sprints with weekly demos, code reviews, and continuous integration.",
    deliverables: ["Working software increments", "API documentation", "Weekly demo recordings"],
    clientInvolvement: "Weekly demos, feedback cycles, UAT preparation",
    outcomes: ["Visible progress", "Early issue detection", "Milestone delivery"],
  },
  {
    id: "testing",
    title: "Testing",
    duration: "1–3 weeks",
    description: "QA testing, performance benchmarks, security review, and user acceptance testing.",
    deliverables: ["Test reports", "Bug fix log", "Performance audit", "UAT sign-off"],
    clientInvolvement: "UAT sessions, bug prioritization, go-live approval",
    outcomes: ["Production-ready quality", "Documented test coverage", "Client confidence"],
  },
  {
    id: "deployment",
    title: "Deployment",
    duration: "1–2 weeks",
    description: "Production deployment, data migration, monitoring setup, and launch support.",
    deliverables: ["Deployed application", "Deployment runbook", "Monitoring dashboards"],
    clientInvolvement: "Go-live coordination, training sessions, hypercare period",
    outcomes: ["Live production system", "Trained team", "Zero-downtime launch"],
  },
  {
    id: "support",
    title: "Support",
    duration: "Ongoing",
    description: "Bug fixes, feature updates, performance monitoring, and dedicated support retainers.",
    deliverables: ["SLA-backed support", "Monthly reports", "Feature roadmap updates"],
    clientInvolvement: "Support ticket submission, roadmap prioritization, quarterly reviews",
    outcomes: ["System reliability", "Continuous improvement", "Long-term partnership"],
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
  headline: "Why clients trust our delivery process",
  riskReduction: [
    "Fixed-scope discovery before development commitments",
    "Milestone billing tied to demonstrable deliverables",
    "100% source code and IP transfer on completion",
    "NDA and role-based access controls by default",
  ],
  qualityGates: [
    "Architecture review before sprint 1",
    "Peer code review on every pull request",
    "Automated test and security scans in CI",
    "UAT sign-off checklist before production",
  ],
  reviewCycles: [
    "Weekly client demos with recorded decisions",
    "Bi-weekly steering for enterprise engagements",
    "Transparent Jira/Linear boards with SLA on updates",
  ],
  testingStandards: [
    "Unit and integration tests on critical paths",
    "Performance benchmarks for customer-facing flows",
    "Regression suite before each production release",
  ],
  communication: [
    "Dedicated project manager and single escalation path",
    "Slack/WhatsApp channel with business-hours response target",
    "Documented RACI for stakeholders and approvers",
  ],
  escalation: [
    "L1: Project manager within 4 business hours",
    "L2: Engineering lead same business day",
    "L3: CTO engagement for production-critical issues",
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
