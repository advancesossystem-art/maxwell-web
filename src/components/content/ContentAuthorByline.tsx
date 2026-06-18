import type { ContentCategorySlug } from "@/lib/content/schema";
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
  void authorId;
  void category;
  const textClass = dark ? "text-white/50" : "text-muted";

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm ${textClass}`}>
      <span className="font-medium">Maxwell Electrodeal</span>
      <span>{formatPublishDate(publishedAt)}</span>
      {readingTimeMinutes != null && <span>{readingTimeMinutes} min read</span>}
    </div>
  );
}
