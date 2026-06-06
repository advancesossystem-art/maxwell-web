"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalCard, HealthScore, ProgressBar, StatusBadge } from "@/components/portal/PortalUI";
import { PortalSection, ActivityTimeline } from "@/components/portal/PortalLayout";
import { getProjectById } from "@/lib/portal/mock-data";
import { trackPortalEvent } from "@/lib/portal/analytics";
import { cn } from "@/lib/utils";

const riskColors = {
  low: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  medium: "text-amber-300 bg-amber-500/10 border-amber-500/20",
  high: "text-red-300 bg-red-500/10 border-red-500/20",
};

export function PortalProjectDetail({ projectId }: { projectId: string }) {
  const project = getProjectById(projectId);

  useEffect(() => {
    if (project) trackPortalEvent("project_view", { project_id: project.id });
  }, [project]);

  if (!project) {
    return (
      <PortalShell title="Project not found">
        <Link href="/portal/projects" className="text-sm text-brand-400 hover:underline">
          ← Back to projects
        </Link>
      </PortalShell>
    );
  }

  return (
    <PortalShell title={project.name} subtitle={`${project.startDate} → ${project.endDate} · ${project.phase}`}>
      <Link href="/portal/projects" className="mb-6 inline-block text-sm text-brand-400 hover:underline">
        ← All projects
      </Link>

      <div className="grid gap-6 lg:grid-cols-12">
        <PortalCard className="lg:col-span-4 flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left lg:flex-col lg:text-center">
          <HealthScore score={project.healthScore} size="lg" />
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--portal-muted)]">
              Project health score
            </p>
            <p className="mt-2 font-display text-3xl font-bold text-[var(--portal-text)]">{project.progress}%</p>
            <ProgressBar value={project.progress} className="mt-3" />
            <StatusBadge status={project.status} variant="project" />
            <p className="mt-3 text-sm text-[var(--portal-muted)]">Account manager: {project.accountManager}</p>
          </div>
        </PortalCard>

        <PortalCard className="lg:col-span-8">
          <h3 className="font-display font-semibold text-[var(--portal-text)]">Project summary</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--portal-muted)]">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {project.team.map((m) => (
              <div key={m.name} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  {m.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--portal-text)]">{m.name}</p>
                  <p className="text-xs text-[var(--portal-muted)]">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </PortalCard>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <PortalSection title="Timeline & milestones">
          <PortalCard>
            <div className="space-y-6">
              {project.milestones.map((m, i) => (
                <div key={m.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "h-3 w-3 rounded-full",
                        m.status === "completed"
                          ? "bg-emerald-500"
                          : m.status === "in_progress"
                            ? "bg-brand-500"
                            : "bg-[var(--portal-muted-bg)]",
                      )}
                    />
                    {i < project.milestones.length - 1 && (
                      <div className="mt-1 w-px flex-1 bg-[var(--portal-border)]" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex flex-wrap justify-between gap-2">
                      <p className="font-medium text-[var(--portal-text)]">{m.title}</p>
                      <span className="text-xs capitalize text-[var(--portal-muted)]">
                        {m.status.replace("_", " ")} · {m.dueDate}
                      </span>
                    </div>
                    <ul className="mt-2 text-sm text-[var(--portal-muted)]">
                      {m.deliverables.map((d) => (
                        <li key={d}>· {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </PortalCard>
        </PortalSection>

        <PortalSection title="Deliverables">
          <PortalCard>
            <ul className="divide-y divide-[var(--portal-border)]">
              {project.deliverables.map((d) => (
                <li key={d.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-[var(--portal-text)]">{d.name}</p>
                    <p className="text-xs text-[var(--portal-muted)]">Due {d.dueDate}</p>
                  </div>
                  <span className="rounded-full bg-[var(--portal-hover)] px-2 py-0.5 text-[10px] font-semibold uppercase text-[var(--portal-muted)]">
                    {d.status.replace("_", " ")}
                  </span>
                </li>
              ))}
            </ul>
          </PortalCard>
        </PortalSection>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <PortalSection title="Risks & mitigation">
          <PortalCard>
            {project.risks.length > 0 ? (
              <ul className="space-y-4">
                {project.risks.map((r) => (
                  <li key={r.id} className={cn("rounded-lg border p-4", riskColors[r.level])}>
                    <div className="flex justify-between gap-2">
                      <p className="text-sm font-semibold">{r.title}</p>
                      <span className="text-[10px] font-bold uppercase">{r.level}</span>
                    </div>
                    <p className="mt-2 text-xs opacity-90">{r.mitigation}</p>
                    <p className="mt-2 text-[10px] opacity-75">Owner: {r.owner}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-[var(--portal-muted)]">No active risks logged</p>
            )}
          </PortalCard>
        </PortalSection>

        <PortalSection title="Project updates">
          <PortalCard>
            <ul className="space-y-4">
              {project.updates.map((u) => (
                <li key={u.id} className="border-b border-[var(--portal-border)] pb-4 last:border-0 last:pb-0">
                  <p className="font-medium text-[var(--portal-text)]">{u.title}</p>
                  <p className="mt-1 text-sm text-[var(--portal-muted)]">{u.body}</p>
                  <p className="mt-2 text-xs text-[var(--portal-muted)]">
                    {u.author} · {u.date}
                  </p>
                </li>
              ))}
            </ul>
          </PortalCard>
        </PortalSection>
      </div>

      <PortalSection title="Activity feed" className="mt-8">
        <PortalCard>
          <ActivityTimeline
            items={project.recentActivity.map((a) => ({
              id: a.id,
              title: a.text,
              meta: a.type,
              time: a.time,
            }))}
          />
        </PortalCard>
      </PortalSection>
    </PortalShell>
  );
}
