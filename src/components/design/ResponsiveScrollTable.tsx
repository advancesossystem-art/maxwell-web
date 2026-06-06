import { cn } from "@/lib/utils";

type ResponsiveScrollTableProps = {
  children: React.ReactNode;
  className?: string;
  hint?: string;
};

/** Horizontal scroll on narrow viewports; full table from `sm` and up. */
export function ResponsiveScrollTable({
  children,
  className,
  hint = "Swipe to compare",
}: ResponsiveScrollTableProps) {
  return (
    <div className={cn("responsive-table", className)}>
      <div className="responsive-table__scroll">{children}</div>
      <p className="responsive-table__hint">
        <span className="sr-only">{hint}. Table scrolls horizontally on small screens.</span>
        <span aria-hidden="true">{hint} →</span>
      </p>
    </div>
  );
}
