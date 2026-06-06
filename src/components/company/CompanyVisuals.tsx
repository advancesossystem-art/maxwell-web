"use client";

import { motion } from "framer-motion";
import { technologyExpertise, globalDeliveryModel, orgStructure } from "@/lib/company-data";

export function TechEcosystemDiagram() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {technologyExpertise.map((cat, i) => (
        <motion.div
          key={cat.category}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="rounded-xl border border-border bg-surface-elevated p-5"
        >
          <h3 className="font-display font-semibold text-brand-700">{cat.category}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span key={item} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function GlobalDeliveryMap() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-[#030712] p-8">
      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {globalDeliveryModel.regions.map((region, i) => (
          <motion.div
            key={region.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div className="flex h-3 w-3 rounded-full bg-brand-500 shadow-lg shadow-brand-500/50" />
            <h3 className="mt-4 font-display font-semibold text-white">{region.name}</h3>
            <p className="mt-1 text-sm text-brand-400">{region.role}</p>
            <p className="mt-2 text-xs text-white/50">{region.coverage}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function OrgStructureDiagram() {
  return (
    <div className="space-y-4">
      {orgStructure.map((level, i) => (
        <motion.div
          key={level.level}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <div className="w-32 shrink-0 font-display text-sm font-semibold text-brand-700">{level.level}</div>
          <div className="flex flex-wrap gap-2">
            {level.teams.map((team) => (
              <span key={team} className="rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-sm">
                {team}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
