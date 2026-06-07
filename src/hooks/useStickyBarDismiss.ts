"use client";

import { useCallback, useEffect, useState } from "react";
import { dismissStickyBar, isStickyBarDismissed } from "@/lib/sticky-bar-dismiss";

export function useStickyBarDismiss() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(isStickyBarDismissed());
  }, []);

  const dismiss = useCallback(() => {
    dismissStickyBar();
    setDismissed(true);
  }, []);

  return { dismissed, dismiss };
}
