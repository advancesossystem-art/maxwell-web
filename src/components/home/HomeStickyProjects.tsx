"use client";

import { drashtiFeaturedCaseStudy, homepageCaseStudyCards } from "@/lib/homepage";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";
import { StickyStackCards, type StickyStackCard } from "@/components/motion/StickyStackCards";
import { FadeIn } from "@/components/motion/FadeIn";

const stackCards: StickyStackCard[] = [
  {
    id: "drashti",
    index: "01",
    category: "Manufacturer website",
    title: drashtiFeaturedCaseStudy.client,
    href: drashtiFeaturedCaseStudy.href,
    ctaLabel: "Read case study",
    body: (
      <>
        <p className="text-sm leading-relaxed text-[var(--v6-text-secondary)] sm:text-base">
          {drashtiFeaturedCaseStudy.title}
        </p>
        <dl className="mt-6 grid grid-cols-3 gap-4">
          {drashtiFeaturedCaseStudy.metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-display text-2xl font-bold text-[var(--v6-text)]">{m.value}</dt>
              <dd className="text-xs text-[var(--v6-text-muted)]">{m.label}</dd>
            </div>
          ))}
        </dl>
      </>
    ),
  },
  ...homepageCaseStudyCards.slice(0, 2).map((study, i) => ({
    id: study.slug,
    index: `0${i + 2}`,
    category: study.trust.industry,
    title: study.cardHighlight,
    href: `/case-studies/${study.slug}`,
    ctaLabel: "Read case study",
    body: (
      <>
        <p className="font-display text-lg font-semibold text-[var(--v6-text)]">{study.subtitle}</p>
        <p className="mt-4 text-sm font-medium text-emerald-700">{study.heroResult}</p>
      </>
    ),
  })),
];

export function HomeStickyProjects() {
  return (
    <HomeSection
      tone="soft"
      className="relative z-10 overflow-x-clip rounded-t-[2.5rem] sm:rounded-t-[3rem]"
      aria-label="Featured projects stack"
    >
      <StickyStackCards
        heading={
          <FadeIn>
            <HomeSectionIntro
              align="left"
              wideTitle
              eyebrow="Work"
              title="Projects that stack up"
              description="Scroll to compare outcomes—sticky card motion inspired by premium portfolios, applied to verified Maxwell deliveries."
            />
          </FadeIn>
        }
        cards={stackCards}
      />
    </HomeSection>
  );
}
