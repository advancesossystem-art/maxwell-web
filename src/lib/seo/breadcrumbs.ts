import { siteConfig } from "@/lib/constants";

const SEGMENT_LABELS: Record<string, string> = {
  services: "Services",
  industries: "Industries",
  solutions: "Solutions",
  locations: "Locations",
  work: "Work",
  "case-studies": "Case Studies",
  blog: "Blog",
  tools: "Tools",
  compare: "Compare",
  cost: "Cost Guides",
  guides: "Guides",
  resources: "Resources",
  research: "Research",
  answers: "Answers",
  about: "About",
  contact: "Contact",
  company: "Company",
  team: "Team",
  process: "Process",
  careers: "Careers",
  videos: "Videos",
  reviews: "Reviews",
  security: "Security",
  search: "Search",
};

function humanizeSegment(segment: string): string {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Build breadcrumb labels and URLs from a pathname (e.g. /services/erp-development). */
export function buildBreadcrumbsFromPath(pathname: string): { name: string; item: string }[] {
  const normalized = pathname.replace(/\/$/, "") || "/";
  if (normalized === "/") return [{ name: "Home", item: siteConfig.url }];

  const segments = normalized.split("/").filter(Boolean);
  const crumbs: { name: string; item: string }[] = [{ name: "Home", item: siteConfig.url }];

  let path = "";
  for (const segment of segments) {
    path += `/${segment}`;
    crumbs.push({
      name: humanizeSegment(segment),
      item: `${siteConfig.url}${path}`,
    });
  }

  return crumbs;
}

export function buildBreadcrumbSchema(names: string[], urls: string[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: names.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: urls[index],
    })),
  };
}

export function buildBreadcrumbSchemaFromPath(pathname: string) {
  const crumbs = buildBreadcrumbsFromPath(pathname);
  return buildBreadcrumbSchema(
    crumbs.map((c) => c.name),
    crumbs.map((c) => c.item),
  );
}
