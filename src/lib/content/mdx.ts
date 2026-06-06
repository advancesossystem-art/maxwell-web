/**
 * MDX migration path
 *
 * Content is currently stored as typed ContentBlock[] in src/lib/content/*.ts for
 * full SSG, type safety, and Lighthouse performance.
 *
 * To add MDX articles:
 * 1. Install: @next/mdx @mdx-js/loader @mdx-js/react
 * 2. Configure next.config with createMDX()
 * 3. Place files in content/blog/*.mdx with frontmatter (slug, title, category, authorId)
 * 4. Use mdxComponents from ./mdx-components.tsx
 * 5. Merge MDX slugs into getAllArticles() in articles.ts
 *
 * @see https://nextjs.org/docs/app/guides/mdx
 */

export type MdxFrontmatter = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  authorId: string;
  tags: string[];
  publishedAt: string;
  featured?: boolean;
  trending?: boolean;
};
