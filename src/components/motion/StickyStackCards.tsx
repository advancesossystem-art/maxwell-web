"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/components/motion/FadeIn";

export type StickyStackCard = {
  id: string;
  index: string;
  category: string;
  title: string;
  href: string;
  ctaLabel?: string;
  body: ReactNode;
};

type StickyStackCardsProps = {
  cards: StickyStackCard[];
  className?: string;
  heading?: ReactNode;
};

/** Sticky stacking cards with scroll-linked scale (Jack Projects pattern). */
export function StickyStackCards({ cards, className, heading }: StickyStackCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const container = containerRef.current;
    if (!container) return;

    const cardEls = container.querySelectorAll<HTMLElement>("[data-stack-card]");
    const total = cardEls.length;

    let raf = 0;
    const update = () => {
      cardEls.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const stickyTop = parseFloat(getComputedStyle(card).top) || 96;
        const progress = Math.min(1, Math.max(0, (stickyTop - rect.top) / (rect.height * 0.85)));
        const targetScale = 1 - (total - 1 - index) * 0.03;
        const scale = 1 - progress * (1 - targetScale);
        card.style.transform = `scale(${scale})`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduce, cards.length]);

  return (
    <div className={cn(className)}>
      {heading}
      <div ref={containerRef} className="relative mt-12 space-y-6 pb-16">
        {cards.map((card, index) => (
          <div
            key={card.id}
            data-stack-card
            className="sticky z-[1] h-[min(85vh,720px)] origin-top md:top-32"
            style={{ top: `${96 + index * 28}px`, zIndex: index + 1 }}
          >
            <article className="mx-sticky-stack-card flex h-full flex-col rounded-[2rem] border-2 border-[var(--v6-border-strong)] bg-[var(--v6-bg-white)] p-4 shadow-lg sm:rounded-[2.5rem] sm:p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--v6-border)] pb-4">
                <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-3 sm:gap-6">
                  <span className="font-display text-4xl font-black text-[var(--v6-text)] sm:text-6xl md:text-7xl">
                    {card.index}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--v6-text-muted)]">
                      {card.category}
                    </p>
                    <h3 className="font-display text-xl font-bold text-[var(--v6-text)] sm:text-2xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <Link
                  href={card.href}
                  className="rounded-full border-2 border-[var(--v6-text)] px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[var(--v6-text)] transition-colors hover:bg-[var(--v6-text)]/5 sm:text-sm"
                >
                  {card.ctaLabel ?? "View project"}
                </Link>
              </div>
              <div className="mt-4 flex flex-1 flex-col justify-center">{card.body}</div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
