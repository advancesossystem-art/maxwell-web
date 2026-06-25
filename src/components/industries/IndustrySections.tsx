"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn, MotionReveal } from "@/components/motion/FadeIn";
import { CARD_CLASSES } from "@/lib/animations/cards";
import { CounterUp } from "@/components/motion/CounterUp";
import { IndustryCTA } from "@/components/industries/IndustryCTA";
import { ArrowRight } from "@/components/ui/Icons";
import type { IndustryPageData } from "@/lib/industries-data";

export function IndustryChallenges({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="v6-lp-section--lead" aria-label="Industry challenges">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Challenges</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What {industry.title.toLowerCase()} leaders struggle with
            </h2>
            <p className="mt-4 text-lg text-muted">
              These operational gaps cost time, money, and competitive advantage every day.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {industry.challenges.map((c, i) => (
            <MotionReveal
              key={c.title}
              delay={i * 0.08}
              className="rounded-2xl border border-border bg-surface-elevated p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
            </MotionReveal>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-12"><IndustryCTA variant="inline" industryName={industry.title} /></div>
        </FadeIn>
      </Container>
    </section>
  );
}

export function IndustrySolutions({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="bg-surface v6-lp-section" aria-label="Solutions">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Solutions</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Software we build for {industry.title.toLowerCase()}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {industry.solutions.map((s, i) => (
            <MotionReveal
              key={s.title}
              delay={i * 0.06}
              y={24}
              hoverClassName="mx-anime-service-card"
              className="group rounded-2xl border border-border bg-surface-elevated p-7 transition-shadow hover:shadow-xl"
            >
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white" style={{ backgroundColor: industry.accent }}>
                {s.category}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
              {s.serviceSlug && (
                <Link href={`/services/${s.serviceSlug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100" style={{ color: industry.accent }}>
                  View service <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function IndustrySoftwareStack({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="v6-lp-section" aria-label="Recommended software stack">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Tech Stack</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Recommended software stack
            </h2>
            <p className="mt-4 text-muted">Purpose-built components for {industry.title.toLowerCase()} operations.</p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industry.softwareStack.map((item, i) => (
            <MotionReveal
              key={item.name}
              delay={i * 0.05}
              y={0}
              hoverClassName={CARD_CLASSES.industry}
              className="rounded-2xl border border-border p-6 transition-colors hover:border-brand-600/20"
            >
              <div className="h-1 w-8 rounded-full mb-4" style={{ backgroundColor: industry.accent }} />
              <h3 className="font-display font-semibold">{item.name}</h3>
              <p className="mt-1 text-sm text-muted">{item.purpose}</p>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function IndustryImpactMetrics({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="bg-[#030712] v6-lp-section" aria-label="Business impact">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">ROI</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Business impact metrics
            </h2>
            <p className="mt-4 text-white/50">Outcomes our {industry.title.toLowerCase()} clients achieve.</p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industry.impactMetrics.map((m, i) => (
            <MotionReveal
              key={m.label}
              delay={i * 0.1}
              y={24}
              className="glass-dark rounded-2xl border border-white/[0.06] p-6 text-center"
            >
              <div className="font-display text-4xl font-bold tracking-tight" style={{ color: industry.accent }}>
                <CounterUp value={m.value} />
              </div>
              <div className="mt-2 font-display text-sm font-semibold text-white">{m.label}</div>
              <p className="mt-2 text-xs text-white/45">{m.description}</p>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
