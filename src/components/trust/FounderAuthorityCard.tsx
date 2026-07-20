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

  return (
    <section
      className={`border-y border-border bg-surface-elevated/60 ${className}`}
      aria-labelledby="founder-authority-heading"
      data-seo-speakable
    >
      <Container className={compact ? "py-8 md:py-10" : "py-12 md:py-14"}>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex gap-4">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600/15 font-display text-xl font-bold text-brand-600"
                aria-hidden
              >
                {founder.initials}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">From the Founder & CEO</p>
                <h2 id="founder-authority-heading" className="mt-1 font-display text-xl font-bold text-white md:text-2xl">
                  {founder.name}
                  {founder.role ? (
                    <span className="mt-1 block text-base font-medium text-muted">{founder.role}</span>
                  ) : null}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{founder.bio}</p>
              </div>
            </div>

            <blockquote className="mt-6 border-l-2 border-brand-600/60 pl-5">
              <p className="text-sm leading-relaxed text-white/90 md:text-base">&ldquo;{founderProfile.message}&rdquo;</p>
              <footer className="mt-3 text-sm font-medium text-muted">
                — {founder.name}, {founder.role}
              </footer>
            </blockquote>

            <ul className="mt-5 flex flex-wrap gap-2">
              {founder.expertise.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-border bg-surface p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">How we work with you</p>
              <ul className="mt-4 space-y-3">
                {founderProfile.principles.map((line) => (
                  <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-0.5 shrink-0 text-brand-600" aria-hidden>
                      ✓
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted">
                <p>
                  <span className="font-medium text-white">{founder.experience}</span> building for Indian manufacturers
                  · {companyAuthorityFacts.yearsInBusiness} years from Vadodara HQ
                </p>
                {publications > 0 ? (
                  <p>
                    <span className="font-medium text-white">{publications}</span> guides and insights published on
                    this site
                  </p>
                ) : null}
                <p>
                  {companyMetricDisplay.projectsCompleted} projects · {companyMetricDisplay.industriesServed}{" "}
                  industries · {companyAuthorityFacts.gstNote}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
                <Link href={founderAuthorityPaths.about} className="text-brand-600 hover:underline">
                  About Maxwell →
                </Link>
                <Link href={`/authors/${founder.slug}`} className="text-brand-600 hover:underline">
                  Founder profile →
                </Link>
                <Link href={founderAuthorityPaths.founderInsights} className="text-brand-600 hover:underline">
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
