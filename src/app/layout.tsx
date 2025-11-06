import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "300", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Electra - Интернет-магазин цифровой техники",
  description: "Интернет-магазин цифровой техники",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
