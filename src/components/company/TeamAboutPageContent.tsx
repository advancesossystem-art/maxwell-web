import Link from "next/link";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { CompanyCTA } from "@/components/company/CompanyCTA";
import { TeamPageContent } from "@/components/company/TeamPageContent";
import { AccentGradient } from "@/components/design/typography";
import { Card } from "@/components/design/Card";
import { H3, Text } from "@/components/design/typography";
import { getFounderAuthor } from "@/lib/content/authors";
import { founderProfile } from "@/lib/trust/founder-profile";
import { companyMetricDisplay } from "@/lib/company-metrics";
import { socialProfiles } from "@/lib/seo/config";

export function TeamAboutPageContent() {
  const founder = getFounderAuthor();
  const founderLinkedIn =
    founder?.linkedin ?? socialProfiles.find((url) => url.includes("linkedin.com"));

  return (
    <>
      <CompanyPageHero
        breadcrumb={[
          { label: "About", href: "/about" },
          { label: "Team" },
        ]}
        eyebrow="Leadership & delivery"
        title={
          <>
            The experts behind <AccentGradient>Maxwell Electrodeal</AccentGradient>
          </>
        }
        description={`${companyMetricDisplay.expertEngineers} engineers, designers, and project leaders — documented enterprise delivery from Vadodara to clients worldwide.`}
      />

      {founder ? (
        <section className="v6-section v6-section--soft" data-seo-speakable>
          <div className="v6-container">
            <Card interactive={false} padding="lg" className="mx-auto max-w-4xl">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                <div
                  className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-[#4f46e5] font-display text-3xl font-bold text-white"
                  aria-hidden
                >
                  {founder.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <H3 className="text-2xl">{founder.name}</H3>
                  {founder.position ? (
                    <Text className="mt-1 text-sm text-[var(--v6-text-muted)]">{founder.position}</Text>
                  ) : null}
                  <Text className="mt-4 leading-relaxed">{founder.bio}</Text>
                  <blockquote className="mt-4 border-l-2 border-[#4f46e5]/40 pl-4 text-sm leading-relaxed text-[var(--v6-text-secondary)]">
                    &ldquo;{founderProfile.message}&rdquo;
                    <footer className="mt-2 font-medium text-[var(--v6-text)]">
                      — {founder.name}, {founder.role}
                    </footer>
                  </blockquote>
                  <Text className="mt-3 text-sm text-[var(--v6-text-secondary)]">
                    <span className="font-semibold text-[var(--v6-text)]">Expertise:</span>{" "}
                    {founder.expertise.join(" · ")}
                  </Text>
                  {founderLinkedIn ? (
                    <a
                      href={founderLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4f46e5] hover:underline"
                    >
                      Connect on LinkedIn →
                    </a>
                  ) : null}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/about" className="v6-btn v6-btn-secondary !min-h-9 text-sm">
                      Company story
                    </Link>
                    <Link href="/book-consultation" className="v6-btn v6-btn-primary !min-h-9 text-sm">
                      Book with Sanjay
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      ) : null}

      <TeamPageContent />
      <CompanyCTA />
    </>
  );
}
