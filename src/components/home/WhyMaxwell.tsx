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
          title="Why businesses choose Maxwell"
          description="Not another generic agency—a business technology partner with industry depth, transparent delivery, and long-term support."
        />
      </FadeIn>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {whyMaxwellPillars.map((item) => (
          <li key={item.title} className="v6-card min-w-0 overflow-hidden p-6 sm:p-7">
            <p className="font-display text-lg font-semibold text-[var(--v6-text)]">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{item.description}</p>
            {"benefit" in item && item.benefit ? (
              <p className="mt-4 rounded-lg bg-[#f8fafc] px-3 py-2 text-xs font-semibold text-[#4f46e5]">
                {item.benefit}
              </p>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="mt-12 space-y-3">
        {partnerComparison.map((row) => (
          <div key={row.type} className="v6-card grid min-w-0 gap-4 overflow-hidden p-6 sm:grid-cols-[10rem_1fr_1fr] sm:gap-6 sm:p-7">
            <p className="font-display font-semibold text-[var(--v6-text)]">{row.type}</p>
            <p className="text-sm text-[var(--v6-text-muted)]">{row.risk}</p>
            <p className="text-sm text-[var(--v6-text-secondary)]">{row.maxwell}</p>
          </div>
        ))}
      </div>

      <FadeIn className="mt-12">
        <PrimaryCTA location="homepage_why" context={{ source: "homepage-why" }} />
      </FadeIn>
    </HomeSection>
  );
}
