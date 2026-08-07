import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { createServiceMetadata } from "@/lib/metadata";
import { getServiceBySlug, serviceSlugs } from "@/lib/services-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** No static pre-build — all dynamic service pages are noindexed; use hand-written service pages instead. */
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return { robots: { index: false, follow: false } };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceLandingPage service={service} />;
}
