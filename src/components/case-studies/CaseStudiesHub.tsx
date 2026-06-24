"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import {
  getFeaturedCaseStudies,
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
import { FilterCategoryTabs, FilterPill } from "@/components/design/FilterPill";
import { ClientLogoCloud } from "@/components/trust/ClientLogoCloud";
import { csDarkEyebrow, csDarkSection } from "@/components/case-studies/case-study-theme";
import { CaseStudyBehindTheWork } from "@/components/case-studies/CaseStudyBehindTheWork";
import { Container } from "@/components/ui/Container";

type FilterCategory = "industry" | "service" | "value" | "technology" | "outcome";

const categoryLabels: Record<FilterCategory, string> = {
  industry: "Industry",
  service: "Service",
  value: "Project Value",
  technology: "Technology",
  outcome: "Business Outcome",
};

export function CaseStudiesHub() {
  const allStudies = getFeaturedCaseStudies();
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
        eyebrow="Outcomes & Business Impact"
        title={
          <>
            Business outcomes from <AccentGradient>real client projects</AccentGradient>
          </>
        }
        description="Documented results from 8 end-to-end projects across manufacturing, healthcare, logistics, and more — with measurable ROI, timelines, and delivery context."
      >
        <Button href="/contact" size="lg">
          Book Strategy Call <ArrowRight />
        </Button>
      </PageHero>

      <section className={`${csDarkSection} border-t border-white/[0.06]`}>
        <Container>
          <p className={csDarkEyebrow}>Portfolio impact</p>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { value: `${caseStudyStats.documentedOutcomes}`, label: "Documented Project Outcomes" },
              { value: caseStudyStats.averageRoi, label: "Average ROI Timeline" },
              { value: `${caseStudyStats.industriesRepresented}`, label: "Industries Represented" },
              { value: `${caseStudyStats.featuredStudies}`, label: "Featured Case Studies" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i % 2 === 0
                    ? "rounded-2xl bg-white p-5 shadow-lg shadow-black/20"
                    : "glass-dark rounded-2xl border border-white/[0.06] p-5"
                }
              >
                <p className="font-display text-2xl font-bold text-[#4f46e5] sm:text-3xl">{stat.value}</p>
                <p className={`mt-1 text-sm font-medium ${i % 2 === 0 ? "text-[var(--v6-text)]" : "text-white"}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

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

      <CaseStudyBehindTheWork />
    </>
  );
}
