"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolWizard } from "@/components/tools/ToolWizard";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { MetricCard } from "@/components/tools/ToolUI";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { getToolBySlug } from "@/lib/tools/registry";
import { generateProposal } from "@/lib/tools/engines";
import { leadProjectTypes, leadIndustries, leadBudgets } from "@/lib/leads-data";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";

const SLUG = "proposal-generator";

export function ProposalGeneratorTool() {
  const tool = getToolBySlug(SLUG)!;
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState({
    clientName: "",
    industry: "Manufacturing",
    projectType: "ERP",
    requirements: "",
    budget: "₹5L–₹10L",
  });

  const result = showResults && input.clientName ? generateProposal(input) : null;

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  if (showResults && result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8 print:bg-white">
          <div className="flex flex-wrap justify-between gap-4">
            <h2 className="font-display text-2xl font-bold">{result.title}</h2>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.executiveSummary} resultData={{ input, result }} />
          </div>
          <p className="text-muted leading-relaxed">{result.executiveSummary}</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <MetricCard label="Investment" value={result.investment} accent={tool.accent} />
            <MetricCard label="Timeline" value={result.timeline} />
            <MetricCard label="Stack" value={result.stack.slice(0, 2).join(", ")} sub={result.stack[2]} />
          </div>
          <section>
            <h3 className="font-display font-semibold">Scope</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {result.scope.map((s) => (
                <li key={s} className="rounded-lg border border-border px-4 py-2 text-sm">✓ {s}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="font-display font-semibold">Commercial terms</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {result.terms.map((t) => (
                <li key={t}>• {t}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="font-display font-semibold">Next steps</h3>
            <ol className="mt-2 list-decimal pl-5 text-sm text-muted">
              {result.nextSteps.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ol>
          </section>
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
        stepTitle={step === 1 ? "Client & project" : "Requirements & budget"}
        onBack={() => setStep(1)}
        onNext={() => setStep(2)}
        isLastStep={step === 2}
        onFinish={() => {
          trackToolComplete(SLUG, 100);
          setShowResults(true);
        }}
        canNext={step === 1 ? !!input.clientName : true}
      >
        {step === 1 ? (
          <div className="space-y-4">
            <FormField label="Client name" htmlFor="cn" required>
              <input id="cn" className={inputClass} value={input.clientName} onChange={(e) => setInput({ ...input, clientName: e.target.value })} />
            </FormField>
            <FormField label="Industry" htmlFor="ind">
              <select id="ind" className={inputClass} value={input.industry} onChange={(e) => setInput({ ...input, industry: e.target.value })}>
                {leadIndustries.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Project type" htmlFor="pt">
              <select id="pt" className={inputClass} value={input.projectType} onChange={(e) => setInput({ ...input, projectType: e.target.value })}>
                {leadProjectTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </FormField>
          </div>
        ) : (
          <div className="space-y-4">
            <FormField label="Key requirements (comma-separated)" htmlFor="req">
              <textarea id="req" rows={4} className={inputClass} value={input.requirements} onChange={(e) => setInput({ ...input, requirements: e.target.value })} placeholder="Inventory sync, mobile app, Tally integration" />
            </FormField>
            <FormField label="Budget range" htmlFor="bud">
              <select id="bud" className={inputClass} value={input.budget} onChange={(e) => setInput({ ...input, budget: e.target.value })}>
                {leadBudgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </FormField>
          </div>
        )}
      </ToolWizard>
    </ToolShell>
  );
}
