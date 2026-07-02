import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/store-provider";

export const metadata: Metadata = {
  title: { default: "Super Ecommerce", template: "%s | Super Ecommerce" },
  description: "A modern multi-vendor ecommerce experience converted from Laravel to Next.js.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
