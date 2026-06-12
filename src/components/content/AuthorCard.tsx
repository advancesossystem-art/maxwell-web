import Link from "next/link";
import type { Author } from "@/lib/content/authors";
import { countAuthorPublications } from "@/lib/content/authors";
import { Card } from "@/components/design/Card";
import { H3, Caption } from "@/components/design/typography";

export function AuthorCard({ author, variant = "inline" }: { author: Author; variant?: "inline" | "full" }) {
  const publicationCount = countAuthorPublications(author.id);

  if (variant === "inline") {
    return (
      <Card href={`/authors/${author.slug}`} padding="md" className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
          {author.initials}
        </div>
        <div>
          <H3 className="text-base group-hover:text-brand-400 transition-colors">{author.name}</H3>
          <Caption>{author.role}</Caption>
        </div>
      </Card>
    );
  }

  return (
    <Card interactive={false} padding="lg">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
          {author.initials}
        </div>
        <div>
          <Link href={`/authors/${author.slug}`} className="text-h3 font-display font-semibold hover:text-brand-400 transition-colors">
            {author.name}
          </Link>
          <Caption className="text-brand-500">{author.role}</Caption>
          <Caption className="mt-1">{author.position} · {author.experience}</Caption>
          <Caption className="mt-3 leading-relaxed">{author.bio}</Caption>
          <Caption className="mt-2 text-sm">
            <span className="font-medium text-[var(--v6-text)]">Specialization:</span> {author.specialization}
          </Caption>
          <div className="mt-4 flex flex-wrap gap-2">
            {author.expertise.map((e) => (
              <span key={e} className="v6-chip">
                {e}
              </span>
            ))}
          </div>
          <Caption className="mt-4">{publicationCount} articles, guides, reports & resources published</Caption>
          {author.linkedin && (
            <Link href={author.linkedin} className="mt-3 inline-block text-sm text-brand-600 hover:text-brand-500">
              LinkedIn profile →
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
