import { homeHero } from "@/lib/homepage";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";

export function HeroMagneticActions({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={homeHero.primaryCta.href}
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#4f46e5] px-8 text-base font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:bg-[#4338ca]"
        >
          {homeHero.primaryCta.label} →
        </a>
        <a
          href={WHATSAPP_HREF_CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#22c55e] bg-white px-7 text-base font-semibold text-[#16a34a] transition hover:bg-[#f0fdf4]"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.04 2C6.5 2 2.004 6.486 2 12.02c0 1.77.463 3.5 1.342 5.021L2 22l5.09-1.315A10.04 10.04 0 0 0 12.04 22C17.58 22 22 17.523 22 12.01 21.996 6.49 17.57 2 12.04 2zm0 18.13a8.1 8.1 0 0 1-4.13-1.13l-.3-.178-3.02.78.807-2.944-.195-.312A8.09 8.09 0 0 1 3.91 12.02C3.914 7.55 7.57 3.9 12.04 3.9c4.46 0 8.086 3.64 8.09 8.11-.004 4.47-3.64 8.12-8.09 8.12z" />
          </svg>
          {homeHero.secondaryCta.label}
        </a>
      </div>
    </div>
  );
}
