/** Footer link columns — money pages only (no programmatic doorway / thin hub links). */

export type FooterNavLink = { label: string; href: string };
export type FooterNavColumn = { title: string; links: FooterNavLink[] };

export const footerNavColumns: FooterNavColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Manufacturer Websites", href: "/services/website-development-for-manufacturers" },
      { label: "Industrial Website Design", href: "/services/industrial-website-design" },
      { label: "RFQ Website Development", href: "/services/rfq-website-development" },
      { label: "Industrial Catalog Development", href: "/services/industrial-catalog-development" },
      { label: "Owned Enquiry Channel", href: "/services/website-development/owned-enquiry-channel" },
      { label: "Chemical Manufacturers", href: "/services/website-development/chemical-manufacturers" },
      { label: "Engineering & Machinery", href: "/services/website-development/engineering-machinery" },
      { label: "Ceramic Exporters", href: "/services/website-development/ceramic-exporters" },
      { label: "Pharma Equipment", href: "/services/website-development/pharma-equipment" },
      { label: "Vadodara Website Company", href: "/solutions/web-development-company-vadodara" },
      { label: "Gujarat Web Development", href: "/solutions/web-development-company-gujarat" },
    ],
  },
  {
    title: "Gujarat GIDC",
    links: [
      { label: "Gujarat GIDC Hub", href: "/locations/india/gujarat/gidc" },
      { label: "Makarpura GIDC", href: "/locations/india/gujarat/makarpura-gidc" },
      { label: "Savli GIDC", href: "/locations/india/gujarat/savli-gidc" },
      { label: "Nandesari GIDC", href: "/locations/india/gujarat/nandesari-gidc" },
      { label: "Ankleshwar GIDC", href: "/locations/india/gujarat/ankleshwar-gidc" },
      { label: "Vadodara Office", href: "/locations/india/vadodara" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Request Quote", href: "/get-estimate" },
      { label: "Website AMC", href: "/services/website-maintenance" },
      { label: "SEO Company Vadodara", href: "/solutions/seo-company-vadodara" },
      { label: "Case Study: Chemical Catalog", href: "/case-studies/drashti-chemicals" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Industrial Cost Estimator", href: "/tools/industrial-website-rfq-estimator" },
      { label: "Manufacturing Website Cost", href: "/cost/manufacturing-website-cost" },
      { label: "Vadodara Website Cost", href: "/cost/web-development-cost-vadodara" },
      { label: "Next.js vs WordPress Guide", href: "/blog/nextjs-vs-wordpress-industrial-website" },
      { label: "Directory → Catalog Guide", href: "/blog/vadodara-manufacturers-directory-to-nextjs-catalog" },
      { label: "RFQ Architecture Guide", href: "/blog/b2b-rfq-website-architecture-manufacturers" },
      { label: "Buyer Search Guide 2026", href: "/blog/gujarat-manufacturer-buyers-search-google-2026" },
    ],
  },
];
