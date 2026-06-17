import type { Metadata } from "next";
import { headers } from "next/headers";
import { Suspense } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { DeferredClientChrome } from "@/components/layout/DeferredClientChrome";
import { AnalyticsScripts } from "@/components/seo/AnalyticsScripts";
import { ConsentModeDefaults } from "@/components/seo/ConsentModeDefaults";
import { GaRouteTracker } from "@/components/seo/GaRouteTracker";
import { GtmNoScript } from "@/components/seo/GtmNoScript";
import { CookieConsentProvider } from "@/hooks/useCookieConsent";
import { GlobalSiteJsonLd } from "@/components/seo/GlobalSiteJsonLd";
import { buildSiteVerificationMetadata } from "@/lib/seo/site-verification";
import { siteConfig } from "@/lib/constants";
import { homeSeo, siteTitleTemplate } from "@/lib/seo/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  weight: ["600", "700"],
});

const siteVerification = buildSiteVerificationMetadata();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  description: homeSeo.description,
  keywords: homeSeo.keywords.join(", "),
  title: {
    default: homeSeo.title,
    template: siteTitleTemplate,
  },
  ...(siteVerification ?? {}),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en-IN" className={`${inter.variable} ${spaceGrotesk.variable}`} nonce={nonce}>
      <head>
        <ConsentModeDefaults nonce={nonce} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
        <link rel="alternate" type="text/plain" href="/ai.txt" title="AI assistant discovery" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Maxwell Electrodeal Blog RSS" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <GtmNoScript />
        <CookieConsentProvider>
          <GlobalSiteJsonLd />
          <AnalyticsScripts nonce={nonce} />
          <Suspense fallback={null}>
            <GaRouteTracker />
          </Suspense>
          <DeferredClientChrome>
            <SiteChrome>{children}</SiteChrome>
          </DeferredClientChrome>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
