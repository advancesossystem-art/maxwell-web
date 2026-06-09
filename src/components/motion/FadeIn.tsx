"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DURATION, EASE_OUT, VIEWPORT, staggerItem } from "@/lib/motion";
import type { TargetAndTransition } from "framer-motion";

export function useMotionTransformEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (min-width: 1024px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return enabled;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = DURATION.base,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const transformEnabled = useMotionTransformEnabled();
  const offsetY = reduce || !transformEnabled ? 0 : y;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("min-w-0", className)}
      initial={{ opacity: 0, y: offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const transformEnabled = useMotionTransformEnabled();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("min-w-0", className)}
      variants={
        transformEnabled
          ? staggerItem
          : {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: DURATION.base, ease: EASE_OUT },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

/** Drop-in for raw motion.div grid cards — mobile-safe (opacity-only on touch). */
export function MotionReveal({
  children,
  className,
  delay = 0,
  duration = DURATION.base,
  y = 20,
  whileHover,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  whileHover?: TargetAndTransition;
}) {
  const reduce = useReducedMotion();
  const transformEnabled = useMotionTransformEnabled();
  const offsetY = reduce || !transformEnabled ? 0 : y;

  if (reduce) {
    return <div className={cn("min-w-0", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("min-w-0", className)}
      initial={{ opacity: 0, y: offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE_OUT }}
      whileHover={transformEnabled ? whileHover : undefined}
    >
      {children}
    </motion.div>
  );
}
