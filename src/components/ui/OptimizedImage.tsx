import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
};

/**
 * Standard next/image wrapper — use when raster assets are added.
 * Defaults: lazy load, responsive, modern formats via next.config.
 */
export function OptimizedImage({
  priority = false,
  placeholder = "empty",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      loading={priority ? undefined : "lazy"}
      placeholder={placeholder}
      sizes={sizes}
      priority={priority}
      alt={alt}
      {...props}
    />
  );
}
