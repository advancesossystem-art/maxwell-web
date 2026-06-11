import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLandingPage } from "@/components/industries/IndustryLandingPage";
import { createIndustryMetadata } from "@/lib/metadata";
import { getIndustryBySlug, industrySlugs } from "@/lib/industries-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { robots: { index: false, follow: false } };
  return createIndustryMetadata(industry);
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  return <IndustryLandingPage industry={industry} />;
}
