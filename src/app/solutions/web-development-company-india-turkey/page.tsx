import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

const canonical = `${siteConfig.url}/solutions/web-development-company-india-turkey`;
const usaUrl = `${siteConfig.url}/solutions/web-development-company-india-usa`;
const ukUrl = `${siteConfig.url}/solutions/web-development-company-india-uk`;
const uaeUrl = `${siteConfig.url}/solutions/web-development-company-india-uae`;

export const metadata: Metadata = {
  title: "Web Development Company India for Turkey | Maxwell Electrodeal",
  description:
    "Maxwell Electrodeal builds websites and B2B export platforms for Turkish businesses and Indian manufacturers targeting Turkey. USD pricing. English and Turkish content support. Free discovery call.",
  alternates: {
    canonical,
    languages: {
      "en-US": usaUrl,
      "en-GB": ukUrl,
      "en-AE": uaeUrl,
    },
  },
  openGraph: {
    title: "Web Development Company India for Turkey | Maxwell Electrodeal",
    description:
      "Websites and export-focused platforms for Turkish businesses and Indian exporters targeting Turkey.",
    url: canonical,
    siteName: "Maxwell Electrodeal",
    locale: "en_TR",
    type: "website",
  },
};

export default function TurkeyInternationalPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Turkey-Focused Delivery
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-4xl">
            Web Development Company in India for Turkish Businesses and Exporters
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            We serve two audiences here: Turkish businesses outsourcing web/software work to India,
            and Indian manufacturers building export-ready websites to reach Turkish buyers directly.
          </p>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Audience 1: Turkish Businesses Outsourcing to India
          </h2>
          <div className="prose prose-slate max-w-4xl">
            <p>
              India-Turkey trade links continue to strengthen, and Turkish companies increasingly use
              Indian engineering partners for cost-efficient web and software delivery. Maxwell builds
              corporate websites, B2B portals, and custom operational tools using Next.js, React, and
              TypeScript with clean documentation and milestone contracts.
            </p>
            <p>
              Timezone coordination is practical: IST to TRT overlap is roughly 2.5 hours, which is
              enough for daily check-ins and weekly demo calls. We can also support English + Turkish
              content structures for public-facing websites where localisation matters.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Audience 2: Indian Exporters Targeting Turkey
          </h2>
          <div className="prose prose-slate max-w-4xl">
            <p>
              Turkey imports major Indian categories where Maxwell already serves clients: organic
              chemicals (~$265M), machinery (~$320M), vehicles (~$303M), and man-made fibres
              (~$89M). Buyers in Turkey search in English by product specification and supplier
              country. They need supplier websites, not marketplace listings.
            </p>
            <p>
              For Indian exporters, we build product catalog websites designed for export discovery:
              specification-level product pages, trust signals (certifications, IEC, quality docs),
              and inquiry paths that convert international buyers into direct conversations.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Dual-audience strategy: Turkish buyers + Indian exporters",
              "English and Turkish content support available",
              "IST/TRT overlap for reliable calls and demos",
              "Export-focused product catalog architecture",
              "USD pricing and milestone billing",
              "NDA + full IP ownership",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-xl bg-blue-600 p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Book a Free Discovery Call</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              We will propose scope, timeline, and a fixed USD milestone plan for your Turkey-focused
              project.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link
                href="/book-consultation?source=turkey-page"
                className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition"
              >
                Book a free discovery call →
              </Link>
              <a
                href="https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I%20have%20a%20Turkey-focused%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
