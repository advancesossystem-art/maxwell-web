import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

/** Intrinsic size of public/logo.webp — update if you replace the file */
const LOGO_WIDTH = 1672;
const LOGO_HEIGHT = 941;

type BrandLogoProps = {
  size?: "sm" | "md" | "lg" | "header" | "footer";
  className?: string;
  href?: string;
  priority?: boolean;
};

const heightClass = {
  footer: "h-32",
  sm: "h-[8.75rem]",
  md: "h-40",
  lg: "h-[12.5rem]",
  header: "h-14 sm:h-16",
} as const;

const sizesAttr = {
  footer: "228px",
  sm: "250px",
  md: "285px",
  lg: "356px",
  header: "(max-width: 640px) 114px, 142px",
} as const;

const maxWidthClass = {
  footer: "max-w-[228px]",
  sm: "max-w-[250px]",
  md: "max-w-[285px]",
  lg: "max-w-[356px]",
  header: "max-w-[114px] sm:max-w-[142px]",
} as const;

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
