import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { authors, getFounderAuthor } from "@/lib/content/authors";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { Caption, H3 } from "@/components/design/typography";

export const metadata: Metadata = createMetadata({
  title: "Authors & Editorial Team",
  description:
    "Maxwell Electrodeal authors — website engineering, Next.js delivery, and B2B catalog specialists based in Vadodara, Gujarat.",
  path: "/authors",
});

export default function AuthorsIndexPage() {
  const founder = getFounderAuthor();
  const team = [
    founder,
    ...authors.filter((a) => !a.isFounder),
  ];

  return (
    <>
      <PageHero
        compact
        eyebrow="E-E-A-T · editorial team"
        title="Authors who publish on maxwellelectrodeal.com"
        description="Verifiable profiles for blog guides, case studies, and technical breakdowns — website development, manufacturer catalogs, and delivery experience from Vadodara."
      />

      <PageSection>
        <SectionHeader
          title="Editorial team"
          description="Click a profile to see published articles and specialization."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((author) => (
            <Card key={author.slug} href={`/authors/${author.slug}`} padding="lg">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
                  {author.initials}
                </div>
                <div>
                  <H3 className="text-base group-hover:text-brand-400 transition-colors">{author.name}</H3>
                  <Caption className="text-brand-500">{author.role}</Caption>
                  <Caption className="mt-2 line-clamp-3">{author.specialization}</Caption>
                  {author.isFounder ? (
                    <Caption className="mt-2 text-xs font-medium text-indigo-600">Founder · primary website author</Caption>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Company overview:{" "}
          <Link href="/about/team" className="text-brand-600 hover:underline">
            Meet the team →
          </Link>
        </p>
      </PageSection>
    </>
  );
}
