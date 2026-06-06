"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import type { CaseStudyData } from "@/lib/case-studies-data";
import { cn } from "@/lib/utils";

export function CaseStudyTrustBar({ trust }: { trust: CaseStudyData["trust"] }) {
  const items = [
    { label: "Project Value", value: trust.projectValue },
    { label: "Timeline", value: trust.timeline },
    { label: "Industry", value: trust.industry },
    { label: "Team Size", value: trust.teamSize },
    { label: "Business Outcome", value: trust.businessOutcome },
    { label: "Support Period", value: trust.supportPeriod },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 border-b border-border py-8 sm:grid-cols-3 lg:grid-cols-6">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">{item.label}</p>
          <p className="mt-1 font-display text-sm font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function ArchitectureDiagram({ layers, accent }: { layers: CaseStudyData["solutionArchitecture"]["layers"]; accent: string }) {
  return (
    <div className="space-y-3">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="rounded-xl border border-border bg-surface-elevated p-4"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
              style={{ backgroundColor: accent }}
            >
              {i + 1}
            </div>
            <div className="font-display font-semibold">{layer.name}</div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {layer.items.map((item) => (
              <span key={item} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function WorkflowDiagram({ steps, accent }: { steps: CaseStudyData["workflowSteps"]; accent: string }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative flex-1 rounded-xl border border-border bg-surface-elevated p-5"
        >
          {i < steps.length - 1 && (
            <div className="absolute -right-2 top-1/2 z-10 hidden h-0.5 w-4 bg-brand-600/30 lg:block" />
          )}
          <div
            className="mb-3 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: accent }}
          >
            {i + 1}
          </div>
          <h4 className="font-display font-semibold">{step.title}</h4>
          <p className="mt-1 text-sm text-muted">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function BeforeAfterComparison({ beforeAfter }: { beforeAfter: CaseStudyData["beforeAfter"] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <FadeIn>
        <div className="rounded-2xl border border-red-200/50 bg-red-50/30 p-6 dark:border-red-900/30 dark:bg-red-950/20">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-600">Before</p>
          <ul className="mt-4 space-y-3">
            {beforeAfter.before.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="rounded-2xl border border-emerald-200/50 bg-emerald-50/30 p-6 dark:border-emerald-900/30 dark:bg-emerald-950/20">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">After</p>
          <ul className="mt-4 space-y-3">
            {beforeAfter.after.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
  );
}

export function ProjectTimeline({ timeline, accent }: { timeline: CaseStudyData["timeline"]; accent: string }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border lg:block" />
      <div className="space-y-6">
        {timeline.map((phase, i) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative flex gap-6 lg:pl-10"
          >
            <div
              className="absolute left-2.5 hidden h-3 w-3 rounded-full border-2 border-white lg:block"
              style={{ backgroundColor: accent }}
            />
            <div className="flex-1 rounded-xl border border-border bg-surface-elevated p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-display font-semibold">{phase.phase}</h4>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                  {phase.duration}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{phase.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ProjectMilestones({ milestones, accent }: { milestones: CaseStudyData["milestones"]; accent: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {milestones.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className={cn("rounded-xl border border-border p-5", i === milestones.length - 1 && "border-brand-600/20 bg-brand-50/30")}
        >
          <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: accent }}>
            {m.period}
          </div>
          <h4 className="mt-2 font-display font-semibold">{m.label}</h4>
          <p className="mt-1 text-xs text-muted">{m.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
