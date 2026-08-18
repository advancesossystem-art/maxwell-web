import Link from "next/link";
import { heroSidePanel } from "@/lib/homepage";

export function HeroSidePanel() {
  const panel = heroSidePanel;

  return (
    <aside
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)] sm:p-7 lg:p-8"
      aria-label="What we build for your business"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">{panel.eyebrow}</p>
      <h2 className="mt-2 font-display text-xl font-bold leading-snug text-[#0f172a] sm:text-2xl">
        {panel.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{panel.intro}</p>

      <ul className="mt-5 space-y-3">
        {panel.outcomes.map((item) => (
          <li key={item.label} className="flex gap-3">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-xs font-bold text-[#059669]"
              aria-hidden
            >
              ✓
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--v6-text)]">{item.label}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-[var(--v6-text-muted)]">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">Website types</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {panel.websiteTypes.map((type) => (
            <li key={type.label}>
              <Link
                href={type.href}
                className="inline-flex rounded-full border border-[var(--v6-border)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--v6-text-secondary)] transition-colors hover:border-[#4f46e5]/40 hover:text-[#4f46e5]"
              >
                {type.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
}
