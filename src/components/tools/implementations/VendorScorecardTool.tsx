"use client";

import { useState, useEffect, useMemo } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolWizard } from "@/components/tools/ToolWizard";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { ToolRelatedLinks } from "@/components/tools/ToolRelatedLinks";
import { MetricCard, BarChart } from "@/components/tools/ToolUI";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { getToolBySlug } from "@/lib/tools/registry";
import { scoreVendors, vendorScorecardCriteria, type VendorScorecardInput } from "@/lib/tools/engines";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";
import { cn } from "@/lib/utils";

const SLUG = "vendor-comparison-scorecard";

type Scores = Record<string, Record<string, number>>;

function initScores(vendors: string[]): Scores {
  const scores: Scores = {};
  for (const c of vendorScorecardCriteria) {
    scores[c.key] = Object.fromEntries(vendors.map((v) => [v, 3]));
  }
  return scores;
}

export function VendorScorecardTool() {
  const tool = getToolBySlug(SLUG)!;
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [vendorA, setVendorA] = useState("Vendor A");
  const [vendorB, setVendorB] = useState("Vendor B");
  const [vendorC, setVendorC] = useState("");
  const [includeThird, setIncludeThird] = useState(false);
  const [scores, setScores] = useState<Scores>(() => initScores(["Vendor A", "Vendor B"]));

  const vendors = useMemo(
    () => (includeThird && vendorC.trim() ? [vendorA, vendorB, vendorC.trim()] : [vendorA, vendorB]),
    [vendorA, vendorB, vendorC, includeThird],
  );

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  const input: VendorScorecardInput = {
    vendorA,
    vendorB,
    vendorC: includeThird && vendorC.trim() ? vendorC.trim() : undefined,
    scores: scores as VendorScorecardInput["scores"],
  };
  const result = showResults ? scoreVendors(input) : null;

  function setScore(criterion: string, vendor: string, value: number) {
    setScores((s) => ({
      ...s,
      [criterion]: { ...s[criterion], [vendor]: value },
    }));
  }

  if (showResults && result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold">Recommended: {result.recommendedVendor}</h2>
              <p className="mt-2 text-muted">{result.summary}</p>
            </div>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.summary} resultData={{ input, result }} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {result.vendors.map((v) => (
              <MetricCard
                key={v.name}
                label={v.name}
                value={`${v.percentage}%`}
                sub={`${v.totalScore}/${v.maxScore} weighted points`}
                accent={v.name === result.recommendedVendor ? tool.accent : undefined}
              />
            ))}
          </div>
          {result.vendors.map((v) => (
            <section key={v.name} className="rounded-2xl border border-border p-6">
              <h3 className="font-display font-semibold">{v.name}</h3>
              {v.strengths.length > 0 && (
                <p className="mt-2 text-sm text-emerald-600">Strengths: {v.strengths.join("; ")}</p>
              )}
              {v.concerns.length > 0 && (
                <p className="mt-1 text-sm text-amber-600">Concerns: {v.concerns.join("; ")}</p>
              )}
            </section>
          ))}
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Criteria breakdown</h3>
            <div className="mt-4 space-y-6">
              {result.criteriaBreakdown.map((row) => (
                <div key={row.criterion}>
                  <p className="text-sm font-medium mb-2">{row.criterion}</p>
                  <BarChart
                    items={Object.entries(row.weights).map(([name, value]) => ({
                      label: name,
                      value,
                      color: name === result.recommendedVendor ? tool.accent : "#94A3B8",
                    }))}
                  />
                </div>
              ))}
            </div>
          </section>
          <ToolRelatedLinks slug={SLUG} />
          <button type="button" onClick={() => setShowResults(false)} className="text-sm text-brand-600 hover:underline">
            ← Edit scores
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
        stepTitle={step === 1 ? "Vendor names" : "Score each criterion (1–5)"}
        onBack={() => setStep(1)}
        onNext={() => {
          setScores(initScores(vendors));
          setStep(2);
        }}
        isLastStep={step === 2}
        onFinish={() => {
          const r = scoreVendors(input);
          trackToolComplete(SLUG, 100, r.recommendedVendor);
          setShowResults(true);
        }}
        canNext={step === 1 ? !!vendorA.trim() && !!vendorB.trim() : true}
      >
        {step === 1 ? (
          <div className="space-y-4">
            <FormField label="Vendor 1" htmlFor="va" required>
              <input id="va" className={inputClass} value={vendorA} onChange={(e) => setVendorA(e.target.value)} />
            </FormField>
            <FormField label="Vendor 2" htmlFor="vb" required>
              <input id="vb" className={inputClass} value={vendorB} onChange={(e) => setVendorB(e.target.value)} />
            </FormField>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={includeThird} onChange={(e) => setIncludeThird(e.target.checked)} />
              Compare a third vendor
            </label>
            {includeThird && (
              <FormField label="Vendor 3" htmlFor="vc">
                <input id="vc" className={inputClass} value={vendorC} onChange={(e) => setVendorC(e.target.value)} />
              </FormField>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {vendorScorecardCriteria.map((c) => (
              <div key={c.key}>
                <p className="font-medium">{c.label}</p>
                <p className="text-xs text-muted mb-3">Weight: {c.weight}%</p>
                {vendors.map((v) => (
                  <div key={v} className="mb-3">
                    <p className="text-xs text-muted mb-1">{v}</p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setScore(c.key, v, n)}
                          className={cn(
                            "flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold",
                            scores[c.key]?.[v] === n ? "border-brand-600 bg-brand-600 text-white" : "border-border",
                          )}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </ToolWizard>
    </ToolShell>
  );
}
