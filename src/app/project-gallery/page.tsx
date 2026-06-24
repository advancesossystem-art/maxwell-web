import { ProjectGalleryPage } from "@/components/work/ProjectGalleryPage";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Project Gallery — ERP, CRM, Mobile & Web Delivery Proof",
  description:
    "Maxwell project gallery: ERP dashboards, CRM systems, mobile apps, web platforms, and automation — with problem, solution, technology, timeline, and business outcomes.",
  path: "/project-gallery",
  keywords: ["ERP dashboard", "CRM dashboard", "mobile app portfolio", "software development projects"],
  noIndex: true,
});

export default function ProjectGalleryRoute() {
  return <ProjectGalleryPage />;
}
