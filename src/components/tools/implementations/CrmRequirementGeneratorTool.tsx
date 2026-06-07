"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolWizard } from "@/components/tools/ToolWizard";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { ToolRelatedLinks } from "@/components/tools/ToolRelatedLinks";
import { ReportListSection } from "@/components/tools/ToolUI";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { getToolBySlug } from "@/lib/tools/registry";
import { generateCrmRequirements, crmIntegrationOptions } from "@/lib/tools/engines";
import { featureOptionsByProjectType, leadIndustries } from "@/lib/leads-data";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";
import { cn } from "@/lib/utils";

const SLUG = "crm-requirement-generator";
const modules = featureOptionsByProjectType.CRM;

export function CrmRequirementGeneratorTool() {
  const tool = getToolBySlug(SLUG)!;
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState({
    companyName: "",
    industry: "Manufacturing" as (typeof leadIndustries)[number],
    salesTeamSize: 10,
    leadVolumeMonthly: 200,
    modules: [] as string[],
    integrations: [] as string[],
    salesProcess: "B2B field sales with long cycle",
  });

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  function toggleModule(mod: string) {
    setInput((i) => ({
      ...i,
      modules: i.modules.includes(mod) ? i.modules.filter((m) => m !== mod) : [...i.modules, mod],
    }));
  }

  function toggleIntegration(int: string) {
    setInput((i) => ({
      ...i,
      integrations: i.integrations.includes(int) ? i.integrations.filter((x) => x !== int) : [...i.integrations, int],
    }));
  }

  const result = showResults && input.companyName ? generateCrmRequirements(input) : null;

  if (showResults && result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-6">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold">{result.documentTitle}</h2>
              <p className="mt-2 text-muted">{result.executiveSummary}</p>
            </div>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.summary} resultData={{ input, result }} />
          </div>
          <ReportListSection title="Functional requirements" items={result.functionalRequirements} />
          <ReportListSection title="Technical requirements" items={result.technicalRequirements} />
          <ReportListSection title="Integrations" items={result.integrationRequirements} />
          <ReportListSection title="Automation rules" items={result.automationRules} />
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Implementation phases</h3>
            <div className="mt-3 space-y-2">
              {result.implementationPhases.map((p) => (
                <div key={p.phase} className="rounded-lg bg-surface p-3 text-sm">
                  <div className="flex justify-between font-medium">
                    <span>{p.phase}</span>
                    <span className="text-muted">{p.duration}</span>
                  </div>
                  <p className="mt-1 text-muted">{p.scope}</p>
                </div>
              ))}
            </div>
          </section>
          <ToolRelatedLinks slug={SLUG} />
          <button type="button" onClick={() => setShowResults(false)} className="text-sm text-brand-600 hover:underline">
            ← Edit
          </button>
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <ToolWizard
        step={step}
        totalSteps={3}
        stepTitle={step === 1 ? "Sales team" : step === 2 ? "CRM modules" : "Integrations & process"}
        onBack={() => setStep((s) => Math.max(1, s - 1))}
        onNext={() => setStep((s) => s + 1)}
        isLastStep={step === 3}
        onFinish={() => {
          trackToolComplete(SLUG, 100);
          setShowResults(true);
        }}
        canNext={step === 1 ? !!input.companyName.trim() : step === 2 ? input.modules.length > 0 : true}
      >
        {step === 1 && (
          <div className="space-y-4">
            <FormField label="Company name" htmlFor="co" required>
              <input id="co" className={inputClass} value={input.companyName} onChange={(e) => setInput({ ...input, companyName: e.target.value })} />
            </FormField>
            <FormField label="Industry" htmlFor="ind">
              <select id="ind" className={inputClass} value={input.industry} onChange={(e) => setInput({ ...input, industry: e.target.value as typeof input.industry })}>
                {leadIndustries.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </FormField>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Sales team size" htmlFor="team">
                <input id="team" type="number" className={inputClass} value={input.salesTeamSize} onChange={(e) => setInput({ ...input, salesTeamSize: Number(e.target.value) })} />
              </FormField>
              <FormField label="Leads per month" htmlFor="leads">
                <input id="leads" type="number" className={inputClass} value={input.leadVolumeMonthly} onChange={(e) => setInput({ ...input, leadVolumeMonthly: Number(e.target.value) })} />
              </FormField>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="grid gap-2 sm:grid-cols-2">
            {modules.map((mod) => (
              <button
                key={mod}
                type="button"
                onClick={() => toggleModule(mod)}
                className={cn(
                  "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                  input.modules.includes(mod) ? "border-brand-600 bg-brand-600/10" : "border-border hover:border-brand-600/40",
                )}
              >
                {mod}
              </button>
            ))}
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <FormField label="Sales process" htmlFor="proc">
              <select id="proc" className={inputClass} value={input.salesProcess} onChange={(e) => setInput({ ...input, salesProcess: e.target.value })}>
                {["B2B field sales with long cycle", "Inside sales / telesales", "B2C high-volume inbound", "Channel / distributor model"].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </FormField>
            <p className="text-sm text-muted">Integrations</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {crmIntegrationOptions.map((int) => (
                <button
                  key={int}
                  type="button"
                  onClick={() => toggleIntegration(int)}
                  className={cn(
                    "rounded-xl border px-4 py-3 text-left text-sm",
                    input.integrations.includes(int) ? "border-brand-600 bg-brand-600/10" : "border-border",
                  )}
                >
                  {int}
                </button>
              ))}
            </div>
          </div>
        )}
      </ToolWizard>
    </ToolShell>
  );
}
