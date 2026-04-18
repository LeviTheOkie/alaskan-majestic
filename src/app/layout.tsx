import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Alaskan Majestic Fishing Charters | Homer, Alaska",
  description:
    "World-class halibut and multi-species fishing charters out of Homer — the Halibut Capital of the World. Book your trip of a lifetime on the wild waters of the Gulf of Alaska.",
  keywords:
    "Homer Alaska fishing charters, halibut fishing Homer, Gulf of Alaska charters, Kenai Peninsula fishing, Alaska charter captain",
  openGraph: {
    title: "Alaskan Majestic Fishing Charters | Homer, Alaska",
    description:
      "World-class halibut and multi-species charters. Homer, AK — Halibut Capital of the World.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
