import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCalculator } from "@/components/leads/ProjectCalculator";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Project Cost Calculator — Instant Software Estimate",
  description:
    "Intelligent project cost calculator for software development. Get estimated cost, timeline, team size, and technology recommendations instantly.",
  path: "/project-calculator",
});

export default function ProjectCalculatorPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#030712] pb-8 pt-32 lg:pt-40">
        <Container className="relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Cost Calculator</p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
              AI-powered project cost calculator
            </h1>
            <p className="mt-4 max-w-xl text-white/55">
              Configure your project and get instant estimates for cost, timeline, team size, and recommended technologies.
            </p>
          </FadeIn>
        </Container>
      </section>
      <ProjectCalculator />
    </>
  );
}
