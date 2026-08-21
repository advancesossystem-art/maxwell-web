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
        label: "Web Design Company",
        href: "/services/web-design",
        description: "Website designing from ₹35,000",
      },
      {
        label: "Business / MSME Websites",
        href: "/services/business-website-development",
        description: "Company websites, not only factories",
      },
      {
        label: "Ecommerce Websites",
        href: "/services/ecommerce-website-development",
        description: "Stores and B2B catalogs",
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
        description: "Starter ₹35k / Professional ₹75k planner",
      },
      {
        label: "Manufacturer Websites",
        href: "/services/website-development-for-manufacturers",
        description: "Product catalog sites starting from ₹35K",
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
        description: "Monthly AMC from ₹15,000 — SEO, updates, articles",
      },
      {
        label: "Website SEO",
        href: "/services/website-seo",
        description: "SEO services — rank the site we build",
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
