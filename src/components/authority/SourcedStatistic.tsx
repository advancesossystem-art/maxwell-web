import Link from "next/link";
import type { SourcedStatistic } from "@/lib/statistics-data";

export function SourcedStatisticCard({ stat }: { stat: SourcedStatistic }) {
  return (
    <figure className="rounded-xl border border-border bg-surface-elevated p-5">
      <p className="font-display text-3xl font-bold text-brand-600">{stat.value}</p>
      <figcaption className="mt-2 text-sm font-medium text-[var(--v6-text)]">{stat.label}</figcaption>
      <p className="mt-2 text-xs leading-relaxed text-muted">{stat.context}</p>
      <p className="mt-3 text-xs text-muted">
        Source:{" "}
        {stat.sourceUrl ? (
          <Link href={stat.sourceUrl} className="text-brand-600 hover:text-brand-500">
            {stat.source}
          </Link>
        ) : (
          stat.source
        )}
      </p>
    </figure>
  );
}

export function SourcedStatisticsGrid({
  stats,
  title = "Industry statistics",
}: {
  stats: SourcedStatistic[];
  title?: string;
}) {
  if (stats.length === 0) return null;
  return (
    <section aria-label={title}>
      <h2 className="font-display text-xl font-bold">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <SourcedStatisticCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}
