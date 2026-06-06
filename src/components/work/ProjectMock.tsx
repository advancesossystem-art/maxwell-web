import type { MockType } from "@/lib/projects-data";

function DashboardMock({ accent }: { accent: string }) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-red-400/80" />
        <div className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <div className="h-2 w-2 rounded-full bg-green-400/80" />
        <div className="ml-3 h-2 flex-1 rounded bg-white/10" />
      </div>
      <div className="mt-4 grid flex-1 grid-cols-3 gap-2">
        {[0.7, 0.5, 0.85].map((h, i) => (
          <div key={i} className="rounded-lg bg-white/5 p-2">
            <div className="h-1.5 w-8 rounded bg-white/20" />
            <div className="mt-2 flex items-end gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="flex-1 rounded-sm" style={{ height: `${h * 20 + j * 4}px`, backgroundColor: `${accent}40` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 h-12 rounded-lg bg-white/5" />
    </div>
  );
}

function MobileMock({ accent }: { accent: string }) {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="h-[85%] w-[55%] rounded-2xl border border-white/10 bg-white/5 p-2">
        <div className="mx-auto h-1 w-8 rounded-full bg-white/20" />
        <div className="mt-3 space-y-2">
          <div className="h-8 rounded-lg" style={{ backgroundColor: `${accent}30` }} />
          <div className="h-4 rounded bg-white/10" />
          <div className="h-4 w-3/4 rounded bg-white/10" />
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <div className="h-10 rounded-lg bg-white/5" />
            <div className="h-10 rounded-lg bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MapMock({ accent }: { accent: string }) {
  return (
    <div className="relative h-full p-4">
      <div className="absolute inset-4 rounded-lg bg-white/5">
        <svg className="h-full w-full opacity-30" viewBox="0 0 200 120">
          <path d="M20,60 Q60,20 100,60 T180,40" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="40" cy="55" r="4" fill={accent} />
          <circle cx="100" cy="60" r="4" fill={accent} />
          <circle cx="160" cy="42" r="4" fill={accent} />
        </svg>
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex gap-2">
        <div className="flex-1 rounded-lg bg-white/10 p-2">
          <div className="h-1.5 w-12 rounded bg-white/30" />
          <div className="mt-1 h-2 w-8 rounded" style={{ backgroundColor: accent }} />
        </div>
        <div className="flex-1 rounded-lg bg-white/10 p-2">
          <div className="h-1.5 w-12 rounded bg-white/30" />
          <div className="mt-1 h-2 w-8 rounded bg-emerald-400/60" />
        </div>
      </div>
    </div>
  );
}

function LmsMock({ accent }: { accent: string }) {
  return (
    <div className="flex h-full gap-2 p-4">
      <div className="w-1/4 space-y-1.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-3 rounded bg-white/10" style={i === 0 ? { backgroundColor: `${accent}40` } : {}} />
        ))}
      </div>
      <div className="flex-1 rounded-lg bg-white/5 p-3">
        <div className="h-16 rounded-lg" style={{ backgroundColor: `${accent}25` }} />
        <div className="mt-2 h-2 rounded bg-white/15" />
        <div className="mt-1 h-2 w-2/3 rounded bg-white/10" />
        <div className="mt-3 flex gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-1 flex-1 rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: `${i * 30}%`, backgroundColor: accent }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsMock({ accent }: { accent: string }) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-lg bg-white/5 p-2">
            <div className="h-1 w-6 rounded bg-white/20" />
            <div className="mt-1 text-[8px] font-bold text-white/60">{["₹2.4M", "847", "+23%", "4.2"][i - 1]}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex-1 rounded-lg bg-white/5 p-3">
        <div className="flex h-full items-end gap-1">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: `${accent}${i % 2 === 0 ? "60" : "30"}` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ErpMock({ accent }: { accent: string }) {
  return (
    <div className="flex h-full gap-2 p-4">
      <div className="w-1/5 space-y-1">
        {["Inv", "Prod", "QC", "Ship"].map((l, i) => (
          <div key={l} className="rounded px-1 py-1 text-[7px] text-white/50" style={i === 1 ? { backgroundColor: `${accent}40`, color: "white" } : {}}>{l}</div>
        ))}
      </div>
      <div className="flex-1 space-y-2">
        <div className="grid grid-cols-3 gap-1">
          {["WO-1247", "98%", "₹4.2L"].map((v) => (
            <div key={v} className="rounded bg-white/5 p-2 text-center text-[8px] text-white/70">{v}</div>
          ))}
        </div>
        <div className="flex-1 rounded-lg bg-white/5 p-2">
          <div className="space-y-1">
            {[85, 62, 94, 71].map((w, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="h-1 flex-1 rounded-full bg-white/10">
                  <div className="h-full rounded-full" style={{ width: `${w}%`, backgroundColor: accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SafetyMock({ accent }: { accent: string }) {
  return (
    <div className="relative h-full p-4">
      <div className="absolute inset-4 rounded-lg border border-white/10 bg-white/5">
        <div className="absolute left-3 top-3 rounded bg-emerald-500/80 px-2 py-0.5 text-[7px] text-white">LIVE</div>
        <div className="absolute right-3 top-3 flex gap-1">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1">
          {["PPE OK", "Zone Clear", "2 Alerts"].map((l, i) => (
            <div key={l} className="rounded bg-black/40 px-1 py-1 text-center text-[7px]" style={{ color: i === 2 ? "#F59E0B" : accent }}>{l}</div>
          ))}
        </div>
        <svg className="h-full w-full opacity-20" viewBox="0 0 100 60">
          <rect x="10" y="20" width="30" height="25" fill={accent} opacity="0.3" />
          <rect x="55" y="15" width="35" height="30" fill={accent} opacity="0.2" />
        </svg>
      </div>
    </div>
  );
}

function SaasMock({ accent }: { accent: string }) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex items-center justify-between">
        <div className="h-2 w-16 rounded bg-white/20" />
        <div className="rounded-full px-2 py-0.5 text-[7px] text-white" style={{ backgroundColor: `${accent}50` }}>Pro Plan</div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 flex-1">
        <div className="rounded-lg bg-white/5 p-2">
          <div className="text-[7px] text-white/40">Active Users</div>
          <div className="text-sm font-bold text-white">1,247</div>
        </div>
        <div className="rounded-lg bg-white/5 p-2">
          <div className="text-[7px] text-white/40">MRR</div>
          <div className="text-sm font-bold" style={{ color: accent }}>₹8.4L</div>
        </div>
        <div className="col-span-2 rounded-lg bg-white/5 p-2">
          <div className="flex h-12 items-end gap-0.5">
            {[30, 45, 40, 60, 55, 75, 70, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: `${accent}50` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ConstructionMock({ accent }: { accent: string }) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex gap-2">
        {["Site A", "Site B", "Site C"].map((s, i) => (
          <div key={s} className="rounded px-2 py-1 text-[7px] text-white/60" style={i === 0 ? { backgroundColor: `${accent}40` } : { backgroundColor: "rgba(255,255,255,0.05)" }}>{s}</div>
        ))}
      </div>
      <div className="mt-3 flex-1 space-y-2">
        <div className="rounded-lg bg-white/5 p-2">
          <div className="flex justify-between text-[7px] text-white/50">
            <span>Budget Used</span><span>68%</span>
          </div>
          <div className="mt-1 h-1.5 rounded-full bg-white/10">
            <div className="h-full w-[68%] rounded-full" style={{ backgroundColor: accent }} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="rounded-lg bg-white/5 p-2">
            <div className="text-[7px] text-white/40">Workers</div>
            <div className="text-xs font-bold text-white">47</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="text-[7px] text-white/40">Tasks Done</div>
            <div className="text-xs font-bold text-white">12/18</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mocks: Record<MockType, React.ComponentType<{ accent: string }>> = {
  dashboard: DashboardMock,
  mobile: MobileMock,
  map: MapMock,
  lms: LmsMock,
  analytics: AnalyticsMock,
  erp: ErpMock,
  safety: SafetyMock,
  saas: SaasMock,
  construction: ConstructionMock,
};

export function ProjectMock({ type, accent, className }: { type: MockType; accent: string; className?: string }) {
  const Mock = mocks[type];
  return (
    <div className={className}>
      <Mock accent={accent} />
    </div>
  );
}

export function ProjectMockFrame({
  type,
  accent,
  gradient,
  className,
}: {
  type: MockType;
  accent: string;
  gradient?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-[#030b1f] ${className ?? "aspect-[16/10]"}`}>
      <ProjectMock type={type} accent={accent} className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}
