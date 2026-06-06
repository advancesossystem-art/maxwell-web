"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { CTA_LABELS, CONVERSION_ROUTES } from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import type { ComponentProps } from "react";

type TertiaryCTAProps = Omit<ComponentProps<typeof Button>, "href" | "children"> & {
  location?: string;
  href?: string;
};

export function TertiaryCTA({
  location = "page",
  href = CONVERSION_ROUTES.services,
  size = "lg",
  variant = "glass",
  onClick,
  ...props
}: TertiaryCTAProps) {
  return (
    <Button
      href={href}
      size={size}
      variant={variant}
      onClick={(e) => {
        trackCTAClick(CTA_LABELS.tertiary, href, location);
        onClick?.(e);
      }}
      {...props}
    >
      {CTA_LABELS.tertiary}
      <ArrowRight />
    </Button>
  );
}
