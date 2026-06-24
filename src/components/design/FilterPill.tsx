"use client";

import { cn } from "@/lib/utils";

export function FilterCategoryTabs<T extends string>({
  categories,
  labels,
  active,
  onChange,
}: {
  categories: readonly T[];
  labels: Record<T, string>;
  active: T;
  onChange: (cat: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
            active === cat
              ? "bg-brand-600 text-white"
              : "text-[var(--v6-text-secondary)] hover:bg-[#f1f5f9] hover:text-[var(--v6-text)]",
          )}
        >
          {labels[cat]}
        </button>
      ))}
    </div>
  );
}

export function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-[44px] rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200",
        active
          ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
          : "border border-[var(--v6-border)] bg-white text-[var(--v6-text-secondary)] hover:border-[#c7d2fe] hover:text-[var(--v6-text)]",
      )}
    >
      {label}
    </button>
  );
}
