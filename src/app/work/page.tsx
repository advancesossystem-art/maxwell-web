import { Container } from "@/components/ui/Container";
import { WorkHub } from "@/components/work/WorkHub";
import { WorkCTA } from "@/components/work/WorkCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Our Work — Portfolio & Case Studies",
  description:
    "Explore software, ERP, mobile app, AI, and SaaS projects built by Maxwell Electrodeal. Real business results for manufacturing, healthcare, logistics, and more.",
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
