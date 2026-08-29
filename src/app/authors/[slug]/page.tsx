import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorPageContent } from "@/components/content/AuthorPageContent";
import { getAuthorBySlug, authors } from "@/lib/content/authors";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return { robots: { index: false, follow: false } };
  return createMetadata({
    title: `${author.name} — ${author.role}`,
    description: `${author.name}, ${author.role} at Maxwell Electrodeal. ${author.specialization}. ${author.bio.slice(0, 120)}…`,
    path: `/authors/${author.slug}`,
  });
}

export default async function AuthorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();
  return <AuthorPageContent author={author} />;
}
