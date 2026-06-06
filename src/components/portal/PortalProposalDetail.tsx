"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PortalShell } from "@/components/portal/PortalShell";
import { StatusBadge, PortalCard } from "@/components/portal/PortalUI";
import { PortalSection } from "@/components/portal/PortalLayout";
import { DemoDataNotice } from "@/components/portal/PortalDemo";
import { Button } from "@/components/ui/Button";
import { getProposalById } from "@/lib/portal/mock-data";
import { getProposalStatusOverride, updateProposalStatus } from "@/lib/portal/auth";
import { trackPortalEvent } from "@/lib/portal/analytics";
import { usePortal } from "@/components/portal/PortalProvider";
import { hasPermission } from "@/lib/portal/permissions";
import { cn } from "@/lib/utils";

export function PortalProposalDetail({ proposalId }: { proposalId: string }) {
  const router = useRouter();
  const { user, refreshSession } = usePortal();
  const proposal = getProposalById(proposalId);
  const [revision, setRevision] = useState(0);
  const [revisionNote, setRevisionNote] = useState("");
  const [showRevisionForm, setShowRevisionForm] = useState(false);
  const canAccept = hasPermission(user?.role ?? "prospect", "accept_proposals");

  const status = proposal ? (getProposalStatusOverride(proposal.id) ?? proposal.status) : "draft";
  void revision;

  useEffect(() => {
    if (proposal) trackPortalEvent("proposal_view", { proposal_id: proposal.id });
  }, [proposal]);

  if (!proposal) {
    return (
      <PortalShell title="Proposal not found">
        <Link href="/portal/proposals" className="text-sm text-brand-400 hover:underline">
          ← Back to proposals
        </Link>
      </PortalShell>
    );
  }

  const p = proposal;

  function handleAction(next: "approved" | "review" | "rejected") {
    updateProposalStatus(p.id, next);
    setRevision((r) => r + 1);
    if (next === "approved") trackPortalEvent("proposal_accept", { proposal_id: p.id });
    if (next === "review") trackPortalEvent("proposal_revision", { proposal_id: p.id });
    refreshSession();
    router.refresh();
    setShowRevisionForm(false);
  }

  function handleDownload() {
    trackPortalEvent("proposal_download", { proposal_id: p.id });
    const content = [
      p.title,
      p.summary,
      `Investment: ${p.amount}`,
      `Timeline: ${p.timeline}`,
      `Scope:\n${p.scope.map((s) => `  - ${s}`).join("\n")}`,
      `Deliverables:\n${p.deliverables.map((d) => `  - ${d.title}: ${d.description}`).join("\n")}`,
      "\n[DEMO] This export is a placeholder — production delivers signed PDF.",
    ].join("\n\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${p.title.replace(/\s+/g, "-")}-proposal.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <PortalShell title={p.title} subtitle={`${p.projectType} · Valid until ${p.validUntil}`}>
      <Link href="/portal/proposals" className="mb-4 inline-block text-sm text-brand-400 hover:underline">
        ← All proposals
      </Link>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <StatusBadge status={status} />
        <span className="font-display text-2xl font-bold text-[var(--portal-text)]">{p.amount}</span>
        <span className="text-sm text-[var(--portal-muted)]">Sent {p.sentAt}</span>
      </div>

      <DemoDataNotice compact />

      <PortalCard className="mt-6">
        <h3 className="font-display font-semibold text-[var(--portal-text)]">Proposal summary</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--portal-muted)]">{p.summary}</p>
      </PortalCard>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <PortalSection title="Scope">
          <PortalCard>
            <ul className="space-y-2 text-sm text-[var(--portal-muted)]">
              {p.scope.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-brand-400">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </PortalCard>
        </PortalSection>

        <PortalSection title="Technology & timeline">
          <PortalCard>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--portal-border)] bg-[var(--portal-hover)] px-3 py-1 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--portal-muted)]">
              <span className="font-medium text-[var(--portal-text)]">Timeline:</span> {p.timeline}
            </p>
          </PortalCard>
        </PortalSection>
      </div>

      {p.investmentBreakdown && (
        <PortalSection title="Investment" className="mt-8">
          <PortalCard>
            <ul className="divide-y divide-[var(--portal-border)]">
              {p.investmentBreakdown.map((row) => (
                <li key={row.phase} className="flex justify-between py-3 first:pt-0 last:pb-0">
                  <span className="text-sm text-[var(--portal-text)]">{row.phase}</span>
                  <span className="text-sm font-semibold text-[var(--portal-text)]">{row.amount}</span>
                </li>
              ))}
            </ul>
          </PortalCard>
        </PortalSection>
      )}

      <PortalSection title="Deliverables" className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.deliverables.map((d) => (
            <PortalCard key={d.title}>
              <p className="font-medium text-[var(--portal-text)]">{d.title}</p>
              <p className="mt-2 text-xs text-[var(--portal-muted)]">{d.description}</p>
            </PortalCard>
          ))}
        </div>
      </PortalSection>

      <PortalSection title="Status timeline" className="mt-8">
        <PortalCard>
          <div className="space-y-4">
            {p.timelineEvents.map((e, i) => (
              <div key={e.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "h-3 w-3 rounded-full",
                      e.status === "completed"
                        ? "bg-emerald-500"
                        : e.status === "current"
                          ? "bg-brand-500 ring-4 ring-brand-500/20"
                          : "bg-[var(--portal-muted-bg)]",
                    )}
                  />
                  {i < p.timelineEvents.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-[var(--portal-border)]" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-sm font-medium text-[var(--portal-text)]">{e.label}</p>
                  <p className="text-xs text-[var(--portal-muted)]">{e.date}</p>
                  {e.note ? <p className="mt-1 text-xs text-brand-400">{e.note}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </PortalCard>
      </PortalSection>

      <PortalSection title="Approval actions" className="mt-8">
        <PortalCard>
          <p className="text-sm text-[var(--portal-muted)]">
            Approvals in this demo update status locally only — your account team will confirm in production.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={handleDownload}>
              Download summary
            </Button>
            {canAccept && status !== "approved" && status !== "rejected" && (
              <>
                <Button onClick={() => handleAction("approved")}>Approve proposal</Button>
                <Button variant="outline" onClick={() => setShowRevisionForm((v) => !v)}>
                  Request revision
                </Button>
                <Button variant="outline" onClick={() => handleAction("rejected")}>
                  Decline
                </Button>
              </>
            )}
          </div>
          {showRevisionForm && (
            <div className="mt-6 space-y-3 border-t border-[var(--portal-border)] pt-6">
              <label htmlFor="revision" className="text-sm font-medium text-[var(--portal-text)]">
                Revision notes
              </label>
              <textarea
                id="revision"
                rows={4}
                value={revisionNote}
                onChange={(e) => setRevisionNote(e.target.value)}
                placeholder="Describe scope, budget, or timeline changes..."
                className="w-full rounded-lg border border-[var(--portal-border)] bg-[var(--portal-hover)] px-4 py-3 text-sm text-[var(--portal-text)] placeholder:text-[var(--portal-muted)]"
              />
              <Button
                onClick={() => {
                  if (revisionNote.trim()) handleAction("review");
                }}
              >
                Submit revision request
              </Button>
            </div>
          )}
        </PortalCard>
      </PortalSection>
    </PortalShell>
  );
}
