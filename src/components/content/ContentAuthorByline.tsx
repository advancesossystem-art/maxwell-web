import Link from "next/link";
import type { ContentCategorySlug } from "@/lib/content/schema";
import { getContentAuthor } from "@/lib/content/resolve-author";
import { countAuthorPublications } from "@/lib/content/authors";
import { formatPublishDate } from "@/lib/content/utils";

interface ContentAuthorBylineProps {
  authorId: string;
  category: ContentCategorySlug;
  publishedAt: string;
  readingTimeMinutes?: number;
  dark?: boolean;
}

export function ContentAuthorByline({
  authorId,
  category,
  publishedAt,
  readingTimeMinutes,
  dark = false,
}: ContentAuthorBylineProps) {
  const author = getContentAuthor(authorId, category);
  const count = countAuthorPublications(author.id);
  const textClass = dark ? "text-white/50" : "text-muted";
  const linkClass = dark ? "text-white/80 hover:text-white" : "text-brand-600 hover:text-brand-500";

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm ${textClass}`}>
      <Link href={`/authors/${author.slug}`} className={`font-medium ${linkClass}`}>
        {author.name}
      </Link>
      <span>{author.role}</span>
      <span>{formatPublishDate(publishedAt)}</span>
      {readingTimeMinutes != null && <span>{readingTimeMinutes} min read</span>}
      {count > 0 && <span>{count} publications</span>}
    </div>
  );
}
