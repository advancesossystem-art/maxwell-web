"use client";

import Link from "next/link";
import { successStories, testimonials } from "@/lib/testimonials-data";
import { FadeIn } from "@/components/motion/FadeIn";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";
import { CONVERSION_ROUTES } from "@/lib/conversion-copy";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";

/** Phase E — client testimonials, success stories, customer feedback */
export function HomeSocialProof() {
  return (
    <HomeSection tone="soft" aria-label="Social proof">
      <FadeIn>
        <HomeSectionIntro
          eyebrow="Social proof"
          title="What clients say after go-live"
          description="Anonymized where required—real industries, real challenges, measurable results."
        />
      </FadeIn>

      <div className="mt-12">
        <h3 className="font-display text-lg font-semibold text-[var(--v6-text)]">Client testimonials</h3>
        <ul className="mt-6 grid gap-5 lg:grid-cols-2">
          {testimonials.slice(0, 4).map((t) => (
            <li key={t.id} className="v6-testimonial-card min-w-0 overflow-hidden p-6">
              <p className="text-sm leading-relaxed text-[var(--v6-text-secondary)]">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 border-t border-[var(--v6-border)] pt-4">
                <p className="text-sm font-semibold text-[var(--v6-text)]">
                  {t.role}
                  {t.industry ? ` · ${t.industry}` : ""}
                </p>
                <p className="mt-1 text-xs font-medium text-[#4f46e5]">{t.outcome}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <h3 className="font-display text-lg font-semibold text-[var(--v6-text)]">Success stories</h3>
        <ul className="mt-6 grid gap-4 lg:grid-cols-3">
          {successStories.map((story) => (
            <li key={story.title} className="v6-card min-w-0 overflow-hidden p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
                {story.industry}
              </p>
              <p className="mt-2 font-display text-base font-semibold text-[var(--v6-text)]">{story.title}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="font-semibold text-[var(--v6-text-muted)]">Challenge</dt>
                  <dd className="text-[var(--v6-text-secondary)]">{story.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--v6-text-muted)]">Result</dt>
                  <dd className="font-semibold text-[#4f46e5]">{story.result}</dd>
                </div>
              </dl>
              {story.href ? (
                <Link href={story.href} className="mt-4 inline-block text-sm font-semibold text-[#4f46e5] hover:underline">
                  Read case study →
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </div>

      <FadeIn className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <PrimaryCTA location="homepage_social_proof" context={{ source: "homepage-social-proof" }} />
        <Link href={CONVERSION_ROUTES.caseStudies} className="v6-btn v6-btn-secondary">
          View success stories
        </Link>
      </FadeIn>
    </HomeSection>
  );
}
