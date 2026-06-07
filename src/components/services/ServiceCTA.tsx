import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/ui/Icons";
import { InlineCTA } from "@/components/conversion/InlineCTA";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { StickyCTA } from "@/components/conversion/StickyCTA";
import { TrustCTA } from "@/components/conversion/TrustCTA";
import { TertiaryCTA } from "@/components/conversion/TertiaryCTA";
import { CONVERSION_ROUTES, type ConversionContext } from "@/lib/conversion-copy";

type ServiceCTAProps = {
  variant?: "inline" | "full" | "compact";
  serviceName?: string;
  serviceSlug?: string;
  caseStudySlug?: string;
  industrySlug?: string;
  className?: string;
};

function serviceContext(serviceName?: string): ConversionContext | undefined {
  return serviceName ? { service: serviceName, source: "service-page" } : undefined;
}

export function ServiceCTA({
  variant = "full",
  serviceName,
  serviceSlug,
  caseStudySlug,
  industrySlug,
  className,
}: ServiceCTAProps) {
  const context = serviceContext(serviceName);

  if (variant === "compact") {
    return (
      <div className={cn("flex flex-wrap gap-3", className)}>
        <PrimaryCTA context={context} location="service_compact" size="sm" showArrow={false} />
        <SecondaryCTA context={context} location="service_compact" size="sm" variant="secondary" />
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <InlineCTA
        title={serviceName ? `Ready to start your ${serviceName} project?` : "Ready to start your project?"}
        description="Free consultation · Phased estimate · Response within one business day"
        context={context}
        location="service_inline"
        className={className}
      />
    );
  }

  return (
    <div className={className}>
      <TrustCTA
        location="service_footer"
        context={context}
        title={serviceName ? `Start your ${serviceName} project` : "Let's build something extraordinary"}
        description="Tell us about your requirements. We'll respond with a clear path forward and transparent estimate."
      />
      {(caseStudySlug || industrySlug || serviceSlug) && (
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-4 text-sm">
          {caseStudySlug ? (
            <Link
              href={`${CONVERSION_ROUTES.caseStudies}/${caseStudySlug}`}
              className="font-medium text-brand-500 hover:text-brand-400"
            >
              View related case study <ArrowRight className="inline h-3.5 w-3.5" />
            </Link>
          ) : null}
          {industrySlug ? (
            <Link
              href={`${CONVERSION_ROUTES.industries}/${industrySlug}`}
              className="font-medium text-brand-500 hover:text-brand-400"
            >
              Explore industry solutions
            </Link>
          ) : null}
          {serviceSlug ? (
            <Link
              href={`${CONVERSION_ROUTES.services}/${serviceSlug}`}
              className="font-medium text-[var(--v6-text-secondary)] hover:text-brand-600"
            >
              All {serviceName} capabilities
            </Link>
          ) : null}
          <TertiaryCTA location="service_footer_links" size="sm" variant="ghost" />
        </div>
      )}
    </div>
  );
}

export function ServiceCTAStrip({ serviceName }: { serviceName: string }) {
  return <StickyCTA context={serviceContext(serviceName)} location="service_sticky" />;
}

export function ServiceBreadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/40">
      <Link href="/" className="hover:text-white/70 transition-colors">
        Home
      </Link>
      <span>/</span>
      <Link href="/services" className="hover:text-white/70 transition-colors">
        Services
      </Link>
      <span>/</span>
      <span className="text-white/70">{title}</span>
    </nav>
  );
}
