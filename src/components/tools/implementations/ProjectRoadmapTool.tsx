"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolWizard } from "@/components/tools/ToolWizard";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { MetricCard, PhaseTimeline, ToolSection } from "@/components/tools/ToolUI";
import { ToolResultsLayout } from "@/components/tools/ToolLayout";
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
        <ToolResultsLayout
          title="Your project roadmap"
          summary={result.summary}
          toolbar={
            <ExportToolbar
              toolSlug={TOOL_SLUG}
              toolName={tool.name}
              resultSummary={result.summary}
              resultData={{ input, result }}
            />
          }
          footer={
            <button type="button" onClick={() => setShowResults(false)} className="text-sm font-medium text-brand-600 hover:underline">
              ← Edit inputs
            </button>
          }
        >
          <MetricCard label="Estimated timeline" value={result.totalWeeks} accent={tool.accent} />
          <PhaseTimeline phases={result.phases} />
          <ToolSection title="Recommendations">
            <ul className="space-y-2">
              {result.recommendations.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </ToolSection>
        </ToolResultsLayout>
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
