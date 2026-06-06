/** Layered product surfaces — premium showcase without dashboard or telemetry cues */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-hidden>
      <div
        className="pointer-events-none absolute inset-[10%] rounded-[2rem] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(37, 99, 235, 0.14), transparent 65%)",
        }}
      />

      <div className="relative aspect-[4/5] w-full sm:aspect-square">
        <div className="absolute left-[6%] top-[8%] w-[80%] rotate-[-2.5deg] rounded-2xl border border-white/[0.09] bg-brand-800/90 p-4 shadow-[0_32px_64px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-transform duration-500 hover:rotate-[-1.5deg]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-auto text-[10px] font-medium tracking-wide text-muted">Operations</span>
          </div>
          <div className="mt-4 space-y-3">
            <div className="h-2.5 w-[68%] rounded-full bg-white/12" />
            <div className="h-2 w-[42%] rounded-full bg-white/[0.07]" />
            <div className="mt-5 space-y-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-brand-600/25" />
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-[70%] rounded-full bg-white/[0.06]" />
                </div>
              </div>
              <div className="h-2 w-full rounded-full bg-white/[0.05]" />
              <div className="h-2 w-[85%] rounded-full bg-white/[0.05]" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-[6%] right-[2%] w-[68%] rotate-[2deg] rounded-2xl border border-white/[0.1] bg-surface-elevated/95 p-4 shadow-[0_28px_56px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:rotate-[1deg]">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-400">
              Customer portal
            </span>
          </div>
          <div className="mt-4 flex gap-2">
            <div className="h-16 flex-1 rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5">
              <div className="h-2 w-2/3 rounded-full bg-white/10" />
              <div className="mt-3 h-8 rounded-lg bg-brand-600/20" />
            </div>
            <div className="h-16 flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
              <div className="h-2 w-1/2 rounded-full bg-white/[0.08]" />
              <div className="mt-3 h-8 rounded-lg bg-white/[0.04]" />
            </div>
          </div>
        </div>

        <div className="absolute left-[0%] top-[44%] w-[36%] rounded-2xl border border-white/[0.08] bg-brand-800 p-3 shadow-xl">
          <div className="mx-auto mb-2.5 h-1 w-9 rounded-full bg-white/12" />
          <div className="space-y-2 rounded-xl bg-white/[0.03] p-2.5">
            <div className="h-1.5 w-full rounded-full bg-white/10" />
            <div className="h-1.5 w-[78%] rounded-full bg-white/[0.06]" />
            <div className="mt-2.5 h-14 rounded-lg bg-gradient-to-br from-brand-600/25 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
