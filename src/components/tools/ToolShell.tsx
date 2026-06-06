"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { H1, Caption } from "@/components/design/typography";
import { trackToolView } from "@/lib/tools/analytics";
import type { ToolDefinition } from "@/lib/tools/types";

export function ToolShell({
  tool,
  children,
  sidebar,
}: {
  tool: ToolDefinition;
  children: ReactNode;
  sidebar?: ReactNode;
}) {
  useEffect(() => {
    trackToolView(tool.slug);
  }, [tool.slug]);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-white/[0.08] bg-surface">
        <Container className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <Link
              href="/tools"
              className="text-caption text-[#94A3B8] underline decoration-white/20 underline-offset-4 transition-colors hover:text-brand-500 hover:decoration-brand-500/50"
            >
              ← Tools
            </Link>
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <div>
              <H1 as="h1" className="mt-0 text-2xl sm:text-3xl">
                {tool.name}
              </H1>
              <Caption className="mt-1">
                ~{tool.estimatedMinutes} min · {toolCategoryLabel(tool.category)}
              </Caption>
            </div>
          </div>
          <div
            className="hidden h-2 w-2 rounded-full sm:block"
            style={{ backgroundColor: "#2563EB" }}
            title="Active tool"
          />
        </Container>
      </div>
      <Container className="section-py !pt-10 !pb-16">
        <div className="grid gap-8 lg:grid-cols-12">
          {sidebar && <aside className="lg:col-span-3">{sidebar}</aside>}
          <main className={sidebar ? "lg:col-span-9" : "lg:col-span-12"}>{children}</main>
        </div>
      </Container>
    </div>
  );
}

function toolCategoryLabel(category: ToolDefinition["category"]): string {
  const labels: Record<ToolDefinition["category"], string> = {
    planning: "Planning",
    sales: "Sales",
    technical: "Technical",
    finance: "Finance",
    strategy: "Strategy",
  };
  return labels[category] ?? category;
}
