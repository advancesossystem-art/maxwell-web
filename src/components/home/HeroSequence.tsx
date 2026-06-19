"use client";

import { useEffect, useRef } from "react";
import { runHeroSequence } from "@/lib/animations";

/** Defer hero motion until after the LCP measurement window. */
const HERO_ANIMATION_DEFER_MS = 2500;

export function HeroSequence({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    let teardown: (() => void) | undefined;
    const timer = window.setTimeout(() => {
      teardown = runHeroSequence(root);
    }, HERO_ANIMATION_DEFER_MS);

    return () => {
      window.clearTimeout(timer);
      teardown?.();
    };
  }, []);

  return (
    <div ref={ref} className={className} data-hero="visual">
      {children}
    </div>
  );
}
