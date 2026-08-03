/** Footer link columns — server-safe data (keeps Footer outside client chrome). */

export type FooterNavLink = { label: string; href: string };
export type FooterNavColumn = { title: string; links: FooterNavLink[] };

export const footerNavColumns: FooterNavColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Manufacturer Websites", href: "/services/website-development-for-manufacturers" },
      { label: "Owned Enquiry Channel", href: "/services/website-development/owned-enquiry-channel" },
      { label: "Dealer Portal Development", href: "/services/dealer-portal-development" },
      { label: "Website SEO", href: "/services/website-seo" },
      { label: "Website Cost Guide", href: "/cost/web-development-cost-india" },
      { label: "Vadodara Website Cost", href: "/cost/web-development-cost-vadodara" },
      { label: "Manufacturing Website Cost", href: "/cost/manufacturing-website-cost" },
      { label: "Vadodara Website Developer", href: "/solutions/web-development-company-vadodara" },
      { label: "SEO Company Vadodara", href: "/solutions/seo-company-vadodara" },
      { label: "SEO Company Gujarat", href: "/solutions/seo-company-gujarat" },
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
      { label: "Halol GIDC", href: "/locations/india/gujarat/halol-gidc" },
      { label: "Ankleshwar GIDC", href: "/locations/india/gujarat/ankleshwar-gidc" },
      { label: "Vatva GIDC", href: "/locations/india/gujarat/vatva-gidc" },
      { label: "Vadodara Office", href: "/locations/india/vadodara" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Founder Insights", href: "/founder-insights" },
      { label: "Company", href: "/company" },
      { label: "Process", href: "/process" },
      { label: "Engagement Models", href: "/engagement-models" },
      { label: "Reviews", href: "/reviews" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Study: Chemical Catalog", href: "/case-studies/drashti-chemicals" },
      { label: "Knowledge Center", href: "/knowledge-center" },
      { label: "Maxwell Answers", href: "/answers" },
      { label: "Blog", href: "/blog" },
      { label: "Compare", href: "/compare" },
      { label: "Cost Guides", href: "/cost" },
      { label: "Chemical Manufacturing", href: "/industries/chemical-manufacturing" },
    ],
  },
];
