"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { CompanyCTA } from "@/components/company/CompanyCTA";
import { PageSection } from "@/components/design/PageSection";
import { CertificationGrid } from "@/components/trust/CertificationGrid";
import { TrustMetricsGrid } from "@/components/company/TrustMetrics";
import { ClientLogoCloud } from "@/components/trust/ClientLogoCloud";
import { CompanyTimeline, GrowthVisualization } from "@/components/company/CompanyTimeline";
import { TechEcosystemDiagram, GlobalDeliveryMap } from "@/components/company/CompanyVisuals";
import {
  companyStory,
  coreValues,
  companyFaqs,
} from "@/lib/company-data";
import { aboutPageIndustries } from "@/lib/company-data";

export function AboutPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageSection compact>
        <ClientLogoCloud mode="placeholder" />
      </PageSection>

      <PageSection compact>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold">Our story</h2>
            <div className="mt-4 space-y-3">
              {companyStory.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <GrowthVisualization />
          </FadeIn>
        </div>
      </PageSection>

      <PageSection compact tone="raised">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Mission</p>
            <h2 className="mt-2 font-display text-2xl font-bold">What drives us</h2>
            <p className="mt-3 leading-relaxed text-muted">{companyStory.mission}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Vision</p>
            <h2 className="mt-2 font-display text-2xl font-bold">Where we&apos;re headed</h2>
            <p className="mt-3 leading-relaxed text-muted">{companyStory.vision}</p>
          </FadeIn>
        </div>
      </PageSection>

      <PageSection compact>
        <FadeIn>
          <h2 className="text-center font-display text-2xl font-bold">Core values</h2>
        </FadeIn>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface-elevated p-5">
                <span className="text-2xl">{v.icon}</span>
                <h3 className="mt-2 font-display font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{v.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection compact tone="raised">
        <FadeIn>
          <h2 className="text-center font-display text-2xl font-bold">Company journey</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted">
            Eight years of building trust, one project at a time.
          </p>
        </FadeIn>
        <div className="mt-8">
          <CompanyTimeline />
        </div>
      </PageSection>

      <PageSection compact>
        <FadeIn>
          <h2 className="font-display text-2xl font-bold">Industries we serve</h2>
        </FadeIn>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {aboutPageIndustries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group rounded-xl border border-border p-5 transition-all hover:border-brand-600/25 hover:bg-surface"
            >
              <h3 className="font-display font-semibold transition-colors group-hover:text-brand-700">
                {ind.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{ind.description}</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          <Link href="/industries" className="font-medium text-brand-600 hover:underline">
            View all industries →
          </Link>
        </p>
      </PageSection>

      <PageSection compact tone="raised">
        <FadeIn>
          <h2 className="text-center font-display text-2xl font-bold">Technology expertise</h2>
        </FadeIn>
        <div className="mt-8">
          <TechEcosystemDiagram />
        </div>
      </PageSection>

      <PageSection compact>
        <FadeIn>
          <h2 className="text-center font-display text-2xl font-bold">Global delivery model</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted">
            India-based engineering with worldwide client coverage.
          </p>
        </FadeIn>
        <div className="mt-8">
          <GlobalDeliveryMap />
        </div>
      </PageSection>

      <PageSection compact tone="raised">
        <FadeIn>
          <h2 className="text-center font-display text-2xl font-bold">Trust & delivery metrics</h2>
        </FadeIn>
        <div className="mt-8">
          <TrustMetricsGrid />
        </div>
        <div className="mt-6">
          <CertificationGrid compact />
        </div>
      </PageSection>

      <PageSection compact containerClassName="max-w-2xl">
        <h2 className="text-center font-display text-2xl font-bold">FAQ</h2>
        <div className="mt-6 divide-y divide-border">
          {companyFaqs.map((faq, i) => (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full justify-between py-4 text-left"
              >
                <span className="pr-4 font-medium">{faq.question}</span>
                <span className="text-brand-600">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="pb-4 text-sm text-muted">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection compact>
        <CompanyCTA />
      </PageSection>
    </>
  );
}
