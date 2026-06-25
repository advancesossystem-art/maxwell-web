import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticSeoPage } from "@/components/seo/ProgrammaticSeoPage";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { getCityServicePage, cityServiceParams } from "@/lib/seo/programmatic/build-pages";

type PageProps = { params: Promise<{ country: string; city: string; service: string }> };

/** Thin noindex pages — on-demand only to keep builds fast; indexable overrides are prebuilt. */
export const dynamicParams = true;

export async function generateStaticParams() {
  return cityServiceParams.filter(({ country, city, service }) => {
    const page = getCityServicePage(country, city, service);
    return page && !page.noIndex;
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country, city, service } = await params;
  const page = getCityServicePage(country, city, service);
  if (!page) return { robots: { index: false, follow: false } };
  return buildSeoMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    noIndex: page.noIndex,
  });
}

export default async function CityServicePage({ params }: PageProps) {
  const { country, city, service } = await params;
  const page = getCityServicePage(country, city, service);
  if (!page) notFound();
  return <ProgrammaticSeoPage page={page} />;
}
