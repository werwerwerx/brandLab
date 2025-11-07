import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "BrandLab - Интернет-магазин одежды",
  description: "Интернет-магазин одежды",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  );
}
