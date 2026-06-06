"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { MicroConversionCTA } from "@/components/conversion/MicroConversionCTA";
import {
  toolsRegistry,
  toolCategoryLabels,
  getFeaturedTools,
} from "@/lib/tools/registry";
import type { ToolCategory } from "@/lib/tools/types";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";

export function ToolsHub() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ToolCategory | "all">("all");

  const filtered = useMemo(() => {
    let list = toolsRegistry;
    if (category !== "all") list = list.filter((t) => t.category === category);
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.includes(q)),
    );
  }, [query, category]);

  const featured = getFeaturedTools();
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title={
          <>
            Enterprise tools that <AccentGradient>work like software</AccentGradient>
          </>
        }
        description="Free planning calculators and generators for teams evaluating ERP, SaaS, and custom builds—built by engineers who ship production systems."
      >
        <PrimaryCTA location="tools_hub" context={{ source: "tools-hub" }} />
      </PageHero>

      <PageSection>
        <SectionHeader title="All tools" description="Filter by category or search by name." />
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <input
            type="search"
            placeholder="Search tools…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-md rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/25"
          />
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === "all"
                  ? "bg-brand-600 text-white"
                  : "border border-white/[0.1] text-muted hover:text-white"
              }`}
            >
              All
            </button>
            {(Object.keys(toolCategoryLabels) as ToolCategory[]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-brand-600 text-white"
                    : "border border-white/[0.1] text-muted hover:text-white"
                }`}
              >
                {toolCategoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <Card key={tool.slug} href={`/tools/${tool.slug}`}>
              <H3 className="group-hover:text-brand-400 transition-colors">{tool.name}</H3>
              <Caption className="mt-2 line-clamp-2">{tool.description}</Caption>
              <Caption className="mt-4">~{tool.estimatedMinutes} min</Caption>
            </Card>
          ))}
        </div>
      </PageSection>

      {featured.length > 0 && (
        <PageSection tone="elevated">
          {featured.length > 0 && (
            <>
              <SectionHeader eyebrow="Featured" title="Start here" />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((tool) => (
                  <Card key={tool.slug} href={`/tools/${tool.slug}`} padding="lg">
                    <H3>{tool.name}</H3>
                    <Caption className="mt-2">{tool.description}</Caption>
                  </Card>
                ))}
              </div>
            </>
          )}
        </PageSection>
      )}

      <PageSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <MicroConversionCTA variant="guide" location="tools_hub_footer" />
          <MicroConversionCTA variant="download" location="tools_hub_footer" />
        </div>
      </PageSection>
    </>
  );
}
