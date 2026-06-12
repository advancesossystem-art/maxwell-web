"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { EASE_OUT_EXPO, scaledMs } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/components/motion/FadeIn";

export function CrossFade({
  children,
  contentKey,
  className,
}: {
  children: React.ReactNode;
  contentKey: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const prevKey = useRef(contentKey);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    if (prevKey.current !== contentKey) {
      const anim = animate(el, {
        opacity: [0, 1],
        y: [12, 0],
        duration: scaledMs(350),
        ease: EASE_OUT_EXPO,
      });
      prevKey.current = contentKey;
      return () => {
        anim.pause();
      };
    }

    el.style.opacity = "0";
    el.style.transform = "translate3d(0, 12px, 0)";
    const anim = animate(el, {
      opacity: [0, 1],
      y: [12, 0],
      duration: scaledMs(350),
      ease: EASE_OUT_EXPO,
    });
    return () => {
      anim.pause();
    };
  }, [contentKey, reduce]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
