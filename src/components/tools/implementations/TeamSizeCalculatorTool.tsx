"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolWizard } from "@/components/tools/ToolWizard";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { ToolRelatedLinks } from "@/components/tools/ToolRelatedLinks";
import { MetricCard } from "@/components/tools/ToolUI";
import { FormField, inputClass, OptionCard } from "@/components/leads/LeadFormFields";
import { getToolBySlug } from "@/lib/tools/registry";
import { calculateTeamSize } from "@/lib/tools/engines";
import { leadProjectTypes } from "@/lib/leads-data";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";

const SLUG = "team-size-calculator";

export function TeamSizeCalculatorTool() {
  const tool = getToolBySlug(SLUG)!;
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState({
    projectType: "ERP" as (typeof leadProjectTypes)[number],
    scopeSize: "standard" as "mvp" | "standard" | "enterprise",
    moduleCount: 6,
    timelineWeeks: 16,
    needsDesign: true,
    needsMobile: false,
  });

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  const result = showResults ? calculateTeamSize(input) : null;

  if (showResults && result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold">Recommended team: {result.totalFte} FTE</h2>
              <p className="mt-2 text-muted">{result.summary}</p>
            </div>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.summary} resultData={{ input, result }} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <MetricCard label="Total team size" value={`${result.totalFte} FTE`} accent={tool.accent} />
            <MetricCard label="Indicative monthly burn" value={result.costIndicator} sub="Planning estimate only" />
          </div>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Role breakdown</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted">
                    <th className="pb-2 pr-4">Role</th>
                    <th className="pb-2 pr-4">Count</th>
                    <th className="pb-2 pr-4">Allocation</th>
                    <th className="pb-2">Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                  {result.roles.map((r) => (
                    <tr key={r.role} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">{r.role}</td>
                      <td className="py-3 pr-4">{r.count}</td>
                      <td className="py-3 pr-4 text-muted">{r.allocation}</td>
                      <td className="py-3 text-muted">{r.responsibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className="rounded-2xl border border-brand-600/20 bg-brand-600/5 p-6">
            <h3 className="font-display font-semibold">Maxwell recommendation</h3>
            <p className="mt-2 text-sm text-muted">{result.maxwellRecommendation}</p>
            <p className="mt-2 text-sm font-medium">{result.costIndicator}</p>
          </section>
          <ToolRelatedLinks slug={SLUG} />
          <button type="button" onClick={() => setShowResults(false)} className="text-sm text-brand-600 hover:underline">
            ← Recalculate
          </button>
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <ToolWizard
        step={step}
        totalSteps={2}
        stepTitle={step === 1 ? "Project type & scope" : "Timeline & capabilities"}
        onBack={() => setStep(1)}
        onNext={() => setStep(2)}
        isLastStep={step === 2}
        onFinish={() => {
          const r = calculateTeamSize(input);
          trackToolComplete(SLUG, r.totalFte, `${r.totalFte} FTE`);
          setShowResults(true);
        }}
      >
        {step === 1 ? (
          <div className="space-y-4">
            <FormField label="Project type" htmlFor="ptype">
              <select id="ptype" className={inputClass} value={input.projectType} onChange={(e) => setInput({ ...input, projectType: e.target.value as typeof input.projectType })}>
                {leadProjectTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </FormField>
            <div>
              <p className="mb-2 text-sm font-medium">Scope size</p>
              <div className="grid gap-2 sm:grid-cols-3">
                {(["mvp", "standard", "enterprise"] as const).map((s) => (
                  <OptionCard
                    key={s}
                    title={s === "mvp" ? "MVP" : s.charAt(0).toUpperCase() + s.slice(1)}
                    selected={input.scopeSize === s}
                    onClick={() => setInput({ ...input, scopeSize: s })}
                  />
                ))}
              </div>
            </div>
            <FormField label="Modules / major features" htmlFor="mod">
              <input id="mod" type="number" min={1} className={inputClass} value={input.moduleCount} onChange={(e) => setInput({ ...input, moduleCount: Number(e.target.value) })} />
            </FormField>
          </div>
        ) : (
          <div className="space-y-4">
            <FormField label="Target timeline (weeks)" htmlFor="weeks">
              <input id="weeks" type="number" min={4} max={52} className={inputClass} value={input.timelineWeeks} onChange={(e) => setInput({ ...input, timelineWeeks: Number(e.target.value) })} />
            </FormField>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={input.needsDesign} onChange={(e) => setInput({ ...input, needsDesign: e.target.checked })} />
              Include UI/UX design phase
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={input.needsMobile} onChange={(e) => setInput({ ...input, needsMobile: e.target.checked })} />
              Native or cross-platform mobile app
            </label>
          </div>
        )}
      </ToolWizard>
    </ToolShell>
  );
}
