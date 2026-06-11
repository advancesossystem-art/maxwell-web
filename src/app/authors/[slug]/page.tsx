import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorPageContent } from "@/components/content/AuthorPageContent";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { authors, getAuthorBySlug } from "@/lib/content/authors";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return { robots: { index: false, follow: false } };
  return buildPageMetadata({
    title: `${author.name} — Author`,
    description: author.bio,
    path: `/authors/${author.slug}`,
    keywords: author.expertise,
  });
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();
  return <AuthorPageContent author={author} />;
}
