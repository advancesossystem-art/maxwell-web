import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ReadingProgressBar } from "@/components/content/ReadingProgressBar";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { ContentCard } from "@/components/content/ContentCard";
import { RelatedContent } from "@/components/content/RelatedContent";
import { NewsletterSignup } from "@/components/content/NewsletterSignup";
import { ArticlePageJsonLd } from "@/components/seo/JsonLd";
import { GeoDefinitionBlock } from "@/components/authority/GeoDefinitionBlock";
import { GeoKeyTakeaways, buildTakeawaysFromFaqs } from "@/components/authority/GeoKeyTakeaways";
import { TrustThisContent } from "@/components/content/TrustThisContent";
import { getCategoryBySlug } from "@/lib/content/categories";
import { formatPublishDate } from "@/lib/content/utils";
import { getRelatedContent } from "@/lib/content/search";
import { StickyEstimateCTA } from "@/components/common/StickyEstimateCTA";
import type { Article } from "@/lib/content/schema";

export function BlogArticlePage({ article }: { article: Article }) {
  const category = getCategoryBySlug(article.category);
  const related = getRelatedContent(article.slug, "article", article.relatedSlugs);
  const takeaways = buildTakeawaysFromFaqs(article.faqs, 4);

  return (
    <>
      <ReadingProgressBar />
      <ArticlePageJsonLd article={article} />
      <section className="relative overflow-hidden bg-[#030712] pb-16 pt-28 lg:pt-36">
        <Container className="relative">
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{article.title}</span>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">{category?.name}</span>
          <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{article.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/55">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span>Maxwell Electrodeal</span>
            <span>{formatPublishDate(article.publishedAt)}</span>
            <span>{article.readingTimeMinutes} min read</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                {tag}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <aside className="lg:col-span-3">
                <div className="sticky top-28 rounded-2xl border border-border bg-surface-elevated p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">On this page</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {article.tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="text-muted hover:text-brand-600 transition-colors">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
            <article className={`space-y-10 ${article.tableOfContents?.length ? "lg:col-span-9" : "lg:col-span-12 max-w-3xl"}`}>
              <TrustThisContent category={article.category} authorId={article.authorId} contentType="article" />
              <GeoDefinitionBlock term={`What is ${article.title.replace(/\?$/, "")}?`} definition={article.excerpt} />
              {takeaways.length > 0 ? <GeoKeyTakeaways items={takeaways} /> : null}
              <ContentRenderer blocks={article.sections} />
            </article>
          </div>
        </Container>
      </section>

      {article.faqs && article.faqs.length > 0 && (
        <section className="bg-surface py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold">FAQ</h2>
            <div className="mt-6 space-y-3">
              {article.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-border bg-surface-elevated open:border-brand-600/20">
                  <summary className="cursor-pointer px-6 py-4 font-medium">{faq.question}</summary>
                  <p className="px-6 pb-4 text-sm text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16">
          <Container>
            <RelatedContent
              slug={article.slug}
              type="article"
              relatedSlugs={article.relatedSlugs}
            />
          </Container>
        </section>
      )}

      <section className="bg-surface py-16">
        <Container className="max-w-xl">
          <NewsletterSignup />
        </Container>
      </section>
      <StickyEstimateCTA source="blog" />
    </>
  );
}
