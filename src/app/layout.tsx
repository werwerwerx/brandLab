import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/shared/components/header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/shared/components/ui-kit/sidebar";
import { AppSidebar } from "@/shared/components/app-sidebar";
import { Container } from "@/shared/components/container";
import { ThemeProvider } from "@/shared/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "300", "500", "600", "700", "800", "900"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-background text-foreground min-h-screen min-w-screen`}
      >
        <SidebarProvider>
          <ThemeProvider>
            <AppSidebar />
            <SidebarInset >
              <Header />
              <main>{children}</main>
            </SidebarInset>
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
