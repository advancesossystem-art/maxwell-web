"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
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
          <div
            id="consultation-form"
            className="v6-card flex w-full flex-col lg:sticky lg:top-24"
          >
            <div className="shrink-0 border-b border-[var(--v6-border)] p-5 sm:p-6 sm:pb-4">
              <p className="font-display text-base font-semibold text-[var(--v6-text)]">
                Request your consultation
              </p>
              <p className="mt-1 text-xs text-[var(--v6-text-secondary)]">
                We respond within one business day to schedule your session.
              </p>
            </div>
            <div className="flex-1 p-5 sm:p-6 sm:pt-4">
              <LeadContactForm source="book-consultation" submitLabel="Book Consultation" compact />
            </div>
            <div className="shrink-0 flex flex-wrap gap-2 border-t border-[var(--v6-border)] p-5 sm:p-6 sm:pt-4">
              <Button href="/get-estimate" variant="secondary" size="sm">
                Get Estimate
              </Button>
              <Button href="/project-calculator" variant="secondary" size="sm">
                Cost Calculator
              </Button>
            </div>
          </div>
        }
      />

      <PageSection compact tone="raised">
        <SectionHeader
          dense
          eyebrow="Why book"
          title="What you get from the session"
          description="A working session with engineers—not a generic sales pitch."
        />
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {consultationReasons.map((r) => (
            <div key={r.title} className="v6-card min-w-0 overflow-hidden p-3.5 sm:p-4">
              <h3 className="font-display text-sm font-semibold text-[var(--v6-text)]">{r.title}</h3>
              <p className="mt-1 text-xs leading-snug text-[var(--v6-text-secondary)]">{r.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection compact>
        <SectionHeader
          dense
          eyebrow="Proof"
          title="Representative outcomes"
          description="Documented delivery patterns across regulated and operationally complex sectors."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((s) => (
            <Link key={s.slug} href={`/case-studies/${s.slug}`} className="v6-card v6-card-accent group block min-w-0 overflow-hidden p-5">
              <p className="text-xs font-medium text-[#4f46e5]">{s.trust.industry}</p>
              <h3 className="mt-1.5 font-display text-base font-semibold text-[var(--v6-text)] group-hover:text-[#4f46e5] transition-colors">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm text-[var(--v6-text-secondary)]">{s.cardHighlight}</p>
            </Link>
          ))}
          <Link
            href="/case-studies"
            className="v6-card flex min-w-0 flex-col justify-center overflow-hidden border-dashed p-5 transition-colors hover:border-[#4f46e5]/40"
          >
            <p className="font-display text-base font-semibold text-[var(--v6-text)]">All case studies</p>
            <p className="mt-1.5 text-sm text-[var(--v6-text-secondary)]">
              Explore measurable outcomes across industries.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#4f46e5]">
              View portfolio <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </PageSection>

      <PageSection compact tone="raised">
        <SectionHeader dense eyebrow="Process" title="What happens after you reach out" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {consultationProcess.map((p) => (
            <div key={p.step} className="v6-card flex min-w-0 gap-3 overflow-hidden p-4 sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#4f46e5]/25 bg-[#4f46e5]/10 font-display text-xs font-bold text-[#4f46e5]">
                {p.step}
              </div>
              <div className="min-w-0 text-left">
                <h3 className="font-display text-sm font-semibold text-[var(--v6-text)]">{p.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--v6-text-secondary)]">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
}
