import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticSeoPage } from "@/components/seo/ProgrammaticSeoPage";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { costSlugs, getCostPage } from "@/lib/seo/programmatic/build-pages";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return costSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCostPage(slug);
  if (!page) return { robots: { index: false, follow: false } };
  return buildSeoMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    absoluteTitle: true,
  });
}

export default async function CostSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getCostPage(slug);
  if (!page) notFound();
  return <ProgrammaticSeoPage page={page} />;
}
