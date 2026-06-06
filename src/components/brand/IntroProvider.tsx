"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { IntroContext, useIntro, type IntroContextValue } from "@/hooks/useIntro";

const MaxwellIntro = dynamic(
  () => import("@/components/brand/MaxwellIntro").then((m) => ({ default: m.MaxwellIntro })),
  { ssr: false },
);

function IntroContextProvider({
  value,
  children,
}: {
  value: IntroContextValue;
  children: React.ReactNode;
}) {
  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
}

function isHomePath(pathname: string | null): boolean {
  return pathname === "/" || pathname === "";
}

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const enabled = isHomePath(pathname);
  const intro = useIntro({ enabled });

  return (
    <IntroContextProvider value={intro}>
      {intro.state === "playing" && (
        <MaxwellIntro mode={intro.mode} onComplete={intro.complete} onSkip={intro.skip} />
      )}
      {children}
    </IntroContextProvider>
  );
}
