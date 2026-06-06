"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolWizard } from "@/components/tools/ToolWizard";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { MetricCard, PhaseTimeline } from "@/components/tools/ToolUI";
import { FormField, inputClass, OptionCard } from "@/components/leads/LeadFormFields";
import { getToolBySlug } from "@/lib/tools/registry";
import { generateProjectRoadmap } from "@/lib/tools/engines";
import { leadProjectTypes, leadIndustries, leadBudgets, leadTimelines, companySizes } from "@/lib/leads-data";
import { trackToolStart, trackToolStep, trackToolComplete } from "@/lib/tools/analytics";

const TOOL_SLUG = "project-roadmap";

export function ProjectRoadmapTool() {
  const tool = getToolBySlug(TOOL_SLUG)!;
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState({
    projectType: "Custom Software",
    industry: "Manufacturing",
    budget: "₹5L–₹10L",
    timeline: "3 Months",
    teamSize: "11–50 employees",
  });

  const result = showResults ? generateProjectRoadmap(input) : null;

  useEffect(() => {
    trackToolStart(TOOL_SLUG);
  }, []);

  if (showResults && result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold">Your project roadmap</h2>
              <p className="mt-2 text-muted">{result.summary}</p>
            </div>
            <ExportToolbar
              toolSlug={TOOL_SLUG}
              toolName={tool.name}
              resultSummary={result.summary}
              resultData={{ input, result }}
            />
          </div>
          <MetricCard label="Estimated timeline" value={result.totalWeeks} accent={tool.accent} />
          <PhaseTimeline phases={result.phases} />
          <div className="rounded-2xl border border-border bg-brand-50/50 p-6">
            <h3 className="font-display font-semibold">Recommendations</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {result.recommendations.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
          <button type="button" onClick={() => setShowResults(false)} className="text-sm font-medium text-brand-600 hover:underline">
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
        stepTitle={step === 1 ? "Project overview" : "Constraints"}
        onBack={() => setStep(1)}
        onNext={() => {
          trackToolStep(TOOL_SLUG, step, step === 1 ? "overview" : "constraints");
          setStep(2);
        }}
        isLastStep={step === 2}
        onFinish={() => {
          trackToolComplete(TOOL_SLUG, 100, input.projectType);
          setShowResults(true);
        }}
        canNext={!!input.projectType}
      >
        {step === 1 && (
          <div className="space-y-6">
            <FormField label="Project type" htmlFor="pt">
              <select id="pt" className={inputClass} value={input.projectType} onChange={(e) => setInput({ ...input, projectType: e.target.value })}>
                {leadProjectTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Industry" htmlFor="ind">
              <select id="ind" className={inputClass} value={input.industry} onChange={(e) => setInput({ ...input, industry: e.target.value })}>
                {leadIndustries.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </FormField>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-6">
            <p className="text-sm text-muted">Budget</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {leadBudgets.map((b) => (
                <OptionCard key={b} title={b} selected={input.budget === b} onClick={() => setInput({ ...input, budget: b })} />
              ))}
            </div>
            <p className="text-sm text-muted">Timeline</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {leadTimelines.map((t) => (
                <OptionCard key={t} title={t} selected={input.timeline === t} onClick={() => setInput({ ...input, timeline: t })} />
              ))}
            </div>
            <p className="text-sm text-muted">Team size</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {companySizes.map((s) => (
                <OptionCard key={s} title={s} selected={input.teamSize === s} onClick={() => setInput({ ...input, teamSize: s })} />
              ))}
            </div>
          </div>
        )}
      </ToolWizard>
    </ToolShell>
  );
}
