import { companyMetrics } from "@/lib/company-metrics";

import { businessAddress } from "@/lib/business-address";

const siteUrlRaw =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://maxwellelectrodeal.com";

/** Always apex + no trailing slash — prevents www leaking into canonicals/sitemaps. */
function normalizeSiteUrl(raw: string): string {
  try {
    const u = new URL(raw.includes("://") ? raw : `https://${raw}`);
    u.hostname = u.hostname.replace(/^www\./i, "");
    u.hash = "";
    u.search = "";
    u.pathname = "";
    return u.origin;
  } catch {
    return "https://maxwellelectrodeal.com";
  }
}

const siteUrl = normalizeSiteUrl(siteUrlRaw);

/**
 * Canonical brand disambiguation — schema, AI entity blocks, and entity FAQs.
 * Explicitly excludes printer/toner retail and maxwells.in (Maxwell Engineering Solutions).
 */
export const brandDisambiguation =
  "Maxwell Electrodeal Private Limited is a software and website engineering company (industrial B2B product catalog & RFQ websites, web apps, custom software). Not a printer, toner, or photocopier hardware retailer. Not affiliated with Maxwell Engineering Solutions (maxwells.in) or other Waghodia pelletizing-die manufacturers using a similar name." as const;

/** Single visible disclaimer — footer only. */
export const footerBrandNote =
  "Maxwell Electrodeal Private Limited engineers websites and software for manufacturers and businesses. Not a printer/toner dealer. Not Maxwell Engineering Solutions (maxwells.in)." as const;

/** Corporate contact emails — single source of truth (display, mailto, schema). */
export const corporateEmails = {
  /** Only public contact email (founder + general display use the same inbox). */
  primary: "maxwellelectrodealsystems@gmail.com",
  /** @deprecated Same as primary — kept for call sites expecting founder/general keys */
  founder: "maxwellelectrodealsystems@gmail.com",
  general: "maxwellelectrodealsystems@gmail.com",
} as const;

export const siteConfig = {
  name: "Maxwell Electrodeal",
  legalName: "Maxwell Electrodeal Private Limited",
  tagline: "Website Engineering for Manufacturers",
  description:
    "Software & Website Engineering Company — industrial B2B product catalog & RFQ websites, web apps, and custom software for manufacturers and businesses. Based in Vadodara, Gujarat; serving India and English-speaking markets.",
  url: siteUrl,
  logoPath: "/logo.webp",
  logoUrl: `${siteUrl}/logo.webp`,
  /** Primary public contact (schema, footer, forms display). */
  email: corporateEmails.general,
  founderEmail: corporateEmails.founder,
  phone: "+91 95868 68538",
  address: businessAddress.formatted,
  locale: "en_IN",
} as const;

/** E.164 digits for WhatsApp links (+91 95868 68538) */
export const WHATSAPP_NUMBER_E164 = "919586868538" as const;

export const WHATSAPP_HREF_CONTACT =
  "https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I'd%20like%20to%20discuss%20a%20project." as const;

export const WHATSAPP_HREF_FLOATING =
  "https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I'm%20interested%20in%20website%20development" as const;

/** Header / hero — speak with an engineer (not generic contact). */
export const WHATSAPP_HREF_ENGINEER =
  "https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I'd%20like%20to%20speak%20with%20an%20engineer%20about%20my%20project." as const;

/** @deprecated Use WHATSAPP_NUMBER_E164 */
export function whatsappNumberE164(): string {
  return WHATSAPP_NUMBER_E164;
}

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER_E164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Company", href: "/company" },
  { label: "Process", href: "/process" },
  { label: "Careers", href: "/careers" },
  { label: "Why Maxwell", href: "/why-maxwell" },
] as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Tools", href: "/tools" },
  { label: "Cost Guides", href: "/cost" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription: "High-performance marketing sites and web applications built for conversion and scale.",
    description:
      "We craft blazing-fast, SEO-optimized websites with modern frameworks—designed to convert visitors into qualified leads and represent your brand at enterprise standards.",
    icon: "globe",
    features: ["Next.js & React", "SEO Architecture", "Core Web Vitals 95+", "CMS Integration"],
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortDescription: "Custom software engineered for your workflows, not against them.",
    description:
      "From internal tools to customer-facing platforms, we deliver maintainable, secure software with clean architecture and documented code you fully own.",
    icon: "code",
    features: ["Custom Architecture", "API Development", "Legacy Modernization", "Full Documentation"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native-quality iOS and Android experiences users love.",
    description:
      "Cross-platform and native mobile applications with intuitive UX, offline capabilities, and seamless backend integration.",
    icon: "mobile",
    features: ["React Native & Flutter", "iOS & Android", "App Store Launch", "Push & Analytics"],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortDescription: "Practical AI that drives measurable business outcomes.",
    description:
      "LLM integrations, intelligent automation, predictive analytics, and custom AI agents—built responsibly with your data and compliance requirements in mind.",
    icon: "ai",
    features: ["LLM Integration", "Process Automation", "Predictive Analytics", "Custom AI Agents"],
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    shortDescription: "Enterprise resource planning tailored to your operations.",
    description:
      "Custom ERP systems that unify inventory, production, finance, and HR—designed around how your business actually runs.",
    icon: "erp",
    features: ["Inventory & Production", "Finance Modules", "Multi-location", "Role-based Access"],
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    shortDescription: "Customer relationships managed with precision and clarity.",
    description:
      "Sales pipelines, lead tracking, customer portals, and automation—CRM built for your sales process, not generic templates.",
    icon: "crm",
    features: ["Pipeline Management", "Lead Automation", "Customer Portals", "Analytics Dashboards"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    shortDescription: "From MVP to scale-ready subscription platforms.",
    description:
      "Multi-tenant architecture, billing integration, admin dashboards, and infrastructure that grows with your subscriber base.",
    icon: "saas",
    features: ["Multi-tenant Architecture", "Stripe Billing", "Admin Dashboards", "Usage Analytics"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription: "Secure, scalable cloud infrastructure and migration.",
    description:
      "AWS, GCP, and Azure deployments with CI/CD pipelines, monitoring, and cost optimization—built for reliability and global reach.",
    icon: "cloud",
    features: ["AWS / GCP / Azure", "CI/CD Pipelines", "DevOps & Monitoring", "Cloud Migration"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Interfaces that build trust and drive action.",
    description:
      "Research-driven design systems, wireframes, prototypes, and pixel-perfect UI that elevates your product above the competition.",
    icon: "design",
    features: ["Design Systems", "User Research", "Prototyping", "Accessibility WCAG"],
  },
] as const;

export const industries = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Digitize production floors, inventory, and supply chains with custom ERP and IoT-ready platforms.",
    stats: "40% avg. reduction in manual data entry",
    highlights: ["Production tracking", "Inventory management", "Quality control systems", "Supplier portals"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Secure patient management, telehealth, and compliance-ready healthcare applications.",
    stats: "99.9% uptime for critical systems",
    highlights: ["Patient portals", "Appointment systems", "HIPAA-aware architecture", "Telehealth platforms"],
  },
  {
    slug: "education",
    title: "Education",
    description: "LMS platforms, student portals, and admin automation for institutions that scale.",
    stats: "3x increase in platform adoption",
    highlights: ["Learning management", "Student portals", "Assessment tools", "Parent communication"],
  },
  {
    slug: "logistics",
    title: "Logistics",
    description: "Real-time tracking, fleet management, and warehouse optimization systems.",
    stats: "25% improvement in delivery efficiency",
    highlights: ["Fleet tracking", "Route optimization", "Warehouse management", "Client dashboards"],
  },
  {
    slug: "startups",
    title: "Startups",
    description: "Investor-ready MVPs and scalable SaaS products built for speed without sacrificing quality.",
    stats: "8-week average MVP delivery",
    highlights: ["Rapid MVP development", "Investor-ready demos", "Scalable architecture", "Pitch deck support"],
  },
  {
    slug: "smes",
    title: "SMEs",
    description: "Affordable digital transformation for growing businesses ready to leave spreadsheets behind.",
    stats: "ROI within 6 months average",
    highlights: ["Process automation", "Custom dashboards", "Integration services", "Phased delivery"],
  },
  {
    slug: "international",
    title: "International Clients",
    description: "Global-standard delivery with timezone overlap, clear communication, and IP protection.",
    stats: "Clients across 12+ countries",
    highlights: ["Dedicated teams", "Timezone overlap", "NDA & IP protection", "English-first delivery"],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep-dive into your business goals, users, and technical requirements.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    description: "Architecture planning, wireframes, and UI/UX that aligns with your brand.",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile sprints with weekly demos, transparent progress, and milestone delivery.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "Deployment, testing, documentation, and ongoing support as you grow.",
  },
] as const;

export const stats = [
  { value: companyMetrics.projectsCompleted, suffix: "+", label: "Projects Delivered" },
  { value: companyMetrics.clientRetentionPercent, suffix: "%", label: "Client Retention" },
  { value: companyMetrics.countriesServed, suffix: "+", label: "Countries Served" },
  { value: companyMetrics.expertEngineers, suffix: "+", label: "Expert Engineers" },
] as const;

/** @deprecated Use testimonials from @/lib/testimonials-data */

export const testimonials = [
  {
    quote:
      "We were spending ₹2L+ per year on IndiaMart and still sharing leads with competitors. Maxwell built our own catalog website — the first direct inquiry came within 30 days of going live.",
    author: "",
    role: "Director",
    company: "",
    industry: "Chemical Manufacturing",
  },
] as const;

export const caseStudies = [
  {
    slug: "drashti-chemicals",
    title: "Product Catalog Website for Drashti Chemicals, Vadodara",
    client: "Drashti Chemicals, Vadodara",
    industry: "Chemical Manufacturing",
    challenge: "Dependent on paid B2B directories for all inquiries — sharing leads with competitors, no organic visibility on Google.",
    solution: "Custom Next.js product catalog with 263 pages, 154 chemical product listings, SDS downloads, CAS number SEO, and direct WhatsApp RFQ flow.",
    results: ["263 pages indexed on Google", "154 product pages with CAS/spec SEO", "PageSpeed 94/100", "Live in 6 weeks", "First direct buyer inquiry within 30 days"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/case-studies/drashti-chemicals.jpg",
  },
] as const;

export const trustLogos = [
  "Manufacturing",
  "Healthcare",
  "Logistics",
  "Retail",
  "Construction",
  "SaaS",
  "Education",
  "Enterprise",
] as const;

export const coreValues = [
  {
    title: "Engineering Excellence",
    description: "Security, performance, and scalability built in—not bolted on.",
  },
  {
    title: "Radical Transparency",
    description: "Honest timelines, visible progress, and clear communication always.",
  },
  {
    title: "Client Success First",
    description: "We measure success by your outcomes, not lines of code shipped.",
  },
  {
    title: "Continuous Innovation",
    description: "Modern stacks and AI capabilities so you never inherit obsolete tech.",
  },
] as const;

export const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "MVPs typically ship in 6–10 weeks. Enterprise ERP and complex platforms range from 3–9 months. We provide detailed timelines during discovery with milestone-based delivery.",
  },
  {
    question: "Do I own the source code and IP?",
    answer:
      "Yes. Upon project completion and final payment, you receive 100% ownership of all source code, designs, and intellectual property. We sign NDAs as standard practice.",
  },
  {
    question: "What is your minimum project budget?",
    answer:
      "Our projects typically start from ₹50,000 for focused engagements and scale to ₹25,00,000+ for enterprise platforms. We offer phased delivery to match your budget and priorities.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We serve clients across 12+ countries with timezone overlap, English-first communication, and global-standard delivery processes.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Next.js, React, Node.js, Python, React Native, Flutter, PostgreSQL, MongoDB, AWS, GCP, and modern AI/LLM integrations. We choose the stack that best fits your requirements.",
  },
] as const;
