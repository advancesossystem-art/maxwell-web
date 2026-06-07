import Link from "next/link";
import { Card } from "@/components/design/Card";
import { H3, Caption } from "@/components/design/typography";
import { InlineCTA } from "@/components/conversion/InlineCTA";
import { TertiaryCTA } from "@/components/conversion/TertiaryCTA";
import { CTA_LABELS, CONVERSION_ROUTES } from "@/lib/conversion-copy";
import type { ProjectData, ProjectIndustry, ProjectType } from "@/lib/projects-data";

const industryToSlug: Record<ProjectIndustry, string> = {
  Manufacturing: "manufacturing",
  Healthcare: "healthcare",
  Education: "education",
  Logistics: "logistics",
  Retail: "retail",
  Construction: "construction",
};

const projectTypeToServiceSlug: Record<ProjectType, string> = {
  Website: "website-development",
  Software: "custom-software-development",
  "Mobile App": "mobile-app-development",
  ERP: "erp-development",
  CRM: "crm-development",
  AI: "ai-solutions",
  SaaS: "saas-development",
  Cloud: "cloud-solutions",
};

const projectToCaseStudy: Partial<Record<string, string>> = {
  "manufacturing-erp-platform": "manufacturing-erp",
  "healthcare-management-system": "healthcare-management",
  "logistics-tracking-platform": "logistics-platform",
  "educational-learning-portal": "educational-portal",
  "retail-analytics-dashboard": "retail-analytics",
  "construction-project-management": "construction-platform",
  "ai-safety-monitoring-system": "ai-safety-monitoring",
  "saas-workforce-management": "saas-workforce-management",
};

type WorkConversionBlockProps = {
  project: ProjectData;
  relatedCaseStudySlug?: string;
};

export function WorkConversionBlock({ project, relatedCaseStudySlug }: WorkConversionBlockProps) {
  const context = { service: project.title, source: `work-${project.slug}` };
  const caseSlug = relatedCaseStudySlug ?? projectToCaseStudy[project.slug];
  const industrySlug = industryToSlug[project.industry];
  const serviceSlug = projectTypeToServiceSlug[project.projectType];

  return (
    <section className="section-py border-t border-border" aria-label="Project next steps">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 space-y-8">
        <InlineCTA
          title="Inspired by this project?"
          description="We'll scope a similar build with your workflows, integrations, and success metrics."
          context={context}
          location="work_conversion_block"
        />

        <Card interactive={false} padding="md" className="v6-card grid gap-4 sm:grid-cols-3">
          <div>
            <Caption className="font-semibold uppercase text-brand-500">Related service</Caption>
            <Link
              href={`/services/${serviceSlug}`}
              className="v6-inline-cta__title mt-2 block hover:text-brand-600"
            >
              {project.projectType}
            </Link>
          </div>
          <div>
            <Caption className="font-semibold uppercase text-brand-500">Industry</Caption>
            <Link
              href={`/industries/${industrySlug}`}
              className="v6-inline-cta__title mt-2 block hover:text-brand-600"
            >
              {project.industry}
            </Link>
          </div>
          <div>
            <Caption className="font-semibold uppercase text-brand-500">Proof</Caption>
            {caseSlug ? (
              <Link
                href={`/case-studies/${caseSlug}`}
                className="v6-inline-cta__title mt-2 block hover:text-brand-600"
              >
                {CTA_LABELS.tertiary}
              </Link>
            ) : (
              <Link
                href={CONVERSION_ROUTES.caseStudies}
                className="v6-inline-cta__title mt-2 block hover:text-brand-600"
              >
                {CTA_LABELS.tertiary}
              </Link>
            )}
          </div>
        </Card>

        <div className="flex justify-center">
          <TertiaryCTA location="work_related" />
        </div>
      </div>
    </section>
  );
}
