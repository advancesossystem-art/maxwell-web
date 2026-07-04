import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Website for Engineering Companies in Rajkot | Maxwell Electrodeal",
  description:
    "Product catalog websites for engineering companies, machine tool manufacturers, and auto component suppliers in Rajkot, Gujarat. RFQ forms, spec sheets, ISO display. From ₹75,000.",
  path: "/services/website-development/rajkot-engineering-company",
  keywords: [
    "engineering company website Rajkot",
    "machine tool manufacturer website",
    "auto parts supplier website Rajkot",
    "precision engineering website India",
    "Rajkot engineering website development",
    "brass parts manufacturer website Rajkot",
    "CNC machining website Gujarat",
    "pump manufacturer website Rajkot",
  ],
});

export default function RajkotEngineeringCompanyPage() {
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
            <span className="text-white/80">Rajkot Engineering</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Rajkot · Gujarat
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Website Development for Engineering Companies in Rajkot, Gujarat
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Rajkot is India's engineering capital — machine tools, auto components, pump
            manufacturers, brass parts, valves, and precision CNC components. Most Rajkot
            engineering firms have no digital presence beyond a B2B directory listing. OEM buyers
            and export buyers search Google for specific component types.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=Engineering+Company+Website&source=rajkot-engineering"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/services/website-development/engineering-company"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Engineering Website →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            How Rajkot Engineering Buyers Search
          </h2>
          <div className="prose prose-slate max-w-3xl">
            <p className="text-slate-700 leading-relaxed mb-4">
              Rajkot's engineering cluster produces machine tools, auto components, pumps, valves,
              brass fittings, castings, and precision components. The city's manufacturing ecosystem
              is one of the most diverse in India. Yet most Rajkot engineering firms have no
              website that speaks the language procurement managers use.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              OEM buyers and export procurement managers search for specific components by name and
              specification: "brass valve manufacturer Rajkot", "CNC machined parts supplier India",
              "pump manufacturer Gujarat", "precision casting exporter India". When they search
              Google and find no direct manufacturer website, they fall back to B2B directories —
              where your competitors are listed alongside you.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Maxwell builds engineering company websites with part number search, tolerance and
              material specification sheets, ISO/IATF certification display, and RFQ forms with
              part number and quantity fields — the exact workflow industrial procurement uses. From
              ₹75,000 one-time with GST invoice and full code ownership.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Part number search and specification lookup",
              "Tolerance, material grade, and finish spec sheets",
              "ISO 9001 and IATF 16949 certification display",
              "RFQ form with part number and quantity fields",
              "Drawing and technical document upload/download",
              "Export inquiry with container load details",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <span className="flex-shrink-0 text-indigo-600">✓</span>
                <p className="text-sm text-slate-700">{f}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link href="/services/website-development/engineering-company" className="text-sm text-indigo-600 hover:underline">
              Engineering Company Website (all Gujarat) →
            </Link>
            <Link href="/services/website-development/auto-parts-manufacturer" className="text-sm text-indigo-600 hover:underline">
              Auto Parts Manufacturer Website →
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
              Ready to Get Direct Engineering Buyer Inquiries?
            </h2>
            <p className="text-slate-300 mb-8">
              Free consultation for Rajkot engineering companies. We'll design an RFQ-first website
              that speaks the language your buyers use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-estimate?service=Engineering+Company+Website"
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
