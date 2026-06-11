import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionLandingPage } from "@/components/solutions/SolutionLandingPage";
import { createSolutionMetadata } from "@/lib/metadata";
import { getSolutionBySlug, solutionSlugs } from "@/lib/solutions-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { robots: { index: false, follow: false } };

  return createSolutionMetadata(solution);
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  return <SolutionLandingPage solution={solution} />;
}
