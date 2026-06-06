import { trustLogos } from "@/lib/constants";

export function LogoMarquee() {
  const logos = [...trustLogos, ...trustLogos];

  return (
    <section className="border-y border-border bg-surface py-8" aria-label="Trusted by">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted">
        Trusted by industry leaders
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
        <div className="marquee-track flex w-max items-center gap-16 px-8">
          {logos.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="whitespace-nowrap font-display text-lg font-semibold text-foreground/30"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
