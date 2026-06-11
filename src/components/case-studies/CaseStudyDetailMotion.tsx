"use client";

import { motion } from "framer-motion";

export function CaseStudyHeroMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      {children}
    </motion.div>
  );
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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
