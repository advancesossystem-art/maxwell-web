import type { SearchDocument } from "@/lib/content/search";
import { formatPublishDate } from "@/lib/content/utils";
import { Card } from "@/components/design/Card";
import { H3, Caption } from "@/components/design/typography";

const typeLabels: Record<SearchDocument["type"], string> = {
  article: "Article",
  guide: "Guide",
  resource: "Resource",
  report: "Report",
};

export function ContentCard({ doc, variant = "default" }: { doc: SearchDocument; variant?: "default" | "compact" }) {
  if (variant === "compact") {
    return (
      <Card href={doc.href} padding="md" className="!p-4">
        <span className="text-xs font-medium text-brand-500">{typeLabels[doc.type]}</span>
        <H3 className="mt-1 text-base line-clamp-2 group-hover:text-brand-400 transition-colors">
          {doc.title}
        </H3>
        <Caption>{doc.readingTimeMinutes} min read</Caption>
      </Card>
    );
  }

  return (
    <Card href={doc.href} className="flex flex-col">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-400">
          {doc.categoryName}
        </span>
        <Caption>{typeLabels[doc.type]}</Caption>
      </div>
      <H3 className="mt-4 line-clamp-2 group-hover:text-brand-400 transition-colors">{doc.title}</H3>
      <Caption className="mt-2 flex-1 line-clamp-2">{doc.excerpt}</Caption>
      <div className="mt-4 flex items-center justify-between border-t border-[var(--v6-border)] pt-4">
        <Caption>{typeLabels[doc.type]}</Caption>
        <Caption>
          {doc.readingTimeMinutes} min · {formatPublishDate(doc.publishedAt)}
        </Caption>
      </div>
    </Card>
  );
}
