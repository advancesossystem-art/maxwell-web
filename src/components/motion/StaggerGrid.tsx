"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { observeRevealChildren } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/components/motion/FadeIn";

export function StaggerGrid({
  children,
  className,
  stagger = 100,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    return observeRevealChildren(el, ":scope > *", { stagger });
  }, [reduce, stagger]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

export function StaggerGridItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = usePrefersReducedMotion();

  return (
    <div className={cn(!reduce && "mx-reveal-pending", className)}>
      {children}
    </div>
  );
}
