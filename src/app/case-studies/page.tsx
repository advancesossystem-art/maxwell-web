import { Container } from "@/components/ui/Container";
import { CaseStudiesHub } from "@/components/case-studies/CaseStudiesHub";
import { CaseStudyCTA } from "@/components/case-studies/CaseStudyCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Case Studies — Enterprise Software Success Stories",
  description:
    "Real business problems, measurable results. Explore how Maxwell Electrodeal delivers ERP, healthcare, logistics, AI, and SaaS projects with proven ROI.",
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
