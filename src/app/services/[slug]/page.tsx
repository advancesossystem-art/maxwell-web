import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { createServiceMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/services-data";
import { WEBSITE_SERVICE_SLUGS } from "@/lib/website-only";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...WEBSITE_SERVICE_SLUGS].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!WEBSITE_SERVICE_SLUGS.has(slug)) {
    return { robots: { index: false, follow: false } };
  }
  const service = getServiceBySlug(slug);
  if (!service) return { robots: { index: false, follow: false } };
  return createServiceMetadata(service);
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  if (!WEBSITE_SERVICE_SLUGS.has(slug)) {
    redirect("/services/website-development");
  }
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceLandingPage service={service} />;
}
