import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import { StatisticsPanel } from "@/components/authority/StatisticsPanel";
import { ExpertCommentary } from "@/components/authority/GeoDefinitionBlock";
import {
  buildCaseStudyFaqs,
  buildCaseStudyRelatedLinks,
  buildCaseStudyStrategicInsights,
} from "@/lib/case-study-geo";
import { getStatisticsForIndustry } from "@/lib/statistics-data";
import type { CaseStudyData } from "@/lib/case-studies-data";
import { siteConfig } from "@/lib/constants";

function LinkList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-brand-600 hover:text-brand-500">
              {link.label} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CaseStudyGeoSections({ study }: { study: CaseStudyData }) {
  const faqs = buildCaseStudyFaqs(study);
  const related = buildCaseStudyRelatedLinks(study);
  const insights = buildCaseStudyStrategicInsights(study);
  const industrySlug = study.trust.industry.toLowerCase();
  const stats = getStatisticsForIndustry(industrySlug);
  const url = `${siteConfig.url}/case-studies/${study.slug}`;

  return (
    <>
      <FaqPageJsonLd faqs={faqs} id={`${url}#faq`} />

      {/* Key results highlight */}
      <section className="border-y border-brand-500/20 bg-brand-500/5 py-12" aria-label="Key results">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Key results</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {study.results.slice(0, 4).map((r) => (
              <div key={r.label} className="rounded-xl border border-border bg-surface-elevated p-5">
                <p className="font-display text-2xl font-bold text-brand-600">
                  {r.metric} <span className="text-lg">{r.label}</span>
                </p>
                <p className="mt-2 text-sm text-muted">{r.description}</p>
              </div>
            ))}
          </div>
          {study.roiMetrics[0] && (
            <p className="mt-6 text-sm text-muted">
              ROI: <strong className="text-[var(--v6-text)]">{study.roiMetrics[0].value}</strong>{" "}
              {study.roiMetrics[0].label} — {study.roiMetrics[0].description}
            </p>
          )}
        </Container>
      </section>

      {/* Implementation approach — maps existing data */}
      <section className="section-py-compact">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Implementation approach</p>
          <h2 className="mt-2 font-display text-2xl font-bold">How delivery was structured</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold">Existing process</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{study.initialSituation}</p>
              <h3 className="mt-6 font-semibold">Pain points</h3>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
                {study.challenges.slice(0, 4).map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Solution</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{study.solutionArchitecture.overview}</p>
              <h3 className="mt-6 font-semibold">Timeline</h3>
              <p className="mt-2 text-sm text-muted">{study.trust.timeline}</p>
              <h3 className="mt-4 font-semibold">Technology stack</h3>
              <p className="mt-2 text-sm text-muted">{study.technologyStack.join(" · ")}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategic insights */}
      <section className="bg-[var(--v6-bg-soft)] section-py-compact">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Strategic insights</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Lessons for similar operators</h2>
          <ul className="mt-6 space-y-3">
            {insights.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted">
                <span className="text-brand-600">→</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ExpertCommentary
              author="Arun Kulkarni"
              role="Digital Transformation Lead"
              quote={`For ${study.trust.industry.toLowerCase()} engagements like this, executive sponsorship and phased go-live matter as much as architecture — ${study.trust.timeline} only works when change management keeps pace.`}
            />
          </div>
        </Container>
      </section>

      <StatisticsPanel {...stats} />

      {/* FAQs */}
      <section className="section-py-compact" data-seo-speakable>
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Case study FAQs</h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Related links */}
      <section className="border-t border-border py-12">
        <Container>
          <h2 className="font-display text-xl font-bold">Related resources</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <LinkList title="Resources & guides" links={related.resources} />
            <LinkList title="Services" links={related.services} />
            <LinkList title="Industries" links={related.industries} />
          </div>
        </Container>
      </section>
    </>
  );
}
