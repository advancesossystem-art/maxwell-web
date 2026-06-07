"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolFormPanel, ToolField, ToolRangeField, ToolResultsLayout } from "@/components/tools/ToolLayout";
import { MetricCard, MetricGrid } from "@/components/tools/ToolUI";
import { ToolRelatedLinks } from "@/components/tools/ToolRelatedLinks";
import { inputClass } from "@/components/leads/LeadFormFields";
import { Button } from "@/components/ui/Button";
import { getToolBySlug } from "@/lib/tools/registry";
import { calculateRoi, type RoiInput } from "@/lib/tools/engines";
import { formatINR } from "@/lib/tools/format";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";

const ExportToolbar = dynamic(
  () => import("@/components/tools/ExportToolbar").then((m) => ({ default: m.ExportToolbar })),
  { ssr: false },
);

type RoiCalculatorConfig = {
  slug: string;
  formTitle: string;
  formDescription: string;
  resultsTitle: string;
  benefitLabel: string;
  roiLabel: string;
  investmentLabel?: string;
  investmentSub?: string;
  fields: {
    cost: { label: string; hint: string };
    employees: { label: string; hint: string };
    hours: { label: string; hint: string };
    errors: { label: string; hint: string };
    automation: { label: string; hint: string };
  };
  defaults: RoiInput;
  submitLabel: string;
};

export function RoiCalculatorView({ config }: { config: RoiCalculatorConfig }) {
  const tool = getToolBySlug(config.slug)!;
  const [input, setInput] = useState<RoiInput>(config.defaults);
  const [result, setResult] = useState<ReturnType<typeof calculateRoi> | null>(null);

  const preview = useMemo(() => calculateRoi(input), [input]);

  useEffect(() => {
    trackToolStart(config.slug);
  }, [config.slug]);

  const run = useCallback(() => {
    const r = calculateRoi(input);
    setResult(r);
    trackToolComplete(config.slug, 100, `${r.roiPercent}% ROI`);
  }, [config.slug, input]);

  if (result) {
    return (
      <ToolShell tool={tool}>
        <ToolResultsLayout
          title={config.resultsTitle}
          summary={result.summary}
          toolbar={
            <ExportToolbar
              toolSlug={config.slug}
              toolName={tool.name}
              resultSummary={result.summary}
              resultData={{ input, result }}
            />
          }
          footer={
            <>
              <Button variant="secondary" onClick={() => setResult(null)}>
                ← Adjust inputs
              </Button>
              <ToolRelatedLinks slug={config.slug} />
            </>
          }
        >
          <MetricGrid columns={4}>
            <MetricCard label={config.benefitLabel} value={formatINR(result.totalAnnualBenefit)} accent={tool.accent} />
            <MetricCard label={config.roiLabel} value={`${result.roiPercent}%`} sub="Year 1 vs project cost" />
            <MetricCard label="Payback period" value={`${result.paybackMonths} mo`} />
            <MetricCard label="5-year net value" value={formatINR(result.fiveYearValue)} />
          </MetricGrid>
          <MetricGrid columns={3}>
            <MetricCard label="Labor & automation savings" value={formatINR(result.annualSavings)} accent={tool.accent} />
            <MetricCard label="Productivity recovered" value={`${result.productivityGainHours.toLocaleString()} hrs/yr`} />
            <MetricCard label="Error reduction value" value={formatINR(result.errorReductionValue)} />
          </MetricGrid>
          {config.investmentLabel ? (
            <MetricCard
              label={config.investmentLabel}
              value={formatINR(result.estimatedProjectCost)}
              sub={config.investmentSub}
              accent={tool.accent}
            />
          ) : null}
        </ToolResultsLayout>
      </ToolShell>
    );
  }

  return (
    <ToolShell
      tool={tool}
      previewLabel="Estimated annual benefit"
      previewValue={formatINR(preview.totalAnnualBenefit)}
    >
      <ToolFormPanel
        title={config.formTitle}
        description={config.formDescription}
        footer={
          <>
            <p className="tool-panel__hint">Estimates are indicative — book a consultation for a scoped proposal.</p>
            <Button onClick={run} size="lg">
              {config.submitLabel}
            </Button>
          </>
        }
      >
        <div className="tool-form-grid tool-form-grid--2">
          <ToolField label={config.fields.cost.label} htmlFor="cost" hint={config.fields.cost.hint}>
            <input
              id="cost"
              type="number"
              className={inputClass}
              value={input.monthlyProcessCost}
              onChange={(e) => setInput({ ...input, monthlyProcessCost: Number(e.target.value) })}
            />
          </ToolField>
          <ToolField label={config.fields.employees.label} htmlFor="emp" hint={config.fields.employees.hint}>
            <input
              id="emp"
              type="number"
              className={inputClass}
              value={input.employeeCount}
              onChange={(e) => setInput({ ...input, employeeCount: Number(e.target.value) })}
            />
          </ToolField>
          <ToolField label={config.fields.hours.label} htmlFor="hrs" hint={config.fields.hours.hint}>
            <input
              id="hrs"
              type="number"
              className={inputClass}
              value={input.hoursPerWeekManual}
              onChange={(e) => setInput({ ...input, hoursPerWeekManual: Number(e.target.value) })}
            />
          </ToolField>
          <ToolField label={config.fields.errors.label} htmlFor="err" hint={config.fields.errors.hint}>
            <input
              id="err"
              type="number"
              className={inputClass}
              value={input.errorRatePercent}
              onChange={(e) => setInput({ ...input, errorRatePercent: Number(e.target.value) })}
            />
          </ToolField>
        </div>
        <div className="mt-6">
          <ToolRangeField
            label={config.fields.automation.label}
            htmlFor="auto"
            hint={config.fields.automation.hint}
            min={10}
            max={80}
            value={input.automationReductionPercent}
            onChange={(value) => setInput({ ...input, automationReductionPercent: value })}
          />
        </div>
      </ToolFormPanel>
    </ToolShell>
  );
}
