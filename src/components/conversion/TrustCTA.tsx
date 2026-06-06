import { Container } from "@/components/ui/Container";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { TertiaryCTA } from "@/components/conversion/TertiaryCTA";
import { TrustNearCTA } from "@/components/conversion/TrustNearCTA";
import type { ConversionContext } from "@/lib/conversion-copy";
import { CONVERSION_EXPECTATIONS } from "@/lib/conversion-copy";
import { cn } from "@/lib/utils";

type TrustCTAProps = {
  title: React.ReactNode;
  description: string;
  context?: ConversionContext;
  location?: string;
  showTertiary?: boolean;
  showTrustNear?: boolean;
  variant?: "default" | "dark";
  className?: string;
};

export function TrustCTA({
  title,
  description,
  context,
  location = "trust_cta",
  showTertiary = true,
  showTrustNear = true,
  variant = "default",
  className,
}: TrustCTAProps) {
  if (variant === "dark") {
    return (
      <section className={cn(className)} aria-label="Call to action">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1220] px-8 py-16 sm:px-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#A5B4CC]">{description}</p>
              <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
                <PrimaryCTA context={context} location={location} />
                <SecondaryCTA context={context} location={location} />
                {showTertiary ? <TertiaryCTA location={location} /> : null}
              </div>
              {showTrustNear ? <TrustNearCTA variant="dark" className="mt-8" /> : null}
              {showTrustNear ? (
                <p className="mt-4 text-xs text-white/35">{CONVERSION_EXPECTATIONS.responseTime}</p>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={cn("section-py-compact", className)} aria-label="Call to action">
      <Container>
        <div className="v6-card flex flex-col gap-8 border-[#4f46e5]/15 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-10">
          <div className="min-w-0 flex-1 text-left">
            <h2 className="v6-section-title v6-section-title--wide text-balance">{title}</h2>
            <p className="v6-lead mt-4 max-w-2xl">{description}</p>
            {showTrustNear ? (
              <TrustNearCTA className="mt-6 justify-start text-left" />
            ) : null}
            {showTrustNear ? (
              <p className="mt-3 text-xs text-[var(--v6-text-muted)]">
                {CONVERSION_EXPECTATIONS.responseTime}
              </p>
            ) : null}
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:min-w-[17rem] lg:flex-col">
            <PrimaryCTA context={context} location={location} />
            <SecondaryCTA context={context} location={location} />
            {showTertiary ? <TertiaryCTA location={location} /> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
