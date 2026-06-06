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
            eyebrow="The challenge"
            title="Growth exposes what disconnected operations cannot carry"
            description="If this sounds like your business, the answer is usually better systems—not more headcount."
          />
        </FadeIn>

        <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-7 xl:col-span-8 lg:mt-0">
          {businessProblems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <li className="v6-card h-full p-6">
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-[#4f46e5]">
                  {item.title}
                </p>
                <p className="mt-2 text-base leading-relaxed text-[var(--v6-text-secondary)]">
                  {item.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </HomeSection>
  );
}
