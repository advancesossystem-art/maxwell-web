"use client";

import { MotionReveal, PageEntrance } from "@/components/motion/FadeIn";

export function SolutionHeroMotion({ children }: { children: React.ReactNode }) {
  return <PageEntrance>{children}</PageEntrance>;
}

export function SolutionChallengeMotion({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <MotionReveal delay={delay} y={16} className={className}>
      {children}
    </MotionReveal>
  );
}
