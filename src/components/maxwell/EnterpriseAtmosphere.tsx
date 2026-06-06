import { cn } from "@/lib/utils";

type Variant = "hero" | "page" | "section" | "cta";

const variantStyles: Record<Variant, string> = {
  hero: [
    "radial-gradient(ellipse 65% 50% at 18% -8%, var(--portal-blue), transparent 58%)",
    "radial-gradient(ellipse 45% 35% at 92% 18%, rgba(37, 99, 235, 0.04), transparent 52%)",
  ].join(", "),
  page: "radial-gradient(ellipse 75% 45% at 50% -18%, var(--portal-blue), transparent 65%)",
  section: "radial-gradient(ellipse 48% 32% at 50% 0%, rgba(37, 99, 235, 0.04), transparent 58%)",
  cta: "radial-gradient(ellipse 60% 40% at 50% 100%, var(--portal-blue), transparent 62%)",
};

export function EnterpriseAtmosphere({
  variant = "page",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden bg-background", className)}
      aria-hidden
    >
      <div className="absolute inset-0" style={{ background: variantStyles[variant] }} />
      {variant === "hero" ? (
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 0%, var(--background) 88%)" }}
        />
      ) : null}
    </div>
  );
}
