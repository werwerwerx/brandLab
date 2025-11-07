import { Header } from "@/shared/components/header";
import { AppSidebar } from "@/shared/components/sidebar/app-sidebar";
import { SidebarInset } from "@/shared/components/ui-kit/sidebar";
import {
  SidebarProvider,
} from "@/shared/components/ui-kit/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <SidebarProvider>

      <AppSidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
    </>
  );
}
