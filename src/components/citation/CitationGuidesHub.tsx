import { citationGuides } from "@/lib/citation-guides-data";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";

export function CitationGuidesHub() {
  return (
    <>
      <PageHero
        eyebrow="Citation guides"
        title={
          <>
            Definitive resources for <AccentGradient>AI citation</AccentGradient>
          </>
        }
        description="Checklists, buyer guides, roadmaps, and playbooks structured for search engines and answer engines — each linked to in-depth Maxwell content."
      />

      <PageSection>
        <div className="grid gap-6 md:grid-cols-2">
          {citationGuides.map((guide) => (
            <Card key={guide.slug} href={guide.href} padding="lg">
              <div className="flex gap-2">
                <span className="v6-chip">{guide.category}</span>
                <span className="v6-chip v6-chip--pill capitalize">{guide.format}</span>
              </div>
              <H3 className="mt-4 group-hover:text-brand-400 transition-colors">{guide.title}</H3>
              <Caption className="mt-3">{guide.description}</Caption>
            </Card>
          ))}
        </div>
      </PageSection>
    </>
  );
}
