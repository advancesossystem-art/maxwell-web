"use client";

import type { CaseStudyData } from "@/lib/case-studies-data";
import { MotionReveal } from "@/components/motion/FadeIn";
import { CounterUp } from "@/components/motion/CounterUp";
import { cn } from "@/lib/utils";
import { CS_ACCENT } from "@/components/case-studies/case-study-theme";

type MetricItem = { value: string; label: string; description: string };

function CaseStudyMetricCard({
  value,
  label,
  description,
  variant,
  accent,
  delay,
}: {
  value: string;
  label: string;
  description: string;
  variant: "light" | "dark";
  accent: string;
  delay: number;
}) {
  const isLight = variant === "light";

  return (
    <MotionReveal
      delay={delay}
      y={24}
      className={cn(
        "rounded-2xl p-6",
        isLight
          ? "bg-white shadow-lg shadow-black/20"
          : "glass-dark border border-white/[0.06]",
      )}
    >
      <div className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: accent }}>
        <CounterUp value={value} />
      </div>
      <div className={cn("mt-2 font-display font-semibold", isLight ? "text-[var(--v6-text)]" : "text-white")}>
        {label}
      </div>
      <p className={cn("mt-1 text-xs leading-relaxed", isLight ? "text-[var(--v6-text-muted)]" : "text-white/45")}>
        {description}
      </p>
    </MotionReveal>
  );
}

export function CaseStudyROIDashboard({
  metrics,
  results,
  accent = CS_ACCENT,
}: {
  metrics: CaseStudyData["roiMetrics"];
  results?: CaseStudyData["results"];
  accent?: string;
}) {
  const secondary: MetricItem[] =
    results?.map((r) => ({
      value: r.metric,
      label: r.label,
      description: r.description,
    })) ?? [];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <CaseStudyMetricCard
            key={metric.label}
            value={metric.value}
            label={metric.label}
            description={metric.description}
            variant="light"
            accent={accent}
            delay={i * 0.08}
          />
        ))}
      </div>
      {secondary.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map((metric, i) => (
            <CaseStudyMetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              variant="dark"
              accent={accent}
              delay={0.32 + i * 0.08}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
