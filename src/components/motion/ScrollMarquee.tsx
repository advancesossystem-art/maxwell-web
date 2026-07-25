"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/components/motion/FadeIn";

type ScrollMarqueeProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  speed?: number;
  baseOffset?: number;
};

/** Horizontal strip driven by page scroll (Jack marquee pattern). */
export function ScrollMarquee({
  children,
  className,
  direction = "right",
  speed = 0.3,
  baseOffset = 200,
}: ScrollMarqueeProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!reduce && window.matchMedia("(min-width: 768px)").matches);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let raf = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * speed;
      const x = direction === "right" ? offset - baseOffset : -(offset - baseOffset);
      track.style.transform = `translate3d(${x}px, 0, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled, direction, speed, baseOffset]);

  return (
    <div ref={sectionRef} className={cn("overflow-hidden", className)}>
      <div ref={trackRef} className="flex w-max gap-3 will-change-transform">
        {children}
      </div>
    </div>
  );
}
