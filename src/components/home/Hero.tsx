import Link from "next/link";
import { HeroEcosystemVisual } from "@/components/home/HeroEcosystemVisual";
import { HeroSequence } from "@/components/home/HeroSequence";
import { Button } from "@/components/ui/Button";
import { brandDisambiguation } from "@/lib/constants";
import { heroServiceBadges, heroTrustMetrics, homeHero, trustHighlights } from "@/lib/homepage";
import {
  CTA_LABELS,
  CONVERSION_EXPECTATIONS,
  consultationHref,
  estimateHref,
} from "@/lib/conversion-copy";

const heroContext = { source: "homepage-hero" } as const;

const trustIcons = ["rocket", "users", "support", "shield"] as const;

function TrustIcon({ type }: { type: (typeof trustIcons)[number] }) {
  const paths: Record<(typeof trustIcons)[number], React.ReactNode> = {
    rocket: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 0 1-7.02 7.02M15.59 14.37l-2.121-2.122m0 0L8.25 16.5m5.218-4.252L12 9.75"
      />
    ),
    users: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    ),
    support: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.449.98-.75 2.019-.75 3.14v4.25M6.75 14.15v4.25c0 1.094.787 2.036 1.872 2.18 2.087.277 4.216.42 6.378.42s4.291-.143 6.378-.42c1.085-.144 1.872-1.086 1.872-2.18v-4.25m-16.5 0a2.18 2.18 0 0 1 .75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m4.5 8.006V6.75a2.25 2.25 0 0 0-2.25-2.25h-9a2.25 2.25 0 0 0-2.25 2.25v5.456"
      />
    ),
    shield: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
  };

  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {paths[type]}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="v6-hero v6-section--white overflow-hidden" aria-label="Hero">
      <div className="v6-container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="v6-eyebrow-line v6-eyebrow">{homeHero.eyebrow}</p>
            <h1 className="v6-hero-title mt-4 text-balance" data-seo-speakable>
              {homeHero.headlineLine1}{" "}
              <span className="v6-gradient-text">{homeHero.headlineLine2}</span>
            </h1>
            <p className="v6-lead mt-4 max-w-2xl text-balance lg:max-w-none" data-seo-speakable>
              {homeHero.subhead}
            </p>
            <p className="mt-3 hidden max-w-2xl text-sm leading-relaxed text-[var(--v6-text-secondary)] md:block lg:max-w-none" data-seo-speakable>
              {brandDisambiguation}
            </p>

            <div className="mt-5 hidden flex-wrap gap-2 md:flex">
              {heroServiceBadges.map((badge) => (
                <Link
                  key={badge.label}
                  href={badge.href}
                  className="rounded-full border border-[var(--v6-border)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--v6-text-secondary)] transition-colors hover:border-[#4f46e5]/40 hover:text-[#4f46e5]"
                >
                  {badge.label}
                </Link>
              ))}
            </div>

            <p className="mt-4 text-xs text-gray-500 md:hidden">
              50+ projects delivered · 4.9/5 ★
            </p>
            <p className="mt-4 hidden rounded-xl border border-[#4f46e5]/15 bg-[#f8fafc] px-4 py-3 text-sm text-[var(--v6-text-secondary)] md:block">
              <span className="font-semibold text-[#4f46e5]">Proven delivery:</span>{" "}
              {homeHero.proofOutcome}.{" "}
              <Link
                href={homeHero.proofLink.href}
                className="font-semibold text-[#4f46e5] hover:underline"
              >
                {homeHero.proofLink.label} →
              </Link>
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={estimateHref(heroContext)} size="lg" variant="primary">
                {CTA_LABELS.secondary}
              </Button>
              <Button href={consultationHref(heroContext)} size="lg" variant="outline">
                {CTA_LABELS.primary}
              </Button>
            </div>
            <p className="mt-3 text-sm text-[var(--v6-text-muted)]">
              {CONVERSION_EXPECTATIONS.estimateTimeline} · {CONVERSION_EXPECTATIONS.responseTime}
            </p>

            <ul className="mt-5 hidden flex-wrap gap-2 md:flex" aria-label="Trust highlights">
              {trustHighlights.map((item) => (
                <li
                  key={item.label}
                  className="rounded-full border border-[var(--v6-border)] bg-white px-3 py-1.5 text-xs text-[var(--v6-text-secondary)]"
                >
                  <span className="font-semibold text-[var(--v6-text)]">{item.label}</span>
                  <span className="mx-1 text-[var(--v6-text-muted)]">·</span>
                  {item.desc}
                </li>
              ))}
            </ul>

            <ul className="v6-trust-bar mobile-content-safe grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroTrustMetrics.map((stat, i) => (
                <li key={stat.label} className="v6-trust-item">
                  <span className="v6-trust-icon">
                    <TrustIcon type={trustIcons[i] ?? "shield"} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-[#0f172a]">{stat.value}</p>
                    <p className="text-sm text-[var(--v6-text-muted)]">{stat.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <HeroSequence className="relative lg:pl-4">
            <HeroEcosystemVisual />
          </HeroSequence>
        </div>
      </div>
    </section>
  );
}
