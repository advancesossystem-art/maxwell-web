import Link from "next/link";
import { ProjectScreenshotSlots } from "@/components/work/ProjectScreenshotSlots";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { H3, Caption } from "@/components/design/typography";
import { projectsData, projectSlugs } from "@/lib/projects-data";
import { getProjectScreenshotSlots } from "@/lib/project-screenshots";
import type { ProjectType } from "@/lib/projects-data";

const galleryCategories: { id: string; label: string; types: ProjectType[] }[] = [
  { id: "erp", label: "ERP Dashboards", types: ["ERP"] },
  { id: "crm", label: "CRM Dashboards", types: ["CRM"] },
  { id: "mobile", label: "Mobile Apps", types: ["Mobile App"] },
  { id: "web", label: "Web Platforms", types: ["Website", "Software", "SaaS"] },
  { id: "automation", label: "Automation Systems", types: ["AI", "Cloud"] },
];

export function ProjectGalleryPage() {
  const projects = projectSlugs
    .map((slug) => projectsData[slug])
    .filter((p) => p && !p.noIndex);

  return (
    <>
      <PageHero
        eyebrow="Project gallery"
        title="Real project delivery — proof framework"
        description="ERP dashboards, CRM systems, mobile apps, web platforms, and automation — problem, solution, technology, timeline, and outcomes. Screenshot slots fill when client-approved assets are published."
      />

      <PageSection>
        {galleryCategories.map((category) => {
          const items = projects.filter((p) => category.types.includes(p.projectType));
          if (items.length === 0) return null;

          return (
            <div key={category.id} className="mb-16 last:mb-0">
              <h2 className="font-display text-2xl font-bold">{category.label}</h2>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {items.map((project) => (
                  <Card key={project.slug} padding="lg" interactive={false}>
                    <ProjectScreenshotSlots
                      screenshots={getProjectScreenshotSlots(project).slice(0, 1)}
                      projectTitle={project.title}
                    />
                    <H3 className="mt-4">
                      <Link href={`/work/${project.slug}`} className="hover:text-brand-400">
                        {project.title}
                      </Link>
                    </H3>
                    <Caption className="mt-2 line-clamp-2">{project.subtitle}</Caption>

                    <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="font-semibold text-[var(--v6-text)]">Problem</dt>
                        <dd className="mt-1 text-muted line-clamp-3">{project.businessChallenge}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-[var(--v6-text)]">Solution</dt>
                        <dd className="mt-1 text-muted line-clamp-3">{project.solutionStrategy}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-[var(--v6-text)]">Technology</dt>
                        <dd className="mt-1 text-muted">{project.technologies.slice(0, 4).join(", ")}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-[var(--v6-text)]">Timeline</dt>
                        <dd className="mt-1 text-muted">{project.duration}</dd>
                      </div>
                    </dl>

                    <p className="mt-4 text-sm font-medium text-brand-600">{project.heroResult}</p>
                    <Link href={`/work/${project.slug}`} className="mt-4 inline-block text-sm text-brand-600 hover:text-brand-500">
                      View full project →
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </PageSection>
    </>
  );
}
