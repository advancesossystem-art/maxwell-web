"use client";

import { cn } from "@/lib/utils";

export function StaggerGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return <div className={cn(className)}>{children}</div>;
}

export function StaggerGridItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}
