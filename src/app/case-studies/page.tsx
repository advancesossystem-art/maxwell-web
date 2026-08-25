import { Container } from "@/components/ui/Container";
import { CaseStudiesHub } from "@/components/case-studies/CaseStudiesHub";
import { CaseStudyCTA } from "@/components/case-studies/CaseStudyCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Website Case Studies",
  description:
    "Website case studies — business and manufacturer outcomes including Drashti Chemicals catalog and SEO rebuild results. From ₹35,000 builds. See the proof.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHub />
      <Container>
        <CaseStudyCTA />
      </Container>
    </>
  );
}
