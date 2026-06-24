"use client";

import { FadeIn, MotionReveal } from "@/components/motion/FadeIn";
import type { CaseStudyData } from "@/lib/case-studies-data";
import { cn } from "@/lib/utils";
import { CS_ACCENT, csDarkEyebrow } from "@/components/case-studies/case-study-theme";

export function CaseStudyTrustBar({
  trust,
  dark = false,
}: {
  trust: CaseStudyData["trust"];
  dark?: boolean;
}) {
  const items = [
    { label: "Project Value", value: trust.projectValue },
    { label: "Timeline", value: trust.timeline },
    { label: "Industry", value: trust.industry },
    { label: "Team Size", value: trust.teamSize },
    { label: "Business Outcome", value: trust.businessOutcome },
    { label: "Support Period", value: trust.supportPeriod },
  ];

  if (dark) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item, i) => (
          <MotionReveal
            key={item.label}
            delay={i * 0.05}
            y={12}
            className={cn(
              "rounded-xl p-4",
              i % 2 === 0
                ? "bg-white shadow-md shadow-black/15"
                : "glass-dark border border-white/[0.06]",
            )}
          >
            <p className={cn(csDarkEyebrow, "text-[0.65rem]")}>{item.label}</p>
            <p
              className={cn(
                "mt-2 font-display text-sm font-semibold leading-snug",
                i % 2 === 0 ? "text-[var(--v6-text)]" : "text-white",
              )}
            >
              {item.value}
            </p>
          </MotionReveal>
        ))}
      </div>
    );
  }

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

export function ArchitectureDiagram({
  layers,
  accent,
  compact = false,
  dark = false,
}: {
  layers: CaseStudyData["solutionArchitecture"]["layers"];
  accent: string;
  compact?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      {layers.map((layer, i) => (
        <MotionReveal
          key={layer.name}
          delay={i * 0.08}
          y={16}
          className={cn(
            compact ? "rounded-lg p-3" : "rounded-xl p-4",
            dark
              ? "border border-white/10 bg-white/5"
              : "rounded-xl border border-border bg-surface-elevated",
          )}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white",
                compact ? "h-6 w-6" : "h-8 w-8",
              )}
              style={{ backgroundColor: accent }}
            >
              {i + 1}
            </div>
            <div className={cn("font-display font-semibold", dark ? "text-sm text-white" : "")}>{layer.name}</div>
          </div>
          <div className={cn("flex flex-wrap gap-2", compact ? "mt-2" : "mt-3")}>
            {layer.items.map((item) => (
              <span
                key={item}
                className={cn(
                  "rounded-md border px-2.5 py-1 text-xs",
                  dark ? "border-white/10 bg-white/5 text-white/70" : "border-border bg-surface text-muted",
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </MotionReveal>
      ))}
    </div>
  );
}

export function WorkflowDiagram({
  steps,
  accent,
  dark = false,
}: {
  steps: CaseStudyData["workflowSteps"];
  accent: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
      {steps.map((step, i) => (
        <MotionReveal
          key={step.title}
          delay={i * 0.1}
          y={16}
          className={cn(
            "relative flex-1 rounded-2xl p-5",
            dark
              ? i % 2 === 0
                ? "bg-white shadow-lg shadow-black/20"
                : "glass-dark border border-white/[0.06]"
              : "rounded-xl border border-border bg-surface-elevated",
          )}
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
          <h4 className={cn("font-display font-semibold", dark && i % 2 !== 0 && "text-white")}>{step.title}</h4>
          <p className={cn("mt-1 text-sm", dark ? (i % 2 === 0 ? "text-[var(--v6-text-secondary)]" : "text-white/50") : "text-muted")}>
            {step.description}
          </p>
        </MotionReveal>
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

export function ProjectTimeline({
  timeline,
  accent,
  dark = false,
}: {
  timeline: CaseStudyData["timeline"];
  accent: string;
  dark?: boolean;
}) {
  return (
    <div className="relative">
      <div className={cn("absolute left-4 top-0 hidden h-full w-0.5 lg:block", dark ? "bg-white/10" : "bg-border")} />
      <div className="space-y-6">
        {timeline.map((phase, i) => (
          <MotionReveal
            key={phase.phase}
            delay={i * 0.08}
            y={16}
            className="relative flex gap-6 lg:pl-10"
          >
            <div
              className="absolute left-2.5 hidden h-3 w-3 rounded-full border-2 border-[#030712] lg:block"
              style={{ backgroundColor: accent }}
            />
            <div
              className={cn(
                "flex-1 rounded-2xl p-5",
                dark
                  ? i % 2 === 0
                    ? "bg-white shadow-lg shadow-black/20"
                    : "glass-dark border border-white/[0.06]"
                  : "rounded-xl border border-border bg-surface-elevated",
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className={cn("font-display font-semibold", dark && i % 2 !== 0 && "text-white")}>{phase.phase}</h4>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium",
                    dark
                      ? "bg-[#4f46e5]/15 text-[#a5b4fc]"
                      : "bg-brand-50 text-brand-700",
                  )}
                >
                  {phase.duration}
                </span>
              </div>
              <p className={cn("mt-2 text-sm", dark ? (i % 2 === 0 ? "text-[var(--v6-text-secondary)]" : "text-white/50") : "text-muted")}>
                {phase.description}
              </p>
            </div>
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}

export function ProjectMilestones({
  milestones,
  accent,
  dark = false,
}: {
  milestones: CaseStudyData["milestones"];
  accent: string;
  dark?: boolean;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {milestones.map((m, i) => (
        <MotionReveal
          key={m.label}
          delay={i * 0.08}
          y={16}
          className={cn(
            "rounded-2xl p-5",
            dark
              ? i % 2 === 0
                ? "bg-white shadow-lg shadow-black/20"
                : "glass-dark border border-white/[0.06]"
              : i === milestones.length - 1
                ? "border border-brand-600/20 bg-brand-50/30"
                : "border border-border",
          )}
        >
          <div
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: dark ? CS_ACCENT : accent }}
          >
            {m.period}
          </div>
          <h4 className={cn("mt-2 font-display font-semibold", dark && "text-white")}>{m.label}</h4>
          <p className={cn("mt-1 text-xs", dark ? "text-white/45" : "text-muted")}>{m.description}</p>
        </MotionReveal>
      ))}
    </div>
  );
}
