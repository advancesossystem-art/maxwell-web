"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolWizard } from "@/components/tools/ToolWizard";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { ToolRelatedLinks } from "@/components/tools/ToolRelatedLinks";
import { MetricCard, PhaseTimeline } from "@/components/tools/ToolUI";
import { FormField, inputClass, OptionCard } from "@/components/leads/LeadFormFields";
import { getToolBySlug } from "@/lib/tools/registry";
import { estimateProjectTimeline } from "@/lib/tools/engines";
import { leadProjectTypes, leadIndustries, leadTimelines } from "@/lib/leads-data";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";

const SLUG = "project-timeline-estimator";

export function ProjectTimelineEstimatorTool() {
  const tool = getToolBySlug(SLUG)!;
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState({
    projectType: "ERP" as (typeof leadProjectTypes)[number],
    industry: "Manufacturing" as (typeof leadIndustries)[number],
    scopeSize: "standard" as "mvp" | "standard" | "enterprise",
    moduleCount: 6,
    integrationCount: 2,
    hasCompliance: false,
    urgency: "3 Months" as (typeof leadTimelines)[number],
  });

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  const result = showResults ? estimateProjectTimeline(input) : null;

  if (showResults && result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold">Estimated timeline</h2>
              <p className="mt-2 text-muted">{result.summary}</p>
            </div>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.summary} resultData={{ input, result }} />
          </div>
          <MetricCard label="Total duration" value={result.totalDuration} accent={tool.accent} sub={`${result.totalWeeksMin}–${result.totalWeeksMax} weeks`} />
          <PhaseTimeline
            phases={result.phases.map((p) => ({
              name: p.name,
              duration: p.duration,
              milestones: [`${p.weeksMin}–${p.weeksMax} weeks estimated`],
            }))}
          />
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Critical path items</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {result.criticalPath.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </section>
          {result.riskFactors.length > 0 && (
            <section className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
              <h3 className="font-display font-semibold text-amber-200">Risk factors</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {result.riskFactors.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </section>
          )}
          <ToolRelatedLinks slug={SLUG} />
          <button type="button" onClick={() => setShowResults(false)} className="text-sm text-brand-600 hover:underline">
            ← Edit inputs
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
        stepTitle={step === 1 ? "Project overview" : "Scope & constraints"}
        onBack={() => setStep(1)}
        onNext={() => setStep(2)}
        isLastStep={step === 2}
        onFinish={() => {
          const r = estimateProjectTimeline(input);
          trackToolComplete(SLUG, r.totalWeeksMax, r.totalDuration);
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
            <FormField label="Industry" htmlFor="ind">
              <select id="ind" className={inputClass} value={input.industry} onChange={(e) => setInput({ ...input, industry: e.target.value as typeof input.industry })}>
                {leadIndustries.map((i) => (
                  <option key={i}>{i}</option>
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
          </div>
        ) : (
          <div className="space-y-4">
            <FormField label="Number of modules / major features" htmlFor="mod">
              <input id="mod" type="number" min={1} max={20} className={inputClass} value={input.moduleCount} onChange={(e) => setInput({ ...input, moduleCount: Number(e.target.value) })} />
            </FormField>
            <FormField label="Third-party integrations" htmlFor="int">
              <input id="int" type="number" min={0} max={10} className={inputClass} value={input.integrationCount} onChange={(e) => setInput({ ...input, integrationCount: Number(e.target.value) })} />
            </FormField>
            <FormField label="Target delivery" htmlFor="urg">
              <select id="urg" className={inputClass} value={input.urgency} onChange={(e) => setInput({ ...input, urgency: e.target.value as typeof input.urgency })}>
                {leadTimelines.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </FormField>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={input.hasCompliance} onChange={(e) => setInput({ ...input, hasCompliance: e.target.checked })} />
              Requires compliance / security review (healthcare, finance, ISO)
            </label>
          </div>
        )}
      </ToolWizard>
    </ToolShell>
  );
}
