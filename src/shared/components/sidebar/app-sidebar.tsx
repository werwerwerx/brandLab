import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui-kit/sidebar";

import { SidebarMyHeader } from "./sidebar-header";
import { UserAvatarCard } from "./user-avatar.card";
import { SidebarNav } from "./sidebar-nav";
import { Suspense } from "react";
import { SkeletonUser } from "@/shared/components/sidebar/user-avatar.card.skeleton";
import Link from "next/link";
import { Send, HelpCircle } from "lucide-react";
import { Separator } from "../ui-kit/separator";
export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon" className="border-border">
      <SidebarMyHeader />

      <SidebarContent>
      
        <SidebarNav />
      </SidebarContent>

        <SidebarGroup>
          <SidebarGroupLabel>Прочее</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild variant={"default"}>
                  <Link href={"/help"}>
                    <HelpCircle />
                    <span>Поддержка</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/help"}>
                    <Send />
                    <span>Обратная связь</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />

      <SidebarFooter>

        <SidebarMenu>
          <SidebarMenuItem>
            <Suspense fallback={<SkeletonUser />}>
              <UserAvatarCard />
            </Suspense>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
