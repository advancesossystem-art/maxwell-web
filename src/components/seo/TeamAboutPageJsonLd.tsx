import { JsonLd } from "@/components/seo/JsonLdScript";
import { siteConfig } from "@/lib/constants";
import { teamMembers } from "@/lib/company-data";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumbs";
import { buildPersonAuthorNode } from "@/lib/seo/organization-schema";
import { getAuthorById, getFounderAuthor } from "@/lib/content/authors";
import { seoIds } from "@/lib/seo/config";

/** E-E-A-T team page — Person entities for leadership and specialists. */
export function TeamAboutPageJsonLd() {
  const founder = getFounderAuthor();
  const leadership = teamMembers
    .filter((m) => m.department === "Leadership")
    .map((m) => {
      const author = getAuthorById(m.name.toLowerCase().replace(/\s+/g, "-"));
      if (author) return buildPersonAuthorNode(author);
      return {
        "@type": "Person" as const,
        name: m.name,
        jobTitle: m.role,
        description: m.bio,
        worksFor: { "@id": seoIds.organization },
      };
    });

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteConfig.url}/about/team#webpage`,
        name: "Maxwell Electrodeal Team",
        description: "Leadership and engineering team behind Maxwell Electrodeal custom software delivery.",
        url: `${siteConfig.url}/about/team`,
        mainEntity: founder ? buildPersonAuthorNode(founder) : undefined,
      },
      ...(founder ? [buildPersonAuthorNode(founder)] : []),
      ...leadership,
      buildBreadcrumbSchema(
        ["Home", "About", "Team"],
        [siteConfig.url, `${siteConfig.url}/about`, `${siteConfig.url}/about/team`],
      ),
    ].filter(Boolean),
  };

  return <JsonLd data={graph} />;
}
