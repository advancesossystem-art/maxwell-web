"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { persistLeadContext } from "@/lib/lead-context";
import {
  CTA_LABELS,
  CONVERSION_ROUTES,
  type ConversionContext,
} from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import type { ComponentProps } from "react";

type PrimaryCTAProps = Omit<ComponentProps<typeof Button>, "href" | "children"> & {
  context?: ConversionContext;
  location?: string;
  showArrow?: boolean;
  label?: string;
};

export function PrimaryCTA({
  context,
  location = "page",
  showArrow = true,
  label = CTA_LABELS.primary,
  size = "lg",
  variant = "primary",
  onClick,
  ...props
}: PrimaryCTAProps) {
  const href = CONVERSION_ROUTES.consultation;

  return (
    <Button
      href={href}
      size={size}
      variant={variant}
      onClick={(e) => {
        if (context) persistLeadContext(context);
        trackCTAClick(label, href, location);
        onClick?.(e);
      }}
      {...props}
    >
      {label}
      {showArrow ? <ArrowRight /> : null}
    </Button>
  );
}
