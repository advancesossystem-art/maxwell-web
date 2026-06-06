"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import {
  getAllCaseStudies,
  caseStudyStats,
  caseStudyIndustries,
  caseStudyServices,
  caseStudyProjectValues,
  caseStudyTechnologies,
  caseStudyOutcomes,
} from "@/lib/case-studies-data";
import { ArrowRight } from "@/components/ui/Icons";
import { AccentGradient } from "@/components/design/typography";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { HubMetrics } from "@/components/design/HubMetrics";
import { FilterCategoryTabs, FilterPill } from "@/components/design/FilterPill";
import { ClientLogoCloud } from "@/components/trust/ClientLogoCloud";

type FilterCategory = "industry" | "service" | "value" | "technology" | "outcome";

const categoryLabels: Record<FilterCategory, string> = {
  industry: "Industry",
  service: "Service",
  value: "Project Value",
  technology: "Technology",
  outcome: "Business Outcome",
};

export function CaseStudiesHub() {
  const allStudies = getAllCaseStudies();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("industry");
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = useMemo(() => {
    if (activeCategory === "industry") return ["All", ...caseStudyIndustries];
    if (activeCategory === "service") return ["All", ...caseStudyServices];
    if (activeCategory === "value") return ["All", ...caseStudyProjectValues];
    if (activeCategory === "technology") return ["All", ...caseStudyTechnologies];
    return ["All", ...caseStudyOutcomes];
  }, [activeCategory]);

  const filteredStudies = useMemo(() => {
    if (activeFilter === "All") return allStudies;
    return allStudies.filter((s) => {
      if (activeCategory === "industry") return s.filters.industry === activeFilter;
      if (activeCategory === "service") return s.filters.service === activeFilter;
      if (activeCategory === "value") return s.filters.projectValue === activeFilter;
      if (activeCategory === "technology") return s.filters.technologies.includes(activeFilter as never);
      return s.filters.businessOutcome === activeFilter;
    });
  }, [allStudies, activeCategory, activeFilter]);

  const handleCategoryChange = (cat: FilterCategory) => {
    setActiveCategory(cat);
    setActiveFilter("All");
  };

  return (
    <>
      <PageHero
        eyebrow="Trust Layer"
        title={
          <>
            Case studies with <AccentGradient>verified business impact</AccentGradient>
          </>
        }
        description="How Maxwell Electrodeal helps operators improve efficiency, automate operations, and accelerate growth — with outcomes leadership teams can audit."
        below={
          <HubMetrics
            className="gap-3"
            stats={[
              { value: `${caseStudyStats.totalProjects}+`, label: "Documented Case Studies" },
              { value: caseStudyStats.averageRoi, label: "Average ROI" },
              { value: `${caseStudyStats.industriesServed}+`, label: "Industries Served" },
              { value: caseStudyStats.revenueImpact, label: "Revenue Impact" },
            ]}
          />
        }
      >
        <Button href="/contact" size="lg">
          Book Strategy Call <ArrowRight />
        </Button>
      </PageHero>

      <PageSection tone="elevated">
        <ClientLogoCloud mode="placeholder" />
      </PageSection>

      <PageSection aria-label="Case studies">
        <SectionHeader
          title="Enterprise case studies"
          description={`${filteredStudies.length} case stud${filteredStudies.length !== 1 ? "ies" : "y"}`}
          action={
            <FilterCategoryTabs
              categories={Object.keys(categoryLabels) as FilterCategory[]}
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {filteredStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <p className="mt-12 text-center text-body">No case studies match this filter. Try another category.</p>
        )}
      </PageSection>
    </>
  );
}
