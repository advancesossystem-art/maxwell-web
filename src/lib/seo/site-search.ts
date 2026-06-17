import { getAllAnswers } from "@/lib/answers-data";
import { getIndexableArticleSlugs, getArticleBySlug } from "@/lib/content/articles";
import { getAllServices } from "@/lib/services-data";
import { siteConfig } from "@/lib/constants";

export type SiteSearchResult = {
  title: string;
  description: string;
  url: string;
};

function normalize(text: string): string {
  return text.toLowerCase();
}

function matches(query: string, ...fields: string[]): boolean {
  const q = normalize(query);
  return fields.some((field) => normalize(field).includes(q));
}

/** Lightweight on-site search for /search and WebSite SearchAction. */
export function searchSiteContent(query: string, limit = 20): SiteSearchResult[] {
  const results: SiteSearchResult[] = [];

  for (const service of getAllServices()) {
    if (
      matches(
        query,
        service.title,
        service.metaDescription,
        service.headline,
        ...service.keywords,
      )
    ) {
      results.push({
        title: service.title,
        description: service.metaDescription,
        url: `/services/${service.slug}`,
      });
    }
  }

  for (const answer of getAllAnswers()) {
    if (
      matches(
        query,
        answer.question,
        answer.shortAnswer,
        answer.metaDescription,
        answer.category,
      )
    ) {
      results.push({
        title: answer.question,
        description: answer.shortAnswer.slice(0, 160),
        url: `/answers/${answer.slug}`,
      });
    }
  }

  for (const slug of getIndexableArticleSlugs()) {
    const article = getArticleBySlug(slug);
    if (!article) continue;
    if (matches(query, article.title, article.excerpt, article.metaDescription, ...article.tags)) {
      results.push({
        title: article.title,
        description: article.excerpt,
        url: `/blog/${slug}`,
      });
    }
  }

  const hubPages: SiteSearchResult[] = [
    {
      title: "Contact Maxwell Electrodeal",
      description: `Get a free quote — ${siteConfig.address}`,
      url: "/contact",
    },
    {
      title: "Software Development Services",
      description: "ERP, CRM, AI, web and mobile app development in India",
      url: "/services",
    },
    {
      title: "Locations — India & Global",
      description: "Software development delivery from Vadodara to Mumbai, Delhi, Bengaluru and worldwide",
      url: "/locations",
    },
  ];

  for (const page of hubPages) {
    if (matches(query, page.title, page.description)) {
      results.push(page);
    }
  }

  const seen = new Set<string>();
  return results
    .filter((item) => {
      if (seen.has(item.url)) return false;
      seen.add(item.url);
      return true;
    })
    .slice(0, limit);
}
