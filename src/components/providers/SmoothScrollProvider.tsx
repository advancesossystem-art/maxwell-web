"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Lenis smooth scroll on marketing routes — starts after first intentional scroll */
function isMarketingRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  if (pathname === "/") return true;
  const prefixes = [
    "/services",
    "/industries",
    "/about",
    "/contact",
    "/process",
    "/work",
    "/case-studies",
    "/why-maxwell",
    "/solutions",
    "/book-consultation",
    "/discovery-call",
  ];
  return prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const enabled = isMarketingRoute(pathname);
  const teardownRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    teardownRef.current?.();
    teardownRef.current = null;

    if (!enabled) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || prefersReducedMotion) {
      return;
    }

    let cancelled = false;

    async function init() {
      const [{ default: Lenis }] = await Promise.all([import("lenis")]);

      if (cancelled) return;

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      let rafId = 0;
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      teardownRef.current = () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }

    const start = () => {
      void init();
      cleanup();
    };

    const events = ["wheel", "touchstart", "pointerdown"] as const;
    const opts: AddEventListenerOptions = { once: true, passive: true };

    function cleanup() {
      events.forEach((event) => window.removeEventListener(event, start, opts));
    }

    events.forEach((event) => window.addEventListener(event, start, opts));

    return () => {
      cancelled = true;
      cleanup();
      teardownRef.current?.();
    };
  }, [enabled]);

  return <>{children}</>;
}
