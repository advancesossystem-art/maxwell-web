"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  DURATION_MS,
  observeReveal,
  observeRevealChildren,
  mountEntrance,
  prefersReducedMotion,
  scaled,
} from "@/lib/animations";

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
  delay = 0,
  duration = DURATION_MS.reveal / 1000,
  y = 40,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const transformEnabled = useMotionTransformEnabled();
  const offsetY = reduce || !transformEnabled ? 0 : y;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    return observeReveal(el, {
      delay: delay * 1000,
      duration: duration * 1000,
      y: offsetY,
    });
  }, [reduce, delay, duration, offsetY]);

  return (
    <div
      ref={ref}
      className={cn("min-w-0", !reduce && offsetY > 0 && "mx-reveal-pending", className)}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const transformEnabled = useMotionTransformEnabled();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    return observeRevealChildren(el, ":scope > *", {
      stagger: stagger * 1000,
      y: transformEnabled ? 40 : 0,
    });
  }, [reduce, stagger, transformEnabled]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = usePrefersReducedMotion();

  return (
    <div className={cn("min-w-0", !reduce && "mx-reveal-pending", className)}>
      {children}
    </div>
  );
}

/** Drop-in for grid cards — viewport reveal with optional hover class */
export function MotionReveal({
  children,
  className,
  style,
  delay = 0,
  duration = DURATION_MS.reveal / 1000,
  y = 20,
  hoverClassName,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  y?: number;
  hoverClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const transformEnabled = useMotionTransformEnabled();
  const offsetY = reduce || !transformEnabled ? 0 : y;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    return observeReveal(el, {
      delay: delay * 1000,
      duration: duration * 1000,
      y: offsetY,
    });
  }, [reduce, delay, duration, offsetY]);

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "min-w-0",
        !reduce && offsetY > 0 && "mx-reveal-pending",
        hoverClassName,
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Page-load entrance (no viewport observer) */
export function PageEntrance({
  children,
  className,
  delay = 0,
  duration = DURATION_MS.base / 1000,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    return mountEntrance(el, {
      delay: delay * 1000,
      duration: duration * 1000,
      y: scaled(y),
    });
  }, [reduce, delay, duration, y]);

  return (
    <div
      ref={ref}
      className={cn("min-w-0", !reduce && "mx-reveal-pending", className)}
    >
      {children}
    </div>
  );
}
