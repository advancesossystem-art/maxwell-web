import { cn } from "@/lib/utils";

export function MetricCard({
  label,
  value,
  sub,
  accent = "#4f46e5",
  className,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: string;
  className?: string;
}) {
  return (
    <div className={cn("tool-metric", className)} style={{ ["--tool-accent" as string]: accent }}>
      <p className="tool-metric__label">{label}</p>
      <p className="tool-metric__value">{value}</p>
      {sub ? <p className="tool-metric__sub">{sub}</p> : null}
    </div>
  );
}

export function MetricGrid({
  columns = 4,
  children,
  className,
}: {
  columns?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("tool-metric-grid", columns === 2 && "tool-metric-grid--2", columns === 3 && "tool-metric-grid--3", columns === 4 && "tool-metric-grid--4", className)}>
      {children}
    </div>
  );
}

export function ToolSection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("tool-section", className)}>
      <h3 className="tool-section__title">{title}</h3>
      <div className="tool-section__body">{children}</div>
    </section>
  );
}

export function ScoreRing({ score, label, size = 120 }: { score: number; label: string; size?: number }) {
  const r = (size - 12) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 75 ? "#10B981" : score >= 50 ? "#4f46e5" : "#F59E0B";

  return (
    <div className="relative flex flex-col items-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e2e8f0" strokeWidth="8" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center" style={{ width: size, height: size }}>
        <span className="font-display text-2xl font-bold text-[var(--v6-text)]">{score}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-[var(--v6-text-secondary)]">{label}</p>
    </div>
  );
}

export function BarChart({
  items,
  maxValue,
}: {
  items: { label: string; value: number; color?: string }[];
  maxValue?: number;
}) {
  const max = maxValue ?? Math.max(...items.map((i) => i.value), 1);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={item.label}>
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-[var(--v6-text-secondary)]">{item.label}</span>
            <span className="font-medium text-[var(--v6-text)]">{item.value}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[var(--v6-bg-soft)]">
            <div
              className="h-full rounded-full transition-[width] duration-700 ease-out"
              style={{
                width: `${(item.value / max) * 100}%`,
                backgroundColor: item.color ?? "#4f46e5",
                transitionDelay: `${i * 80}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ReportListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <ToolSection title={title}>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </ToolSection>
  );
}

export function StackRecommendationCard({ title, name, reason }: { title: string; name: string; reason: string }) {
  return (
    <div className="tool-section">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">{title}</p>
      <p className="mt-2 font-display text-lg font-bold text-[#4338ca]">{name}</p>
      <p className="mt-2 text-sm text-[var(--v6-text-secondary)]">{reason}</p>
    </div>
  );
}

export function PhaseTimeline({
  phases,
}: {
  phases: { name: string; duration: string; milestones: string[] }[];
}) {
  return (
    <div className="space-y-0">
      {phases.map((phase, i) => (
        <div key={phase.name} className="relative flex gap-6 pb-10 last:pb-0">
          {i < phases.length - 1 && (
            <div className="absolute left-[15px] top-8 h-full w-0.5 bg-[#4f46e5]/20" />
          )}
          <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4f46e5] text-xs font-bold text-white">
            {i + 1}
          </div>
          <div className="tool-section flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-[var(--v6-text)]">{phase.name}</h3>
              <span className="rounded-full bg-[#4f46e5]/10 px-3 py-1 text-xs font-medium text-[#4338ca]">{phase.duration}</span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-[var(--v6-text-secondary)]">
              {phase.milestones.map((m) => (
                <li key={m}>• {m}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
