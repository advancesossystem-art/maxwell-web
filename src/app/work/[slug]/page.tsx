import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/work/ProjectDetailPage";
import { ProjectPageJsonLd } from "@/components/seo/JsonLd";
import { createProjectMetadata } from "@/lib/metadata";
import { getProjectBySlug, projectSlugs } from "@/lib/projects-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { robots: { index: false, follow: false } };
  if (project.noIndex) {
    return {
      ...createProjectMetadata(project),
      robots: { index: false, follow: true },
    };
  }
  return createProjectMetadata(project);
}

export default async function WorkProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <ProjectPageJsonLd project={project} />
      <ProjectDetailPage project={project} />
    </>
  );
}
