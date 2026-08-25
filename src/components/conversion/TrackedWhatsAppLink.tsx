"use client";

import type { ComponentPropsWithoutRef } from "react";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";
import { trackLeadClick } from "@/lib/conversion-events";
import { cn } from "@/lib/utils";

type TrackedWhatsAppLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href?: string;
};

/** WhatsApp CTA with conversion tracking. */
export function TrackedWhatsAppLink({
  className,
  children,
  onClick,
  href = WHATSAPP_HREF_CONTACT,
  ...rest
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      onClick={(e) => {
        trackLeadClick("whatsapp");
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
