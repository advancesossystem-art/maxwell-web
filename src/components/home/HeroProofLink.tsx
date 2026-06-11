"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/conversion-events";

export function HeroProofLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="font-semibold text-[#4f46e5] hover:underline"
      onClick={() => trackCTAClick("See case outcomes", href, "homepage_hero_proof")}
    >
      {label} →
    </Link>
  );
}
