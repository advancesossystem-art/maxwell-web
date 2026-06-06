"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolWizard } from "@/components/tools/ToolWizard";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { MetricCard, BarChart } from "@/components/tools/ToolUI";
import { FormField, inputClass, OptionCard, FeatureChip } from "@/components/leads/LeadFormFields";
import { getToolBySlug } from "@/lib/tools/registry";
import { calculateAdvancedSoftwareCost } from "@/lib/tools/engines";
import { leadProjectTypes, leadScopes, leadTimelines, featureOptionsByProjectType } from "@/lib/leads-data";
import type { LeadProjectType } from "@/lib/leads-data";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";

const SLUG = "software-cost-calculator";
const USER_OPTIONS = ["< 100", "100–1,000", "1,000–10,000", "10,000+"];
const SECURITY = ["Standard", "Enhanced", "Enterprise"];
const COMPLIANCE = ["GST / India tax", "HIPAA", "GDPR", "SOC 2", "PCI-DSS"];

export function SoftwareCostCalculatorTool() {
  const tool = getToolBySlug(SLUG)!;
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState({
    projectType: "ERP" as LeadProjectType,
    industry: "Manufacturing",
    scope: "Medium",
    timeline: "3 Months",
    features: [] as string[],
    userCount: "100–1,000",
    integrations: 2,
    securityLevel: "Enhanced",
    compliance: [] as string[],
  });

  const result = showResults ? calculateAdvancedSoftwareCost(input) : null;
  const features = featureOptionsByProjectType[input.projectType] ?? [];

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  if (showResults && result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8">
          <div className="flex flex-wrap justify-between gap-4">
            <h2 className="font-display text-2xl font-bold">Cost estimate</h2>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.summary} resultData={{ input, result }} />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <MetricCard label="Investment" value={result.costDisplay} accent={tool.accent} />
            <MetricCard label="Timeline" value={result.timeline} />
            <MetricCard label="Complexity" value={`${result.complexityScore}/100`} />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <section className="rounded-2xl border border-border p-6">
              <h3 className="font-display font-semibold">Team composition</h3>
              <div className="mt-4 space-y-3">
                {result.team.map((r) => (
                  <div key={r.role} className="flex justify-between text-sm">
                    <span>{r.role} ×{r.count}</span>
                    <span className="text-muted">{r.allocation}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-2xl border border-border p-6">
              <h3 className="font-display font-semibold">Cost breakdown</h3>
              <div className="mt-4">
                <BarChart items={result.breakdown.map((b, i) => ({ label: b.label, value: 100 - i * 15, color: tool.accent }))} />
              </div>
            </section>
          </div>
          <p className="text-sm text-muted">{result.summary}</p>
          <div className="flex flex-wrap gap-2">
            {result.technologies.map((t) => (
              <span key={t} className="rounded-md border border-border px-3 py-1 text-xs">{t}</span>
            ))}
          </div>
          <button type="button" onClick={() => setShowResults(false)} className="text-sm text-brand-600 hover:underline">← Edit</button>
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <ToolWizard
        step={step}
        totalSteps={3}
        stepTitle={step === 1 ? "Project" : step === 2 ? "Features & scale" : "Security & compliance"}
        onBack={() => setStep((s) => Math.max(1, s - 1))}
        onNext={() => setStep((s) => s + 1)}
        isLastStep={step === 3}
        onFinish={() => {
          trackToolComplete(SLUG, 100);
          setShowResults(true);
        }}
      >
        {step === 1 && (
          <div className="space-y-4">
            <FormField label="Project type" htmlFor="pt">
              <select id="pt" className={inputClass} value={input.projectType} onChange={(e) => setInput({ ...input, projectType: e.target.value as LeadProjectType, features: [] })}>
                {leadProjectTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Industry" htmlFor="ind">
              <input id="ind" className={inputClass} value={input.industry} onChange={(e) => setInput({ ...input, industry: e.target.value })} />
            </FormField>
            <div className="grid gap-2 sm:grid-cols-2">
              {leadScopes.map((s) => (
                <OptionCard key={s} title={s} selected={input.scope === s} onClick={() => setInput({ ...input, scope: s })} />
              ))}
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <p className="text-sm text-muted">Features</p>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <FeatureChip key={f} label={f} selected={input.features.includes(f)} onClick={() => setInput({ ...input, features: input.features.includes(f) ? input.features.filter((x) => x !== f) : [...input.features, f] })} />
              ))}
            </div>
            <p className="text-sm font-medium">Users</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {USER_OPTIONS.map((u) => (
                <OptionCard key={u} title={u} selected={input.userCount === u} onClick={() => setInput({ ...input, userCount: u })} />
              ))}
            </div>
            <FormField label="Third-party integrations" htmlFor="int">
              <input id="int" type="range" min={0} max={8} value={input.integrations} onChange={(e) => setInput({ ...input, integrations: Number(e.target.value) })} className="w-full" />
              <p className="text-xs text-muted mt-1">{input.integrations} integrations</p>
            </FormField>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <p className="text-sm font-medium">Security tier</p>
            {SECURITY.map((s) => (
              <OptionCard key={s} title={s} selected={input.securityLevel === s} onClick={() => setInput({ ...input, securityLevel: s })} />
            ))}
            <p className="text-sm font-medium">Compliance</p>
            <div className="flex flex-wrap gap-2">
              {COMPLIANCE.map((c) => (
                <FeatureChip key={c} label={c} selected={input.compliance.includes(c)} onClick={() => setInput({ ...input, compliance: input.compliance.includes(c) ? input.compliance.filter((x) => x !== c) : [...input.compliance, c] })} />
              ))}
            </div>
            <FormField label="Timeline" htmlFor="tl">
              <select id="tl" className={inputClass} value={input.timeline} onChange={(e) => setInput({ ...input, timeline: e.target.value })}>
                {leadTimelines.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </FormField>
          </div>
        )}
      </ToolWizard>
    </ToolShell>
  );
}
