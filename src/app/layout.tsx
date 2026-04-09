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
  title: "Urban Aging | Dr. Claire Trefethen, OTD",
  description:
    "Occupational therapy for older adults in New York City. If you can age here, you can age anywhere.",
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
