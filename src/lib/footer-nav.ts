/** Footer link columns — money pages only (no programmatic doorway / thin hub links). */

export type FooterNavLink = { label: string; href: string };
export type FooterNavColumn = { title: string; links: FooterNavLink[] };

export const footerNavColumns: FooterNavColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Business / Corporate Websites", href: "/services/business-website-development" },
      { label: "Web Design", href: "/services/web-design" },
      { label: "Ecommerce Development", href: "/services/ecommerce-website-development" },
      { label: "Website Redesign", href: "/services/website-redesign" },
      { label: "Next.js & Tech Stack", href: "/services/website-technologies" },
      { label: "Manufacturer Websites", href: "/services/website-development-for-manufacturers" },
      { label: "Industrial Website Design", href: "/services/industrial-website-design" },
      { label: "RFQ Website Development", href: "/services/rfq-website-development" },
      { label: "Website SEO", href: "/services/website-seo" },
      { label: "Website AMC", href: "/services/website-maintenance" },
      { label: "Vadodara Website Company", href: "/solutions/web-development-company-vadodara" },
      { label: "India Website Company", href: "/solutions/web-development-company-india" },
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
      { label: "Business Website Vadodara", href: "/solutions/business-website-vadodara" },
      { label: "Ecommerce Vadodara", href: "/solutions/ecommerce-website-vadodara" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Authors & team", href: "/authors" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Request Quote", href: "/get-estimate" },
      { label: "Website AMC", href: "/services/website-maintenance" },
      { label: "SEO Company Vadodara", href: "/solutions/seo-company-vadodara" },
      { label: "Case Study: Chemical Catalog", href: "/case-studies/drashti-chemicals" },
      { label: "Case Study: Our Site Rebuild", href: "/case-studies/maxwell-website-rebuild" },
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
