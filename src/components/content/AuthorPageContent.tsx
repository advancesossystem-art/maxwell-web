import Link from "next/link";
import { ContentCard } from "@/components/content/ContentCard";
import { AuthorPageJsonLd } from "@/components/seo/JsonLd";
import type { Author } from "@/lib/content/authors";
import { getAllArticles } from "@/lib/content/articles";
import { getAllGuides } from "@/lib/content/guides";
import { buildSearchIndex } from "@/lib/content/search";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Caption, H1 } from "@/components/design/typography";

export function AuthorPageContent({ author }: { author: Author }) {
  const articles = getAllArticles().filter((a) => a.authorId === author.id);
  const guides = getAllGuides().filter((g) => g.authorId === author.id);
  const index = buildSearchIndex();
  const published = index.filter((d) => d.authorId === author.id);

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
              <H1 className="mt-0">{author.name}</H1>
              <Caption className="text-brand-500">{author.role}</Caption>
            </div>
          </div>
        }
        description={author.bio}
      >
        <div className="flex flex-wrap gap-2">
          {author.expertise.map((e) => (
            <span
              key={e}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-[#CBD5E1]"
            >
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
          description={`${articles.length} articles · ${guides.length} guides`}
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
