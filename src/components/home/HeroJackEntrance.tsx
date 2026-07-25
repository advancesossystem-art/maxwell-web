"use client";

import { useEffect } from "react";
import { mountEntrance } from "@/lib/animations/reveal";
import { prefersReducedMotion } from "@/lib/animations/core";

/** Staggered hero entrance (Jack FadeIn delays) via anime.js. */
export function HeroJackEntrance() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const entries = document.querySelectorAll<HTMLElement>("[data-hero-enter]");
    const cleanups: (() => void)[] = [];

    entries.forEach((el) => {
      const delay = parseFloat(el.dataset.heroDelay ?? "0");
      const y = parseFloat(el.dataset.heroY ?? "30");
      cleanups.push(mountEntrance(el, { delay, y, duration: 700 }));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
