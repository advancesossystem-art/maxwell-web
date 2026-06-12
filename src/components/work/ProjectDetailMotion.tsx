"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { EASE_OUT_EXPO, scaledMs, prefersReducedMotion } from "@/lib/animations";
import { MotionReveal, PageEntrance } from "@/components/motion/FadeIn";

export function ProjectHeroTextMotion({ children }: { children: React.ReactNode }) {
  return <PageEntrance>{children}</PageEntrance>;
}

export function ProjectHeroVisualMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    el.style.opacity = "0";
    el.style.transform = "scale(0.95)";
    const anim = animate(el, {
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: scaledMs(800),
      delay: scaledMs(150),
      ease: EASE_OUT_EXPO,
    });
    return () => {
      anim.pause();
    };
  }, []);

  return (
    <div ref={ref} className={!prefersReducedMotion() ? "mx-reveal-pending" : undefined}>
      {children}
    </div>
  );
}

export function ProjectGalleryItemMotion({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return <MotionReveal delay={delay}>{children}</MotionReveal>;
}

export function ProjectResultMotion({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <MotionReveal delay={delay} className={className}>
      {children}
    </MotionReveal>
  );
}
