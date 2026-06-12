"use client";

import { MotionReveal, PageEntrance } from "@/components/motion/FadeIn";

export function CaseStudyHeroMotion({ children }: { children: React.ReactNode }) {
  return <PageEntrance>{children}</PageEntrance>;
}

export function CaseStudyResultMotion({
  children,
  delay,
  className,
  style,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <MotionReveal delay={delay} y={16} className={className} style={style}>
      {children}
    </MotionReveal>
  );
}
