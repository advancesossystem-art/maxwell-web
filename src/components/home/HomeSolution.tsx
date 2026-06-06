"use client";

import { businessOutcomes, transformationStory } from "@/lib/homepage";
import { FadeIn } from "@/components/motion/FadeIn";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";

export function HomeSolution() {
  return (
    <HomeSection tone="white" aria-label="The transformation">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <FadeIn>
            <HomeSectionIntro
              align="left"
              wideTitle
              eyebrow="The transformation"
              title="From friction to flow"
              description="Maxwell maps how your business runs today, then builds systems that remove bottlenecks—not slides about them."
            />
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="v6-card rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
                  {transformationStory.beforeLabel}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--v6-text-secondary)]">
                  {transformationStory.before.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="v6-card rounded-2xl border-[#4f46e5]/20 p-6 ring-1 ring-[#4f46e5]/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#4f46e5]">
                  {transformationStory.afterLabel}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--v6-text)]">
                  {transformationStory.after.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-8">
            <PrimaryCTA location="homepage_solution" context={{ source: "homepage-solution" }} />
          </FadeIn>
        </div>

        <div className="space-y-4">
          {businessOutcomes.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <div className="v6-card p-6">
                <p className="font-display text-lg font-semibold text-[var(--v6-text)]">{item.title}</p>
                <p className="mt-2 text-sm text-[var(--v6-text-secondary)]">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </HomeSection>
  );
}
