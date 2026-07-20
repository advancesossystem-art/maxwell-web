import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getFounderAuthor, countAuthorPublications } from "@/lib/content/authors";
import { companyAuthorityFacts, founderAuthorityPaths } from "@/lib/trust/company-authority";
import { founderProfile } from "@/lib/trust/founder-profile";
import { companyMetricDisplay } from "@/lib/company-metrics";

type FounderAuthorityCardProps = {
  compact?: boolean;
  className?: string;
};

/** Visible founder E-E-A-T block — links to about, insights, and author profile. */
export function FounderAuthorityCard({ compact, className = "" }: FounderAuthorityCardProps) {
  const founder = getFounderAuthor();
  const publications = countAuthorPublications(founder.id);
  const journeyParagraphs = compact ? founderProfile.journey.slice(0, 2) : founderProfile.journey;

  return (
    <section
      className={`border-y border-[var(--v6-border)] bg-[var(--v6-bg-soft)] ${className}`}
      aria-labelledby="founder-authority-heading"
      data-seo-speakable
    >
      <Container className={compact ? "py-8 md:py-10" : "py-12 md:py-14"}>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex gap-4">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#4f46e5]/10 font-display text-xl font-bold text-[#4f46e5]"
                aria-hidden
              >
                {founder.initials}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#4f46e5]">From the Founder & CEO</p>
                <h2
                  id="founder-authority-heading"
                  className="mt-1 font-display text-xl font-bold text-[var(--v6-text)] md:text-2xl"
                >
                  {founder.name}
                </h2>
                {founder.role ? (
                  <p className="mt-1 text-base font-medium text-[var(--v6-text-secondary)]">{founder.role}</p>
                ) : null}
                <p className="mt-2 text-sm text-[var(--v6-text-muted)]">{founderProfile.bio}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
                How Maxwell was built
              </p>
              {journeyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-[var(--v6-text-secondary)] md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-6 rounded-xl border border-[var(--v6-border)] bg-white p-5">
              <p className="text-sm italic leading-relaxed text-[var(--v6-text)] md:text-base">
                &ldquo;{founderProfile.message}&rdquo;
              </p>
              <footer className="mt-3 text-sm font-medium text-[var(--v6-text-muted)]">
                — {founder.name}, {founder.role}
              </footer>
            </blockquote>

            <ul className="mt-5 flex flex-wrap gap-2">
              {founder.expertise.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--v6-border)] bg-white px-3 py-1 text-xs text-[var(--v6-text-secondary)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-[var(--v6-border)] bg-white p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4f46e5]">How we work with you</p>
              <ul className="mt-4 space-y-3">
                {founderProfile.principles.map((line) => (
                  <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-[var(--v6-text-secondary)]">
                    <span className="mt-0.5 shrink-0 text-[#4f46e5]" aria-hidden>
                      ✓
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2 border-t border-[var(--v6-border)] pt-5 text-sm text-[var(--v6-text-secondary)]">
                <p>
                  <span className="font-medium text-[var(--v6-text)]">{founderProfile.careerExperience}</span>{" "}
                  (career)
                </p>
                <p>
                  <span className="font-medium text-[var(--v6-text)]">Maxwell founded {companyAuthorityFacts.foundedYear}</span>
                  {" · "}
                  {companyAuthorityFacts.yearsInBusiness} years in business · Vadodara HQ
                </p>
                {publications > 0 ? (
                  <p>
                    <span className="font-medium text-[var(--v6-text)]">{publications}</span> guides and insights
                    published on this site
                  </p>
                ) : null}
                <p>
                  {companyMetricDisplay.projectsCompleted} projects · {companyMetricDisplay.industriesServed}{" "}
                  industries · {companyAuthorityFacts.gstNote}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
                <Link href={founderAuthorityPaths.about} className="text-[#4f46e5] hover:underline">
                  About Maxwell →
                </Link>
                <Link href={`/authors/${founder.slug}`} className="text-[#4f46e5] hover:underline">
                  Founder profile →
                </Link>
                <Link href={founderAuthorityPaths.founderInsights} className="text-[#4f46e5] hover:underline">
                  Founder insights →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
