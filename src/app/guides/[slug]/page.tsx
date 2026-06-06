import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideDetailPage } from "@/components/content/GuideDetailPage";
import { buildArticleMetadata } from "@/lib/seo-helpers";
import { getGuideBySlug, guideSlugs } from "@/lib/content/guides";
import { getAuthorById } from "@/lib/content/authors";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  const author = getAuthorById(guide.authorId);
  return buildArticleMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
    publishedAt: guide.publishedAt,
    authorName: author?.name ?? "Maxwell Team",
    tags: guide.tags,
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  return <GuideDetailPage guide={guide} />;
}
