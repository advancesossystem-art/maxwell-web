"use client";

import { Button } from "@/components/ui/Button";
import { persistLeadContext } from "@/lib/lead-context";
import {
  CTA_LABELS,
  CONVERSION_ROUTES,
  type ConversionContext,
} from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import type { ComponentProps } from "react";

type SecondaryCTAProps = Omit<ComponentProps<typeof Button>, "href" | "children"> & {
  context?: ConversionContext;
  location?: string;
  label?: string;
};

export function SecondaryCTA({
  context,
  location = "page",
  label = CTA_LABELS.secondary,
  size = "lg",
  variant = "outline",
  onClick,
  ...props
}: SecondaryCTAProps) {
  const href = CONVERSION_ROUTES.estimate;

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
    </Button>
  );
}
