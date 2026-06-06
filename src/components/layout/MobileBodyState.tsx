"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Syncs mobile UI state to document.body for CSS sticky layering (safe areas, offsets). */
export function MobileBodyState({
  stickyBarActive = false,
}: {
  stickyBarActive?: boolean;
}) {
  const pathname = usePathname();
  const isPortal = pathname?.startsWith("/portal") ?? false;

  useEffect(() => {
    document.body.dataset.portalRoute = isPortal ? "true" : "false";
    document.body.dataset.mobileSticky = stickyBarActive ? "true" : "false";
    return () => {
      delete document.body.dataset.portalRoute;
      delete document.body.dataset.mobileSticky;
    };
  }, [isPortal, stickyBarActive]);

  return null;
}
