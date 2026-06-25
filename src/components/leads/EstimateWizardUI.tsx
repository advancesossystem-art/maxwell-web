"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { cn } from "@/lib/utils";
import { WIZARD_STEPS } from "@/lib/estimate-wizard-config";
import { scaledMs, EASE_OUT_EXPO } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/components/motion/FadeIn";
import { CheckIcon } from "@/components/ui/Icons";

export function WizardProgressHeader({
  current,
  total,
  stepTitle,
}: {
  current: number;
  total: number;
  stepTitle: string;
}) {
  const pct = Math.round((current / total) * 100);
  const stepMeta = WIZARD_STEPS[current - 1];

  return (
    <div className="w-full">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#4f46e5]/10 px-2.5 py-1 font-semibold uppercase tracking-wider text-[#4f46e5]">
            Step {current} of {total}
          </span>
          <span className="hidden text-[var(--v6-text-muted)] sm:inline">·</span>
          <span className="hidden font-medium text-[var(--v6-text-secondary)] sm:inline">{stepTitle}</span>
        </div>
        <span className="font-semibold tabular-nums text-[var(--v6-text-muted)]" aria-hidden="true">
          {pct}% complete
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-label={`Step ${current} of ${total}: ${stepMeta?.navLabel ?? stepTitle}`}
        className="relative h-2.5 overflow-hidden rounded-full bg-[#e8eaf6]"
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6366f1] shadow-[0_0_12px_rgba(79,70,229,0.35)] transition-[width] duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-[var(--v6-text-muted)] sm:hidden">{stepMeta?.navLabel}</p>
    </div>
  );
}

export function WizardStepNav({
  current,
  onJump,
}: {
  current: number;
  onJump: (step: number) => void;
}) {
  return (
    <nav className="hidden lg:block" aria-label="Estimator steps">
      <ol className="space-y-1">
        {WIZARD_STEPS.map((s) => {
          const done = s.step < current;
          const active = s.step === current;
          const upcoming = s.step > current;
          return (
            <li key={s.key}>
              <button
                type="button"
                disabled={upcoming}
                onClick={() => done && onJump(s.step)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200",
                  active && "bg-[#4f46e5]/10 text-[#4f46e5]",
                  done && "cursor-pointer text-[var(--v6-text-secondary)] hover:bg-[#f8fafc]",
                  upcoming && "cursor-default text-[var(--v6-text-muted)] opacity-60",
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors",
                    active && "bg-[#4f46e5] text-white",
                    done && "bg-emerald-500/15 text-emerald-700",
                    upcoming && "border border-[var(--v6-border)] bg-white text-[var(--v6-text-muted)]",
                  )}
                >
                  {done ? <CheckIcon className="h-3.5 w-3.5" /> : s.step}
                </span>
                <span className={cn("font-medium", active && "font-semibold")}>{s.navLabel}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function WizardStepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="border-b border-[var(--v6-border)] pb-6">
      <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--v6-text)] sm:text-[1.65rem]">
        {title}
      </h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--v6-text-secondary)]">{subtitle}</p>
    </header>
  );
}

export function RichOptionCard({
  selected,
  onClick,
  title,
  description,
  badge,
  icon,
  animateKey,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  description?: string;
  badge?: string;
  icon?: React.ReactNode;
  /** Re-run enter animation when step changes */
  animateKey?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current || !animateKey) return;
    const anim = animate(ref.current, {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: scaledMs(320),
      ease: EASE_OUT_EXPO,
    });
    return () => {
      anim.pause();
    };
  }, [animateKey, reduce]);

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "group relative min-h-[4.5rem] rounded-2xl border p-4 text-left transition-all duration-300",
        selected
          ? "border-[#4f46e5] bg-gradient-to-br from-[#4f46e5]/10 to-white shadow-md shadow-[#4f46e5]/10 ring-2 ring-[#4f46e5]/20"
          : "border-[var(--v6-border)] bg-white hover:-translate-y-0.5 hover:border-[#4f46e5]/35 hover:shadow-lg hover:shadow-[#4f46e5]/5",
      )}
    >
      {selected && (
        <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#4f46e5] text-white">
          <CheckIcon className="h-3.5 w-3.5" />
        </span>
      )}
      <div className="flex gap-3 pr-6">
        {icon ? (
          <span
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
              selected ? "bg-[#4f46e5] text-white" : "bg-[#f1f5f9] text-[#4f46e5] group-hover:bg-[#4f46e5]/10",
            )}
          >
            {icon}
          </span>
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-display text-base font-semibold text-[var(--v6-text)]">{title}</span>
            {badge ? (
              <span className="rounded-full bg-[#f1f5f9] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--v6-text-muted)]">
                {badge}
              </span>
            ) : null}
          </div>
          {description ? (
            <p className="mt-1 text-xs leading-relaxed text-[var(--v6-text-secondary)]">{description}</p>
          ) : null}
        </div>
      </div>
    </button>
  );
}

export function SelectionInsightPanel({
  title,
  lines,
  tags,
}: {
  title: string;
  lines: string[];
  tags?: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const anim = animate(ref.current, {
      opacity: [0, 1],
      translateY: [8, 0],
      duration: scaledMs(280),
      ease: EASE_OUT_EXPO,
    });
    return () => {
      anim.pause();
    };
  }, [title, reduce]);

  return (
    <div
      ref={ref}
      className="mt-6 rounded-2xl border border-[#4f46e5]/20 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] p-5"
      role="status"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-[#4f46e5]">Scoped for your selection</p>
      <p className="mt-2 font-display text-lg font-semibold text-[var(--v6-text)]">{title}</p>
      <ul className="mt-3 space-y-1.5">
        {lines.map((line) => (
          <li key={line} className="flex gap-2 text-sm text-[var(--v6-text-secondary)]">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f46e5]" />
            {line}
          </li>
        ))}
      </ul>
      {tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[#4f46e5]/15 bg-white/80 px-2.5 py-1 text-xs font-medium text-[#4338ca]"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function WizardOptionGrid({
  stepKey,
  children,
}: {
  stepKey: string;
  children: React.ReactNode;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const grid = gridRef.current;
    if (reduce || !grid) return;
    const items = grid.querySelectorAll<HTMLElement>("[data-wizard-option]");
    if (!items.length) return;
    const anim = animate(items, {
      opacity: [0, 1],
      translateY: [12, 0],
      delay: stagger(45),
      duration: scaledMs(300),
      ease: EASE_OUT_EXPO,
    });
    return () => {
      anim.pause();
    };
  }, [stepKey, reduce]);

  return (
    <div ref={gridRef} className="mt-6 grid gap-3 sm:grid-cols-2">
      {children}
    </div>
  );
}

export function DraftSavedIndicator({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <p className="flex items-center justify-center gap-1.5 text-xs text-emerald-700" role="status">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
      Progress saved locally
    </p>
  );
}

export function EstimateSummaryCard({
  cost,
  timeline,
  complexity,
  solution,
}: {
  cost: string;
  timeline: string;
  complexity: string;
  solution: string;
}) {
  const costRef = useRef<HTMLParagraphElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce || !costRef.current) return;
    const anim = animate(costRef.current, {
      opacity: [0, 1],
      scale: [0.96, 1],
      duration: scaledMs(400),
      ease: EASE_OUT_EXPO,
    });
    return () => {
      anim.pause();
    };
  }, [cost, reduce]);

  return (
    <dl className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-[#4f46e5]/20 bg-gradient-to-br from-[#4f46e5]/8 to-white p-5 sm:col-span-2">
        <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
          Estimated investment
        </dt>
        <dd ref={costRef} className="mt-2 font-display text-3xl font-bold text-[#4f46e5]">
          {cost}
        </dd>
      </div>
      <div className="rounded-xl border border-[var(--v6-border)] bg-white p-4">
        <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">Timeline</dt>
        <dd className="mt-2 font-display text-lg font-semibold text-[var(--v6-text)]">{timeline}</dd>
      </div>
      <div className="rounded-xl border border-[var(--v6-border)] bg-white p-4">
        <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">Complexity</dt>
        <dd className="mt-2 font-display text-lg font-semibold text-[var(--v6-text)]">{complexity}</dd>
      </div>
      <div className="rounded-xl border border-[var(--v6-border)] bg-[#f8fafc] p-4 sm:col-span-2">
        <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
          Suggested approach
        </dt>
        <dd className="mt-2 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{solution}</dd>
      </div>
    </dl>
  );
}

/** Wrap RichOptionCard for stagger parent selector */
export function WizardOptionItem({ children }: { children: React.ReactNode }) {
  return <div data-wizard-option>{children}</div>;
}
