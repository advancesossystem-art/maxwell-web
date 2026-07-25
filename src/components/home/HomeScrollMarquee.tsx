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

function MarqueeTileCard({ tile }: { tile: MarqueeTile }) {
  return (
    <div
      className="flex h-[200px] w-full flex-col justify-end rounded-2xl p-5 text-white sm:h-[240px] sm:p-6"
      style={{ background: tile.gradient }}
    >
      <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">{tile.label}</p>
      <p className="mt-1 text-sm font-medium text-white/75">{tile.sublabel}</p>
    </div>
  );
}

function MarqueeTileCardWide({ tile }: { tile: MarqueeTile }) {
  return (
    <div
      className="flex h-[270px] w-[400px] shrink-0 flex-col justify-end rounded-2xl p-6 text-white"
      style={{ background: tile.gradient }}
    >
      <p className="font-display text-2xl font-bold tracking-tight">{tile.label}</p>
      <p className="mt-1 text-sm font-medium text-white/75">{tile.sublabel}</p>
    </div>
  );
}

/**
 * Jack-style dual-row scroll marquee (md+) and unique-tile grid (mobile).
 * Both trees always render so SSR HTML matches the client (no useState branch).
 */
export function HomeScrollMarquee() {
  const allTiles = [...homeMarqueeRow1, ...homeMarqueeRow2];

  return (
    <section
      className="v6-section v6-section--soft overflow-x-clip !pb-16 !pt-14 sm:!pb-20 sm:!pt-20"
      aria-label="Capabilities preview"
      data-home-marquee
    >
      <FadeIn>
        <div className="v6-container mb-8">
          <p className="v6-eyebrow">What we ship</p>
          <h2 className="v6-section-title mt-3 text-balance">
            Built for manufacturers &amp; growing businesses
          </h2>
        </div>
      </FadeIn>

      {/* Mobile / small tablet — unique tiles, no loop duplicates */}
      <div className="v6-container grid gap-3 sm:grid-cols-2 md:hidden">
        {allTiles.map((tile) => (
          <MarqueeTileCard key={tile.id} tile={tile} />
        ))}
      </div>

      {/* Desktop — scroll-linked rows with edge fades */}
      <div className="relative hidden flex-col gap-3 md:flex">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-[var(--v6-bg-soft)] to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-[var(--v6-bg-soft)] to-transparent sm:w-20"
          aria-hidden
        />
        <ScrollMarquee direction="right">
          {homeMarqueeRow1Loop.map((tile, i) => (
            <MarqueeTileCardWide key={`${tile.id}-r1-${i}`} tile={tile} />
          ))}
        </ScrollMarquee>
        <ScrollMarquee direction="left">
          {homeMarqueeRow2Loop.map((tile, i) => (
            <MarqueeTileCardWide key={`${tile.id}-r2-${i}`} tile={tile} />
          ))}
        </ScrollMarquee>
      </div>
    </section>
  );
}
