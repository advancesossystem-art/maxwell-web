import Link from "next/link";
import { heroSidePanel } from "@/lib/homepage";

export function HeroSidePanel() {
  const panel = heroSidePanel;

  return (
    <aside
      className="rounded-2xl border border-[var(--v6-border)] bg-gradient-to-br from-[#f8fafc] via-white to-[#eef2ff] p-5 shadow-sm sm:p-6 lg:p-7"
      aria-label="What we build for your business"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">{panel.eyebrow}</p>
      <h2 className="mt-2 font-display text-xl font-bold leading-snug text-[#0f172a] sm:text-2xl">
        {panel.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{panel.intro}</p>

      <ul className="mt-5 space-y-3">
        {panel.outcomes.map((item) => (
          <li key={item.label} className="flex gap-3 rounded-xl border border-[var(--v6-border)] bg-white/80 p-3">
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

      <p className="mt-5 text-sm font-medium text-[var(--v6-text-secondary)]">{panel.priceNote}</p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <Link
          href={panel.primaryLink.href}
          className="v6-btn v6-btn-primary v6-btn-lg inline-flex flex-1 items-center justify-center text-center sm:flex-none"
        >
          {panel.primaryLink.label}
        </Link>
        <Link
          href={panel.secondaryLink.href}
          className="v6-btn v6-btn-secondary inline-flex flex-1 items-center justify-center text-center sm:flex-none"
        >
          {panel.secondaryLink.label}
        </Link>
      </div>
    </aside>
  );
}
