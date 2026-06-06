import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
}) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[calc(100vw-2.5rem)] px-[clamp(1rem,2vw,1.75rem)]",
        className,
      )}
    >
      {children}
    </Component>
  );
}
