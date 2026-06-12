import Link from "next/link";
import { eeatAudits, getEeatOverallScore } from "@/lib/eeat-audit-data";
import {
  authorityScorecard,
  overallPageTypeEeat,
  pageTypeEeatAudits,
  priorityTasks,
} from "@/lib/authority-deliverable";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, Caption } from "@/components/design/typography";

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs">
        <span className="text-muted">{label}</span>
        <span className="font-medium">{value}/10</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-border">
        <div className="h-2 rounded-full bg-brand-600" style={{ width: `${value * 10}%` }} />
      </div>
    </div>
  );
}

function ScoreCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border bg-surface-elevated p-5 text-center">
      <p className="font-display text-3xl font-bold text-brand-600">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export function EeatAuditHub() {
  const s = authorityScorecard;

  return (
    <>
      <PageHero
        eyebrow="E-E-A-T audit"
        title={
          <>
            Authority <AccentGradient>scorecard</AccentGradient>
          </>
        }
        description={`Phase 3 deliverable — assessed ${s.assessedAt}. Experience, expertise, authority, trust, GEO, AI search readiness, and conversion potential.`}
      />

      <PageSection className="bg-[var(--v6-bg-soft)]">
        <SectionHeader title="Overall scores" description="Post Phase 3 GEO, statistics, and case study sprint." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ScoreCard label="GEO Score" value={s.geo} />
          <ScoreCard label="E-E-A-T Score" value={s.eeat} />
          <ScoreCard label="AI Search Readiness" value={s.aiSearchReadiness} />
          <ScoreCard label="Authority Score" value={s.authority} />
          <ScoreCard label="Trust Score" value={s.trust} />
          <ScoreCard label="Conversion Score" value={s.conversion} />
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader title="Audit by page type" description="Sample paths with weaknesses and recommendations." />
        <div className="mt-8 space-y-6">
          {pageTypeEeatAudits.map((audit) => (
            <Card key={audit.pageType} padding="lg" interactive={false}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-bold">{audit.pageType}</p>
                  <Link href={audit.samplePath} className="mt-1 text-sm text-brand-600 hover:text-brand-500">
                    {audit.samplePath}
                  </Link>
                </div>
                <p className="font-display text-2xl font-bold text-brand-600">{overallPageTypeEeat(audit)}/10</p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <ScoreBar label="Experience" value={audit.experience} />
                <ScoreBar label="Expertise" value={audit.expertise} />
                <ScoreBar label="Authority" value={audit.authority} />
                <ScoreBar label="Trust" value={audit.trust} />
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted">Weaknesses</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
                    {audit.weaknesses.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted">Recommendations</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
                    {audit.recommendations.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader title="Key page audits" />
        <div className="mt-8 space-y-6">
          {eeatAudits.map((audit) => {
            const overall = getEeatOverallScore(audit);
            return (
              <Card key={audit.path} padding="lg" interactive={false}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <Link href={audit.path} className="font-display text-lg font-bold hover:text-brand-400">
                      {audit.title}
                    </Link>
                    <Caption className="mt-1">{audit.path}</Caption>
                  </div>
                  <p className="font-display text-2xl font-bold text-brand-600">{overall}/10</p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <ScoreBar label="Experience" value={audit.experience} />
                  <ScoreBar label="Expertise" value={audit.expertise} />
                  <ScoreBar label="Authority" value={audit.authority} />
                  <ScoreBar label="Trust" value={audit.trust} />
                </div>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="bg-[var(--v6-bg-soft)]">
        <SectionHeader title="Priority tasks" description="Highest-impact improvements — no vanity SEO." />
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="font-display font-semibold text-brand-600">Priority 1</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
              {priorityTasks.priority1.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-brand-600">Priority 2</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
              {priorityTasks.priority2.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-brand-600">Priority 3</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
              {priorityTasks.priority3.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>
    </>
  );
}
