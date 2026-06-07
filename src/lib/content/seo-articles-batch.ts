import type { Article } from "./schema";
import { createArticle } from "./article-factory";
import { programmaticIndustries, programmaticServices } from "../seo/programmatic/catalog";

/** Programmatic SEO blog articles — industry × service thought leadership */
export function buildSeoArticlesBatch(): Article[] {
  const articles: Article[] = [];
  const date = "2026-06-07";

  for (const industry of programmaticIndustries) {
    for (const service of programmaticServices.slice(0, 4)) {
      const slug = `${service.key}-for-${industry.slug}-india`;
      if (slug.length > 80) continue;
      articles.push(
        createArticle({
          slug,
          title: `How ${service.label} Transforms ${industry.name} in India`,
          excerpt: `${service.shortLabel} for ${industry.name}: workflows, compliance (${industry.compliance}), and ROI for Indian ${industry.focus}.`,
          metaDescription: `${service.label} for ${industry.name} in India—${industry.painPoints[0]}. Implementation guide from Maxwell Electrodeal.`,
          category:
            service.key === "erp"
              ? "erp"
              : service.key === "crm"
                ? "crm"
                : service.key === "ai"
                  ? "ai"
                  : service.key === "mobile"
                    ? "mobile-apps"
                    : "software-development",
          authorId: "maxwell-team",
          tags: [industry.name, service.shortLabel, "India", industry.slug],
          publishedAt: date,
          intro: `${industry.name} companies in India face ${industry.painPoints.join(", ")}. ${service.label} engineered for ${industry.focus} addresses these gaps with ${industry.compliance} built in—not generic templates.`,
          sections: [
            {
              heading: `${industry.name} operational challenges`,
              paragraphs: [`Before ${service.shortLabel.toLowerCase()}, teams rely on spreadsheets and disconnected tools. ${industry.painPoints[0]} becomes a growth ceiling.`],
              list: industry.painPoints,
            },
            {
              heading: `What ${service.shortLabel} delivers`,
              paragraphs: [service.description],
              list: service.technologies,
            },
            {
              heading: "Implementation roadmap",
              paragraphs: ["Phase 1: discovery and module prioritization. Phase 2: core modules with weekly demos. Phase 3: integrations, training, go-live."],
            },
          ],
          faqs: [
            { question: `How much does ${service.shortLabel} cost for ${industry.name}?`, answer: `See /cost/${service.slug}-cost-india for indicative ranges.` },
            { question: `Does Maxwell serve ${industry.name}?`, answer: `Yes—we engineer for ${industry.focus} nationwide from Vadodara HQ.` },
          ],
          relatedSlugs: [],
        }),
      );
    }
  }

  return articles;
}
