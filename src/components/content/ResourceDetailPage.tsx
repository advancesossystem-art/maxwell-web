import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { AuthorCard } from "@/components/content/AuthorCard";
import { ContentAuthorByline } from "@/components/content/ContentAuthorByline";
import { TrustThisContent } from "@/components/content/TrustThisContent";
import { NewsletterSignup } from "@/components/content/NewsletterSignup";
import { RelatedContentRail } from "@/components/content/RelatedContentRail";
import { ContentPageJsonLd } from "@/components/seo/JsonLd";
import { GeoContentSection } from "@/components/authority/GeoContentSection";
import { StatisticsPanel } from "@/components/authority/StatisticsPanel";
import { ProofSignalsBar } from "@/components/trust/ProofSignalsBar";
import { buildResourceGeo } from "@/lib/geo-page-content";
import { getStatisticsForContentCategory } from "@/lib/statistics-data";
import { getContentAuthor } from "@/lib/content/resolve-author";
import type { Resource } from "@/lib/content/schema";

export function ResourceDetailPage({ resource }: { resource: Resource }) {
  const author = getContentAuthor(resource.authorId, resource.category);
  const geo = buildResourceGeo(resource);
  const cat =
    resource.category === "erp" || resource.category === "crm" || resource.category === "ai"
      ? resource.category
      : resource.category === "saas"
        ? "saas"
        : "software";
  const allStats = getStatisticsForContentCategory(cat);
  const stats = {
    industry: allStats.filter((s) => s.section === "industry").slice(0, 3),
    market: allStats.filter((s) => s.section === "market").slice(0, 3),
    benchmark: allStats.filter((s) => s.section === "benchmark").slice(0, 3),
  };

  return (
    <>
      <ContentPageJsonLd
        type="resource"
        title={resource.title}
        description={resource.metaDescription}
        path={`/resources/${resource.slug}`}
        publishedAt={resource.publishedAt}
        authorId={resource.authorId}
        category={resource.category}
        faqs={resource.faqs}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 pb-16 pt-28 lg:pt-36">
        <Container>
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/resources" className="hover:text-white">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{resource.title}</span>
          </nav>
          <span className="text-xs font-medium uppercase tracking-wider text-brand-400 capitalize">{resource.resourceType}</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-white">{resource.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/55">{resource.excerpt}</p>
          <p className="mt-2 text-sm text-white/50">{resource.format}</p>
          <div className="mt-4">
            <ContentAuthorByline
              authorId={resource.authorId}
              category={resource.category}
              publishedAt={resource.publishedAt}
              dark
            />
          </div>
        </Container>
      </section>

      <GeoContentSection geo={geo} />
      <StatisticsPanel {...stats} />
      <ProofSignalsBar />

      <section className="py-16">
        <Container>
          <div className="mb-10 max-w-3xl">
            <TrustThisContent category={resource.category} authorId={resource.authorId} contentType="resource" />
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-bold">What you&apos;ll get</h2>
              <ul className="mt-4 space-y-2">
                {resource.benefits.map((b) => (
                  <li key={b} className="flex gap-2 text-muted">
                    <span className="text-brand-600">✓</span> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-10 max-w-lg">
                <ContentRenderer blocks={resource.previewSections} />
              </div>
            </div>
            <div>
              <NewsletterSignup
                magnetId={resource.downloadMagnetId}
                contentSlug={resource.slug}
                source="resource-download"
              />
            </div>
          </div>
          <RelatedContentRail slug={resource.slug} type="resource" title="Related resources & guides" />
        </Container>
      </section>

      <section className="border-t border-border py-12">
        <Container className="max-w-3xl">
          <AuthorCard author={author} variant="full" />
        </Container>
      </section>
    </>
  );
}
