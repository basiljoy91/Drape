import type { Metadata } from "next";
import { Bodoni_Moda, Instrument_Sans } from "next/font/google";
import { Suspense } from "react";
import { AnalyticsTracker } from "../components/analytics-tracker";
import { sharedMetadata } from "../lib/metadata";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(sharedMetadata.siteUrl),
  title: {
    default: "Drape",
    template: "%s | Drape",
  },
  description: sharedMetadata.defaultDescription,
  applicationName: "Drape",
  category: "fashion",
  keywords: ["Drape", "sarees", "bridal wear", "occasionwear", "premium fashion", "Indian clothing"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: sharedMetadata.siteName,
    type: "website",
    url: sharedMetadata.siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Drape open graph image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
