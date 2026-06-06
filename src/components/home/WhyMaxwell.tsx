"use client";

import { partnerComparison, whyMaxwellPillars } from "@/lib/homepage";
import { FadeIn } from "@/components/motion/FadeIn";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";

/** Section 7 — Why Maxwell */
export function WhyMaxwell() {
  return (
    <HomeSection tone="soft" aria-label="Why Maxwell">
      <FadeIn>
        <HomeSectionIntro
          align="left"
          wideTitle
          eyebrow="Why Maxwell"
          title="Built for leaders who need a partner, not a vendor"
          description="Compared to freelancers, small agencies, and traditional vendors—here is what changes when you work with us."
        />
      </FadeIn>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {whyMaxwellPillars.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.05}>
            <li className="v6-card h-full p-6 sm:p-7">
              <p className="font-display text-lg font-semibold text-[var(--v6-text)]">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{item.description}</p>
            </li>
          </FadeIn>
        ))}
      </ul>

      <div className="mt-12 space-y-3">
        {partnerComparison.map((row, i) => (
          <FadeIn key={row.type} delay={i * 0.06}>
            <div className="v6-card grid gap-4 p-6 sm:grid-cols-[10rem_1fr_1fr] sm:gap-6 sm:p-7">
              <p className="font-display font-semibold text-[var(--v6-text)]">{row.type}</p>
              <p className="text-sm text-[var(--v6-text-muted)]">{row.risk}</p>
              <p className="text-sm text-[var(--v6-text-secondary)]">{row.maxwell}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12">
        <PrimaryCTA location="homepage_why" context={{ source: "homepage-why" }} />
      </FadeIn>
    </HomeSection>
  );
}
