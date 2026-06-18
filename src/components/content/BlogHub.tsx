import Link from "next/link";
import { ContentSearch } from "@/components/content/ContentSearch";
import { ContentCard } from "@/components/content/ContentCard";
import { NewsletterSignup } from "@/components/content/NewsletterSignup";
import { contentCategories } from "@/lib/content/categories";
import { buildSearchIndex, getFeaturedContent, getTrendingContent } from "@/lib/content/search";
import { getAllArticles } from "@/lib/content/articles";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { AccentGradient, Caption } from "@/components/design/typography";

export function BlogHub() {
  const articles = buildSearchIndex().filter((d) => d.type === "article");
  const featured = getFeaturedContent().filter((d) => d.type === "article");
  const trending = getTrendingContent().filter((d) => d.type === "article");
  const totalArticles = getAllArticles().filter((a) => !a.noIndex).length;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Software engineering <AccentGradient>thought leadership</AccentGradient>
          </>
        }
        description={`${totalArticles}+ in-depth articles on ERP, AI, cloud, SaaS, and digital transformation — from practitioners who ship production systems.`}
      />

      {featured.length > 0 && (
        <PageSection tone="elevated">
          <SectionHeader title="Featured" />
          <div className="grid gap-6 lg:grid-cols-3">
            {featured.slice(0, 3).map((doc) => (
              <ContentCard key={doc.slug} doc={doc} />
            ))}
          </div>
        </PageSection>
      )}

      {trending.length > 0 && (
        <PageSection>
          <SectionHeader title="Trending" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trending.map((doc) => (
              <ContentCard key={doc.slug} doc={doc} variant="compact" />
            ))}
          </div>
        </PageSection>
      )}

      <PageSection tone="elevated" aria-label="All articles">
        <ContentSearch
          documents={articles}
          categories={contentCategories.map((c) => ({ slug: c.slug, name: c.name }))}
        />
      </PageSection>

      <PageSection>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              title="Editorial standards"
              description="Content is published under the Maxwell Electrodeal brand and reviewed for delivery relevance, implementation accuracy, and business clarity."
            />
            <div className="rounded-2xl border border-border bg-surface-elevated p-6">
              <Caption>
                Maxwell publishes articles, guides, reports, and downloadable resources based on implementation
                experience across ERP, CRM, AI, cloud, mobile, and custom software delivery.
              </Caption>
            </div>
          </div>
          <NewsletterSignup />
        </div>
      </PageSection>

      <PageSection>
        <Caption>
          Explore{" "}
          <Link href="/guides" className="font-medium text-brand-500 hover:text-brand-400">
            long-form guides
          </Link>
          ,{" "}
          <Link href="/resources" className="font-medium text-brand-500 hover:text-brand-400">
            downloadable resources
          </Link>
          , and{" "}
          <Link href="/reports" className="font-medium text-brand-500 hover:text-brand-400">
            industry reports
          </Link>
          .
        </Caption>
      </PageSection>
    </>
  );
}
