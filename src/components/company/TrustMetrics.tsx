"use client";

import { trustMetrics, certifications } from "@/lib/company-data";
import { getCompanyStatsBar } from "@/lib/company-metrics";
import { MotionReveal } from "@/components/motion/FadeIn";
import { CounterUp } from "@/components/motion/CounterUp";

export function TrustMetricsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {trustMetrics.map((m, i) => (
        <MotionReveal key={m.label} delay={i * 0.06} y={16} className="card-premium p-5 text-center">
          <div className="font-display text-2xl font-bold text-brand-500">
            <CounterUp value={m.value} />
          </div>
          <div className="mt-1 font-display text-sm font-semibold text-[var(--v6-text)]">{m.label}</div>
          <p className="mt-1 text-xs text-[var(--v6-text-muted)]">{m.description}</p>
        </MotionReveal>
      ))}
    </div>
  );
}

export function CertificationsRow() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {certifications.map((c) => (
        <span
          key={c}
          className="rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-2 text-xs font-medium text-brand-400"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

export function CompanyStatsBar() {
  const stats = getCompanyStatsBar();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
      {stats.map((s, i) => (
        <MotionReveal key={s.label} delay={i * 0.05} y={12} className="card-premium p-4 text-center">
          <div className="hub-metric-value">
            <CounterUp value={s.value} />
          </div>
          <div className="hub-metric-label text-xs">{s.label}</div>
        </MotionReveal>
      ))}
    </div>
  );
}
