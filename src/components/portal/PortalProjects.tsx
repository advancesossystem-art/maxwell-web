"use client";

import { PortalShell } from "@/components/portal/PortalShell";
import { PortalCard, HealthScore, ProgressBar, EmptyState } from "@/components/portal/PortalUI";
import { mockProjects } from "@/lib/portal/mock-data";
import { usePortal } from "@/components/portal/PortalProvider";
import { hasPermission } from "@/lib/portal/permissions";
import { trackPortalEvent } from "@/lib/portal/analytics";
import { useEffect } from "react";

export function PortalProjects() {
  const { user } = usePortal();
  const canView = hasPermission(user?.role ?? "prospect", "view_projects");

  useEffect(() => {
    if (canView) trackPortalEvent("project_view", { scope: "list" });
  }, [canView]);

  if (!canView) {
    return (
      <PortalShell title="Projects" subtitle="Available after engagement begins">
        <EmptyState title="No project access" description="Projects appear here once your proposal is approved and onboarding is complete." />
      </PortalShell>
    );
  }

  return (
    <PortalShell title="Projects" subtitle="Timelines, milestones, and health scores">
      <div className="grid gap-4 lg:grid-cols-2">
        {mockProjects.map((p) => (
          <PortalCard key={p.id} href={`/portal/projects/${p.id}`}>
            <div className="flex gap-4">
              <HealthScore score={p.healthScore} size="sm" />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display font-semibold text-[var(--portal-text)]">{p.name}</h3>
                  <span className="shrink-0 text-xs capitalize text-[var(--portal-muted)]">{p.status.replace("_", " ")}</span>
                </div>
                <ProgressBar value={p.progress} className="mt-3" />
                <p className="mt-1 text-xs text-brand-400/80 line-clamp-1">{p.phase}</p>
                <p className="mt-2 text-xs text-[var(--portal-muted)]">{p.progress}% · {p.accountManager}</p>
              </div>
            </div>
          </PortalCard>
        ))}
      </div>
    </PortalShell>
  );
}
