import Link from "next/link";
import { Container } from "@/components/ui/Container";

const corridors = [
  {
    label: "Manufacturer websites",
    href: "/services/website-development-for-manufacturers",
    blurb: "Product catalogs & owned enquiries from ₹75,000",
  },
  {
    label: "Vadodara web company",
    href: "/solutions/web-development-company-vadodara",
    blurb: "Local Next.js team · From ₹45,000",
  },
  {
    label: "Gujarat GIDC estates",
    href: "/locations/india/gujarat/gidc",
    blurb: "Makarpura · Savli · Nandesari · Halol · Ankleshwar · Vatva",
  },
  {
    label: "Website cost Vadodara",
    href: "/cost/web-development-cost-vadodara",
    blurb: "Published Starter / Professional / Growth tiers",
  },
  {
    label: "SEO company Vadodara",
    href: "/solutions/seo-company-vadodara",
    blurb: "Technical SEO & manufacturer clusters",
  },
  {
    label: "Owned enquiry channel",
    href: "/services/website-development/owned-enquiry-channel",
    blurb: "Leave paid directory rent behind",
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
          Manufacturer, Vadodara, GIDC, cost & SEO corridors
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          Direct paths to the pages buyers and procurement teams actually search — not a tool maze.
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
