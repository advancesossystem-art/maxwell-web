"use client";

import { technologies, trustIndustries, deliveryHighlights } from "@/lib/homepage";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Section } from "@/components/redesign/Section";
import { MaxwellSectionHeader } from "@/components/maxwell/MaxwellSectionHeader";
import { Card } from "@/components/design/Card";

export function TrustSection() {
  return (
    <Section className="v6-lp-section" aria-label="Trust indicators">
      <FadeIn>
        <MaxwellSectionHeader
          eyebrow="Trusted engineering"
          title="Built with the tools enterprises rely on"
        />
      </FadeIn>

      <StaggerContainer className="mt-12 flex flex-wrap justify-center gap-2" stagger={0.04}>
        {technologies.map((tech) => (
          <StaggerItem key={tech.name}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-sm font-medium text-[#CBD5E1]">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: tech.color }} />
              {tech.name}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <Card interactive={false} padding="lg">
            <h3 className="font-display text-lg font-semibold text-white">Industries we serve</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {trustIndustries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-white/[0.06] px-3 py-1 text-sm text-[#94A3B8]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </Card>
        </FadeIn>
        <FadeIn delay={0.15}>
          <Card interactive={false} padding="lg">
            <h3 className="font-display text-lg font-semibold text-white">How we deliver</h3>
            <ul className="mt-5 space-y-4">
              {deliveryHighlights.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500/80" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-sm text-[#94A3B8]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
