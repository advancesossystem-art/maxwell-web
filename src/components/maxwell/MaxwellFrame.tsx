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
        "rounded-2xl border border-white/[0.08] bg-white/[0.02]",
        className,
      )}
    >
      {children}
    </div>
  );
}
