/** Main nav Services mega-menu — mirrors full-service IT positioning */

export type NavServiceLink = { label: string; href: string };
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
      { label: "Custom ERP", href: "/services/erp-development" },
      { label: "CRM Development", href: "/services/crm-development" },
      { label: "Web Development", href: "/services/website-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "Custom Software", href: "/services/custom-software-development" },
      { label: "SaaS Development", href: "/services/saas-development" },
    ],
  },
];

export const servicesNavFlatLinks: NavServiceLink[] = servicesNavGroups.flatMap((g) => g.links);
