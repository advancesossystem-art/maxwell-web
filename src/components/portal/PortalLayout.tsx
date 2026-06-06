"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function PortalSection({
  title,
  description,
  action,
  children,
  className,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--portal-muted)]">
            {title}
          </h2>
          {description ? <p className="mt-1 text-sm text-[var(--portal-muted)]">{description}</p> : null}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function QuickAction({
  href,
  label,
  description,
  icon,
}: {
  href: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 rounded-xl border border-[var(--portal-border)] bg-[var(--portal-card)] p-4 transition-colors hover:border-brand-500/35 hover:bg-[var(--portal-hover)]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/20 text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-[var(--portal-text)]">{label}</p>
        <p className="mt-0.5 text-xs text-[var(--portal-muted)]">{description}</p>
      </div>
    </Link>
  );
}

export function ActivityTimeline({
  items,
}: {
  items: { id: string; title: string; meta?: string; time: string; type?: string }[];
}) {
  return (
    <ul className="space-y-0">
      {items.map((item, i) => (
        <li key={item.id} className="relative flex gap-4 pb-6 last:pb-0">
          <div className="flex flex-col items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-brand-500 ring-4 ring-brand-500/20" />
            {i < items.length - 1 ? <div className="mt-1 w-px flex-1 bg-[var(--portal-border)]" /> : null}
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className="text-sm text-[var(--portal-text)]">{item.title}</p>
            {item.meta ? <p className="mt-0.5 text-xs text-[var(--portal-muted)]">{item.meta}</p> : null}
            <p className="mt-1 text-[10px] uppercase tracking-wider text-[var(--portal-muted)]">{item.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function MetricTile({
  label,
  value,
  hint,
  href,
}: {
  label: string;
  value: string | number;
  hint?: string;
  href?: string;
}) {
  const inner = (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--portal-muted)]">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold tabular-nums text-[var(--portal-text)]">{value}</p>
      {hint ? <p className="mt-1 text-xs text-[var(--portal-muted)]">{hint}</p> : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-xl border border-[var(--portal-border)] bg-[var(--portal-card)] p-5 transition-colors hover:border-brand-500/30"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="rounded-xl border border-[var(--portal-border)] bg-[var(--portal-card)] p-5">{inner}</div>
  );
}

export function DocumentPreviewIcon({ type }: { type: string }) {
  const colors: Record<string, string> = {
    contract: "bg-violet-500/20 text-violet-300",
    proposal: "bg-brand-600/20 text-brand-300",
    report: "bg-emerald-500/20 text-emerald-300",
    meeting_notes: "bg-amber-500/20 text-amber-300",
    invoice: "bg-rose-500/20 text-rose-300",
  };
  return (
    <div
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-xs font-bold uppercase",
        colors[type] ?? "bg-white/10 text-[var(--portal-muted)]",
      )}
    >
      {type.slice(0, 2)}
    </div>
  );
}
