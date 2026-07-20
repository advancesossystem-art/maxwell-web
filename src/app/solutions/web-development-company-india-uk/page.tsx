import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { buildInternationalWebLanguageAlternates, marketExpansionNote } from "@/lib/seo/international-web-hreflang";

const canonical = `${siteConfig.url}/solutions/web-development-company-india-uk`;

export const metadata: Metadata = {
  title: "Web Development Company India for UK Clients | Maxwell Electrodeal",
  description:
    "Maxwell Electrodeal builds websites and web apps for UK businesses at 70% below UK agency rates. Next.js, React, TypeScript. GBP/USD pricing. GDPR-aware builds. Free discovery call.",
  alternates: buildInternationalWebLanguageAlternates(canonical),
  openGraph: {
    title: "Web Development Company India for UK Clients | Maxwell Electrodeal",
    description:
      "UK businesses outsource web development to India with Next.js and React delivery, GDPR-aware implementation, and milestone billing.",
    url: canonical,
    siteName: "Maxwell Electrodeal",
    locale: "en_GB",
    type: "website",
  },
};

export default function UkInternationalPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            UK Delivery Page
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Web Development Company in India for UK Clients
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            Built for UK buyers with GBP/USD pricing context, UK overlap hours, and GDPR-aware delivery.
            {marketExpansionNote("GB")}
          </p>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <div className="prose prose-slate max-w-4xl">
            <p>
              UK development agencies commonly bill £60–£150/hour. Maxwell operates at roughly
              $25–$40/hour equivalent with the same modern stack — Next.js, React, TypeScript, and
              performance-first delivery standards.
            </p>
            <p>
              Collaboration is practical: IST to BST gives around 4.5 hours of overlap during UK
              mornings, which supports standups, demos, and decision windows without night shifts on
              your side. Communication remains in clear business English with structured weekly
              updates.
            </p>
            <p>
              For UK and EU-facing projects, we implement GDPR-aware fundamentals including cookie
              consent, privacy/processing pages, and data handling visibility. Primary quotes are in
              USD, with GBP equivalents available on request.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "UK agency benchmark: £60–£150/hour",
              "Maxwell benchmark: $25–$40/hour equivalent",
              "IST/BST overlap: ~4.5 hours",
              "GDPR-aware cookie/privacy implementation",
              "Milestone-based contract and invoicing",
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
              Get a clear USD quote (GBP equivalent on request), timeline, and milestone plan.
            </p>
            <Link
              href="/book-consultation?source=uk-page"
              className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              Book a free discovery call →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
