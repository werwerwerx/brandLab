import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BrandLab - Интернет-магазин одежды",
  description: "Интернет-магазин одежды",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-background text-foreground`}
      >
          <ThemeProvider>
              {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
