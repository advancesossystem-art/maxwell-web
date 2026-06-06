"use client";

import { useState, useMemo } from "react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalCard, StatusBadge } from "@/components/portal/PortalUI";
import { PortalSection } from "@/components/portal/PortalLayout";
import { Button } from "@/components/ui/Button";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { cn } from "@/lib/utils";
import { mockTickets, getTicketById } from "@/lib/portal/mock-data";
import type { SupportTicket, TicketStatus, TicketCategory } from "@/lib/portal/types";
import { trackPortalEvent } from "@/lib/portal/analytics";
import { usePortal } from "@/components/portal/PortalProvider";
import { hasPermission } from "@/lib/portal/permissions";

const textareaClass = cn(inputClass, "resize-y min-h-[100px]");

const statusCounts = (tickets: SupportTicket[]) => {
  const keys: TicketStatus[] = ["open", "in_progress", "waiting", "resolved", "closed"];
  return keys.map((s) => ({ status: s, count: tickets.filter((t) => t.status === s).length }));
};

const categoryLabels: Record<TicketCategory, string> = {
  bug: "Bug",
  feature: "Feature request",
  billing: "Billing",
  access: "Access",
  general: "General",
};

export function PortalSupport() {
  const { user } = usePortal();
  const [tickets, setTickets] = useState(mockTickets);
  const [selectedId, setSelectedId] = useState<string | null>(mockTickets[0]?.id ?? null);
  const [showForm, setShowForm] = useState(false);
  const canCreate = hasPermission(user?.role ?? "prospect", "create_support");
  const counts = useMemo(() => statusCounts(tickets), [tickets]);
  const selected = selectedId ? getTicketById(selectedId) ?? tickets.find((t) => t.id === selectedId) : null;

  function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = String(fd.get("subject"));
    const category = (fd.get("category") as TicketCategory) || "general";
    const ticket: SupportTicket = {
      id: `tkt-${Date.now()}`,
      subject,
      status: "open",
      priority: "medium",
      category,
      createdAt: new Date().toISOString().slice(0, 10),
      updatedAt: new Date().toISOString().slice(0, 10),
      messages: 1,
      responseExpectation: "Standard — response within 1 business day",
      thread: [
        {
          id: "new-1",
          author: user?.name ?? "Client",
          role: "client",
          body: String(fd.get("details") || subject),
          createdAt: new Date().toISOString(),
        },
      ],
    };
    setTickets((t) => [ticket, ...t]);
    setSelectedId(ticket.id);
    trackPortalEvent("support_create", { subject });
    setShowForm(false);
    e.currentTarget.reset();
  }

  return (
    <PortalShell title="Support" subtitle="Engineering support with SLA visibility">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
        {counts.map((c) => (
          <PortalCard key={c.status}>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--portal-muted)]">
              {c.status.replace("_", " ")}
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-[var(--portal-text)]">{c.count}</p>
          </PortalCard>
        ))}
      </div>

      {canCreate && (
        <div className="mt-6">
          {!showForm ? (
            <Button onClick={() => setShowForm(true)}>New ticket</Button>
          ) : (
            <PortalCard>
              <form onSubmit={handleCreate} className="space-y-4">
                <FormField label="Subject" htmlFor="subject" required>
                  <input id="subject" name="subject" className={inputClass} placeholder="Describe your issue" />
                </FormField>
                <FormField label="Category" htmlFor="category" required>
                  <select id="category" name="category" className={inputClass} defaultValue="general">
                    {Object.entries(categoryLabels).map(([k, v]) => (
                      <option key={k} value={k}>
                        {v}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Details" htmlFor="details">
                  <textarea id="details" name="details" rows={4} className={textareaClass} placeholder="Steps, environment, urgency…" />
                </FormField>
                <div className="flex gap-3">
                  <Button type="submit">Submit ticket</Button>
                  <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </PortalCard>
          )}
        </div>
      )}

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        <PortalSection
          title="Tickets"
          className={cn("lg:col-span-2", selected && "max-lg:hidden")}
        >
          <div className="space-y-2">
            {tickets.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedId(t.id)}
                className={cn(
                  "w-full min-h-11 rounded-xl border p-4 text-left transition-colors",
                  selectedId === t.id
                    ? "border-brand-500/40 bg-brand-600/10"
                    : "border-[var(--portal-border)] bg-[var(--portal-card)] hover:border-brand-500/25",
                )}
              >
                <p className="text-sm font-medium text-[var(--portal-text)]">{t.subject}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <StatusBadge status={t.status} variant="ticket" />
                  <span className="text-[10px] uppercase text-[var(--portal-muted)]">{t.priority}</span>
                  <span className="text-[10px] text-[var(--portal-muted)]">{categoryLabels[t.category]}</span>
                </div>
              </button>
            ))}
          </div>
        </PortalSection>

        <div className={cn("lg:col-span-3", !selected && "max-lg:hidden")}>
          {selected ? (
            <PortalCard>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="mb-4 flex min-h-11 items-center gap-2 text-sm font-medium text-brand-400 lg:hidden"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                All tickets
              </button>
              <div className="border-b border-[var(--portal-border)] pb-4">
                <h2 className="font-display text-lg font-semibold text-[var(--portal-text)]">{selected.subject}</h2>
                <p className="mt-1 text-xs text-[var(--portal-muted)]">
                  #{selected.id} · Created {selected.createdAt} · Updated {selected.updatedAt}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <StatusBadge status={selected.status} variant="ticket" />
                  <span className="rounded-full bg-[var(--portal-hover)] px-2 py-0.5 text-xs capitalize">
                    {selected.priority} priority
                  </span>
                  <span className="rounded-full bg-[var(--portal-hover)] px-2 py-0.5 text-xs">
                    {categoryLabels[selected.category]}
                  </span>
                </div>
                <p className="mt-3 text-sm text-brand-300/90">{selected.responseExpectation}</p>
              </div>

              <PortalSection title="Conversation" className="mt-6">
                <ul className="space-y-4">
                  {selected.thread.map((msg) => (
                    <li
                      key={msg.id}
                      className={cn(
                        "rounded-lg border p-4",
                        msg.role === "client"
                          ? "border-[var(--portal-border)] bg-[var(--portal-hover)]"
                          : "border-brand-500/20 bg-brand-600/5",
                      )}
                    >
                      <div className="flex justify-between gap-2 text-xs text-[var(--portal-muted)]">
                        <span className="font-medium text-[var(--portal-text)]">{msg.author}</span>
                        <span>{msg.createdAt}</span>
                      </div>
                      <p className="mt-2 text-sm text-[var(--portal-muted)]">{msg.body}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs italic text-[var(--portal-muted)]">
                  [Demo] Replies in production sync with email and Slack.
                </p>
              </PortalSection>
            </PortalCard>
          ) : (
            <PortalCard>
              <p className="text-sm text-[var(--portal-muted)]">Select a ticket to view timeline and messages.</p>
            </PortalCard>
          )}
        </div>
      </div>
    </PortalShell>
  );
}
