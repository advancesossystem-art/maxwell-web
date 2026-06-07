"use client";

import { getTrustStripItems } from "@/lib/company-metrics";

/** Full-width trust metrics — projects, industries, satisfaction, delivery */
export function GlobalTrustBar() {
  const items = getTrustStripItems();

  return (
    <section className="border-y border-[var(--v6-border)] bg-[#f8fafc]" aria-label="Company trust metrics">
      <div className="v6-container py-5">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <li key={item.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold text-[#0f172a]">{item.value}</p>
              <p className="mt-0.5 text-sm font-semibold text-[var(--v6-text)]">{item.label}</p>
              {item.description ? (
                <p className="mt-0.5 text-xs text-[var(--v6-text-secondary)]">{item.description}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
