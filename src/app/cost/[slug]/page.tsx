import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticSeoPage } from "@/components/seo/ProgrammaticSeoPage";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { costSlugs, getCostPage } from "@/lib/seo/programmatic/build-pages";

type PageProps = { params: Promise<{ slug: string }> };

/** No static pre-build — cost pages are noindexed; use hand-written /cost/web-development-cost-vadodara etc. */
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCostPage(slug);
  if (!page) return { robots: { index: false, follow: false } };
  return { robots: { index: false, follow: false } };
}

export default async function CostSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getCostPage(slug);
  if (!page) notFound();
  return <ProgrammaticSeoPage page={page} />;
}
