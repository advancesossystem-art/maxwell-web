"use client";

import { useState } from "react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalCard } from "@/components/portal/PortalUI";
import { PortalSection } from "@/components/portal/PortalLayout";
import { mockMeetings } from "@/lib/portal/mock-data";
import { cn } from "@/lib/utils";

export function PortalMeetings() {
  const upcoming = mockMeetings.filter((m) => m.type === "upcoming");
  const past = mockMeetings.filter((m) => m.type === "past");
  const [expandedId, setExpandedId] = useState<string | null>(upcoming[0]?.id ?? null);

  return (
    <PortalShell title="Meetings" subtitle="Steering syncs, demos, and recorded sessions">
      <PortalSection title="Upcoming">
        {upcoming.length === 0 ? (
          <PortalCard>
            <p className="text-sm text-[var(--portal-muted)]">No upcoming meetings scheduled.</p>
          </PortalCard>
        ) : (
          <div className="space-y-3">
            {upcoming.map((m) => (
              <PortalCard key={m.id}>
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => setExpandedId(expandedId === m.id ? null : m.id)}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-display font-semibold text-[var(--portal-text)]">{m.title}</p>
                      <p className="mt-1 text-sm text-[var(--portal-muted)]">
                        {m.date} · {m.time} · {m.duration}
                      </p>
                    </div>
                    <span className="rounded-full border border-brand-500/30 bg-brand-600/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-brand-300">
                      {m.status}
                    </span>
                  </div>
                </button>
                {expandedId === m.id && (
                  <div className="mt-6 space-y-4 border-t border-[var(--portal-border)] pt-6">
                    {m.agenda && (
                      <div>
                        <p className="text-xs font-semibold uppercase text-[var(--portal-muted)]">Agenda</p>
                        <p className="mt-2 text-sm text-[var(--portal-muted)]">{m.agenda}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-semibold uppercase text-[var(--portal-muted)]">Attendees</p>
                      <p className="mt-2 text-sm text-[var(--portal-muted)]">{m.attendees.join(" · ")}</p>
                    </div>
                    {m.meetingLink && (
                      <p className="text-sm">
                        <span className="text-[var(--portal-muted)]">Join link: </span>
                        <span className="text-brand-400">[Demo] Teams / Meet link on request</span>
                      </p>
                    )}
                  </div>
                )}
              </PortalCard>
            ))}
          </div>
        )}
      </PortalSection>

      <PortalSection title="Past meetings" className="mt-10">
        <div className="space-y-3">
          {past.map((m) => (
            <PortalCard key={m.id}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-display font-semibold text-[var(--portal-text)]">{m.title}</p>
                  <p className="mt-1 text-sm text-[var(--portal-muted)]">
                    {m.date} · {m.time}
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-emerald-300">
                  {m.status}
                </span>
              </div>
              {m.notes && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase text-[var(--portal-muted)]">Notes</p>
                  <p className="mt-2 text-sm text-[var(--portal-muted)]">{m.notes}</p>
                </div>
              )}
              {m.actionItems && m.actionItems.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase text-[var(--portal-muted)]">Action items</p>
                  <ul className="mt-2 space-y-2">
                    {m.actionItems.map((item) => (
                      <li
                        key={item.text}
                        className={cn(
                          "flex items-start gap-2 text-sm",
                          item.done ? "text-[var(--portal-muted)] line-through" : "text-[var(--portal-text)]",
                        )}
                      >
                        <span className={item.done ? "text-emerald-400" : "text-brand-400"}>
                          {item.done ? "✓" : "○"}
                        </span>
                        <span>
                          {item.text}
                          <span className="block text-xs text-[var(--portal-muted)]">{item.owner}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {m.recordingUrl && (
                <p className="mt-4 text-sm text-[var(--portal-muted)]">
                  <span className="font-medium text-[var(--portal-text)]">Recording: </span>
                  [Demo] Recording placeholder — available in production with consent workflow
                </p>
              )}
            </PortalCard>
          ))}
        </div>
      </PortalSection>
    </PortalShell>
  );
}
