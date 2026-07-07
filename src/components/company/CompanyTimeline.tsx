"use client";

import { companyJourney } from "@/lib/company-data";
import { MotionReveal } from "@/components/motion/FadeIn";

export function CompanyTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-brand-600/20 lg:left-1/2 lg:-ml-px lg:block" />
      <div className="space-y-8">
        {companyJourney.map((item, i) => (
          <MotionReveal
            key={item.year}
            delay={i * 0.08}
            duration={0.5}
            y={24}
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
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}

export function GrowthVisualization() {
  const chartData = [
    { year: "2018", value: 20 },
    { year: "2019", value: 35 },
    { year: "2020", value: 50 },
    { year: "2021", value: 75 },
    { year: "2022", value: 100 },
    { year: "2023", value: 130 },
    { year: "2024", value: 140 },
    { year: "2025", value: 150 },
  ] as const;
  const maxValue = Math.max(...chartData.map((d) => d.value));
  /** h-40 = 160px; reserve space for year labels below bars */
  const barAreaPx = 128;

  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-6" data-chart-fade>
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Projects Delivered Over Time</p>
      <div
        className="mt-6 flex h-40 items-end justify-between gap-2"
        role="img"
        aria-label="Cumulative projects delivered from 2018 to 2025"
      >
        {chartData.map(({ year, value }) => (
          <div key={year} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2">
            <div
              className="w-full min-w-[6px] rounded-t-md bg-gradient-to-t from-brand-600 to-brand-500"
              style={{ height: `${Math.max(6, (value / maxValue) * barAreaPx)}px` }}
            />
            <span className="text-[10px] text-muted">{year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
