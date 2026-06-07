"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";
import { trackCTAClick } from "@/lib/conversion-events";
import { toolsRegistry } from "@/lib/tools/registry";
import { ArrowRight } from "@/components/ui/Icons";

const phase4Tools = [
  { slug: "erp-roi-calculator", name: "ERP ROI Calculator", desc: "Payback period and 5-year ERP value.", accent: "#1A4B8C" },
  { slug: "crm-roi-calculator", name: "CRM ROI Calculator", desc: "Pipeline efficiency and lead conversion ROI.", accent: "#8B5CF6" },
  { slug: "software-cost-calculator", name: "Software Cost Calculator", desc: "Ballpark ERP, CRM, and custom software investment.", accent: "#F59E0B" },
  { slug: "ai-readiness-assessment", name: "AI Readiness Assessment", desc: "Score data, infra, and governance for AI pilots.", accent: "#EC4899" },
  { slug: "digital-transformation-assessment", name: "Digital Maturity Assessment", desc: "Modernization score and phased roadmap.", accent: "#6366F1" },
  { slug: "vendor-comparison-scorecard", name: "Vendor Scorecard", desc: "Compare up to 3 vendors with weighted scores.", accent: "#06B6D4" },
  { slug: "erp-requirement-generator", name: "ERP Requirement Generator", desc: "Structured ERP specs for RFPs and alignment.", accent: "#1A4B8C" },
  { slug: "crm-requirement-generator", name: "CRM Requirement Generator", desc: "Pipeline, automation, and integration requirements.", accent: "#8B5CF6" },
  { slug: "project-timeline-estimator", name: "Timeline Estimator", desc: "Realistic delivery schedule by scope.", accent: "#2563EB" },
  { slug: "team-size-calculator", name: "Team Size Calculator", desc: "PM, dev, QA, and design headcount guide.", accent: "#10B981" },
] as const;

export function HomeToolsSpotlight() {
  return (
    <HomeSection tone="elevated" aria-label="Free assessment tools">
      <FadeIn>
        <HomeSectionIntro
          eyebrow="Free tools"
          title="Calculate ROI before you commit"
          description="Ten self-serve calculators and generators used by CTOs and operations heads to build the business case—then talk to our team for a fixed-scope quote."
        />
      </FadeIn>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {phase4Tools.map((tool, i) => (
          <FadeIn key={tool.slug} delay={i * 0.03}>
            <Link
              href={`/tools/${tool.slug}`}
              onClick={() => trackCTAClick(tool.name, `/tools/${tool.slug}`, "homepage_tools")}
              className="group v6-card flex h-full flex-col p-5 transition-colors hover:border-[#4f46e5]/30"
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white"
                style={{ backgroundColor: tool.accent }}
                aria-hidden
              >
                {tool.slug.includes("roi") || tool.slug.includes("cost") ? "%" : tool.slug.includes("requirement") ? "R" : "✓"}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-[var(--v6-text)] group-hover:text-[#4f46e5]">
                {tool.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-[var(--v6-text-secondary)]">{tool.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#4f46e5]">
                Try free <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.2}>
        <p className="mt-8 text-center text-sm text-[var(--v6-text-secondary)]">
          All tools include PDF export, lead capture, and links to related Maxwell services.{" "}
          <Link href="/tools" className="font-semibold text-[#4f46e5] hover:underline" onClick={() => trackCTAClick("View all tools", "/tools", "homepage_tools")}>
            View all {toolsRegistry.length} tools →
          </Link>
        </p>
      </FadeIn>
    </HomeSection>
  );
}
