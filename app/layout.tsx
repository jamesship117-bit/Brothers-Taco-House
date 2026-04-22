import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Pacifico } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { restaurantInfo } from "@/lib/menu-data";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"]
});

const bodyFont = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"]
});

const scriptFont = Pacifico({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400"
});

export const metadata: Metadata = {
  title: `${restaurantInfo.name} | Houston`,
  description:
    "Authentic Mexican restaurant with rich family tradition, vibrant flavors, and warm hospitality in Houston."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${displayFont.variable} ${bodyFont.variable} ${scriptFont.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
