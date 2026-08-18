"use client";

import type { ConversionContext } from "@/lib/conversion-copy";

type StickyCTAProps = {
  context?: ConversionContext;
  location?: string;
  className?: string;
  dismissed?: boolean;
  onDismiss?: () => void;
};

/** Bottom quote ribbon removed sitewide. */
export function StickyCTA(_props: StickyCTAProps) {
  return null;
}
