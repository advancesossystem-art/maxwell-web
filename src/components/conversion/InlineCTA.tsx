import { Card } from "@/components/design/Card";
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
    <Card
      interactive={false}
      padding="lg"
      className={cn(
        "flex flex-col items-center justify-between gap-6 border-brand-600/15 bg-brand-50/5 sm:flex-row",
        className,
      )}
    >
      <div className="text-center sm:text-left">
        <p className="font-display font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-[#94A3B8]">{description}</p>
        <TrustNearCTA compact className="mt-4 justify-start" />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <PrimaryCTA context={context} location={location} size="sm" showArrow={false} />
        <SecondaryCTA context={context} location={location} size="sm" variant="secondary" />
      </div>
    </Card>
  );
}
