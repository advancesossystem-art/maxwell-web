import { cn } from "@/lib/utils";

type MaxwellFrameProps = {
  children: React.ReactNode;
  className?: string;
};

/** Minimal elevated surface — no brackets or grid */
export function MaxwellFrame({ children, className }: MaxwellFrameProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--v6-border)] bg-[var(--v6-bg-white)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
