import { cn } from "@/lib/utils";

export function MetricCard({
  label,
  value,
  sub,
  accent = "#2563EB",
  className,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-border bg-surface-elevated p-6", className)}>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold" style={{ color: accent }}>
        {value}
      </p>
      {sub && <p className="mt-1 text-sm text-muted">{sub}</p>}
    </div>
  );
}

export function ScoreRing({ score, label, size = 120 }: { score: number; label: string; size?: number }) {
  const r = (size - 12) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 75 ? "#10B981" : score >= 50 ? "#2563EB" : "#F59E0B";

  return (
    <div className="relative flex flex-col items-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e5e7eb" strokeWidth="8" />
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
        <span className="font-display text-2xl font-bold">{score}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-muted">{label}</p>
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
            <span className="text-muted">{item.label}</span>
            <span className="font-medium">{item.value}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-surface">
            <div
              className="h-full rounded-full transition-[width] duration-700 ease-out"
              style={{
                width: `${(item.value / max) * 100}%`,
                backgroundColor: item.color ?? "#2563EB",
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
    <section className="rounded-2xl border border-border bg-surface-elevated p-6">
      <h3 className="font-display font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </section>
  );
}

export function StackRecommendationCard({ title, name, reason }: { title: string; name: string; reason: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-6">
      <p className="text-xs font-semibold uppercase text-muted">{title}</p>
      <p className="mt-2 font-display text-lg font-bold text-brand-700">{name}</p>
      <p className="mt-2 text-sm text-muted">{reason}</p>
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
            <div className="absolute left-[15px] top-8 h-full w-0.5 bg-brand-600/20" />
          )}
          <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
            {i + 1}
          </div>
          <div className="flex-1 rounded-2xl border border-border bg-surface-elevated p-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="font-display font-semibold">{phase.name}</h3>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">{phase.duration}</span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted">
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
