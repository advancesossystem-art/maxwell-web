import Link from "next/link";
import type { SourcedStatistic } from "@/lib/statistics-data";

function StatBlock({ title, stats }: { title: string; stats: SourcedStatistic[] }) {
  if (stats.length === 0) return null;
  return (
    <div>
      <h3 className="font-display text-lg font-semibold text-[var(--v6-text)]">{title}</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <figure key={stat.id} className="rounded-xl border border-border bg-surface-elevated p-4">
            <p className="font-display text-2xl font-bold text-brand-600">{stat.value}</p>
            <figcaption className="mt-1 text-sm font-medium text-[var(--v6-text)]">{stat.label}</figcaption>
            <p className="mt-2 text-xs leading-relaxed text-muted">{stat.context}</p>
            <p className="mt-2 text-xs text-muted">
              Source ({stat.publishedDate}):{" "}
              {stat.sourceUrl ? (
                <Link href={stat.sourceUrl} className="text-brand-600 hover:text-brand-500">
                  {stat.source}
                </Link>
              ) : (
                stat.source
              )}
            </p>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function StatisticsPanel({
  industry,
  market,
  benchmark,
  compact,
}: {
  industry: SourcedStatistic[];
  market: SourcedStatistic[];
  benchmark: SourcedStatistic[];
  compact?: boolean;
}) {
  if (industry.length === 0 && market.length === 0 && benchmark.length === 0) return null;

  return (
    <section className={compact ? "py-10" : "border-b border-border py-16"} aria-label="Industry statistics">
      <div className="v6-container space-y-10">
        {!compact && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Evidence-backed data</p>
            <h2 className="mt-2 font-display text-2xl font-bold">Statistics & benchmarks</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Sourced from Maxwell research, reports, and documented client engagements — with publication dates.
            </p>
          </div>
        )}
        <StatBlock title="Industry statistics" stats={industry} />
        <StatBlock title="Market trends" stats={market} />
        <StatBlock title="Benchmarks" stats={benchmark} />
      </div>
    </section>
  );
}
