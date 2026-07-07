"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { PageEntrance } from "@/components/motion/FadeIn";
import { CTA_LABELS, CONVERSION_EXPECTATIONS } from "@/lib/conversion-copy";

export function ProgrammaticHeroMotion({
  pageType,
  siteName,
  headline,
  subheadline,
}: {
  pageType: string;
  siteName: string;
  headline: string;
  subheadline: string;
}) {
  return (
    <PageEntrance>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
        {pageType.replace("-", " ")} · {siteName}
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">{subheadline}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/get-estimate" size="lg">
          {CTA_LABELS.secondary} <ArrowRight />
        </Button>
        <Button href="/book-consultation" size="lg" variant="outline">
          {CTA_LABELS.primary}
        </Button>
      </div>
      <p className="mt-3 text-sm text-white/45">
        {CONVERSION_EXPECTATIONS.estimateTimeline} · No obligation · NDA on request
      </p>
    </PageEntrance>
  );
}
