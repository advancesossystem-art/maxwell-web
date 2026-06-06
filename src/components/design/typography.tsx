import { cn } from "@/lib/utils";
import { typography } from "@/lib/typography";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn(typography.eyebrow, className)}>{children}</p>;
}

export function H1({
  children,
  className,
  as: Tag = "h1",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return <Tag className={cn(typography.h1, "mt-4 max-w-4xl text-balance", className)}>{children}</Tag>;
}

export function H2({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  return <Tag className={cn(typography.h2, "mt-3 max-w-3xl text-balance", className)}>{children}</Tag>;
}

export function H3({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn(typography.h3, className)}>{children}</h3>;
}

export function Lead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn(typography.lead, "mt-6 max-w-2xl", className)}>{children}</p>;
}

export function Text({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn(typography.body, className)}>{children}</p>;
}

export function Caption({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn(typography.caption, className)}>{children}</p>;
}

export function AccentGradient({ children }: { children: React.ReactNode }) {
  return <span className="gradient-text">{children}</span>;
}
