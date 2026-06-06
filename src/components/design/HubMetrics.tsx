import { cn } from "@/lib/utils";
import { typography } from "@/lib/typography";

export type HubMetric = { value: string; label: string };

export function HubMetrics({ stats, className }: { stats: HubMetric[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-4", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="card-premium p-4 sm:p-5">
          <p className="hub-metric-value sm:text-3xl">{stat.value}</p>
          <p className={cn("hub-metric-label", typography.caption)}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
