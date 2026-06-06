"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { ScoreRing, BarChart } from "@/components/tools/ToolUI";
import { Button } from "@/components/ui/Button";
import { getToolBySlug } from "@/lib/tools/registry";
import { assessDigitalTransformation, dxQuestions } from "@/lib/tools/engines";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";
import { cn } from "@/lib/utils";

const SLUG = "digital-transformation-assessment";

export function DxAssessmentTool() {
  const tool = getToolBySlug(SLUG)!;
  const [answers, setAnswers] = useState({
    currentSystems: 2,
    processes: 2,
    automation: 2,
    reporting: 2,
    dataManagement: 2,
  });
  const [result, setResult] = useState<ReturnType<typeof assessDigitalTransformation> | null>(null);

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  function score(id: keyof typeof answers, value: number) {
    setAnswers((a) => ({ ...a, [id]: value }));
  }

  function submit() {
    const r = assessDigitalTransformation(answers);
    setResult(r);
    trackToolComplete(SLUG, r.maturityScore, r.maturityLabel);
  }

  if (result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold">{result.maturityLabel}</h2>
              <p className="mt-2 text-muted">{result.summary}</p>
            </div>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.summary} resultData={{ answers, result }} />
          </div>
          <div className="flex justify-center">
            <ScoreRing score={result.maturityScore} label="Digital maturity" />
          </div>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Dimension scores</h3>
            <div className="mt-4">
              <BarChart
                items={result.dimensions.map((d) => ({ label: d.name, value: d.score, color: tool.accent }))}
                maxValue={5}
              />
            </div>
          </section>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Improvement opportunities</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {result.opportunities.map((o) => (
                <li key={o}>• {o}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Suggested roadmap</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {result.roadmap.map((r) => (
                <div key={r.quarter} className="rounded-xl bg-surface p-4">
                  <span className="text-xs font-bold text-brand-600">{r.quarter}</span>
                  <p className="mt-1 text-sm">{r.initiative}</p>
                </div>
              ))}
            </div>
          </section>
          <Button variant="secondary" onClick={() => setResult(null)}>Retake assessment</Button>
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <div className="rounded-2xl border border-border bg-surface-elevated p-8 space-y-8">
        {dxQuestions.map((q) => (
          <div key={q.id}>
            <p className="font-medium">{q.label}</p>
            <p className="text-xs text-muted mb-3">{q.help}</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => score(q.id, n)}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold transition-colors",
                    answers[q.id] === n ? "border-brand-600 bg-brand-600 text-white" : "border-border hover:border-brand-600/40",
                  )}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        ))}
        <Button onClick={submit} className="w-full sm:w-auto">Calculate maturity score</Button>
      </div>
    </ToolShell>
  );
}
