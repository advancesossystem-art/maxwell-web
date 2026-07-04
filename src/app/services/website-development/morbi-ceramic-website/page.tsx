import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Website for Ceramic Manufacturers in Morbi, Gujarat | Maxwell Electrodeal",
  description:
    "Product catalog websites for tile manufacturers, vitrified tile exporters, and sanitary ware companies in Morbi. International buyer inquiry, PEI ratings, container forms. From ₹75,000.",
  path: "/services/website-development/morbi-ceramic-website",
  keywords: [
    "ceramic manufacturer website Morbi",
    "tile exporter website Gujarat",
    "vitrified tile manufacturer website India",
    "Morbi ceramic website development",
    "tile catalog website Morbi",
    "GVT tile manufacturer website",
    "ceramic exporter website Morbi Gujarat",
    "sanitary ware website Morbi",
  ],
});

export default function MorbiCeramicWebsitePage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/website-development-for-manufacturers" className="hover:text-white transition-colors">
              Manufacturer Websites
            </Link>
            <span>/</span>
            <span className="text-white/80">Morbi Ceramic</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Morbi · Gujarat · India's Ceramic Capital
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Ceramic Manufacturer Website Development for Morbi, Gujarat
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Morbi accounts for 90% of India's ceramic exports — ₹15,000 crore annually to the US,
            France, Germany, Oman, Sri Lanka. 1,200+ ceramic units, but most international buyers
            cannot find Morbi manufacturers directly on Google.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=Ceramic+Manufacturer+Website&source=morbi-ceramic"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/services/website-development/ceramic-manufacturer"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Ceramic Manufacturer Website →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            The Morbi Opportunity: Low Competition, High Intent
          </h2>
          <div className="prose prose-slate max-w-3xl">
            <p className="text-slate-700 leading-relaxed mb-4">
              Morbi-specific keywords — "ceramic tile manufacturer Morbi", "vitrified tile exporter
              Gujarat", "GVT tile factory India" — have very low competition on Google because almost
              no Morbi manufacturer has an optimized website. The first manufacturers to build proper
              product catalog websites will rank in the top 10 within 2–4 months and own those
              rankings for 12–24 months before competitors catch up.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Export markets for Morbi ceramics include the US, France, Germany, Oman, Sri Lanka,
              and increasingly Africa and Southeast Asia. Buyers in these markets search Google in
              English for specific tile specifications — "600×600 vitrified tile manufacturer India",
              "double charged tile exporter Gujarat". If you have no English-language product catalog
              website, these buyers find someone else.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Maxwell builds Morbi ceramic websites with tile catalogs showing size, finish type
              (GVT, double charge, full body, rustic), PEI rating, slip resistance (R-value), water
              absorption, and thickness. Container inquiry forms speak the language of bulk buyers —
              20ft/40ft FCL, lead time, port of loading. BIS certification and ISO 9001 displayed
              prominently. High-resolution product photography integrated throughout.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Tile catalog with size, finish, PEI rating, slip resistance, water absorption",
              "Container inquiry form (20ft/40ft FCL, lead time, port of loading)",
              "BIS certification and ISO 9001 display",
              "High-resolution product photography integration",
              "English content optimized for international buyer searches",
              "WhatsApp Business integration for instant inquiry routing",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <span className="flex-shrink-0 text-indigo-600">✓</span>
                <p className="text-sm text-slate-700">{f}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link href="/services/website-development/ceramic-manufacturer" className="text-sm text-indigo-600 hover:underline">
              Ceramic Manufacturer Website (all India) →
            </Link>
            <Link href="/blog/website-for-ceramic-manufacturer-morbi" className="text-sm text-indigo-600 hover:underline">
              Complete Guide: Morbi Ceramic Website 2026 →
            </Link>
            <Link href="/case-studies/drashti-chemicals" className="text-sm text-indigo-600 hover:underline">
              Case Study: Gujarat Manufacturer Website →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-3">
              Ready to Get Direct International Ceramic Buyer Inquiries?
            </h2>
            <p className="text-slate-300 mb-8">
              Free consultation for Morbi ceramic manufacturers. We'll tell you exactly what your
              tile catalog website would include and how quickly it would rank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-estimate?service=Ceramic+Manufacturer+Website"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
              >
                Get Free Estimate
              </Link>
              <Link
                href="/services/website-development-for-manufacturers"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                View All Packages
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
