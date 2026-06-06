"use client";

import { PortalShell } from "@/components/portal/PortalShell";
import { PortalCard, StatusBadge, EmptyState } from "@/components/portal/PortalUI";
import { mockInvoices } from "@/lib/portal/mock-data";
import { usePortal } from "@/components/portal/PortalProvider";
import { hasPermission } from "@/lib/portal/permissions";

export function PortalInvoices() {
  const { user } = usePortal();
  const canView = hasPermission(user?.role ?? "prospect", "view_invoices");

  if (!canView) {
    return (
      <PortalShell title="Invoices" subtitle="Available for active clients">
        <EmptyState title="Invoice access restricted" description="Invoices are available once you are an active client." />
      </PortalShell>
    );
  }

  const paid = mockInvoices.filter((i) => i.status === "paid");
  const pending = mockInvoices.filter((i) => i.status === "pending");
  const overdue = mockInvoices.filter((i) => i.status === "overdue");

  function downloadInvoice(number: string) {
    const blob = new Blob([`Invoice ${number}\n\nDemo PDF placeholder from Maxwell Client Portal.`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${number}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const sections = [
    { title: "Paid", items: paid },
    { title: "Pending", items: pending },
    { title: "Overdue", items: overdue },
  ];

  return (
    <PortalShell title="Invoices" subtitle="Payment status and downloads">
      {sections.map((section) =>
        section.items.length > 0 ? (
          <div key={section.title} className="mb-8">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--portal-muted)]">{section.title}</h2>
            <div className="mt-3 grid gap-3">
              {section.items.map((inv) => (
                <PortalCard key={inv.id}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-[var(--portal-text)]">{inv.number}</p>
                      <p className="mt-1 text-sm text-[var(--portal-muted)]">{inv.projectName} · Due {inv.dueAt}</p>
                      {inv.paidAt && <p className="text-xs text-emerald-600">Paid {inv.paidAt}</p>}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-display font-semibold text-[var(--portal-text)]">{inv.amount}</span>
                      <StatusBadge status={inv.status} variant="invoice" />
                      <button type="button" onClick={() => downloadInvoice(inv.number)} className="text-sm font-medium text-brand-600 hover:underline">
                        Download
                      </button>
                    </div>
                  </div>
                </PortalCard>
              ))}
            </div>
          </div>
        ) : null,
      )}
    </PortalShell>
  );
}
