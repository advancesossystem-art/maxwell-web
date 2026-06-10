"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { testimonials } from "@/lib/testimonials-data";
import { formatTestimonialAttribution } from "@/lib/client-attribution";

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Trusted by leaders across industries"
          description="Don't take our word for it—hear from the teams we've partnered with."
        />

        <StaggerContainer className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-border pt-6">
                  <cite className="not-italic">
                    <div className="font-display font-semibold text-foreground">
                      {formatTestimonialAttribution({
                        role: t.role,
                        companyType: t.companyType,
                        industry: t.industry,
                        region: t.region,
                      })}
                    </div>
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
