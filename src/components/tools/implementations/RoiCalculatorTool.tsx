"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { ToolShell } from "@/components/tools/ToolShell";

const ExportToolbar = dynamic(
  () => import("@/components/tools/ExportToolbar").then((m) => ({ default: m.ExportToolbar })),
  { ssr: false },
);
import { MetricCard } from "@/components/tools/ToolUI";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { Button } from "@/components/ui/Button";
import { getToolBySlug } from "@/lib/tools/registry";
import { calculateRoi } from "@/lib/tools/engines";
import { formatINR } from "@/lib/tools/format";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";

const SLUG = "roi-calculator";

export function RoiCalculatorTool() {
  const tool = getToolBySlug(SLUG)!;
  const [input, setInput] = useState({
    monthlyProcessCost: 500000,
    employeeCount: 25,
    hoursPerWeekManual: 8,
    errorRatePercent: 5,
    automationReductionPercent: 40,
  });
  const [result, setResult] = useState<ReturnType<typeof calculateRoi> | null>(null);

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  const run = useCallback(() => {
    const r = calculateRoi(input);
    setResult(r);
    trackToolComplete(SLUG, 100, `${r.roiPercent}% ROI`);
  }, [input]);

  if (result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8" aria-labelledby="roi-results-heading">
          <div className="flex flex-wrap justify-between gap-4">
            <h2 className="font-display text-2xl font-bold" id="roi-results-heading">
              ROI analysis
            </h2>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.summary} resultData={{ input, result }} />
          </div>
          <p className="text-muted">{result.summary}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard label="Annual benefit" value={formatINR(result.totalAnnualBenefit)} accent={tool.accent} />
            <MetricCard label="ROI" value={`${result.roiPercent}%`} sub="Year 1 vs project cost" />
            <MetricCard label="Payback" value={`${result.paybackMonths} mo`} />
            <MetricCard label="5-year value" value={formatINR(result.fiveYearValue)} />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <MetricCard label="Labor savings" value={formatINR(result.annualSavings)} />
            <MetricCard label="Productivity" value={`${result.productivityGainHours.toLocaleString()} hrs/yr`} />
            <MetricCard label="Error reduction" value={formatINR(result.errorReductionValue)} />
          </div>
          <MetricCard label="Indicative project investment" value={formatINR(result.estimatedProjectCost)} sub="For planning purposes" />
          <Button variant="secondary" onClick={() => setResult(null)}>Recalculate</Button>
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 space-y-5" aria-labelledby="roi-form-heading">
        <h2 id="roi-form-heading" className="sr-only">
          ROI calculator inputs
        </h2>
        <FormField label="Monthly process cost (₹)" htmlFor="cost">
          <input id="cost" type="number" className={inputClass} value={input.monthlyProcessCost} onChange={(e) => setInput({ ...input, monthlyProcessCost: Number(e.target.value) })} />
        </FormField>
        <FormField label="Employees in process" htmlFor="emp">
          <input id="emp" type="number" className={inputClass} value={input.employeeCount} onChange={(e) => setInput({ ...input, employeeCount: Number(e.target.value) })} />
        </FormField>
        <FormField label="Manual hours per employee / week" htmlFor="hrs">
          <input id="hrs" type="number" className={inputClass} value={input.hoursPerWeekManual} onChange={(e) => setInput({ ...input, hoursPerWeekManual: Number(e.target.value) })} />
        </FormField>
        <FormField label="Error rate (%)" htmlFor="err">
          <input id="err" type="number" className={inputClass} value={input.errorRatePercent} onChange={(e) => setInput({ ...input, errorRatePercent: Number(e.target.value) })} />
        </FormField>
        <FormField label="Automation reduction target (%)" htmlFor="auto">
          <input id="auto" type="range" min={10} max={80} value={input.automationReductionPercent} onChange={(e) => setInput({ ...input, automationReductionPercent: Number(e.target.value) })} className="w-full" />
          <p className="text-xs text-muted mt-1">{input.automationReductionPercent}%</p>
        </FormField>
        <Button onClick={run}>Calculate ROI</Button>
      </div>
    </ToolShell>
  );
}
