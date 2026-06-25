import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectEstimatorWizard } from "@/components/leads/ProjectEstimatorWizard";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Get Project Estimate — Free Multi-Step Estimator",
  description:
    "Get a personalized software project estimate in 7 steps. Website, mobile app, ERP, CRM, AI, SaaS, and custom software pricing from Maxwell Electrodeal.",
  path: "/get-estimate",
});

export default function GetEstimatePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#030712] pb-8 pt-32 lg:pt-40">
        <Container className="relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Project Estimator</p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
              Get your free project estimate
            </h1>
            <p className="mt-4 max-w-xl text-white/55">
              8 guided steps · industry-specific scoping · personalized estimate within 24 hours. No obligation.
            </p>
          </FadeIn>
        </Container>
      </section>
      <ProjectEstimatorWizard />
    </>
  );
}
