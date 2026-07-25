"use client";

import {
  homeMarqueeRow1Loop,
  homeMarqueeRow2Loop,
  type MarqueeTile,
} from "@/lib/home-marquee-tiles";
import { ScrollMarquee } from "@/components/motion/ScrollMarquee";
import { FadeIn } from "@/components/motion/FadeIn";

function MarqueeTileCard({ tile }: { tile: MarqueeTile }) {
  return (
    <div
      className="flex h-[220px] w-[360px] max-w-[85vw] shrink-0 flex-col justify-end rounded-2xl p-6 text-white sm:h-[270px] sm:w-[420px]"
      style={{ background: tile.gradient }}
    >
      <p className="font-display text-2xl font-bold tracking-tight">{tile.label}</p>
      <p className="mt-1 text-sm font-medium text-white/75">{tile.sublabel}</p>
    </div>
  );
}

/** Jack-style dual-row scroll marquee — Maxwell capabilities. */
export function HomeScrollMarquee() {
  return (
    <section
      className="v6-section v6-section--soft overflow-x-clip !pb-10 !pt-16 sm:!pt-24"
      aria-label="Capabilities preview"
    >
      <FadeIn>
        <p className="v6-container v6-eyebrow mb-6">What we ship</p>
      </FadeIn>
      <div className="flex flex-col gap-3">
        <ScrollMarquee direction="right">
          {homeMarqueeRow1Loop.map((tile, i) => (
            <MarqueeTileCard key={`${tile.id}-${i}`} tile={tile} />
          ))}
        </ScrollMarquee>
        <ScrollMarquee direction="left">
          {homeMarqueeRow2Loop.map((tile, i) => (
            <MarqueeTileCard key={`${tile.id}-${i}`} tile={tile} />
          ))}
        </ScrollMarquee>
      </div>
    </section>
  );
}
