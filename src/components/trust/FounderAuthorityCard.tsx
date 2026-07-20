import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getFounderAuthor, countAuthorPublications } from "@/lib/content/authors";
import { companyAuthorityFacts, founderAuthorityPaths } from "@/lib/trust/company-authority";
import { companyMetricDisplay } from "@/lib/company-metrics";

type FounderAuthorityCardProps = {
  compact?: boolean;
  className?: string;
};

/** Visible founder E-E-A-T block — links to about, insights, and author profile. */
export function FounderAuthorityCard({ compact, className = "" }: FounderAuthorityCardProps) {
  const founder = getFounderAuthor();
  const publications = countAuthorPublications(founder.id);

  return (
    <section
      className={`border-y border-border bg-surface-elevated/60 ${className}`}
      aria-labelledby="founder-authority-heading"
      data-seo-speakable
    >
      <Container className={compact ? "py-8" : "py-12"}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600/15 font-display text-lg font-bold text-brand-600"
              aria-hidden
            >
              {founder.initials}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Leadership</p>
              <h2 id="founder-authority-heading" className="mt-1 font-display text-xl font-bold text-white md:text-2xl">
                {founder.name}
                {founder.role ? (
                  <span className="mt-1 block text-base font-medium text-muted">{founder.role}</span>
                ) : null}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{founder.bio}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {founder.expertise.slice(0, 5).map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="shrink-0 space-y-3 text-sm text-muted lg:max-w-xs">
            <p>
              <span className="font-medium text-white">{founder.experience}</span> in enterprise software ·{" "}
              {companyAuthorityFacts.yearsInBusiness} years building from Vadodara HQ
            </p>
            {publications > 0 ? (
              <p>
                <span className="font-medium text-white">{publications}</span> published guides and insights on this
                site
              </p>
            ) : null}
            <p>
              {companyMetricDisplay.projectsCompleted} projects · {companyMetricDisplay.industriesServed} industries ·{" "}
              {companyAuthorityFacts.gstNote}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href={founderAuthorityPaths.about} className="text-sm font-medium text-brand-600 hover:underline">
                About Maxwell →
              </Link>
              <Link
                href={`/authors/${founder.slug}`}
                className="text-sm font-medium text-brand-600 hover:underline"
              >
                Founder profile →
              </Link>
              <Link
                href={founderAuthorityPaths.founderInsights}
                className="text-sm font-medium text-brand-600 hover:underline"
              >
                Founder insights →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
