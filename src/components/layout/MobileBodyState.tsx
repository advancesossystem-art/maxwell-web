"use client";

import { useEffect } from "react";

/** Syncs mobile UI state to document.body for CSS sticky layering (safe areas, offsets). */
export function MobileBodyState({
  stickyBarActive = false,
}: {
  stickyBarActive?: boolean;
}) {
  useEffect(() => {
    document.body.dataset.mobileSticky = stickyBarActive ? "true" : "false";
    return () => {
      delete document.body.dataset.mobileSticky;
    };
  }, [stickyBarActive]);

  return null;
}
