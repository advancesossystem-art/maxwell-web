"use client";

import Link from "next/link";
import { MotionReveal } from "@/components/motion/FadeIn";
import { ArrowRight } from "@/components/ui/Icons";
import { ProjectMockFrame } from "@/components/work/ProjectMock";
import { H3 } from "@/components/design/typography";
import type { ProjectData } from "@/lib/projects-data";

export function ProjectCard({ project, index = 0 }: { project: ProjectData; index?: number }) {
  return (
    <MotionReveal delay={index * 0.05} y={16} duration={0.45} className="group min-w-0">
      <Link href={`/work/${project.slug}`} className="mx-showcase block min-w-0 overflow-hidden">
        <div className="relative overflow-hidden">
          <ProjectMockFrame
            type={project.mockType}
            accent={project.accent}
            gradient={project.gradient}
            className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-white">
            {project.industry}
          </span>
          <p className="absolute bottom-4 left-4 font-display text-base font-semibold text-white">
            {project.cardResult}
          </p>
        </div>
        <div className="p-6">
          <H3 className="text-base group-hover:text-brand-400">{project.title}</H3>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-500">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </MotionReveal>
  );
}

export function ProjectCardCompact({ project }: { project: ProjectData }) {
  return (
    <Link href={`/work/${project.slug}`} className="v6-card group flex gap-4 p-4">
      <ProjectMockFrame
        type={project.mockType}
        accent={project.accent}
        gradient={project.gradient}
        className="h-20 w-28 shrink-0 rounded-lg"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[var(--v6-text)] transition-colors group-hover:text-[#4f46e5]">
          {project.title}
        </p>
        <p className="mt-1 text-xs font-medium text-[#d97706]">{project.cardResult}</p>
      </div>
    </Link>
  );
}
