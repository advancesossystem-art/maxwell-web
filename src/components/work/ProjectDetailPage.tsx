"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { WorkConversionBlock } from "@/components/conversion/WorkConversionBlock";
import { CTA_LABELS, consultationHref } from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectMockFrame } from "@/components/work/ProjectMock";
import { ProjectCardCompact } from "@/components/work/ProjectCard";
import { WorkBreadcrumb, WorkCTA, WorkCTAStrip } from "@/components/work/WorkCTA";
import { CheckIcon, ArrowRight } from "@/components/ui/Icons";
import type { ProjectData } from "@/lib/projects-data";
import { formatClientDescriptor, formatTestimonialAttribution } from "@/lib/client-attribution";
import { getRelatedProjects } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

export function ProjectDetailPage({ project }: { project: ProjectData }) {
  const related = getRelatedProjects(project.slug);
  const context = { service: project.title, source: `work-${project.slug}` };
  const similarHref = consultationHref({ ...context, project: `similar-to-${project.slug}` });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background section-hero">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% -15%, rgba(37, 99, 235, 0.14), transparent 62%)",
          }}
        />
        <Container className="relative z-10">
          <WorkBreadcrumb title={project.title} />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--v6-border)] bg-[#4f46e5]/10 px-3 py-1 text-xs font-medium text-[#4f46e5]">
                  {project.industry}
                </span>
                <span className="rounded-full border border-[var(--v6-border)] bg-[#f1f5f9] px-3 py-1 text-xs font-medium text-[var(--v6-text-secondary)]">
                  {project.projectType}
                </span>
              </div>
              <h1 className="font-display text-3xl font-bold leading-tight text-[var(--v6-text)] sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-[var(--v6-text-secondary)]">{project.subtitle}</p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-[var(--v6-border)] bg-[#f8fafc] px-5 py-3">
                <div className="font-display text-xl font-bold" style={{ color: project.accent }}>{project.heroResult}</div>
                <div className="text-sm text-[var(--v6-text-muted)]">Primary outcome</div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryCTA context={context} location="work_hero" />
                <Button
                  href={similarHref}
                  size="lg"
                  variant="outline"
                  onClick={() => trackCTAClick(CTA_LABELS.similarProject, similarHref, "work_hero")}
                >
                  {CTA_LABELS.similarProject}
                </Button>
                <SecondaryCTA context={context} location="work_hero" size="lg" variant="glass" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.8 }}>
              <ProjectMockFrame type={project.mockType} accent={project.accent} gradient={project.gradient} className="aspect-[16/10] rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Client Overview */}
      <section className="border-b border-border py-12">
        <Container>
          <div className="grid gap-8 sm:grid-cols-4">
            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Client</p>
              <h2 className="mt-1 font-display text-xl font-bold">
                {formatClientDescriptor(project.industry)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.clientOverview}</p>
            </div>
            {[
              { label: "Duration", value: project.duration },
              { label: "Team", value: project.teamSize },
              { label: "Industry", value: project.industry },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">{item.label}</p>
                <p className="mt-1 font-display font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Challenge + Strategy */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Challenge</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">The business problem</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.businessChallenge}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Strategy</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Our approach</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.solutionStrategy}</p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Design + Development Process */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold">Design process</h2>
              <ul className="mt-6 space-y-4">
                {project.designProcess.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="v6-step-num">{i + 1}</span>
                    <span className="text-sm text-muted">{step}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-2xl font-bold">Development process</h2>
              <ul className="mt-6 space-y-4">
                {project.developmentProcess.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="v6-step-num v6-step-num--solid">{i + 1}</span>
                    <span className="text-sm text-muted">{step}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Tech Stack + Features */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold">Technology stack</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="rounded-xl border border-border px-4 py-2 font-display text-sm font-medium transition-colors hover:border-brand-600/30 hover:bg-brand-50">{t}</span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-2xl font-bold">Key features delivered</h2>
              <ul className="mt-6 space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted">
                    <CheckIcon className="mt-0.5 shrink-0 text-brand-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-[#030712] py-20 lg:py-28">
        <Container>
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Screenshots</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">Product showcase</h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectMockFrame type={item.mockType} accent={project.accent} gradient={project.gradient} className="aspect-[16/10] rounded-xl" />
                <p className="mt-3 text-sm font-medium text-white/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Impact</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Results &amp; business impact</h2>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border p-6 text-center"
              >
                <div className="font-display text-3xl font-bold" style={{ color: project.accent }}>{r.metric}</div>
                <div className="mt-2 font-display font-semibold">{r.label}</div>
                {r.description && <p className="mt-1 text-xs text-muted">{r.description}</p>}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <FadeIn>
            <blockquote className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface-elevated p-8 lg:p-12">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg leading-relaxed text-foreground lg:text-xl">&ldquo;{project.testimonial.quote}&rdquo;</p>
              <footer className="mt-8 border-t border-border pt-6">
                <div className="font-display font-semibold text-[var(--v6-text)]">
                  {formatTestimonialAttribution(project.testimonial.role, project.industry)}
                </div>
              </footer>
            </blockquote>
          </FadeIn>
        </Container>
      </section>

      {/* Related + CTA */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28">
          <Container>
            <h2 className="font-display text-2xl font-bold">Related projects</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {related.map((p) => (
                <ProjectCardCompact key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <WorkConversionBlock project={project} />

      <Container>
        <WorkCTA projectTitle={project.title} />
      </Container>
      <WorkCTAStrip projectTitle={project.title} />
    </>
  );
}
