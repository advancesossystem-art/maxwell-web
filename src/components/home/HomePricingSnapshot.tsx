import Link from "next/link";
import { pricingTerms, websiteAmcTiers, websitePricingTiers } from "@/lib/pricing-data";
import { estimateHref } from "@/lib/conversion-copy";
import { cn } from "@/lib/utils";

export function HomePricingSnapshot() {
  const amc = websiteAmcTiers[0];

  return (
    <section
      className="border-t border-white/5 bg-[#0a0a12] py-12 md:py-16"
      aria-label="Website pricing"
    >
      <div className="v6-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">
              Published pricing
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Real tiers — not “call for price”
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              {pricingTerms.payment}. {pricingTerms.gst}.
            </p>
          </div>
          <Link
            href="/pricing"
            className="shrink-0 text-sm font-semibold text-violet-300 hover:text-white"
          >
            Full pricing &amp; TCO →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {websitePricingTiers.map((tier) => (
            <article
              key={tier.id}
              className={cn(
                "flex flex-col rounded-2xl border p-5 sm:p-6",
                tier.highlight
                  ? "border-violet-500/40 bg-violet-500/10"
                  : "border-white/10 bg-white/[0.03]",
              )}
            >
              {tier.highlight ? (
                <span className="mb-3 w-fit rounded-full bg-violet-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Most chosen
                </span>
              ) : (
                <span className="mb-3 block h-5" aria-hidden />
              )}
              <h3 className="font-display text-lg font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 font-display text-3xl font-bold text-white">{tier.price}</p>
              <p className="mt-1 text-sm text-slate-400">{tier.scope}</p>
              <p className="mt-0.5 text-xs font-medium text-slate-500">{tier.timeline}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-300">
                {tier.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-violet-400" aria-hidden>
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">Best for: {tier.bestFor}</p>
              <Link
                href={estimateHref({ source: "homepage-pricing", project: tier.id })}
                className={cn(
                  "mt-5 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition",
                  tier.highlight
                    ? "bg-violet-600 text-white hover:bg-violet-500"
                    : "border border-white/15 text-white hover:border-violet-400/50 hover:bg-violet-500/10",
                )}
              >
                Request quote
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-display text-sm font-semibold text-white">
              {amc.name} from {amc.price}
            </p>
            <p className="mt-0.5 text-sm text-slate-400">{amc.scope}</p>
          </div>
          <Link
            href="/services/website-maintenance"
            className="shrink-0 text-sm font-semibold text-violet-300 hover:text-white"
          >
            See AMC details →
          </Link>
        </div>
      </div>
    </section>
  );
}
