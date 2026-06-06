"use client";

import { motion } from "framer-motion";
import { trustMetrics, certifications } from "@/lib/company-data";
import { getCompanyStatsBar } from "@/lib/company-metrics";

export function TrustMetricsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {trustMetrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="card-premium p-5 text-center"
        >
          <div className="font-display text-2xl font-bold text-brand-500">{m.value}</div>
          <div className="mt-1 font-display text-sm font-semibold text-[var(--v6-text)]">{m.label}</div>
          <p className="mt-1 text-xs text-[var(--v6-text-muted)]">{m.description}</p>
        </motion.div>
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
      {stats.map((s) => (
        <div key={s.label} className="card-premium p-4 text-center">
          <div className="hub-metric-value">{s.value}</div>
          <div className="hub-metric-label text-xs">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
