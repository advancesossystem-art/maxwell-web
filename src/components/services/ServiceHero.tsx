import { Container } from "@/components/ui/Container";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { TrustNearCTA } from "@/components/conversion/TrustNearCTA";
import { getServiceIcon } from "@/lib/service-icons";
import { ServiceBreadcrumb } from "@/components/services/ServiceCTA";
import { FadeIn } from "@/components/motion/FadeIn";
import type { ServicePageData } from "@/lib/services-data";

export function ServiceHero({ service }: { service: ServicePageData }) {
  const Icon = getServiceIcon(service.icon);
  const context = { service: service.title, source: `service-${service.slug}` };

  return (
    <section className="relative overflow-hidden bg-background section-hero">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% -15%, rgba(37, 99, 235, 0.14), transparent 62%)",
        }}
      />

      <Container className="relative z-10">
        <ServiceBreadcrumb title={service.title} />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--v6-border)] bg-[var(--v6-bg-soft)] px-4 py-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: `${service.accent}` }}
              >
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-sm text-[var(--v6-text-secondary)]">Starting from {service.startingPrice}</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-[var(--v6-text)] sm:text-5xl lg:text-6xl">
              {service.headline}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--v6-text-secondary)] sm:text-xl">{service.subheadline}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCTA context={context} location="service_hero" className="shadow-lg shadow-brand-600/25" />
              <SecondaryCTA context={context} location="service_hero" />
            </div>
            <TrustNearCTA compact className="mt-6 justify-start" />
          </FadeIn>

          <FadeIn delay={0.15} className="hidden lg:block">
            <div className="rounded-2xl border border-[var(--v6-border)] bg-white p-8 shadow-[var(--v6-shadow-sm)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">At a glance</p>
              <div className="mt-5 space-y-4">
                {service.features.slice(0, 4).map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <div
                      className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: service.accent }}
                    />
                    <div>
                      <div className="text-sm font-medium text-[var(--v6-text)]">{f.title}</div>
                      <div className="mt-0.5 text-xs text-[var(--v6-text-muted)]">{f.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.techStack.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[var(--v6-border)] bg-[var(--v6-bg-soft)] px-2.5 py-1 text-xs text-[var(--v6-text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
