"use client";

import { motion } from "framer-motion";

export function SolutionHeroMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.div>
  );
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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
