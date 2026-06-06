"use client";

import { Button } from "@/components/ui/Button";
import {
  CTA_LABELS,
  estimateHref,
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
  const href = estimateHref(context);

  return (
    <Button
      href={href}
      size={size}
      variant={variant}
      onClick={(e) => {
        trackCTAClick(label, href, location);
        onClick?.(e);
      }}
      {...props}
    >
      {label}
    </Button>
  );
}
