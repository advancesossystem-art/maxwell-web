"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { homeFinalCta } from "@/lib/homepage";
import {
  CTA_LABELS,
  CONVERSION_ROUTES,
  consultationHref,
  estimateHref,
} from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";

export function FinalCTA() {
  return (
    <section className="v6-section v6-section--white pb-24" aria-label="Book consultation">
      <div className="v6-container">
        <FadeIn>
          <div className="flex w-full flex-col items-start justify-between gap-8 rounded-3xl border border-[var(--v6-border)] bg-gradient-to-br from-[#f8fafc] to-white px-8 py-12 shadow-lg sm:px-12 lg:py-14">
            <div className="max-w-3xl">
              <h2 className="v6-section-title v6-section-title--wide text-balance">
                {homeFinalCta.title}
              </h2>
              <p className="v6-lead mt-5 max-w-2xl">{homeFinalCta.description}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap lg:w-auto lg:shrink-0">
              <Link
                href={estimateHref({ source: "homepage-final" })}
                className="v6-btn v6-btn-primary v6-btn-lg text-center"
                onClick={() =>
                  trackCTAClick(CTA_LABELS.secondary, CONVERSION_ROUTES.estimate, "homepage_final")
                }
              >
                {CTA_LABELS.secondary}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={consultationHref({ source: "homepage-final" })}
                className="v6-btn v6-btn-secondary v6-btn-lg text-center"
                onClick={() =>
                  trackCTAClick(CTA_LABELS.strategyCall, CONVERSION_ROUTES.consultation, "homepage_final")
                }
              >
                {CTA_LABELS.strategyCall}
              </Link>
              <Link
                href="/tools/software-cost-calculator"
                className="v6-btn v6-btn-secondary v6-btn-lg text-center"
                onClick={() =>
                  trackCTAClick(CTA_LABELS.calculateCost, "/tools/software-cost-calculator", "homepage_final")
                }
              >
                {CTA_LABELS.calculateCost}
              </Link>
              <Link
                href="/tools/project-roadmap"
                className="v6-btn v6-btn-secondary v6-btn-lg text-center"
                onClick={() =>
                  trackCTAClick(CTA_LABELS.customRoadmap, "/tools/project-roadmap", "homepage_final")
                }
              >
                {CTA_LABELS.customRoadmap}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
