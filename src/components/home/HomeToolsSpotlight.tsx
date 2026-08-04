"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";
import { trackCTAClick } from "@/lib/conversion-events";
import { toolsRegistry } from "@/lib/tools/registry";
import { ArrowRight } from "@/components/ui/Icons";

const phase4Tools = [
  { slug: "industrial-website-rfq-estimator", name: "Industrial RFQ Cost Estimator", desc: "SKU, RFQ depth, catalog & GIDC ranges from ₹45k / ₹75k anchors.", accent: "#0F766E" },
  { slug: "software-cost-calculator", name: "Software Cost Calculator", desc: "Ballpark website, ERP, CRM, and custom software investment.", accent: "#F59E0B" },
  { slug: "project-timeline-estimator", name: "Timeline Estimator", desc: "Realistic delivery schedule by website or software scope.", accent: "#2563EB" },
  { slug: "vendor-comparison-scorecard", name: "Vendor Scorecard", desc: "Compare up to 3 vendors with weighted scores.", accent: "#06B6D4" },
  { slug: "digital-transformation-assessment", name: "Digital Maturity Assessment", desc: "Modernization score and phased roadmap.", accent: "#6366F1" },
  { slug: "ai-readiness-assessment", name: "AI Readiness Assessment", desc: "Score data, infra, and governance for AI pilots.", accent: "#EC4899" },
] as const;

export function HomeToolsSpotlight() {
  return (
    <HomeSection tone="elevated" aria-label="Free assessment tools">
      <FadeIn>
        <HomeSectionIntro
          eyebrow="Planning tools"
          title="Estimate scope before you commit"
          description="Industrial website cost planner first — then timeline and vendor scorecards. ERP ROI tools remain on /tools if you need them later."
        />
      </FadeIn>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {phase4Tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            onClick={() => trackCTAClick(tool.name, `/tools/${tool.slug}`, "homepage_tools")}
            className="group v6-card flex min-w-0 flex-col overflow-hidden p-5 transition-colors hover:border-[#4f46e5]/30"
          >
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold text-white"
              style={{ backgroundColor: tool.accent }}
              aria-hidden
            >
              {tool.slug.includes("roi") || tool.slug.includes("cost") ? "%" : tool.slug.includes("requirement") ? "R" : "✓"}
            </span>
            <h3 className="mt-4 font-display text-base font-semibold leading-snug text-[var(--v6-text)] group-hover:text-[#4f46e5]">
              {tool.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{tool.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#4f46e5]">
              Try free <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
      <FadeIn delay={0.2}>
        <p className="mt-8 text-center text-sm text-[var(--v6-text-secondary)]">
          Explore{" "}
          <Link href="/knowledge-center" className="font-medium text-[#4f46e5] hover:underline">
            Knowledge Center
          </Link>
          ,{" "}
          <Link href="/answers" className="font-medium text-[#4f46e5] hover:underline">
            Maxwell Answers
          </Link>
          , and{" "}
          <Link href="/research" className="font-medium text-[#4f46e5] hover:underline">
            Research
          </Link>{" "}
          for in-depth guides beyond calculators. All tools include PDF export, lead capture, and links to related
          Maxwell services.{" "}
          <Link href="/tools" className="font-semibold text-[#4f46e5] hover:underline" onClick={() => trackCTAClick("View all tools", "/tools", "homepage_tools")}>
            View all {toolsRegistry.length} tools →
          </Link>
        </p>
      </FadeIn>
    </HomeSection>
  );
}
