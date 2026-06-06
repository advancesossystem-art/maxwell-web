"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  buildAuditChecks,
  calculateLaunchScore,
  estimatedPageCount,
  lighthouseProjections,
  performanceTargets,
  priorityIssues,
  conversionRecommendations,
  crmIntegrationChecklist,
  deploymentChecklist,
  secretManagementChecklist,
  siteConfig,
  type AuditCheck,
  type AuditStatus,
} from "@/lib/launch-audit";

const statusColors: Record<AuditStatus, string> = {
  pass: "bg-emerald-100 text-emerald-800",
  warn: "bg-amber-100 text-amber-800",
  fail: "bg-red-100 text-red-700",
  pending: "bg-slate-100 text-slate-600",
};

function ScoreRing({ score }: { score: number }) {
  const color = score >= 95 ? "text-emerald-500 stroke-emerald-500" : score >= 85 ? "text-amber-500 stroke-amber-500" : "text-red-500 stroke-red-500";
  const dim = 120;
  const r = 52;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: dim, height: dim }}>
      <svg width={dim} height={dim} className="-rotate-90">
        <circle cx={dim / 2} cy={dim / 2} r={r} fill="none" className="stroke-slate-200" strokeWidth="8" />
        <circle cx={dim / 2} cy={dim / 2} r={r} fill="none" className={color} strokeWidth="8" strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <span className={`absolute font-display text-3xl font-bold ${color.split(" ")[0]}`}>{score}%</span>
    </div>
  );
}

function StatusGrid({ title, checks }: { title: string; checks: AuditCheck[] }) {
  const pass = checks.filter((c) => c.status === "pass").length;
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold">{title}</h3>
        <span className="text-sm text-muted">{pass}/{checks.length} pass</span>
      </div>
      <ul className="mt-4 space-y-2">
        {checks.slice(0, 4).map((c) => (
          <li key={c.id} className="flex items-start gap-2 text-sm">
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium capitalize ${statusColors[c.status]}`}>{c.status}</span>
            <span className="text-muted">{c.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteAuditDashboard() {
  const checks = buildAuditChecks();
  const launchScore = calculateLaunchScore(checks);
  const byCategory = (cat: string) => checks.filter((c) => c.category === cat);

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Executive Dashboard</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-slate-900">Launch Readiness Audit</h1>
            <p className="mt-2 text-muted">{siteConfig.name} · {estimatedPageCount}+ pages · Phase 13</p>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-border bg-white p-6 shadow-sm">
            <ScoreRing score={launchScore} />
            <p className="mt-2 text-sm font-medium text-slate-700">Launch score</p>
            <p className="text-xs text-muted">Target: 95%+</p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatusGrid title="SEO" checks={byCategory("SEO")} />
          <StatusGrid title="Security" checks={byCategory("Security")} />
          <StatusGrid title="Analytics" checks={byCategory("Analytics")} />
          <StatusGrid title="CRM" checks={byCategory("CRM")} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-6">
            <h2 className="font-display text-lg font-semibold">Lighthouse projections</h2>
            <p className="mt-1 text-sm text-muted">{lighthouseProjections.note}</p>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              {(["performance", "seo", "accessibility", "bestPractices"] as const).map((key) => (
                <div key={key} className="rounded-lg bg-slate-50 p-4">
                  <dt className="text-xs uppercase text-muted">{key}</dt>
                  <dd className="font-display text-2xl font-bold text-brand-700">{lighthouseProjections[key]}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <h2 className="font-display text-lg font-semibold">Core Web Vitals targets</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {Object.entries(performanceTargets).map(([k, v]) => (
                <li key={k} className="flex justify-between border-b border-border pb-2">
                  <span className="uppercase text-muted">{k}</span>
                  <span className="font-medium">{v.target}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-white p-6">
          <h2 className="font-display text-lg font-semibold">Full audit checklist</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted">
                  <th className="py-2 pr-4">Category</th>
                  <th className="py-2 pr-4">Check</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2">Detail</th>
                </tr>
              </thead>
              <tbody>
                {checks.map((c) => (
                  <tr key={c.id} className="border-b border-border/60">
                    <td className="py-2 pr-4 text-muted">{c.category}</td>
                    <td className="py-2 pr-4 font-medium">{c.label}</td>
                    <td className="py-2 pr-4">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${statusColors[c.status]}`}>{c.status}</span>
                    </td>
                    <td className="py-2 text-muted">{c.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-white p-6">
            <h2 className="font-display font-semibold">Priority issues</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {priorityIssues.map((p) => (
                <li key={p.issue}>
                  <span className="font-mono text-xs text-brand-600">{p.priority}</span>
                  <p className="mt-1 font-medium">{p.issue}</p>
                  <p className="text-xs text-muted">{p.area}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <h2 className="font-display font-semibold">Conversion opportunities</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
              {conversionRecommendations.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <h2 className="font-display font-semibold">CRM integration</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
              {crmIntegrationChecklist.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-6">
            <h2 className="font-display font-semibold">Deployment checklist</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
              {deploymentChecklist.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <h2 className="font-display font-semibold">Secret management</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
              {secretManagementChecklist.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Full report: <code className="text-brand-600">docs/LAUNCH_READINESS_REPORT.md</code> ·{" "}
          <Link href="/" className="text-brand-600 hover:underline">Back to site</Link>
        </p>
      </Container>
    </div>
  );
}
