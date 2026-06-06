"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProposalStatus, TicketStatus, InvoiceStatus } from "@/lib/portal/types";

const proposalColors: Record<ProposalStatus, string> = {
  draft: "bg-white/10 text-[var(--portal-muted)]",
  sent: "bg-blue-500/15 text-blue-300",
  review: "bg-amber-500/15 text-amber-300",
  approved: "bg-emerald-500/15 text-emerald-300",
  rejected: "bg-red-500/15 text-red-300",
};

const ticketColors: Record<TicketStatus, string> = {
  open: "bg-blue-500/15 text-blue-300",
  in_progress: "bg-violet-500/15 text-violet-300",
  waiting: "bg-amber-500/15 text-amber-300",
  resolved: "bg-emerald-500/15 text-emerald-300",
  closed: "bg-white/10 text-[var(--portal-muted)]",
};

const invoiceColors: Record<InvoiceStatus, string> = {
  paid: "bg-emerald-500/15 text-emerald-300",
  pending: "bg-amber-500/15 text-amber-300",
  overdue: "bg-red-500/15 text-red-300",
};

const projectColors: Record<string, string> = {
  active: "bg-emerald-500/15 text-emerald-300",
  on_hold: "bg-amber-500/15 text-amber-300",
  completed: "bg-white/10 text-[var(--portal-muted)]",
};

export function StatusBadge({
  status,
  variant = "proposal",
}: {
  status: string;
  variant?: "proposal" | "ticket" | "invoice" | "project";
}) {
  const colors =
    variant === "ticket"
      ? ticketColors[status as TicketStatus]
      : variant === "invoice"
        ? invoiceColors[status as InvoiceStatus]
        : variant === "project"
          ? projectColors[status]
          : proposalColors[status as ProposalStatus];

  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", colors ?? "bg-slate-100 text-slate-600")}>
      {status.replace("_", " ")}
    </span>
  );
}

export function HealthScore({ score, size = "md" }: { score: number; size?: "sm" | "md" | "lg" }) {
  const color = score >= 80 ? "text-emerald-500" : score >= 60 ? "text-amber-500" : "text-red-500";
  const ring = score >= 80 ? "stroke-emerald-500" : score >= 60 ? "stroke-amber-500" : "stroke-red-500";
  const dim = size === "sm" ? 48 : size === "lg" ? 80 : 64;
  const r = (dim - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: dim, height: dim }}>
      <svg width={dim} height={dim} className="-rotate-90">
        <circle cx={dim / 2} cy={dim / 2} r={r} fill="none" className="stroke-current opacity-10" strokeWidth="6" />
        <circle cx={dim / 2} cy={dim / 2} r={r} fill="none" className={ring} strokeWidth="6" strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <span className={cn("absolute font-display font-bold", color, size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base")}>{score}</span>
    </div>
  );
}

export function PortalCard({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classes = cn(
    "rounded-xl border p-5 transition-all",
    "border-[var(--portal-border)] bg-[var(--portal-card)]",
    href && "min-h-11 hover:border-brand-500/40 hover:shadow-md cursor-pointer active:scale-[0.99]",
    className,
  );
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <div className={classes}>{children}</div>;
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("h-2 overflow-hidden rounded-full bg-[var(--portal-muted-bg)]", className)}>
      <div className="h-full rounded-full bg-brand-600 transition-all duration-700" style={{ width: `${Math.min(100, value)}%` }} />
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--portal-border)] py-16 text-center">
      <p className="font-display font-semibold text-[var(--portal-text)]">{title}</p>
      <p className="mt-2 max-w-sm text-sm text-[var(--portal-muted)]">{description}</p>
    </div>
  );
}
