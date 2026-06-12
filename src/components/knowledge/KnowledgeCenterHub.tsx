import Link from "next/link";
import { knowledgeHubLinks, knowledgePillars } from "@/lib/knowledge-center-data";
import { industryStatistics } from "@/lib/statistics-data";
import { SourcedStatisticsGrid } from "@/components/authority/SourcedStatistic";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";

export function KnowledgeCenterHub() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title={
          <>
            Maxwell <AccentGradient>authority hub</AccentGradient>
          </>
        }
        description="Central source for ERP, CRM, AI, automation, digital transformation, and manufacturing technology — guides, research, answers, and tools."
      >
        <div className="flex flex-wrap gap-2">
          {knowledgeHubLinks.map((link) => (
            <Link key={link.href} href={link.href} className="v6-chip v6-chip--pill hover:border-brand-500/50">
              {link.label}
            </Link>
          ))}
        </div>
      </PageHero>

      <PageSection>
        <SectionHeader
          title="Knowledge pillars"
          description="Deep expertise organized by domain — each pillar links to guides, reports, tools, and answers."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {knowledgePillars.map((pillar) => (
            <Card key={pillar.id} padding="lg" interactive={false} className="flex flex-col">
              <Link href={pillar.href}>
                <H3 className="hover:text-brand-400 transition-colors">{pillar.title}</H3>
              </Link>
              <Caption className="mt-2 flex-1">{pillar.description}</Caption>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {pillar.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-brand-600 hover:text-brand-500">
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[var(--v6-bg-soft)]">
        <SourcedStatisticsGrid stats={industryStatistics.slice(0, 6)} title="Key industry statistics" />
      </PageSection>
    </>
  );
}
