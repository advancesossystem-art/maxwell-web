"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import {
  CTA_LABELS,
  consultationHref,
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
  const href = consultationHref(context);

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
      {showArrow ? <ArrowRight /> : null}
    </Button>
  );
}
