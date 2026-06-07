/** Maxwell 2026 — homepage narrative (single source of truth) */

export const homeHero = {
  eyebrow: "Maxwell Electrodeal · India & Global Delivery",
  headline: "Custom ERP, CRM & Software Solutions Built for Growth",
  subhead:
    "We help manufacturers, distributors, and growing enterprises replace spreadsheets with ERP, CRM, and AI systems that deliver measurable ROI—milestone billing, full code ownership, from ₹1L to ₹50L+.",
} as const;

export const heroTrustMetrics = [
  { value: "50+", label: "Projects delivered" },
  { value: "20+", label: "Industries served" },
  { value: "95%", label: "Client satisfaction" },
  { value: "24/7", label: "Support available" },
] as const;

export const businessProblems = [
  {
    title: "Disconnected systems",
    description: "Sales, operations, and finance run on tools that never share the same truth.",
  },
  {
    title: "Manual operations",
    description: "Your best people spend hours on spreadsheets, calls, and duplicate entry.",
  },
  {
    title: "Slow workflows",
    description: "Approvals, reporting, and customer updates take days when they should take minutes.",
  },
  {
    title: "No real visibility",
    description: "Leaders decide without live insight into inventory, pipeline, or delivery.",
  },
  {
    title: "Growth bottlenecks",
    description: "Every new customer or location exposes gaps in process and accountability.",
  },
] as const;

export const transformationStory = {
  beforeLabel: "Before",
  afterLabel: "After Maxwell",
  before: [
    "Scattered spreadsheets",
    "Manual handoffs between teams",
    "Decisions made without live data",
    "Software that fights your process",
  ],
  after: [
    "One connected operational flow",
    "Automated steps your team trusts",
    "Visibility when leadership needs it",
    "Systems built around how you work",
  ],
} as const;

export const businessOutcomes = [
  {
    title: "Efficiency",
    description: "Remove repetitive work so your team focuses on customers and growth.",
  },
  {
    title: "Automation",
    description: "Reliable workflows that run whether someone is at a desk or in the field.",
  },
  {
    title: "Visibility",
    description: "Reporting tied to the decisions you make every week—not vanity metrics.",
  },
  {
    title: "Scale",
    description: "Phased delivery with weekly demos, so value shows up before the full build is done.",
  },
] as const;

/** Business solutions — not technical service labels */
export const homepageServices = [
  {
    slug: "custom-software-development",
    title: "Custom platforms",
    solution: "Software shaped around how your team actually operates.",
    impact: "Less manual work and clearer accountability across teams.",
    icon: "code" as const,
  },
  {
    slug: "erp-development",
    title: "Operations & ERP",
    solution: "Production, inventory, and finance in one accountable system.",
    impact: "Visibility across facilities without spreadsheet chaos.",
    icon: "erp" as const,
  },
  {
    slug: "crm-development",
    title: "Sales & CRM",
    solution: "Pipeline clarity, follow-up automation, and customer visibility.",
    impact: "Revenue teams close with confidence, not guesswork.",
    icon: "crm" as const,
  },
  {
    slug: "website-development",
    title: "Web experiences",
    solution: "Sites and portals built for leads, customers, and daily use.",
    impact: "Digital presence that supports sales and service.",
    icon: "globe" as const,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile for teams & customers",
    solution: "Field updates and customer access that work away from the desk.",
    impact: "Operations that do not stop when people leave the office.",
    icon: "mobile" as const,
  },
  {
    slug: "saas-development",
    title: "SaaS products",
    solution: "Subscription-ready products with room to grow users and revenue.",
    impact: "Launch and scale without rebuilding from scratch.",
    icon: "saas" as const,
  },
  {
    slug: "ai-solutions",
    title: "AI & automation",
    solution: "Practical intelligence inside the systems you already run.",
    impact: "Automation where it saves time—not where it creates risk.",
    icon: "ai" as const,
  },
  {
    slug: "cloud-solutions",
    title: "Cloud & reliability",
    solution: "Stable releases, secure infrastructure, predictable running costs.",
    impact: "Systems your team can depend on after go-live.",
    icon: "cloud" as const,
  },
] as const;

export const homepageIndustries = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    outcome: "Production and inventory visibility across every facility.",
    icon: "factory",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    outcome: "Patient access and clinic operations without cutting corners on compliance.",
    icon: "health",
  },
  {
    slug: "education",
    title: "Education",
    outcome: "Learning, administration, and communication on one platform.",
    icon: "education",
  },
  {
    slug: "logistics",
    title: "Logistics",
    outcome: "Fleet, routes, and delivery status your clients can rely on.",
    icon: "logistics",
  },
  {
    slug: "retail",
    title: "Retail",
    outcome: "Inventory and orders that scale across stores and online.",
    icon: "retail",
  },
  {
    slug: "construction",
    title: "Construction",
    outcome: "Site reporting and project control for teams in the field.",
    icon: "construction",
  },
] as const;

export const developmentProcess = [
  { step: "01", title: "Discover", description: "Your goals, users, constraints, and what success looks like." },
  { step: "02", title: "Plan", description: "Phased timeline, investment, and architecture you can defend." },
  { step: "03", title: "Design", description: "Flows and interfaces aligned to how people work today." },
  { step: "04", title: "Build", description: "Weekly demos and production-ready code—not slide decks." },
  { step: "05", title: "Deploy", description: "Launch, training, and a clean handoff you control." },
  { step: "06", title: "Support", description: "Maintenance, monitoring, and the next phase of growth." },
] as const;

export const whyMaxwellPillars = [
  {
    title: "You talk to the people building",
    description: "Direct access to project leads and engineers—no layers of account managers.",
  },
  {
    title: "Scope you can see and approve",
    description: "Written milestones, weekly demos, and billing tied to delivered value.",
  },
  {
    title: "You own what we build",
    description: "Full source, designs, and IP transfer when the engagement completes.",
  },
  {
    title: "Partnership after launch",
    description: "We stay for maintenance, scaling, and the roadmap that follows go-live.",
  },
] as const;

export const partnerComparison = [
  {
    type: "Freelancers",
    risk: "One person, inconsistent availability, limited depth when complexity grows.",
    maxwell: "A accountable team, documented delivery, and continuity on your roadmap.",
  },
  {
    type: "Small agencies",
    risk: "Template-heavy builds, weak post-launch support, unclear ownership.",
    maxwell: "Custom systems you own, transparent billing, and long-term support.",
  },
  {
    type: "Traditional vendors",
    risk: "Slow cycles, heavy cost, and distance from the people doing the work.",
    maxwell: "Senior engineers on every project, India-based value, direct communication.",
  },
] as const;

export const trustHighlights = [
  { label: "Milestone billing", desc: "Pay as value is delivered" },
  { label: "Weekly demos", desc: "See progress every week" },
  { label: "Full IP transfer", desc: "You own the codebase" },
  { label: "Global delivery", desc: "India · ME · EU · US · AU" },
] as const;

export const homeFinalCta = {
  title: "Your next stage of growth starts with one conversation.",
  description:
    "Book a consultation. We respond within one business day with a clear next step—not a generic pitch.",
} as const;

export const homepageTestimonials = [
  {
    quote:
      "They mapped our production workflow first, then built an ERP we use daily across three plants. Manual entry dropped sharply within the first quarter.",
    author: "",
    role: "COO",
    company: "",
    industry: "Manufacturing",
  },
  {
    quote:
      "Clear scope, weekly demos, and no disappearing after launch. That is what we needed from a software partner—not another vendor pitch.",
    author: "",
    role: "Founder",
    company: "",
    industry: "SaaS",
  },
  {
    quote:
      "Our patient portal handles thousands of users with reliable uptime. The team understood healthcare operations, not just code.",
    author: "",
    role: "Medical Director",
    company: "",
    industry: "Healthcare",
  },
] as const;

export const technologies = [
  { name: "Next.js", color: "#000000" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "AWS", color: "#FF9900" },
] as const;

export const trustIndustries = [
  "Manufacturing",
  "Healthcare",
  "Logistics",
  "Retail",
  "Education",
  "Construction",
] as const;

export const heroStats = heroTrustMetrics;
export const deliveryHighlights = trustHighlights;
export const featuredProjects = [
  {
    slug: "manufacturing-erp-platform",
    title: "Manufacturing operations platform",
    industry: "Manufacturing",
    description: "Unified production and inventory across multiple facilities.",
    result: "Less manual entry",
    resultDetail: "Operations team works from one system",
    tech: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-slate-900 to-brand-800",
    accent: "#2563EB",
    mockType: "erp" as const,
  },
  {
    slug: "healthcare-management-system",
    title: "Healthcare patient platform",
    industry: "Healthcare",
    description: "Patient portal and clinic admin across a multi-location network.",
    result: "99.9% uptime",
    resultDetail: "10,000+ patients on one secure platform",
    tech: ["React Native", "Node.js", "MongoDB"],
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    accent: "#10B981",
    mockType: "mobile" as const,
  },
] as const;
export const comparisonFeatures = [] as const;

export const homepageFaqs = [
  {
    question: "What is Maxwell Electrodeal?",
    answer:
      "Maxwell Electrodeal is a Vadodara, Gujarat-based software development company building custom software, ERP, CRM, websites, mobile apps, AI solutions, SaaS, and cloud systems for India, USA, UAE, and global clients. They offer milestone billing, 100% IP ownership, and on-site discovery for Gujarat businesses.",
    category: "Company",
  },
  {
    question: "What does a typical project cost?",
    answer:
      "Engagements often range from ₹1L for focused work to ₹50L+ for enterprise platforms. We provide itemized estimates after discovery—milestone billing, no surprise invoices.",
    category: "Cost",
  },
  {
    question: "How long does delivery take?",
    answer:
      "MVPs often ship in 6–10 weeks. Larger ERP and multi-system programs run 3–9 months with phased go-lives so you see value early.",
    category: "Timeline",
  },
  {
    question: "Who owns the code?",
    answer: "You do—100%. Source, designs, and IP transfer on completion. NDAs are standard.",
    category: "Ownership",
  },
  {
    question: "Do you serve Vadodara and Gujarat businesses?",
    answer:
      "Yes—we are headquartered in Vadodara and offer on-site discovery across Gujarat (Vadodara, Ahmedabad, Surat, Rajkot) plus nationwide and international delivery.",
    category: "Location",
  },
  {
    question: "What services does Maxwell Electrodeal offer?",
    answer:
      "Custom software, ERP, CRM, Next.js websites, Flutter/React Native mobile apps, AI and industrial computer vision (including PPE detection), SaaS platforms, cloud migration, digital transformation, and business automation.",
    category: "Services",
  },
] as const;
