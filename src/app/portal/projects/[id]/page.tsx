import { PortalProjectDetail } from "@/components/portal/PortalProjectDetail";
import { mockProjects } from "@/lib/portal/mock-data";
import { buildPageMetadata } from "@/lib/seo-helpers";

export function generateStaticParams() {
  return mockProjects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const project = mockProjects.find((p) => p.id === id);
    return buildPageMetadata({
      title: project ? `${project.name} — Project` : "Project",
      description: `Project overview for ${project?.name ?? "engagement"}`,
      path: `/portal/projects/${id}`,
      noIndex: true,
    });
  });
}

export default async function PortalProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <PortalProjectDetail projectId={id} />;
}
