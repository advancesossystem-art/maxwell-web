import { Container } from "@/components/ui/Container";
import { WorkHub } from "@/components/work/WorkHub";
import { WorkCTA } from "@/components/work/WorkCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Technical Portfolio — How We Build",
  description:
    "Architecture, technology stack, and build processes from 8 production systems. ERP, mobile, AI, and SaaS portfolio for technical evaluators.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <WorkHub />
      <Container>
        <WorkCTA />
      </Container>
    </>
  );
}
