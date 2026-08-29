import Link from "next/link";
import { Container } from "@/components/ui/Container";

/** Hub-and-spoke internal links for the website-development pillar. */
const SERVICE_SPOKES = [
  {
    title: "Business & corporate websites",
    href: "/services/business-website-development",
    desc: "MSME company sites, clinics, traders — from ₹35,000",
    query: "corporate website development",
  },
  {
    title: "Next.js & tech stack",
    href: "/services/website-technologies",
    desc: "SSR, React, headless CMS — why we build this way",
    query: "nextjs web development services",
  },
  {
    title: "Ecommerce development",
    href: "/services/ecommerce-website-development",
    desc: "UPI stores or B2B RFQ catalogs",
    query: "ecommerce website development",
  },
  {
    title: "Website redesign",
    href: "/services/website-redesign",
    desc: "Rebuild slow WordPress — keep domain, fix speed",
    query: "website redesign company",
  },
  {
    title: "Web design",
    href: "/services/web-design",
    desc: "Design + development as one build",
    query: "web design company India",
  },
  {
    title: "Manufacturer catalogs",
    href: "/services/website-development-for-manufacturers",
    desc: "GIDC product SEO + RFQ — our specialty depth",
    query: "manufacturer website development",
  },
] as const;

const GEO_SPOKES = [
  { label: "Vadodara web company", href: "/solutions/web-development-company-vadodara" },
  { label: "Business website Vadodara", href: "/solutions/business-website-vadodara" },
  { label: "India web company", href: "/solutions/web-development-company-india" },
  { label: "Website cost India", href: "/cost/web-development-cost-india" },
  { label: "Drashti case study", href: "/case-studies/drashti-chemicals" },
  { label: "Our SEO rebuild proof", href: "/case-studies/maxwell-website-rebuild" },
] as const;

export function ServiceSpokeSection() {
  return (
    <section className="border-t border-[var(--v6-border)] bg-slate-50 py-16">
      <Container>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          Website services — pick your path
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          One pillar, six spokes. Same Vadodara team and published pricing — different page types
          depending on whether you sell services, SKUs, or both.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_SPOKES.map((spoke) => (
            <Link
              key={spoke.href}
              href={spoke.href}
              className="rounded-xl border border-slate-200 bg-white p-4 hover:border-indigo-300 transition-colors"
            >
              <p className="text-sm font-semibold text-indigo-700">{spoke.title} →</p>
              <p className="mt-1 text-sm text-slate-600">{spoke.desc}</p>
              <p className="mt-2 text-xs text-slate-400">{spoke.query}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {GEO_SPOKES.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-indigo-700 hover:border-indigo-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
