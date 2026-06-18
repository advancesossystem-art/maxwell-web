import { TeamAboutPageContent } from "@/components/company/TeamAboutPageContent";
import { TeamAboutPageJsonLd } from "@/components/seo/TeamAboutPageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Our Team — Leadership & Engineering Experts",
  description:
    "Meet the Maxwell Electrodeal team — founder Rajesh Mehta, leadership, engineers, designers, and delivery specialists building ERP, CRM, AI, and custom software in Vadodara, India.",
  path: "/about/team",
});

export default function AboutTeamPage() {
  return (
    <>
      <TeamAboutPageJsonLd />
      <TeamAboutPageContent />
    </>
  );
}
