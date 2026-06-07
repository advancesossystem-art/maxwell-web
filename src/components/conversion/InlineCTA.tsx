import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { TrustNearCTA } from "@/components/conversion/TrustNearCTA";
import type { ConversionContext } from "@/lib/conversion-copy";
import { cn } from "@/lib/utils";

type InlineCTAProps = {
  title: string;
  description: string;
  context?: ConversionContext;
  location?: string;
  className?: string;
};

export function InlineCTA({
  title,
  description,
  context,
  location = "inline_cta",
  className,
}: InlineCTAProps) {
  return (
    <div className={cn("v6-inline-cta", className)}>
      <div className="text-center sm:text-left">
        <p className="v6-inline-cta__title">{title}</p>
        <p className="v6-inline-cta__desc">{description}</p>
        <TrustNearCTA compact className="mt-4 justify-start" />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <PrimaryCTA context={context} location={location} size="sm" showArrow={false} />
        <SecondaryCTA context={context} location={location} size="sm" variant="secondary" />
      </div>
    </div>
  );
}
