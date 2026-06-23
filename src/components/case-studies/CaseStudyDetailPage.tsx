import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { CaseStudyConversionBlock } from "@/components/conversion/CaseStudyConversionBlock";
import { FadeIn } from "@/components/motion/FadeIn";
import { CheckIcon } from "@/components/ui/Icons";
import { CaseStudyROIDashboard } from "@/components/case-studies/CaseStudyROI";
import {
  CaseStudyTrustBar,
  ArchitectureDiagram,
  WorkflowDiagram,
  BeforeAfterComparison,
  ProjectTimeline,
  ProjectMilestones,
} from "@/components/case-studies/CaseStudyVisuals";
import { CaseStudyCardCompact } from "@/components/case-studies/CaseStudyCard";
import { CaseStudyAuthorityBlock } from "@/components/case-studies/CaseStudyAuthorityBlock";
import { CaseStudyGeoSections } from "@/components/case-studies/CaseStudyGeoSections";
import { CaseStudyBreadcrumb, CaseStudyCTA, CaseStudyCTAStrip } from "@/components/case-studies/CaseStudyCTA";
import { CaseStudyHeroMotion } from "@/components/case-studies/CaseStudyDetailMotion";
import type { CaseStudyData } from "@/lib/case-studies-data";
import { formatClientDescriptor } from "@/lib/client-attribution";
import { getRelatedCaseStudies } from "@/lib/case-studies-data";
import { cn } from "@/lib/utils";
import {
  csDarkEyebrow,
  csDarkLead,
  csDarkSection,
  csDarkTitle,
} from "@/components/case-studies/case-study-theme";

function SectionBlock({
  badge,
  title,
  description,
  children,
  dark = false,
}: {
  badge?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={cn(dark ? csDarkSection : "section-py-compact")}>
      <Container>
        <FadeIn>
          {badge && <p className={cn(dark ? csDarkEyebrow : "text-xs font-semibold uppercase tracking-[0.2em] text-[#4f46e5]")}>{badge}</p>}
          <h2 className={cn("mt-3", dark ? csDarkTitle : "font-display text-2xl font-bold text-[var(--v6-text)] sm:text-3xl")}>
            {title}
          </h2>
          {description ? <p className={cn("mt-4 max-w-2xl", dark ? csDarkLead : "text-[var(--v6-text-secondary)]")}>{description}</p> : null}
        </FadeIn>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}

export function CaseStudyDetailPage({ study }: { study: CaseStudyData }) {
  const related = getRelatedCaseStudies(study.slug);
  const context = { service: study.title, source: `case-study-${study.slug}` };
  const industrySlug = study.slug.includes("manufacturing")
    ? "manufacturing"
    : study.slug.includes("healthcare")
      ? "healthcare"
      : study.slug.includes("logistics")
        ? "logistics"
        : study.slug.includes("education") || study.slug.includes("educational")
          ? "education"
          : study.slug.includes("retail")
            ? "retail"
            : study.slug.includes("construction")
              ? "construction"
              : undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#030712] pb-16 pt-28 lg:pb-20 lg:pt-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% -15%, rgba(79, 70, 229, 0.22), transparent 62%)",
          }}
        />
        <Container className="relative z-10">
          <CaseStudyBreadcrumb title={study.title} />
          <CaseStudyHeroMotion>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-[#4f46e5]/20 px-3 py-1 text-xs font-medium text-[#a5b4fc]">
                {study.trust.industry}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                {study.trust.projectValue}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                {study.filters.businessOutcome}
              </span>
            </div>
            <h1 className="max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {study.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/55">{study.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA context={context} location="case_study_hero" />
              <SecondaryCTA context={context} location="case_study_hero" />
            </div>
          </CaseStudyHeroMotion>
        </Container>
      </section>

      {/* Trust Layer */}
      <section className="border-t border-white/[0.06] bg-[#030712] py-10 lg:py-12">
        <Container>
          <CaseStudyTrustBar trust={study.trust} dark />
        </Container>
      </section>

      {/* Executive Summary */}
      <SectionBlock badge="Overview" title="Executive Summary">
        <FadeIn>
          <p className="max-w-5xl text-lg leading-relaxed text-[var(--v6-text-secondary)]">
            {study.executiveSummary}
          </p>
        </FadeIn>
      </SectionBlock>

      {/* Client + Initial Situation */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Client Profile</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-[var(--v6-text)]">
                {formatClientDescriptor(study.trust.industry)}
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--v6-text-secondary)]">{study.clientProfile.overview}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-[var(--v6-text-muted)]">Size</dt>
                  <dd className="font-medium text-[var(--v6-text)]">{study.clientProfile.size}</dd>
                </div>
                <div>
                  <dt className="text-[var(--v6-text-muted)]">Sector</dt>
                  <dd className="font-medium text-[var(--v6-text)]">{study.clientProfile.sector}</dd>
                </div>
              </dl>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Initial Situation</p>
              <h2 className="mt-3 font-display text-2xl font-bold">Where they started</h2>
              <p className="mt-4 leading-relaxed text-muted">{study.initialSituation}</p>
              <div className="mt-8">
                <BeforeAfterComparison beforeAfter={study.beforeAfter} />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Challenges + Goals */}
      <SectionBlock
        badge="Strategy"
        title="Challenges & Project Goals"
        description="What blocked progress before delivery — and what leadership signed off to achieve."
        dark
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <div className="glass-dark rounded-2xl border border-white/[0.06] p-6">
              <h3 className="font-display text-lg font-semibold text-white">Key challenges</h3>
              <ul className="mt-4 space-y-3">
                {study.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-black/20">
              <h3 className="font-display text-lg font-semibold text-[var(--v6-text)]">Project goals</h3>
              <ul className="mt-4 space-y-3">
                {study.projectGoals.map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-[var(--v6-text-secondary)]">
                    <CheckIcon className="mt-0.5 shrink-0 text-[#4f46e5]" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </SectionBlock>

      {/* Discovery + Architecture */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Discovery & Planning</p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">How we planned the engagement</h2>
          </FadeIn>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {study.discoveryPlanning.map((step, i) => (
              <li key={step} className="flex gap-3 rounded-xl border border-border bg-surface-elevated p-4">
                <span className="v6-step-num">{i + 1}</span>
                <span className="text-sm text-muted">{step}</span>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Solution Architecture</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Technology architecture</h2>
              <p className="mt-4 max-w-3xl text-muted">{study.solutionArchitecture.overview}</p>
            </FadeIn>
            <div className="mt-10">
              <ArchitectureDiagram layers={study.solutionArchitecture.layers} accent={study.accent} />
            </div>
          </div>
        </Container>
      </section>

      {/* Workflow */}
      <SectionBlock badge="Process" title="End-to-end workflow" dark>
        <WorkflowDiagram steps={study.workflowSteps} accent={study.accent} dark />
      </SectionBlock>

      {/* Design + Development */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold text-[var(--v6-text)]">UI/UX design process</h2>
              <ul className="mt-6 space-y-4">
                {study.designProcess.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="v6-step-num">{i + 1}</span>
                    <span className="text-sm text-[var(--v6-text-secondary)]">{step}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-2xl font-bold text-[var(--v6-text)]">Development process</h2>
              <ul className="mt-6 space-y-4">
                {study.developmentProcess.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="v6-step-num v6-step-num--solid">{i + 1}</span>
                    <span className="text-sm text-[var(--v6-text-secondary)]">{step}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Tech Stack + Deployment */}
      <SectionBlock badge="Technical" title="Technology stack & deployment">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <h3 className="font-display text-lg font-semibold">Technology stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.technologyStack.map((t) => (
                <span key={t} className="rounded-xl border border-border px-4 py-2 font-display text-sm font-medium hover:border-brand-600/30 hover:bg-brand-50">{t}</span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="font-display text-lg font-semibold">Deployment strategy</h3>
            <ul className="mt-4 space-y-3">
              {study.deploymentStrategy.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-muted">
                  <CheckIcon className="mt-0.5 shrink-0 text-brand-600" />
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </SectionBlock>

      {/* Timeline + Milestones */}
      <section className={csDarkSection}>
        <Container>
          <FadeIn>
            <p className={csDarkEyebrow}>Timeline</p>
            <h2 className={cn("mt-3", csDarkTitle)}>Project timeline</h2>
            <p className={cn("mt-4 max-w-2xl", csDarkLead)}>Phased delivery from discovery through rollout and hypercare.</p>
          </FadeIn>
          <div className="mt-10">
            <ProjectTimeline timeline={study.timeline} accent={study.accent} dark />
          </div>
          <div className="mt-16">
            <h3 className="font-display text-xl font-bold text-white">Key milestones</h3>
            <div className="mt-6">
              <ProjectMilestones milestones={study.milestones} accent={study.accent} dark />
            </div>
          </div>
        </Container>
      </section>

      {/* ROI Dashboard */}
      <SectionBlock
        badge="ROI"
        title="Results & ROI"
        description="Measurable business impact delivered within the agreed timeline."
        dark
      >
        <CaseStudyROIDashboard metrics={study.roiMetrics} results={study.results} accent={study.accent} />
      </SectionBlock>

      <CaseStudyAuthorityBlock study={study} />

      {/* Lessons Learned */}
      <section className="bg-surface py-12 lg:py-16">
        <Container>
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Insights</p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Lessons learned</h2>
          </FadeIn>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {study.lessonsLearned.map((lesson) => (
              <li key={lesson} className="rounded-xl border border-border bg-surface-elevated p-5 text-sm text-muted">
                {lesson}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Similar Solutions */}
      <SectionBlock badge="Next Steps" title="Similar solutions">
        <div className="grid gap-4 sm:grid-cols-3">
          {study.similarSolutions.map((sol) => (
            <Link
              key={sol.href}
              href={sol.href}
              className="v6-card group p-5 transition-colors hover:border-[#4f46e5]/25"
            >
              <h4 className="font-display font-semibold text-[var(--v6-text)] transition-colors group-hover:text-[#4f46e5]">
                {sol.title}
              </h4>
              <p className="mt-2 text-sm text-[var(--v6-text-secondary)]">{sol.description}</p>
            </Link>
          ))}
        </div>
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-lg font-semibold text-[var(--v6-text)]">Related case studies</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((s) => (
                <CaseStudyCardCompact key={s.slug} study={s} />
              ))}
            </div>
          </div>
        )}
      </SectionBlock>

      <CaseStudyGeoSections study={study} />

      <CaseStudyConversionBlock
        studyTitle={study.title}
        caseStudySlug={study.slug}
        industrySlug={industrySlug}
      />

      <CaseStudyCTA studyTitle={study.title} />
      <CaseStudyCTAStrip studyTitle={study.title} />
    </>
  );
}
