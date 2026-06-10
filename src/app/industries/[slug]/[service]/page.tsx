import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticSeoPage } from "@/components/seo/ProgrammaticSeoPage";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { getIndustryServicePage } from "@/lib/seo/programmatic/build-pages";

type PageProps = { params: Promise<{ slug: string; service: string }> };

/** Thin noindex pages — on-demand only to keep builds fast */
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: industry, service } = await params;
  const page = getIndustryServicePage(industry, service);
  if (!page) return {};
  return buildSeoMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    noIndex: page.noIndex,
  });
}

export default async function IndustryServicePage({ params }: PageProps) {
  const { slug: industry, service } = await params;
  const page = getIndustryServicePage(industry, service);
  if (!page) notFound();
  return <ProgrammaticSeoPage page={page} />;
}
