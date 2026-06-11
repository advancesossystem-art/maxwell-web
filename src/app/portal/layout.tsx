import { notFound } from "next/navigation";
import { PortalProvider } from "@/components/portal/PortalProvider";
import { SkipLink } from "@/components/layout/SkipLink";
import { isPortalDemoEnabledServer } from "@/lib/portal/demo-config";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  if (!isPortalDemoEnabledServer()) notFound();
  return (
    <PortalProvider>
      <SkipLink targetId="portal-main" label="Skip to portal content" />
      <div id="portal-main" tabIndex={-1} className="portal-shell min-h-[100dvh] outline-none">
        {children}
      </div>
    </PortalProvider>
  );
}
