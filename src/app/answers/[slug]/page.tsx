import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnswerDetailPage } from "@/components/answers/AnswerDetailPage";
import { buildArticleMetadata } from "@/lib/seo-helpers";
import { answerSlugs, getAnswerBySlug } from "@/lib/answers-data";
import { getContentAuthor } from "@/lib/content/resolve-author";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return answerSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const answer = getAnswerBySlug(slug);
  if (!answer) return { robots: { index: false, follow: false } };
  const author = getContentAuthor(answer.authorId, answer.category);
  return buildArticleMetadata({
    title: answer.metaTitle,
    description: answer.metaDescription,
    path: `/answers/${answer.slug}`,
    publishedAt: answer.publishedAt,
    updatedAt: answer.updatedAt,
    authorName: author.name,
    tags: [answer.category, "Maxwell Answers"],
  });
}

export default async function AnswerPage({ params }: PageProps) {
  const { slug } = await params;
  const answer = getAnswerBySlug(slug);
  if (!answer) notFound();
  return <AnswerDetailPage answer={answer} />;
}
