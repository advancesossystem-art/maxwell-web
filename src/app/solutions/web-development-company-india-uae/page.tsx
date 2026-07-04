import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

const canonical = `${siteConfig.url}/solutions/web-development-company-india-uae`;
const usaUrl = `${siteConfig.url}/solutions/web-development-company-india-usa`;
const ukUrl = `${siteConfig.url}/solutions/web-development-company-india-uk`;

export const metadata: Metadata = {
  title: "Web Development Company India for UAE Clients | Maxwell Electrodeal",
  description:
    "Maxwell Electrodeal builds websites, ecommerce, and custom software for UAE businesses and Indian manufacturers targeting Middle East buyers. AED/USD pricing. Arabic-ready. Free discovery call.",
  alternates: {
    canonical,
    languages: {
      "en-US": usaUrl,
      "en-GB": ukUrl,
      "en-AE": canonical,
    },
  },
  openGraph: {
    title: "Web Development Company India for UAE Clients | Maxwell Electrodeal",
    description:
      "Websites, ecommerce, and custom software for UAE and Middle East clients with AED/USD pricing and Gulf timezone overlap.",
    url: canonical,
    siteName: "Maxwell Electrodeal",
    locale: "en_AE",
    type: "website",
  },
};

export default function UaeInternationalPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            UAE & Middle East Delivery
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Web Development Company in India for UAE and Middle East Clients
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            We build websites, ecommerce, and custom business platforms for UAE companies and for
            Indian manufacturers targeting Gulf buyers. AED/USD pricing, Arabic-ready delivery, and
            near-perfect timezone overlap between IST and GST.
          </p>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <div className="prose prose-slate max-w-4xl">
            <p>
              UAE businesses need fast, credible digital assets — company websites, ecommerce
              storefronts, and operational portals that support bilingual markets. Maxwell delivers
              these with an India-based engineering team and Gulf-friendly collaboration windows. The
              IST to GST difference is only 1.5 hours, so daily coordination is simple.
            </p>
            <p>
              This page also serves UAE importers searching for Indian suppliers. If a UAE buyer
              discovers a Gujarat manufacturer via Google, Maxwell can build supplier websites that
              improve trust, product visibility, and direct inquiry quality for cross-border trade.
            </p>
            <p>
              For UAE-facing products, Arabic language support is available (RTL-aware interfaces,
              dual-language content flow, and locale-aware UX). Payment works through SWIFT, Wise,
              PayPal, or Stripe based on project size and finance preference.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Timezone overlap: IST to GST (+1.5h only)",
              "Pricing in USD (AED quote support available)",
              "Arabic-ready implementation available",
              "B2B, ecommerce, and portal builds",
              "NDA + milestone contracts",
              "Weekly progress review calls",
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
              We will share scope, timeline, and AED/USD milestone pricing for your UAE project.
            </p>
            <Link
              href="/book-consultation?source=uae-page"
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
