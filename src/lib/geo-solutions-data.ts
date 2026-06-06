import type { SolutionPageData } from "./solutions-types";

type GeoMarket = "usa" | "uae";

type GeoServiceKey = "web" | "mobile" | "custom-software";

const geoBase: Record<
  GeoServiceKey,
  {
    serviceHref: string;
    technologies: string[];
    caseStudySlugs: string[];
    industryLinks: { name: string; href: string }[];
  }
> = {
  web: {
    serviceHref: "/services/website-development",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    caseStudySlugs: ["educational-portal"],
    industryLinks: [
      { name: "Retail", href: "/industries/retail" },
      { name: "Healthcare", href: "/industries/healthcare" },
    ],
  },
  mobile: {
    serviceHref: "/services/mobile-app-development",
    technologies: ["React Native", "Flutter", "Node.js", "Firebase", "AWS"],
    caseStudySlugs: ["healthcare-management", "logistics-platform"],
    industryLinks: [
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Logistics", href: "/industries/logistics" },
    ],
  },
  "custom-software": {
    serviceHref: "/services/custom-software-development",
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
    caseStudySlugs: ["construction-platform", "healthcare-management"],
    industryLinks: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Healthcare", href: "/industries/healthcare" },
    ],
  },
};

function buildGeoSolution(
  key: GeoServiceKey,
  market: GeoMarket,
  page: Omit<
    SolutionPageData,
    "slug" | "serviceHref" | "technologies" | "caseStudySlugs" | "industryLinks" | "gradient" | "accent"
  > & { slug: string },
): SolutionPageData {
  const base = geoBase[key];
  const accents = { web: "#06B6D4", mobile: "#10B981", "custom-software": "#2563EB" } as const;
  const gradients = {
    web: "from-cyan-950 via-blue-900 to-slate-950",
    mobile: "from-emerald-950 via-teal-900 to-slate-950",
    "custom-software": "from-slate-950 via-blue-950 to-indigo-950",
  } as const;

  return {
    ...page,
    serviceHref: base.serviceHref,
    technologies: base.technologies,
    caseStudySlugs: base.caseStudySlugs,
    industryLinks: base.industryLinks,
    gradient: gradients[key],
    accent: accents[key],
  };
}

export const geoSolutionSlugs = [
  "web-development-company-usa",
  "web-development-company-uae",
  "mobile-app-development-company-usa",
  "mobile-app-development-company-uae",
  "custom-software-development-company-usa",
  "custom-software-development-company-uae",
] as const;

export type GeoSolutionSlug = (typeof geoSolutionSlugs)[number];

export const geoSolutionsData: Record<GeoSolutionSlug, SolutionPageData> = {
  "web-development-company-usa": buildGeoSolution("web", "usa", {
    slug: "web-development-company-usa",
    title: "Web Development Company USA",
    headline: "Custom Web Development Company for USA Startups & SMBs",
    subheadline:
      "Next.js websites and web apps for US small businesses—fast Core Web Vitals, SEO-ready architecture, and offshore value from an India-based engineering team.",
    metaTitle: "Web Development Company USA | Custom Sites for Startups & SMBs",
    metaDescription:
      "Hire a custom web development company for US startups & SMBs. Next.js, React, MERN stack, affordable offshore delivery. Maxwell Electrodeal — book a free estimate.",
    primaryKeyword: "web development company USA",
    secondaryKeywords: [
      "custom web development company",
      "hire web developers for startup",
      "web development agency for small business",
      "Next.js development agency",
      "React.js development company",
      "affordable web development outsourcing",
    ],
    relatedSearches: [
      "custom website development for ecommerce",
      "web app development company for SMBs",
      "MERN stack development services",
      "how much does a custom website cost in the US",
    ],
    marketInsights:
      "Custom web development is the process of building websites and web applications tailored to a business's brand, workflows, and growth goals—not generic templates. For US SMBs, offshore partners with Next.js expertise typically deliver 40–60% cost savings versus US-only agencies while meeting Core Web Vitals and SEO standards.",
    industryChallenges: [
      {
        title: "US agency rates vs startup budgets",
        description:
          "Boutique US web shops charge $150–$250/hr—prohibitive for pre-seed and SMB marketing sites that still need enterprise-quality performance.",
      },
      {
        title: "SEO & speed ignored in cheap builds",
        description:
          "Template sites fail Google rankings and AI citations because LCP, schema, and semantic HTML are afterthoughts.",
      },
    ],
    recommendedApproach: [
      "Discovery workshop aligned to US buyer journey",
      "SEO-first Next.js architecture",
      "Conversion CTAs + analytics (GA4)",
      "Phased launch with US timezone standups",
    ],
    roiExamples: [
      { metric: "95+", label: "Lighthouse Score", description: "Performance target" },
      { metric: "40–60%", label: "Cost vs US Agency", description: "Offshore delivery" },
      { metric: "3×", label: "Organic Traffic Potential", description: "Technical SEO foundation" },
    ],
    internalLinks: [
      { label: "Website Service", href: "/services/website-development", description: "Full capabilities" },
      { label: "USA Delivery Hub", href: "/locations/usa", description: "US client model" },
      { label: "Get Estimate", href: "/get-estimate", description: "Free scoped quote" },
      { label: "Book Consultation", href: "/book-consultation", description: "Strategy call" },
    ],
    faqs: [
      {
        question: "How much does custom web development cost for a US startup?",
        answer:
          "Marketing sites for US startups typically range $8,000–$35,000; custom web apps $25,000–$80,000+ depending on integrations, auth, and CMS. Maxwell provides milestone quotes after a 30-minute discovery call.",
      },
      {
        question: "How to hire a web development company for a small business?",
        answer:
          "Evaluate portfolio (Core Web Vitals, SEO), clarify IP ownership, confirm US timezone overlap, and request a fixed-scope MVP quote. Offshore teams with Next.js specialisation often deliver faster ROI for SMBs.",
      },
      {
        question: "Why choose Next.js for a business website in 2026?",
        answer:
          "Next.js combines server rendering for SEO, static performance for marketing pages, and API routes for lead capture—ideal for B2B sites that must rank and convert.",
      },
      {
        question: "How long does custom website development take?",
        answer:
          "SMB marketing sites: 6–10 weeks. E-commerce or customer portals: 10–16 weeks. We run weekly demos in US-friendly hours.",
      },
      {
        question: "Do you sign NDAs and transfer full code ownership?",
        answer:
          "Yes. US clients receive 100% IP ownership, Git repository access, and documentation at handoff.",
      },
      {
        question: "Can you build ecommerce websites for US markets?",
        answer:
          "Yes—Stripe, tax-ready checkout flows, inventory sync, and SEO product architecture for US ecommerce SMBs.",
      },
    ],
  }),

  "web-development-company-uae": buildGeoSolution("web", "uae", {
    slug: "web-development-company-uae",
    title: "Web Development Company UAE",
    headline: "Affordable Web Development Services in Dubai & UAE",
    subheadline:
      "Corporate websites and web applications for UAE SMBs and startups—English-first, mobile-optimised, SEO-ready, delivered with India–UAE timezone overlap.",
    metaTitle: "Web Development Company UAE | Dubai Web Development Services",
    metaDescription:
      "Web development services Dubai & UAE for SMBs and startups. Custom websites, Next.js, ecommerce. Maxwell Electrodeal — affordable offshore delivery, free quote.",
    primaryKeyword: "web development company UAE",
    secondaryKeywords: [
      "web development services Dubai",
      "affordable web development UAE",
      "custom web development company",
      "website development company Dubai",
      "hire web developers UAE",
    ],
    relatedSearches: [
      "web development cost Dubai",
      "best web development company UAE",
      "corporate website Dubai",
    ],
    marketInsights:
      "Web development services in the UAE span bilingual corporate sites, ecommerce for Gulf markets, and lead-generation platforms for free-zone startups. Maxwell combines Vadodara engineering with delivery windows suited to Gulf Standard Time.",
    industryChallenges: [
      {
        title: "Premium local agency pricing",
        description: "Dubai agency retainers often exceed AED 40K for brochure sites—heavy for SMBs validating product-market fit.",
      },
      {
        title: "Mobile-first Gulf audiences",
        description: "70%+ UAE traffic is mobile; sites must load under 2s on 4G and support Arabic/English when required.",
      },
    ],
    recommendedApproach: [
      "Mobile-first responsive design",
      "Gulf timezone collaboration",
      "WhatsApp & email lead capture",
      "Optional Arabic RTL support",
    ],
    roiExamples: [
      { metric: "<2s", label: "Mobile LCP Target", description: "Gulf mobile users" },
      { metric: "GST+4", label: "Timezone Overlap", description: "India–UAE delivery" },
      { metric: "35%", label: "More Leads", description: "Conversion-focused UX" },
    ],
    internalLinks: [
      { label: "Website Service", href: "/services/website-development", description: "Capabilities" },
      { label: "UAE Hub", href: "/locations/uae", description: "Gulf delivery" },
      { label: "Contact", href: "/contact", description: "Speak with sales" },
    ],
    faqs: [
      {
        question: "How much does website development cost in Dubai?",
        answer:
          "Corporate websites for UAE SMBs typically range AED 15,000–60,000 ($4,000–$16,000) depending on pages, ecommerce, and integrations. We quote in AED or USD after discovery.",
      },
      {
        question: "Do you work with UAE free-zone startups?",
        answer:
          "Yes. We support mainland and free-zone companies with marketing sites, investor decks, and MVP web apps.",
      },
      {
        question: "Can you deliver Arabic and English websites?",
        answer:
          "Yes. We implement bilingual RTL/LTR architectures with SEO hreflang for UAE and wider GCC discovery.",
      },
      {
        question: "How long does web development take for a UAE business?",
        answer:
          "Standard corporate sites: 6–8 weeks. Ecommerce or portals: 10–14 weeks with weekly progress reviews.",
      },
      {
        question: "What is custom web development?",
        answer:
          "Custom web development means designing and coding a site or web app around your business workflows and brand—not reskinning a template. It improves SEO, conversion, and scalability versus DIY builders.",
      },
    ],
  }),

  "mobile-app-development-company-usa": buildGeoSolution("mobile", "usa", {
    slug: "mobile-app-development-company-usa",
    title: "Mobile App Development Company USA",
    headline: "Mobile App Development Company for US Startups",
    subheadline:
      "iOS, Android, and cross-platform apps for US SMBs—MVP to App Store launch with React Native & Flutter, offshore cost efficiency, US timezone support.",
    metaTitle: "Mobile App Development Company USA | iOS & Android for Startups",
    metaDescription:
      "Mobile app development company USA — iOS, Android, Flutter, React Native, MVP apps for startups. Hire app developers offshore. Maxwell Electrodeal.",
    primaryKeyword: "mobile app development company USA",
    secondaryKeywords: [
      "app development company USA",
      "hire app developers",
      "iOS Android app development",
      "MVP app development for startups",
      "cross-platform app development services",
      "Flutter app development company",
    ],
    relatedSearches: [
      "mobile app development cost USA",
      "React Native development company",
      "startup app development agency",
    ],
    marketInsights:
      "Mobile app development for US startups means shipping iOS and Android experiences that validate product-market fit quickly—often via cross-platform MVPs in 10–14 weeks. Offshore teams reduce burn while maintaining App Store quality bars.",
    industryChallenges: [
      {
        title: "Dual-platform budget pressure",
        description: "Native iOS + Android doubles US dev costs; cross-platform saves 35–45% when architecture is chosen early.",
      },
      {
        title: "App Store rejection risk",
        description: "Privacy policies, payment rules, and performance issues delay launches without experienced submission support.",
      },
    ],
    recommendedApproach: [
      "MVP scope workshop",
      "React Native or Flutter recommendation",
      "App Store & Play Store submission",
      "Analytics + crash reporting day one",
    ],
    roiExamples: [
      { metric: "10–14 wk", label: "MVP Timeline", description: "Startup MVPs" },
      { metric: "4.8★", label: "Store Rating Target", description: "Healthcare client pattern" },
      { metric: "40%", label: "Cross-Platform Savings", description: "vs dual native" },
    ],
    internalLinks: [
      { label: "Mobile Service", href: "/services/mobile-app-development", description: "Service details" },
      { label: "USA Hub", href: "/locations/usa", description: "US delivery" },
      { label: "Project Calculator", href: "/project-calculator", description: "Estimate cost" },
    ],
    faqs: [
      {
        question: "What is the cost of mobile app development in the USA?",
        answer:
          "US-market MVPs typically range $25,000–$60,000 offshore; full-featured apps $60,000–$150,000+. Maxwell quotes fixed milestones after feature prioritisation.",
      },
      {
        question: "How long does mobile app development take?",
        answer:
          "MVPs: 10–14 weeks. Enterprise apps with offline sync and integrations: 4–6 months phased.",
      },
      {
        question: "Flutter or React Native for a US startup?",
        answer:
          "Both ship to iOS and Android from one codebase. We recommend based on team skills, native module needs, and performance profiling in week one.",
      },
      {
        question: "Do you handle App Store and Google Play submission?",
        answer:
          "Yes—including privacy manifests, screenshots, ASO basics, and review response.",
      },
      {
        question: "Can you build MVP apps for investor demos?",
        answer:
          "Yes. We prioritise core flows, auth, and analytics for pitch-ready builds in under 12 weeks.",
      },
      {
        question: "What does a mobile app development company do?",
        answer:
          "A mobile app development company designs, builds, tests, and launches iOS/Android applications—including UX, backend APIs, store submission, and post-launch support.",
      },
    ],
  }),

  "mobile-app-development-company-uae": buildGeoSolution("mobile", "uae", {
    slug: "mobile-app-development-company-uae",
    title: "Mobile App Development UAE",
    headline: "Mobile App Development Company in Dubai & UAE",
    subheadline:
      "Consumer and business apps for UAE startups—cross-platform delivery, Gulf timezone collaboration, App Store ready.",
    metaTitle: "Mobile App Development UAE | App Developers Dubai",
    metaDescription:
      "Mobile app development UAE & Dubai for startups and SMBs. iOS, Android, Flutter, MVP apps. Maxwell Electrodeal — offshore value, Gulf timezone delivery.",
    primaryKeyword: "mobile app development UAE",
    secondaryKeywords: [
      "app development company UAE",
      "mobile app development Dubai",
      "app developers for startups",
      "Flutter app development company",
      "cross-platform app development services",
    ],
    relatedSearches: [
      "mobile app development cost UAE",
      "app development company Dubai",
      "hire app developers UAE",
    ],
    marketInsights:
      "UAE startups and SMBs use mobile apps for customer loyalty, field operations, and marketplace models. Maxwell delivers Gulf-friendly hours, English-first UX, and optional Arabic localisation.",
    industryChallenges: [
      {
        title: "High local development rates",
        description: "Dubai app agencies price MVPs at AED 80K+—challenging for early-stage founders.",
      },
      {
        title: "Connectivity & offline needs",
        description: "Field and logistics apps require offline-first sync for varied Gulf network conditions.",
      },
    ],
    recommendedApproach: [
      "Cross-platform MVP",
      "Push notifications & deep links",
      "Payment gateway integration",
      "Gulf timezone sprints",
    ],
    roiExamples: [
      { metric: "8–12 wk", label: "MVP Delivery", description: "Startup apps" },
      { metric: "10K+", label: "User Scale Pattern", description: "Healthcare portal" },
      { metric: "35%", label: "Cost Savings", description: "Offshore vs local" },
    ],
    internalLinks: [
      { label: "Mobile Service", href: "/services/mobile-app-development", description: "Capabilities" },
      { label: "UAE Hub", href: "/locations/uae", description: "Gulf clients" },
      { label: "Book Consultation", href: "/book-consultation", description: "Free call" },
    ],
    faqs: [
      {
        question: "How much does mobile app development cost in UAE?",
        answer:
          "UAE-focused MVPs typically range AED 45,000–120,000 depending on features, payments, and admin panels. Offshore delivery lowers cost 30–40% versus Dubai-only shops.",
      },
      {
        question: "How long does mobile app development take?",
        answer:
          "Simple MVPs: 8–12 weeks. Multi-role apps with backend: 14–20 weeks.",
      },
      {
        question: "Do you build apps for iOS and Android?",
        answer:
          "Yes—via React Native or Flutter so UAE startups launch on both stores from one codebase.",
      },
      {
        question: "Can you integrate UAE payment gateways?",
        answer:
          "Yes—Stripe, Telr, PayTabs, and Apple/Google Pay patterns for Gulf ecommerce and subscription apps.",
      },
      {
        question: "What is cross-platform app development?",
        answer:
          "Cross-platform development uses one codebase (Flutter/React Native) to ship iOS and Android apps simultaneously—reducing cost and time versus separate native teams.",
      },
    ],
  }),

  "custom-software-development-company-usa": buildGeoSolution("custom-software", "usa", {
    slug: "custom-software-development-company-usa",
    title: "Custom Software Development Company USA",
    headline: "Offshore Custom Software Development for US Companies",
    subheadline:
      "Dedicated development teams building bespoke software for US SMBs—workflow automation, integrations, and enterprise apps with full IP ownership.",
    metaTitle: "Custom Software Development Company USA | Offshore Software Team",
    metaDescription:
      "Custom software development company for US SMBs. Offshore software development, dedicated developers, enterprise apps. Maxwell Electrodeal — India HQ, US delivery.",
    primaryKeyword: "custom software development company USA",
    secondaryKeywords: [
      "offshore software development USA",
      "software outsourcing company",
      "dedicated development team",
      "software development for small business",
      "enterprise software development services",
      "hire dedicated software developers",
    ],
    relatedSearches: [
      "offshore development team USA",
      "custom software vs SaaS",
      "software development outsourcing cost",
    ],
    marketInsights:
      "Custom software development is building applications tailored to your workflows—unlike SaaS that forces process change. US SMBs increasingly offshore to India for 50%+ savings while keeping US product ownership and security reviews.",
    industryChallenges: [
      {
        title: "SaaS doesn't fit unique workflows",
        description: "Spreadsheets and Zapier break when operations scale; bespoke software captures competitive process.",
      },
      {
        title: "US hiring timelines",
        description: "Senior full-stack hires take 3–6 months; dedicated offshore teams start in 2–3 weeks.",
      },
    ],
    recommendedApproach: [
      "Discovery & process mapping",
      "Dedicated squad (PM + engineers)",
      "API-first integrations",
      "SOC-friendly documentation",
    ],
    roiExamples: [
      { metric: "50%+", label: "Cost vs US Hire", description: "Offshore squad" },
      { metric: "100%", label: "IP Ownership", description: "Your repository" },
      { metric: "2–3 wk", label: "Team Kickoff", description: "Dedicated developers" },
    ],
    internalLinks: [
      { label: "Custom Software Service", href: "/services/custom-software-development", description: "Service page" },
      { label: "USA Hub", href: "/locations/usa", description: "US clients" },
      { label: "Custom vs SaaS Guide", href: "/blog/custom-software-vs-saas", description: "Decision framework" },
    ],
    faqs: [
      {
        question: "What does a custom software development company do?",
        answer:
          "They analyse your business processes, design architecture, build and test software, integrate with existing tools, and hand over documented code with full IP ownership.",
      },
      {
        question: "Custom software vs off-the-shelf software—what's the difference?",
        answer:
          "Off-the-shelf (SaaS) is faster to start but forces your team to adapt. Custom software mirrors your workflow, integrates deeply, and avoids per-seat fees at scale.",
      },
      {
        question: "How much does custom software development cost for a US small business?",
        answer:
          "Focused tools start around $15,000–$30,000; multi-module platforms $50,000–$150,000+. Offshore delivery typically reduces cost 40–60% versus US-only firms.",
      },
      {
        question: "What is offshore software development for US companies?",
        answer:
          "US companies hire engineering teams in countries like India for lower rates and faster scaling, while retaining product direction, code ownership, and US legal contracts.",
      },
      {
        question: "Do you provide dedicated development teams?",
        answer:
          "Yes—monthly dedicated squads with US overlap standups, sprint demos, and direct Slack access.",
      },
      {
        question: "Can you integrate with US tools (Salesforce, QuickBooks, Stripe)?",
        answer:
          "Yes. API integrations with CRMs, accounting, payments, and legacy databases are standard in our US client work.",
      },
    ],
  }),

  "custom-software-development-company-uae": buildGeoSolution("custom-software", "uae", {
    slug: "custom-software-development-company-uae",
    title: "Custom Software Development UAE",
    headline: "Custom Software Development Company in Dubai & UAE",
    subheadline:
      "Bespoke business software for UAE enterprises and startups—operations platforms, integrations, and automation with Gulf timezone delivery.",
    metaTitle: "Custom Software Development Dubai | UAE Software Company",
    metaDescription:
      "Custom software development Dubai & UAE. Business software, workflow automation, dedicated developers. Maxwell Electrodeal — affordable offshore engineering.",
    primaryKeyword: "custom software development Dubai",
    secondaryKeywords: [
      "custom software development UAE",
      "software development company UAE",
      "enterprise software development services",
      "software development for small business",
      "dedicated development team",
    ],
    relatedSearches: [
      "software development cost Dubai",
      "IT outsourcing UAE",
      "business automation software UAE",
    ],
    marketInsights:
      "UAE businesses adopt custom software when ERP templates and regional SaaS tools fail to handle multi-entity trade, logistics, or compliance workflows. Maxwell delivers English-first documentation with GST+4 collaboration windows.",
    industryChallenges: [
      {
        title: "Multi-entity operations",
        description: "Free-zone and mainland entities need unified reporting custom ERPs rarely provide out of the box.",
      },
      {
        title: "Integration with legacy finance",
        description: "Operations teams need APIs bridging spreadsheets, WhatsApp sales, and accounting systems.",
      },
    ],
    recommendedApproach: [
      "Workflow discovery workshops",
      "Modular phased rollout",
      "Role-based access & audit logs",
      "Arabic/English UI when required",
    ],
    roiExamples: [
      { metric: "30%", label: "Ops Time Saved", description: "Automation clients" },
      { metric: "99.9%", label: "Uptime Target", description: "Cloud deployment" },
      { metric: "100%", label: "Code Ownership", description: "UAE clients" },
    ],
    internalLinks: [
      { label: "Software Service", href: "/services/custom-software-development", description: "Overview" },
      { label: "UAE Hub", href: "/locations/uae", description: "Location page" },
      { label: "Get Estimate", href: "/get-estimate", description: "Project quote" },
    ],
    faqs: [
      {
        question: "How much does custom software development cost in UAE?",
        answer:
          "Department-level tools often start AED 55,000–150,000; enterprise platforms AED 200,000+. We provide phased quotes in AED or USD.",
      },
      {
        question: "Why custom software vs SaaS for UAE SMBs?",
        answer:
          "When trade, logistics, or approval workflows are unique to Gulf operations, custom software avoids expensive SaaS workarounds and per-seat scaling costs.",
      },
      {
        question: "Do you offer dedicated developers for UAE clients?",
        answer:
          "Yes—embedded engineers with daily standups aligned to Gulf business hours.",
      },
      {
        question: "How long does enterprise software development take?",
        answer:
          "First production module: 10–14 weeks. Full platform rollouts: 4–9 months in phases.",
      },
      {
        question: "What is software development for small business?",
        answer:
          "It is building affordable custom tools—inventory, CRM, portals, automation—that replace spreadsheets as UAE SMBs scale beyond manual processes.",
      },
    ],
  }),
};
