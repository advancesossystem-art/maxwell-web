import Link from "next/link";
import { ContentCard } from "@/components/content/ContentCard";
import { getRelatedContent } from "@/lib/content/search";
import type { ContentItem } from "@/lib/content/schema";

type RelatedContentRailProps = {
  slug: string;
  type: ContentItem["type"];
  relatedSlugs?: string[];
  title?: string;
  limit?: number;
};

/** Phase N — related content rail for guides, reports, resources */
export function RelatedContentRail({
  slug,
  type,
  relatedSlugs,
  title = "Related content",
  limit = 3,
}: RelatedContentRailProps) {
  const related = getRelatedContent(slug, type, relatedSlugs).slice(0, limit);
  if (related.length === 0) return null;

  return (
    <section className="mt-16 border-t border-[var(--v6-border)] pt-12" aria-label={title}>
      <h2 className="font-display text-xl font-semibold text-[var(--v6-text)]">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <ContentCard key={`${item.type}-${item.slug}`} doc={item} />
        ))}
      </div>
      <p className="mt-6 text-sm text-[var(--v6-text-secondary)]">
        Explore more in our{" "}
        <Link href="/blog" className="font-semibold text-[#4f46e5] hover:underline">
          blog
        </Link>
        ,{" "}
        <Link href="/resources" className="font-semibold text-[#4f46e5] hover:underline">
          resources
        </Link>
        , and{" "}
        <Link href="/reports" className="font-semibold text-[#4f46e5] hover:underline">
          industry reports
        </Link>
        .
      </p>
    </section>
  );
}
