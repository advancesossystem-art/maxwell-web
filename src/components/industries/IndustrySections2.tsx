"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { IndustryCTA } from "@/components/industries/IndustryCTA";
import type { IndustryPageData } from "@/lib/industries-data";

export function IndustryUseCases({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="py-20 lg:py-28" aria-label="Use cases">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Use Cases</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Real-world applications
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {industry.useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid gap-4 rounded-2xl border border-border bg-surface-elevated p-6 lg:grid-cols-3 lg:items-center lg:p-8"
            >
              <div className="lg:col-span-1">
                <h3 className="font-display font-semibold">{uc.title}</h3>
                <p className="mt-2 text-sm text-muted">{uc.description}</p>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-xl border px-4 py-3 text-sm font-medium" style={{ borderColor: `${industry.accent}30`, backgroundColor: `${industry.accent}08`, color: industry.accent }}>
                  → {uc.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function IndustryCaseStudy({ industry }: { industry: IndustryPageData }) {
  const cs = industry.caseStudy;
  return (
    <section className="bg-surface py-20 lg:py-28" aria-label="Case study">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Case Study</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Proven results</h2>
        </FadeIn>

        <motion.article
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface-elevated"
        >
          <div className="grid lg:grid-cols-5">
            <div className="p-8 lg:col-span-2 lg:p-10" style={{ background: `linear-gradient(135deg, ${industry.accent}15, transparent)` }}>
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: industry.accent }}>{industry.title}</span>
              <h3 className="mt-3 font-display text-2xl font-bold">{cs.title}</h3>
              <p className="mt-1 text-sm text-muted">Confidential {industry.title.toLowerCase()} engagement</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {cs.tech.map((t) => (
                  <span key={t} className="rounded-md bg-surface px-2.5 py-1 text-xs text-muted">{t}</span>
                ))}
              </div>
            </div>
            <div className="p-8 lg:col-span-3 lg:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-600">Challenge</h4>
                  <p className="mt-2 text-sm text-muted">{cs.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-600">Solution</h4>
                  <p className="mt-2 text-sm text-muted">{cs.solution}</p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-600">Results</h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                  {cs.results.map((r) => (
                    <li key={r} className="rounded-xl px-4 py-3 text-sm font-medium" style={{ backgroundColor: `${industry.accent}12`, color: industry.accent }}>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.article>

        <FadeIn delay={0.1}>
          <div className="mt-12"><IndustryCTA variant="inline" industryName={industry.title} /></div>
        </FadeIn>
      </Container>
    </section>
  );
}

export function IndustryWhy({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="py-20 lg:py-28" aria-label="Why Maxwell">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Why Maxwell</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Your {industry.title.toLowerCase()} technology partner
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industry.whyMaxwell.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ backgroundColor: industry.accent }}>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-display font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function IndustryFAQ({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="bg-surface py-20 lg:py-28" aria-label="FAQ">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {industry.title} software questions
            </h2>
            <IndustryCTA variant="compact" industryName={industry.title} className="mt-8" />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="space-y-3">
              {industry.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-surface-elevated open:border-brand-600/20 open:bg-brand-50/20">
                  <summary className="cursor-pointer list-none px-6 py-5 font-display text-sm font-semibold sm:text-base [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-muted transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function IndustryFocusAreas({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="border-b border-border py-16" aria-label="Focus areas">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {industry.focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-surface-elevated p-4 text-center transition-colors hover:border-brand-600/20"
            >
              <div className="mx-auto mb-2 h-1 w-6 rounded-full" style={{ backgroundColor: industry.accent }} />
              <div className="text-xs font-semibold text-foreground">{area.title}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
