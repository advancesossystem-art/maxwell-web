"use client";

import Link from "next/link";
import { featuredProjects } from "@/lib/homepage";
import { ProjectMock } from "@/components/work/ProjectMock";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowRight } from "@/components/ui/Icons";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { Button } from "@/components/ui/Button";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";
import { CONVERSION_ROUTES, CTA_LABELS } from "@/lib/conversion-copy";
import { cn } from "@/lib/utils";

/** Portfolio — case-study style outcomes */
export function FeaturedWork() {
  return (
    <HomeSection tone="white" aria-label="Selected work">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <FadeIn className="flex-1">
          <HomeSectionIntro
            align="left"
            wideTitle
            eyebrow="Work"
            title="Outcomes we deliver for complex operations"
            description="Representative delivery patterns—discuss your scope on a consultation."
          />
        </FadeIn>
        <FadeIn delay={0.05}>
          <Button href="/work" variant="secondary" size="md" className="shrink-0">
            View all work <ArrowRight />
          </Button>
        </FadeIn>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
        {featuredProjects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.06}>
            <Link
              href={`/work/${project.slug}`}
              className="group v6-card block overflow-hidden"
            >
              <div className={cn("relative h-48 bg-gradient-to-br", project.gradient)}>
                <div className="absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100">
                  <ProjectMock type={project.mockType} accent={project.accent} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white/90">
                  {project.industry}
                </span>
              </div>
              <div className="p-6">
                <p className="font-display text-sm font-semibold text-[#4f46e5]">{project.result}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--v6-text)]">{project.title}</h3>
                <p className="mt-2 text-sm text-[var(--v6-text-secondary)]">{project.resultDetail}</p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <PrimaryCTA location="homepage_work" context={{ source: "homepage-work" }} />
        <Button href={CONVERSION_ROUTES.process} variant="secondary" size="lg">
          {CTA_LABELS.exploreProcess}
        </Button>
      </FadeIn>
    </HomeSection>
  );
}
