import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticSeoPage } from "@/components/seo/ProgrammaticSeoPage";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { compareSlugs, getComparePage } from "@/lib/seo/programmatic/build-pages";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return compareSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparePage(slug);
  if (!page) return { robots: { index: false, follow: false } };
  return buildSeoMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
  });
}

export default async function CompareSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getComparePage(slug);
  if (!page) notFound();
  return <ProgrammaticSeoPage page={page} />;
}
