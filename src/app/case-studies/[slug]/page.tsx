import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetailPage } from "@/components/case-studies/CaseStudyDetailPage";
import { CaseStudyPageJsonLd } from "@/components/seo/JsonLd";
import { createCaseStudyMetadata } from "@/lib/metadata";
import { getCaseStudyBySlug, caseStudySlugs } from "@/lib/case-studies-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return createCaseStudyMetadata(study);
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  return (
    <>
      <CaseStudyPageJsonLd study={study} />
      <CaseStudyDetailPage study={study} />
    </>
  );
}
