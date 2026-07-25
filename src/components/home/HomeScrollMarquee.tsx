"use client";

import {
  homeMarqueeRow1,
  homeMarqueeRow2,
  homeMarqueeRow1Loop,
  homeMarqueeRow2Loop,
  type MarqueeTile,
} from "@/lib/home-marquee-tiles";
import { ScrollMarquee } from "@/components/motion/ScrollMarquee";
import { FadeIn } from "@/components/motion/FadeIn";

function MarqueeTileCard({ tile, wide = false }: { tile: MarqueeTile; wide?: boolean }) {
  return (
    <div
      className={
        wide
          ? "mx-ship-card mx-ship-card--wide"
          : "mx-ship-card"
      }
      style={{ backgroundColor: tile.color }}
    >
      <p className={`font-display font-bold tracking-tight text-white ${wide ? "text-[1.35rem] leading-snug" : "text-xl leading-snug"}`}>
        {tile.label}
      </p>
      <p className="mt-1.5 text-[0.8125rem] font-medium leading-snug text-white/75">
        {tile.sublabel}
      </p>
    </div>
  );
}

/**
 * “What we ship” — dual-row scroll marquee matching Jack-style layout:
 * soft band, eyebrow, full-bleed opposing rows, solid color cards, edge fades.
 */
export function HomeScrollMarquee() {
  const allTiles = [...homeMarqueeRow1, ...homeMarqueeRow2];

  return (
    <section
      className="v6-section v6-section--soft overflow-x-clip !pb-12 !pt-14 sm:!pt-20"
      aria-label="What we ship"
      data-home-marquee
    >
      <FadeIn>
        <p className="v6-container v6-eyebrow mb-7">What we ship</p>
      </FadeIn>

      {/* Mobile — unique tiles, no loop duplicates */}
      <div className="v6-container grid gap-3 sm:grid-cols-2 md:hidden">
        {allTiles.map((tile) => (
          <MarqueeTileCard key={tile.id} tile={tile} />
        ))}
      </div>

      {/* Desktop — two opposing scroll rows with edge fades */}
      <div className="relative hidden flex-col gap-3.5 md:flex">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-20 bg-gradient-to-r from-[var(--v6-bg-soft)] to-transparent lg:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-20 bg-gradient-to-l from-[var(--v6-bg-soft)] to-transparent lg:w-28"
          aria-hidden
        />
        <ScrollMarquee direction="right" speed={0.35} baseOffset={180}>
          {homeMarqueeRow1Loop.map((tile, i) => (
            <MarqueeTileCard key={`${tile.id}-r1-${i}`} tile={tile} wide />
          ))}
        </ScrollMarquee>
        <ScrollMarquee direction="left" speed={0.35} baseOffset={320}>
          {homeMarqueeRow2Loop.map((tile, i) => (
            <MarqueeTileCard key={`${tile.id}-r2-${i}`} tile={tile} wide />
          ))}
        </ScrollMarquee>
      </div>
    </section>
  );
}
