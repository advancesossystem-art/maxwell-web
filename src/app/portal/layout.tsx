import { PortalProvider } from "@/components/portal/PortalProvider";
import { SkipLink } from "@/components/layout/SkipLink";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <PortalProvider>
      <SkipLink targetId="portal-main" label="Skip to portal content" />
      <div id="portal-main" tabIndex={-1} className="portal-shell min-h-[100dvh] outline-none">
        {children}
      </div>
    </PortalProvider>
  );
}
