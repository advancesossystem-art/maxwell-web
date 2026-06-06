import { getAllResources } from "@/lib/content/resources";
import { getCategoryBySlug } from "@/lib/content/categories";
import { formatPublishDate } from "@/lib/content/utils";
import { NewsletterSignup } from "@/components/content/NewsletterSignup";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";

export function ResourcesHub() {
  const resources = getAllResources();

  return (
    <>
      <PageHero
        eyebrow="Resource Center"
        title={
          <>
            Practical tools for <AccentGradient>software leaders</AccentGradient>
          </>
        }
        description="Checklists, frameworks, and templates from Maxwell engineering teams — free with email signup."
      />

      <PageSection tone="elevated">
        <div className="grid gap-6 sm:grid-cols-2">
          {resources.map((resource) => {
            const cat = getCategoryBySlug(resource.category);
            return (
              <Card key={resource.slug} href={`/resources/${resource.slug}`} padding="lg">
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-md border border-brand-500/25 bg-brand-500/10 px-2 py-1 text-xs font-medium capitalize text-brand-400">
                    {resource.resourceType}
                  </span>
                  <Caption>{resource.format}</Caption>
                </div>
                <H3 className="mt-4 group-hover:text-brand-400 transition-colors">{resource.title}</H3>
                <Caption className="mt-2 line-clamp-2">{resource.excerpt}</Caption>
                <Caption className="mt-4">
                  {cat?.name} · {formatPublishDate(resource.publishedAt)}
                </Caption>
                {resource.gated && (
                  <p className="mt-3 text-xs font-medium text-brand-500">Free download →</p>
                )}
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection>
        <div className="mx-auto max-w-xl">
          <NewsletterSignup source="resource-hub" />
        </div>
      </PageSection>
    </>
  );
}
