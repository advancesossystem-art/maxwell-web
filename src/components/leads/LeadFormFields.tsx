export {
  FormField,
  FormCard,
  inputClass,
  labelClass,
} from "@/components/design/Form";

import { cn } from "@/lib/utils";

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-caption">
        <span id="wizard-progress-label">Step {current} of {total}</span>
        <span aria-hidden="true">{pct}% complete</span>
      </div>
      <div
        role="progressbar"
        aria-labelledby="wizard-progress-label"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        className="h-2 overflow-hidden rounded-full bg-white/[0.06]"
      >
        <div
          className="h-full rounded-full bg-brand-600 transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function OptionCard({
  selected,
  onClick,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "min-h-11 rounded-xl border p-4 text-left transition-all duration-200",
        selected
          ? "border-brand-500/50 bg-brand-500/10 ring-1 ring-brand-500/30"
          : "border-white/[0.08] bg-white/[0.03] hover:border-brand-500/25",
      )}
    >
      <div className="text-h3 text-base">{title}</div>
      {description && <p className="mt-1 text-caption">{description}</p>}
    </button>
  );
}

export function FeatureChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "min-h-11 rounded-full px-4 py-2 text-sm font-medium transition-all",
        selected
          ? "bg-brand-600 text-white"
          : "border border-white/[0.1] bg-white/[0.03] text-muted hover:border-brand-500/30 hover:text-white",
      )}
    >
      {label}
    </button>
  );
}
