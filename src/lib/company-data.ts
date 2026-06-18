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
  headline: "A software partner for operators who need results",
  paragraphs: [
    `${siteConfig.legalName} exists for one reason: help businesses run better through software that fits how they actually work—not generic products forced into place.`,
    "We started with manufacturing and operations teams in Gujarat who needed ERP and automation without six-month black boxes. That discipline—clear scope, weekly demos, milestone billing—still defines every engagement.",
    "Today we serve founders, COOs, and enterprise leaders across India, the Middle East, Europe, North America, and Australia on projects from ₹1L to ₹50L+. You own the code. We stay for the roadmap after launch.",
  ],
  mission:
    "Build digital systems that reduce manual work, improve visibility, and support confident growth—with direct communication and accountable delivery.",
  vision:
    "Be the partner leaders call when operations outgrow spreadsheets and off-the-shelf tools—and want a team that stays accountable after go-live.",
} as const;

export const coreValues = [
  { title: "Engineering Excellence", description: "Security, performance, and scalability built in—not bolted on.", icon: "⚡" },
  { title: "Radical Transparency", description: "Honest timelines, visible progress, and clear communication always.", icon: "🔍" },
  { title: "Client Success First", description: "We measure success by your outcomes, not lines of code shipped.", icon: "🎯" },
  { title: "Modern delivery", description: "Current stacks and practical AI where they save real hours—not hype for slide decks.", icon: "🚀" },
  { title: "Long-Term Partnership", description: "We build relationships, not transactions. Support extends beyond launch.", icon: "🤝" },
  { title: "Integrity & Ownership", description: "Your code, your IP. NDAs standard. No vendor lock-in.", icon: "🔒" },
] as const;

export const companyJourney = [
  { year: "2018", title: "Founded", description: "Started as a custom ERP consultancy serving Gujarat manufacturers." },
  { year: "2019", title: "First Enterprise Client", description: "Delivered multi-facility ERP for precision manufacturing—₹12L annual savings." },
  { year: "2020", title: "Healthcare & EdTech", description: "Expanded into healthcare platforms and learning management systems." },
  { year: "2021", title: "SaaS & Mobile", description: "Launched SaaS MVP practice and cross-platform mobile development." },
  { year: "2022", title: "Global Delivery", description: "First international clients across UAE, Singapore, and UK markets." },
  { year: "2023", title: "AI Practice", description: "Computer vision, LLM integration, and intelligent automation services." },
  { year: "2024", title: "50+ Team", description: "Grew to 50+ engineers across full-stack, cloud, and AI specializations." },
  { year: "2025", title: `${companyMetricDisplay.projectsCompleted} Projects`, description: `Crossed ${companyMetricDisplay.projectsCompleted} delivered projects with ${companyMetricDisplay.clientRetention} client retention.` },
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
    name: "Rajesh Mehta",
    role: "",
    department: "Leadership",
    bio: "15+ years in enterprise software. Former tech lead at a Fortune 500 manufacturing company.",
    experience: "15+ years",
    skills: ["Strategy", "ERP", "Manufacturing"],
    initials: "RM",
    linkedin: "https://www.linkedin.com/company/maxwellelectrodeal",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    department: "Leadership",
    bio: "Architect of 40+ production systems. Expert in scalable SaaS and cloud-native architecture.",
    experience: "12+ years",
    skills: ["Architecture", "Cloud", "SaaS"],
    initials: "PS",
  },
  {
    name: "Amit Patel",
    role: "VP Engineering",
    department: "Leadership",
    bio: "Leads 30+ engineers across full-stack, mobile, and AI teams with Agile delivery excellence.",
    experience: "10+ years",
    skills: ["Engineering Leadership", "Agile", "DevOps"],
    initials: "AP",
  },
  {
    name: "Sneha Reddy",
    role: "Senior Full-Stack Engineer",
    department: "Engineering",
    bio: "React, Node.js, and PostgreSQL specialist. Led ERP and healthcare platform builds.",
    experience: "8+ years",
    skills: ["React", "Node.js", "PostgreSQL"],
    initials: "SR",
  },
  {
    name: "Vikram Desai",
    role: "Mobile Engineering Lead",
    department: "Engineering",
    bio: "React Native and Flutter expert. Shipped 15+ apps with 4.5+ average store ratings.",
    experience: "7+ years",
    skills: ["React Native", "Flutter", "iOS/Android"],
    initials: "VD",
  },
  {
    name: "Ananya Iyer",
    role: "Backend Architect",
    department: "Engineering",
    bio: "Python, microservices, and API design. Built high-throughput logistics and fintech systems.",
    experience: "9+ years",
    skills: ["Python", "API Design", "Microservices"],
    initials: "AI",
  },
  {
    name: "Karan Singh",
    role: "Lead UI/UX Designer",
    department: "Design",
    bio: "Design systems, accessibility, and conversion-focused interfaces for B2B and B2C products.",
    experience: "8+ years",
    skills: ["Figma", "Design Systems", "UX Research"],
    initials: "KS",
  },
  {
    name: "Meera Nair",
    role: "Product Designer",
    department: "Design",
    bio: "Mobile-first design for healthcare, education, and SaaS products with WCAG compliance.",
    experience: "6+ years",
    skills: ["Mobile UX", "Prototyping", "Accessibility"],
    initials: "MN",
  },
  {
    name: "Arun Kulkarni",
    role: "Senior Project Manager",
    department: "Project Management",
    bio: "PMP-certified. Managed 25+ enterprise deliveries with 94% on-time milestone completion.",
    experience: "10+ years",
    skills: ["PMP", "Agile", "Stakeholder Mgmt"],
    initials: "AK",
  },
  {
    name: "Divya Menon",
    role: "Delivery Manager",
    department: "Project Management",
    bio: "Client-facing delivery lead ensuring transparent communication and scope alignment.",
    experience: "7+ years",
    skills: ["Scrum", "Client Relations", "Risk Mgmt"],
    initials: "DM",
  },
  {
    name: "Rahul Verma",
    role: "AI/ML Engineer",
    department: "AI Specialists",
    bio: "Computer vision and LLM integration specialist. Built industrial safety AI and chatbot systems.",
    experience: "6+ years",
    skills: ["Python", "YOLO", "LLM APIs"],
    initials: "RV",
  },
  {
    name: "Sarah Chen",
    role: "AI Solutions Architect",
    department: "AI Specialists",
    bio: "Designs production AI pipelines with edge deployment and responsible AI practices.",
    experience: "8+ years",
    skills: ["MLOps", "Edge AI", "Data Pipelines"],
    initials: "SC",
  },
  {
    name: "Mohit Agarwal",
    role: "Cloud Architect",
    department: "Cloud Specialists",
    bio: "AWS and Azure certified. Designs scalable, cost-optimized cloud infrastructure.",
    experience: "9+ years",
    skills: ["AWS", "Azure", "Terraform"],
    initials: "MA",
  },
  {
    name: "Lisa Fernandes",
    role: "DevOps Engineer",
    department: "Cloud Specialists",
    bio: "CI/CD pipelines, monitoring, and 99.9% uptime infrastructure for production systems.",
    experience: "6+ years",
    skills: ["Docker", "Kubernetes", "Monitoring"],
    initials: "LF",
  },
];

export const teamDepartments: TeamDepartment[] = [
  "Leadership",
  "Engineering",
  "Design",
  "Project Management",
  "AI Specialists",
  "Cloud Specialists",
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
  { level: "Leadership", teams: ["CEO", "CTO", "VP Engineering"] },
  { level: "Delivery", teams: ["Project Management", "Client Success"] },
  { level: "Engineering", teams: ["Full-Stack", "Mobile", "Backend", "QA"] },
  { level: "Specialists", teams: ["AI/ML", "Cloud/DevOps", "Design"] },
] as const;
