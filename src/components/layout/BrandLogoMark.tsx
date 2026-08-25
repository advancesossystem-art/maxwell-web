import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

/** Intrinsic size of public/logo.png */
const LOGO_WIDTH = 1774;
const LOGO_HEIGHT = 887;

type BrandLogoSize = "navMobile" | "header" | "footer" | "sm" | "md" | "lg";

type BrandLogoProps = {
  size?: BrandLogoSize;
  className?: string;
  href?: string;
  priority?: boolean;
};

const heightClass: Record<BrandLogoSize, string> = {
  navMobile: "h-8",
  header: "h-9",
  footer: "h-20",
  sm: "h-14",
  md: "h-16",
  lg: "h-24",
};

const maxWidthClass: Record<BrandLogoSize, string> = {
  navMobile: "max-w-[140px]",
  header: "max-w-[168px]",
  footer: "max-w-[220px]",
  sm: "max-w-[200px]",
  md: "max-w-[240px]",
  lg: "max-w-[320px]",
};

/** Single source of truth for site logo sizing (nav / header / footer). */
export function BrandLogo({
  size = "md",
  className,
  href = "/",
  priority = false,
}: BrandLogoProps) {
  const image = (
    <Image
      src={siteConfig.logoPath}
      alt={siteConfig.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      unoptimized
      className={cn(
        "w-auto object-contain object-left aspect-[1774/887]",
        heightClass[size],
        maxWidthClass[size],
        className,
      )}
    />
  );

  if (!href) return image;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
    >
      {image}
    </Link>
  );
}
