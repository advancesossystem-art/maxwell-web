"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { industries } from "@/lib/constants";
import { ArrowRight } from "@/components/ui/Icons";

export function IndustriesSection() {
  return (
    <section className="bg-brand-900 py-24 lg:py-32">
      <Container>
        <SectionHeading
          badge="Industries"
          title="Built for the industries that move the world"
          description="Deep domain expertise across manufacturing, healthcare, education, logistics, and beyond."
          dark
        />

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <Link
                href={`/industries#${industry.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-600/40 hover:bg-white/10"
              >
                <h3 className="font-display text-xl font-semibold text-white">{industry.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-blue-100/60">
                  {industry.description}
                </p>
                <div className="mt-4 rounded-lg bg-brand-600/20 px-3 py-2 text-xs font-medium text-blue-200">
                  {industry.stats}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
