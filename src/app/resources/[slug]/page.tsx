import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceDetailPage } from "@/components/content/ResourceDetailPage";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getResourceBySlug, resourceSlugs } from "@/lib/content/resources";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return resourceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return buildPageMetadata({
    title: resource.metaTitle,
    description: resource.metaDescription,
    path: `/resources/${resource.slug}`,
    keywords: resource.tags,
  });
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();
  return <ResourceDetailPage resource={resource} />;
}
