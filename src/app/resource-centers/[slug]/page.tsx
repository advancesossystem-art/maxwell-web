import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceCenterPage } from "@/components/resource-centers/ResourceCenterPage";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getResourceCenterBySlug, resourceCenterSlugs } from "@/lib/resource-centers-data";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return resourceCenterSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const center = getResourceCenterBySlug(slug);
  if (!center) return { robots: { index: false, follow: false } };
  return buildPageMetadata({
    title: center.metaTitle,
    description: center.metaDescription,
    path: `/resource-centers/${center.slug}`,
  });
}

export default async function IndustryResourceCenterRoute({ params }: PageProps) {
  const { slug } = await params;
  const center = getResourceCenterBySlug(slug);
  if (!center) notFound();
  return <ResourceCenterPage center={center} />;
}
