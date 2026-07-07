import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

const canonical = `${siteConfig.url}/solutions/web-development-company-india-germany`;
const usaUrl = `${siteConfig.url}/solutions/web-development-company-india-usa`;
const ukUrl = `${siteConfig.url}/solutions/web-development-company-india-uk`;
const uaeUrl = `${siteConfig.url}/solutions/web-development-company-india-uae`;
const intlUrl = `${siteConfig.url}/solutions/web-development-company-india-international`;

export const metadata: Metadata = {
  title: "Web Development Company India for Germany | Maxwell Electrodeal",
  description:
    "Maxwell Electrodeal builds websites and B2B platforms for German businesses outsourcing to India and Indian exporters targeting Germany. EUR/USD pricing. GDPR-aware forms. NDA. Free discovery call.",
  alternates: {
    canonical,
    languages: {
      "en-US": usaUrl,
      "en-GB": ukUrl,
      "en-AE": uaeUrl,
      "de-DE": canonical,
    },
  },
  openGraph: {
    title: "Web Development Company India for Germany | Maxwell Electrodeal",
    description:
      "Websites and export platforms for German clients and Indian manufacturers targeting EU buyers. Next.js, milestone billing, NDA.",
    url: canonical,
    siteName: "Maxwell Electrodeal",
    locale: "de_DE",
    type: "website",
  },
};

export default function GermanyInternationalPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Germany-Focused Delivery
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-4xl">
            Web Development Company in India for German Businesses
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            Maxwell already receives German impressions in Google Search Console. This page is built
            for German companies outsourcing web development to India — and Indian exporters building
            websites to reach EU buyers in Germany.
          </p>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Why German Companies Hire Indian Web Development Teams
          </h2>
          <div className="prose prose-slate max-w-4xl">
            <p>
              German agencies often charge €8,000–€40,000 for corporate websites that Maxwell
              delivers at $900–$6,000 using the same stack: Next.js, React, and TypeScript. You get
              documented milestone delivery, NDA protection, and a registered Indian private
              limited company — not a freelancer risk profile.
            </p>
            <p>
              IST to CET overlap is 3.5–4.5 hours on business days — enough for daily async updates
              and weekly video demos. We communicate in professional business English and provide
              written proposals within 48 hours of discovery.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Indian Exporters Targeting German Buyers
          </h2>
          <div className="prose prose-slate max-w-4xl">
            <p>
              Germany imports chemicals, machinery, textiles, and auto components from India. Buyers
              search in English by product specification — they need supplier websites with
              certification badges, COA request forms, and spec-level product pages, not marketplace
              listings alone.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "GDPR-aware contact forms and cookie consent",
              "English + German content structure support",
              "IST/CET timezone overlap for calls",
              "Export product catalog architecture",
              "USD/EUR milestone billing",
              "NDA + 100% IP ownership",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-xl font-bold text-slate-900 mb-4">Other international pages</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href={intlUrl} className="text-blue-600 hover:underline">
              International hub
            </Link>
            <Link href={usaUrl} className="text-blue-600 hover:underline">
              USA
            </Link>
            <Link href={ukUrl} className="text-blue-600 hover:underline">
              UK
            </Link>
            <Link href={uaeUrl} className="text-blue-600 hover:underline">
              UAE
            </Link>
            <Link href="/solutions/web-development-company-india-turkey" className="text-blue-600 hover:underline">
              Turkey
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-xl bg-blue-600 p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Book a Free Discovery Call</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              Scope, timeline, and fixed USD/EUR milestone plan for your Germany-focused project.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link
                href="/book-consultation?source=germany-page"
                className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition"
              >
                Book a free discovery call →
              </Link>
              <a
                href="https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I%20have%20a%20Germany-focused%20website%20project."
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
