"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolWizard } from "@/components/tools/ToolWizard";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { getToolBySlug } from "@/lib/tools/registry";
import { buildRfpDocument } from "@/lib/tools/engines";
import { leadProjectTypes, leadIndustries, leadBudgets, leadTimelines } from "@/lib/leads-data";
import { ReportListSection } from "@/components/tools/ToolUI";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";

const SLUG = "rfp-builder";

export function RfpBuilderTool() {
  const tool = getToolBySlug(SLUG)!;
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState({
    companyName: "",
    projectTitle: "",
    industry: "Manufacturing",
    projectType: "ERP",
    objectives: "",
    budgetRange: "₹5L–₹10L",
    timeline: "3 Months",
  });

  const result = showResults && input.companyName && input.projectTitle ? buildRfpDocument(input) : null;

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  if (showResults && result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-6">
          <div className="flex flex-wrap justify-between gap-4">
            <h2 className="font-display text-2xl font-bold">{result.documentTitle}</h2>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.documentTitle} resultData={{ input, result }} />
          </div>
          <ReportListSection title="Business objectives" items={result.businessObjectives} />
          <ReportListSection title="Technical requirements" items={result.technicalRequirements} />
          <ReportListSection title="Functional requirements" items={result.functionalRequirements} />
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Timeline</h3>
            <div className="mt-3 space-y-2">
              {result.timeline.map((t) => (
                <div key={t.phase} className="flex justify-between text-sm">
                  <span>{t.phase}</span>
                  <span className="font-medium">{t.duration}</span>
                </div>
              ))}
            </div>
          </section>
          <ReportListSection title="Budget considerations" items={result.budgetConsiderations} />
          <ReportListSection title="Evaluation criteria" items={result.evaluationCriteria} />
          <button type="button" onClick={() => setShowResults(false)} className="text-sm text-brand-600 hover:underline">← Edit</button>
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <ToolWizard
        step={step}
        totalSteps={2}
        stepTitle={step === 1 ? "Organization" : "Project details"}
        onBack={() => setStep(1)}
        onNext={() => setStep(2)}
        isLastStep={step === 2}
        onFinish={() => {
          trackToolComplete(SLUG, 100);
          setShowResults(true);
        }}
        canNext={step === 1 ? !!input.companyName && !!input.projectTitle : true}
      >
        {step === 1 ? (
          <div className="space-y-4">
            <FormField label="Company name" htmlFor="co" required>
              <input id="co" className={inputClass} value={input.companyName} onChange={(e) => setInput({ ...input, companyName: e.target.value })} />
            </FormField>
            <FormField label="Project title" htmlFor="pt" required>
              <input id="pt" className={inputClass} value={input.projectTitle} onChange={(e) => setInput({ ...input, projectTitle: e.target.value })} />
            </FormField>
            <FormField label="Industry" htmlFor="ind">
              <select id="ind" className={inputClass} value={input.industry} onChange={(e) => setInput({ ...input, industry: e.target.value })}>
                {leadIndustries.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </FormField>
          </div>
        ) : (
          <div className="space-y-4">
            <FormField label="Project type" htmlFor="ptype">
              <select id="ptype" className={inputClass} value={input.projectType} onChange={(e) => setInput({ ...input, projectType: e.target.value })}>
                {leadProjectTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Business objectives" htmlFor="obj">
              <textarea id="obj" rows={3} className={inputClass} value={input.objectives} onChange={(e) => setInput({ ...input, objectives: e.target.value })} />
            </FormField>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Budget" htmlFor="bud">
                <select id="bud" className={inputClass} value={input.budgetRange} onChange={(e) => setInput({ ...input, budgetRange: e.target.value })}>
                  {leadBudgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </FormField>
              <FormField label="Timeline" htmlFor="tl">
                <select id="tl" className={inputClass} value={input.timeline} onChange={(e) => setInput({ ...input, timeline: e.target.value })}>
                  {leadTimelines.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </FormField>
            </div>
          </div>
        )}
      </ToolWizard>
    </ToolShell>
  );
}
