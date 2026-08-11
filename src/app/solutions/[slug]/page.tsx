import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionLandingPage } from "@/components/solutions/SolutionLandingPage";
import { createSolutionMetadata } from "@/lib/metadata";
import { getSolutionBySlug } from "@/lib/solutions-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Money-page solution slugs that must stay indexable.
 * Hand-written routes (vadodara, seo-*) live in their own folders — this allowlist
 * covers geo pages that still use the dynamic SolutionLandingPage template.
 */
const INDEXABLE_SOLUTION_SLUGS = new Set([
  "web-development-company-gujarat",
  "web-development-company-india",
]);

export async function generateStaticParams() {
  return [...INDEXABLE_SOLUTION_SLUGS].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { robots: { index: false, follow: false } };

  const meta = createSolutionMetadata(solution);
  if (INDEXABLE_SOLUTION_SLUGS.has(slug)) {
    return {
      ...meta,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  // Thin programmatic solutions stay noindex
  return { ...meta, robots: { index: false, follow: false } };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  return <SolutionLandingPage solution={solution} />;
}
