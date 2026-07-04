import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Website for Chemical Manufacturers in Bharuch & Ankleshwar | Maxwell Electrodeal",
  description:
    "Product catalog websites for chemical manufacturers and industrial suppliers in Bharuch, Ankleshwar, and Dahej GIDC. MSDS downloads, CoA forms, export inquiry. From ₹75,000.",
  path: "/services/website-development/bharuch-ankleshwar-chemical",
  keywords: [
    "chemical manufacturer website Bharuch",
    "chemical supplier website Ankleshwar",
    "industrial chemical website GIDC",
    "Bharuch chemical company website development",
    "Ankleshwar GIDC website development",
    "Dahej chemical supplier website",
    "chemical exporter website Gujarat",
    "B2B chemical website Bharuch",
  ],
});

export default function BharuchAnkleshwarChemicalPage() {
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
            <span className="text-white/80">Bharuch-Ankleshwar Chemical</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Bharuch · Ankleshwar · Dahej GIDC
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Website Development for Chemical Manufacturers in Bharuch and Ankleshwar
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            The Bharuch-Ankleshwar-Dahej corridor is India's largest chemical manufacturing zone —
            over 2,000 chemical units, most with no standalone product catalog website. Maxwell is
            based in Vadodara, 45 minutes away, and has already built a chemical supplier website
            for the Gujarat corridor.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=Chemical+Manufacturer+Website&source=bharuch-ankleshwar"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/case-studies/drashti-chemicals"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              See Chemical Website Case Study →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            The Bharuch-Ankleshwar Chemical Corridor
          </h2>
          <div className="prose prose-slate max-w-3xl">
            <p className="text-slate-700 leading-relaxed mb-4">
              The Bharuch-Ankleshwar-Dahej corridor is India's single largest concentration of
              chemical manufacturing. The Ankleshwar GIDC and Dahej GIDC together house thousands
              of chemical units producing specialty chemicals, agrochemicals, dyes, intermediates,
              solvents, and industrial chemicals.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Despite this concentration of manufacturing, most chemical suppliers in this corridor
              have no standalone product catalog website. Buyers searching "specialty chemical
              manufacturer Ankleshwar" or "industrial chemical supplier Bharuch" on Google find
              paid B2B directory listings — not manufacturer websites. This is a significant
              competitive gap that the first manufacturers to build proper product catalog websites
              will close.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Maxwell Electrodeal is based in Vadodara — approximately 45 minutes from Bharuch.
              We have already delivered a{" "}
              <Link href="/case-studies/drashti-chemicals" className="text-indigo-600 hover:text-indigo-800 underline">
                263-page chemical supplier website for Drashti Chemicals
              </Link>
              {" "}— an industrial chemical supplier with 154 products across 47 categories. We
              understand GIDC plot addresses, GST registration requirements for chemical companies,
              and the specific compliance displays (MSDS, SDS, CoA) that industrial buyers need.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our chemical manufacturer websites include: product pages with grade specifications
              and CAS numbers, MSDS/SDS document downloads per product, Certificate of Analysis
              (CoA) request forms, hazardous material compliance notices, and export inquiry forms
              with IEC code integration. Delivery from ₹75,000 one-time with GST invoice.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "MSDS/SDS document downloads per product",
              "Certificate of Analysis (CoA) request forms",
              "Product grade / specification tables with CAS numbers",
              "Hazardous material compliance display",
              "Export inquiry forms (IEC integration)",
              "GIDC address and GST registration display",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <span className="flex-shrink-0 text-indigo-600">✓</span>
                <p className="text-sm text-slate-700">{f}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link href="/services/website-development/chemical-manufacturer" className="text-sm text-indigo-600 hover:underline">
              Chemical Manufacturer Website (all India) →
            </Link>
            <Link href="/case-studies/drashti-chemicals" className="text-sm text-indigo-600 hover:underline">
              Drashti Chemicals Case Study →
            </Link>
            <Link href="/locations/india/vadodara" className="text-sm text-indigo-600 hover:underline">
              Vadodara Office →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-3">
              Ready to Get Direct Chemical Buyer Inquiries?
            </h2>
            <p className="text-slate-300 mb-8">
              Free consultation for Bharuch and Ankleshwar chemical manufacturers. We'll tell you
              exactly what your website would include and cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-estimate?service=Chemical+Manufacturer+Website"
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
