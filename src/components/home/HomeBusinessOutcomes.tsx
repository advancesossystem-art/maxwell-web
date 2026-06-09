"use client";

import { businessOutcomesDelivered } from "@/lib/homepage";
import { FadeIn } from "@/components/motion/FadeIn";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";

/** Phase D — business outcomes, not technology */
export function HomeBusinessOutcomes() {
  return (
    <HomeSection tone="white" aria-label="Business outcomes">
      <FadeIn>
        <HomeSectionIntro
          eyebrow="Results"
          title="Business outcomes we deliver"
          description="Leaders do not buy software—they buy efficiency, visibility, and growth. These are the outcomes Maxwell engagements target within the first 90 days."
        />
      </FadeIn>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {businessOutcomesDelivered.map((item) => (
          <li key={item.title} className="v6-card min-w-0 overflow-hidden p-6">
            <p className="font-display text-lg font-semibold text-[var(--v6-text)]">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{item.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#4f46e5]">{item.metric}</p>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
