"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { ToolShell } from "@/components/tools/ToolShell";

const ExportToolbar = dynamic(
  () => import("@/components/tools/ExportToolbar").then((m) => ({ default: m.ExportToolbar })),
  { ssr: false },
);
import { ToolRelatedLinks } from "@/components/tools/ToolRelatedLinks";
import { MetricCard } from "@/components/tools/ToolUI";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { Button } from "@/components/ui/Button";
import { getToolBySlug } from "@/lib/tools/registry";
import { calculateRoi } from "@/lib/tools/engines";
import { formatINR } from "@/lib/tools/format";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";

const SLUG = "crm-roi-calculator";

export function CrmRoiCalculatorTool() {
  const tool = getToolBySlug(SLUG)!;
  const [input, setInput] = useState({
    monthlyProcessCost: 400000,
    employeeCount: 15,
    hoursPerWeekManual: 10,
    errorRatePercent: 12,
    automationReductionPercent: 35,
  });
  const [result, setResult] = useState<ReturnType<typeof calculateRoi> | null>(null);

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  const run = useCallback(() => {
    const r = calculateRoi(input);
    setResult(r);
    trackToolComplete(SLUG, 100, `${r.roiPercent}% CRM ROI`);
  }, [input]);

  if (result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8">
          <div className="flex flex-wrap justify-between gap-4">
            <h2 className="font-display text-2xl font-bold">CRM ROI analysis</h2>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.summary} resultData={{ input, result }} />
          </div>
          <p className="text-muted">{result.summary}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard label="Annual CRM benefit" value={formatINR(result.totalAnnualBenefit)} accent={tool.accent} />
            <MetricCard label="CRM ROI (Year 1)" value={`${result.roiPercent}%`} />
            <MetricCard label="Payback period" value={`${result.paybackMonths} mo`} />
            <MetricCard label="5-year net value" value={formatINR(result.fiveYearValue)} />
          </div>
          <Button variant="secondary" onClick={() => setResult(null)}>Recalculate</Button>
          <ToolRelatedLinks slug={SLUG} />
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 space-y-5">
        <p className="text-sm text-muted">Model CRM ROI from faster follow-ups, pipeline visibility, and reduced lead leakage.</p>
        <FormField label="Monthly sales ops cost (₹)" htmlFor="cost">
          <input id="cost" type="number" className={inputClass} value={input.monthlyProcessCost} onChange={(e) => setInput({ ...input, monthlyProcessCost: Number(e.target.value) })} />
        </FormField>
        <FormField label="Sales team size" htmlFor="emp">
          <input id="emp" type="number" className={inputClass} value={input.employeeCount} onChange={(e) => setInput({ ...input, employeeCount: Number(e.target.value) })} />
        </FormField>
        <FormField label="Manual admin hours/person/week" htmlFor="hrs">
          <input id="hrs" type="number" className={inputClass} value={input.hoursPerWeekManual} onChange={(e) => setInput({ ...input, hoursPerWeekManual: Number(e.target.value) })} />
        </FormField>
        <FormField label="Lost-lead / error rate (%)" htmlFor="err">
          <input id="err" type="number" className={inputClass} value={input.errorRatePercent} onChange={(e) => setInput({ ...input, errorRatePercent: Number(e.target.value) })} />
        </FormField>
        <FormField label="Expected CRM efficiency gain (%)" htmlFor="auto">
          <input id="auto" type="number" className={inputClass} value={input.automationReductionPercent} onChange={(e) => setInput({ ...input, automationReductionPercent: Number(e.target.value) })} />
        </FormField>
        <Button onClick={run} size="lg">Calculate CRM ROI</Button>
      </div>
    </ToolShell>
  );
}
