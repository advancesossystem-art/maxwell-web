"use client";

import Link from "next/link";
import { homepageIndustries } from "@/lib/homepage";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

export function IndustriesShowcase() {
  return (
    <section className="v6-section v6-section--white" aria-label="Industries">
      <div className="v6-container">
        <FadeIn>
          <p className="v6-eyebrow-line v6-eyebrow">Industries we serve</p>
          <h2 className="v6-section-title v6-section-title--wide mt-4 text-balance">
            Deep expertise across India&apos;s core industrial sectors
          </h2>
          <p className="v6-lead mt-4 max-w-3xl">
            From manufacturing plants in Gujarat to distribution networks nationwide—we build ERP, CRM, and
            custom software tuned to your industry&apos;s compliance and workflows.
          </p>
        </FadeIn>

        <StaggerContainer className="v6-bento mt-14" stagger={0.06}>
          {homepageIndustries.map((industry) => (
            <StaggerItem key={industry.slug} className="v6-bento-item">
              <Link
                href={industry.href}
                className="group flex h-full flex-col"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)`,
                  }}
                >
                  {industry.title.charAt(0)}
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--v6-text)] group-hover:text-[#4f46e5] transition-colors">
                  {industry.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--v6-text-secondary)]">
                  {industry.outcome}
                </p>
                <span className="mt-4 text-sm font-medium text-[#4f46e5]">
                  Explore sector →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
