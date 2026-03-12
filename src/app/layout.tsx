import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/data/site";
import CustomCursor from '@/components/CustomCursor';
import { SpeedInsights } from '@vercel/speed-insights/next';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.openGraph.title,
    description: siteMetadata.openGraph.description,
    type: "website",
    locale: siteMetadata.openGraph.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.twitter.title,
    description: siteMetadata.twitter.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        {children}
        <CustomCursor />
        <SpeedInsights />
      </body>
    </html>
  );
}
