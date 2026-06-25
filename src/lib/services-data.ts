import type { serviceIcons } from "@/components/ui/Icons";
import { phase8ServiceSlugs, phase8ServicesData } from "@/lib/phase8/phase8-services-data";

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
  /** Extra SSR paragraphs for SEO depth (Vadodara, GST, pricing, etc.) */
  seoParagraphs?: string[];
  pricingTiers?: { name: string; range: string; description: string }[];
  comparisonTable?: { feature: string; custom: string; sap: string; tally: string; zoho: string }[];
  /** Override comparison table column headers (default: Custom ERP / SAP / Tally / Zoho) */
  comparisonColumnLabels?: { custom: string; col2: string; col3: string; col4: string };
  comparisonTitle?: string;
  processSteps?: { step: string; title: string; description: string }[];
  relatedBlogSlugs?: string[];
  relatedIndustrySlugs?: string[];
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
  ...phase8ServiceSlugs,
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const servicesData: Record<ServiceSlug, ServicePageData> = {
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    headline: "Website Development Company India — Business & E-Commerce",
    subheadline:
      "Next.js corporate websites, e-commerce storefronts, and conversion-focused landing pages for Indian businesses—engineered for SEO, Core Web Vitals, and measurable lead generation.",
    metaTitle: "Website Development Company India — Business & E-Commerce",
    metaDescription:
      "Website development company in India. Next.js business sites, e-commerce, SEO. Pricing from ₹75K. Vadodara & pan-India delivery.",
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
    seoParagraphs: [
      "A professional website is your highest-leverage sales asset in India—yet most businesses still run slow WordPress themes that fail Core Web Vitals and leak leads. Maxwell Electrodeal builds Next.js sites that rank, load in under 2 seconds, and convert visitors into qualified enquiries.",
      "We serve B2B manufacturers, healthcare groups, and funded startups across Vadodara, Mumbai, Delhi, and international markets. Every project includes technical SEO, schema markup, analytics, and conversion architecture—not just pretty mockups.",
    ],
    pricingTiers: [
      { name: "Startup site", range: "₹75K – ₹2L", description: "5–10 pages, CMS, contact forms, SEO foundation, mobile-first design." },
      { name: "Corporate site", range: "₹2L – ₹5L", description: "15–25 pages, multi-language, blog, integrations, advanced analytics." },
      { name: "E-commerce / portal", range: "₹5L – ₹15L", description: "Catalog, payments, customer accounts, ERP/CRM integrations." },
    ],
    relatedBlogSlugs: ["how-much-does-website-cost-india-2026", "nextjs-enterprise-website-architecture", "b2b-website-conversion-patterns"],
    relatedIndustrySlugs: ["retail", "healthcare", "education"],
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
    metaTitle: "Custom Software Development Services",
    metaDescription:
      "Custom software development services — enterprise apps, workflow automation, API integrations, and legacy modernization with full IP ownership. Maxwell Electrodeal, India.",
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
    headline: "Mobile App Development Company India — iOS & Android",
    subheadline:
      "Flutter and React Native apps for Indian startups and enterprises—offline-first field tools, consumer apps, and B2B portals with App Store and Play Store launch support.",
    metaTitle: "Mobile App Development Company India — iOS & Android",
    metaDescription:
      "Mobile app development company in India. Flutter, React Native, iOS & Android. MVP from ₹3L. Timeline 8–16 weeks. Maxwell Electrodeal.",
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
    seoParagraphs: [
      "Indian businesses choose mobile apps when field teams, consumer loyalty, or offline workflows demand native experiences. Maxwell Electrodeal delivers Flutter and React Native apps that ship on both iOS and Android from a single codebase—cutting time-to-market by 35–45% versus dual native builds.",
      "Typical timelines: MVP in 8–12 weeks, enterprise apps in 12–20 weeks with weekly demos. We handle Play Store and App Store submission, push notifications, analytics, and backend APIs.",
    ],
    pricingTiers: [
      { name: "MVP app", range: "₹3L – ₹6L", description: "Core flows, auth, API, one platform or cross-platform." },
      { name: "Growth app", range: "₹6L – ₹12L", description: "Offline sync, payments, admin panel, analytics." },
      { name: "Enterprise app", range: "₹12L – ₹20L+", description: "Multi-role, ERP integration, compliance, MDM support." },
    ],
    processSteps: [
      { step: "01", title: "Discovery", description: "User journeys, platform choice (Flutter vs native), and success metrics." },
      { step: "02", title: "UX design", description: "Wireframes and interactive prototypes for stakeholder sign-off." },
      { step: "03", title: "Sprint build", description: "Agile development with TestFlight/Play internal testing." },
      { step: "04", title: "Launch", description: "Store submission, monitoring, and post-launch iteration roadmap." },
    ],
    relatedBlogSlugs: ["mobile-app-development-cost-india-2026", "flutter-vs-react-native-2026", "web-app-vs-mobile-app-business"],
    relatedIndustrySlugs: ["logistics", "retail", "healthcare"],
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
    headline: "Custom ERP Development Company India — GST-Ready ERP Solutions",
    subheadline:
      "Custom ERP software for manufacturing, trading, and distribution across Vadodara, Gujarat, and India. Inventory, production, GST billing, and Tally integration—built around your workflows, not generic templates.",
    metaTitle: "Custom ERP Development Company India — GST-Ready ERP",
    metaDescription:
      "Custom ERP development company in India — GST-ready manufacturing & trading ERP for Vadodara, Gujarat. Inventory, billing, Tally sync. From ₹2L–₹20L.",
    keywords: [
      "ERP software development company",
      "ERP development company India",
      "custom ERP software development",
      "manufacturing ERP development",
      "GST ERP software India",
      "ERP software cost india",
      "ERP development Vadodara",
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
        title: "Multi-Plant ERP — Precision Manufacturer, Gujarat",
        industry: "Manufacturing",
        challenge: "Manual inventory across 3 facilities with no production scheduling.",
        result: "40% reduction in manual data entry · ₹12L annual savings",
        tech: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "Warehouse ERP — Multi-Location Distributor, Gujarat",
        industry: "Distribution",
        challenge: "5 warehouses with disconnected stock management and delayed fulfillment.",
        result: "99.2% inventory accuracy · 30% faster order fulfillment",
        tech: ["React", "Python", "PostgreSQL"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    seoParagraphs: [
      "Maxwell Electrodeal builds GST-ready ERP systems for Indian manufacturers, traders, and distributors from our headquarters in Vadodara, Gujarat. We map shop-floor reality—batch tracking, job-work (ITC-04), weighbridge entries, multi-GSTIN billing—before writing a single module.",
      "Whether you outgrew Tally spreadsheets, failed a generic SAP rollout, or need inventory visibility across warehouses and production lines, our ERP connects operations to finance without forcing your team into foreign workflows.",
      "Clients across Gujarat and pan-India use our platforms for purchase-to-pay, order-to-cash, production scheduling, and statutory reporting. Every deployment includes Tally sync options, role-based dashboards, and mobile access for warehouse and field teams.",
    ],
    pricingTiers: [
      {
        name: "Starter ERP",
        range: "₹2L – ₹5L",
        description: "Single-location inventory, purchase, sales, GST billing, and basic reporting for trading SMEs.",
      },
      {
        name: "Manufacturing ERP",
        range: "₹8L – ₹15L",
        description: "BOM, work orders, WIP tracking, quality checks, and Tally integration for one plant.",
      },
      {
        name: "Enterprise ERP",
        range: "₹15L – ₹20L+",
        description: "Multi-plant, multi-GSTIN, dealer portals, advanced analytics, and custom integrations.",
      },
    ],
    comparisonTable: [
      { feature: "Workflow fit", custom: "Built around your process", sap: "Heavy configuration", tally: "Accounting-first", zoho: "Generic modules" },
      { feature: "Manufacturing MRP", custom: "Native BOM & WIP", sap: "Strong but costly", tally: "Not designed for MRP", zoho: "Limited" },
      { feature: "GST & e-invoice", custom: "Tailored to your billing", sap: "Yes, complex setup", tally: "Strong statutory", zoho: "Basic" },
      { feature: "5-year TCO (SME)", custom: "Flat build + support", sap: "High license + SI fees", tally: "Low if finance-only", zoho: "Per-user adds up" },
      { feature: "Adoption", custom: "UI matches shop floor", sap: "Often poor without SI", tally: "High for accounts", zoho: "Mixed" },
    ],
    processSteps: [
      { step: "01", title: "Discovery", description: "On-site workshops in Vadodara or remote for pan-India clients—map inventory, production, and billing flows." },
      { step: "02", title: "Process design", description: "Document to-be workflows, GST touchpoints, and Tally integration requirements." },
      { step: "03", title: "Architecture", description: "Database, API, and security design with phased module roadmap." },
      { step: "04", title: "UI/UX", description: "Role-based screens for stores, production, sales, and finance teams." },
      { step: "05", title: "Core build", description: "Inventory, purchase, and sales modules with weekly demos." },
      { step: "06", title: "Integrations", description: "Tally, e-invoice, weighbridge, WhatsApp alerts, biometric attendance." },
      { step: "07", title: "UAT & training", description: "Real transaction testing with your team before go-live." },
      { step: "08", title: "Go-live & support", description: "Phased rollout, hypercare, and SLA-backed post-launch support." },
    ],
    relatedBlogSlugs: ["erp-software-cost-india-2026", "erp-vs-tally-india", "erp-development-cost-india-2026"],
    relatedIndustrySlugs: ["manufacturing", "logistics", "retail"],
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
      {
        question: "Do you build GST-compliant billing and e-invoice?",
        answer: "Yes. We implement GSTIN masters, HSN/SAC mapping, e-invoice/e-way bill flows, and credit-note approvals aligned to your dispatch process.",
      },
      {
        question: "Can ERP work with Tally for statutory books?",
        answer: "Yes. Many clients keep Tally for compliance while custom modules handle production and inventory—we build bi-directional sync with reconciliation dashboards.",
      },
      {
        question: "What is included in ERP development cost?",
        answer: "Discovery, UI/UX, core modules, integrations, data migration, training, deployment, and a hypercare period. Source code and IP transfer on completion.",
      },
    ],
  },

  "crm-development": {
    slug: "crm-development",
    title: "CRM Development",
    headline: "Custom CRM Development India — Sales & Customer Management",
    subheadline:
      "Custom CRM software for Indian B2B sales teams—pipeline management, WhatsApp automation, dealer hierarchies, and ERP integration without per-seat Salesforce fees.",
    metaTitle: "Custom CRM India — No Per-Seat Fees | From ₹5L",
    metaDescription:
      "CRM for Indian B2B sales: pipelines, dealer hierarchies, WhatsApp follow-ups & ERP sync. Skip Salesforce seat tax. Get a free CRM scope call.",
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
        title: "Sales CRM — B2B Manufacturing Distributor, Gujarat",
        industry: "B2B Services",
        challenge: "50-person sales team tracking deals and distributor schemes in Excel with no pipeline visibility.",
        result: "35% improvement in follow-up completion rate · Deal velocity cut from 22 days to 14 days",
        tech: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "Property CRM — Real Estate Developer, Western India",
        industry: "Real Estate",
        challenge: "200+ brokers with no centralized lead distribution system.",
        result: "50% faster lead response time · 28% more conversions",
        tech: ["React", "Node.js", "MongoDB"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    seoParagraphs: [
      "Indian B2B sales rarely follow a linear Salesforce pipeline. Distributor tiers, scheme approvals, sample requests, and WhatsApp-first follow-up need CRM software built for how your team actually sells—not how a US SaaS vendor imagines selling.",
      "Maxwell Electrodeal delivers custom CRM platforms with flat infrastructure cost, vernacular mobile UX, and integrations to Tally, ERP, and telephony. Manufacturing clients use our CRM for dealer beat planning; services firms use it for proposal tracking and account health scores.",
      "Clients typically see 25–35% improvement in follow-up discipline within the first quarter after go-live, with payback versus per-seat SaaS often before 25 active users.",
    ],
    pricingTiers: [
      { name: "Sales CRM MVP", range: "₹5L – ₹8L", description: "Pipeline, leads, tasks, mobile app, and email/WhatsApp logging." },
      { name: "Growth CRM", range: "₹10L – ₹15L", description: "Dealer hierarchy, approvals, quotes, dashboards, and ERP hooks." },
      { name: "Enterprise CRM", range: "₹15L – ₹25L", description: "Multi-branch, advanced analytics, customer portal, and custom workflows." },
    ],
    relatedBlogSlugs: ["crm-software-manufacturing-india", "crm-development-cost-india", "custom-crm-vs-salesforce"],
    relatedIndustrySlugs: ["manufacturing", "retail", "real-estate"],
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
      {
        question: "What ROI can we expect from custom CRM?",
        answer: "Clients report 25–35% better follow-up rates and faster deal velocity within 6 months; distributor CRM projects often recover build cost within 12 months versus per-seat licensing.",
      },
      {
        question: "Do you build CRM for manufacturing distributors?",
        answer: "Yes. Beat planning, scheme management, secondary sales visibility, and ERP order sync are common modules for Gujarat and pan-India manufacturers.",
      },
    ],
  },

  "ai-solutions": {
    slug: "ai-solutions",
    title: "AI Solutions",
    headline: "AI Development Company India — Custom AI Solutions",
    subheadline:
      "Practical AI for Indian businesses—computer vision on factory floors, document automation, LLM assistants, and predictive analytics with measurable ROI, not pilot-project theatre.",
    metaTitle: "AI Development Company India — Custom AI Solutions",
    metaDescription:
      "AI software development company in India. Computer vision, automation, LLM chatbots, predictive analytics. Production ROI from Maxwell Electrodeal.",
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
    seoParagraphs: [
      "AI software development in India should start with a process that bleeds time—not with a chatbot for its own sake. Maxwell Electrodeal implements computer vision for PPE and quality checks, intelligent document processing for finance teams, and LLM assistants grounded in your knowledge base.",
      "Use cases we ship: manufacturing safety monitoring, invoice/receipt OCR, support ticket deflection, demand forecasting, and predictive maintenance on IoT sensor data. Projects typically range ₹3.5L–₹25L depending on data readiness and deployment environment (cloud vs edge).",
    ],
    pricingTiers: [
      { name: "AI pilot", range: "₹3.5L – ₹8L", description: "Single use case, proof of ROI, limited integration." },
      { name: "Production AI", range: "₹8L – ₹18L", description: "Multi-model workflow, monitoring, human-in-the-loop." },
      { name: "Enterprise AI", range: "₹18L – ₹25L+", description: "Edge deployment, compliance, ERP/MES integration." },
    ],
    relatedBlogSlugs: ["ai-software-development-india-2026", "computer-vision-manufacturing", "ai-roi-measurement"],
    relatedIndustrySlugs: ["manufacturing", "healthcare", "logistics"],
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
    metaTitle: "SaaS Development Services",
    metaDescription:
      "SaaS development services — multi-tenant architecture, subscription billing, admin dashboards, and cloud infrastructure for product teams. Maxwell Electrodeal, India.",
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
    metaTitle: "Cloud Solutions Development Services",
    metaDescription:
      "Cloud solutions development services — AWS, Azure, and GCP migration, DevOps, CI/CD, security hardening, and 24/7 monitoring. Maxwell Electrodeal, India.",
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
  ...phase8ServicesData,
};

import { expandServiceFaqs } from "./service-faq-expansion";

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  const service = servicesData[slug as ServiceSlug];
  if (!service) return undefined;
  return { ...service, faqs: expandServiceFaqs(slug, service.faqs) };
}

export function getAllServices(): ServicePageData[] {
  return serviceSlugs.map((slug) => getServiceBySlug(slug)!);
}
