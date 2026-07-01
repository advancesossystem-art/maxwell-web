/** Maxwell 2026 — homepage narrative (single source of truth) */

export const homeHero = {
  eyebrow: "Maxwell Electrodeal · Business Technology Partner",
  headlineLine1: "Websites and software that grow your business.",
  headlineLine2: "Built in Vadodara. Delivered across India.",
  subhead:
    "Custom websites for manufacturers and businesses — plus ERP, CRM, and AI systems that cut manual work and deliver measurable ROI. From ₹75,000.",
  /** Social proof in first viewport — pairs with primary CTA */
  proofOutcome:
    "263-page manufacturer website live in 6 weeks · 10,000+ users on a healthcare portal · 99.9% uptime",
  proofLink: { label: "See case studies", href: "/case-studies" },
} as const;

export const heroServiceBadges = [
  { label: "Websites", href: "/services/website-development" },
  { label: "ERP", href: "/services/erp-development" },
  { label: "CRM", href: "/services/crm-development" },
  { label: "AI", href: "/services/ai-solutions" },
  { label: "Mobile Apps", href: "/services/mobile-app-development" },
  { label: "Custom Software", href: "/services/custom-software-development" },
] as const;

export const heroTrustMetrics = [
  { value: "50+", label: "Projects delivered" },
  { value: "₹75K", label: "Starting price for websites" },
  { value: "15+", label: "Industries served" },
  { value: "95%", label: "Client satisfaction" },
  { value: "<4hr", label: "Response time" },
] as const;

export const businessProblems = [
  {
    title: "No website or outdated one",
    description:
      "Your buyers Google you — and either find nothing, or find a 10-year-old page that looks worse than your competitor's.",
  },
  {
    title: "100% dependent on IndiaMART or TradeIndia",
    description:
      "You pay ₹1.5–3L/year for leads you don't own, next to 20 competitors, on someone else's platform.",
  },
  {
    title: "Manual operations",
    description: "Critical work still depends on phone calls, paper forms, and people re-keying the same data.",
  },
  {
    title: "Spreadsheet chaos",
    description: "Version conflicts, broken formulas, and no single source of truth across teams.",
  },
  {
    title: "Inventory errors",
    description: "Stock mismatches cause write-offs, delayed orders, and lost customer trust.",
  },
  {
    title: "Poor sales tracking",
    description: "Leads fall through cracks when follow-ups live in personal inboxes and WhatsApp threads.",
  },
  {
    title: "Disconnected systems",
    description: "Sales, operations, and finance run on tools that never share the same truth.",
  },
  {
    title: "Lack of visibility",
    description: "Leaders decide without live insight into inventory, pipeline, or delivery status.",
  },
  {
    title: "Slow decision making",
    description: "Reports take days to compile—by then the window to act has already closed.",
  },
] as const;

export const problemSolutionMap = [
  {
    problem: "No website or IndiaMART-only presence",
    solution: "Manufacturer Website",
    description:
      "Build a product catalog website that generates direct Google inquiries — without paying platform fees forever.",
    href: "/services/website-development-for-manufacturers",
  },
  {
    problem: "Inventory errors & stock chaos",
    solution: "ERP Solution",
    description: "Real-time inventory, production planning, and Tally/GST integration.",
    href: "/services/erp-development",
  },
  {
    problem: "Poor customer & sales tracking",
    solution: "CRM Solution",
    description: "Pipeline clarity, automated follow-ups, and field team visibility.",
    href: "/services/crm-development",
  },
  {
    problem: "Manual processes & spreadsheet work",
    solution: "Automation Solution",
    description: "Workflow automation that removes repetitive steps your team dreads.",
    href: "/services/custom-software-development",
  },
  {
    problem: "Lack of insights & forecasting gaps",
    solution: "AI Solution",
    description: "Practical AI for demand forecasting, document extraction, and exception alerts.",
    href: "/services/ai-solutions",
  },
] as const;

export const transformationStory = {
  beforeLabel: "Before",
  afterLabel: "After Maxwell",
  before: [
    "No website — buyers can't find you on Google",
    "Paying IndiaMART ₹2L/year for leads you don't own",
    "Scattered spreadsheets and manual handoffs",
    "Software that fights your process instead of helping it",
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

/** Business solutions — full-service IT positioning */
export const homepageServices = [
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    solution: "AI readiness, strategy, and implementation roadmaps with measurable ROI.",
    impact: "Prioritize use cases before you spend on the wrong tools.",
    icon: "ai" as const,
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    solution: "AWS, Azure, and hybrid cloud advisory, migration, and management.",
    impact: "Scale infrastructure without enterprise-vendor overhead.",
    icon: "cloud" as const,
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    solution: "Security audits, endpoint protection, and compliance-ready controls.",
    impact: "Protect operations without slowing down delivery teams.",
    icon: "code" as const,
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    solution: "Process, people, technology, and data aligned for modern operations.",
    impact: "End-to-end change—not slide decks that never ship.",
    icon: "design" as const,
  },
  {
    slug: "managed-it-services",
    title: "Managed IT",
    solution: "24/7 monitoring, help desk, and proactive infrastructure management.",
    impact: "Predictable monthly IT instead of firefighting every week.",
    icon: "cloud" as const,
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    solution: "Power BI, custom dashboards, and BI that leadership actually uses.",
    impact: "Decisions in minutes—not two-week Excel reconstructions.",
    icon: "code" as const,
  },
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
    solution: "Next.js sites built for leads, SEO, and Core Web Vitals.",
    impact: "Fast, SEO-ready Next.js sites built for conversion.",
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
    slug: "ai-solutions",
    title: "AI & automation",
    solution: "Practical intelligence inside the systems you already run.",
    impact: "Automation where it saves time—not where it creates risk.",
    icon: "ai" as const,
  },
] as const;

export const homepageIndustries = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    outcome: "Production, inventory, and shop-floor visibility across every facility.",
    href: "/industries/manufacturing",
    icon: "factory",
  },
  {
    slug: "chemical",
    title: "Chemical",
    outcome: "Batch traceability, MSDS compliance, and reactor scheduling in one system.",
    href: "/blog/erp-for-chemical-india",
    icon: "factory",
  },
  {
    slug: "textile",
    title: "Textile",
    outcome: "Fabric inventory, job-work tracking, and seasonal order management.",
    href: "/blog/erp-for-textile-india",
    icon: "factory",
  },
  {
    slug: "pharma",
    title: "Pharma",
    outcome: "GMP batch records, expiry tracking, and audit-ready documentation.",
    href: "/blog/erp-for-pharma-india",
    icon: "health",
  },
  {
    slug: "fmcg",
    title: "Distribution",
    outcome: "Route sales, distributor claims, and multi-location inventory control.",
    href: "/blog/erp-for-fmcg-india",
    icon: "retail",
  },
  {
    slug: "retail",
    title: "Retail",
    outcome: "POS reconciliation, stock-outs prevention, and omnichannel orders.",
    href: "/industries/retail",
    icon: "retail",
  },
  {
    slug: "logistics",
    title: "Logistics",
    outcome: "Fleet, dispatch, POD reconciliation, and warehouse slotting.",
    href: "/industries/logistics",
    icon: "logistics",
  },
  {
    slug: "automotive",
    title: "Engineering",
    outcome: "OEM delivery schedules, tool tracking, and supplier quality audits.",
    href: "/blog/erp-for-automotive-india",
    icon: "factory",
  },
] as const;

export const whyMaxwellPillars = [
  {
    title: "Industry-first approach",
    description: "We start with shop-floor visits, field ride-alongs, and process mapping—not wireframes.",
    benefit: "Software that matches how your team actually works, so adoption sticks.",
  },
  {
    title: "Business understanding before development",
    description: "Discovery quantifies pain in hours saved, error rates, and cash leakage before a line of code.",
    benefit: "Fixed-scope quotes tied to measurable ROI—not hourly billing surprises.",
  },
  {
    title: "ERP, CRM & AI expertise",
    description: "Dedicated practice areas for operations, sales, and practical AI—not generalist freelancers.",
    benefit: "Faster go-live with Tally/GST integration, pipeline automation, and production-ready AI.",
  },
  {
    title: "Scalable architecture",
    description: "API-first systems on React, Node.js, PostgreSQL, and AWS—built for multi-plant growth.",
    benefit: "Add users, locations, and modules without rebuilding from scratch.",
  },
  {
    title: "Dedicated support",
    description: "Named post-go-live SLA, hypercare, and monitoring—not a ticket black hole.",
    benefit: "Issues resolved in hours, not weeks—critical when operations depend on your system.",
  },
  {
    title: "Long-term technology partnership",
    description: "98% client retention. We maintain, scale, and roadmap what we build—you own 100% of the code.",
    benefit: "One partner from MVP through enterprise scale instead of vendor churn.",
  },
] as const;

export const trustProofItems = [
  {
    label: "Manufacturing, Chemical, Textile & Pharma expertise",
    href: "/industries/manufacturing",
  },
  { label: "Custom ERP, CRM & AI solutions", href: "/services/erp-development" },
  { label: "End-to-end development partner", href: "/process" },
  { label: "Free project assessment", href: "/get-estimate" },
] as const;

export const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Map goals, users, constraints, and success metrics with stakeholders who own the outcome.",
  },
  {
    step: "02",
    title: "Requirements & Planning",
    description: "Phased roadmap, fixed milestones, integration specs, and a timeline you can defend to leadership.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description: "Flows and interfaces aligned to shop floor, field teams, and HO—tested before build starts.",
  },
  {
    step: "04",
    title: "Development",
    description: "Weekly demos, production-ready code, and transparent progress—not slide decks.",
  },
  {
    step: "05",
    title: "Testing & Deployment",
    description: "UAT on real data, training, go-live support, and clean handover documentation.",
  },
  {
    step: "06",
    title: "Support & Growth",
    description: "Hypercare, maintenance SLAs, and the next phase of modules as your business scales.",
  },
] as const;

export const businessOutcomesDelivered = [
  {
    title: "Improve operational efficiency",
    description: "Remove duplicate entry and manual handoffs so teams focus on customers—not spreadsheets.",
    metric: "Typical: 35–60% less manual work",
  },
  {
    title: "Reduce manual processes",
    description: "Automate approvals, dispatch, and reporting workflows that currently depend on WhatsApp and calls.",
    metric: "Typical: 10–20 hrs/week saved per team",
  },
  {
    title: "Increase data visibility",
    description: "Live dashboards for inventory, pipeline, and delivery—decisions in minutes, not days.",
    metric: "Typical: same-day reporting vs 2-week close",
  },
  {
    title: "Improve inventory accuracy",
    description: "Barcode scanning, GRN sync, and multi-location stock truth for manufacturers and distributors.",
    metric: "Typical: 95%+ inventory accuracy",
  },
  {
    title: "Better sales tracking",
    description: "Pipeline stages, follow-up automation, and field visit proof tied to revenue outcomes.",
    metric: "Typical: 25%+ faster lead response",
  },
  {
    title: "Faster reporting",
    description: "Month-end and management reports generated from approved transactions—not reconstructed in Excel.",
    metric: "Typical: 50%+ faster month-end close",
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
  title: "Turn your idea into ERP, CRM, AI, or custom software—with a partner you can trust.",
  description:
    "Free consultation, free project estimate, and free assessment tools. Low risk, high value—we respond within one business day with a clear next step.",
} as const;

/** Featured case studies on homepage — slugs from case-studies-data */
export const homepageCaseStudySlugs = [
  "manufacturing-erp",
  "healthcare-management",
  "logistics-platform",
] as const;

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
  {
    question: "Do you develop custom ERP systems in India?",
    answer:
      "Yes. Maxwell Electrodeal builds custom ERP for Indian manufacturers and enterprises with GST/Tally integration, inventory, production, finance, and multi-location support. See /services/erp-development and /solutions/erp-development-company-gujarat.",
    category: "ERP",
  },
  {
    question: "Do you serve clients outside India?",
    answer:
      "Yes. We deliver for clients in the United States, United Kingdom, UAE, Canada, Australia, and other markets with English-first communication, milestone billing, and 100% IP ownership.",
    category: "Global",
  },
  {
    question: "How long does it take to build a custom web application?",
    answer:
      "Marketing sites and focused web apps often launch in 6–10 weeks. Larger platforms with integrations typically run 3–6 months with phased releases so you see value early.",
    category: "Timeline",
  },
] as const;
