"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMotionTransformEnabled } from "@/components/motion/FadeIn";

export function HeroMotionColumn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const transformEnabled = useMotionTransformEnabled();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: transformEnabled ? 24 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: delay > 0 ? 0.7 : 0.6, delay, ease: [0.16, 1, 0.3, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroMotionVisual({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
