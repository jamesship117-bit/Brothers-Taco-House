import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { restaurantInfo } from "@/lib/menu-data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${restaurantInfo.name} | Houston`,
  description:
    "Fresh, flavorful Mexican and Latin American favorites with an emphasis on breakfast and taco classics."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
