import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "SEO Company Vadodara | From ₹50,000",
  description:
    "SEO company in Vadodara for manufacturer and business websites — technical SEO, topical clusters, GIDC locality. From ₹50,000. Next.js team. Get a quote.",
  path: "/solutions/seo-company-vadodara",
  keywords: [
    "SEO company Vadodara",
    "SEO services Vadodara",
    "manufacturer SEO Vadodara",
    "technical SEO Vadodara",
    "website SEO company Vadodara",
  ],
});

export default function SeoCompanyVadodaraPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Vadodara · SEO engineering
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            SEO Company in Vadodara — SEO services for websites that need buyers, not vanity traffic
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Technical SEO and content architecture built into website engineering — so Makarpura,
            Savli, Nandesari, and city businesses rank for product + locality searches, not only
            brand name.
          </p>
          <p className="mt-4 text-indigo-200">Websites from ₹35,000 · Website AMC from ₹15,000 includes monthly SEO</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=Website+SEO&source=seo-vadodara"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get SEO Estimate
            </Link>
            <Link
              href="/services/website-seo"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Website SEO service →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200 bg-white">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            What we optimize for Vadodara buyers
          </h2>
          <ul className="space-y-3 text-slate-700 max-w-3xl">
            <li>• Crawl hygiene, canonicals, sitemaps, and Core Web Vitals on Next.js</li>
            <li>• Product / category clusters for manufacturer catalogs</li>
            <li>• GIDC and city entity signals (internal links to estate pages)</li>
            <li>• FAQ and definition blocks structured for AI answer citation (GEO)</li>
            <li>• Search Console measurement — no fake ranking guarantees</li>
          </ul>
          <p className="mt-6 text-slate-700 max-w-3xl">
            Pair SEO with an{" "}
            <Link
              href="/services/website-development/owned-enquiry-channel"
              className="text-indigo-600 hover:underline"
            >
              owned enquiry channel
            </Link>{" "}
            and the{" "}
            <Link
              href="/solutions/web-development-company-vadodara"
              className="text-indigo-600 hover:underline"
            >
              Vadodara website development company
            </Link>{" "}
            page when you need a full rebuild.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Related corridors</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/solutions/seo-company-gujarat" className="text-indigo-600 hover:underline">
              SEO company Gujarat →
            </Link>
            <Link href="/locations/india/gujarat/gidc" className="text-indigo-600 hover:underline">
              Gujarat GIDC hub →
            </Link>
            <Link
              href="/services/website-development-for-manufacturers"
              className="text-indigo-600 hover:underline"
            >
              Manufacturer hub →
            </Link>
            <Link href="/cost/web-development-cost-vadodara" className="text-indigo-600 hover:underline">
              Vadodara website cost →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
