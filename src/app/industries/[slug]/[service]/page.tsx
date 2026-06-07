import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticSeoPage } from "@/components/seo/ProgrammaticSeoPage";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { getIndustryServicePage, industryServiceParams } from "@/lib/seo/programmatic/build-pages";

type PageProps = { params: Promise<{ slug: string; service: string }> };

export async function generateStaticParams() {
  return industryServiceParams.map(({ industry, service }) => ({ slug: industry, service }));
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
  });
}

export default async function IndustryServicePage({ params }: PageProps) {
  const { slug: industry, service } = await params;
  const page = getIndustryServicePage(industry, service);
  if (!page) notFound();
  return <ProgrammaticSeoPage page={page} />;
}
