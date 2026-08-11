import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { createServiceMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/services-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Hand-written service folders win; these dynamic slugs stay in the money sitemap. */
const INDEXABLE_SERVICE_SLUGS = new Set(["website-development"]);

export async function generateStaticParams() {
  return [...INDEXABLE_SERVICE_SLUGS].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { robots: { index: false, follow: false } };
  if (INDEXABLE_SERVICE_SLUGS.has(slug)) {
    return createServiceMetadata(service);
  }
  return { robots: { index: false, follow: false } };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceLandingPage service={service} />;
}
