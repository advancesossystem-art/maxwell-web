import { Button } from "@/components/ui/Button";
import { homeHero } from "@/lib/homepage";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";

export function HeroMagneticActions({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={homeHero.primaryCta.href} size="lg" variant="primary">
          {homeHero.primaryCta.label}
        </Button>
        <Button href={WHATSAPP_HREF_CONTACT} size="lg" variant="outline" external>
          {homeHero.secondaryCta.label}
        </Button>
      </div>
    </div>
  );
}
