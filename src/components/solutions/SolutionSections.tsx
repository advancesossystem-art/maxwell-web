import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { SolutionChallengeMotion, SolutionHeroMotion } from "@/components/solutions/SolutionSectionsMotion";
import type { SolutionPageData } from "@/lib/solutions-data";
import { getCaseStudyBySlug } from "@/lib/case-studies-data";

export function SolutionBreadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
        </li>
        <span>/</span>
        <li>
          <Link href="/solutions" className="hover:text-white transition-colors">
            Solutions
          </Link>
        </li>
        <span>/</span>
        <li className="text-white/80">{title}</li>
      </ol>
    </nav>
  );
}

export function SolutionHero({ solution }: { solution: SolutionPageData }) {
  const query = `?service=${encodeURIComponent(solution.title)}`;

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
        <SolutionBreadcrumb title={solution.title} />
        <SolutionHeroMotion>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            {solution.primaryKeyword}
          </p>
          <h1
            className="mt-4 max-w-4xl font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            data-seo-speakable
          >
            {solution.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/55" data-seo-speakable>
            {solution.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={`/contact${query}`} size="lg">
              Get Proposal <ArrowRight />
            </Button>
            <Button href={solution.serviceHref} size="lg" variant="outline">
              Service Details
            </Button>
          </div>
        </SolutionHeroMotion>
      </Container>
    </section>
  );
}

export function SolutionMarketInsights({ solution }: { solution: SolutionPageData }) {
  return (
    <section className="border-b border-border py-16">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Market Insights</p>
          <div
            className="mt-4 max-w-3xl rounded-xl border border-border bg-surface-elevated p-5"
            data-seo-speakable
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Quick answer</p>
            <p className="mt-2 text-lg leading-relaxed text-muted">{solution.marketInsights}</p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export function SolutionChallenges({ solution }: { solution: SolutionPageData }) {
  return (
    <section className="v6-lp-section--lead" aria-label="Industry challenges">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Challenges</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Problems we solve
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {solution.industryChallenges.map((c, i) => (
            <SolutionChallengeMotion
              key={c.title}
              delay={i * 0.08}
              className="rounded-2xl border border-border bg-surface-elevated p-8"
            >
              <h3 className="font-display font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted">{c.description}</p>
            </SolutionChallengeMotion>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionApproach({ solution }: { solution: SolutionPageData }) {
  return (
    <section className="bg-surface v6-lp-section" aria-label="Recommended approach">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Approach</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Recommended solution approach
          </h2>
        </FadeIn>
        <ol className="mt-12 space-y-4">
          {solution.recommendedApproach.map((step, i) => (
            <li
              key={step}
              className="flex gap-4 rounded-2xl border border-border bg-surface-elevated p-6"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                style={{ backgroundColor: solution.accent }}
              >
                {i + 1}
              </span>
              <span className="text-muted">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-2">
          {solution.technologies.map((t) => (
            <span key={t} className="rounded-md border border-border px-3 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionROI({ solution }: { solution: SolutionPageData }) {
  return (
    <section className="v6-lp-section" aria-label="ROI examples">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">ROI</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Measurable outcomes</h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {solution.roiExamples.map((r) => (
            <div key={r.label} className="rounded-2xl border border-border bg-surface-elevated p-8 text-center">
              <div className="font-display text-3xl font-bold" style={{ color: solution.accent }}>
                {r.metric}
              </div>
              <div className="mt-2 font-medium">{r.label}</div>
              <p className="mt-2 text-sm text-muted">{r.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionCaseStudies({ solution }: { solution: SolutionPageData }) {
  const studies = solution.caseStudySlugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => !!s);

  if (studies.length === 0) return null;

  return (
    <section className="bg-surface v6-lp-section" aria-label="Case studies">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Case Studies</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Proven delivery</h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group rounded-2xl border border-border bg-surface-elevated p-8 transition-all hover:border-brand-600/25"
            >
              <h3 className="font-display text-xl font-semibold group-hover:text-brand-700 transition-colors">
                {study.title}
              </h3>
              <p className="mt-2 text-sm text-muted line-clamp-3">{study.executiveSummary}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionIndustries({ solution }: { solution: SolutionPageData }) {
  return (
    <section className="v6-lp-section" aria-label="Industries">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Industries</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Industry expertise</h2>
        </FadeIn>
        <div className="mt-10 flex flex-wrap gap-3">
          {solution.industryLinks.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="rounded-xl border border-border px-6 py-4 font-medium hover:border-brand-600/25 hover:text-brand-700 transition-colors"
            >
              {ind.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionInternalLinks({ solution }: { solution: SolutionPageData }) {
  return (
    <section className="border-t border-border py-16" aria-label="Related pages">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Internal linking</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {solution.internalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-border p-5 transition-colors hover:border-brand-600/25"
            >
              <div className="font-medium text-brand-700">{link.label}</div>
              <p className="mt-1 text-sm text-muted">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {solution.secondaryKeywords.map((kw) => (
            <span key={kw} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              {kw}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {solution.relatedSearches.map((s) => (
            <span key={s} className="rounded-full bg-surface px-3 py-1 text-xs text-muted">
              {s}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionFAQ({ solution }: { solution: SolutionPageData }) {
  const query = `?service=${encodeURIComponent(solution.title)}`;

  return (
    <section className="bg-surface v6-lp-section--tail" aria-label="FAQ">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {solution.primaryKeyword} — questions
            </h2>
            <Button href={`/contact${query}`} className="mt-8">
              Contact Us
            </Button>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="space-y-3">
              {solution.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-border bg-surface-elevated open:border-brand-600/20"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 font-display text-sm font-semibold [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-sm text-muted" data-seo-speakable>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function SolutionCTA({ solution }: { solution: SolutionPageData }) {
  const query = `?service=${encodeURIComponent(solution.title)}`;

  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      style={{ background: `linear-gradient(135deg, ${solution.accent}22, #030712)` }}
    >
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Start your {solution.title} project</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Free discovery call. Milestone-based pricing. Senior engineers from day one.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={`/contact${query}`} size="lg">
            Contact Us <ArrowRight />
          </Button>
          <Button href="/get-estimate" size="lg" variant="secondary">
            Get Estimate
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted">
          <Link href="/locations" className="hover:text-brand-600 transition-colors">
            Locations
          </Link>
          <Link href={solution.serviceHref} className="hover:text-brand-600 transition-colors">
            Full Service Page
          </Link>
        </div>
      </Container>
    </section>
  );
}
