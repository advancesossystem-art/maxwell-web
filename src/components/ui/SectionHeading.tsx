import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-brand-600/20 bg-brand-50 px-3 py-1 text-xs font-medium tracking-wide text-brand-700 uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {badge && (
        <Badge className={cn("mb-4", dark && "border-white/20 bg-white/10 text-blue-200")}>
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-blue-100/80" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
