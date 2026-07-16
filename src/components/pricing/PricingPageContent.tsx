import Link from "next/link";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { CompanyCTA } from "@/components/company/CompanyCTA";
import { StraightAnswers } from "@/components/conversion/StraightAnswers";
import { WhoWeAreNotFor } from "@/components/conversion/WhoWeAreNotFor";
import { pricingHero, pricingTerms, websitePricingTiers } from "@/lib/pricing-data";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function PricingPageContent() {
  return (
    <>
      <CompanyPageHero
        breadcrumb={[{ label: "Pricing" }]}
        eyebrow={pricingHero.eyebrow}
        title={pricingHero.title}
        description={pricingHero.description}
      />

      <section className="v6-section">
        <div className="v6-container">
          <p className="mx-auto max-w-2xl text-center text-lg font-semibold text-[#4f46e5]">
            {pricingTerms.noGames}
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {websitePricingTiers.map((tier) => (
              <article
                key={tier.id}
                className={`v6-card flex flex-col p-6 ${tier.highlight ? "ring-2 ring-[#4f46e5]" : ""}`}
              >
                {tier.highlight ? (
                  <span className="mb-3 inline-block w-fit rounded-full bg-[#4f46e5] px-3 py-0.5 text-xs font-semibold text-white">
                    Most popular
                  </span>
                ) : null}
                <h2 className="font-display text-xl font-bold text-[var(--v6-text)]">{tier.name}</h2>
                <p className="mt-2 font-display text-3xl font-bold text-[#4f46e5]">{tier.price}</p>
                <p className="mt-1 text-sm text-[var(--v6-text-muted)]">{tier.scope}</p>
                <p className="mt-1 text-sm font-medium text-[var(--v6-text-secondary)]">{tier.timeline}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-[var(--v6-text-secondary)]">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-emerald-600" aria-hidden>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-[var(--v6-text-muted)]">Best for: {tier.bestFor}</p>
                <Button href="/get-estimate?source=pricing" variant={tier.highlight ? "primary" : "secondary"} className="mt-6 w-full">
                  Get started
                </Button>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl space-y-3 rounded-xl border border-[var(--v6-border)] bg-[#f8fafc] p-6 text-sm text-[var(--v6-text-secondary)]">
            <p>
              <strong className="text-[var(--v6-text)]">{pricingTerms.gst}</strong>
            </p>
            <p>
              <strong className="text-[var(--v6-text)]">Payment:</strong> {pricingTerms.payment}
            </p>
            <p>{pricingTerms.ownership}</p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/get-estimate?source=pricing" size="lg" variant="primary">
              Get your free estimate
            </Button>
            <Button href={WHATSAPP_HREF_CONTACT} size="lg" variant="outline" external>
              WhatsApp us
            </Button>
            <Link
              href="/case-studies/maxwell-website-rebuild"
              className="text-sm font-semibold text-[#4f46e5] hover:underline"
            >
              See how we rebuilt our own site →
            </Link>
          </div>
        </div>
      </section>

      <StraightAnswers />
      <WhoWeAreNotFor />
      <CompanyCTA />
    </>
  );
}
