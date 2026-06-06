"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Lenis smooth scroll on marketing routes — performance-conscious */
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

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(() => init(), { timeout: 1500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
        teardownRef.current?.();
      };
    }

    const timeoutId = window.setTimeout(init, 1);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      teardownRef.current?.();
    };
  }, [enabled]);

  return <>{children}</>;
}
