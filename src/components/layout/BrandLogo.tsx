import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

/** Intrinsic size of public/logo.png — update if you replace the file */
const LOGO_WIDTH = 1672;
const LOGO_HEIGHT = 941;
const LOGO_ASPECT = LOGO_WIDTH / LOGO_HEIGHT;

type BrandLogoProps = {
  size?: "sm" | "md" | "lg" | "header" | "footer";
  className?: string;
  href?: string;
  priority?: boolean;
};

const heightPx = {
  footer: 128,
  sm: 140,
  md: 160,
  lg: 200,
  header: 64,
} as const;

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

export function BrandLogo({
  size = "md",
  className,
  href = "/",
  priority = false,
}: BrandLogoProps) {
  const height = heightPx[size];

  const image = (
    <Image
      src="/logo.png"
      alt={siteConfig.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      sizes={sizesAttr[size]}
      className={cn("w-auto object-contain object-left", heightClass[size], className)}
      style={{ aspectRatio: `${LOGO_WIDTH} / ${LOGO_HEIGHT}`, maxWidth: `${Math.round(height * LOGO_ASPECT)}px` }}
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
