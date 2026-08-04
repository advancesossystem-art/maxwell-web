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
        label: "Industrial Website Design",
        href: "/services/industrial-website-design",
        description: "Factory catalogs, RFQ paths, GIDC SEO",
      },
      {
        label: "RFQ Website Development",
        href: "/services/rfq-website-development",
        description: "Quote carts and B2B enquiry systems",
      },
      {
        label: "Industrial Cost Estimator",
        href: "/tools/industrial-website-rfq-estimator",
        description: "Starter ₹45k / Professional ₹75k planner",
      },
      {
        label: "Manufacturer Websites",
        href: "/services/website-development-for-manufacturers",
        description: "Product catalog sites starting from ₹45K",
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
        label: "Owned Enquiry Channel",
        href: "/services/website-development/owned-enquiry-channel",
        description: "Catalog sites vs paid listings",
      },
      {
        label: "Dealer Portal Development",
        href: "/services/dealer-portal-development",
        description: "B2B login price lists & stock",
      },
      {
        label: "Gujarat GIDC Websites",
        href: "/locations/india/gujarat/gidc",
        description: "Makarpura to Vatva estate pages",
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
        href: "/services/website-development/chemical-manufacturers",
        description: "Ankleshwar / Nandesari SDS · CAS · REACH catalogs",
      },
      {
        label: "Ceramic Exporters (Morbi)",
        href: "/services/website-development/ceramic-exporters",
        description: "Tile catalogs, PEI ratings, export sites",
      },
      {
        label: "Engineering & Machinery",
        href: "/services/website-development/engineering-machinery",
        description: "RFQ-first machinery websites · Makarpura/Savli",
      },
      {
        label: "Pharma Equipment Websites",
        href: "/services/website-development/pharma-equipment",
        description: "Export-ready pharma machinery showcases",
      },
      {
        label: "Export Websites",
        href: "/services/website-development/owned-enquiry-channel",
        description: "Owned enquiry channel for exporters",
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
