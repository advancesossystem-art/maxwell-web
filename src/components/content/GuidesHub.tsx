import { getAllGuides } from "@/lib/content/guides";
import { formatPublishDate } from "@/lib/content/utils";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";

export function GuidesHub() {
  const guides = getAllGuides();

  return (
    <>
      <PageHero
        eyebrow="Guides"
        title={
          <>
            Long-form <AccentGradient>engineering playbooks</AccentGradient>
          </>
        }
        description="Deep guides on ERP, AI, SaaS, mobile, and cloud — from discovery through production."
      />

      <PageSection>
        <div className="space-y-4">
          {guides.map((guide, i) => (
            <Card key={guide.slug} href={`/guides/${guide.slug}`} padding="lg" className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="font-display text-4xl font-bold text-white/10 sm:w-16 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <H3 className="group-hover:text-brand-400 transition-colors">{guide.title}</H3>
                <Caption className="mt-2 line-clamp-2">{guide.excerpt}</Caption>
                <Caption className="mt-2">
                  {guide.chapters.length} chapters · {guide.readingTimeMinutes} min ·{" "}
                  {formatPublishDate(guide.publishedAt)}
                </Caption>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>
    </>
  );
}
