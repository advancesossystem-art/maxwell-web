import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "SEO Company Gujarat | Manufacturer SEO & Technical SEO | Maxwell Electrodeal",
  description:
    "SEO company for Gujarat manufacturers — Vadodara HQ, GIDC locality SEO, catalog clusters, technical SEO & GEO. From ₹50,000. Statewide delivery.",
  path: "/solutions/seo-company-gujarat",
  keywords: [
    "SEO company Gujarat",
    "SEO services Gujarat",
    "manufacturer SEO Gujarat",
    "Ahmedabad Vadodara SEO company",
    "GIDC SEO Gujarat",
  ],
});

export default function SeoCompanyGujaratPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Gujarat · SEO for industrial sites
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            SEO Company in Gujarat for Manufacturers
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Statewide SEO grounded in how Gujarat buyers search — product grades, GIDC estates, and
            export English — engineered into the website, not bolted on after a template launch.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=Website+SEO+Gujarat&source=seo-gujarat"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get SEO Estimate
            </Link>
            <Link
              href="/solutions/seo-company-vadodara"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              SEO company Vadodara →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Gujarat corridors we map into SEO
          </h2>
          <p className="text-slate-700 max-w-3xl leading-relaxed mb-4">
            Internal links and landing pages for Makarpura, Savli, Nandesari, Halol, Ankleshwar, and
            Vatva help Google understand industrial locality. Combine with{" "}
            <Link href="/services/website-seo" className="text-indigo-600 hover:underline">
              website SEO services
            </Link>{" "}
            and{" "}
            <Link
              href="/solutions/web-development-company-gujarat"
              className="text-indigo-600 hover:underline"
            >
              Gujarat website development
            </Link>
            .
          </p>
          <Link href="/locations/india/gujarat/gidc" className="text-indigo-600 hover:underline text-sm">
            Open Gujarat GIDC hub →
          </Link>
        </Container>
      </section>

      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Money pages</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/services/website-development-for-manufacturers"
              className="text-indigo-600 hover:underline"
            >
              Manufacturer websites →
            </Link>
            <Link href="/cost/manufacturing-website-cost" className="text-indigo-600 hover:underline">
              Manufacturing website cost →
            </Link>
            <Link
              href="/solutions/web-development-company-vadodara"
              className="text-indigo-600 hover:underline"
            >
              Vadodara web company →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
