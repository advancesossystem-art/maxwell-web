"use client";

import { useState, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { MetricCard, ScoreRing, StackRecommendationCard } from "@/components/tools/ToolUI";
import { FormField, inputClass, OptionCard } from "@/components/leads/LeadFormFields";
import { Button } from "@/components/ui/Button";
import { getToolBySlug } from "@/lib/tools/registry";
import { adviseTechStack } from "@/lib/tools/engines";
import { leadProjectTypes, leadScopes, leadBudgets } from "@/lib/leads-data";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";

const SLUG = "tech-stack-advisor";
const USER_OPTIONS = ["< 100", "100–1,000", "1,000–10,000", "10,000+"];

export function TechStackAdvisorTool() {
  const tool = getToolBySlug(SLUG)!;
  const [input, setInput] = useState({
    projectType: "SaaS",
    scale: "Medium",
    users: "100–1,000",
    budget: "₹5L–₹10L",
  });
  const [result, setResult] = useState<ReturnType<typeof adviseTechStack> | null>(null);

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  function run() {
    const r = adviseTechStack(input);
    setResult(r);
    trackToolComplete(SLUG, 100, r.frontend.name);
  }

  if (result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8">
          <div className="flex flex-wrap justify-between gap-4">
            <h2 className="font-display text-2xl font-bold">Recommended stack</h2>
            <ExportToolbar toolSlug={SLUG} toolName={tool.name} resultSummary={result.frontend.name} resultData={{ input, result }} />
          </div>
          <div className="flex flex-wrap gap-8 items-center">
            <ScoreRing score={result.score} label="Architecture fit" />
            <MetricCard label="Project" value={input.projectType} sub={`${input.users} users · ${input.scale}`} className="flex-1 min-w-[200px]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <StackRecommendationCard title="Frontend" name={result.frontend.name} reason={result.frontend.reason} />
            <StackRecommendationCard title="Backend" name={result.backend.name} reason={result.backend.reason} />
            <StackRecommendationCard title="Database" name={result.database.name} reason={result.database.reason} />
            <StackRecommendationCard title="Cloud" name={result.cloud.name} reason={result.cloud.reason} />
          </div>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Security considerations</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {result.security.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </section>
          <Button variant="secondary" onClick={() => setResult(null)}>New analysis</Button>
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <div className="rounded-2xl border border-border bg-surface-elevated p-8 space-y-6">
        <FormField label="Project type" htmlFor="pt">
          <select id="pt" className={inputClass} value={input.projectType} onChange={(e) => setInput({ ...input, projectType: e.target.value })}>
            {leadProjectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </FormField>
        <div>
          <p className={labelClass}>Scale</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {leadScopes.map((s) => (
              <OptionCard key={s} title={s} selected={input.scale === s} onClick={() => setInput({ ...input, scale: s })} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">Expected users</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {USER_OPTIONS.map((u) => (
              <OptionCard key={u} title={u} selected={input.users === u} onClick={() => setInput({ ...input, users: u })} />
            ))}
          </div>
        </div>
        <FormField label="Budget" htmlFor="bud">
          <select id="bud" className={inputClass} value={input.budget} onChange={(e) => setInput({ ...input, budget: e.target.value })}>
            {leadBudgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </FormField>
        <Button onClick={run} className="w-full sm:w-auto">Analyze stack</Button>
      </div>
    </ToolShell>
  );
}

const labelClass = "text-sm font-medium";
