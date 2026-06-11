"use client";

import { motion } from "framer-motion";

export function ServiceTechStackMotion({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 font-display text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-brand-500/40 hover:text-white"
    >
      {children}
    </motion.span>
  );
}
