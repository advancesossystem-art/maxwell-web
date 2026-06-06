import { companyMetricDisplay } from "@/lib/company-metrics";
import { cn } from "@/lib/utils";

type TrustNearCTAProps = {
  className?: string;
  compact?: boolean;
  variant?: "light" | "dark";
};

const items = [
  { value: companyMetricDisplay.supportResponse, label: "Response" },
  { value: companyMetricDisplay.satisfaction, label: "Satisfaction" },
  { value: companyMetricDisplay.projectsCompleted, label: "Projects" },
  { value: companyMetricDisplay.industriesServed, label: "Industries" },
] as const;

export function TrustNearCTA({
  className,
  compact = false,
  variant = "light",
}: TrustNearCTAProps) {
  const dark = variant === "dark";

  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-6 gap-y-2",
        compact ? "text-xs" : "text-sm",
        !className?.includes("justify-start") && "justify-center text-center",
        className,
      )}
      aria-label="Delivery proof"
    >
      {items.map((item) => (
        <li
          key={item.label}
          className={dark ? "text-[#94A3B8]" : "text-[var(--v6-text-secondary)]"}
        >
          <span
            className={cn(
              "font-display font-semibold",
              dark ? "text-white" : "text-[var(--v6-text)]",
            )}
          >
            {item.value}
          </span>
          <span className="ml-1.5">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
