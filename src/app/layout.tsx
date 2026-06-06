import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { DeferredClientChrome } from "@/components/layout/DeferredClientChrome";
import { AnalyticsScripts, GTMHeadScript, GTMNoScript } from "@/components/seo/AnalyticsScripts";
import { AiDiscoveryJsonLd } from "@/components/seo/AiDiscoveryJsonLd";
import { GlobalSiteJsonLd } from "@/components/seo/GlobalSiteJsonLd";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { buildSiteVerificationMetadata } from "@/lib/seo/site-verification";
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
});

const siteVerification = buildSiteVerificationMetadata();

export const metadata: Metadata = {
  ...buildSeoMetadata({}),
  ...(siteVerification ?? {}),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "361x361" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "361x361" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <GTMHeadScript />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
        <link rel="alternate" type="text/plain" href="/ai.txt" title="AI assistant discovery" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Maxwell Electrodeal Blog RSS" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <GTMNoScript />
        <GlobalSiteJsonLd />
        <AiDiscoveryJsonLd />
        <AnalyticsScripts />
        <DeferredClientChrome>
          <SiteChrome>{children}</SiteChrome>
        </DeferredClientChrome>
      </body>
    </html>
  );
}
