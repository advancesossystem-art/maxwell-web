"use client";

import Link from "next/link";
import { problemSolutionMap } from "@/lib/homepage";
import { FadeIn } from "@/components/motion/FadeIn";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";
import { ArrowRight } from "@/components/ui/Icons";

/** Maps business pain points to Maxwell services — conversion psychology */
export function HomeProblemSolutionMap() {
  return (
    <HomeSection tone="soft" aria-label="Problem to solution mapping">
      <FadeIn>
        <HomeSectionIntro
          align="left"
          wideTitle
          eyebrow="Your challenge → our solution"
          title="Every problem has a software answer"
          description="When visitors recognize their pain, the next step should be obvious. Here is how Maxwell maps operational challenges to proven solutions."
        />
      </FadeIn>

      <ul className="mt-12 space-y-4">
        {problemSolutionMap.map((item, i) => (
          <FadeIn key={item.problem} delay={i * 0.06}>
            <li>
              <Link
                href={item.href}
                className="v6-card group grid gap-4 p-6 transition-colors hover:border-[#4f46e5]/30 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
                    Problem
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-[var(--v6-text)]">{item.problem}</p>
                </div>
                <span className="hidden text-2xl text-[#4f46e5] sm:block" aria-hidden>
                  →
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#4f46e5]">Solution</p>
                  <p className="mt-1 font-display text-lg font-semibold text-[#4f46e5] group-hover:underline">
                    {item.solution}
                  </p>
                  <p className="mt-1 text-sm text-[var(--v6-text-secondary)]">{item.description}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#4f46e5] sm:col-span-3 sm:justify-end">
                  Explore solution <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ul>
    </HomeSection>
  );
}
