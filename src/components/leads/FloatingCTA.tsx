"use client";

import { siteConfig, WHATSAPP_HREF_FLOATING } from "@/lib/constants";
import { trackLeadClick } from "@/lib/conversion-events";
import { useCookieBannerVisible } from "@/hooks/useMediaQuery";
import { IconWhatsApp } from "@/components/ui/Icons";

const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

export function FloatingCTA() {
  const cookieVisible = useCookieBannerVisible();

  if (cookieVisible) return null;

  return (
    <div
      className="mobile-fixed-chrome fixed bottom-6 right-4 z-50 flex flex-col gap-2 lg:bottom-8 lg:right-6"
      data-intro-chrome
      data-floating-cta
    >
      <a
        href={WHATSAPP_HREF_FLOATING}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLeadClick("whatsapp")}
        className="flex min-h-[44px] items-center gap-2 rounded-full bg-[#25D366] px-3 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
        aria-label="Chat on WhatsApp"
      >
        <IconWhatsApp className="h-5 w-5 text-white" />
        <span>WhatsApp</span>
      </a>

      <a
        href={telHref}
        onClick={() => trackLeadClick("call")}
        className="flex min-h-[44px] items-center gap-2 rounded-full bg-[#6366f1] px-3 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
        aria-label={`Call Now ${siteConfig.phone}`}
      >
        <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <span>Call Now</span>
      </a>
    </div>
  );
}
