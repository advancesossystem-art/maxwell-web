import { cn } from "@/lib/utils";

export type ClientLogo = {
  name: string;
  industry?: string;
};

type ClientLogoCloudProps = {
  mode?: "placeholder" | "coming-soon" | "named";
  clients?: ClientLogo[];
  className?: string;
  title?: string;
};

const placeholderClients: ClientLogo[] = [
  { name: "Manufacturing", industry: "ERP & automation" },
  { name: "Healthcare", industry: "Patient platforms" },
  { name: "Logistics", industry: "Fleet systems" },
  { name: "Retail", industry: "Omnichannel" },
  { name: "Construction", industry: "Field ops" },
  { name: "SaaS", industry: "Product engineering" },
];

export function ClientLogoCloud({
  mode = "placeholder",
  clients = placeholderClients,
  className,
  title = "Trusted by Growing Businesses",
}: ClientLogoCloudProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-500">{title}</p>
      {mode === "placeholder" ? (
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          Industries we serve — illustrative examples, not a client list.
        </p>
      ) : null}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex min-w-[8.5rem] flex-col items-center justify-center rounded-xl border border-[var(--v6-border)] bg-[var(--v6-bg-white)] px-5 py-4 shadow-[var(--v6-shadow-sm)]"
          >
            <span className="font-display text-sm font-semibold text-[var(--v6-text)]">{client.name}</span>
            {client.industry ? (
              <span className="mt-1 text-[10px] uppercase tracking-wider text-[var(--v6-text-muted)]">
                {client.industry}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
