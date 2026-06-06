"use client";

import { motion } from "framer-motion";
import { companyJourney } from "@/lib/company-data";

export function CompanyTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-brand-600/20 lg:left-1/2 lg:-ml-px lg:block" />
      <div className="space-y-8">
        {companyJourney.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`relative flex flex-col gap-4 lg:flex-row lg:items-center ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="hidden lg:block lg:w-1/2" />
            <div
              className="absolute left-4 hidden h-4 w-4 rounded-full border-2 border-white bg-brand-600 lg:left-1/2 lg:-ml-2 lg:block"
            />
            <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
              <div className="rounded-xl border border-border bg-surface-elevated p-5 lg:ml-0 ml-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">{item.year}</span>
                <h3 className="mt-1 font-display font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function GrowthVisualization() {
  const data = [20, 35, 50, 75, 100, 130, 150];
  const years = ["2018", "2019", "2020", "2021", "2022", "2023", "2025"];

  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Projects Delivered Over Time</p>
      <div className="mt-6 flex items-end justify-between gap-2 h-40">
        {data.map((value, i) => (
          <motion.div
            key={years[i]}
            initial={{ height: 0 }}
            whileInView={{ height: `${(value / 150) * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div className="w-full rounded-t-md bg-gradient-to-t from-brand-600 to-brand-500 min-h-[4px]" style={{ height: "100%" }} />
            <span className="text-[10px] text-muted">{years[i]}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
