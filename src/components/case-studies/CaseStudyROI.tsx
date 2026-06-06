"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { CaseStudyData } from "@/lib/case-studies-data";

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
        <AnimatedKPICard key={metric.label} metric={metric} accent={accent} index={i} />
      ))}
    </div>
  );
}

function AnimatedKPICard({
  metric,
  accent,
  index,
}: {
  metric: CaseStudyData["roiMetrics"][number];
  accent: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ background: `radial-gradient(circle at 50% 0%, ${accent}, transparent 70%)` }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="font-display text-3xl font-bold sm:text-4xl"
        style={{ color: accent }}
      >
        {metric.value}
      </motion.div>
      <div className="mt-2 font-display font-semibold">{metric.label}</div>
      <p className="mt-1 text-xs text-muted">{metric.description}</p>
    </motion.div>
  );
}
