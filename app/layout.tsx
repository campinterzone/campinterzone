import type { Metadata } from "next";
import { Jost, Crimson_Pro, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camp Interzone — Burning Man 2025",
  description:
    "A hidden café at the edge of the known world. Camp Interzone brings the spirit of 1950s Tangier to Black Rock City — free books, cold beer, live music, and open doors.",
  openGraph: {
    title: "Camp Interzone",
    description: "A hidden café at the edge of the known world.",
    url: "https://campinterzone.com",
    siteName: "Camp Interzone",
    type: "website",
    images: [{ url: "https://campinterzone.com/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camp Interzone",
    description: "A hidden café at the edge of the known world.",
    images: ["https://campinterzone.com/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${crimsonPro.variable} ${playfairDisplay.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  );
}
