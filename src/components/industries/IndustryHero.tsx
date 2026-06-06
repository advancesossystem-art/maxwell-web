"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { TrustNearCTA } from "@/components/conversion/TrustNearCTA";
import { CTA_LABELS, CONVERSION_ROUTES } from "@/lib/conversion-copy";
import { trackCTAClick, trackIndustryAudit } from "@/lib/conversion-events";
import { IndustryBreadcrumb, industryIcons } from "@/components/industries/IndustryCTA";
import type { IndustryPageData } from "@/lib/industries-data";
import { cn } from "@/lib/utils";

export function IndustryHero({ industry }: { industry: IndustryPageData }) {
  const Icon = industryIcons[industry.icon];
  const context = { industry: industry.title, source: `industry-${industry.slug}` };
  const auditHref = `${CONVERSION_ROUTES.consultation}?industry=${encodeURIComponent(industry.title)}&intent=audit`;

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
        <IndustryBreadcrumb title={industry.title} />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--v6-border)] bg-[var(--v6-bg-soft)] px-4 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600/15 text-brand-600">
                {Icon}
              </div>
              <span className="text-sm text-[var(--v6-text-secondary)]">{industry.title} Software Solutions</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-[var(--v6-text)] sm:text-5xl lg:text-6xl">
              {industry.headline}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--v6-text-secondary)] sm:text-xl">{industry.subheadline}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCTA context={context} location="industry_hero" className="shadow-lg shadow-brand-600/25" />
              <Button
                href={auditHref}
                size="lg"
                variant="outline"
                onClick={() => {
                  trackIndustryAudit(industry.title, "industry_hero");
                  trackCTAClick(CTA_LABELS.industryAudit, auditHref, "industry_hero");
                }}
              >
                {CTA_LABELS.industryAudit}
              </Button>
            </div>
            <TrustNearCTA compact className="mt-6 justify-start" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:grid grid-cols-2 gap-3"
          >
            {industry.focusAreas.slice(0, 4).map((area, i) => (
              <div
                key={area.title}
                className="rounded-xl border border-[var(--v6-border)] bg-white p-5 shadow-[var(--v6-shadow-sm)]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-3 h-1 w-6 rounded-full" style={{ backgroundColor: industry.accent }} />
                <div className="text-sm font-medium text-[var(--v6-text)]">{area.title}</div>
                <div className="mt-1 line-clamp-2 text-xs text-[var(--v6-text-muted)]">{area.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export function IndustryWorkflow({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="border-y border-border bg-[#030712] py-16 lg:py-20" aria-label="Industry workflow">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Workflow</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            {industry.title} process digitization
          </h2>
        </div>

        <div className="relative mt-12 hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
          <div className="grid grid-cols-5 gap-4">
            {industry.workflowSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 text-xs font-bold text-white" style={{ borderColor: industry.accent, backgroundColor: `${industry.accent}20` }}>
                  {step.step}
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-xs text-white/45">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4 lg:hidden">
          {industry.workflowSteps.map((step) => (
            <div key={step.step} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: `${industry.accent}30` }}>
                {step.step}
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-white">{step.title}</h3>
                <p className="text-xs text-white/45">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
