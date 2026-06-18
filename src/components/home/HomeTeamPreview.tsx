"use client";

import { companyStory } from "@/lib/company-data";
import { FadeIn } from "@/components/motion/FadeIn";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";

export function HomeTeamPreview() {
  return (
    <HomeSection tone="white" aria-label="Why Maxwell">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <HomeSectionIntro
            align="left"
            wideTitle
            eyebrow="Why Maxwell"
            title="Structured delivery without vendor chaos"
            description="Clear scope, milestone planning, documented handoff, and direct business communication throughout the project."
          />
          <p className="mt-6 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{companyStory.mission}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryCTA location="homepage_company" context={{ source: "homepage-company" }} label="Book Strategy Consultation" />
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="v6-card p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4f46e5]">Delivery principles</p>
            <p className="mt-6 font-display text-xl font-semibold text-[var(--v6-text)]">
              Practical execution from discovery to launch
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--v6-text-secondary)]">
              Maxwell focuses on business outcomes, implementation clarity, and long-term maintainability instead of
              personality-led marketing.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Clear scope", "Milestone delivery", "Code ownership", "Post-launch support"].map((item) => (
                <li key={item} className="rounded-full bg-[#f8fafc] px-3 py-1 text-xs font-medium text-[var(--v6-text-secondary)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </HomeSection>
  );
}
