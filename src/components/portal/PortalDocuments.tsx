"use client";

import { useMemo, useState } from "react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalCard, EmptyState } from "@/components/portal/PortalUI";
import { PortalSection, DocumentPreviewIcon } from "@/components/portal/PortalLayout";
import { mockDocuments } from "@/lib/portal/mock-data";
import { usePortal } from "@/components/portal/PortalProvider";
import { hasPermission } from "@/lib/portal/permissions";
import { trackPortalEvent } from "@/lib/portal/analytics";
import type { DocumentType } from "@/lib/portal/types";
import { cn } from "@/lib/utils";

const typeLabels: Record<DocumentType, string> = {
  contract: "Contracts",
  proposal: "Proposals",
  report: "Reports",
  meeting_notes: "Meeting notes",
  invoice: "Invoices",
};

const allTypes = Object.keys(typeLabels) as DocumentType[];

export function PortalDocuments() {
  const { user } = usePortal();
  const canDownload = hasPermission(user?.role ?? "prospect", "download_documents");
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState<DocumentType | "all">("all");
  const [previewId, setPreviewId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = [...mockDocuments].sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));
    if (filterType !== "all") list = list.filter((d) => d.type === filterType);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.previewSnippet?.toLowerCase().includes(q) ||
          d.projectName?.toLowerCase().includes(q),
      );
    }
    return list;
  }, [query, filterType]);

  const recent = mockDocuments.slice().sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt)).slice(0, 3);
  const previewDoc = previewId ? mockDocuments.find((d) => d.id === previewId) : null;

  function handleDownload(name: string, id: string) {
    if (!canDownload) return;
    trackPortalEvent("document_download", { document_id: id });
    const blob = new Blob(
      [`Maxwell secure document: ${name}\n\n[DEMO] Production delivers watermarked PDF via secure link.`],
      { type: "text/plain" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name.replace(/\s+/g, "-");
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <PortalShell title="Documents" subtitle="Secure document center · categorized and searchable">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          type="search"
          placeholder="Search documents…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-xl border border-[var(--portal-border)] bg-[var(--portal-card)] px-4 py-2.5 text-sm text-[var(--portal-text)] placeholder:text-[var(--portal-muted)] focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/25"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilterType("all")}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              filterType === "all" ? "bg-brand-600 text-white" : "border border-[var(--portal-border)] text-[var(--portal-muted)]",
            )}
          >
            All
          </button>
          {allTypes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilterType(t)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                filterType === t ? "bg-brand-600 text-white" : "border border-[var(--portal-border)] text-[var(--portal-muted)]",
              )}
            >
              {typeLabels[t]}
            </button>
          ))}
        </div>
      </div>

      <PortalSection title="Recent documents" className="mt-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {recent.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setPreviewId(d.id)}
              className="w-full rounded-xl border border-[var(--portal-border)] bg-[var(--portal-card)] p-4 text-left transition-colors hover:border-brand-500/30"
            >
              <div className="flex gap-3">
                <DocumentPreviewIcon type={d.type} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[var(--portal-text)]">{d.name}</p>
                  <p className="text-xs text-[var(--portal-muted)]">{d.uploadedAt}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </PortalSection>

      {previewDoc && (
        <PortalCard className="mt-6 border-brand-500/30">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex gap-4">
              <DocumentPreviewIcon type={previewDoc.type} />
              <div>
                <p className="font-display font-semibold text-[var(--portal-text)]">{previewDoc.name}</p>
                <p className="mt-1 text-xs text-[var(--portal-muted)]">
                  {typeLabels[previewDoc.type]} · {previewDoc.size} · {previewDoc.uploadedAt}
                </p>
                <p className="mt-3 max-w-xl text-sm text-[var(--portal-muted)]">{previewDoc.previewSnippet}</p>
                <p className="mt-2 text-xs italic text-[var(--portal-muted)]">
                  [Demo] Full PDF preview requires production document service.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {previewDoc.downloadable && canDownload && (
                <button
                  type="button"
                  onClick={() => handleDownload(previewDoc.name, previewDoc.id)}
                  className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-500"
                >
                  Download
                </button>
              )}
              <button
                type="button"
                onClick={() => setPreviewId(null)}
                className="rounded-lg border border-[var(--portal-border)] px-4 py-2 text-sm text-[var(--portal-muted)]"
              >
                Close
              </button>
            </div>
          </div>
        </PortalCard>
      )}

      <PortalSection title="All documents" className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState title="No documents found" description="Try a different search or category filter." />
        ) : (
          <div className="space-y-3">
            {filtered.map((d) => (
              <PortalCard key={d.id}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex min-w-0 flex-1 gap-4">
                    <DocumentPreviewIcon type={d.type} />
                    <div className="min-w-0">
                      <p className="font-medium text-[var(--portal-text)]">{d.name}</p>
                      <p className="mt-1 text-xs text-[var(--portal-muted)]">
                        {typeLabels[d.type]}
                        {d.projectName ? ` · ${d.projectName}` : ""} · {d.size} · {d.uploadedAt}
                      </p>
                      {d.previewSnippet ? (
                        <p className="mt-2 line-clamp-1 text-xs text-[var(--portal-muted)]">{d.previewSnippet}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setPreviewId(d.id)}
                      className="text-sm font-medium text-brand-400 hover:text-brand-300"
                    >
                      Preview
                    </button>
                    {d.downloadable && canDownload && (
                      <button
                        type="button"
                        onClick={() => handleDownload(d.name, d.id)}
                        className="text-sm font-medium text-brand-400 hover:text-brand-300"
                      >
                        Download
                      </button>
                    )}
                    {d.downloadable && !canDownload && (
                      <span className="text-xs text-[var(--portal-muted)]">View only</span>
                    )}
                  </div>
                </div>
              </PortalCard>
            ))}
          </div>
        )}
      </PortalSection>
    </PortalShell>
  );
}
