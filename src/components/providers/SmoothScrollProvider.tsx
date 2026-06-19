"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Lenis smooth scroll on marketing routes — performance-conscious */
const LENIS_INIT_DELAY_MS = 2000;
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
    let delayTimer = 0;
    let idleId: number | undefined;

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

    delayTimer = window.setTimeout(() => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => {
          void init();
        }, { timeout: 1500 });
        return;
      }
      void init();
    }, LENIS_INIT_DELAY_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(delayTimer);
      if (idleId !== undefined) {
        window.cancelIdleCallback(idleId);
      }
      teardownRef.current?.();
    };
  }, [enabled]);

  return <>{children}</>;
}
