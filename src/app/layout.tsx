import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { LayoutBody } from "@/components/layout/LayoutBody";
import { GtmNoScript } from "@/components/seo/GtmNoScript";
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
  weight: ["700"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
        <link rel="alternate" type="text/plain" href="/ai.txt" title="AI assistant discovery" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Maxwell Electrodeal Blog RSS" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <GtmNoScript />
        <LayoutBody>{children}</LayoutBody>
      </body>
    </html>
  );
}
