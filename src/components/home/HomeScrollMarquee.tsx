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
      className={wide ? "mx-ship-card mx-ship-card--wide" : "mx-ship-card"}
      style={{ backgroundColor: tile.color }}
    >
      <p className="mx-ship-card-title">{tile.label}</p>
      <p className="mx-ship-card-sub">{tile.sublabel}</p>
    </div>
  );
}

/**
 * Exact “What we ship” screenshot layout:
 * soft band, eyebrow only, solid color cards, dual opposing scroll rows.
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

      <div className="v6-container grid gap-3 sm:grid-cols-2 md:hidden">
        {allTiles.map((tile) => (
          <MarqueeTileCard key={tile.id} tile={tile} />
        ))}
      </div>

      <div className="relative hidden flex-col gap-3 md:flex">
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
