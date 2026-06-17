import { TeamPageContent } from "@/components/company/TeamPageContent";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { AccentGradient } from "@/components/design/typography";
import { companyMetricDisplay } from "@/lib/company-metrics";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Our Team — Leadership & Engineering",
  description:
    "Meet the Maxwell Electrodeal team — leadership, engineers, designers, project managers, AI and cloud specialists building enterprise software.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="team" path="/team" title="Our Team" />
      <CompanyPageHero
        breadcrumb={[{ label: "About", href: "/about" }, { label: "Team" }]}
        eyebrow="Our Team"
        title={
          <>
            The people behind <AccentGradient>your delivery</AccentGradient>
          </>
        }
        description={`${companyMetricDisplay.expertEngineers} engineers, designers, and project leaders with documented enterprise delivery experience.`}
        below={<TrustStrip compact />}
      />
      <TeamPageContent />
    </>
  );
}
