"use client";

import { useMemo } from "react";
import Link from "next/link";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalCard, HealthScore, ProgressBar, StatusBadge } from "@/components/portal/PortalUI";
import { PortalSection, QuickAction, ActivityTimeline, MetricTile } from "@/components/portal/PortalLayout";
import { usePortal } from "@/components/portal/PortalProvider";
import {
  mockProposals,
  mockProjects,
  mockDocuments,
  mockMeetings,
  mockTickets,
} from "@/lib/portal/mock-data";
import { getProposalStatusOverride } from "@/lib/portal/auth";
import { hasPermission } from "@/lib/portal/permissions";

const quickActions = [
  {
    href: "/portal/proposals",
    label: "Review proposals",
    description: "Approve or request changes",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    href: "/portal/meetings",
    label: "Upcoming meetings",
    description: "Agenda and action items",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M4.5 8.25h15m-15 0v10.125c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V8.25m-16.5 0V6.375c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125V8.25" />
      </svg>
    ),
  },
  {
    href: "/portal/support",
    label: "Open support ticket",
    description: "Engineering SLA tracked",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    href: "/portal/documents",
    label: "Document center",
    description: "Contracts, reports, invoices",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
    ),
  },
];

export function PortalDashboard() {
  const { user } = usePortal();
  const canProjects = hasPermission(user?.role ?? "prospect", "view_projects");

  const pendingProposals = useMemo(
    () =>
      mockProposals.filter((p) => {
        const status = getProposalStatusOverride(p.id) ?? p.status;
        return status === "sent" || status === "review";
      }),
    [],
  );
  const activeProjects = useMemo(
    () => (canProjects ? mockProjects.filter((p) => p.status === "active") : []),
    [canProjects],
  );
  const upcomingMeetings = useMemo(() => mockMeetings.filter((m) => m.type === "upcoming"), []);
  const openTickets = useMemo(
    () => mockTickets.filter((t) => t.status === "open" || t.status === "in_progress"),
    [],
  );
  const avgHealth = useMemo(
    () =>
      activeProjects.length > 0
        ? Math.round(activeProjects.reduce((s, p) => s + p.healthScore, 0) / activeProjects.length)
        : 0,
    [activeProjects],
  );

  const activityItems = useMemo(
    () =>
      [
        ...activeProjects.flatMap((p) =>
          p.recentActivity.map((a) => ({
            id: `${p.id}-${a.id}`,
            title: a.text,
            meta: p.name,
            time: a.time,
          })),
        ),
        ...pendingProposals.slice(0, 1).map((p) => ({
          id: `prop-${p.id}`,
          title: `Proposal awaiting review: ${p.title}`,
          meta: p.amount,
          time: `Sent ${p.sentAt}`,
        })),
      ].slice(0, 6),
    [activeProjects, pendingProposals],
  );

  return (
    <PortalShell
      title={`Good morning, ${user?.name.split(" ")[0]}`}
      subtitle={`${user?.company} · Client command center`}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricTile label="Proposals pending" value={pendingProposals.length} hint="Action may be required" href="/portal/proposals" />
        {canProjects && (
          <MetricTile label="Active projects" value={activeProjects.length} hint={`Portfolio health ${avgHealth}`} href="/portal/projects" />
        )}
        <MetricTile label="Upcoming meetings" value={upcomingMeetings.length} hint={upcomingMeetings[0]?.date ?? "—"} href="/portal/meetings" />
        <MetricTile label="Open tickets" value={openTickets.length} hint="<4hr SLA on high priority" href="/portal/support" />
      </div>

      <PortalSection title="Quick actions" className="mt-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((a) => (
            <QuickAction key={a.href} {...a} />
          ))}
        </div>
      </PortalSection>

      <div className="mt-10 grid gap-6 xl:grid-cols-12">
        {canProjects && activeProjects.length > 0 && (
          <div className="xl:col-span-8 space-y-6">
            <PortalSection
              title="Project health overview"
              description="Delivery confidence across active engagements"
              action={
                <Link href="/portal/projects" className="text-sm font-medium text-brand-400 hover:text-brand-300">
                  All projects →
                </Link>
              }
            >
              <div className="grid gap-4 lg:grid-cols-2">
                {activeProjects.map((p) => (
                  <PortalCard key={p.id} href={`/portal/projects/${p.id}`} className="!p-0 overflow-hidden">
                    <div className="border-b border-[var(--portal-border)] bg-[var(--portal-hover)] px-5 py-3">
                      <p className="font-display font-semibold text-[var(--portal-text)]">{p.name}</p>
                      <p className="text-xs text-[var(--portal-muted)]">{p.phase}</p>
                    </div>
                    <div className="flex items-center gap-5 p-5">
                      <HealthScore score={p.healthScore} size="md" />
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between text-xs text-[var(--portal-muted)]">
                          <span>Progress</span>
                          <span className="font-medium text-[var(--portal-text)]">{p.progress}%</span>
                        </div>
                        <ProgressBar value={p.progress} className="mt-2" />
                        <p className="mt-2 text-xs text-[var(--portal-muted)]">
                          {p.risks.filter((r) => r.level !== "low").length} active risk
                          {p.risks.filter((r) => r.level !== "low").length !== 1 ? "s" : ""} · AM: {p.accountManager}
                        </p>
                      </div>
                    </div>
                  </PortalCard>
                ))}
              </div>
              <PortalCard className="mt-4 flex items-center gap-5 !bg-brand-600/5">
                <HealthScore score={avgHealth} size="sm" />
                <div>
                  <p className="text-sm font-semibold text-[var(--portal-text)]">Portfolio health score</p>
                  <p className="text-xs text-[var(--portal-muted)]">Weighted across active projects · updated daily</p>
                </div>
              </PortalCard>
            </PortalSection>
          </div>
        )}

        <div className={canProjects && activeProjects.length > 0 ? "xl:col-span-4 space-y-6" : "xl:col-span-12 grid gap-6 lg:grid-cols-2"}>
          <PortalSection title="Proposal status">
            <div className="space-y-3">
              {mockProposals.map((p) => {
                const status = getProposalStatusOverride(p.id) ?? p.status;
                return (
                  <PortalCard key={p.id} href={`/portal/proposals/${p.id}`}>
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-[var(--portal-text)]">{p.title}</p>
                      <StatusBadge status={status} />
                    </div>
                    <p className="mt-1 text-xs text-[var(--portal-muted)]">{p.amount} · Valid until {p.validUntil}</p>
                  </PortalCard>
                );
              })}
            </div>
          </PortalSection>

          <PortalSection title="Recent activity">
            <PortalCard>
              {activityItems.length > 0 ? (
                <ActivityTimeline items={activityItems} />
              ) : (
                <p className="text-sm text-[var(--portal-muted)]">No recent activity</p>
              )}
            </PortalCard>
          </PortalSection>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <PortalSection title="Upcoming meetings" className="lg:col-span-1">
          {upcomingMeetings.length > 0 ? (
            <div className="space-y-3">
              {upcomingMeetings.map((m) => (
                <PortalCard key={m.id} href="/portal/meetings">
                  <p className="font-medium text-[var(--portal-text)]">{m.title}</p>
                  <p className="mt-1 text-xs text-[var(--portal-muted)]">
                    {m.date} · {m.time} · {m.duration}
                  </p>
                  <span className="mt-2 inline-block text-[10px] uppercase tracking-wider text-brand-400">
                    {m.status}
                  </span>
                </PortalCard>
              ))}
            </div>
          ) : (
            <PortalCard>
              <p className="text-sm text-[var(--portal-muted)]">No meetings scheduled</p>
            </PortalCard>
          )}
        </PortalSection>

        <PortalSection title="Recent documents" className="lg:col-span-1">
          <PortalCard href="/portal/documents">
            <ul className="space-y-3">
              {[...mockDocuments]
                .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt))
                .slice(0, 4)
                .map((d) => (
                  <li key={d.id} className="flex justify-between gap-2 text-sm">
                    <span className="truncate text-[var(--portal-text)]">{d.name}</span>
                    <span className="shrink-0 text-xs text-[var(--portal-muted)]">{d.size}</span>
                  </li>
                ))}
            </ul>
          </PortalCard>
        </PortalSection>

        <PortalSection title="Open support" className="lg:col-span-1">
          <PortalCard href="/portal/support">
            {openTickets.length > 0 ? (
              <ul className="space-y-3">
                {openTickets.map((t) => (
                  <li key={t.id}>
                    <p className="text-sm font-medium text-[var(--portal-text)]">{t.subject}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <StatusBadge status={t.status} variant="ticket" />
                      <span className="text-xs capitalize text-[var(--portal-muted)]">{t.priority}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-[var(--portal-muted)]">No open tickets</p>
            )}
          </PortalCard>
        </PortalSection>
      </div>
    </PortalShell>
  );
}
