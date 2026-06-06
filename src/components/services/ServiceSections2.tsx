"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { DevelopmentProcess } from "@/components/home/DevelopmentProcess";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import type { ServicePageData } from "@/lib/services-data";

export function ServiceIndustries({ service }: { service: ServicePageData }) {
  return (
    <section className="bg-surface py-20 lg:py-28" aria-label="Industry applications">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Industries</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Industry applications
            </h2>
            <p className="mt-4 text-muted">
              Domain expertise that generic agencies can&apos;t replicate.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {service.industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 rounded-2xl border border-border bg-surface-elevated p-6"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: service.accent }}
              >
                {industry.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-display font-semibold">{industry.name}</h3>
                <p className="mt-1 text-sm text-muted">{industry.application}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServiceProjects({ service }: { service: ServicePageData }) {
  return (
    <section className="py-20 lg:py-28" aria-label="Project examples">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Case Studies</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Project examples
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {service.projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-border bg-surface-elevated"
            >
              <div
                className="px-6 py-5"
                style={{ background: `linear-gradient(135deg, ${service.accent}20, transparent)` }}
              >
                <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
                  {project.industry}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted">
                  <span className="font-medium text-foreground">Challenge: </span>
                  {project.challenge}
                </p>
                <div className="mt-4 rounded-xl border border-brand-600/15 bg-brand-50/50 p-4">
                  <p className="font-display text-sm font-semibold text-brand-800">{project.result}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md bg-surface px-2 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-12">
            <ServiceCTA variant="inline" serviceName={service.title} />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export function ServiceWhy({ service }: { service: ServicePageData }) {
  return (
    <section className="bg-[#030712] py-20 lg:py-28" aria-label="Why Maxwell">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Why Maxwell</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why choose Maxwell Electrodeal
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.whyMaxwell.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-dark rounded-2xl border border-white/[0.06] p-6"
            >
              <div
                className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: `${service.accent}30` }}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServiceProcessWrapper() {
  return <DevelopmentProcess />;
}

export function ServiceFAQ({ service }: { service: ServicePageData }) {
  return (
    <section className="py-20 lg:py-28" aria-label="FAQ">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Common questions
            </h2>
            <p className="mt-4 text-muted">
              Answers about {service.title.toLowerCase()} projects, timelines, and investment.
            </p>
            <ServiceCTA variant="compact" serviceName={service.title} className="mt-8" />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="space-y-3">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-border bg-surface-elevated open:border-brand-600/20 open:bg-brand-50/20"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 font-display text-sm font-semibold sm:text-base [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-muted transition-transform group-open:rotate-45">
                        +
                      </span>
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
