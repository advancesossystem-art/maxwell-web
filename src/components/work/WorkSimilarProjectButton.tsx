"use client";

import { Button } from "@/components/ui/Button";
import { CTA_LABELS } from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import type { ComponentProps } from "react";

type WorkSimilarProjectButtonProps = Omit<ComponentProps<typeof Button>, "onClick" | "children"> & {
  href: string;
  location: string;
};

export function WorkSimilarProjectButton({ href, location, ...props }: WorkSimilarProjectButtonProps) {
  return (
    <Button
      href={href}
      onClick={() => trackCTAClick(CTA_LABELS.similarProject, href, location)}
      {...props}
    >
      {CTA_LABELS.similarProject}
    </Button>
  );
}
