import Link from "next/link";
import type { ContentCategorySlug } from "@/lib/content/schema";
import { formatPublishDate } from "@/lib/content/utils";
import { getContentAuthor } from "@/lib/content/resolve-author";

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
  const textClass = dark ? "text-white/50" : "text-muted";
  const linkClass = dark ? "text-white/80 hover:text-white" : "text-brand-600 hover:text-brand-500";

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm ${textClass}`}>
      <span>
        By{" "}
        <Link href={`/authors/${author.slug}`} className={`font-medium ${linkClass}`}>
          {author.name}
        </Link>
        {author.role ? <span className="hidden sm:inline"> · {author.role}</span> : null}
      </span>
      <span>{formatPublishDate(publishedAt)}</span>
      {readingTimeMinutes != null && <span>{readingTimeMinutes} min read</span>}
    </div>
  );
}
