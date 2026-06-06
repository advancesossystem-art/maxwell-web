import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "v6-btn v6-btn-primary",
  secondary: "v6-btn v6-btn-secondary",
  ghost: "text-[var(--v6-text-secondary)] hover:bg-[#f1f5f9] hover:text-[var(--v6-text)]",
  outline: "v6-btn v6-btn-secondary",
  glass: "v6-btn v6-btn-secondary",
  dark: "bg-[#0f172a] text-white border border-[#0f172a] hover:bg-[#1e293b]",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm rounded-full",
  md: "h-11 px-6 text-sm rounded-full",
  lg: "h-12 px-8 text-base rounded-full",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-display font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    variant === "primary" || variant === "secondary" ? "" : sizes[size],
    variant === "primary" || variant === "secondary" ? (size === "lg" ? "v6-btn-lg" : "") : sizes[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
