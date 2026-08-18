import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

/** Intrinsic size of public/logo.webp — update if you replace the file */
const LOGO_WIDTH = 1672;
const LOGO_HEIGHT = 941;

type BrandLogoSize = "navMobile" | "header" | "footer" | "sm" | "md" | "lg";

type BrandLogoProps = {
  size?: BrandLogoSize;
  className?: string;
  href?: string;
  priority?: boolean;
};

const heightClass: Record<BrandLogoSize, string> = {
  navMobile: "h-10",
  header: "h-10 lg:h-11",
  footer: "h-32",
  sm: "h-[8.75rem]",
  md: "h-40",
  lg: "h-[12.5rem]",
};

const sizesAttr: Record<BrandLogoSize, string> = {
  navMobile: "160px",
  header: "(max-width: 640px) 148px, 185px",
  footer: "228px",
  sm: "250px",
  md: "285px",
  lg: "356px",
};

const maxWidthClass: Record<BrandLogoSize, string> = {
  navMobile: "max-w-[160px]",
  header: "max-w-[148px] sm:max-w-[185px]",
  footer: "max-w-[228px]",
  sm: "max-w-[250px]",
  md: "max-w-[285px]",
  lg: "max-w-[356px]",
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
      sizes={sizesAttr[size]}
      className={cn(
        "w-auto object-contain object-left aspect-[1672/941]",
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
