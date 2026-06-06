"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrustNearCTA } from "@/components/conversion/TrustNearCTA";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import {
  CTA_LABELS,
  consultationHref,
  type ConversionContext,
} from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import { ArrowRight } from "@/components/ui/Icons";

type CaseStudyConversionBlockProps = {
  studyTitle: string;
  industrySlug?: string;
  caseStudySlug?: string;
};

export function CaseStudyConversionBlock({
  studyTitle,
  industrySlug,
  caseStudySlug,
}: CaseStudyConversionBlockProps) {
  const context: ConversionContext = {
    service: studyTitle,
    source: caseStudySlug ? `case-study-${caseStudySlug}` : "case-study",
  };
  const location = "case_study_conversion_block";
  const similarHref = consultationHref({
    ...context,
    project: `similar-to-${studyTitle}`,
  });

  return (
    <section className="section-py-compact bg-[var(--v6-bg-soft)]" aria-label="Start a similar project">
      <Container>
        <div className="v6-card flex flex-col gap-8 border-[#4f46e5]/15 p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-xl font-semibold text-[var(--v6-text)] sm:text-2xl">
              Inspired by these results?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--v6-text-secondary)] sm:text-base">
              Start a similar engagement with the same delivery rigor — discovery, phased rollout, and
              measurable ROI tracking.
            </p>
            <TrustNearCTA compact className="mt-5 justify-start text-left" />
            {industrySlug ? (
              <p className="mt-5 text-sm text-[var(--v6-text-secondary)]">
                Explore{" "}
                <a
                  href={`/industries/${industrySlug}`}
                  className="font-medium text-[#4f46e5] hover:text-[#7c3aed]"
                >
                  industry solutions
                </a>{" "}
                or{" "}
                <a href="/case-studies" className="font-medium text-[#4f46e5] hover:text-[#7c3aed]">
                  {CTA_LABELS.tertiary.toLowerCase()}
                </a>
              </p>
            ) : null}
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap lg:max-w-xs lg:flex-col">
            <Button
              href={similarHref}
              size="lg"
              onClick={() => trackCTAClick(CTA_LABELS.similarProject, similarHref, location)}
            >
              {CTA_LABELS.similarProject}
              <ArrowRight />
            </Button>
            <PrimaryCTA context={context} location={location} showArrow={false} />
            <SecondaryCTA context={context} location={location} />
            <Button
              href={consultationHref({ ...context, source: `${context.source}-proposal` })}
              size="md"
              variant="secondary"
              onClick={() =>
                trackCTAClick(CTA_LABELS.getProposal, consultationHref(context), location)
              }
            >
              {CTA_LABELS.getProposal}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
