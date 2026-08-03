import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { websitePricingTiers, pricingTerms } from "@/lib/pricing-data";

export const metadata: Metadata = createMetadata({
  title: "Web Development Cost Vadodara 2026 | From ₹45,000 | Maxwell Electrodeal",
  description:
    "Published website pricing for Vadodara — Starter ₹45,000 (25–30 pages + core SEO), Professional ₹75,000 catalogs, Growth ₹1,50,000. GST invoice, full ownership.",
  path: "/cost/web-development-cost-vadodara",
  keywords: [
    "web development cost Vadodara",
    "website development cost Vadodara",
    "website price Vadodara",
    "Next.js website cost Vadodara",
    "manufacturer website cost Vadodara",
  ],
});

export default function WebDevelopmentCostVadodaraPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Vadodara · published tiers
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Web Development Cost in Vadodara
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Real prices from a GST-registered Vadodara team — not “contact us for quote” theatre.
            Starter websites from ₹45,000 with 25–30 pages and core SEO; manufacturer catalogs often
            start at ₹75,000.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=Website&source=cost-vadodara"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get Scoped Estimate
            </Link>
            <Link
              href="/solutions/web-development-company-vadodara"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Vadodara web company page →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Published website tiers
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {websitePricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-xl border p-6 ${
                  tier.highlight ? "border-indigo-300 bg-indigo-50/40" : "border-slate-200 bg-white"
                }`}
              >
                <p className="text-sm font-semibold text-indigo-600">{tier.name}</p>
                <p className="mt-2 font-display text-3xl font-bold text-slate-900">{tier.price}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {tier.scope} · {tier.timeline}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {tier.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-500">{tier.bestFor}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600 max-w-3xl">
            {pricingTerms.gst}. {pricingTerms.payment}. {pricingTerms.ownership}
          </p>
        </Container>
      </section>

      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            What drives cost in Vadodara projects
          </h2>
          <p className="text-slate-700 max-w-3xl leading-relaxed mb-4">
            SKU count, bilingual export pages, document downloads, and dealer-login portals move you
            from Starter into Professional or Growth. GIDC manufacturers in Makarpura, Savli,
            Nandesari, and Halol usually need catalog depth — see{" "}
            <Link href="/cost/manufacturing-website-cost" className="text-indigo-600 hover:underline">
              manufacturing website cost
            </Link>{" "}
            and the{" "}
            <Link href="/locations/india/gujarat/gidc" className="text-indigo-600 hover:underline">
              Gujarat GIDC hub
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/pricing" className="text-indigo-600 hover:underline">
              Full pricing page →
            </Link>
            <Link
              href="/services/website-development-for-manufacturers"
              className="text-indigo-600 hover:underline"
            >
              Manufacturer hub →
            </Link>
            <Link href="/solutions/seo-company-vadodara" className="text-indigo-600 hover:underline">
              SEO company Vadodara →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
