import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLandingPage } from "@/components/industries/IndustryLandingPage";
import { createIndustryMetadata } from "@/lib/metadata";
import { getIndustryBySlug, industrySlugs } from "@/lib/industries-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** No static pre-build — all dynamic industry pages are noindexed; use hand-written /industries/chemical-manufacturing etc. */
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return { robots: { index: false, follow: false } };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  return <IndustryLandingPage industry={industry} />;
}
