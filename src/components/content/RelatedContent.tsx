import Link from "next/link";
import { ContentCard } from "@/components/content/ContentCard";
import { getRelatedContent } from "@/lib/content/search";
import type { ContentType } from "@/lib/content/schema";

type RelatedContentProps = {
  slug: string;
  type: ContentType;
  relatedSlugs?: string[];
  title?: string;
  className?: string;
};

/**
 * Auto-links related articles, guides, and resources by explicit slugs or shared category/tags.
 */
export function RelatedContent({
  slug,
  type,
  relatedSlugs,
  title = "Related reading",
  className,
}: RelatedContentProps) {
  const related = getRelatedContent(slug, type, relatedSlugs);
  if (!related.length) return null;

  return (
    <section className={className} aria-label={title}>
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-xl font-bold text-[var(--v6-text)] sm:text-2xl">{title}</h2>
        {type === "article" ? (
          <Link href="/blog" className="text-sm font-medium text-[#4f46e5] hover:underline">
            All posts →
          </Link>
        ) : null}
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <ContentCard key={`${item.type}-${item.slug}`} doc={item} variant="compact" />
        ))}
      </div>
    </section>
  );
}
