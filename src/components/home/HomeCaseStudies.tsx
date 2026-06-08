"use client";

import Link from "next/link";
import { homepageCaseStudySlugs } from "@/lib/homepage";
import { caseStudiesData } from "@/lib/case-studies-data";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowRight } from "@/components/ui/Icons";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { Button } from "@/components/ui/Button";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";
import { CONVERSION_ROUTES } from "@/lib/conversion-copy";

const studies = homepageCaseStudySlugs
  .map((slug) => caseStudiesData[slug])
  .filter(Boolean);

export function HomeCaseStudies() {
  return (
    <HomeSection tone="white" aria-label="Case studies">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <FadeIn className="flex-1">
          <HomeSectionIntro
            align="left"
            wideTitle
            eyebrow="Case studies"
            title="Measurable outcomes—not marketing promises"
            description="Every engagement includes challenge, solution, technology, timeline, results, and ROI. See how manufacturers and enterprises transformed operations with Maxwell."
          />
        </FadeIn>
        <FadeIn delay={0.05}>
          <Button href={CONVERSION_ROUTES.caseStudies} variant="secondary" size="md" className="shrink-0">
            View all case studies <ArrowRight />
          </Button>
        </FadeIn>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {studies.map((study, i) => (
          <FadeIn key={study.slug} delay={i * 0.06}>
            <article className="v6-card flex h-full flex-col overflow-hidden">
              <div className="border-b border-[var(--v6-border)] bg-[#f8fafc] px-6 py-5">
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--v6-text-muted)]">
                  {study.trust.industry}
                </span>
                <p className="mt-2 font-display text-2xl font-bold text-[#d97706]">{study.cardHighlight}</p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--v6-text)]">{study.subtitle}</h3>
                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-[var(--v6-text-muted)]">Challenge</dt>
                    <dd className="mt-0.5 text-[var(--v6-text-secondary)]">{study.challenges[0]}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[var(--v6-text-muted)]">Solution</dt>
                    <dd className="mt-0.5 text-[var(--v6-text-secondary)] line-clamp-2">
                      {study.solutionArchitecture.overview}
                    </dd>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <dt className="font-semibold text-[var(--v6-text-muted)]">Technology</dt>
                      <dd className="mt-0.5 text-[var(--v6-text-secondary)]">
                        {study.technologyStack.slice(0, 3).join(", ")}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[var(--v6-text-muted)]">Timeline</dt>
                      <dd className="mt-0.5 text-[var(--v6-text-secondary)]">{study.trust.timeline}</dd>
                    </div>
                  </div>
                  <div>
                    <dt className="font-semibold text-[var(--v6-text-muted)]">Result</dt>
                    <dd className="mt-0.5 text-[var(--v6-text-secondary)]">{study.results[0]?.description}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[var(--v6-text-muted)]">ROI</dt>
                    <dd className="mt-0.5 font-semibold text-[#4f46e5]">
                      {study.roiMetrics[0]?.value} {study.roiMetrics[0]?.label}
                    </dd>
                  </div>
                </dl>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-[#4f46e5] hover:underline"
                >
                  Read full case study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <PrimaryCTA location="homepage_case_studies" context={{ source: "homepage-case-studies" }} />
        <Button href="/tools/erp-roi-calculator" variant="secondary" size="lg">
          Calculate ERP ROI
        </Button>
      </FadeIn>
    </HomeSection>
  );
}
