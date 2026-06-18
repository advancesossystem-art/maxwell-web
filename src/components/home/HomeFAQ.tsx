"use client";

import { useId, useState } from "react";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { homepageFaqs } from "@/lib/homepage";
import { FadeIn } from "@/components/motion/FadeIn";
import { HomeSection } from "@/components/home/HomeSection";
import { cn } from "@/lib/utils";

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <HomeSection tone="soft" aria-label="FAQ">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <FadeIn className="lg:col-span-2">
          <p className="v6-eyebrow-line v6-eyebrow">FAQ</p>
          <h2 className="v6-section-title mt-4">Everything you need to know</h2>
          <p className="v6-lead mt-4">
            Straight answers on cost, timeline, ownership, and security—before you commit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCTA location="homepage_faq" context={{ source: "homepage-faq" }} size="md" />
            <SecondaryCTA location="homepage_faq" size="md" variant="secondary" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-3">
          <div className="space-y-2" role="region" aria-label="Frequently asked questions">
            {homepageFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `${baseId}-panel-${i}`;
              const triggerId = `${baseId}-trigger-${i}`;
              return (
                <div
                  key={faq.question}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-colors duration-300",
                    isOpen ? "border-[#4f46e5]/30 shadow-md" : "border-[var(--v6-border)]",
                  )}
                >
                  <button
                    id={triggerId}
                    type="button"
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4f46e5]">
                        {faq.category}
                      </span>
                      <span className="mt-1 block font-display text-sm font-semibold text-[var(--v6-text)] sm:text-base">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--v6-border)] text-lg text-[var(--v6-text-muted)] transition-transform duration-200",
                        isOpen && "rotate-45 border-[#4f46e5]/30 text-[#4f46e5]",
                      )}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!isOpen}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <p className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-[var(--v6-text-secondary)]" data-seo-speakable>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </HomeSection>
  );
}
