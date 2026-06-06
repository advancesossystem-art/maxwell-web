import type { serviceIcons } from "@/components/ui/Icons";

export type ServiceIconKey = keyof typeof serviceIcons;

export interface ServicePageData {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  icon: ServiceIconKey;
  gradient: string;
  accent: string;
  startingPrice: string;
  problems: { title: string; description: string }[];
  solutions: { title: string; description: string; highlights: string[] }[];
  features: { title: string; description: string }[];
  techStack: string[];
  industries: { name: string; application: string }[];
  projects: {
    title: string;
    industry: string;
    challenge: string;
    result: string;
    tech: string[];
  }[];
  whyMaxwell: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

const sharedWhyMaxwell = [
  {
    title: "100% IP Ownership",
    description: "Every line of code, design asset, and deliverable belongs to you upon completion.",
  },
  {
    title: "Dedicated Engineering Team",
    description: "Senior developers, designers, and a project manager—not rotating freelancers.",
  },
  {
    title: "Transparent Milestone Delivery",
    description: "Weekly demos, visible progress, and billing tied to completed milestones.",
  },
  {
    title: "Post-Launch Partnership",
    description: "98% client retention. We support, maintain, and scale what we build.",
  },
] as const;

const sharedProcess = [
  { step: "01", title: "Discover", description: "Audit requirements, users, and success metrics." },
  { step: "02", title: "Plan", description: "Architecture, roadmap, and milestone timeline." },
  { step: "03", title: "Design", description: "Wireframes, prototypes, and UI systems." },
  { step: "04", title: "Develop", description: "Agile sprints with weekly demos." },
  { step: "05", title: "Deploy", description: "Launch, testing, and documentation." },
  { step: "06", title: "Scale", description: "Optimization, features, and growth support." },
] as const;

export const serviceProcess = sharedProcess;

export const serviceSlugs = [
  "website-development",
  "custom-software-development",
  "mobile-app-development",
  "erp-development",
  "crm-development",
  "ai-solutions",
  "saas-development",
  "cloud-solutions",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const servicesData: Record<ServiceSlug, ServicePageData> = {
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    headline: "Websites That Convert Visitors Into Clients",
    subheadline:
      "Corporate websites, business platforms, and landing pages engineered for performance, SEO, and measurable lead generation—not template WordPress sites.",
    metaTitle: "Website Development Company India | Web Application Development",
    metaDescription:
      "Custom web development for US, UAE & India — Next.js websites for startups & SMBs. SEO, Core Web Vitals, offshore value. Maxwell Electrodeal.",
    keywords: [
      "website development company India",
      "web development company India",
      "web application development company",
      "corporate website development",
      "business website development company",
      "professional website development services",
    ],
    icon: "globe",
    gradient: "from-sky-950 via-blue-900 to-slate-950",
    accent: "#2563EB",
    startingPrice: "₹75,000",
    problems: [
      {
        title: "Your website doesn't generate leads",
        description:
          "Traffic arrives but bounces. No clear conversion path, weak CTAs, and designs that fail to build trust with enterprise buyers.",
      },
      {
        title: "Slow, outdated technology",
        description:
          "WordPress plugins, bloated themes, and poor Core Web Vitals hurt SEO rankings and frustrate mobile users.",
      },
      {
        title: "Brand doesn't match your ambition",
        description:
          "Your website looks like a local shop when you're competing for ₹10L+ contracts. First impressions cost you deals.",
      },
      {
        title: "No SEO foundation",
        description:
          "Invisible on Google for keywords that matter. Competitors with modern sites capture the clients you should be winning.",
      },
    ],
    solutions: [
      {
        title: "Corporate Websites",
        description: "Executive-grade web presence for established businesses and growing enterprises.",
        highlights: ["Brand-aligned design systems", "Multi-language support", "Investor & stakeholder portals"],
      },
      {
        title: "Business Websites",
        description: "Conversion-optimized sites that turn visitors into qualified sales conversations.",
        highlights: ["Lead capture funnels", "CRM integration", "Analytics dashboards"],
      },
      {
        title: "Landing Pages",
        description: "High-converting campaign pages built for paid ads, product launches, and events.",
        highlights: ["A/B test ready", "Sub-second load times", "Mobile-first design"],
      },
      {
        title: "E-commerce Websites",
        description: "Scalable online stores with inventory sync, payment gateways, and order management.",
        highlights: ["Razorpay & Stripe", "Inventory management", "Admin dashboards"],
      },
      {
        title: "SEO Friendly Websites",
        description: "Technical SEO baked in—structured data, sitemaps, semantic HTML, and 95+ Lighthouse scores.",
        highlights: ["Core Web Vitals optimized", "Schema markup", "Content architecture"],
      },
    ],
    features: [
      { title: "Next.js & React Architecture", description: "Server-rendered, blazing-fast pages with optimal SEO and performance." },
      { title: "Mobile-First Responsive Design", description: "Pixel-perfect experiences across every device and screen size." },
      { title: "CMS Integration", description: "Headless CMS options so your team can update content without developers." },
      { title: "Analytics & Conversion Tracking", description: "GA4, heatmaps, and event tracking to measure what drives revenue." },
      { title: "Security & SSL", description: "HTTPS, security headers, and OWASP best practices from day one." },
      { title: "Ongoing Maintenance", description: "Retainer plans for updates, security patches, and performance monitoring." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel", "AWS", "PostgreSQL"],
    industries: [
      { name: "Manufacturing", application: "Product catalogs, dealer portals, and B2B lead generation sites." },
      { name: "Healthcare", application: "Patient-facing websites with appointment booking and trust-building design." },
      { name: "Professional Services", application: "Authority-building corporate sites for law, finance, and consulting firms." },
      { name: "Education", application: "Institution websites with course catalogs and enrollment funnels." },
    ],
    projects: [
      {
        title: "Manufacturing Corporate Website",
        industry: "Manufacturing",
        challenge: "Outdated WordPress site with 4s load time and zero lead tracking.",
        result: "340% increase in qualified leads within 90 days",
        tech: ["Next.js", "Sanity CMS", "Vercel"],
      },
      {
        title: "Healthcare Digital Presence",
        industry: "Healthcare",
        challenge: "15 clinic locations with inconsistent branding and no online booking.",
        result: "60% reduction in phone inquiries via online booking",
        tech: ["Next.js", "React", "AWS"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "How much does a professional website cost?",
        answer: "Corporate websites typically range from ₹75,000 to ₹5,00,000 depending on scope, pages, integrations, and design complexity. We provide detailed proposals after discovery.",
      },
      {
        question: "How long does website development take?",
        answer: "Business websites: 4–8 weeks. Corporate sites with custom features: 8–12 weeks. Landing pages: 2–4 weeks.",
      },
      {
        question: "Will my website rank on Google?",
        answer: "We build with technical SEO foundations—fast load times, semantic HTML, schema markup, and mobile optimization. Content strategy recommendations included.",
      },
      {
        question: "Can I update content myself?",
        answer: "Yes. We integrate headless CMS solutions (Sanity, Strapi) so your team manages content without touching code.",
      },
    ],
  },

  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    headline: "Software Built For How Your Business Actually Works",
    subheadline:
      "Custom business software, enterprise applications, and workflow automation—engineered around your processes, not forced into generic SaaS templates.",
    metaTitle: "Custom Software Development Company India | Enterprise Software",
    metaDescription:
      "Custom software development for US, UAE & India — offshore dedicated teams, enterprise apps, workflow automation, 100% IP ownership. Maxwell Electrodeal.",
    keywords: [
      "custom software development company India",
      "custom software development services",
      "enterprise software development company",
      "hire custom software developers India",
      "business software development company",
    ],
    icon: "code",
    gradient: "from-violet-950 via-purple-900 to-slate-950",
    accent: "#7C3AED",
    startingPrice: "₹2,00,000",
    problems: [
      {
        title: "Off-the-shelf software doesn't fit",
        description: "You adapt your workflows to software limitations instead of software adapting to your business.",
      },
      {
        title: "Spreadsheet chaos at scale",
        description: "Critical operations run on Excel, WhatsApp, and manual processes that break as you grow.",
      },
      {
        title: "Disconnected systems",
        description: "Data silos across departments cause errors, delays, and decisions based on outdated information.",
      },
      {
        title: "Legacy systems holding you back",
        description: "Old software can't integrate with modern tools, blocking digital transformation initiatives.",
      },
    ],
    solutions: [
      {
        title: "Workflow Automation",
        description: "Eliminate manual tasks with intelligent automation pipelines and approval workflows.",
        highlights: ["Process mapping", "Automated notifications", "Audit trails"],
      },
      {
        title: "Internal Business Systems",
        description: "Custom dashboards, admin panels, and internal tools your team uses daily.",
        highlights: ["Role-based access", "Real-time reporting", "API integrations"],
      },
      {
        title: "Enterprise Applications",
        description: "Scalable platforms handling complex business logic, multi-location ops, and high user loads.",
        highlights: ["Microservices architecture", "Multi-tenant support", "Enterprise security"],
      },
      {
        title: "Industry Specific Software",
        description: "Vertical solutions for manufacturing, healthcare, logistics, and education.",
        highlights: ["Domain expertise", "Compliance-aware", "Custom reporting"],
      },
    ],
    features: [
      { title: "Clean Architecture", description: "Maintainable, documented codebases built for long-term evolution." },
      { title: "API-First Design", description: "Integrate with existing tools, third-party services, and future platforms." },
      { title: "Legacy Modernization", description: "Migrate from outdated systems without disrupting operations." },
      { title: "Database Design", description: "Optimized PostgreSQL, MongoDB schemas for performance at scale." },
      { title: "Security by Default", description: "Authentication, encryption, and access control built in." },
      { title: "Full Documentation", description: "Technical docs, API references, and handoff materials included." },
    ],
    techStack: ["Node.js", "Python", "React", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"],
    industries: [
      { name: "Manufacturing", application: "Production planning, quality control, and supplier management systems." },
      { name: "Logistics", application: "Dispatch management, route planning, and client portal platforms." },
      { name: "Healthcare", application: "Clinical workflows, patient management, and compliance systems." },
      { name: "Finance", application: "Internal audit tools, reporting dashboards, and process automation." },
    ],
    projects: [
      {
        title: "OpsFlow Automation Platform",
        industry: "Manufacturing",
        challenge: "Manual order processing across 3 departments causing 48-hour delays.",
        result: "Processing time reduced from 48 hours to 4 hours",
        tech: ["Python", "React", "PostgreSQL"],
      },
      {
        title: "FinTrack Internal System",
        industry: "Finance",
        challenge: "Fragmented financial reporting across 12 branch locations.",
        result: "Real-time consolidated reporting across all branches",
        tech: ["Node.js", "React", "MongoDB"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "Custom software vs off-the-shelf—which is right for us?",
        answer: "If your processes are unique, you need integrations off-the-shelf can't provide, or you're scaling beyond spreadsheet limits—custom software delivers ROI that generic tools can't match.",
      },
      {
        question: "What's the typical investment for custom software?",
        answer: "Projects range from ₹2,00,000 for focused internal tools to ₹25,00,000+ for enterprise platforms. Phased delivery lets you start with core features and expand.",
      },
      {
        question: "How do you ensure the software scales?",
        answer: "We architect with scalability in mind—proper database design, caching, modular services, and cloud-native deployment from the start.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Yes. API integrations with ERPs, CRMs, payment gateways, accounting software, and legacy databases are core to our delivery.",
      },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    headline: "Mobile Apps Users Love. Businesses Trust.",
    subheadline:
      "Native-quality Android and iOS applications, Flutter cross-platform apps, and enterprise mobile solutions built for performance, security, and scale.",
    metaTitle: "Mobile App Development Company India | iOS & Android Apps",
    metaDescription:
      "Mobile app development for US, UAE & India — iOS, Android, Flutter, React Native, startup MVPs. Offshore app developers. Maxwell Electrodeal.",
    keywords: [
      "mobile app development company India",
      "app development company India",
      "hire mobile app developers India",
      "Android app development company",
      "iOS app development company",
    ],
    icon: "mobile",
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    accent: "#10B981",
    startingPrice: "₹3,00,000",
    problems: [
      {
        title: "Poor user experience kills adoption",
        description: "Clunky interfaces, slow performance, and confusing navigation lead to app abandonment within days.",
      },
      {
        title: "Building for one platform limits reach",
        description: "Separate Android and iOS teams double cost and timeline while creating inconsistent experiences.",
      },
      {
        title: "Enterprise security concerns",
        description: "Consumer-grade apps lack the encryption, authentication, and compliance enterprise clients demand.",
      },
      {
        title: "No offline capability",
        description: "Field teams and remote users need apps that work without constant connectivity.",
      },
    ],
    solutions: [
      {
        title: "Android Apps",
        description: "Native Android applications optimized for the full range of devices and OS versions.",
        highlights: ["Material Design 3", "Google Play launch", "Firebase integration"],
      },
      {
        title: "iOS Apps",
        description: "Premium iPhone and iPad experiences following Apple Human Interface Guidelines.",
        highlights: ["Swift & SwiftUI", "App Store optimization", "TestFlight beta"],
      },
      {
        title: "Flutter Development",
        description: "Single codebase, dual platform—80% code sharing with native performance.",
        highlights: ["Cross-platform", "Fast iteration", "Consistent UX"],
      },
      {
        title: "Enterprise Mobile Apps",
        description: "Secure apps for field teams, sales forces, and internal operations at scale.",
        highlights: ["MDM compatible", "Offline sync", "Role-based access"],
      },
    ],
    features: [
      { title: "Intuitive UI/UX Design", description: "Research-driven interfaces that maximize engagement and task completion." },
      { title: "Offline-First Architecture", description: "Local data storage with intelligent background sync." },
      { title: "Push Notifications", description: "Targeted, personalized notifications that drive re-engagement." },
      { title: "Payment Integration", description: "Razorpay, Stripe, and in-app purchase implementations." },
      { title: "Analytics & Crash Reporting", description: "Real-time insights into user behavior and app stability." },
      { title: "App Store Launch Support", description: "End-to-end submission, review management, and ASO." },
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "AWS", "GraphQL"],
    industries: [
      { name: "Healthcare", application: "Patient apps, telehealth, and clinical staff mobile tools." },
      { name: "Logistics", application: "Driver apps, delivery tracking, and warehouse scanning solutions." },
      { name: "Retail", application: "Customer loyalty apps, inventory scanners, and POS integrations." },
      { name: "Education", application: "Mobile learning, student portals, and parent communication apps." },
    ],
    projects: [
      {
        title: "MedSync Patient App",
        industry: "Healthcare",
        challenge: "15-clinic network needed unified patient mobile experience.",
        result: "10,000+ active users, 4.8★ App Store rating",
        tech: ["React Native", "Node.js", "AWS"],
      },
      {
        title: "Logistics Driver Application",
        industry: "Logistics",
        challenge: "200+ drivers with no real-time dispatch or route optimization.",
        result: "25% improvement in delivery efficiency",
        tech: ["Flutter", "Python", "Google Maps"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "Flutter or native—which should we choose?",
        answer: "Flutter offers 80% cost savings for dual-platform launch. Native is ideal when you need platform-specific features or maximum performance for complex apps. We recommend during discovery.",
      },
      {
        question: "How much does a mobile app cost?",
        answer: "MVPs start from ₹3,00,000. Full-featured enterprise apps range ₹8,00,000–₹20,00,000+. Timeline and features determine final scope.",
      },
      {
        question: "Do you handle app store submission?",
        answer: "Yes. We manage Google Play and App Store submissions, review responses, and ongoing update releases.",
      },
      {
        question: "Can the app work offline?",
        answer: "Absolutely. We implement offline-first architecture with local storage and background sync for field teams and low-connectivity environments.",
      },
    ],
  },

  "erp-development": {
    slug: "erp-development",
    title: "ERP Development",
    headline: "ERP That Fits Your Operations—Not The Other Way Around",
    subheadline:
      "Custom ERP software for manufacturing, distribution, and growing enterprises. Inventory, production, finance, and HR unified in one platform built around your workflows.",
    metaTitle: "ERP Software Development Company India | Custom ERP Solutions",
    metaDescription:
      "ERP development company in India for manufacturing, retail & logistics. Custom ERP software, GST integration, cloud ERP & mobile access. Free consultation — Maxwell Electrodeal.",
    keywords: [
      "ERP software development company",
      "ERP development company India",
      "custom ERP software development",
      "manufacturing ERP development",
      "GST ERP software India",
    ],
    icon: "erp",
    gradient: "from-amber-950 via-orange-900 to-slate-950",
    accent: "#F59E0B",
    startingPrice: "₹8,00,000",
    problems: [
      {
        title: "Generic ERP failed your team",
        description: "SAP and Tally implementations forced your unique processes into rigid templates. Adoption stalled.",
      },
      {
        title: "Inventory blind spots",
        description: "Stock discrepancies, manual counts, and no real-time visibility across warehouses and production floors.",
      },
      {
        title: "Production planning chaos",
        description: "Scheduling conflicts, material shortages, and no connection between sales orders and factory floor.",
      },
      {
        title: "Financial reporting delays",
        description: "Month-end closes take weeks because data lives in disconnected spreadsheets and systems.",
      },
    ],
    solutions: [
      {
        title: "Inventory Management",
        description: "Real-time stock tracking across locations with automated reorder points and batch tracking.",
        highlights: ["Multi-warehouse", "Barcode/QR scanning", "Stock alerts"],
      },
      {
        title: "Purchase & Procurement",
        description: "Vendor management, purchase orders, approval workflows, and supplier performance tracking.",
        highlights: ["PO automation", "Vendor portal", "Cost analysis"],
      },
      {
        title: "Sales & Order Management",
        description: "Quote-to-cash pipeline with order tracking, invoicing, and customer history.",
        highlights: ["Sales pipeline", "Auto invoicing", "Credit management"],
      },
      {
        title: "Production Planning",
        description: "Work orders, BOM management, capacity planning, and shop floor tracking.",
        highlights: ["MRP scheduling", "Quality control", "OEE tracking"],
      },
      {
        title: "Finance & Accounting",
        description: "GST-compliant accounting, P&L, balance sheets, and integrated financial reporting.",
        highlights: ["GST filing ready", "Multi-currency", "Audit trails"],
      },
      {
        title: "HR & Payroll",
        description: "Employee records, attendance, leave management, and payroll processing.",
        highlights: ["Biometric integration", "Payroll automation", "Compliance"],
      },
    ],
    features: [
      { title: "Multi-Location Support", description: "Manage operations across factories, warehouses, and offices from one system." },
      { title: "Role-Based Dashboards", description: "Custom views for management, production, sales, and finance teams." },
      { title: "Real-Time Analytics", description: "Live KPIs for inventory turnover, production efficiency, and revenue." },
      { title: "Mobile Access", description: "Shop floor and field teams access ERP data on mobile devices." },
      { title: "Integration Ready", description: "Connect with Tally, payment gateways, e-commerce, and shipping APIs." },
      { title: "Data Migration", description: "Seamless migration from Excel, Tally, and legacy systems." },
    ],
    techStack: ["React", "Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS", "RabbitMQ"],
    industries: [
      { name: "Manufacturing", application: "Production ERP with BOM, work orders, and quality control modules." },
      { name: "Distribution", application: "Multi-warehouse inventory, route planning, and dealer management." },
      { name: "Retail", application: "POS integration, stock management, and franchise operations." },
      { name: "Construction", application: "Project costing, material tracking, and subcontractor management." },
    ],
    projects: [
      {
        title: "Manufacturing ERP System",
        industry: "Manufacturing",
        challenge: "Manual inventory across 3 facilities with no production scheduling.",
        result: "40% reduction in manual data entry, ₹12L annual savings",
        tech: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "DistriMax Warehouse System",
        industry: "Distribution",
        challenge: "5 warehouses with disconnected stock management and delayed fulfillment.",
        result: "99.2% inventory accuracy, 30% faster order fulfillment",
        tech: ["React", "Python", "PostgreSQL"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "Custom ERP vs SAP/Tally—which is better?",
        answer: "Generic ERP works for standard processes. Custom ERP wins when your workflows are unique, you need specific integrations, or generic systems failed adoption. We assess during discovery.",
      },
      {
        question: "How long does ERP implementation take?",
        answer: "Core modules: 3–5 months. Full enterprise ERP with all modules: 6–9 months. Phased rollout minimizes disruption.",
      },
      {
        question: "Can you migrate our existing data?",
        answer: "Yes. We migrate from Excel, Tally, legacy databases, and other ERPs with validation and reconciliation.",
      },
      {
        question: "What's the ROI timeline for custom ERP?",
        answer: "Most clients see measurable ROI within 6–12 months through reduced manual work, fewer errors, and better inventory control.",
      },
    ],
  },

  "crm-development": {
    slug: "crm-development",
    title: "CRM Development",
    headline: "CRM Built For How You Sell—Not How Salesforce Sells",
    subheadline:
      "Custom customer relationship management software with sales pipelines, lead automation, support ticketing, and analytics—designed for your sales process.",
    metaTitle: "CRM Development Company India | Custom CRM Software",
    metaDescription:
      "CRM development services in India — sales pipelines, automation, customer portals & integrations. Custom CRM software for B2B teams — Maxwell Electrodeal.",
    keywords: [
      "CRM development company India",
      "CRM software development services",
      "custom CRM development",
      "custom CRM software development company",
    ],
    icon: "crm",
    gradient: "from-rose-950 via-pink-900 to-slate-950",
    accent: "#F43F5E",
    startingPrice: "₹2,50,000",
    problems: [
      {
        title: "Leads fall through the cracks",
        description: "No centralized system means follow-ups are missed, deals stall, and revenue leaks silently.",
      },
      {
        title: "Sales team uses spreadsheets",
        description: "Pipeline visibility is zero. Managers can't forecast, and reps duplicate effort chasing the same leads.",
      },
      {
        title: "Generic CRM is overkill",
        description: "Salesforce and HubSpot are expensive, complex, and packed with features your team never uses.",
      },
      {
        title: "No connection to operations",
        description: "Sales data doesn't flow to fulfillment, support, or finance—creating customer experience gaps.",
      },
    ],
    solutions: [
      {
        title: "Sales Pipeline Management",
        description: "Visual deal stages, probability tracking, and automated stage transitions.",
        highlights: ["Kanban boards", "Deal scoring", "Win/loss analysis"],
      },
      {
        title: "Lead Management",
        description: "Capture, qualify, assign, and nurture leads from every channel automatically.",
        highlights: ["Lead scoring", "Auto-assignment", "Source tracking"],
      },
      {
        title: "Customer Support",
        description: "Ticketing, SLA tracking, knowledge base, and customer communication history.",
        highlights: ["Multi-channel support", "SLA management", "Customer portal"],
      },
      {
        title: "Analytics & Reporting",
        description: "Sales forecasts, team performance, conversion rates, and revenue dashboards.",
        highlights: ["Real-time dashboards", "Custom reports", "Export & API"],
      },
    ],
    features: [
      { title: "Email & WhatsApp Integration", description: "Log communications automatically and trigger follow-up sequences." },
      { title: "Quote & Proposal Generation", description: "Generate branded proposals and quotes directly from deal records." },
      { title: "Task Automation", description: "Automated reminders, follow-ups, and workflow triggers based on deal activity." },
      { title: "Customer Portal", description: "Self-service portal for order status, support tickets, and account management." },
      { title: "Mobile CRM App", description: "Field sales teams manage pipeline and log activities on the go." },
      { title: "ERP Integration", description: "Seamless flow from closed deal to order fulfillment and invoicing." },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "SendGrid", "Twilio", "AWS", "Elasticsearch"],
    industries: [
      { name: "B2B Services", application: "Long sales cycle CRM with proposal tracking and account management." },
      { name: "Real Estate", application: "Property pipeline, client matching, and broker performance tracking." },
      { name: "Manufacturing", application: "Dealer/distributor CRM with order history and territory management." },
      { name: "Healthcare", application: "Patient relationship management with appointment and follow-up automation." },
    ],
    projects: [
      {
        title: "SalesForce Pro CRM",
        industry: "B2B Services",
        challenge: "50-person sales team tracking deals in Excel with no visibility.",
        result: "35% increase in deal closure rate within 6 months",
        tech: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "PropConnect Real Estate CRM",
        industry: "Real Estate",
        challenge: "200+ brokers with no centralized lead distribution system.",
        result: "50% faster lead response time, 28% more conversions",
        tech: ["React", "Node.js", "MongoDB"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "Custom CRM vs Salesforce/HubSpot?",
        answer: "Custom CRM costs less long-term, fits your exact workflow, and avoids per-seat licensing. Ideal for teams of 10–500 with specific process needs.",
      },
      {
        question: "Can you integrate with our existing tools?",
        answer: "Yes. Email, WhatsApp, telephony, accounting software, ERP, and marketing tools integrate via APIs.",
      },
      {
        question: "How quickly can we go live?",
        answer: "Core CRM with pipeline and lead management: 8–12 weeks. Full platform with support and analytics: 12–16 weeks.",
      },
      {
        question: "Is training included?",
        answer: "Yes. We provide admin training, user onboarding, documentation, and optional ongoing support retainers.",
      },
    ],
  },

  "ai-solutions": {
    slug: "ai-solutions",
    title: "AI Solutions",
    headline: "AI That Delivers ROI—Not Just Demos",
    subheadline:
      "Practical artificial intelligence solutions—computer vision, intelligent automation, AI chatbots, and predictive analytics built for real business outcomes.",
    metaTitle: "AI Development Company India | LLM & Automation Solutions",
    metaDescription:
      "AI development company in India for chatbots, computer vision, process automation & LLM integration. Enterprise AI solutions — Maxwell Electrodeal.",
    keywords: [
      "AI development company India",
      "artificial intelligence development company",
      "AI software development services",
      "machine learning development company",
    ],
    icon: "ai",
    gradient: "from-indigo-950 via-violet-900 to-slate-950",
    accent: "#6366F1",
    startingPrice: "₹3,50,000",
    problems: [
      {
        title: "Manual processes eating margins",
        description: "Repetitive tasks that AI could handle consume hours of skilled employee time daily.",
      },
      {
        title: "Data without insights",
        description: "Years of business data sit unused while decisions are made on gut feeling and spreadsheets.",
      },
      {
        title: "Customer support doesn't scale",
        description: "Support teams overwhelmed with repetitive queries while complex issues wait in queue.",
      },
      {
        title: "Quality control is inconsistent",
        description: "Manual inspection misses defects, causing returns, rework, and reputation damage.",
      },
    ],
    solutions: [
      {
        title: "Computer Vision",
        description: "Automated visual inspection, object detection, and OCR for manufacturing and logistics.",
        highlights: ["Defect detection", "Document scanning", "Real-time monitoring"],
      },
      {
        title: "AI Automation",
        description: "Intelligent workflow automation that learns patterns and handles complex decision trees.",
        highlights: ["Process mining", "RPA + AI", "Document processing"],
      },
      {
        title: "AI Chatbots & Assistants",
        description: "LLM-powered chatbots for customer support, internal knowledge, and sales qualification.",
        highlights: ["Custom training", "Multi-language", "CRM integration"],
      },
      {
        title: "Predictive Analytics",
        description: "Forecast demand, predict churn, detect anomalies, and optimize operations with ML models.",
        highlights: ["Demand forecasting", "Churn prediction", "Anomaly detection"],
      },
      {
        title: "Industrial AI",
        description: "Predictive maintenance, production optimization, and IoT data intelligence for factories.",
        highlights: ["Sensor integration", "Predictive maintenance", "OEE optimization"],
      },
    ],
    features: [
      { title: "Custom Model Training", description: "Models trained on your data for domain-specific accuracy." },
      { title: "LLM Integration", description: "GPT, Claude, and open-source LLMs integrated into your workflows." },
      { title: "Edge Deployment", description: "Run AI models on-premises or edge devices for low-latency requirements." },
      { title: "Data Pipeline Engineering", description: "Clean, structured data pipelines feeding accurate AI models." },
      { title: "Responsible AI", description: "Bias testing, explainability, and privacy-compliant AI implementations." },
      { title: "Continuous Improvement", description: "Model monitoring, retraining, and performance optimization over time." },
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "AWS SageMaker", "Docker", "PostgreSQL"],
    industries: [
      { name: "Manufacturing", application: "Visual quality inspection, predictive maintenance, and production optimization." },
      { name: "Healthcare", application: "Diagnostic assistance, patient triage chatbots, and medical document processing." },
      { name: "Retail", application: "Demand forecasting, personalized recommendations, and inventory optimization." },
      { name: "Finance", application: "Fraud detection, document analysis, and automated compliance checking." },
    ],
    projects: [
      {
        title: "QualityEye Vision System",
        industry: "Manufacturing",
        challenge: "Manual defect inspection missing 8% of defects on production line.",
        result: "99.2% defect detection accuracy, 60% faster inspection",
        tech: ["Python", "TensorFlow", "OpenCV"],
      },
      {
        title: "SupportAI Chatbot",
        industry: "SaaS",
        challenge: "Support team handling 500+ repetitive tickets daily.",
        result: "70% of tier-1 queries resolved automatically",
        tech: ["OpenAI API", "LangChain", "Node.js"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "Do we need massive amounts of data for AI?",
        answer: "Not always. LLM-based solutions work immediately. Custom ML models benefit from data but we can start with transfer learning and improve over time.",
      },
      {
        question: "How do you ensure AI accuracy?",
        answer: "Rigorous testing, human-in-the-loop validation, confidence thresholds, and continuous monitoring with retraining pipelines.",
      },
      {
        question: "Is our data safe with AI solutions?",
        answer: "Yes. We implement data encryption, access controls, and can deploy models on-premises. NDAs and data processing agreements are standard.",
      },
      {
        question: "What's the ROI timeline for AI projects?",
        answer: "Chatbot and automation projects show ROI in 2–4 months. Predictive analytics and computer vision typically deliver ROI within 6–12 months.",
      },
    ],
  },

  "saas-development": {
    slug: "saas-development",
    title: "SaaS Development",
    headline: "From MVP To Scale-Ready SaaS Platform",
    subheadline:
      "Software as a service development with multi-tenant architecture, subscription billing, admin dashboards, and cloud infrastructure—built to acquire and retain subscribers.",
    metaTitle: "SaaS Development Company India | Multi-Tenant Product Engineering",
    metaDescription:
      "SaaS development company for startups & enterprises in India. Multi-tenant architecture, subscription billing, scalable cloud SaaS — Maxwell Electrodeal.",
    keywords: [
      "SaaS development company India",
      "SaaS application development",
      "MVP development company India",
      "startup SaaS development",
    ],
    icon: "saas",
    gradient: "from-cyan-950 via-blue-900 to-slate-950",
    accent: "#06B6D4",
    startingPrice: "₹5,00,000",
    problems: [
      {
        title: "MVP takes too long to market",
        description: "Months of development without validation means burning runway before knowing if the market wants your product.",
      },
      {
        title: "Architecture can't scale",
        description: "Early technical shortcuts create bottlenecks when subscriber count grows from 100 to 10,000.",
      },
      {
        title: "Billing complexity paralyzes launch",
        description: "Subscription tiers, trials, upgrades, and invoicing require engineering time better spent on product.",
      },
      {
        title: "No admin visibility",
        description: "Can't monitor usage, manage tenants, or debug issues without digging through databases manually.",
      },
    ],
    solutions: [
      {
        title: "MVP Development",
        description: "Investor-ready minimum viable products in 6–10 weeks with core features that validate market fit.",
        highlights: ["Rapid prototyping", "User feedback loops", "Pitch-ready demos"],
      },
      {
        title: "Multi-Tenant Architecture",
        description: "Secure, isolated tenant data with shared infrastructure for cost-efficient scaling.",
        highlights: ["Data isolation", "Tenant provisioning", "Custom branding"],
      },
      {
        title: "Subscription Billing",
        description: "Stripe-powered billing with plans, trials, upgrades, proration, and invoicing.",
        highlights: ["Multiple pricing tiers", "Free trials", "Usage-based billing"],
      },
      {
        title: "Cloud Infrastructure",
        description: "Auto-scaling, load-balanced, monitored infrastructure on AWS, GCP, or Azure.",
        highlights: ["Auto-scaling", "CI/CD pipelines", "99.9% uptime SLA"],
      },
    ],
    features: [
      { title: "Admin Dashboard", description: "Manage users, tenants, subscriptions, and platform analytics." },
      { title: "User Onboarding Flows", description: "Guided setup, email verification, and activation sequences." },
      { title: "API & Webhooks", description: "Developer-friendly APIs and webhook system for integrations." },
      { title: "Usage Analytics", description: "Track feature adoption, engagement, and churn indicators." },
      { title: "Role-Based Access Control", description: "Granular permissions for team accounts and enterprise clients." },
      { title: "White-Label Options", description: "Custom branding per tenant for B2B2C SaaS models." },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS", "Docker", "Kubernetes"],
    industries: [
      { name: "FinTech", application: "Financial SaaS with compliance, KYC, and transaction processing." },
      { name: "HR Tech", application: "Recruitment, payroll, and employee management platforms." },
      { name: "MarTech", application: "Marketing automation, analytics, and campaign management tools." },
      { name: "PropTech", application: "Property management, tenant portals, and rental platforms." },
    ],
    projects: [
      {
        title: "Analytics SaaS Platform",
        industry: "MarTech",
        challenge: "Founder needed investor-ready MVP in 8 weeks with billing.",
        result: "MVP in 7 weeks, $1.2M seed round closed",
        tech: ["Next.js", "Stripe", "PostgreSQL"],
      },
      {
        title: "TalentHub HR Platform",
        industry: "HR Tech",
        challenge: "Multi-tenant recruitment platform for 50+ agency clients.",
        result: "500+ active tenants, ₹2Cr ARR within 18 months",
        tech: ["Next.js", "Node.js", "AWS"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "How fast can you build a SaaS MVP?",
        answer: "Core MVP with auth, billing, and primary features: 6–10 weeks. We prioritize features that validate market fit over feature bloat.",
      },
      {
        question: "Which billing provider do you use?",
        answer: "Stripe is our primary choice for global billing. Razorpay for India-focused products. Both support subscriptions, trials, and usage-based pricing.",
      },
      {
        question: "Can you scale from MVP to enterprise?",
        answer: "Yes. We architect for scale from day one—multi-tenancy, caching, database optimization, and auto-scaling infrastructure.",
      },
      {
        question: "Do you help with go-to-market?",
        answer: "We deliver pitch-ready demos, landing pages, and onboarding flows. Growth strategy is yours—we ensure the product is ready to convert.",
      },
    ],
  },

  "cloud-solutions": {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    headline: "Cloud Infrastructure That Scales With Your Ambition",
    subheadline:
      "AWS, Azure, and GCP cloud solutions—migration, infrastructure design, security hardening, and 24/7 monitoring for applications that can't afford downtime.",
    metaTitle: "Cloud Solutions Company India | AWS Azure Migration & DevOps",
    metaDescription:
      "Cloud migration services & DevOps company in India. AWS, Azure, CI/CD, monitoring & cost optimization for enterprise workloads — Maxwell Electrodeal.",
    keywords: [
      "cloud solutions company India",
      "cloud migration services India",
      "AWS consulting company India",
      "DevOps services India",
    ],
    icon: "cloud",
    gradient: "from-slate-950 via-zinc-900 to-slate-950",
    accent: "#0EA5E9",
    startingPrice: "₹1,50,000",
    problems: [
      {
        title: "On-premise limits growth",
        description: "Physical servers can't scale on demand, cost a fortune to maintain, and create single points of failure.",
      },
      {
        title: "Cloud bills spiraling",
        description: "Poor architecture leads to over-provisioned resources and monthly bills 3x what they should be.",
      },
      {
        title: "Security vulnerabilities",
        description: "Misconfigured cloud resources expose sensitive data and create compliance risks.",
      },
      {
        title: "No visibility into system health",
        description: "Downtime discovered by customers, not your team. No alerting, logging, or incident response.",
      },
    ],
    solutions: [
      {
        title: "Cloud Migration",
        description: "Lift-and-shift or re-architect legacy applications to AWS, Azure, or GCP with zero data loss.",
        highlights: ["Assessment & planning", "Zero-downtime migration", "Data validation"],
      },
      {
        title: "Infrastructure Design",
        description: "Scalable, cost-optimized cloud architecture with auto-scaling and load balancing.",
        highlights: ["IaC with Terraform", "Auto-scaling groups", "CDN & caching"],
      },
      {
        title: "Security Hardening",
        description: "IAM policies, encryption, VPC design, WAF, and compliance-ready security posture.",
        highlights: ["Security audits", "Penetration testing", "Compliance frameworks"],
      },
      {
        title: "Monitoring & DevOps",
        description: "24/7 monitoring, alerting, CI/CD pipelines, and incident response procedures.",
        highlights: ["CloudWatch / Azure Monitor", "CI/CD automation", "Incident runbooks"],
      },
    ],
    features: [
      { title: "Multi-Cloud Strategy", description: "AWS, Azure, and GCP expertise to choose the right platform for each workload." },
      { title: "Infrastructure as Code", description: "Terraform and CloudFormation for reproducible, version-controlled infrastructure." },
      { title: "Cost Optimization", description: "Reserved instances, spot instances, and right-sizing to reduce cloud spend 30–50%." },
      { title: "Disaster Recovery", description: "Backup strategies, failover systems, and recovery time objectives under 1 hour." },
      { title: "Container Orchestration", description: "Docker and Kubernetes deployment for microservices architectures." },
      { title: "Managed Services", description: "Ongoing cloud management, patching, and optimization retainers." },
    ],
    techStack: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Datadog"],
    industries: [
      { name: "SaaS", application: "Auto-scaling infrastructure for multi-tenant platforms with global users." },
      { name: "E-commerce", application: "High-availability storefronts handling traffic spikes during sales events." },
      { name: "Healthcare", application: "HIPAA-compliant cloud infrastructure with encryption and audit logging." },
      { name: "FinTech", application: "Secure, compliant cloud environments for financial applications." },
    ],
    projects: [
      {
        title: "CloudShift Migration",
        industry: "SaaS",
        challenge: "Legacy on-premise app serving 5,000 users with frequent downtime.",
        result: "99.95% uptime, 40% infrastructure cost reduction",
        tech: ["AWS", "Terraform", "Docker"],
      },
      {
        title: "SecureCloud Healthcare",
        industry: "Healthcare",
        challenge: "Patient data on unsecured servers with no backup or monitoring.",
        result: "Full HIPAA-ready AWS infrastructure with automated backups",
        tech: ["AWS", "Azure", "Kubernetes"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "AWS, Azure, or GCP—which should we use?",
        answer: "AWS for broadest service catalog and SaaS. Azure for Microsoft ecosystem integration. GCP for data/ML workloads. We recommend based on your specific needs during assessment.",
      },
      {
        question: "How much can cloud migration save?",
        answer: "Clients typically reduce infrastructure costs 30–50% while gaining scalability, reliability, and security improvements.",
      },
      {
        question: "Do you offer managed cloud services?",
        answer: "Yes. Monthly retainers cover monitoring, patching, cost optimization, incident response, and infrastructure updates.",
      },
      {
        question: "How do you ensure zero downtime during migration?",
        answer: "Blue-green deployments, database replication, DNS cutover strategies, and thorough rollback plans for every migration.",
      },
    ],
  },
};

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicesData[slug as ServiceSlug];
}

export function getAllServices(): ServicePageData[] {
  return serviceSlugs.map((slug) => servicesData[slug]);
}
