"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackCTAClick } from "@/lib/conversion-events";
import { useCookieBannerVisible, useIsMobile } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { isPortalRoute } from "@/lib/mobile-sticky";

const DISMISS_KEY = "sticky-cta-bar-dismissed";
const HREF = "/get-estimate";
const HIDE_ON = ["/contact", "/get-estimate", "/book-consultation", "/discovery-call", "/thank-you"];

export function StickyCtaBar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const cookieVisible = useCookieBannerVisible();
  const [inRange, setInRange] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setInRange(y > 300 && y < 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  }

  if (
    isMobile ||
    cookieVisible ||
    dismissed ||
    !inRange ||
    isPortalRoute(pathname) ||
    HIDE_ON.some((p) => pathname === p)
  ) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-[45] border-b border-white/10 bg-[#0f172a] text-white shadow-md",
      )}
      role="region"
      aria-label="Get a quote"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6">
        <Link
          href={HREF}
          onClick={() => trackCTAClick("Get a Free Quote for Your Project", HREF, "sticky_top_bar")}
          className="min-w-0 flex-1 text-center text-sm font-semibold sm:text-left sm:text-base"
        >
          Get a Free Quote for Your Project →
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Dismiss quote bar"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
