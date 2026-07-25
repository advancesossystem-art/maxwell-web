"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Motion helpers kept for API compatibility.
 * Reveal/entrance JS (anime.js) is intentionally a no-op so LCP text stays
 * painted and main-thread work stays low — final layout/visuals unchanged.
 */

export function useMotionTransformEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (min-width: 1024px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return enabled;
}

export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduce;
}

export function FadeIn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  return <div className={cn("min-w-0", className)}>{children}</div>;
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("min-w-0", className)}>{children}</div>;
}

export function MotionReveal({
  children,
  className,
  style,
  hoverClassName,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  y?: number;
  hoverClassName?: string;
}) {
  return (
    <div style={style} className={cn("min-w-0", hoverClassName, className)}>
      {children}
    </div>
  );
}

export function PageEntrance({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  return <div className={cn("min-w-0", className)}>{children}</div>;
}
