"use client";

import { MotionReveal } from "@/components/motion/FadeIn";

export function ServiceTechStackMotion({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <MotionReveal
      delay={delay}
      y={0}
      className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 font-display text-sm font-medium text-white/80 backdrop-blur-sm transition-[transform,border-color,color] duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:border-brand-500/40 hover:text-white"
    >
      {children}
    </MotionReveal>
  );
}
