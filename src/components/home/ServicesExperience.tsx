"use client";

import Link from "next/link";
import { homepageServices } from "@/lib/homepage";
import { getServiceIcon } from "@/lib/service-icons";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

export function ServicesExperience() {
  return (
    <section className="v6-section v6-section--soft" aria-label="Services">
      <div className="v6-container">
        <FadeIn>
          <p className="v6-eyebrow-line v6-eyebrow">What we build</p>
          <h2 className="v6-section-title v6-section-title--wide mt-4 text-balance">
            End-to-End IT Solutions for Growing Businesses
          </h2>
          <p className="v6-lead mt-4 max-w-3xl">
            Enterprise-grade AI, cloud, cybersecurity, ERP, CRM, and custom software—with
            transparent pricing and accountable delivery from Vadodara, Gujarat.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {homepageServices.map((service) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <StaggerItem key={service.slug} className="h-full min-w-0">
                <Link href={`/services/${service.slug}`} className="v6-card v6-card-accent group block h-full min-w-0 overflow-hidden p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f46e5]/10 text-[#4f46e5] transition-colors group-hover:bg-[#4f46e5] group-hover:text-white">
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-[var(--v6-text)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--v6-text-secondary)]">
                    {service.solution}
                  </p>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
