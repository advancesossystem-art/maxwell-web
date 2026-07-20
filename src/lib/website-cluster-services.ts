/**
 * Website Engineering cluster spokes — redesign, maintenance, security, speed/SEO, web apps.
 * Linked from the /services/website-development pillar.
 */
import type { ServicePageData } from "@/lib/services-data";

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

const clusterLinks = [
  { label: "Website Development (pillar)", href: "/services/website-development" },
  { label: "Manufacturer Websites", href: "/services/website-development-for-manufacturers" },
  { label: "Website Cost India", href: "/cost/web-development-cost-india" },
  { label: "WordPress vs Custom", href: "/compare/wordpress-vs-custom-website" },
  { label: "Portfolio", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const websiteClusterServiceSlugs = [
  "web-application-development",
  "website-redesign",
  "website-maintenance",
  "website-security",
  "website-speed-optimization",
  "website-technologies",
  "website-seo",
] as const;

export type WebsiteClusterServiceSlug = (typeof websiteClusterServiceSlugs)[number];

export const websiteClusterServicesData: Record<WebsiteClusterServiceSlug, ServicePageData> = {
  "web-application-development": {
    slug: "web-application-development",
    title: "Web Application Development",
    headline: "Web Application Development — Portals, Dashboards & Business Apps",
    subheadline:
      "Custom web applications that extend your website into portals, client dashboards, and internal tools — built on Next.js and Node.js for businesses that have outgrown static pages.",
    metaTitle: "Web Application Development Company India | Maxwell Electrodeal",
    metaDescription:
      "Web application development for businesses — portals, dashboards, and custom web apps. Next.js + Node.js. Supporting Maxwell’s website engineering practice. From ₹2L.",
    keywords: [
      "web application development India",
      "custom web app development",
      "business web application company",
      "portal development India",
      "Next.js web application",
    ],
    icon: "code",
    gradient: "from-sky-950 via-indigo-900 to-slate-950",
    accent: "#4F46E5",
    startingPrice: "₹2,00,000",
    problems: [
      {
        title: "Website alone is not enough",
        description: "Buyers need login portals, order status, dealer catalogs, or approval workflows your brochure site cannot support.",
      },
      {
        title: "Spreadsheets as the backend",
        description: "Critical processes run in Excel and WhatsApp while the public website only collects form spam.",
      },
      {
        title: "SaaS tools do not fit",
        description: "Off-the-shelf portals force awkward workarounds for your distributor or manufacturing workflows.",
      },
    ],
    solutions: [
      {
        title: "Customer & dealer portals",
        description: "Authenticated catalogs, pricing tiers, and order history for B2B buyers.",
        highlights: ["Role-based access", "Catalog sync", "Inquiry-to-order flows"],
      },
      {
        title: "Internal dashboards",
        description: "Operations visibility for sales, production, and leadership teams.",
        highlights: ["Realtime metrics", "Exportable reports", "Mobile-friendly UI"],
      },
      {
        title: "Workflow apps",
        description: "Approvals, document vaults, and status tracking tied to your website leads.",
        highlights: ["SLA alerts", "Audit trails", "API integrations"],
      },
    ],
    features: [
      { title: "Next.js + API architecture", description: "SEO-friendly public pages with secure app routes." },
      { title: "Auth & roles", description: "Enterprise-grade access control for staff, dealers, and clients." },
      { title: "Integrations", description: "CRM, ERP, WhatsApp, email, and payment gateways when needed." },
      { title: "Performance", description: "Fast loads on mobile networks common across India." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    industries: [
      { name: "Manufacturing", application: "Dealer portals and product configurators." },
      { name: "Healthcare", application: "Patient or clinic portals with booking." },
      { name: "Education", application: "Admission and content portals." },
    ],
    projects: [
      {
        title: "B2B dealer portal",
        industry: "Manufacturing",
        challenge: "Price lists shared on WhatsApp; no order history.",
        result: "Portal reduced quote turnaround from days to hours",
        tech: ["Next.js", "PostgreSQL"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    seoParagraphs: [
      "Web applications sit behind Maxwell’s website engineering core: first win buyers with a high-performance site, then extend into portals and tools when workflows demand it.",
      "We avoid building heavy apps when a well-structured website and CRM integration would convert more leads — and we say so in discovery.",
    ],
    pricingTiers: [
      { name: "Focused portal MVP", range: "₹2L – ₹6L", description: "Auth, 3–5 screens, one integration." },
      { name: "Business web app", range: "₹6L – ₹15L", description: "Roles, workflows, reporting, multiple integrations." },
      { name: "Platform", range: "₹15L+", description: "Multi-tenant or complex operational systems." },
    ],
    resourceLinks: clusterLinks,
    faqs: [
      {
        question: "Do I need a web app or just a website?",
        answer:
          "If you only need inquiries and product discovery, start with website development. Choose a web app when users must log in, see personalized data, or run workflows.",
      },
      {
        question: "How long does a web app take?",
        answer: "Focused MVP portals: 6–10 weeks. Multi-role business apps: 12–20 weeks with phased releases.",
      },
    ],
  },

  "website-redesign": {
    slug: "website-redesign",
    title: "Website Redesign",
    headline: "Website Redesign — Rebuild Slow, Outdated Business Sites",
    subheadline:
      "Redesign and rebuild business websites that fail Core Web Vitals, look dated, or stop generating inquiries — without losing SEO equity.",
    metaTitle: "Website Redesign Company India | Business Site Rebuild",
    metaDescription:
      "Website redesign for manufacturers and businesses. Migrate from WordPress/Wix to Next.js, keep rankings, improve conversion. Maxwell Electrodeal, Vadodara.",
    keywords: [
      "website redesign India",
      "website redesign company",
      "business website rebuild",
      "WordPress to Next.js migration",
      "website redesign for manufacturers",
    ],
    icon: "design",
    gradient: "from-amber-950 via-orange-900 to-slate-950",
    accent: "#D97706",
    startingPrice: "₹75,000",
    problems: [
      {
        title: "Site looks old; buyers bounce",
        description: "First impression kills trust before your sales team can talk.",
      },
      {
        title: "Speed and mobile failures",
        description: "Poor LCP/INP scores and broken mobile layouts suppress Google visibility.",
      },
      {
        title: "Fear of losing SEO",
        description: "Past redesigns tanked rankings because redirects and content were ignored.",
      },
    ],
    solutions: [
      {
        title: "Performance-first redesign",
        description: "New IA, design system, and Next.js build with measured Core Web Vitals targets.",
        highlights: ["Lighthouse goals", "Mobile-first UX", "Conversion paths"],
      },
      {
        title: "SEO-safe migration",
        description: "URL mapping, 301s, canonicals, and content carry-forward.",
        highlights: ["Redirect maps", "Schema retention", "Search Console monitoring"],
      },
      {
        title: "Catalog modernization",
        description: "Manufacturer product structures rebuilt for search and inquiry conversion.",
        highlights: ["Product templates", "RFQ CTAs", "Multilingual options"],
      },
    ],
    features: [
      { title: "Discovery audit", description: "Analytics, Search Console, and competitor gap analysis." },
      { title: "Design system", description: "Reusable components aligned to your brand." },
      { title: "Migration plan", description: "Page-by-page redirect and content strategy." },
      { title: "Post-launch SEO", description: "Indexing checks and ranking recovery support." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    industries: [
      { name: "Manufacturing", application: "Catalog and export site rebuilds." },
      { name: "Corporate", application: "Authority sites for growing SMEs." },
    ],
    projects: [
      {
        title: "Chemical manufacturer rebuild",
        industry: "Chemical",
        challenge: "WordPress site with 4s loads and thin product pages.",
        result: "Faster site with structured product SEO and inquiry growth",
        tech: ["Next.js", "Sanity"],
      },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    seoParagraphs: [
      "A redesign is not a fresh coat of paint. Maxwell treats redesign as website engineering: information architecture, performance, SEO migration, and conversion.",
      "We document what to keep, what to merge, and what to delete — the same Improve/Merge/Redirect discipline we apply to our own SEO waste cleanup.",
    ],
    pricingTiers: [
      { name: "Marketing site redesign", range: "₹75K – ₹2.5L", description: "10–20 pages, migration, CMS." },
      { name: "Catalog redesign", range: "₹2.5L – ₹8L", description: "Product architecture + SEO migration." },
    ],
    resourceLinks: [
      ...clusterLinks,
      { label: "Website Maintenance", href: "/services/website-maintenance" },
      { label: "Website Speed", href: "/services/website-speed-optimization" },
    ],
    faqs: [
      {
        question: "Will redesign hurt my Google rankings?",
        answer:
          "Not if redirects, content parity, and technical SEO are planned. We map every important URL before cutover and monitor Search Console after launch.",
      },
      {
        question: "Can you redesign a WordPress site?",
        answer:
          "Yes. Many clients migrate WordPress or Wix to Next.js for speed and security while keeping brand and content equity.",
      },
    ],
  },

  "website-maintenance": {
    slug: "website-maintenance",
    title: "Website Maintenance",
    headline: "Website Maintenance — Security, Updates & Uptime",
    subheadline:
      "Ongoing website maintenance for business sites: dependency updates, uptime monitoring, content help, and performance checks so your growth engine does not rot after launch.",
    metaTitle: "Website Maintenance Services India | Maxwell Electrodeal",
    metaDescription:
      "Website maintenance plans for business and manufacturer sites — security patches, uptime, backups, and content updates. Maxwell Electrodeal, Vadodara.",
    keywords: [
      "website maintenance India",
      "website maintenance company",
      "website support plan",
      "website uptime monitoring",
      "Next.js website maintenance",
    ],
    icon: "cloud",
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    accent: "#059669",
    startingPrice: "₹8,000/mo",
    problems: [
      {
        title: "Launch and abandon",
        description: "Plugins go stale, certificates lapse, and forms break quietly.",
      },
      {
        title: "No owner for content",
        description: "Product pages and offers go outdated while competitors stay fresh.",
      },
      {
        title: "Security anxiety",
        description: "Hack attempts and dependency CVEs with no patch process.",
      },
    ],
    solutions: [
      {
        title: "Care plans",
        description: "Monthly retainers covering updates, backups, and monitoring.",
        highlights: ["Uptime checks", "Dependency updates", "Backup restore drills"],
      },
      {
        title: "Content support",
        description: "Hours for page edits, product adds, and campaign landing tweaks.",
        highlights: ["CMS training", "SLA response", "Change log"],
      },
      {
        title: "Performance watch",
        description: "Quarterly Core Web Vitals and SEO health reviews.",
        highlights: ["Lighthouse trends", "Broken link scans", "Index coverage notes"],
      },
    ],
    features: [
      { title: "Named contact", description: "You know who owns your site after launch." },
      { title: "Security patches", description: "Framework and dependency updates on a schedule." },
      { title: "Backup & restore", description: "Documented recovery paths." },
      { title: "Analytics review", description: "Spot conversion drops early." },
    ],
    techStack: ["Next.js", "Vercel", "AWS", "GitHub Actions", "Uptime monitors"],
    industries: [
      { name: "Manufacturing", application: "Catalog freshness and export page updates." },
      { name: "Corporate", application: "News, careers, and compliance page updates." },
    ],
    projects: [],
    whyMaxwell: [...sharedWhyMaxwell],
    seoParagraphs: [
      "Maintenance is how topical authority compounds: fresh content, healthy technical SEO, and uptime that users and crawlers can trust.",
    ],
    pricingTiers: [
      { name: "Care Lite", range: "₹8K – ₹15K/mo", description: "Updates, backups, uptime, minor edits." },
      { name: "Care Growth", range: "₹15K – ₹40K/mo", description: "SEO checks, content hours, conversion tweaks." },
    ],
    resourceLinks: [
      ...clusterLinks,
      { label: "Website Security", href: "/services/website-security" },
      { label: "Website Redesign", href: "/services/website-redesign" },
    ],
    faqs: [
      {
        question: "Do you maintain sites you did not build?",
        answer:
          "Sometimes — after a technical audit. If the stack is unsafe or unmaintainable, we recommend redesign first.",
      },
    ],
  },

  "website-security": {
    slug: "website-security",
    title: "Website Security",
    headline: "Website Security — Hardening Business Sites",
    subheadline:
      "Security hardening for business websites: HTTPS, headers, auth, dependency hygiene, and incident response planning — so trust and rankings are not one breach away from collapse.",
    metaTitle: "Website Security Services India | Harden Business Sites",
    metaDescription:
      "Website security for business and manufacturer sites — headers, patches, access control, and monitoring. Maxwell Electrodeal website engineering.",
    keywords: [
      "website security India",
      "website hardening",
      "secure website development",
      "business website security",
      "Next.js security",
    ],
    icon: "cloud",
    gradient: "from-rose-950 via-red-900 to-slate-950",
    accent: "#E11D48",
    startingPrice: "₹40,000",
    problems: [
      {
        title: "Admin panels exposed",
        description: "Default CMS logins and weak passwords invite takeover.",
      },
      {
        title: "No headers or WAF",
        description: "Missing CSP, HSTS, and rate limits leave forms and APIs open.",
      },
      {
        title: "Stale dependencies",
        description: "Known CVEs in plugins and packages with no patch cadence.",
      },
    ],
    solutions: [
      {
        title: "Hardening audit",
        description: "Score your site against OWASP-aligned website risks.",
        highlights: ["Header review", "Auth review", "Dependency scan"],
      },
      {
        title: "Secure rebuild patterns",
        description: "Next.js sites with least-privilege CMS and secret management.",
        highlights: ["Env hygiene", "Role-based CMS", "Secure forms"],
      },
      {
        title: "Monitoring",
        description: "Alerting for downtime, certificate expiry, and suspicious spikes.",
        highlights: ["Uptime", "TLS watch", "Traffic anomalies"],
      },
    ],
    features: [
      { title: "Security headers", description: "CSP, HSTS, and referrer policies done right." },
      { title: "Access control", description: "MFA-ready admin access and audit logs where applicable." },
      { title: "Backup drills", description: "Prove you can restore, not just backup." },
      { title: "Incident playbook", description: "Who to call and what to freeze during a breach." },
    ],
    techStack: ["Next.js", "Cloudflare", "AWS", "GitHub Dependabot"],
    industries: [
      { name: "Healthcare", application: "Trust and compliance-sensitive sites." },
      { name: "Manufacturing", application: "Protect dealer portals and inquiry endpoints." },
    ],
    projects: [],
    whyMaxwell: [...sharedWhyMaxwell],
    seoParagraphs: [
      "Google’s helpful-content and trust signals reward sites that stay safe and available. Security is EEAT hygiene for website engineering companies.",
    ],
    pricingTiers: [
      { name: "Security audit", range: "₹40K – ₹1L", description: "Report + prioritized fixes." },
      { name: "Hardening sprint", range: "₹1L – ₹3L", description: "Implement critical remediations." },
    ],
    resourceLinks: [
      ...clusterLinks,
      { label: "Website Maintenance", href: "/services/website-maintenance" },
    ],
    faqs: [
      {
        question: "Is WordPress insecure?",
        answer:
          "WordPress can be secured, but plugin sprawl raises risk. Many B2B clients move critical marketing sites to a leaner Next.js stack for fewer moving parts.",
      },
    ],
  },

  "website-speed-optimization": {
    slug: "website-speed-optimization",
    title: "Website Speed Optimization",
    headline: "Website Speed & Core Web Vitals Optimization",
    subheadline:
      "Fix slow business websites: LCP, INP, CLS, image strategy, and JavaScript budgets — so Google and buyers both stay.",
    metaTitle: "Website Speed Optimization India | Core Web Vitals",
    metaDescription:
      "Website speed optimization for business sites — Core Web Vitals, image CDN, JS budgets. Maxwell Electrodeal, Vadodara.",
    keywords: [
      "website speed optimization India",
      "Core Web Vitals optimization",
      "improve website speed",
      "Lighthouse performance",
      "Next.js performance",
    ],
    icon: "globe",
    gradient: "from-cyan-950 via-sky-900 to-slate-950",
    accent: "#0284C7",
    startingPrice: "₹35,000",
    problems: [
      {
        title: "Slow mobile experience",
        description: "Buyers on 4G abandon before the catalog loads.",
      },
      {
        title: "SEO suppressed by CWV",
        description: "Poor LCP/INP correlates with weaker rankings and lower CTR.",
      },
      {
        title: "Heavy themes and plugins",
        description: "Page builders inject megabytes of unused CSS/JS.",
      },
    ],
    solutions: [
      {
        title: "CWV diagnostic",
        description: "Field + lab data with a ranked fix list.",
        highlights: ["CrUX / Lighthouse", "Waterfall review", "Quick wins"],
      },
      {
        title: "Optimization sprint",
        description: "Images, fonts, caching, and critical CSS/JS cuts.",
        highlights: ["Modern image formats", "CDN caching", "Code splitting"],
      },
      {
        title: "Architecture upgrade",
        description: "When the theme cannot be saved, migrate to Next.js.",
        highlights: ["SSR/SSG", "Edge caching", "Predictable performance"],
      },
    ],
    features: [
      { title: "Before/after scores", description: "Transparent Lighthouse and field metrics." },
      { title: "SEO-safe changes", description: "No ranking cliffs from reckless deletions." },
      { title: "Mobile-first", description: "Optimize for real Indian network conditions." },
      { title: "Monitoring", description: "Keep scores from regressing after launch." },
    ],
    techStack: ["Next.js", "Vercel", "Cloudflare", "WebPageTest"],
    industries: [
      { name: "Ecommerce", application: "Product listing speed." },
      { name: "Manufacturing", application: "Heavy catalog pages made fast." },
    ],
    projects: [],
    whyMaxwell: [...sharedWhyMaxwell],
    seoParagraphs: [
      "Speed is not a vanity metric. For website engineering, Core Web Vitals are part of how pages earn trust in Google Search and how AI systems prefer citeable, usable sources.",
    ],
    pricingTiers: [
      { name: "Speed audit", range: "₹35K – ₹75K", description: "Diagnostic + roadmap." },
      { name: "Optimization sprint", range: "₹75K – ₹2.5L", description: "Implement priority fixes." },
    ],
    resourceLinks: [
      ...clusterLinks,
      { label: "Website Redesign", href: "/services/website-redesign" },
      { label: "Next.js vs WordPress", href: "/compare/nextjs-vs-wordpress-business" },
    ],
    faqs: [
      {
        question: "Can you speed up WordPress?",
        answer:
          "Yes for many sites via caching, image, and plugin cleanup. If the theme is fundamentally heavy, we recommend a Next.js redesign for durable gains.",
      },
    ],
  },

  "website-technologies": {
    slug: "website-technologies",
    title: "Website Technologies",
    headline: "Website Technologies — Next.js, React, CMS & Hosting Stack",
    subheadline:
      "The technology choices behind Maxwell business websites: Next.js, React, TypeScript, headless CMS, and hosting — explained for founders who need performance, SEO, and ownership without vendor lock-in.",
    metaTitle: "Website Technologies for Business Sites | Next.js & React",
    metaDescription:
      "Website technology stack for business sites — Next.js, React, TypeScript, CMS, Vercel/AWS. Why Maxwell chooses this stack for SEO and speed.",
    keywords: [
      "website technologies",
      "Next.js website development",
      "React business website",
      "headless CMS India",
      "website tech stack",
    ],
    icon: "code",
    gradient: "from-violet-950 via-indigo-900 to-slate-950",
    accent: "#7C3AED",
    startingPrice: "₹45,000",
    problems: [
      {
        title: "Confused by tech sales pitches",
        description: "Agencies push WordPress, Webflow, or Shopify without explaining trade-offs for B2B lead gen.",
      },
      {
        title: "Locked into plugins",
        description: "Theme and plugin stacks break, slow down, and cannot be owned cleanly.",
      },
      {
        title: "SEO blocked by SPA shells",
        description: "Client-only React apps hide content from crawlers unless SSR/SSG is planned.",
      },
    ],
    solutions: [
      {
        title: "Next.js + React",
        description: "Server-rendered marketing pages with app-like interactivity where needed.",
        highlights: ["SSR/SSG", "File routing", "Image optimization"],
      },
      {
        title: "Headless CMS",
        description: "Sanity or Strapi so your team edits content without touching code.",
        highlights: ["Preview", "Roles", "Structured product data"],
      },
      {
        title: "Hosting & edge",
        description: "Vercel or AWS with CDN caching for India and global buyers.",
        highlights: ["HTTPS", "Autoscaling", "Preview deploys"],
      },
    ],
    features: [
      { title: "TypeScript", description: "Safer long-term maintenance." },
      { title: "Tailwind CSS", description: "Consistent design systems without CSS debt." },
      { title: "Schema-ready HTML", description: "Semantic markup for Google and AI extraction." },
      { title: "API integrations", description: "CRM, WhatsApp, analytics, and forms." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity", "Vercel", "AWS"],
    industries: [
      { name: "Manufacturing", application: "Catalog + RFQ stacks." },
      { name: "Corporate", application: "Multi-page authority sites." },
    ],
    projects: [],
    whyMaxwell: [...sharedWhyMaxwell],
    seoParagraphs: [
      "Technology is a means to website engineering outcomes: speed, rankings, inquiry conversion, and ownership. Maxwell defaults to Next.js for public business sites and explains when WordPress or Shopify is still the better fit.",
    ],
    pricingTiers: [
      { name: "Stack advisory", range: "Included in discovery", description: "Build-vs-buy recommendation." },
      { name: "Next.js business site", range: "₹45K+", description: "Production stack with CMS option." },
    ],
    resourceLinks: [
      ...clusterLinks,
      { label: "Next.js vs WordPress", href: "/compare/nextjs-vs-wordpress-business" },
      { label: "Next.js vs React", href: "/compare/nextjs-vs-react" },
      { label: "Website SEO", href: "/services/website-seo" },
    ],
    faqs: [
      {
        question: "Why not WordPress by default?",
        answer:
          "WordPress is fine for content blogs. For B2B catalogs and lead-gen sites, Next.js usually wins on Core Web Vitals, security surface, and long-term ownership. See our comparisons.",
      },
    ],
  },

  "website-seo": {
    slug: "website-seo",
    title: "Website SEO",
    headline: "Website SEO — Technical SEO, Content Architecture & GEO",
    subheadline:
      "SEO built into website engineering: technical foundations, topical clusters, internal linking, schema, and AI-search (GEO) structure so business pages can rank and get cited.",
    metaTitle: "Website SEO Services India | Technical SEO & GEO",
    metaDescription:
      "Website SEO for business and manufacturer sites — technical SEO, schema, topical clusters, Core Web Vitals, GEO for AI search. Maxwell Electrodeal.",
    keywords: [
      "website SEO India",
      "technical SEO company",
      "SEO for business websites",
      "manufacturer website SEO",
      "GEO AI search optimization",
    ],
    icon: "globe",
    gradient: "from-blue-950 via-sky-900 to-slate-950",
    accent: "#2563EB",
    startingPrice: "₹50,000",
    problems: [
      {
        title: "Site built, then SEO bolted on",
        description: "Agencies ship pretty pages with thin IA and no crawl plan.",
      },
      {
        title: "Keyword cannibalization",
        description: "Multiple thin pages fight each other and none rank.",
      },
      {
        title: "Invisible to AI answers",
        description: "Content lacks definitions, FAQs, and citeable answer blocks.",
      },
    ],
    solutions: [
      {
        title: "Technical SEO foundation",
        description: "Crawlability, canonicals, sitemaps, schema, and CWV.",
        highlights: ["Index hygiene", "JSON-LD", "Mobile performance"],
      },
      {
        title: "Topical cluster architecture",
        description: "Pillar + spokes for website development and industry verticals.",
        highlights: ["Internal links", "Intent mapping", "Cannibalization cleanup"],
      },
      {
        title: "GEO / AI search structure",
        description: "Definition blocks, FAQs, tables, and expert answer formatting.",
        highlights: ["Citeable passages", "EEAT signals", "Freshness"],
      },
    ],
    features: [
      { title: "SEO audit", description: "Coverage, indexing, and competitor gaps." },
      { title: "On-page engineering", description: "Titles, headings, and content depth that match intent." },
      { title: "Schema", description: "Organization, Service, FAQ, and Breadcrumb markup." },
      { title: "Measurement", description: "Search Console + conversion tracking." },
    ],
    techStack: ["Next.js", "Google Search Console", "Schema.org", "GA4"],
    industries: [
      { name: "Manufacturing", application: "Product and industrial keyword clusters." },
      { name: "Corporate", application: "Service and location SEO." },
    ],
    projects: [],
    whyMaxwell: [...sharedWhyMaxwell],
    seoParagraphs: [
      "Maxwell treats SEO as part of website engineering — not a separate afterthought. We optimize for Google and structure pages so ChatGPT, Gemini, Claude, and Perplexity can extract accurate answers.",
    ],
    pricingTiers: [
      { name: "SEO audit", range: "₹50K – ₹1.5L", description: "Technical + content roadmap." },
      { name: "SEO build-in", range: "Included with new sites", description: "Architecture + schema + IA." },
    ],
    resourceLinks: [
      ...clusterLinks,
      { label: "Website Speed", href: "/services/website-speed-optimization" },
      { label: "Website Technologies", href: "/services/website-technologies" },
      { label: "Website Cost", href: "/cost/web-development-cost-india" },
    ],
    faqs: [
      {
        question: "Do you guarantee rankings?",
        answer:
          "No ethical agency can. We build technical and content foundations that make rankings and AI citations possible, then measure progress in Search Console.",
      },
    ],
  },
};
