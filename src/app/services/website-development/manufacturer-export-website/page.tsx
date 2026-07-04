import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Export Website for Indian Manufacturers — Reach US, UAE, Turkey & Germany Buyers",
  description:
    "Build an export-ready website that gets your products found by international buyers in US, UAE, Turkey, Germany, and UK. Product catalog, IEC display, export compliance pages, English-optimized. From ₹75,000.",
  path: "/services/website-development/manufacturer-export-website",
  keywords: [
    "export website for Indian manufacturers",
    "international buyer website India",
    "manufacturer export website India",
    "website for exporter India",
    "B2B export website India",
    "Indian manufacturer website for global buyers",
  ],
});

export default function ManufacturerExportWebsitePage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Export-Focused Website Development
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-4xl">
            Export Website for Indian Manufacturers — Get Found by International Buyers
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            International buyers searching for Indian manufacturers use Google — not IndiaMART, not
            TradeIndia. A buyer in Dubai searching &quot;industrial chemical supplier India&quot; or
            a procurement manager in Turkey searching &quot;engineering components India&quot; will
            discover websites that are built correctly for international discovery.
          </p>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Who Is Searching for Your Products Internationally?
          </h2>
          <div className="prose prose-slate max-w-4xl">
            <p>
              India&apos;s export markets show clear demand patterns. Turkey imports major Indian
              categories including organic chemicals (~$265M/year), machinery (~$320M), vehicles
              (~$303M), and man-made fibres (~$89M). UAE buyers import Indian chemicals,
              engineering goods, textiles, and food products at high volume. Germany and the UK
              continue sourcing Indian pharma ingredients, auto components, textiles, and specialty
              manufacturing goods. US buyers search consistently for Indian chemical and engineering
              suppliers with reliable product documentation.
            </p>
            <p>
              These buyers search in English by product category, specification, and location. They
              look for terms like &quot;manufacturer India&quot;, &quot;supplier India&quot;, and
              specification-level keywords. If your digital presence is only a marketplace listing,
              you lose direct trust and direct inquiry control. An export-ready website makes your
              business discoverable, credible, and contactable on your own terms.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            What an Export-Ready Website Includes
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Product catalog in export-standard English with HS code references",
              "IEC (Import Export Code) display and DGFT registration section",
              "Certificate display: BIS, ISO, WHO-GMP, FSSAI, RCMC as relevant",
              "International inquiry form with country dropdown and currency preference",
              "Specification-level product pages international buyers search for",
              "Optional Arabic/French/German language sections for target markets",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">The Cost</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "₹75,000 / $900",
                desc: "15 pages, 50 products, export-ready inquiry flow",
              },
              {
                name: "Professional",
                price: "₹1,50,000 / $1,800",
                desc: "60 pages, 200 products, multilingual CTA structure",
              },
              {
                name: "Enterprise",
                price: "₹3,00,000+ / $3,600+",
                desc: "Unlimited products, multi-language, full export suite",
              },
            ].map((tier) => (
              <div key={tier.name} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-lg font-bold text-slate-900">{tier.name}</p>
                <p className="mt-1 text-xl font-bold text-blue-700">{tier.price}</p>
                <p className="mt-2 text-sm text-slate-600">{tier.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Real Proof</h2>
          <p className="text-slate-700 max-w-3xl">
            Drashti Chemicals is a strong proof point: a 263-page chemical supplier website, 154
            products, desktop PageSpeed 94, Google-indexed product discovery, and direct inquiries
            replacing directory dependency.
          </p>
          <Link
            href="/case-studies/drashti-chemicals"
            className="inline-flex mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            View case study →
          </Link>
        </Container>
      </section>

      <section className="py-10 border-b border-slate-100 bg-[#f8fafc]">
        <Container>
          <h2 className="font-display text-xl font-bold text-[var(--v6-text,#0f172a)] mb-4">
            Related resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                label: "Manufacturer Website Development",
                href: "/services/website-development-for-manufacturers",
              },
              {
                label: "Chemical Manufacturer Website",
                href: "/services/website-development/chemical-manufacturer",
              },
              {
                label: "Exporter / Trading Website",
                href: "/services/website-development/exporter-india",
              },
              {
                label: "International Clients Solutions",
                href: "/solutions/web-development-company-india-international",
              },
              {
                label: "Drashti Chemicals Case Study",
                href: "/case-studies/drashti-chemicals",
              },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-blue-600 hover:underline">
                {item.label} →
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <div className="max-w-2xl text-center mx-auto">
            <h2 className="font-display text-2xl font-bold mb-3">
              Ready to Build Your Export-Ready Manufacturer Website?
            </h2>
            <p className="text-slate-300 mb-8">
              Get a free estimate with country-focused recommendations for US, UAE, Turkey, Germany,
              and UK buyer discovery.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/get-estimate?service=Manufacturer+Export+Website&source=export-website-page"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
              >
                Get Free Estimate →
              </Link>
              <a
                href="https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I%20need%20an%20export-ready%20website%20for%20our%20manufacturing%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
