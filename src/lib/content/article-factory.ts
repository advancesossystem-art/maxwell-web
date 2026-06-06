import type { Article, ContentBlock, ContentCategorySlug, ContentFAQ } from "./schema";
import { buildTableOfContents, calculateReadingTime } from "./utils";

type ArticleDef = {
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
  intro: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
  faqs?: ContentFAQ[];
  relatedSlugs?: string[];
};

export function createArticle(def: ArticleDef): Article {
  const blocks: ContentBlock[] = [
    { type: "paragraph", text: def.intro },
    ...def.sections.flatMap((s) => {
      const sectionBlocks: ContentBlock[] = [
        { type: "heading", level: 2, text: s.heading },
        ...s.paragraphs.map((p) => ({ type: "paragraph" as const, text: p })),
      ];
      if (s.list?.length) {
        sectionBlocks.push({ type: "list", items: s.list });
      }
      return sectionBlocks;
    }),
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
    relatedSlugs: def.relatedSlugs,
    faqs: def.faqs,
    sections: blocks,
    tableOfContents: buildTableOfContents(blocks),
  };
}
