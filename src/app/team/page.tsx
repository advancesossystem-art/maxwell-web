import { TeamPageContent } from "@/components/company/TeamPageContent";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
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
      <TeamPageContent />
    </>
  );
}
