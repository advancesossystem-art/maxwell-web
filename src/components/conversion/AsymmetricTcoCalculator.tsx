"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  TCO_LIFECYCLE_YEARS,
  WORDPRESS_TCO_STACK,
  NEXTJS_PROFESSIONAL_TCO_STACK,
  annualRecurringTotal,
  totalTco,
  formatInr,
  formatInrCompact,
} from "@/lib/tco-model";
import { Button } from "@/components/ui/Button";
import { estimateHref } from "@/lib/conversion-copy";
import { persistLeadContext } from "@/lib/lead-context";
import { trackCTAClick } from "@/lib/conversion-events";

type AsymmetricTcoCalculatorProps = {
  /** Optional anchor id for deep links */
  id?: string;
  /** Heading override for page context */
  title?: string;
  subtitle?: string;
  /** Hide CTA row (e.g. when embedded on pricing page above tiers) */
  showCta?: boolean;
  className?: string;
  source?: string;
};

export function AsymmetricTcoCalculator({
  id,
  title = "Stop comparing initial quotes. Compare 3-year total cost of ownership.",
  subtitle = "Most Vadodara agencies quote ₹25K–₹40K for WordPress. The real cost is licensing, maintenance, and lost leads over three years.",
  showCta = true,
  className = "",
  source = "tco-calculator",
}: AsymmetricTcoCalculatorProps) {
  const [years, setYears] = useState(TCO_LIFECYCLE_YEARS);

  const { wpTotal, nextTotal, savings } = useMemo(() => {
    const wp = totalTco(WORDPRESS_TCO_STACK, years);
    const nx = totalTco(NEXTJS_PROFESSIONAL_TCO_STACK, years);
    return { wpTotal: wp, nextTotal: nx, savings: wp - nx };
  }, [years]);

  const wpAnnual = annualRecurringTotal(WORDPRESS_TCO_STACK);
  const nxAnnual = annualRecurringTotal(NEXTJS_PROFESSIONAL_TCO_STACK);

  return (
    <section
      id={id}
      className={`py-12 md:py-16 bg-[#f8fafc] ${className}`}
      aria-labelledby="tco-calculator-heading"
    >
      <div className="v6-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">TCO Calculator</p>
          <h2
            id="tco-calculator-heading"
            className="mt-2 font-display text-2xl font-bold text-[var(--v6-text)] md:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-[var(--v6-text-secondary)]">{subtitle}</p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <label htmlFor="tco-years" className="flex items-center justify-between text-sm font-medium text-[var(--v6-text)]">
            <span>Lifecycle period</span>
            <span className="tabular-nums text-emerald-700">{years} years</span>
          </label>
          <input
            id="tco-years"
            type="range"
            min={1}
            max={5}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-2 w-full accent-emerald-600"
            aria-valuemin={1}
            aria-valuemax={5}
            aria-valuenow={years}
          />
          <div className="mt-1 flex justify-between text-xs text-[var(--v6-text-muted)]">
            <span>1 yr</span>
            <span>5 yr</span>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* WordPress — loss framing */}
          <article className="relative overflow-hidden rounded-2xl border-2 border-red-200 bg-white p-6 shadow-sm">
            <div className="absolute right-0 top-0 rounded-bl-xl bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
              Hidden costs
            </div>
            <h3 className="font-display text-lg font-bold text-gray-900">{WORDPRESS_TCO_STACK.label}</h3>
            <p className="mt-1 text-sm text-gray-500">{WORDPRESS_TCO_STACK.subtitle}</p>

            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt>Initial build</dt>
                <dd className="font-medium tabular-nums">{formatInr(WORDPRESS_TCO_STACK.initial)}</dd>
              </div>
              <div className="flex justify-between text-gray-600">
                <dt>Annual recurring ({formatInrCompact(wpAnnual)}/yr)</dt>
                <dd className="tabular-nums">× {years} = {formatInr(wpAnnual * years)}</dd>
              </div>
              <div className="flex justify-between text-red-600">
                <dt>Performance & lead loss ({formatInrCompact(WORDPRESS_TCO_STACK.performanceLossPerYear)}/yr)</dt>
                <dd className="tabular-nums">× {years} = {formatInr(WORDPRESS_TCO_STACK.performanceLossPerYear * years)}</dd>
              </div>
            </dl>

            <p className="mt-6 border-t border-red-100 pt-4 text-center">
              <span className="text-sm text-gray-500">{years}-year TCO</span>
              <span className="mt-1 block font-display text-3xl font-bold text-red-600 tabular-nums">
                {formatInr(wpTotal)}
              </span>
            </p>
          </article>

          {/* Next.js — savings framing */}
          <article className="relative overflow-hidden rounded-2xl border-2 border-emerald-300 bg-white p-6 shadow-md ring-1 ring-emerald-100">
            <div className="absolute right-0 top-0 rounded-bl-xl bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Recommended
            </div>
            <h3 className="font-display text-lg font-bold text-gray-900">{NEXTJS_PROFESSIONAL_TCO_STACK.label}</h3>
            <p className="mt-1 text-sm text-gray-500">{NEXTJS_PROFESSIONAL_TCO_STACK.subtitle}</p>

            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt>Initial build (Professional tier)</dt>
                <dd className="font-medium tabular-nums">{formatInr(NEXTJS_PROFESSIONAL_TCO_STACK.initial)}</dd>
              </div>
              <div className="flex justify-between text-gray-600">
                <dt>Annual hosting + maintenance ({formatInrCompact(nxAnnual)}/yr)</dt>
                <dd className="tabular-nums">× {years} = {formatInr(nxAnnual * years)}</dd>
              </div>
              <div className="flex justify-between text-emerald-700">
                <dt>Performance revenue loss</dt>
                <dd className="font-semibold tabular-nums">{formatInr(0)}</dd>
              </div>
            </dl>

            <p className="mt-6 border-t border-emerald-100 pt-4 text-center">
              <span className="text-sm text-gray-500">{years}-year TCO</span>
              <span className="mt-1 block font-display text-3xl font-bold text-emerald-700 tabular-nums">
                {formatInr(nextTotal)}
              </span>
            </p>
          </article>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
          <p className="text-sm font-medium text-emerald-900">
            You save{" "}
            <span className="font-display text-2xl font-bold tabular-nums">{formatInr(savings)}</span>
            {" "}over {years} {years === 1 ? "year" : "years"} with a custom Next.js build — plus full IP ownership.
          </p>
          <p className="mt-2 text-xs text-emerald-800/80">
            Based on Vadodara market rates: plugin/theme renewals, managed hosting, security patches, and conservative lead-loss from slow WordPress sites.
          </p>
        </div>

        {showCta ? (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={estimateHref({ source })}
              size="lg"
              variant="primary"
              className="!bg-emerald-600 hover:!bg-emerald-700"
              onClick={() => {
                persistLeadContext({ source, intent: "estimate" });
                trackCTAClick("Get scoped estimate", estimateHref({ source }), source);
              }}
            >
              Get scoped estimate
            </Button>
            <Link
              href="/pricing"
              className="text-sm font-semibold text-[var(--v6-text-secondary)] underline-offset-4 hover:text-emerald-700 hover:underline"
            >
              View tier pricing →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
