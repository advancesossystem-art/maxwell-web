"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import type { ServicePageData } from "@/lib/services-data";

export function ServiceProblems({ service }: { service: ServicePageData }) {
  return (
    <section className="py-20 lg:py-28" aria-label="Business problems">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">The Challenge</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Problems we solve
            </h2>
            <p className="mt-4 text-lg text-muted">
              If any of these sound familiar, you&apos;re ready for a better approach.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {service.problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12">
            <ServiceCTA variant="inline" serviceName={service.title} />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export function ServiceSolutions({ service }: { service: ServicePageData }) {
  return (
    <section className="bg-surface py-20 lg:py-28" aria-label="Solutions">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Solutions</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What we build for you
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {service.solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass-dark rounded-2xl border border-border bg-surface-elevated p-7 transition-shadow hover:shadow-xl hover:shadow-brand-600/5"
            >
              <h3 className="font-display text-xl font-semibold">{solution.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{solution.description}</p>
              <ul className="mt-5 space-y-2">
                {solution.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1 w-1 rounded-full bg-brand-600" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServiceFeatures({ service }: { service: ServicePageData }) {
  return (
    <section className="py-20 lg:py-28" aria-label="Features">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Capabilities</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Features &amp; capabilities
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-2xl border border-border p-6 transition-colors hover:border-brand-600/20 hover:bg-brand-50/30"
            >
              <div
                className="mb-4 h-1 w-8 rounded-full"
                style={{ backgroundColor: service.accent }}
              />
              <h3 className="font-display font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServiceTechStack({ service }: { service: ServicePageData }) {
  return (
    <section className="border-y border-border bg-[#030712] py-16" aria-label="Technology stack">
      <Container>
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Technology Stack
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {service.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 font-display text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-brand-500/40 hover:text-white"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
