import Link from "next/link";
import { drashtiFeaturedCaseStudy, homepageCaseStudyCards } from "@/lib/homepage";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowRight } from "@/components/ui/Icons";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { Button } from "@/components/ui/Button";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";
import { CONVERSION_ROUTES } from "@/lib/conversion-copy";

function DrashtiFeaturedCard() {
  const d = drashtiFeaturedCaseStudy;
  return (
    <article className="v6-card flex min-w-0 flex-col overflow-hidden ring-2 ring-[#4f46e5]/30 lg:col-span-3">
      <div className="border-b border-[var(--v6-border)] bg-[#eef2ff] px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-[#4f46e5]">
            Named client · {d.location}
          </span>
          <a
            href={d.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#4f46e5] hover:underline"
          >
            Verify live →
          </a>
        </div>
        <p className="mt-2 font-display text-2xl font-bold text-[#4f46e5]">{d.client}</p>
        <p className="mt-1 text-sm font-semibold text-[var(--v6-text-secondary)]">{d.highlight}</p>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-[var(--v6-text)]">{d.title}</h3>
          <dl className="mt-4 grid grid-cols-3 gap-4">
            {d.metrics.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-2xl font-bold text-[#0f172a]">{m.value}</dt>
                <dd className="text-xs text-[var(--v6-text-muted)]">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-4 flex shrink-0 flex-col gap-2 sm:mt-0">
          <Button href={d.href} variant="primary" size="md">
            Read case study <ArrowRight />
          </Button>
          <a
            href={d.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-semibold text-[#4f46e5] hover:underline"
          >
            drashtichemical.com →
          </a>
        </div>
      </div>
    </article>
  );
}

export function HomeCaseStudies() {
  return (
    <HomeSection tone="white" aria-label="Case studies">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <FadeIn className="flex-1">
          <HomeSectionIntro
            align="left"
            wideTitle
            eyebrow="Case studies"
            title="Named clients, verifiable outcomes"
            description="Every engagement includes challenge, solution, technology, timeline, and results. Start with our named chemical supplier build — live and verifiable on Google."
          />
        </FadeIn>
        <FadeIn delay={0.05}>
          <Button href={CONVERSION_ROUTES.caseStudies} variant="secondary" size="md" className="shrink-0">
            View all case studies <ArrowRight />
          </Button>
        </FadeIn>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <FadeIn className="lg:col-span-3">
          <DrashtiFeaturedCard />
        </FadeIn>
        {homepageCaseStudyCards.map((study) => (
          <article key={study.slug} className="v6-card flex min-w-0 flex-col overflow-hidden">
            <div className="border-b border-[var(--v6-border)] bg-[#f8fafc] px-6 py-5">
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--v6-text-muted)]">
                {study.trust.industry}
              </span>
              <p className="mt-2 font-display text-2xl font-bold text-[#d97706]">{study.cardHighlight}</p>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--v6-text)]">{study.subtitle}</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-[var(--v6-text-muted)]">Challenge</dt>
                  <dd className="mt-0.5 text-[var(--v6-text-secondary)]">{study.challenges[0]}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--v6-text-muted)]">Result</dt>
                  <dd className="mt-0.5 font-medium text-emerald-700">{study.heroResult}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-6">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#4f46e5] hover:underline"
                >
                  Read case study <ArrowRight />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <FadeIn delay={0.1} className="mt-10 flex justify-center">
        <PrimaryCTA context={{ source: "homepage-case-studies" }} location="homepage_case_studies" />
      </FadeIn>
    </HomeSection>
  );
}
