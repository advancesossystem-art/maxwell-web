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
          ? "flex h-[270px] w-[420px] shrink-0 flex-col justify-end rounded-2xl p-6 text-white"
          : "flex h-[200px] w-full flex-col justify-end rounded-2xl p-5 text-white sm:h-[220px]"
      }
      style={{ background: tile.gradient }}
    >
      <p className={`font-display font-bold tracking-tight ${wide ? "text-2xl" : "text-xl"}`}>
        {tile.label}
      </p>
      <p className="mt-1 text-sm font-medium text-white/75">{tile.sublabel}</p>
    </div>
  );
}

/**
 * Exact “What we ship” dual-row scroll marquee (Jack-style).
 * Mobile grid + desktop rows both always in DOM for hydration safety.
 */
export function HomeScrollMarquee() {
  const allTiles = [...homeMarqueeRow1, ...homeMarqueeRow2];

  return (
    <section
      className="v6-section v6-section--soft overflow-x-clip !pb-10 !pt-16 sm:!pt-24"
      aria-label="What we ship"
      data-home-marquee
    >
      <FadeIn>
        <p className="v6-container v6-eyebrow mb-6">What we ship</p>
      </FadeIn>

      {/* Mobile — unique tiles, no loop duplicates */}
      <div className="v6-container grid gap-3 sm:grid-cols-2 md:hidden">
        {allTiles.map((tile) => (
          <MarqueeTileCard key={tile.id} tile={tile} />
        ))}
      </div>

      {/* Desktop — two opposing scroll rows with edge fades */}
      <div className="relative hidden flex-col gap-3 md:flex">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-[var(--v6-bg-soft)] to-transparent lg:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-[var(--v6-bg-soft)] to-transparent lg:w-24"
          aria-hidden
        />
        <ScrollMarquee direction="right">
          {homeMarqueeRow1Loop.map((tile, i) => (
            <MarqueeTileCard key={`${tile.id}-r1-${i}`} tile={tile} wide />
          ))}
        </ScrollMarquee>
        <ScrollMarquee direction="left">
          {homeMarqueeRow2Loop.map((tile, i) => (
            <MarqueeTileCard key={`${tile.id}-r2-${i}`} tile={tile} wide />
          ))}
        </ScrollMarquee>
      </div>
    </section>
  );
}
