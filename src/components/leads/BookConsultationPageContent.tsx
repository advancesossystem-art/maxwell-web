"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { LeadContactForm } from "@/components/leads/LeadContactForm";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { consultationReasons, consultationProcess } from "@/lib/leads-data";
import { getAllCaseStudies } from "@/lib/case-studies-data";
import { ArrowRight } from "@/components/ui/Icons";
import { AccentGradient } from "@/components/design/typography";

export function BookConsultationPageContent() {
  const stories = getAllCaseStudies().slice(0, 3);

  return (
    <>
      <PageHero
        compact
        layout="split"
        eyebrow="Consultation"
        title={
          <>
            Book a consultation with <AccentGradient>senior engineers</AccentGradient>
          </>
        }
        description="Discuss scope, timeline, and investment with the people who will actually build your system—not a sales script."
        aside={
          <div className="grid w-full gap-2.5 sm:grid-cols-2">
            {consultationReasons.map((r) => (
              <div key={r.title} className="v6-card h-full p-3.5 sm:p-4">
                <h3 className="font-display text-sm font-semibold text-[var(--v6-text)]">{r.title}</h3>
                <p className="mt-1 text-xs leading-snug text-[var(--v6-text-secondary)]">{r.description}</p>
              </div>
            ))}
          </div>
        }
      >
        <Button href="#consultation-form" size="lg">
          Request consultation
        </Button>
      </PageHero>

      <PageSection compact>
        <SectionHeader
          dense
          eyebrow="Proof"
          title="Representative outcomes"
          description="Documented delivery patterns across regulated and operationally complex sectors."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 0.05}>
              <Link href={`/case-studies/${s.slug}`} className="v6-card v6-card-accent group block h-full p-5">
                <p className="text-xs font-medium text-[#4f46e5]">{s.trust.industry}</p>
                <h3 className="mt-1.5 font-display text-base font-semibold text-[var(--v6-text)] group-hover:text-[#4f46e5] transition-colors">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--v6-text-secondary)]">{s.cardHighlight}</p>
              </Link>
            </FadeIn>
          ))}
          <FadeIn delay={0.15}>
            <Link
              href="/case-studies"
              className="v6-card flex h-full flex-col justify-center border-dashed p-5 transition-colors hover:border-[#4f46e5]/40"
            >
              <p className="font-display text-base font-semibold text-[var(--v6-text)]">All case studies</p>
              <p className="mt-1.5 text-sm text-[var(--v6-text-secondary)]">
                Explore measurable outcomes across industries.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#4f46e5]">
                View portfolio <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </FadeIn>
        </div>
      </PageSection>

      <PageSection compact tone="raised">
        <SectionHeader dense eyebrow="Process" title="What happens after you reach out" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {consultationProcess.map((p, i) => (
            <FadeIn key={p.step} delay={i * 0.05}>
              <div className="v6-card flex h-full gap-3 p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#4f46e5]/25 bg-[#4f46e5]/10 font-display text-xs font-bold text-[#4f46e5]">
                  {p.step}
                </div>
                <div className="min-w-0 text-left">
                  <h3 className="font-display text-sm font-semibold text-[var(--v6-text)]">{p.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--v6-text-secondary)]">{p.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection compact id="consultation-form">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
          <SectionHeader
            dense
            className="mb-0 lg:col-span-4"
            title="Request your consultation"
            description="We respond within one business day to schedule your session."
          />

          <div className="lg:col-span-8">
            <div className="v6-card w-full p-5 sm:p-7">
              <LeadContactForm source="book-consultation" submitLabel="Book Consultation" compact />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/get-estimate" variant="secondary" size="md">
                Get Project Estimate
              </Button>
              <Button href="/project-calculator" variant="secondary" size="md">
                Use Cost Calculator
              </Button>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
