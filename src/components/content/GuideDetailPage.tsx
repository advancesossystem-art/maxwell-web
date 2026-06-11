import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { AuthorCard } from "@/components/content/AuthorCard";
import { NewsletterSignup } from "@/components/content/NewsletterSignup";
import { ContentPageJsonLd } from "@/components/seo/JsonLd";
import { getAuthorById } from "@/lib/content/authors";
import { formatPublishDate } from "@/lib/content/utils";
import type { Guide } from "@/lib/content/schema";

export function GuideDetailPage({ guide }: { guide: Guide }) {
  const author = getAuthorById(guide.authorId);

  return (
    <>
      <ContentPageJsonLd
        type="guide"
        title={guide.metaTitle}
        description={guide.metaDescription}
        path={`/guides/${guide.slug}`}
        publishedAt={guide.publishedAt}
        authorId={guide.authorId}
        faqs={guide.faqs}
      />
      <section className="relative overflow-hidden bg-[#030712] pb-16 pt-28 lg:pt-36">
        <Container>
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/guides" className="hover:text-white">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{guide.title}</span>
          </nav>
          <h1 className="max-w-4xl font-display text-4xl font-bold text-white">{guide.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/55">{guide.excerpt}</p>
          <p className="mt-4 text-sm text-white/50">{guide.readingTimeMinutes} min read · {formatPublishDate(guide.publishedAt)}</p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-28 rounded-2xl border border-border p-6">
                <p className="text-xs font-semibold uppercase text-muted">Chapters</p>
                <ol className="mt-4 space-y-2 text-sm">
                  {guide.chapters.map((ch, i) => (
                    <li key={ch.id}>
                      <a href={`#${ch.id}`} className="text-muted hover:text-brand-600">
                        {i + 1}. {ch.title}
                      </a>
                    </li>
                  ))}
                </ol>
                {guide.downloadMagnetId && (
                  <div className="mt-8">
                    <NewsletterSignup magnetId={guide.downloadMagnetId} contentSlug={guide.slug} source="guide-download" variant="compact" />
                  </div>
                )}
              </div>
            </aside>
            <article className="lg:col-span-9">
              <ContentRenderer blocks={guide.sections} />
            </article>
          </div>
        </Container>
      </section>

      {author && (
        <section className="border-t border-border py-12">
          <Container className="max-w-3xl">
            <AuthorCard author={author} variant="full" />
          </Container>
        </section>
      )}
    </>
  );
}
