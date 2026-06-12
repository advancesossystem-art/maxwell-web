import Link from "next/link";
import { researchStudies } from "@/lib/research-data";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";
import { formatPublishDate } from "@/lib/content/utils";
import { GeoQuickAnswer } from "@/components/authority/GeoContentSection";
import { StatisticsPanel } from "@/components/authority/StatisticsPanel";
import { industryStatistics } from "@/lib/statistics-data";

const researchGeo = {
  quickAnswerQuestion: "What is Maxwell Research?",
  quickAnswer:
    "Maxwell Research publishes original analysis on ERP, CRM, AI, manufacturing digitization, and SME technology adoption in India — with statistics, citations, and links to full reports and case studies.",
};

const researchStats = {
  industry: industryStatistics.filter((s) => s.section === "industry").slice(0, 3),
  market: industryStatistics.filter((s) => s.section === "market").slice(0, 3),
  benchmark: industryStatistics.filter((s) => s.section === "benchmark").slice(0, 3),
};

export function ResearchHub() {
  return (
    <>
      <PageHero
        eyebrow="Maxwell Research"
        title={
          <>
            Original <AccentGradient>industry analysis</AccentGradient>
          </>
        }
        description="Statistics, insights, and cited analysis from Maxwell delivery data and industry research — designed for SEO, AEO, and AI citation."
      />

      <GeoQuickAnswer geo={researchGeo} />
      <StatisticsPanel {...researchStats} />

      <PageSection>
        <div className="grid gap-6 lg:grid-cols-2">
          {researchStudies.map((study) => (
            <Card key={study.slug} padding="lg" interactive={false}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="v6-chip">{study.industry}</span>
                {study.featured && <span className="v6-chip v6-chip--pill text-brand-500">Featured</span>}
              </div>
              <H3 className="mt-4">{study.title}</H3>
              <Caption className="mt-2">{study.excerpt}</Caption>
              <Caption className="mt-2">{formatPublishDate(study.publishedAt)}</Caption>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {study.keyStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-border bg-surface-elevated p-3">
                    <p className="font-display text-xl font-bold text-brand-600">{stat.value}</p>
                    <p className="text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href={study.reportHref} className="text-sm font-medium text-brand-600 hover:text-brand-500">
                  Read full report →
                </Link>
              </div>

              <div className="mt-4 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase text-muted">Citations & related</p>
                <ul className="mt-2 space-y-1">
                  {study.citations.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="text-sm text-brand-600 hover:text-brand-500">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>
    </>
  );
}
