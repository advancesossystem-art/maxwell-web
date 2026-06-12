import Link from "next/link";
import { authors } from "@/lib/content/authors";
import { countAuthorPublications } from "@/lib/content/authors";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, Caption, H3 } from "@/components/design/typography";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Author Hub — Maxwell Experts & Editorial Team",
  description:
    "Meet Maxwell Electrodeal experts: ERP specialists, CRM consultants, AI architects, and delivery leads — with experience, specialization, and published work.",
  path: "/authors",
  keywords: ["ERP expert", "CRM consultant", "AI solutions architect", "software development experts India"],
});

export default function AuthorsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Author hub"
        title={
          <>
            Maxwell <AccentGradient>experts</AccentGradient>
          </>
        }
        description="Delivery specialists behind our guides, reports, answers, and case studies — real names, roles, experience, and published work."
      />

      <PageSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => {
            const count = countAuthorPublications(author.id);
            return (
              <Card key={author.id} padding="lg" interactive={false}>
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
                    {author.initials}
                  </div>
                  <div>
                    <Link href={`/authors/${author.slug}`}>
                      <H3 className="hover:text-brand-400 transition-colors">{author.name}</H3>
                    </Link>
                    <Caption className="text-brand-500">{author.role}</Caption>
                    <Caption className="mt-2 line-clamp-2">{author.specialization}</Caption>
                    <Caption className="mt-2">{author.experience}</Caption>
                    <Caption className="mt-2">{count} publications</Caption>
                    {author.linkedin && (
                      <a
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs text-brand-600 hover:text-brand-500"
                      >
                        LinkedIn →
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </PageSection>
    </>
  );
}
