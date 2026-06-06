"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sdlcPhases } from "@/lib/company-data";
import { CheckIcon } from "@/components/ui/Icons";

export function ProcessFlowInteractive() {
  const [active, setActive] = useState(0);
  const phase = sdlcPhases[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {sdlcPhases.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active === i
                ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
                : "border border-border bg-surface text-muted hover:border-brand-600/30"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={phase.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid gap-8 lg:grid-cols-2"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                {String(active + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">{phase.title}</h3>
                <p className="text-sm text-brand-600">{phase.duration}</p>
              </div>
            </div>
            <p className="mt-4 text-muted leading-relaxed">{phase.description}</p>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-600">Deliverables</h4>
              <ul className="mt-3 space-y-2">
                {phase.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-muted">
                    <CheckIcon className="mt-0.5 shrink-0 text-brand-600" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-600">Client Involvement</h4>
              <p className="mt-2 text-sm text-muted">{phase.clientInvolvement}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-600">Expected Outcomes</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {phase.outcomes.map((o) => (
                  <span key={o} className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-800">{o}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
