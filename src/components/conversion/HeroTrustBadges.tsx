import { businessAddress } from "@/lib/business-address";

const badges = [
  {
    title: "GST-Registered Enterprise",
    description: "Claim input tax credit with fully compliant GST invoices on every project.",
    icon: "receipt",
  },
  {
    title: "100% IP Ownership",
    description: "Complete source code and design files transferred at launch. Zero vendor lock-in.",
    icon: "code",
  },
  {
    title: `Based in ${businessAddress.addressLocality}, Gujarat`,
    description: "On-site discovery and strategic consultation across Gujarat industrial corridors.",
    icon: "location",
  },
  {
    title: "No Hidden Annual Costs",
    description: "Zero required plugin, theme, or licensing renewals on custom Next.js builds.",
    icon: "shield",
  },
] as const;

function BadgeIcon({ type }: { type: (typeof badges)[number]["icon"] }) {
  const cls = "h-5 w-5 text-emerald-600";
  switch (type) {
    case "receipt":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6m-6 4h6M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16l-3-2-3 2-3-2-3 2-3-2z" />
        </svg>
      );
    case "code":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0-4 4m4-4H3" />
        </svg>
      );
    case "location":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      );
    default:
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      );
  }
}

type HeroTrustBadgesProps = {
  className?: string;
  compact?: boolean;
};

export function HeroTrustBadges({ className = "", compact = false }: HeroTrustBadgesProps) {
  return (
    <section
      className={`border-b border-[var(--v6-border)] bg-[#f8fafc] ${className}`}
      aria-label="Business trust and compliance indicators"
    >
      <div className={`v6-container ${compact ? "py-4" : "py-6"}`}>
        <ul className={`grid gap-3 ${compact ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-4"} gap-4`}>
          {badges.map((badge) => (
            <li
              key={badge.title}
              className="flex gap-3 rounded-xl border border-[var(--v6-border)] bg-white p-4 shadow-sm"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                <BadgeIcon type={badge.icon} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[var(--v6-text)]">{badge.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-[var(--v6-text-secondary)]">
                  {badge.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
