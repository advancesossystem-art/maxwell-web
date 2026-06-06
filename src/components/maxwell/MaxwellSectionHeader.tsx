import { cn } from "@/lib/utils";
import { H2, Lead } from "@/components/design/typography";

type MaxwellSectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function MaxwellSectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: MaxwellSectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <p
        className={cn(
          "text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-500",
          centered && "mx-auto",
        )}
      >
        {eyebrow}
      </p>
      <H2 className={cn("mt-4", centered && "mx-auto text-center")}>{title}</H2>
      {description ? (
        <Lead className={cn("mt-4 text-muted", centered && "mx-auto text-center")}>
          {description}
        </Lead>
      ) : null}
    </div>
  );
}
