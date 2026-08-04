import type { Article } from "./schema";
import { createArticle } from "./article-factory";
import { buildDeepIndustryServiceArticle } from "./deep-seo-article-builder";
import { programmaticIndustries, programmaticServices } from "../seo/programmatic/catalog";

/**
 * Programmatic SEO blog articles — industry × service long-form.
 * Surgical cleanup: ALL batch articles are noIndex to stop scaled-content crawl bloat.
 * Hand blogs live only via seo-blog-sprint-restore and curated articles.
 */
export function buildSeoArticlesBatch(): Article[] {
  const articles: Article[] = [];
  const date = "2026-06-07";

  const services = programmaticServices.filter((s) =>
    ["erp", "crm", "ai", "mobile", "web", "software"].includes(s.key),
  );

  for (const industry of programmaticIndustries) {
    for (const service of services) {
      const slug = `${service.key}-for-${industry.slug}-india`;
      if (slug.length > 80) continue;
      const def = buildDeepIndustryServiceArticle(industry, service, date);
      articles.push(
        createArticle({
          ...def,
          noIndex: true,
        }),
      );
    }
  }

  return articles;
}
