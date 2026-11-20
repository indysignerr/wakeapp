import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Stop drifting. Start acting intentionally. Tasks, habits, calendar, focus, and Blackout mode in one execution system.`,
    template: `%s — ${site.name}`,
  },
  description: site.longDescription,
  keywords: [
    "focus app",
    "productivity",
    "discipline",
    "habit tracker",
    "screen time control",
    "deep work",
    "blackout mode",
    "intentional living",
  ],
  authors: [{ name: "WakeApp" }],
  creator: "WakeApp",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: `${site.name} — Stop drifting. Start acting intentionally.`,
    description: site.longDescription,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Stop drifting. Start acting intentionally.`,
    description: site.shortDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  description: site.shortDescription,
  url: site.url,
  downloadUrl: site.appStore,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS 16 or later, iPadOS 16 or later",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable, "dark")}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
