import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Space_Grotesk } from "next/font/google";
import { LayoutBody } from "@/components/layout/LayoutBody";
import { GtmNoScript } from "@/components/seo/GtmNoScript";
import { ConsentModeDefaults } from "@/components/seo/ConsentModeDefaults";
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
  preload: true,
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
    <html lang="en-IN" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <ConsentModeDefaults nonce={nonce} />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
        <link rel="alternate" type="text/plain" href="/ai.txt" title="AI assistant discovery" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Maxwell Electrodeal Blog RSS" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <GtmNoScript />
        <LayoutBody nonce={nonce}>{children}</LayoutBody>
      </body>
    </html>
  );
}
