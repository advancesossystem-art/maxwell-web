import { getAllArticles } from "./articles";
import { getAllGuides } from "./guides";
import { getAllResources } from "./resources";
import { getAllReports } from "./reports";
import { getCategoryBySlug } from "./categories";
import { getContentPath } from "./utils";
import type { ContentCategorySlug, ContentItem } from "./schema";

export interface SearchDocument {
  slug: string;
  title: string;
  excerpt: string;
  type: ContentItem["type"];
  category: ContentCategorySlug;
  categoryName: string;
  href: string;
  tags: string[];
  authorId: string;
  publishedAt: string;
  readingTimeMinutes: number;
  featured?: boolean;
  trending?: boolean;
  popular?: boolean;
  searchText: string;
}

function toSearchDoc(item: ContentItem): SearchDocument {
  const category = getCategoryBySlug(item.category);
  const extra =
    item.type === "report"
      ? item.keyFindings.join(" ")
      : item.type === "resource"
        ? item.benefits.join(" ")
        : "";

  return {
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    type: item.type,
    category: item.category,
    categoryName: category?.name ?? item.category,
    href: getContentPath(item),
    tags: item.tags,
    authorId: item.authorId,
    publishedAt: item.publishedAt,
    readingTimeMinutes: item.readingTimeMinutes,
    featured: item.featured,
    trending: item.trending,
    popular: item.popular,
    searchText: [item.title, item.excerpt, item.tags.join(" "), extra].join(" ").toLowerCase(),
  };
}

let indexCache: SearchDocument[] | null = null;

export function buildSearchIndex(): SearchDocument[] {
  if (indexCache) return indexCache;
  const items: ContentItem[] = [
    ...getAllArticles().filter((a) => !a.noIndex),
    ...getAllGuides(),
    ...getAllResources(),
    ...getAllReports(),
  ];
  indexCache = items.map(toSearchDoc);
  return indexCache;
}

export function searchContent(query: string, options?: { type?: ContentItem["type"]; category?: ContentCategorySlug }): SearchDocument[] {
  const q = query.trim().toLowerCase();
  let results = buildSearchIndex();

  if (options?.type) {
    results = results.filter((r) => r.type === options.type);
  }
  if (options?.category) {
    results = results.filter((r) => r.category === options.category);
  }

  if (!q) return results;

  const terms = q.split(/\s+/).filter(Boolean);
  return results
    .map((doc) => {
      let score = 0;
      for (const term of terms) {
        if (doc.title.toLowerCase().includes(term)) score += 10;
        if (doc.tags.some((t) => t.toLowerCase().includes(term))) score += 5;
        if (doc.searchText.includes(term)) score += 2;
      }
      return { doc, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.doc);
}

export function getFeaturedContent(): SearchDocument[] {
  return buildSearchIndex().filter((d) => d.featured).slice(0, 6);
}

export function getTrendingContent(): SearchDocument[] {
  return buildSearchIndex().filter((d) => d.trending).slice(0, 6);
}

export function getPopularContent(): SearchDocument[] {
  return buildSearchIndex().filter((d) => d.popular).slice(0, 6);
}

export function getRelatedContent(slug: string, type: ContentItem["type"], relatedSlugs?: string[]): SearchDocument[] {
  const index = buildSearchIndex();
  if (relatedSlugs?.length) {
    return relatedSlugs
      .map((s) => index.find((d) => d.slug === s))
      .filter((d): d is SearchDocument => !!d)
      .slice(0, 6);
  }
  const current = index.find((d) => d.slug === slug && d.type === type);
  if (!current) return [];
  return index
    .filter((d) => d.slug !== slug && d.category === current.category)
    .slice(0, 4);
}
