"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/work/ProjectCard";
import {
  getAllProjects,
  portfolioStats,
  projectTypes,
  projectIndustries,
  projectTechnologies,
} from "@/lib/projects-data";
import { ArrowRight } from "@/components/ui/Icons";
import { AccentGradient } from "@/components/design/typography";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { HubMetrics } from "@/components/design/HubMetrics";
import { FilterCategoryTabs, FilterPill } from "@/components/design/FilterPill";

type FilterCategory = "type" | "industry" | "technology";

const categoryLabels: Record<FilterCategory, string> = {
  type: "Project Type",
  industry: "Industry",
  technology: "Technology",
};

export function WorkHub() {
  const allProjects = getAllProjects();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("type");
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = useMemo(() => {
    if (activeCategory === "type") return ["All", ...projectTypes];
    if (activeCategory === "industry") return ["All", ...projectIndustries];
    return ["All", ...projectTechnologies];
  }, [activeCategory]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return allProjects;
    return allProjects.filter((p) => {
      if (activeCategory === "type") return p.projectType === activeFilter;
      if (activeCategory === "industry") return p.industry === activeFilter;
      return p.technologies.includes(activeFilter);
    });
  }, [allProjects, activeCategory, activeFilter]);

  const handleCategoryChange = (cat: FilterCategory) => {
    setActiveCategory(cat);
    setActiveFilter("All");
  };

  return (
    <>
      <PageHero
        eyebrow="Technical Portfolio"
        title={
          <>
            Technical portfolio — <AccentGradient>how we build</AccentGradient>
          </>
        }
        description="Architecture decisions, technology choices, and build processes from 8 production systems — for technical evaluators and engineering leaders."
        below={
          <HubMetrics
            className="gap-3"
            stats={[
              { value: `${portfolioStats.totalProjects}+`, label: "Portfolio Projects" },
              { value: `${portfolioStats.industriesServed}+`, label: "Industries Served" },
              { value: `${portfolioStats.technologiesUsed}+`, label: "Technologies Used" },
              { value: `${portfolioStats.avgRoiMonths} mo`, label: "Avg. ROI Timeline" },
            ]}
          />
        }
      >
        <Button href="/contact" size="lg">
          Start Your Project <ArrowRight />
        </Button>
      </PageHero>

      <PageSection aria-label="Project portfolio">
        <SectionHeader
          title="All projects"
          description={`${filteredProjects.length} project${filteredProjects.length !== 1 ? "s" : ""} in the portfolio`}
          action={
            <FilterCategoryTabs
              categories={["type", "industry", "technology"] as const}
              labels={categoryLabels}
              active={activeCategory}
              onChange={handleCategoryChange}
            />
          }
        />

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <FilterPill key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-12 text-center text-body">No projects match this filter. Try another category.</p>
        )}

        <p className="mt-12 text-center text-sm text-[var(--v6-text-secondary)]">
          Looking for business outcomes?{" "}
          <Link href="/case-studies" className="font-medium text-[#4f46e5] hover:underline">
            See the case studies →
          </Link>
        </p>
      </PageSection>
    </>
  );
}
