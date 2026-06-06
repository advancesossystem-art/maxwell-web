"use client";

import { PortalNavContent } from "@/components/portal/PortalNavContent";

export function PortalSidebar({ className }: { className?: string }) {
  return (
    <aside
      className={
        className ??
        "hidden h-full w-64 shrink-0 flex-col border-r border-[var(--portal-border)] bg-[var(--portal-sidebar)] md:flex"
      }
    >
      <PortalNavContent />
    </aside>
  );
}
