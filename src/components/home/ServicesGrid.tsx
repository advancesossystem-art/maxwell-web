"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { services } from "@/lib/constants";
import { serviceIcons, ArrowRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          badge="Services"
          title="Full-stack engineering, one accountable partner"
          description="From websites to AI-powered enterprise systems—we deliver the complete technology stack your business needs to grow."
        />

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group gradient-border flex h-full flex-col rounded-2xl bg-surface-elevated p-6 transition-all duration-300 hover:glow-blue hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((f) => (
                      <span
                        key={f}
                        className="rounded-md bg-surface px-2 py-1 text-xs text-muted"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className={cn(
              "inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors",
            )}
          >
            View all services <ArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
}
