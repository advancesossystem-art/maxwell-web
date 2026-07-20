/** Main nav Services mega-menu — Website Engineering Company for Businesses */

export type NavServiceLink = { label: string; href: string; description?: string };
export type NavServiceGroup = { title: string; links: NavServiceLink[] };

export const servicesNavGroups: NavServiceGroup[] = [
  {
    title: "Website Engineering",
    links: [
      {
        label: "Website Development",
        href: "/services/website-development",
        description: "Business, corporate & industrial websites",
      },
      {
        label: "Manufacturer Websites",
        href: "/services/website-development-for-manufacturers",
        description: "Product catalog sites starting from ₹75K",
      },
      {
        label: "Website Cost Guide",
        href: "/cost/web-development-cost-india",
        description: "Transparent India pricing ranges",
      },
      {
        label: "Website Technologies",
        href: "/services/website-technologies",
        description: "Next.js, React, CMS & hosting stack",
      },
      {
        label: "Website Redesign",
        href: "/services/website-redesign",
        description: "Rebuild slow or outdated business sites",
      },
      {
        label: "Website Maintenance",
        href: "/services/website-maintenance",
        description: "Security, updates, and uptime",
      },
      {
        label: "Website SEO",
        href: "/services/website-seo",
        description: "Technical SEO, clusters & GEO",
      },
      {
        label: "Website Speed",
        href: "/services/website-speed-optimization",
        description: "Core Web Vitals optimization",
      },
      {
        label: "Website Security",
        href: "/services/website-security",
        description: "Hardening for business sites",
      },
      {
        label: "Chemical Manufacturer Website",
        href: "/services/website-development/chemical-manufacturer",
        description: "Vadodara-Bharuch chemical corridor specialist",
      },
      {
        label: "Ceramic Manufacturer (Morbi)",
        href: "/services/website-development/morbi-ceramic-website",
        description: "Tile catalog websites for Morbi exporters",
      },
      {
        label: "Textile Manufacturer (Surat)",
        href: "/services/website-development/surat-textile-manufacturer",
        description: "Fabric catalog websites for Surat cluster",
      },
      {
        label: "Engineering Company (Rajkot)",
        href: "/services/website-development/rajkot-engineering-company",
        description: "RFQ-first websites for Rajkot engineering firms",
      },
      {
        label: "Pharmaceutical Website",
        href: "/services/website-development/pharmaceutical-company",
        description: "WHO-GMP and API catalog websites",
      },
      {
        label: "Export Websites",
        href: "/services/website-development/manufacturer-export-website",
        description: "International buyer acquisition for Indian manufacturers",
      },
    ],
  },
  {
    title: "Web Apps & Software",
    links: [
      {
        label: "Web Application Development",
        href: "/services/web-application-development",
        description: "Custom portals, dashboards, and business apps",
      },
      {
        label: "Custom Software",
        href: "/services/custom-software-development",
        description: "Bespoke systems for growing businesses",
      },
      {
        label: "Mobile Apps",
        href: "/services/mobile-app-development",
        description: "iOS, Android, Flutter, React Native",
      },
      {
        label: "SaaS Development",
        href: "/services/saas-development",
        description: "Multi-tenant products and MVPs",
      },
      {
        label: "Custom ERP",
        href: "/services/erp-development",
        description: "Secondary — operations systems for manufacturers",
      },
      {
        label: "CRM Development",
        href: "/services/crm-development",
        description: "Secondary — sales pipelines for B2B teams",
      },
    ],
  },
  {
    title: "AI & Automation",
    links: [
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "AI Consulting", href: "/services/ai-consulting" },
      { label: "AI Agent Development", href: "/services/ai-agent-development" },
      { label: "Generative AI", href: "/services/generative-ai-development" },
      { label: "Enterprise AI", href: "/services/enterprise-ai-solutions" },
    ],
  },
  {
    title: "Cloud & IT (Supporting)",
    links: [
      { label: "Cloud Services", href: "/services/cloud-services" },
      { label: "Cloud Migration", href: "/services/cloud-migration" },
      { label: "Digital Transformation", href: "/services/digital-transformation" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Managed IT Services", href: "/services/managed-it-services" },
    ],
  },
  {
    title: "Global Clients",
    links: [
      {
        label: "International Clients",
        href: "/solutions/web-development-company-india-international",
        description: "US, UK, UAE, Turkey, Germany and more",
      },
      {
        label: "US Clients",
        href: "/solutions/web-development-company-india-usa",
        description: "USD pricing with IST/EST overlap",
      },
      {
        label: "UAE Clients",
        href: "/solutions/web-development-company-india-uae",
        description: "Middle East delivery with Gulf timezone overlap",
      },
      {
        label: "UK Clients",
        href: "/solutions/web-development-company-india-uk",
        description: "GDPR-aware builds with UK overlap hours",
      },
    ],
  },
];

export const servicesNavFlatLinks: NavServiceLink[] = servicesNavGroups.flatMap((g) => g.links);

/** Top mobile-nav shortcuts — keep in sync with Website Engineering positioning. */
export const mobileServiceShortcuts: NavServiceLink[] = [
  {
    label: "Website Development",
    href: "/services/website-development",
    description: "Business, corporate & industrial websites",
  },
  {
    label: "Manufacturer Websites",
    href: "/services/website-development-for-manufacturers",
    description: "Product catalog sites",
  },
];
