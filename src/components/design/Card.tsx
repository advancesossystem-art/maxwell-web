import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  padding?: "md" | "lg";
  interactive?: boolean;
  /** @deprecated use interactive */
  hover?: boolean;
  onClick?: () => void;
};

const paddingClass = {
  md: "p-6",
  lg: "p-8",
} as const;

export function Card({
  children,
  className,
  href,
  padding = "md",
  interactive: interactiveProp = true,
  hover,
  onClick,
}: CardProps) {
  const interactive = hover !== undefined ? hover : interactiveProp;
  const classes = cn(
    "mx-hub-card block",
    paddingClass[padding],
    interactive && "mx-surface-interactive group",
    !interactive && "mx-surface",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
