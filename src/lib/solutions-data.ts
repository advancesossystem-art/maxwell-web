import { siteConfig } from "./constants";
import { companyMetricDisplay } from "./company-metrics";
import { geoSolutionSlugs, geoSolutionsData } from "./geo-solutions-data";
import { indiaGeoSolutionSlugs, indiaGeoSolutionsData } from "./india-geo-solutions-data";
import type { SolutionPageData } from "./solutions-types";

export type { SolutionPageData } from "./solutions-types";

const coreSolutionSlugs = [
  "software-development-company",
  "erp-development-company",
  "crm-development-company",
  "website-development-company",
  "ai-development-company",
  "mobile-app-development-company",
  "saas-development-company",
  "cloud-solutions-company",
  "custom-software-development-company",
  "digital-transformation-company",
  "it-consulting-company",
  "business-automation-services",
] as const;

export const solutionSlugs = [...coreSolutionSlugs, ...geoSolutionSlugs, ...indiaGeoSolutionSlugs] as const;

export type SolutionSlug = (typeof solutionSlugs)[number];

const coreSolutionsData: Record<(typeof coreSolutionSlugs)[number], SolutionPageData> = {
  "software-development-company": {
    slug: "software-development-company",
    title: "Software Development Company",
    headline: "Software Development Company",
    subheadline:
      "Website engineering for businesses—manufacturer, corporate, and industrial sites—plus custom apps, ERP, CRM, mobile, AI, and cloud for clients that need one accountable partner, not fragmented vendors.",
    metaTitle: "Software Development Company | Website Engineering & IT Solutions",
    metaDescription:
      "Maxwell Electrodeal is a website engineering company for businesses, also delivering custom software, ERP, CRM, mobile apps, AI & cloud. India HQ, global delivery — free consultation.",
    primaryKeyword: "Software Development Company",
    secondaryKeywords: [
      "software development services",
      "software development company India",
      "enterprise software development",
      "IT solutions company",
      "software development outsourcing",
      "dedicated development team",
    ],
    relatedSearches: [
      "software development cost in India",
      "how to choose a software development company",
      "offshore software development",
      "top software development company India",
    ],
    serviceHref: "/services/custom-software-development",
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Logistics", href: "/industries/logistics" },
    ],
    caseStudySlugs: ["manufacturing-erp", "healthcare-management", "construction-platform"],
    marketInsights:
      "Maxwell Electrodeal is a website engineering company for businesses. As a supporting practice, we also map workflows, architect custom software, integrate Tally/GST/payments, and ship production systems with documentation and IP ownership—from discovery to 24/7 support.",
    industryChallenges: [
      { title: "Vendor Fragmentation", description: "Separate web, mobile, and ERP vendors create integration debt and blame gaps." },
      { title: "No Domain Depth", description: "Generic agencies miss manufacturing shop-floor or healthcare compliance realities." },
    ],
    recommendedApproach: [
      "Single partner for web, mobile, ERP, AI",
      "Discovery-led architecture",
      "Phased milestone delivery",
      "Post-launch SLA support",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "Flutter", "PostgreSQL", "AWS"],
    roiExamples: [
      { metric: companyMetricDisplay.projectsCompleted, label: "Projects Delivered", description: "Documented" },
      { metric: companyMetricDisplay.clientRetention, label: "Client Retention", description: "Long-term" },
      { metric: "100%", label: "IP Ownership", description: "Your code" },
    ],
    internalLinks: [
      { label: "India Delivery", href: "/solutions/software-development-company-india", description: "India hub" },
      { label: "Vadodara HQ", href: "/solutions/software-development-company-vadodara", description: "Local team" },
      { label: "All Services", href: "/services", description: "Service catalog" },
      { label: "Get Estimate", href: "/get-estimate", description: "Free quote" },
    ],
    faqs: [
      {
        question: "What does a software development company do?",
        answer:
          "We analyze business workflows, design software architecture, build and test applications, integrate third-party systems, and deliver documented code with full IP ownership and optional ongoing support.",
      },
      {
        question: "Software development company vs freelancer?",
        answer:
          "Companies provide team depth, documented processes, SLAs, and continuity—critical for ERP, compliance, and production systems where freelancer risk is unacceptable.",
      },
      {
        question: "How to choose a software development company?",
        answer:
          "Evaluate domain case studies, IP contract terms, tech stack proof (Core Web Vitals, ERP modules), milestone pricing, and post-launch support—not hourly rates alone.",
      },
    ],
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    accent: "#2563EB",
  },

  "erp-development-company": {
    slug: "erp-development-company",
    title: "ERP Development Company",
    headline: "Custom ERP Development Company",
    subheadline: "Manufacturing, distribution, and operations ERP built around how your business actually runs—not generic templates.",
    metaTitle: "ERP Solutions for Manufacturing Businesses in India",
    metaDescription: "ERP solutions for manufacturing, logistics, and retail businesses in India — inventory, production planning, finance, and Tally/GST integration by Maxwell Electrodeal.",
    primaryKeyword: "ERP Development Company",
    secondaryKeywords: ["custom ERP software", "manufacturing ERP India", "ERP development services", "enterprise resource planning company"],
    relatedSearches: ["ERP software cost India", "best ERP development company", "custom ERP vs SAP", "ERP for manufacturing SME"],
    serviceHref: "/services/erp-development",
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Logistics", href: "/industries/logistics" },
      { name: "Retail", href: "/industries/retail" },
    ],
    caseStudySlugs: ["manufacturing-erp", "logistics-platform"],
    marketInsights: "Indian SMEs spend ₹15L+ annually on operational waste from disconnected systems. Custom ERP pays back in 8–12 months when built for actual workflows.",
    industryChallenges: [
      { title: "Spreadsheet Chaos", description: "Production, inventory, and finance teams use disconnected Excel files—causing ₹5L–₹15L annual errors." },
      { title: "Generic ERP Misfit", description: "SAP and Tally integrations fail when shop-floor processes don't match standard ERP modules." },
    ],
    recommendedApproach: [
      "Shop-floor discovery before architecture",
      "Phased module rollout (inventory → production → finance)",
      "Tally/GST bi-directional sync",
      "Barcode and mobile shop-floor apps",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
    roiExamples: [
      { metric: "40%", label: "Less Manual Entry", description: "the manufacturing client case study" },
      { metric: "₹12L", label: "Annual Savings", description: "Manufacturing client" },
      { metric: "99.2%", label: "Inventory Accuracy", description: "From 87% baseline" },
    ],
    internalLinks: [
      { label: "ERP Service Details", href: "/services/erp-development", description: "Full service capabilities" },
      { label: "Manufacturing Industry", href: "/industries/manufacturing", description: "Industry-specific solutions" },
      { label: "Vadodara Office", href: "/locations/india/vadodara", description: "Local Gujarat delivery" },
      { label: "Get Estimate", href: "/get-estimate", description: "Free project estimate" },
    ],
    faqs: [
      { question: "How much does custom ERP development cost?", answer: "Custom ERP projects typically range from ₹15L–₹50L depending on modules, integrations, and facilities. We provide milestone-based quotes after discovery." },
      { question: "How long does ERP implementation take?", answer: "MVP modules in 10–14 weeks; full multi-facility rollout in 4–6 months with phased deployment." },
      { question: "Can you integrate with Tally?", answer: "Yes. We build bi-directional Tally sync for GST-compliant accounting alongside operational modules." },
    ],
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    accent: "#2563EB",
  },

  "crm-development-company": {
    slug: "crm-development-company",
    title: "CRM Development Company",
    headline: "Custom CRM Development Company",
    subheadline: "Sales pipelines, lead automation, and customer portals tailored to your sales process—not Salesforce templates.",
    metaTitle: "CRM Solutions for B2B Sales Businesses in India",
    metaDescription: "CRM solutions for B2B sales businesses in India — custom pipelines, lead automation, customer portals, and analytics without per-seat SaaS fees. Maxwell Electrodeal.",
    primaryKeyword: "CRM Development Company",
    secondaryKeywords: ["custom CRM software", "CRM development India", "sales CRM company", "B2B CRM development"],
    relatedSearches: ["CRM development cost", "custom CRM vs HubSpot", "CRM for sales team India"],
    serviceHref: "/services/crm-development",
    industryLinks: [
      { name: "Retail", href: "/industries/retail" },
      { name: "Healthcare", href: "/industries/healthcare" },
    ],
    caseStudySlugs: ["retail-analytics"],
    marketInsights: "B2B sales teams lose 30% of leads to poor follow-up. Custom CRM aligned to your funnel converts more pipeline without per-seat SaaS fees.",
    industryChallenges: [
      { title: "Per-Seat SaaS Costs", description: "Salesforce and HubSpot costs scale painfully for 20+ seat teams." },
      { title: "Process Mismatch", description: "Generic CRM stages don't match complex B2B approval workflows." },
    ],
    recommendedApproach: ["Sales process mapping", "Pipeline customization", "Email/WhatsApp automation", "Analytics dashboards"],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    roiExamples: [
      { metric: "2.5×", label: "Repeat Purchases", description: "Retail loyalty integration" },
      { metric: "50%", label: "Faster Follow-up", description: "Automated lead routing" },
      { metric: "35%", label: "Pipeline Visibility", description: "Executive dashboards" },
    ],
    internalLinks: [
      { label: "CRM Service", href: "/services/crm-development", description: "Service overview" },
      { label: "Contact Sales", href: "/contact", description: "Speak with our team" },
      { label: "major metro markets", href: "/locations/india/mumbai", description: "Enterprise clients" },
    ],
    faqs: [
      { question: "Custom CRM vs off-the-shelf?", answer: "Custom CRM owns your workflow, data model, and integrations—no per-seat fees and no forced process changes." },
    ],
    gradient: "from-violet-950 via-purple-900 to-slate-950",
    accent: "#8B5CF6",
  },

  "website-development-company": {
    slug: "website-development-company",
    title: "Enterprise Website Development Solutions",
    headline: "Enterprise Website Development Solutions",
    subheadline:
      "Commercial solutions overview for large corporate and multi-location website programs — see the service pillar for capabilities, pricing, and delivery.",
    metaTitle: "Enterprise Website Development Solutions India",
    metaDescription:
      "Enterprise website development solutions for multi-location and corporate programs in India — Next.js, SEO architecture, and conversion systems. Full delivery on our website development service page.",
    primaryKeyword: "Enterprise Website Development Solutions",
    secondaryKeywords: [
      "corporate website development solutions",
      "enterprise web development India",
      "Next.js enterprise websites",
      "multi-location website development",
    ],
    relatedSearches: ["website development cost India", "best web development company", "Next.js agency"],
    serviceHref: "/services/website-development",
    industryLinks: [
      { name: "Education", href: "/industries/education" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Retail", href: "/industries/retail" },
    ],
    caseStudySlugs: ["educational-portal"],
    marketInsights: "73% of B2B buyers research vendors online before contact. A slow or outdated website costs qualified leads before sales ever speaks.",
    industryChallenges: [
      { title: "Poor Core Web Vitals", description: "WordPress sites with plugin bloat fail Google rankings and mobile conversion." },
      { title: "No Lead Capture Strategy", description: "Beautiful designs without CTA architecture and analytics integration." },
    ],
    recommendedApproach: ["SEO-first information architecture", "Next.js SSG/SSR", "Conversion-optimized layouts", "CMS integration"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    roiExamples: [
      { metric: "95+", label: "Lighthouse Score", description: "Performance guarantee" },
      { metric: "35%", label: "More Leads", description: "Conversion optimization" },
      { metric: "3×", label: "Organic Traffic", description: "SEO architecture clients" },
    ],
    internalLinks: [
      { label: "Website Service", href: "/services/website-development", description: "Capabilities" },
      { label: "Book Consultation", href: "/book-consultation", description: "Free strategy call" },
      { label: "Bengaluru", href: "/locations/india/bengaluru", description: "Tech hub clients" },
    ],
    faqs: [
      {
        question: "How much does custom web development cost for a startup?",
        answer:
          "Startup marketing sites range $8,000–$35,000 (US) or ₹1L–₹5L (India); web apps higher. Maxwell quotes after discovery with transparent milestones.",
      },
      {
        question: "How much does a business website cost?",
        answer: "Corporate websites from ₹1L–₹5L; complex web apps from ₹5L–₹15L+. Transparent quotes after requirements review.",
      },
      {
        question: "How to hire a web development company?",
        answer:
          "Review Core Web Vitals samples, confirm IP ownership, check SEO/schema implementation, and request a fixed-scope quote. See our USA and UAE solution pages for regional delivery.",
      },
      {
        question: "Why Next.js for business websites?",
        answer:
          "Next.js delivers SEO-friendly server rendering, fast LCP scores, and scalable architecture—critical for ranking and AI search citations in 2026.",
      },
      {
        question: "How long does website development take?",
        answer: "SMB sites: 6–10 weeks. Corporate or ecommerce builds: 10–16 weeks depending on integrations.",
      },
    ],
    gradient: "from-cyan-950 via-blue-900 to-slate-950",
    accent: "#06B6D4",
  },

  "ai-development-company": {
    slug: "ai-development-company",
    title: "AI Development Company",
    headline: "AI Development Company",
    subheadline: "Practical AI—LLM integrations, computer vision, and automation that deliver measurable ROI, not science projects.",
    metaTitle: "AI Solutions for Manufacturing & Operations Businesses in India",
    metaDescription: "AI solutions for manufacturing and operations businesses in India — computer vision, LLM automation, and production-grade MLOps by Maxwell Electrodeal.",
    primaryKeyword: "AI Development Company",
    secondaryKeywords: ["AI software development India", "LLM integration company", "computer vision development", "AI solutions company"],
    relatedSearches: ["AI development cost", "custom AI vs ChatGPT API", "computer vision manufacturing"],
    serviceHref: "/services/ai-solutions",
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Healthcare", href: "/industries/healthcare" },
    ],
    caseStudySlugs: ["ai-safety-monitoring"],
    marketInsights: "Enterprise AI adoption grew 3× in 2024—but 60% of pilots fail without production engineering and domain-specific training data.",
    industryChallenges: [
      { title: "Pilot Purgatory", description: "POCs never reach production due to missing MLOps and integration." },
      { title: "Generic Models", description: "Off-the-shelf models fail on facility-specific vision and document tasks." },
    ],
    recommendedApproach: ["Use-case ROI validation", "Custom model training", "Edge deployment", "Responsible AI guardrails"],
    technologies: ["Python", "FastAPI", "React", "AWS", "OpenAI/Anthropic APIs"],
    roiExamples: [
      { metric: "99.2%", label: "Detection Accuracy", description: "Safety vision system" },
      { metric: "75%", label: "Incident Reduction", description: "6-month post-deploy" },
      { metric: "60%", label: "Faster Inspection", description: "vs manual rounds" },
    ],
    internalLinks: [
      { label: "AI Service", href: "/services/ai-solutions", description: "AI capabilities" },
      { label: "Case Study", href: "/case-studies/ai-safety-monitoring", description: "Vision AI success" },
      { label: "Get Estimate", href: "/project-calculator", description: "Cost calculator" },
    ],
    faqs: [
      { question: "Do you build custom AI models?", answer: "Yes. Computer vision (YOLO), document AI, and LLM agents trained on your data with production deployment." },
      {
        question: "Industrial AI and workplace safety solutions?",
        answer:
          "Yes—PPE detection, computer vision safety monitoring, zone intrusion alerts, and AI video analytics for factories via AdvanceSafe and custom vision deployments.",
      },
      {
        question: "AI chatbot development for businesses?",
        answer: "LLM-powered support bots, document Q&A, and workflow agents integrated with CRM/ERP—not generic ChatGPT wrappers.",
      },
    ],
    gradient: "from-indigo-950 via-violet-900 to-slate-950",
    accent: "#6366F1",
  },

  "mobile-app-development-company": {
    slug: "mobile-app-development-company",
    title: "Mobile App Development Company",
    headline: "Mobile App Development Company",
    subheadline: "Native-quality iOS and Android apps with React Native and Flutter—offline-ready, analytics-integrated, store-ready.",
    metaTitle: "Mobile App Solutions for Healthcare & Field Service Businesses in India",
    metaDescription: "Mobile app solutions for healthcare and field service businesses in India — iOS, Android, Flutter, offline-first apps by Maxwell Electrodeal.",
    primaryKeyword: "Mobile App Development Company",
    secondaryKeywords: ["app development company India", "React Native development", "Flutter app company", "iOS Android development"],
    relatedSearches: ["mobile app development cost", "app development company Vadodara", "enterprise mobile app"],
    serviceHref: "/services/mobile-app-development",
    industryLinks: [
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Education", href: "/industries/education" },
      { name: "Logistics", href: "/industries/logistics" },
    ],
    caseStudySlugs: ["healthcare-management", "logistics-platform"],
    marketInsights: "India has 750M+ smartphone users. Businesses without mobile presence lose engagement to competitors with field apps and customer portals.",
    industryChallenges: [
      { title: "Cross-Platform Cost", description: "Building iOS and Android separately doubles budget—cross-platform saves 40%." },
      { title: "Offline Requirements", description: "Field apps in low-connectivity areas need offline-first architecture." },
    ],
    recommendedApproach: ["React Native or Flutter", "Offline sync", "Push notifications", "App Store launch support"],
    technologies: ["React Native", "Flutter", "Node.js", "Firebase", "AWS"],
    roiExamples: [
      { metric: "4.8★", label: "App Store Rating", description: "Healthcare client" },
      { metric: "10K+", label: "Active Users", description: "Patient portal" },
      { metric: "40%", label: "Dev Cost Savings", description: "Cross-platform vs native" },
    ],
    internalLinks: [
      { label: "Mobile Service", href: "/services/mobile-app-development", description: "Full capabilities" },
      { label: "Healthcare", href: "/industries/healthcare", description: "Health apps" },
      { label: "Ahmedabad", href: "/locations/india/ahmedabad", description: "Gujarat clients" },
    ],
    faqs: [
      {
        question: "What is the cost of mobile app development?",
        answer:
          "MVPs from ₹3L / $25K; full apps ₹8L–₹20L / $60K–$150K. UAE and US clients receive quotes in local currency after scope review.",
      },
      {
        question: "How long does mobile app development take?",
        answer: "Startup MVPs: 10–14 weeks. Enterprise apps with offline sync: 4–6 months phased.",
      },
      { question: "React Native vs Flutter?", answer: "We recommend based on team, integrations, and performance needs—both deliver production-quality cross-platform apps." },
      {
        question: "Do you build MVP apps for startups?",
        answer: "Yes—investor-ready MVPs with core flows, auth, analytics, and store submission support.",
      },
      {
        question: "Cross-platform vs native apps?",
        answer: "Cross-platform (Flutter/React Native) saves 35–45% for dual iOS/Android launch; native when platform-specific hardware APIs dominate.",
      },
    ],
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    accent: "#10B981",
  },

  "saas-development-company": {
    slug: "saas-development-company",
    title: "SaaS Development Company",
    headline: "SaaS Development Company",
    subheadline: "Multi-tenant SaaS platforms with subscription billing—investor-ready MVPs in 7–10 weeks.",
    metaTitle: "SaaS Solutions for Startup & Scale-up Businesses in India",
    metaDescription: "SaaS solutions for startup and scale-up businesses in India — multi-tenant platforms, Stripe billing, and investor-ready MVPs by Maxwell Electrodeal.",
    primaryKeyword: "SaaS Development Company",
    secondaryKeywords: ["SaaS product development", "multi-tenant SaaS", "SaaS MVP development", "B2B SaaS company India"],
    relatedSearches: ["SaaS development cost", "SaaS MVP timeline", "multi-tenant architecture"],
    serviceHref: "/services/saas-development",
    industryLinks: [
      { name: "Education", href: "/industries/education" },
      { name: "Retail", href: "/industries/retail" },
    ],
    caseStudySlugs: ["saas-workforce-management"],
    marketInsights: "Indian B2B SaaS market projected to reach $50B by 2030. Speed-to-market and architecture decisions in MVP phase determine long-term scalability.",
    industryChallenges: [
      { title: "Technical Debt in MVPs", description: "Rushed MVPs without multi-tenant design require expensive rewrites." },
      { title: "Billing Complexity", description: "Stripe, GST invoicing, and tier management need expert implementation." },
    ],
    recommendedApproach: ["Multi-tenant from day one", "Stripe subscriptions", "Usage analytics", "CI/CD for weekly releases"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    roiExamples: [
      { metric: "7 wk", label: "MVP Delivery", description: "TeamPulse case study" },
      { metric: "₹2Cr", label: "ARR Achieved", description: "SaaS client" },
      { metric: "500+", label: "Tenants", description: "Multi-tenant scale" },
    ],
    internalLinks: [
      { label: "SaaS Service", href: "/services/saas-development", description: "Service details" },
      { label: "Case Study", href: "/case-studies/saas-workforce-management", description: "SaaS success" },
      { label: "Bengaluru", href: "/locations/india/bengaluru", description: "Startup hub" },
    ],
    faqs: [
      { question: "How fast can you build a SaaS MVP?", answer: "Investor-ready MVPs in 7–10 weeks with core tenancy, billing, and admin dashboard." },
    ],
    gradient: "from-cyan-950 via-blue-900 to-slate-950",
    accent: "#06B6D4",
  },

  "cloud-solutions-company": {
    slug: "cloud-solutions-company",
    title: "Cloud Solutions Company",
    headline: "Cloud Solutions Company",
    subheadline: "AWS and Azure architecture, migration, DevOps, and 99.9% uptime infrastructure for production workloads.",
    metaTitle: "Cloud Solutions for Enterprise & Logistics Businesses in India",
    metaDescription: "Cloud solutions for enterprise and logistics businesses in India — AWS, Azure migration, DevOps, and FinOps cost optimization by Maxwell Electrodeal.",
    primaryKeyword: "Cloud Solutions Company",
    secondaryKeywords: ["cloud migration India", "AWS consulting company", "DevOps services", "cloud infrastructure company"],
    relatedSearches: ["cloud migration cost", "AWS partner India", "managed cloud services"],
    serviceHref: "/services/cloud-solutions",
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Logistics", href: "/industries/logistics" },
    ],
    caseStudySlugs: ["logistics-platform"],
    marketInsights: "60% of Indian enterprises now run hybrid cloud—but 40% overspend due to poor architecture and missing FinOps practices.",
    industryChallenges: [
      { title: "Cloud Cost Overruns", description: "Ungoverned AWS accounts burn ₹2L–₹10L monthly without architecture review." },
      { title: "Migration Risk", description: "Lift-and-shift without refactoring causes downtime and performance issues." },
    ],
    recommendedApproach: ["Architecture assessment", "Phased migration", "IaC with Terraform", "Monitoring & alerting"],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    roiExamples: [
      { metric: "30%", label: "Cloud Cost Cut", description: "FinOps optimization" },
      { metric: "99.9%", label: "Uptime SLA", description: "Production systems" },
      { metric: "50%", label: "Deploy Speed", description: "CI/CD automation" },
    ],
    internalLinks: [
      { label: "Cloud Service", href: "/services/cloud-solutions", description: "Cloud offerings" },
      { label: "Process", href: "/process", description: "Delivery methodology" },
      { label: "USA Clients", href: "/locations/usa", description: "Global delivery" },
    ],
    faqs: [
      { question: "AWS or Azure?", answer: "We recommend based on your stack, compliance, and existing contracts—both are first-class in our practice." },
    ],
    gradient: "from-orange-950 via-amber-900 to-slate-950",
    accent: "#F59E0B",
  },

  "custom-software-development-company": {
    slug: "custom-software-development-company",
    title: "Custom Software Development Company",
    headline: "Custom Software Development Company",
    subheadline: "Bespoke software engineered for your workflows—clean architecture, full documentation, 100% IP ownership.",
    metaTitle: "Custom Software Solutions for Enterprise Businesses in India",
    metaDescription: "Custom software solutions for enterprise businesses in India — bespoke web apps, APIs, integrations, and legacy modernization by Maxwell Electrodeal.",
    primaryKeyword: "Custom Software Development Company",
    secondaryKeywords: ["software development company India", "bespoke software development", "enterprise software company", "offshore development India"],
    relatedSearches: ["software development cost India", "best software company", "custom software vs product"],
    serviceHref: "/services/custom-software-development",
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Construction", href: "/industries/construction" },
    ],
    caseStudySlugs: ["construction-platform", "healthcare-management"],
    marketInsights: "Generic SaaS covers 70% of needs—the remaining 30% where competitive advantage lives requires custom engineering.",
    industryChallenges: [
      { title: "Workflow Uniqueness", description: "Your competitive process can't be replicated in off-the-shelf software." },
      { title: "Integration Debt", description: "Legacy systems need APIs, not rip-and-replace." },
    ],
    recommendedApproach: ["Discovery workshops", "Modular architecture", "API-first design", "Phased delivery"],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
    roiExamples: [
      { metric: companyMetricDisplay.projectsCompleted, label: "Projects", description: "Documented deliveries" },
      { metric: companyMetricDisplay.clientRetention, label: "Retention", description: "Long-term clients" },
      { metric: "100%", label: "IP Ownership", description: "Your code, always" },
    ],
    internalLinks: [
      { label: "Software Service", href: "/services/custom-software-development", description: "Core service" },
      { label: "All Solutions", href: "/solutions", description: "Solution pages" },
      { label: "Contact", href: "/contact", description: "Start a project" },
    ],
    faqs: [
      {
        question: "What does a custom software development company do?",
        answer:
          "We map workflows, architect software, build and test applications, integrate APIs, and deliver documented code with full IP ownership for your business.",
      },
      {
        question: "What is the difference between custom software and off-the-shelf software?",
        answer:
          "Off-the-shelf (SaaS) is faster to adopt but forces process compromises. Custom software mirrors your operations, integrates deeply, and avoids per-seat fees at scale.",
      },
      {
        question: "Why custom software vs SaaS?",
        answer: "When your workflow is your competitive advantage, custom software captures it—SaaS forces you to adapt to their process.",
      },
      {
        question: "How much does custom software development cost?",
        answer: "From ₹2L / $15K for focused tools to ₹25L+ / $150K for enterprise platforms. Offshore US/UAE delivery reduces cost 40–60%.",
      },
      {
        question: "Do you offer dedicated development teams?",
        answer: "Yes—monthly dedicated squads with sprint demos and direct communication channels.",
      },
    ],
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    accent: "#2563EB",
  },

  "digital-transformation-company": {
    slug: "digital-transformation-company",
    title: "Digital Transformation Company",
    headline: "Digital Transformation Company",
    subheadline:
      "Roadmaps, ERP/CRM rollouts, cloud migration, and AI automation—practical digital transformation for SMEs and enterprises, not slide-deck consulting.",
    metaTitle: "Digital Transformation Company | ERP, Cloud & Automation",
    metaDescription:
      "Digital transformation company for ERP, CRM, cloud migration & AI automation. Maxwell Electrodeal — phased roadmaps with measurable ROI.",
    primaryKeyword: "Digital Transformation Company",
    secondaryKeywords: [
      "digital transformation services",
      "business automation solutions",
      "enterprise software solutions",
      "digital transformation roadmap",
      "SME digital transformation India",
    ],
    relatedSearches: ["digital transformation cost", "ERP as digital transformation", "automation ROI"],
    serviceHref: "/services/custom-software-development",
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Retail", href: "/industries/retail" },
      { name: "Healthcare", href: "/industries/healthcare" },
    ],
    caseStudySlugs: ["manufacturing-erp", "saas-workforce-management"],
    marketInsights:
      "Digital transformation fails when treated as a one-time project. Successful programs sequence ERP digitization, mobile field tools, CRM pipeline automation, and AI—only after data quality is proven.",
    industryChallenges: [
      { title: "Transformation Without Execution", description: "Consultants deliver decks; operations still run on Excel six months later." },
      { title: "Big-Bang ERP Risk", description: "All-at-once rollouts stall adoption—phased modules win on shop floors." },
    ],
    recommendedApproach: ["Current-state audit", "90-day quick wins", "Phased ERP/CRM", "AI after data quality"],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Python"],
    roiExamples: [
      { metric: "40%", label: "Process Efficiency", description: "Post-ERP clients" },
      { metric: "90 days", label: "First Wins", description: "Quick-win phase" },
      { metric: "8 mo", label: "Full ROI", description: "Manufacturing" },
    ],
    internalLinks: [
      { label: "Transformation Guide", href: "/blog/digital-transformation-sme-roadmap", description: "Blog" },
      { label: "ERP Development", href: "/solutions/erp-development-company", description: "ERP" },
      { label: "Business Automation", href: "/solutions/business-automation-services", description: "Automation" },
      { label: "Book Consultation", href: "/book-consultation", description: "Strategy call" },
    ],
    faqs: [
      {
        question: "What is digital transformation for SMEs?",
        answer:
          "Replacing manual/spreadsheet operations with integrated ERP, CRM, mobile apps, and automation—sequenced in phases with adoption metrics, not a single big-bang go-live.",
      },
    ],
    gradient: "from-violet-950 via-indigo-900 to-slate-950",
    accent: "#7C3AED",
  },

  "it-consulting-company": {
    slug: "it-consulting-company",
    title: "IT Consulting Company",
    headline: "IT Consulting Company",
    subheadline:
      "Technology strategy, architecture reviews, vendor selection, and build-vs-buy guidance—from engineers who ship production software, not PowerPoint.",
    metaTitle: "IT Consulting Company India | Software Strategy & Architecture",
    metaDescription:
      "IT consulting company for software strategy, architecture, vendor selection & build-vs-buy. Maxwell Electrodeal — engineer-led consulting.",
    primaryKeyword: "IT Consulting Company",
    secondaryKeywords: [
      "IT consulting services",
      "software consulting company India",
      "technology consulting",
      "enterprise architecture consulting",
      "software vendor selection",
    ],
    relatedSearches: ["how to choose software vendor", "build vs buy software", "IT consulting cost India"],
    serviceHref: "/services/custom-software-development",
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Education", href: "/industries/education" },
    ],
    caseStudySlugs: ["construction-platform"],
    marketInsights:
      "IT consulting from a delivery team means recommendations are buildable—architecture, stack choices, and TCO models grounded in 100+ shipped projects, not theoretical frameworks.",
    industryChallenges: [
      { title: "Vendor Lock-In", description: "Wrong SaaS or agency choices cost years of rework and data migration pain." },
      { title: "Architecture Debt", description: "MVPs built without scalability require expensive rewrites at Series A." },
    ],
    recommendedApproach: ["Stakeholder workshops", "Build vs buy analysis", "Architecture blueprint", "Implementation roadmap"],
    technologies: ["AWS", "Azure", "React", "Node.js", "PostgreSQL"],
    roiExamples: [
      { metric: "30%", label: "Cloud Cost Saved", description: "Architecture review" },
      { metric: "6 wk", label: "Strategy Delivery", description: "Typical engagement" },
      { metric: "100%", label: "Actionable Output", description: "Not slide decks only" },
    ],
    internalLinks: [
      { label: "Vendor Selection Guide", href: "/blog/how-to-choose-software-development-company", description: "Blog" },
      { label: "Build vs Buy", href: "/blog/build-vs-buy-software", description: "Comparison" },
      { label: "Process", href: "/process", description: "Our methodology" },
      { label: "Contact", href: "/contact", description: "Consulting inquiry" },
    ],
    faqs: [
      {
        question: "IT consulting vs software development?",
        answer:
          "Consulting defines what to build and how; development executes. We offer both—strategy engagements often convert to phased implementation with the same team.",
      },
    ],
    gradient: "from-slate-950 via-slate-900 to-blue-950",
    accent: "#64748B",
  },

  "business-automation-services": {
    slug: "business-automation-services",
    title: "Business Automation Services",
    headline: "Business Automation Services",
    subheadline:
      "Workflow automation, RPA, API integrations, and AI agents that eliminate repetitive operations—connecting ERP, CRM, WhatsApp, and finance systems.",
    metaTitle: "Business Automation Services | Workflow & AI Automation",
    metaDescription:
      "Business automation services—workflow automation, API integrations, AI agents, RPA. Maxwell Electrodeal reduces manual ops for Indian SMEs.",
    primaryKeyword: "Business Automation Services",
    secondaryKeywords: [
      "business automation solutions",
      "workflow automation company",
      "AI automation services",
      "process automation software",
      "enterprise automation India",
    ],
    relatedSearches: ["business automation ROI", "ERP automation", "WhatsApp business automation"],
    serviceHref: "/services/ai-solutions",
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Logistics", href: "/industries/logistics" },
      { name: "Retail", href: "/industries/retail" },
    ],
    caseStudySlugs: ["manufacturing-erp", "ai-safety-monitoring"],
    marketInsights:
      "Business automation services connect disconnected systems—auto-generating GST invoices from ERP events, routing leads from WhatsApp to CRM, and triggering quality alerts from computer vision on the factory floor.",
    industryChallenges: [
      { title: "Manual Handoffs", description: "Sales, ops, and finance re-key the same data across five systems daily." },
      { title: "Automation Without Integration", description: "Standalone RPA bots break when UI changes—API-first automation lasts." },
    ],
    recommendedApproach: ["Process mapping", "API-first integrations", "Event-driven workflows", "AI for unstructured tasks"],
    technologies: ["Node.js", "Python", "FastAPI", "AWS Lambda", "Zapier/n8n custom"],
    roiExamples: [
      { metric: "50%", label: "Less Manual Work", description: "Automation clients" },
      { metric: "24/7", label: "Workflow Uptime", description: "Monitored jobs" },
      { metric: "3 mo", label: "Payback Period", description: "Typical SME automation" },
    ],
    internalLinks: [
      { label: "AI Solutions", href: "/services/ai-solutions", description: "AI automation" },
      { label: "Automation Guide", href: "/blog/business-automation-guide", description: "Blog" },
      { label: "CRM Automation", href: "/blog/crm-automation-roi", description: "Sales automation" },
      { label: "Get Estimate", href: "/get-estimate", description: "Scope automation" },
    ],
    faqs: [
      {
        question: "What are business automation services?",
        answer:
          "Designing and building software workflows that replace manual data entry—integrating ERP, CRM, email, WhatsApp, payments, and AI to run operations automatically with audit trails.",
      },
      {
        question: "AI automation vs traditional RPA?",
        answer: "AI handles unstructured inputs (documents, images, chat); RPA handles structured UI/API tasks. Production systems combine both with monitoring.",
      },
    ],
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    accent: "#059669",
  },
};

export const solutionsData: Record<SolutionSlug, SolutionPageData> = {
  ...coreSolutionsData,
  ...geoSolutionsData,
  ...indiaGeoSolutionsData,
};

export function getSolutionBySlug(slug: string): SolutionPageData | undefined {
  return solutionsData[slug as SolutionSlug];
}

export function getAllSolutions(): SolutionPageData[] {
  return solutionSlugs.map((s) => solutionsData[s]);
}
