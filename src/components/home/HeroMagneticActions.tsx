"use client";

import { Magnet } from "@/components/motion/Magnet";
import { Button } from "@/components/ui/Button";
import { homeHero } from "@/lib/homepage";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";

export function HeroMagneticActions({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Magnet padding={120} strength={4}>
          <Button href={homeHero.primaryCta.href} size="lg" variant="primary">
            {homeHero.primaryCta.label}
          </Button>
        </Magnet>
        <Magnet padding={100} strength={5}>
          <Button href={WHATSAPP_HREF_CONTACT} size="lg" variant="outline" external>
            {homeHero.secondaryCta.label}
          </Button>
        </Magnet>
      </div>
    </div>
  );
}
