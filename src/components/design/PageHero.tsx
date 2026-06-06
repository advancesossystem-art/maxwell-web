"use client";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/FadeIn";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  below?: React.ReactNode;
  prepend?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
  compact?: boolean;
  layout?: "default" | "split";
};

/** Unified page hero — minimal atmosphere, strong typography */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  below,
  prepend,
  aside,
  className,
  compact = false,
  layout = "default",
}: PageHeroProps) {
  const split = layout === "split" && aside;

  const copy = (
    <>
      {prepend ? <FadeIn>{prepend}</FadeIn> : null}
      {eyebrow ? (
        <FadeIn delay={0.05}>
          <p className="mx-eyebrow">{eyebrow}</p>
        </FadeIn>
      ) : null}
      <FadeIn delay={0.1}>
        <h1
          className={cn(
            "mx-display text-balance",
            split ? "mt-2 max-w-none" : "mt-3 max-w-5xl",
            compact
              ? "text-[clamp(1.75rem,3.5vw,2.5rem)]"
              : "text-[clamp(2rem,4.5vw,3.25rem)]",
          )}
        >
          {title}
        </h1>
      </FadeIn>
      {description ? (
        <FadeIn delay={0.15}>
          <p className={cn("mx-lead", split ? "mt-2 max-w-none" : "mt-3 max-w-3xl lg:max-w-4xl")}>
            {description}
          </p>
        </FadeIn>
      ) : null}
      {children ? (
        <FadeIn delay={0.2}>
          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            {children}
          </div>
        </FadeIn>
      ) : null}
    </>
  );

  return (
    <section
      className={cn(
        "mx-page-hero",
        compact
          ? "pb-5 pt-2 sm:pb-6 sm:pt-3"
          : "pb-6 pt-2 sm:pb-8 sm:pt-3 lg:pb-9 lg:pt-4",
        className,
      )}
    >
      <Container className="relative z-10">
        {split ? (
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
            <div>{copy}</div>
            <FadeIn delay={0.15}>{aside}</FadeIn>
          </div>
        ) : (
          <>
            {copy}
            {below ? (
              <FadeIn delay={0.25}>
                <div className="mt-5 lg:mt-6">{below}</div>
              </FadeIn>
            ) : null}
          </>
        )}
      </Container>
    </section>
  );
}
