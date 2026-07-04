"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { trackLeadClick } from "@/lib/conversion-events";

interface StickyEstimateCTAProps {
  service?: string;
  source?: string;
}

export function StickyEstimateCTA({ service = "", source = "" }: StickyEstimateCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setVisible(scrolled / total > 0.4);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const estimateUrl = `/get-estimate?${service ? `service=${encodeURIComponent(service)}&` : ""}source=${source || "sticky-cta"}`;
  const waUrl = `https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I%20read%20your%20article%20and%20want%20to%20discuss%20a%20project.`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm font-medium text-gray-700 text-center sm:text-left">
          Need a website or software for your business?{" "}
          <span className="text-blue-600">Free estimate in 24 hours.</span>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadClick("whatsapp")}
            className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
          <Link
            href={estimateUrl}
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Free Estimate →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StickyEstimateCTA;
