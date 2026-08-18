import Link from "next/link";
import { HeroSidePanel } from "@/components/home/HeroSidePanel";
import { HeroMagneticActions } from "@/components/home/HeroMagneticActions";
import {
  heroServiceBadges,
  heroTrustMetrics,
  heroTrustRow,
  homeHero,
} from "@/lib/homepage";
import { CONVERSION_EXPECTATIONS } from "@/lib/conversion-copy";

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-7.02 7.02M15.59 14.37 8.25 16.5m7.34-2.13L12 9.75M8.25 16.5 12 9.75m0 0 3.75-6.75 6 6L12 9.75" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="overflow-hidden bg-white" aria-label="Hero">
      <div className="v6-container pb-8 pt-3 md:pb-10 md:pt-4 lg:pb-12 lg:pt-5">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6366f1]">
              {homeHero.eyebrow}
            </p>
            <h1
              className="mt-4 font-display text-[2rem] font-bold leading-[1.12] tracking-tight text-[#0f172a] sm:text-4xl md:text-[2.75rem] lg:text-[3.15rem]"
              data-seo-speakable
            >
              {homeHero.headlineLine1}{" "}
              <span className="text-[#4f46e5]">{homeHero.headlineLine2}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg" data-seo-speakable>
              {homeHero.subhead}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {heroServiceBadges.map((badge) => (
                <Link
                  key={badge.label}
                  href={badge.href}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-2 text-center text-[11px] font-semibold text-slate-600 transition hover:border-[#4f46e5]/40 hover:text-[#4f46e5] sm:text-xs"
                >
                  {badge.label}
                </Link>
              ))}
            </div>

            <div className="mt-5 flex gap-3 rounded-2xl border border-[#4f46e5]/15 bg-[#eef2ff]/80 px-4 py-3.5">
              <RocketIcon />
              <p className="text-sm leading-relaxed text-slate-700">
                <span className="font-semibold text-[#4f46e5]">Proven delivery:</span> {homeHero.proofOutcome}.{" "}
                <Link href={homeHero.proofLink.href} className="font-semibold text-[#4f46e5] hover:underline">
                  {homeHero.proofLink.label} →
                </Link>{" "}
                <a
                  href={homeHero.proofExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#4f46e5] hover:underline"
                >
                  {homeHero.proofExternalLabel}
                </a>
              </p>
            </div>

            <div className="mt-6">
              <HeroMagneticActions />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              {CONVERSION_EXPECTATIONS.estimateTimeline} · {CONVERSION_EXPECTATIONS.responseTime}
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4" aria-label="Delivery promises">
              {heroTrustRow.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="flex items-start gap-2 text-xs font-medium text-slate-600 hover:text-[#4f46e5]">
                    <CheckIcon />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative md:sticky md:top-24">
            <HeroSidePanel />
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-5 sm:grid-cols-4 sm:px-6">
          {heroTrustMetrics.map((stat) => (
            <li key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-xl font-bold text-[#0f172a] sm:text-2xl">{stat.value}</p>
              <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
