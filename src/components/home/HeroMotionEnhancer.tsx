"use client";

import { useEffect } from "react";

/** Enhances hero visual after LCP — no wrapper, zero layout impact. */
export function HeroMotionEnhancer() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-hero='visual']");
    if (!root) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || prefersReducedMotion) return;

    let teardown: (() => void) | undefined;
    let cancelled = false;

    const timer = window.setTimeout(() => {
      void import("@/lib/animations/hero").then(({ runHeroSequence }) => {
        if (cancelled) return;
        teardown = runHeroSequence(root);
      });
    }, 4000);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      teardown?.();
    };
  }, []);

  return null;
}
