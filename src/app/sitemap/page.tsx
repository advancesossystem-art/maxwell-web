import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "HTML Sitemap — Maxwell Electrodeal",
  description: "Complete list of pages on Maxwell Electrodeal — manufacturer website development, GIDC estate SEO, industrial catalogs, RFQ systems, pricing, case studies, and blog.",
  path: "/sitemap",
});

const sections = [
  {
    title: "Core Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Pricing — Website Tiers from ₹35,000", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Request Quote", href: "/get-estimate" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Reviews & Client Work", href: "/reviews" },
      { label: "Blog", href: "/blog" },
      { label: "Process", href: "/process" },
    ],
  },
  {
    title: "Manufacturer Website Services",
    links: [
      { label: "Website Development for Manufacturers — Hub", href: "/services/website-development-for-manufacturers" },
      { label: "Industrial Website Design", href: "/services/industrial-website-design" },
      { label: "RFQ Website Development", href: "/services/rfq-website-development" },
      { label: "Industrial Catalog Development", href: "/services/industrial-catalog-development" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Web Design Company India", href: "/services/web-design" },
      { label: "Web Design Company Vadodara", href: "/solutions/web-design-company-vadodara" },
      { label: "Business / MSME Websites", href: "/services/business-website-development" },
      { label: "Business Website Vadodara", href: "/solutions/business-website-vadodara" },
      { label: "Ecommerce Websites", href: "/services/ecommerce-website-development" },
      { label: "Website Redesign", href: "/services/website-redesign" },
      { label: "Website SEO", href: "/services/website-seo" },
      { label: "WordPress → Next.js", href: "/services/wordpress-website-development" },
      { label: "Ahmedabad Website Company", href: "/solutions/website-development-company-ahmedabad" },
      { label: "Website AMC Vadodara", href: "/solutions/website-amc-vadodara" },
      { label: "Owned Enquiry Channel", href: "/services/website-development/owned-enquiry-channel" },
      { label: "Dealer Portal Development", href: "/services/dealer-portal-development" },
      { label: "Website Maintenance AMC — from ₹15,000/mo", href: "/services/website-maintenance" },
    ],
  },
  {
    title: "Industry Verticals",
    links: [
      { label: "Chemical Manufacturers", href: "/services/website-development/chemical-manufacturers" },
      { label: "Engineering & Machinery", href: "/services/website-development/engineering-machinery" },
      { label: "Pharma Equipment", href: "/services/website-development/pharma-equipment" },
      { label: "Ceramic & Tile Exporters", href: "/services/website-development/ceramic-exporters" },
      { label: "Textile Manufacturers", href: "/services/website-development/textile-manufacturer" },
      { label: "Food Processing Companies", href: "/services/website-development/food-processing-company" },
      { label: "Plastic Manufacturers", href: "/services/website-development/plastic-manufacturer" },
      { label: "Paint & Coating Companies", href: "/services/website-development/paint-coating-company" },
      { label: "Auto Parts Manufacturers", href: "/services/website-development/auto-parts-manufacturer" },
      { label: "Electrical Manufacturers", href: "/services/website-development/electrical-manufacturer" },
      { label: "Bharuch–Ankleshwar Chemical Belt", href: "/services/website-development/bharuch-ankleshwar-chemical" },
      { label: "Morbi Ceramic Website", href: "/services/website-development/morbi-ceramic-website" },
      { label: "MSME India", href: "/services/website-development/msme-india" },
      { label: "Exporter Websites India", href: "/services/website-development/exporter-india" },
      { label: "Manufacturer Export Website", href: "/services/website-development/manufacturer-export-website" },
      { label: "Surat Textile Manufacturers", href: "/services/website-development/surat-textile-manufacturer" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Chemical Manufacturing Industry", href: "/industries/chemical-manufacturing" },
    ],
  },
  {
    title: "Locations — Gujarat & India",
    links: [
      { label: "Website Development Company Vadodara", href: "/solutions/web-development-company-vadodara" },
      { label: "Website Development Company Gujarat", href: "/solutions/web-development-company-gujarat" },
      { label: "SEO Company Vadodara", href: "/solutions/seo-company-vadodara" },
      { label: "SEO Company Gujarat", href: "/solutions/seo-company-gujarat" },
      { label: "Vadodara Location Hub", href: "/locations/india/vadodara" },
      { label: "Gujarat GIDC Hub", href: "/locations/india/gujarat/gidc" },
      { label: "Makarpura GIDC", href: "/locations/india/gujarat/makarpura-gidc" },
      { label: "Nandesari GIDC", href: "/locations/india/gujarat/nandesari-gidc" },
      { label: "Savli GIDC", href: "/locations/india/gujarat/savli-gidc" },
      { label: "Ankleshwar GIDC", href: "/locations/india/gujarat/ankleshwar-gidc" },
    ],
  },
  {
    title: "Pricing & Tools",
    links: [
      { label: "Website Pricing — 3-year TCO Comparison", href: "/pricing" },
      { label: "Website Development Cost Vadodara", href: "/cost/web-development-cost-vadodara" },
      { label: "Manufacturing Website Cost", href: "/cost/manufacturing-website-cost" },
      { label: "Industrial Website Cost & RFQ Estimator (Free Tool)", href: "/tools/industrial-website-rfq-estimator" },
    ],
  },
  {
    title: "Case Studies",
    links: [
      { label: "Drashti Chemicals — Chemical Supplier Website, Vadodara", href: "/case-studies/drashti-chemicals" },
    ],
  },
  {
    title: "Blog — Manufacturer Website Guides",
    links: [
      { label: "Next.js vs WordPress for Industrial Websites", href: "/blog/nextjs-vs-wordpress-industrial-website" },
      { label: "Vadodara Manufacturers — From Directory to Next.js Catalog", href: "/blog/vadodara-manufacturers-directory-to-nextjs-catalog" },
      { label: "B2B RFQ Website Architecture for Manufacturers", href: "/blog/b2b-rfq-website-architecture-manufacturers" },
      { label: "How to Structure an Industrial Product Catalogue Online", href: "/blog/how-to-structure-industrial-product-catalogue-online" },
      { label: "GIDC Manufacturer Website Checklist — Vadodara", href: "/blog/gidc-manufacturer-website-checklist-vadodara" },
      { label: "Manufacturer Website SEO Timeline — Gujarat", href: "/blog/manufacturer-website-seo-timeline-gujarat" },
      { label: "What Your Buyers Actually Type Into Google — Gujarat 2026", href: "/blog/gujarat-manufacturer-buyers-search-google-2026" },
      { label: "GIDC Plant Google Enquiries via Owned Website", href: "/blog/gidc-plant-google-enquiries-owned-website" },
      { label: "Vadodara Manufacturers with Outdated Websites Losing Export Orders", href: "/blog/vadodara-manufacturers-outdated-websites-export-orders" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-[var(--v6-text,#0f172a)] mb-2">
        Site Map
      </h1>
      <p className="text-[var(--v6-muted,#64748b)] mb-12">
        All pages on <strong>maxwellelectrodeal.com</strong> — manufacturer website development, industrial catalogs, RFQ systems, GIDC SEO, pricing, and resources.
      </p>

      <div className="space-y-12">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-lg font-semibold text-[var(--v6-text,#0f172a)] border-b border-[var(--v6-border,#e2e8f0)] pb-2 mb-4">
              {section.title}
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-16 text-xs text-[var(--v6-muted,#94a3b8)]">
        XML sitemap:{" "}
        <Link href="/sitemap.xml" className="hover:underline">
          /sitemap.xml
        </Link>
      </p>
    </main>
  );
}
