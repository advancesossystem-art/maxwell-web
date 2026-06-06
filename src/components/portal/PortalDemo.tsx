"use client";

import Link from "next/link";
import { portalRoadmap } from "@/lib/portal/portal-roadmap";
import { cn } from "@/lib/utils";

export function DemoEnvironmentBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-200",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
      Demo environment
    </span>
  );
}

export function DemoDataNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-amber-500/20 bg-amber-500/5",
        compact ? "px-4 py-3" : "px-5 py-4",
      )}
      role="note"
    >
      <p className="text-sm font-medium text-amber-100/90">Demo data notice</p>
      <p className={cn("text-[var(--portal-muted)]", compact ? "mt-1 text-xs" : "mt-2 text-sm")}>
        This workspace uses sample projects, proposals, and tickets for preview purposes. Actions such as
        approvals and downloads are simulated locally — they do not connect to production systems.
      </p>
    </div>
  );
}

const statusStyles: Record<string, string> = {
  live: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  demo: "bg-brand-600/15 text-brand-300 border-brand-500/25",
  planned: "bg-white/5 text-[var(--portal-muted)] border-white/10",
};

export function PortalRoadmapPanel() {
  return (
    <div className="rounded-xl border border-[var(--portal-border)] bg-[var(--portal-card)] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-sm font-semibold text-[var(--portal-text)]">Portal roadmap</h3>
          <p className="mt-1 text-xs text-[var(--portal-muted)]">
            What is available today vs. coming next — no hidden functionality.
          </p>
        </div>
        <Link href="/contact" className="shrink-0 text-xs font-medium text-brand-400 hover:text-brand-300">
          Request feature →
        </Link>
      </div>
      <ul className="mt-4 space-y-2">
        {portalRoadmap.map((item) => (
          <li
            key={item.id}
            className="flex items-start justify-between gap-3 rounded-lg border border-[var(--portal-border)] bg-[var(--portal-hover)] px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-[var(--portal-text)]">{item.title}</p>
              <p className="text-xs text-[var(--portal-muted)]">{item.description}</p>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase",
                statusStyles[item.status],
              )}
            >
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
