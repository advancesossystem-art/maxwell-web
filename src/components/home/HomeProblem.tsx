"use client";

import { businessProblems } from "@/lib/homepage";
import { FadeIn } from "@/components/motion/FadeIn";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";

export function HomeProblem() {
  return (
    <HomeSection tone="soft" aria-label="Business challenges">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
        <FadeIn className="lg:col-span-5 xl:col-span-4">
          <HomeSectionIntro
            align="left"
            wideTitle
            eyebrow="Sound familiar?"
            title="Facing these business challenges?"
            description="If any of these describe your operations, you are not alone—and spreadsheets are not the long-term answer."
          />
        </FadeIn>

        <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-7 xl:col-span-8 lg:mt-0">
          {businessProblems.map((item) => (
            <li key={item.title} className="v6-card min-w-0 overflow-hidden p-6">
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-[#4f46e5]">
                {item.title}
              </p>
              <p className="mt-2 text-base leading-relaxed text-[var(--v6-text-secondary)]">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </HomeSection>
  );
}
