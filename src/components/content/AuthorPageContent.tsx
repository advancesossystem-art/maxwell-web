import Link from "next/link";
import { ContentCard } from "@/components/content/ContentCard";
import { AuthorPageJsonLd } from "@/components/seo/JsonLd";
import type { Author } from "@/lib/content/authors";
import { countAuthorPublications } from "@/lib/content/authors";
import { buildSearchIndex } from "@/lib/content/search";
import { resolveContentAuthorId } from "@/lib/content/resolve-author";
import type { ContentCategorySlug } from "@/lib/content/schema";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Caption, H1 } from "@/components/design/typography";

export function AuthorPageContent({ author }: { author: Author }) {
  const index = buildSearchIndex();
  const published = index.filter(
    (doc) => resolveContentAuthorId(doc.authorId, doc.category as ContentCategorySlug) === author.id,
  );
  const publicationCount = countAuthorPublications(author.id);

  return (
    <>
      <AuthorPageJsonLd author={author} />
      <PageHero
        compact
        title={
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-2xl font-bold text-white">
              {author.initials}
            </div>
            <div>
              <H1 as="h2" className="mt-0">
                {author.name}
              </H1>
              <Caption className="text-brand-500">{author.role}</Caption>
              <Caption className="mt-1">{author.position}</Caption>
              <Caption className="mt-2">Experience: {author.experience}</Caption>
            </div>
          </div>
        }
        description={author.bio}
      >
        <div>
          <Caption className="font-medium text-[var(--v6-text)]">Specialization</Caption>
          <Caption className="mt-1">{author.specialization}</Caption>
        </div>
        <div className="flex flex-wrap gap-2">
          {author.expertise.map((e) => (
            <span key={e} className="v6-chip v6-chip--pill">
              {e}
            </span>
          ))}
        </div>
        {author.linkedin && (
          <Link href={author.linkedin} className="text-sm text-brand-500 hover:text-brand-400">
            LinkedIn →
          </Link>
        )}
      </PageHero>

      <PageSection>
        <SectionHeader
          title="Published work"
          description={`${publicationCount} articles, guides, reports & resources`}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {published.map((doc) => (
            <ContentCard key={`${doc.type}-${doc.slug}`} doc={doc} />
          ))}
        </div>
      </PageSection>
    </>
  );
}
