import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { websitePricingTiers, pricingTerms } from "@/lib/pricing-data";

export const metadata: Metadata = createMetadata({
  title: "Manufacturing Website Cost India 2026 | From ₹45,000 | Maxwell Electrodeal",
  description:
    "Manufacturer website pricing — Starter ₹45,000 (25–30 pages + core SEO), Professional ₹75,000 product catalogs, Growth for 200+ SKUs. Gujarat GIDC ready.",
  path: "/cost/manufacturing-website-cost",
  keywords: [
    "manufacturing website cost",
    "manufacturer website cost India",
    "factory website price",
    "product catalog website cost",
    "GIDC manufacturer website cost",
  ],
});

export default function ManufacturingWebsiteCostPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Manufacturer pricing
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Manufacturing Website Cost
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            What Gujarat and India manufacturers actually pay for an owned enquiry website — published
            tiers from our Vadodara engineering team, not agency fog.
          </p>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Tiers manufacturers choose
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
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600 max-w-3xl">
            {pricingTerms.gst}. {pricingTerms.noGames}
          </p>
        </Container>
      </section>

      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            When Professional (₹75,000) is the right default
          </h2>
          <p className="text-slate-700 max-w-3xl leading-relaxed mb-4">
            If you sell multiple grades, need category SEO, or want RFQ forms on every product page,
            Professional catalog scope is the usual fit. Starter suits a focused 25–30 page launch
            before SKU expansion. Compare directory renewals on our{" "}
            <Link
              href="/services/website-development/owned-enquiry-channel"
              className="text-indigo-600 hover:underline"
            >
              owned enquiry channel
            </Link>{" "}
            page, or jump to the{" "}
            <Link
              href="/services/website-development-for-manufacturers"
              className="text-indigo-600 hover:underline"
            >
              manufacturer websites hub
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/cost/web-development-cost-vadodara" className="text-indigo-600 hover:underline">
              Vadodara web cost →
            </Link>
            <Link href="/locations/india/gujarat/gidc" className="text-indigo-600 hover:underline">
              GIDC estate pages →
            </Link>
            <Link href="/pricing" className="text-indigo-600 hover:underline">
              Pricing →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
