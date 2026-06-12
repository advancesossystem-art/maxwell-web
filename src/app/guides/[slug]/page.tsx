import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideDetailPage } from "@/components/content/GuideDetailPage";
import { buildArticleMetadata } from "@/lib/seo-helpers";
import { getGuideBySlug, guideSlugs } from "@/lib/content/guides";
import { getContentAuthor } from "@/lib/content/resolve-author";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { robots: { index: false, follow: false } };
  const author = getContentAuthor(guide.authorId, guide.category);
  return buildArticleMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
    publishedAt: guide.publishedAt,
    updatedAt: guide.updatedAt,
    authorName: author.name,
    tags: guide.tags,
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  return <GuideDetailPage guide={guide} />;
}
