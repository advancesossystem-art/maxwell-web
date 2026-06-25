import { Container } from "@/components/ui/Container";
import { FadeIn, MotionReveal } from "@/components/motion/FadeIn";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceTechStackMotion } from "@/components/services/ServiceSectionsMotion";
import type { ServicePageData } from "@/lib/services-data";

export function ServiceProblems({ service }: { service: ServicePageData }) {
  return (
    <section className="v6-lp-section--lead" aria-label="Business problems">
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
            <MotionReveal
              key={problem.title}
              delay={i * 0.08}
              y={20}
              className="group min-w-0 overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{problem.description}</p>
            </MotionReveal>
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
    <section className="bg-surface v6-lp-section" aria-label="Solutions">
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
            <MotionReveal
              key={solution.title}
              delay={i * 0.06}
              y={24}
              hoverClassName="mx-anime-service-card"
              className="glass-dark min-w-0 overflow-hidden rounded-2xl border border-border bg-surface-elevated p-7 transition-shadow hover:shadow-xl hover:shadow-brand-600/5"
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
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServiceFeatures({ service }: { service: ServicePageData }) {
  return (
    <section className="v6-lp-section" aria-label="Features">
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
            <MotionReveal
              key={feature.title}
              delay={i * 0.05}
              y={16}
              duration={0.4}
              className="min-w-0 overflow-hidden rounded-2xl border border-border p-6 transition-colors hover:border-brand-600/20 hover:bg-brand-50/30"
            >
              <div
                className="mb-4 h-1 w-8 rounded-full"
                style={{ backgroundColor: service.accent }}
              />
              <h3 className="font-display font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </MotionReveal>
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
              <ServiceTechStackMotion key={tech} delay={i * 0.04}>
                {tech}
              </ServiceTechStackMotion>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
