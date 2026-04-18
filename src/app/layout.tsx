import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alaskan Majestic Fishing Charters | Homer, Alaska",
  description:
    "World-class halibut and multi-species fishing charters out of Homer, Alaska. Book your trip of a lifetime on the Kenai Peninsula.",
  keywords:
    "Homer Alaska fishing charters, halibut fishing Homer, Alaska fishing guide, Kenai Peninsula fishing, Gulf of Alaska charters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
