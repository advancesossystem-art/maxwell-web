import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { websitePricingTiers, pricingTerms } from "@/lib/pricing-data";

export const metadata: Metadata = createMetadata({
  title: "Website Development Cost India | From ₹35,000",
  description:
    "Published website development cost in India — Starter ₹35,000, Professional ₹75,000 catalogs, Growth ₹1,50,000. GST invoice, full ownership. Maxwell Electrodeal, Vadodara.",
  path: "/cost/web-development-cost-india",
  keywords: [
    "website development cost India",
    "web development cost India",
    "custom website price India",
    "Next.js website cost India",
    "business website cost India",
  ],
});

const spokeLinks = [
  { label: "Web development company India", href: "/solutions/web-development-company-india" },
  { label: "Business websites", href: "/services/business-website-development" },
  { label: "Ecommerce development", href: "/services/ecommerce-website-development" },
  { label: "Website redesign", href: "/services/website-redesign" },
  { label: "Next.js stack", href: "/services/website-technologies" },
  { label: "Vadodara pricing", href: "/cost/web-development-cost-vadodara" },
  { label: "Manufacturer catalog cost", href: "/cost/manufacturing-website-cost" },
  { label: "RFQ estimator", href: "/tools/industrial-website-rfq-estimator" },
] as const;

export default function WebDevelopmentCostIndiaPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            India · published tiers
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Website Development Cost in India
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Transparent pricing from a GST-registered Vadodara team with pan-India delivery — not
            “contact us for a custom quote” on every page. Starter business sites from ₹35,000;
            manufacturer catalogs often from ₹75,000.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=Website&source=cost-india"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get Scoped Estimate
            </Link>
            <Link
              href="/solutions/web-development-company-india"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              India web company page →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200 bg-white">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Published website tiers (India)
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
            Related services & pricing
          </h2>
          <p className="text-slate-700 max-w-3xl leading-relaxed mb-6">
            Cost pages are starting points. Pick the service silo that matches your intent — business
            site, ecommerce, redesign, or manufacturer catalog — then use the estimator for scope.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {spokeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-indigo-700 hover:border-indigo-300"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
