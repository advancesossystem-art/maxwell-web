import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionLandingPage } from "@/components/solutions/SolutionLandingPage";
import { createSolutionMetadata } from "@/lib/metadata";
import { getSolutionBySlug, solutionSlugs } from "@/lib/solutions-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** No static pre-build — these programmatic solution pages are noindexed to keep authority focused on hand-written money pages. */
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { robots: { index: false, follow: false } };
  // All programmatic solution pages are noindex — use dedicated hand-written pages instead
  return { ...createSolutionMetadata(solution), robots: { index: false, follow: false } };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  return <SolutionLandingPage solution={solution} />;
}
