import type { Article, ContentBlock, ContentCategorySlug, ContentFAQ } from "./schema";
import { buildTableOfContents, calculateReadingTime } from "./utils";

export type RichSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  subsections?: { heading: string; paragraphs: string[]; list?: string[] }[];
  callout?: { variant: "info" | "tip" | "warning"; title?: string; text: string };
};

export type ArticleDef = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: ContentCategorySlug;
  authorId: string;
  tags: string[];
  publishedAt: string;
  featured?: boolean;
  trending?: boolean;
  popular?: boolean;
  intro: string | string[];
  sections: RichSection[];
  faqs?: ContentFAQ[];
  relatedSlugs?: string[];
  noIndex?: boolean;
};

function introBlocks(intro: string | string[]): ContentBlock[] {
  const parts = Array.isArray(intro) ? intro : [intro];
  return parts.map((text) => ({ type: "paragraph" as const, text }));
}

function sectionToBlocks(s: RichSection): ContentBlock[] {
  const blocks: ContentBlock[] = [
    { type: "heading", level: 2, text: s.heading },
    ...s.paragraphs.map((p) => ({ type: "paragraph" as const, text: p })),
  ];
  if (s.list?.length) {
    blocks.push({ type: "list", items: s.list });
  }
  if (s.callout) {
    blocks.push({ type: "callout", ...s.callout });
  }
  for (const sub of s.subsections ?? []) {
    blocks.push({ type: "heading", level: 3, text: sub.heading });
    blocks.push(...sub.paragraphs.map((p) => ({ type: "paragraph" as const, text: p })));
    if (sub.list?.length) {
      blocks.push({ type: "list", items: sub.list });
    }
  }
  return blocks;
}

export function createArticle(def: ArticleDef): Article {
  const blocks: ContentBlock[] = [
    ...introBlocks(def.intro),
    ...def.sections.flatMap(sectionToBlocks),
    {
      type: "cta",
      title: "Need expert help?",
      description: "Maxwell Electrodeal delivers enterprise software with measurable ROI. Book a free discovery call.",
      href: "/contact",
      label: "Book Consultation",
    },
  ];

  return {
    type: "article",
    slug: def.slug,
    title: def.title,
    excerpt: def.excerpt,
    metaTitle: def.title,
    metaDescription: def.metaDescription,
    publishedAt: def.publishedAt,
    updatedAt: def.publishedAt,
    authorId: def.authorId,
    category: def.category,
    tags: def.tags,
    readingTimeMinutes: calculateReadingTime(blocks),
    featured: def.featured,
    trending: def.trending,
    popular: def.popular,
    noIndex: def.noIndex,
    relatedSlugs: def.relatedSlugs,
    faqs: def.faqs,
    sections: blocks,
    tableOfContents: buildTableOfContents(blocks),
  };
}
