import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { typography } from "@/lib/typography";

export function Section({
  children,
  className,
  id,
  bleed = true,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
} & React.ComponentProps<"section">) {
  return (
    <section id={id} className={cn("relative overflow-hidden", className)} {...props}>
      {bleed ? (
        <div className="pointer-events-none absolute inset-0 bg-brand-800" aria-hidden />
      ) : null}
      <Container className="relative z-10">{children}</Container>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className={typography.eyebrow}>{children}</p>;
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={cn(typography.h2, "mt-4", className)}>{children}</h2>;
}

export { Card as GlassCard } from "@/components/design/Card";
