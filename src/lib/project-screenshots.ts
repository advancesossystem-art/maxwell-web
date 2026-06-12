import type { ProjectScreenshot } from "@/components/work/ProjectScreenshotSlots";
import type { ProjectData } from "@/lib/projects-data";

const mockCategoryMap: Record<string, ProjectScreenshot["category"]> = {
  dashboard: "dashboard",
  erp: "erp",
  analytics: "dashboard",
  mobile: "mobile",
  saas: "web",
  lms: "web",
  map: "web",
  safety: "automation",
  construction: "web",
};

/** Screenshot slots for a project — src populated when real assets exist in /public. */
export function getProjectScreenshotSlots(project: ProjectData): ProjectScreenshot[] {
  return project.gallery.map((item) => ({
    src: project.screenshots?.find((s) => s.label === item.label)?.src,
    alt: `${project.title} — ${item.label}`,
    caption: item.label,
    category: mockCategoryMap[item.mockType] ?? "web",
  }));
}
