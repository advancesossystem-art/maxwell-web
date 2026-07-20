"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { getAllCaseStudies } from "@/lib/case-studies-data";
import { ArrowRight } from "@/components/ui/Icons";

export function CaseStudiesPreview() {
  const caseStudies = getAllCaseStudies();

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          badge="Case Studies"
          title="Results that speak louder than promises"
          description="Real projects, measurable outcomes. See how we've helped businesses grow with websites, web apps, and supporting software."
        />

        <StaggerContainer className="mt-16 grid gap-6 lg:grid-cols-2">
          {caseStudies.slice(0, 2).map((study) => (
            <StaggerItem key={study.slug}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-300 hover:glow-blue hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 p-8">
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {study.trust.industry}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white transition-colors group-hover:text-blue-100">
                    {study.subtitle}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-muted">{study.initialSituation}</p>
                  <ul className="mt-4 space-y-2">
                    {study.results.slice(0, 2).map((result) => (
                      <li key={result.label} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                        {result.metric} {result.label}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-brand-600">
                    Read case study <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            View all case studies <ArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
}
