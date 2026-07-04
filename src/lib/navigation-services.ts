/** Main nav Services mega-menu — mirrors full-service IT positioning */

export type NavServiceLink = { label: string; href: string; description?: string };
export type NavServiceGroup = { title: string; links: NavServiceLink[] };

export const servicesNavGroups: NavServiceGroup[] = [
  {
    title: "AI & Automation",
    links: [
      { label: "AI Consulting", href: "/services/ai-consulting" },
      { label: "AI Agent Development", href: "/services/ai-agent-development" },
      { label: "Generative AI", href: "/services/generative-ai-development" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Enterprise AI", href: "/services/enterprise-ai-solutions" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
    ],
  },
  {
    title: "Cloud Services",
    links: [
      { label: "Cloud Services", href: "/services/cloud-services" },
      { label: "Cloud Migration", href: "/services/cloud-migration" },
      { label: "Managed Cloud", href: "/services/managed-cloud-services" },
      { label: "Backup & Recovery", href: "/services/cloud-backup-disaster-recovery" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    ],
  },
  {
    title: "Digital Transformation",
    links: [
      { label: "Digital Transformation", href: "/services/digital-transformation" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Microsoft 365 Migration", href: "/services/microsoft-365-migration" },
      { label: "Data Analytics", href: "/services/data-analytics" },
    ],
  },
  {
    title: "Managed IT",
    links: [
      { label: "Managed IT Services", href: "/services/managed-it-services" },
      { label: "IT Support", href: "/services/it-support-services" },
    ],
  },
  {
    title: "Software Development",
    links: [
      { label: "🌐 Website Development", href: "/services/website-development", description: "Websites for manufacturers and businesses" },
      { label: "🏭 Manufacturer Websites", href: "/services/website-development-for-manufacturers", description: "Product catalog sites starting from ₹75K" },
      { label: "⚗️ Chemical Manufacturer Website", href: "/services/website-development/chemical-manufacturer", description: "Vadodara-Bharuch chemical corridor specialist" },
      { label: "🏺 Ceramic Manufacturer (Morbi)", href: "/services/website-development/morbi-ceramic-website", description: "Tile catalog websites for Morbi exporters" },
      { label: "🧵 Textile Manufacturer (Surat)", href: "/services/website-development/surat-textile-manufacturer", description: "Fabric catalog websites for Surat cluster" },
      { label: "⚙️ Engineering Company (Rajkot)", href: "/services/website-development/rajkot-engineering-company", description: "RFQ-first websites for Rajkot engineering firms" },
      { label: "💊 Pharmaceutical Website", href: "/services/website-development/pharmaceutical-company", description: "WHO-GMP and API catalog websites" },
      { label: "🔥 Custom ERP", href: "/services/erp-development", description: "Custom ERP for Indian manufacturers" },
      { label: "CRM Development", href: "/services/crm-development", description: "CRM for chemical, pharma & manufacturing companies" },
      { label: "Custom Software", href: "/services/custom-software-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "SaaS Development", href: "/services/saas-development" },
    ],
  },
  {
    title: "Global Clients",
    links: [
      {
        label: "🌍 International Clients",
        href: "/solutions/web-development-company-india-international",
        description: "US, UK, UAE, Turkey, Germany and more",
      },
      {
        label: "🇺🇸 US Clients",
        href: "/solutions/web-development-company-india-usa",
        description: "USD pricing with IST/EST overlap",
      },
      {
        label: "🇦🇪 UAE Clients",
        href: "/solutions/web-development-company-india-uae",
        description: "Middle East delivery with Gulf timezone overlap",
      },
      {
        label: "🇬🇧 UK Clients",
        href: "/solutions/web-development-company-india-uk",
        description: "GDPR-aware builds with UK overlap hours",
      },
      {
        label: "🌐 Export Websites",
        href: "/services/website-development/manufacturer-export-website",
        description: "International buyer acquisition for Indian manufacturers",
      },
    ],
  },
];

export const servicesNavFlatLinks: NavServiceLink[] = servicesNavGroups.flatMap((g) => g.links);
