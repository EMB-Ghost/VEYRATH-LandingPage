import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VEYRATH — Os Reinos Fraturados | MMORPG 2027",
  description:
    "O MMORPG 3D brasileiro que chega em 2027. Cinco reinos fraturados, três classes únicas, economia player-driven e escolhas permanentes. Suas escolhas nunca se apagam.",
  keywords: [
    "MMORPG", "VEYRATH", "Os Reinos Fraturados", "2027", "Steam",
    "RPG brasileiro", "MMO BR", "jogo online", "Embrasa Games",
  ],
  authors: [{ name: "Embrasa Games", url: "https://www.veyrath.com.br" }],
  creator: "Embrasa Games",
  publisher: "Embrasa Games",
  metadataBase: new URL("https://www.veyrath.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.veyrath.com.br",
    siteName: "VEYRATH — Os Reinos Fraturados",
    title: "VEYRATH — Os Reinos Fraturados | MMORPG 2027",
    description:
      "O MMORPG 3D brasileiro que chega em 2027. Cinco reinos fraturados, três classes únicas, economia player-driven e escolhas permanentes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VEYRATH — Os Reinos Fraturados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@VeyrathFracture",
    creator: "@VeyrathFracture",
    title: "VEYRATH — Os Reinos Fraturados | MMORPG 2027",
    description:
      "O MMORPG 3D brasileiro que chega em 2027. Suas escolhas nunca se apagam.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
