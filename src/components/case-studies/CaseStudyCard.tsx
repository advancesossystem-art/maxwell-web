"use client";

import Link from "next/link";
import { MotionReveal } from "@/components/motion/FadeIn";
import { ArrowRight } from "@/components/ui/Icons";
import type { CaseStudyData } from "@/lib/case-studies-data";

export function CaseStudyCard({ study, index = 0 }: { study: CaseStudyData; index?: number }) {
  return (
    <MotionReveal delay={index * 0.05} y={16} duration={0.45} className="group min-w-0">
      <Link href={`/case-studies/${study.slug}`} className="v6-card v6-card-accent block min-w-0 overflow-hidden">
        <div className="border-b border-[var(--v6-border)] bg-[#030712] px-6 py-7">
          <span className="text-xs font-medium text-[#818cf8]">{study.trust.industry}</span>
          <p className="mt-4 font-display text-2xl font-bold tracking-tight text-[#818cf8]">
            {study.cardHighlight}
          </p>
        </div>
        <div className="flex items-end justify-between gap-4 p-6">
          <div>
            <p className="text-base font-semibold text-[var(--v6-text)] transition-colors group-hover:text-[#4f46e5]">
              {study.title}
            </p>
            <p className="mt-1 text-sm text-[var(--v6-text-secondary)]">
              {study.trust.projectValue} · {study.trust.timeline}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#4f46e5]">
            Read <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </MotionReveal>
  );
}

export function CaseStudyCardCompact({ study }: { study: CaseStudyData }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="v6-card v6-card-accent group flex h-full gap-4 p-5 transition-colors"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4f46e5]/15 font-display text-sm font-bold text-[#4f46e5]">
        {study.cardHighlight.replace(/[^0-9%₹$]/g, "").slice(0, 3) || "—"}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[var(--v6-text)] transition-colors group-hover:text-[#4f46e5]">
          {study.title}
        </p>
        <p className="mt-1 text-xs text-[var(--v6-text-secondary)]">{study.cardHighlight}</p>
      </div>
    </Link>
  );
}
