import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { SolutionLandingPage } from "@/components/solutions/SolutionLandingPage";
import { createSolutionMetadata } from "@/lib/metadata";
import { getSolutionBySlug } from "@/lib/solutions-data";
import { WEBSITE_SOLUTION_SLUGS } from "@/lib/website-only";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...WEBSITE_SOLUTION_SLUGS].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!WEBSITE_SOLUTION_SLUGS.has(slug)) {
    return { robots: { index: false, follow: false } };
  }
  const solution = getSolutionBySlug(slug);
  if (!solution) return { robots: { index: false, follow: false } };
  return {
    ...createSolutionMetadata(solution),
    robots: { index: true, follow: true },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  if (!WEBSITE_SOLUTION_SLUGS.has(slug)) {
    redirect("/solutions/web-development-company-vadodara");
  }
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  return <SolutionLandingPage solution={solution} />;
}
