import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { NewsletterSignup } from "@/components/content/NewsletterSignup";
import { RelatedContentRail } from "@/components/content/RelatedContentRail";
import { ContentPageJsonLd } from "@/components/seo/JsonLd";
import type { Resource } from "@/lib/content/schema";

export function ResourceDetailPage({ resource }: { resource: Resource }) {
  return (
    <>
      <ContentPageJsonLd
        type="resource"
        title={resource.title}
        description={resource.metaDescription}
        path={`/resources/${resource.slug}`}
        publishedAt={resource.publishedAt}
        authorId={resource.authorId}
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
          <p className="mt-4 text-sm text-white/50">{resource.format}</p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
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
    </>
  );
}
