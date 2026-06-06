"use client";

import { PortalShell } from "@/components/portal/PortalShell";
import { PortalCard, StatusBadge, EmptyState } from "@/components/portal/PortalUI";
import { mockProposals } from "@/lib/portal/mock-data";
import { getProposalStatusOverride } from "@/lib/portal/auth";
import { usePortal } from "@/components/portal/PortalProvider";
import { hasPermission } from "@/lib/portal/permissions";

export function PortalProposals() {
  const { user } = usePortal();
  const canAccept = hasPermission(user?.role ?? "prospect", "accept_proposals");

  return (
    <PortalShell title="Proposals" subtitle="Review, approve, and track engagement">
      <div className="grid gap-4">
        {mockProposals.length === 0 ? (
          <EmptyState title="No proposals" description="Your account manager will share proposals here when ready." />
        ) : (
          mockProposals.map((p) => {
            const status = getProposalStatusOverride(p.id) ?? p.status;
            return (
              <PortalCard key={p.id} href={`/portal/proposals/${p.id}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-[var(--portal-text)]">{p.title}</h3>
                    <p className="mt-1 text-sm text-[var(--portal-muted)]">{p.projectType} · Sent {p.sentAt}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={status} />
                    <span className="font-display font-semibold text-[var(--portal-text)]">{p.amount}</span>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-[var(--portal-muted)]">{p.summary}</p>
                {canAccept && (status === "sent" || status === "review") && (
                  <p className="mt-3 text-xs font-medium text-brand-400">Action required — review proposal →</p>
                )}
              </PortalCard>
            );
          })
        )}
      </div>
    </PortalShell>
  );
}
