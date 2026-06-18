/** Premium software ecosystem illustration — CSS-only, reference-aligned */
export function HeroEcosystemVisual() {
  return (
    <div className="v6-eco" aria-hidden>
      <div className="v6-eco__blob v6-eco__blob--1" />
      <div className="v6-eco__blob v6-eco__blob--2" />
      <div className="v6-eco__blob v6-eco__blob--3" />

      <div className="v6-eco-stack">
      <div className="v6-eco-dashboard">
        <div className="flex gap-3">
          <div className="flex w-10 shrink-0 flex-col gap-2 rounded-xl bg-[#f1f5f9] p-2">
            <span className="h-8 w-8 rounded-lg bg-[#4f46e5]/15" />
            <span className="h-6 w-6 rounded-md bg-[#e2e8f0]" />
            <span className="h-6 w-6 rounded-md bg-[#e2e8f0]" />
            <span className="h-6 w-6 rounded-md bg-[#e2e8f0]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-[var(--v6-text-muted)]">Overview</p>
            <p className="mt-3 text-sm font-semibold text-[#0f172a]">Active Projects</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-[#0f172a]">24</span>
              <span className="rounded-full bg-[#10b981]/15 px-2 py-0.5 text-xs font-semibold text-[#047857]">
                +20%
              </span>
            </div>
            <div className="mt-4 h-16 overflow-hidden rounded-xl bg-gradient-to-t from-[#4f46e5]/5 to-transparent">
              <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="v6-chart" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 45 Q40 40 80 28 T160 12 L200 8 L200 60 L0 60 Z"
                  fill="url(#v6-chart)"
                  opacity="0.35"
                />
                <path
                  d="M0 45 Q40 40 80 28 T160 12 L200 8"
                  fill="none"
                  stroke="url(#v6-chart)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-2">
                <p className="text-[10px] text-[var(--v6-text-muted)]">Tasks Completed</p>
                <p className="font-semibold text-[#0f172a]">1,248</p>
              </div>
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-2">
                <p className="text-[10px] text-[var(--v6-text-muted)]">Client Satisfaction</p>
                <p className="font-semibold text-[#0f172a]">4.9/5</p>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#e2e8f0]">
                  <div className="h-full w-[92%] rounded-full bg-[#f59e0b]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="v6-eco-portal">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
            Customer Portal
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live
          </span>
        </div>

        <div className="mt-3 flex items-start gap-3">
          <div className="v6-eco-portal__ring" aria-hidden>
            <span className="v6-eco-portal__ring-inner">85%</span>
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className="text-sm font-semibold leading-tight text-white">Project Progress</p>
            <p className="mt-0.5 text-xs font-medium text-white/80">Website Rebuild</p>
            <p className="mt-0.5 text-[11px] font-medium text-[#c4b5fd]">Phase 3 · In Progress</p>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex justify-between text-[9px] font-medium uppercase tracking-wide text-white/40">
            <span className="text-[#a78bfa]">Plan</span>
            <span className="text-[#a78bfa]">Design</span>
            <span className="text-white/90">Develop</span>
            <span>Launch</span>
          </div>
          <div className="v6-eco-portal__phase-track">
            <div className="v6-eco-portal__phase-seg">
              <div className="v6-eco-portal__phase-fill v6-eco-portal__phase-fill--full" />
            </div>
            <div className="v6-eco-portal__phase-seg">
              <div className="v6-eco-portal__phase-fill v6-eco-portal__phase-fill--full" />
            </div>
            <div className="v6-eco-portal__phase-seg">
              <div className="v6-eco-portal__phase-fill v6-eco-portal__phase-fill--68" />
            </div>
            <div className="v6-eco-portal__phase-seg">
              <div className="v6-eco-portal__phase-fill v6-eco-portal__phase-fill--empty" />
            </div>
          </div>
        </div>

        <p className="mt-2.5 text-[10px] leading-snug text-white/55">
          <span className="text-[#10b981]">✓</span> Design approved ·{" "}
          <span className="text-[#c4b5fd]">API in review</span>
        </p>

        <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-white/8 pt-2.5">
          <span className="text-[9px] text-white/45">3 updates today</span>
          <span className="shrink-0 text-[9px] font-semibold text-[#c4b5fd]">View portal →</span>
        </div>
      </div>
      </div>

      <div className="absolute right-[2%] top-[8%] z-[4] rounded-2xl border border-[#e2e8f0] bg-white p-3 shadow-lg">
        <p className="text-[10px] font-medium text-[var(--v6-text-muted)]">Team Activity</p>
        <div className="mt-2 flex -space-x-2">
          {["bg-indigo-400", "bg-violet-400", "bg-amber-500"].map((colorClass) => (
            <span
              key={colorClass}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white ${colorClass}`}
            >
              +
            </span>
          ))}
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#f1f5f9] text-xs font-semibold text-[#475569]">
            12
          </span>
        </div>
      </div>

      <div className="absolute right-0 top-[42%] z-[4] flex max-w-[140px] items-center gap-2 rounded-2xl border border-[#e2e8f0] bg-white p-3 shadow-md">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4f46e5]/10 text-[#4f46e5]">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        </span>
        <p className="text-[10px] leading-snug text-[#475569]">
          <span className="font-semibold text-[#0f172a]">Secure</span>
          <br />
          Your data is always protected
        </p>
      </div>
    </div>
  );
}
