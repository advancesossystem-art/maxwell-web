"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { trackToolView } from "@/lib/tools/analytics";
import { toolCategoryLabels } from "@/lib/tools/registry";
import type { ToolDefinition } from "@/lib/tools/types";

const categoryOutcomes: Record<ToolDefinition["category"], string[]> = {
  planning: [
    "Phased delivery roadmap with milestones",
    "Realistic timeline based on your scope",
    "Team sizing recommendations",
    "Exportable PDF for stakeholders",
  ],
  sales: [
    "Structured scope and requirements",
    "Vendor-ready documentation",
    "Professional proposal sections",
    "Shareable output for your team",
  ],
  technical: [
    "Stack recommendations for your scale",
    "Architecture guidance by budget",
    "Technology trade-off summary",
    "Implementation-ready shortlist",
  ],
  finance: [
    "INR-based ROI and payback model",
    "Annual savings breakdown",
    "5-year value projection",
    "Investment range for planning",
  ],
  strategy: [
    "Maturity score across key pillars",
    "Gap analysis with priorities",
    "Phased improvement roadmap",
    "Executive-ready summary",
  ],
};

export function ToolShell({
  tool,
  children,
  previewLabel,
  previewValue,
}: {
  tool: ToolDefinition;
  children: ReactNode;
  previewLabel?: string;
  previewValue?: string;
}) {
  useEffect(() => {
    trackToolView(tool.slug);
  }, [tool.slug]);

  const outcomes = categoryOutcomes[tool.category];

  return (
    <div className="tool-shell" style={{ ["--tool-accent" as string]: tool.accent }}>
      <header className="tool-shell__hero">
        <Container className="tool-shell__hero-inner">
          <Link href="/tools" className="tool-shell__back">
            ← All tools
          </Link>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="tool-shell__badge">{toolCategoryLabels[tool.category]}</span>
            <span className="tool-shell__badge">Free · No signup</span>
          </div>
          <h1 className="tool-shell__title">{tool.name}</h1>
          <p className="tool-shell__desc">{tool.description}</p>
          <div className="tool-shell__meta">
            <span className="tool-shell__meta-pill">⏱ ~{tool.estimatedMinutes} min</span>
            <span className="tool-shell__meta-pill">📊 Instant results</span>
            <span className="tool-shell__meta-pill">📄 Export PDF</span>
            {tool.popular ? <span className="tool-shell__meta-pill">★ Popular</span> : null}
          </div>
        </Container>
      </header>

      <Container>
        <div className="tool-shell__layout">
          <aside className="tool-aside">
            <div className="tool-aside__card">
              <h2 className="tool-aside__title">What you&apos;ll get</h2>
              <ul className="tool-aside__list">
                {outcomes.map((item) => (
                  <li key={item} className="tool-aside__item">
                    <span className="tool-aside__check" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {previewLabel && previewValue ? (
              <div className="tool-aside__card">
                <p className="tool-aside__title">Live preview</p>
                <div className="tool-aside__preview">
                  <p className="tool-aside__preview-label">{previewLabel}</p>
                  <p className="tool-aside__preview-value">{previewValue}</p>
                </div>
              </div>
            ) : null}

            <div className="tool-aside__card">
              <h2 className="tool-aside__title">How it works</h2>
              <ol className="tool-aside__list">
                <li className="tool-aside__item">
                  <span className="tool-aside__check">1</span>
                  Enter your business inputs
                </li>
                <li className="tool-aside__item">
                  <span className="tool-aside__check">2</span>
                  Get instant analysis
                </li>
                <li className="tool-aside__item">
                  <span className="tool-aside__check">3</span>
                  Export or book a consultation
                </li>
              </ol>
            </div>
          </aside>

          <main>{children}</main>
        </div>
      </Container>
    </div>
  );
}
