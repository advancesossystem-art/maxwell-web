import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PageSectionTone = "base" | "raised" | "deep" | "elevated";

const toneClass: Record<PageSectionTone, string> = {
  base: "mx-section--base",
  raised: "mx-section--raised",
  elevated: "mx-section--raised",
  deep: "mx-section--deep",
};

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: PageSectionTone;
  /** @deprecated use tone */
  elevated?: boolean;
  containerClassName?: string;
  compact?: boolean;
};

export function PageSection({
  children,
  className,
  id,
  tone,
  elevated,
  containerClassName,
  compact = false,
}: PageSectionProps) {
  const resolvedTone = tone ?? (elevated ? "elevated" : "base");

  return (
    <section
      id={id}
      className={cn(
        "mx-section relative",
        compact ? "section-py-compact" : "section-py",
        toneClass[resolvedTone],
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
  align = "left",
  dense = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  dense?: boolean;
}) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        dense ? "mb-5 flex flex-col gap-3 sm:mb-6" : "mb-8 flex flex-col gap-4 sm:mb-10",
        !centered && "sm:flex-row sm:items-end sm:justify-between",
        centered && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        {eyebrow ? <p className="mx-eyebrow">{eyebrow}</p> : null}
        <h2
          className={cn(
            "mx-display mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] text-balance",
            centered && "mx-auto",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p className={cn("mx-lead mt-4", centered && "mx-auto")}>{description}</p>
        ) : null}
      </div>
      {action ? <div className={cn(centered && "flex justify-center")}>{action}</div> : null}
    </header>
  );
}
