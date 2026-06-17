"use client";

import { useState } from "react";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { CompanyCTA } from "@/components/company/CompanyCTA";
import { TeamCard, HiringBanner } from "@/components/company/TeamCard";
import { teamMembers, teamDepartments, teamDepartmentHighlights } from "@/lib/company-data";
import type { TeamDepartment } from "@/lib/company-data";
import { FilterPill } from "@/components/design/FilterPill";
import { H3, Text } from "@/components/design/typography";
import { Card } from "@/components/design/Card";
import { technologyExpertise } from "@/lib/company-data";

export function TeamPageContent() {
  const [filter, setFilter] = useState<TeamDepartment | "All">("All");
  const filtered = filter === "All" ? teamMembers : teamMembers.filter((m) => m.department === filter);

  return (
    <>
      <PageSection tone="elevated">
        <SectionHeader title="Practice leads" description="Accountability by discipline—not a single generic delivery pool." />
        <div className="grid gap-4 sm:grid-cols-2">
          {teamDepartmentHighlights.map((dept) => (
            <Card key={dept.department} interactive={false} padding="lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">{dept.department}</p>
              <H3 className="mt-2 text-base">{dept.headline}</H3>
              <Text className="mt-2">{dept.summary}</Text>
              <ul className="mt-4 space-y-1.5">
                {dept.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted">
                    • {h}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader title="Technology coverage" description="Stacks we ship in production—not slide decks." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyExpertise.map((cat) => (
            <Card key={cat.category} interactive={false} padding="md">
              <H3 className="text-sm text-brand-500">{cat.category}</H3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span key={item} className="v6-chip">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection tone="elevated">
        <SectionHeader title="Meet the team" />
        <div className="flex flex-wrap gap-2">
          <FilterPill label="All" active={filter === "All"} onClick={() => setFilter("All")} />
          {teamDepartments.map((dept) => (
            <FilterPill key={dept} label={dept} active={filter === dept} onClick={() => setFilter(dept)} />
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((member, i) => (
            <TeamCard key={`${member.role}-${member.department}-${i}`} member={member} index={i} />
          ))}
        </div>
        <div className="mt-16">
          <HiringBanner />
        </div>
      </PageSection>

      <CompanyCTA />
    </>
  );
}
