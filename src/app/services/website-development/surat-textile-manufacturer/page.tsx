import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Website for Textile Manufacturers in Surat | Maxwell Electrodeal",
  description:
    "Product catalog websites for fabric manufacturers, yarn suppliers, and garment exporters in Surat. Fabric swatches, MOQ, sample requests, export buyer inquiry. From ₹75,000.",
  path: "/services/website-development/surat-textile-manufacturer",
  keywords: [
    "textile manufacturer website Surat",
    "fabric manufacturer website India",
    "yarn supplier website Surat",
    "saree manufacturer website Gujarat",
    "Surat fabric exporter website",
    "grey fabric supplier website India",
    "textile catalog website Surat",
    "B2B textile website Gujarat",
  ],
});

export default function SuratTextileManufacturerPage() {
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
            <span className="text-white/80">Surat Textile</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Surat · Gujarat
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Website Development for Textile Manufacturers in Surat, Gujarat
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Surat is Asia's largest man-made fiber hub and India's largest textile market. Yet most
            Surat fabric manufacturers, yarn suppliers, and saree wholesalers operate through
            WhatsApp groups and local broker networks — with no website for international buyers to
            find them on Google.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=Textile+Manufacturer+Website&source=surat-textile"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/services/website-development/textile-manufacturer"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Textile Manufacturer Website →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Why Surat Textile Manufacturers Need a Website in 2026
          </h2>
          <div className="prose prose-slate max-w-3xl">
            <p className="text-slate-700 leading-relaxed mb-4">
              Surat produces approximately 90% of India's synthetic fabric. Fabric manufacturers,
              yarn traders, saree wholesalers, grey fabric producers, and embroidery companies
              together form one of the world's largest textile clusters. The domestic distribution
              network — local agents, broker networks, WhatsApp groups — works well for domestic
              buyers. International buyers are a different story.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              International fabric buyers from the Middle East, Africa, and Europe search Google
              for "polyester fabric manufacturer Surat" or "grey fabric supplier India". They need
              to see fabric specifications — GSM, yarn count, fiber composition, weave type — before
              they reach out. Most Surat manufacturers have no website where these specifications
              are displayed and searchable.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Maxwell builds Surat textile manufacturer websites with: fabric swatch galleries with
              GSM, count, and composition per product; sample request forms with international
              shipping fields; MOQ and pricing inquiry forms; export buyer contact forms with
              country-specific fields; and WhatsApp Business integration for instant inquiry routing.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Fabric swatch gallery with GSM, yarn count, fiber composition",
              "Sample request form with international shipping details",
              "MOQ display and bulk inquiry forms",
              "Export buyer forms with country-specific routing",
              "WhatsApp Business integration for instant response",
              "Product catalog with weave type and application details",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <span className="flex-shrink-0 text-indigo-600">✓</span>
                <p className="text-sm text-slate-700">{f}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link href="/services/website-development/textile-manufacturer" className="text-sm text-indigo-600 hover:underline">
              Textile Manufacturer Website (all India) →
            </Link>
            <Link href="/services/website-development-for-manufacturers" className="text-sm text-indigo-600 hover:underline">
              All Manufacturer Website Packages →
            </Link>
            <Link href="/blog/website-for-gujarat-manufacturer-2026" className="text-sm text-indigo-600 hover:underline">
              Gujarat Manufacturer Website Guide 2026 →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-3">
              Ready to Get International Textile Buyer Inquiries?
            </h2>
            <p className="text-slate-300 mb-8">
              Free consultation for Surat textile manufacturers. We'll scope exactly what your
              fabric catalog website would include.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-estimate?service=Textile+Manufacturer+Website"
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
