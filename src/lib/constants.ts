import { companyMetrics } from "@/lib/company-metrics";

import { businessAddress } from "@/lib/business-address";

const siteUrl =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://maxwellelectrodeal.com";

export const siteConfig = {
  name: "Maxwell Electrodeal",
  legalName: "Maxwell Electrodeal Private Limited",
  tagline: "Powering Digital Growth",
  description:
    "India-based enterprise software development company — websites, mobile apps, ERP, CRM, SaaS, AI & cloud for businesses in Gujarat, Mumbai, Bengaluru, Delhi & worldwide.",
  url: siteUrl.replace(/\/$/, ""),
  email: "maxwellelectrodealsystems@gmail.com",
  phone: "+91 95868 68538",
  address: businessAddress.formatted,
  locale: "en_IN",
} as const;

/** E.164 digits for WhatsApp links (e.g. 919586868538) */
export function whatsappNumberE164(): string {
  return siteConfig.phone.replace(/\D/g, "");
}

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${whatsappNumberE164()}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Company", href: "/company" },
  { label: "Team", href: "/team" },
  { label: "Process", href: "/process" },
  { label: "Careers", href: "/careers" },
  { label: "Why Maxwell", href: "/why-maxwell" },
] as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Tools", href: "/tools" },
  { label: "Compare", href: "/compare" },
  { label: "Cost Guides", href: "/cost" },
  { label: "Portal", href: "/portal" },
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
      "Maxwell Electrodeal transformed our manufacturing operations. Their custom ERP reduced our manual processes by 40% within the first quarter.",
    author: "",
    role: "COO",
    company: "",
    industry: "Manufacturing",
  },
  {
    quote:
      "They delivered our SaaS MVP in 8 weeks—investor-ready, beautifully designed, and built to scale. Exactly what we needed to close our seed round.",
    author: "",
    role: "Founder & CEO",
    company: "",
    industry: "Startup",
  },
  {
    quote:
      "Professional, transparent, and technically excellent. Our healthcare portal handles 10,000+ patients with zero downtime since launch.",
    author: "",
    role: "Director",
    company: "",
    industry: "Healthcare",
  },
] as const;

export const caseStudies = [
  {
    slug: "precision-manufacturing-erp",
    title: "Custom ERP for Precision Manufacturing",
    client: "Leading manufacturing organization",
    industry: "Manufacturing",
    challenge: "Manual inventory tracking across 3 facilities causing delays and errors.",
    solution: "Unified ERP with real-time inventory, production scheduling, and supplier integration.",
    results: ["40% reduction in manual data entry", "₹12L annual cost savings", "Real-time visibility across locations"],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "/case-studies/manufacturing.jpg",
  },
  {
    slug: "flowmetrics-saas-mvp",
    title: "SaaS MVP for Analytics Startup",
    client: "Leading SaaS organization",
    industry: "Startup",
    challenge: "Need investor-ready product in 8 weeks with scalable multi-tenant architecture.",
    solution: "Full-stack SaaS with Stripe billing, admin dashboard, and usage analytics.",
    results: ["MVP delivered in 7 weeks", "$1.2M seed round closed", "500+ beta users onboarded"],
    tech: ["Next.js", "TypeScript", "Stripe", "Vercel"],
    image: "/case-studies/saas.jpg",
  },
  {
    slug: "carefirst-healthcare-portal",
    title: "Patient Portal for Healthcare Network",
    client: "Leading healthcare organization",
    industry: "Healthcare",
    challenge: "Fragmented patient experience across 15 clinic locations.",
    solution: "Unified patient portal with appointments, records access, and telehealth integration.",
    results: ["10,000+ active patients", "99.9% uptime", "60% reduction in phone inquiries"],
    tech: ["React Native", "Node.js", "MongoDB", "AWS"],
    image: "/case-studies/healthcare.jpg",
  },
  {
    slug: "logitrack-fleet-management",
    title: "Fleet Management for Logistics Company",
    client: "Leading logistics organization",
    industry: "Logistics",
    challenge: "No real-time visibility into fleet location and delivery status.",
    solution: "GPS-integrated fleet dashboard with route optimization and client tracking portal.",
    results: ["25% faster deliveries", "30% fuel cost reduction", "Real-time client updates"],
    tech: ["React", "Python", "PostgreSQL", "Google Maps API"],
    image: "/case-studies/logistics.jpg",
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
