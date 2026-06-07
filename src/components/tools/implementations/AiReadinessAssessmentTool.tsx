"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { ToolRelatedLinks } from "@/components/tools/ToolRelatedLinks";
import { ScoreRing, BarChart } from "@/components/tools/ToolUI";
import { Button } from "@/components/ui/Button";
import { getToolBySlug } from "@/lib/tools/registry";
import { assessAiReadiness, aiReadinessQuestions } from "@/lib/tools/engines";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";
import { cn } from "@/lib/utils";

const SLUG = "ai-readiness-assessment";

export function AiReadinessAssessmentTool() {
  const tool = getToolBySlug(SLUG)!;
  const [answers, setAnswers] = useState({
    dataQuality: 2,
    infrastructure: 2,
    useCaseClarity: 2,
    teamSkills: 2,
    governance: 2,
    integrationReadiness: 2,
  });
  const [result, setResult] = useState<ReturnType<typeof assessAiReadiness> | null>(null);

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  function submit() {
    const r = assessAiReadiness(answers);
    setResult(r);
    trackToolComplete(SLUG, r.readinessScore, r.readinessLabel);
  }

  if (result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold">{result.readinessLabel}</h2>
              <p className="mt-2 text-muted">{result.summary}</p>
            </div>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.summary} resultData={{ answers, result }} />
          </div>
          <div className="flex justify-center">
            <ScoreRing score={result.readinessScore} label="AI readiness" />
          </div>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Dimension scores</h3>
            <div className="mt-4">
              <BarChart items={result.dimensions.map((d) => ({ label: d.name, value: d.score, color: tool.accent }))} maxValue={5} />
            </div>
          </section>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Gaps to address</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {result.gaps.map((g) => (
                <li key={g}>• {g}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Recommended use cases</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {result.recommendedUseCases.map((u) => (
                <li key={u}>• {u}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Action plan</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {result.nextSteps.map((s) => (
                <div key={s.phase} className="rounded-xl bg-surface p-4">
                  <span className="text-xs font-bold text-brand-600">{s.phase}</span>
                  <p className="mt-1 text-sm">{s.action}</p>
                </div>
              ))}
            </div>
          </section>
          <ToolRelatedLinks slug={SLUG} />
          <Button variant="secondary" onClick={() => setResult(null)}>Retake assessment</Button>
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <div className="rounded-2xl border border-border bg-surface-elevated p-8 space-y-8">
        <p className="text-sm text-muted">Rate each dimension 1 (not ready) to 5 (fully ready). Get a practical AI pilot roadmap—not hype.</p>
        {aiReadinessQuestions.map((q) => (
          <div key={q.id}>
            <p className="font-medium">{q.label}</p>
            <p className="text-xs text-muted mb-3">{q.help}</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: n }))}
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
        <Button onClick={submit} className="w-full sm:w-auto">Calculate AI readiness</Button>
      </div>
    </ToolShell>
  );
}
