import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbanaging.com"),
  title: "Urban Aging — Occupational Therapy",
  description:
    "Occupational therapy for older adults in New York City. If you can age here, you can age anywhere.",
  openGraph: {
    title: "Urban Aging — Occupational Therapy",
    description:
      "Occupational therapy for older adults in New York City. If you can age here, you can age anywhere.",
    images: [{ url: "/claire.jpeg", width: 1200, height: 1200, alt: "Claire Trefethen, OTD — Urban Aging" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Aging — Occupational Therapy",
    description:
      "Occupational therapy for older adults in New York City. If you can age here, you can age anywhere.",
    images: ["/claire.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body
        className="font-[family-name:var(--font-sans)] font-light antialiased"
        style={{ background: "var(--cream)", color: "var(--charcoal)" }}
      >
        {children}
      </body>
    </html>
  );
}
