"use client";

import { useEffect, useRef, useMemo } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/components/motion/FadeIn";

type ScrollRevealTextProps = {
  text: string;
  className?: string;
  minOpacity?: number;
};

/** Character opacity tied to scroll progress (Jack About pattern). */
export function ScrollRevealText({ text, className, minOpacity = 0.2 }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = usePrefersReducedMotion();
  const chars = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const spans = el.querySelectorAll<HTMLElement>("[data-char]");
    if (!spans.length) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.8;
      const end = vh * 0.2;
      const total = rect.height + (start - end);
      const traveled = start - rect.top;
      const progress = Math.min(1, Math.max(0, traveled / total));

      spans.forEach((span, i) => {
        const charStart = i / spans.length;
        const charEnd = (i + 1) / spans.length;
        const local = (progress - charStart) / (charEnd - charStart);
        const t = Math.min(1, Math.max(0, local));
        span.style.opacity = String(minOpacity + t * (1 - minOpacity));
      });
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
  }, [reduce, minOpacity, text]);

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p ref={ref} className={cn(className, "mx-scroll-reveal-text")} aria-label={text}>
      {chars.map((char, i) => (
        <span key={`${i}-${char}`} className="relative inline-block">
          <span className="invisible">{char === " " ? "\u00a0" : char}</span>
          <span data-char className="absolute left-0 top-0" style={{ opacity: minOpacity }} aria-hidden>
            {char === " " ? "\u00a0" : char}
          </span>
        </span>
      ))}
    </p>
  );
}
