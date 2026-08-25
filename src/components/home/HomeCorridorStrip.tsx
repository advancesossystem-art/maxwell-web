import Link from "next/link";
import { Container } from "@/components/ui/Container";

const corridors = [
  {
    label: "Vadodara web company",
    href: "/solutions/web-development-company-vadodara",
    blurb: "Local Next.js team · From ₹35,000",
  },
  {
    label: "Business websites",
    href: "/services/business-website-development",
    blurb: "Company sites that convert inquiries · From ₹35,000",
  },
  {
    label: "Manufacturer websites",
    href: "/services/website-development-for-manufacturers",
    blurb: "Product catalogs & owned enquiries from ₹75,000",
  },
  {
    label: "Industrial website design",
    href: "/services/industrial-website-design",
    blurb: "Factory-ready catalogs, specs & GIDC SEO",
  },
  {
    label: "RFQ website development",
    href: "/services/rfq-website-development",
    blurb: "MOQ, drawings & WhatsApp quote paths",
  },
  {
    label: "Website pricing",
    href: "/pricing",
    blurb: "Starter ₹35k · Pro ₹75k · Growth ₹1.5L · AMC ₹15k/mo",
  },
  {
    label: "Request a quote",
    href: "/get-estimate",
    blurb: "Name + phone · written scope in one business day",
  },
  {
    label: "Website AMC Vadodara",
    href: "/solutions/website-amc-vadodara",
    blurb: "Updates, ranking & content from ₹15,000/month",
  },
  {
    label: "SEO company Vadodara",
    href: "/solutions/seo-company-vadodara",
    blurb: "Technical SEO for business & catalog sites",
  },
] as const;

/** Primary homepage corridor links — money URLs over ERP tooling. */
export function HomeCorridorStrip() {
  return (
    <section
      aria-label="Website engineering corridors"
      className="border-b border-slate-200 bg-slate-50 py-10"
    >
      <Container>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-2">
          Start here
        </p>
        <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl max-w-2xl">
          Business, Vadodara, catalog, cost & SEO corridors
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          Direct paths to the pages buyers actually search — business sites, catalogs, pricing, and local SEO.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {corridors.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="block h-full rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-300"
              >
                <span className="font-semibold text-slate-900">{c.label}</span>
                <span className="mt-1 block text-sm text-slate-600">{c.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
