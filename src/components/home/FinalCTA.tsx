"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { homeFinalCta } from "@/lib/homepage";
import {
  CTA_LABELS,
  CONVERSION_ROUTES,
  consultationHref,
} from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";

export function FinalCTA() {
  return (
    <section className="v6-section v6-section--white pb-24" aria-label="Book consultation">
      <div className="v6-container">
        <FadeIn>
          <div className="flex w-full flex-col items-start justify-between gap-8 rounded-3xl border border-[var(--v6-border)] bg-gradient-to-br from-[#f8fafc] to-white px-8 py-12 shadow-lg sm:px-12 lg:flex-row lg:items-center lg:py-14">
            <div className="max-w-3xl">
              <h2 className="v6-section-title v6-section-title--wide text-balance">
                Your next stage of growth starts with{" "}
                <span className="v6-gradient-text">one conversation</span>.
              </h2>
              <p className="v6-lead mt-5 max-w-2xl">{homeFinalCta.description}</p>
            </div>
            <Link
              href={consultationHref({ source: "homepage-final" })}
              className="v6-btn v6-btn-primary v6-btn-lg shrink-0"
              onClick={() =>
                trackCTAClick(CTA_LABELS.primary, CONVERSION_ROUTES.consultation, "homepage_final")
              }
            >
              {CTA_LABELS.primary}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
