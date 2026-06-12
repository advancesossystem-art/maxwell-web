"use client";

import type { CaseStudyData } from "@/lib/case-studies-data";
import { MotionReveal } from "@/components/motion/FadeIn";
import { CounterUp } from "@/components/motion/CounterUp";

export function CaseStudyROIDashboard({
  metrics,
  accent,
}: {
  metrics: CaseStudyData["roiMetrics"];
  accent: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, i) => (
        <MotionReveal
          key={metric.label}
          delay={i * 0.1}
          y={24}
          className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{ background: `radial-gradient(circle at 50% 0%, ${accent}, transparent 70%)` }}
          />
          <div className="font-display text-3xl font-bold sm:text-4xl" style={{ color: accent }}>
            <CounterUp value={metric.value} />
          </div>
          <div className="mt-2 font-display font-semibold">{metric.label}</div>
          <p className="mt-1 text-xs text-muted">{metric.description}</p>
        </MotionReveal>
      ))}
    </div>
  );
}
