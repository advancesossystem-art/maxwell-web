import { Container } from "@/components/ui/Container";
import { CaseStudiesHub } from "@/components/case-studies/CaseStudiesHub";
import { CaseStudyCTA } from "@/components/case-studies/CaseStudyCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Case Studies — Business Outcomes & ROI",
  description:
    "Documented business outcomes from 8 end-to-end client projects. ERP, healthcare, logistics, AI, and SaaS delivery with measurable ROI and timelines.",
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
