import { cn } from "@/lib/utils";
import { getTrustStripItems } from "@/lib/company-metrics";
import { typography } from "@/lib/typography";

type TrustStripProps = {
  className?: string;
  compact?: boolean;
};

export function TrustStrip({ className, compact = false }: TrustStripProps) {
  const items = getTrustStripItems();

  return (
    <div
      className={cn(
        "trust-strip-scroll gap-3 sm:grid sm:grid-cols-3 lg:grid-cols-5",
        !compact && "sm:gap-3",
        className,
      )}
      role="list"
      aria-label="Company trust metrics"
    >
      {items.map((item) => (
        <div
          key={item.label}
          role="listitem"
          className={cn(
            "card-premium text-center",
            compact ? "p-4" : "p-5",
          )}
        >
          <p className="hub-metric-value sm:text-2xl">{item.value}</p>
          <p className={cn("hub-metric-label font-medium", typography.caption)}>{item.label}</p>
          {!compact && item.description ? (
            <p className={cn("mt-1 hidden text-xs sm:block", typography.caption)}>{item.description}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
