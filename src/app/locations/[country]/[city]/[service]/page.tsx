import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticSeoPage } from "@/components/seo/ProgrammaticSeoPage";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { cityServiceParams, getCityServicePage } from "@/lib/seo/programmatic/build-pages";

type PageProps = { params: Promise<{ country: string; city: string; service: string }> };

export async function generateStaticParams() {
  return cityServiceParams.map(({ country, city, service }) => ({ country, city, service }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country, city, service } = await params;
  const page = getCityServicePage(country, city, service);
  if (!page) return {};
  return buildSeoMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
  });
}

export default async function CityServicePage({ params }: PageProps) {
  const { country, city, service } = await params;
  const page = getCityServicePage(country, city, service);
  if (!page) notFound();
  return <ProgrammaticSeoPage page={page} />;
}
