"use client";

import { developmentProcess } from "@/lib/homepage";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const displayTitles: Record<string, string> = {};

export function DevelopmentProcess() {
  return (
    <section className="v6-section v6-section--soft" aria-label="How we work">
      <div className="v6-container">
        <FadeIn>
          <p className="v6-eyebrow-line v6-eyebrow">Our process</p>
          <h2 className="v6-section-title v6-section-title--wide mt-4 text-balance">
            How we engineer websites and systems
          </h2>
          <p className="v6-lead mt-4 max-w-3xl">
            Six clear stages reduce uncertainty—you always know what happens next, what you approve, and what you pay for.
          </p>
        </FadeIn>

        <StaggerContainer className="v6-journey mt-14" stagger={0.08}>
          {developmentProcess.map((step) => (
            <StaggerItem key={step.step} className="v6-journey-step">
              <div className="v6-journey-dot">{step.step}</div>
              <p className="font-display text-sm font-semibold text-[var(--v6-text)]">
                {displayTitles[step.step] ?? step.title}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--v6-text-muted)]">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
