import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticlePage } from "@/components/content/BlogArticlePage";
import { buildArticleMetadata } from "@/lib/seo-helpers";
import { getArticleBySlug, getIndexableArticleSlugs } from "@/lib/content/articles";
import { getContentAuthor } from "@/lib/content/resolve-author";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export async function generateStaticParams() {
  return getIndexableArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { robots: { index: false, follow: false } };
  const author = getContentAuthor(article.authorId, article.category);
  return buildArticleMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/blog/${article.slug}`,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    authorName: author.name,
    tags: article.tags,
    noIndex: article.noIndex,
    ogImage: article.ogImage,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return <BlogArticlePage article={article} />;
}
