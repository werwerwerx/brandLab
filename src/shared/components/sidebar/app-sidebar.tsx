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
import { Send, HelpCircle, LogOut, Sun, Moon } from "lucide-react";
import { Separator } from "../ui-kit/separator";
import { SignOutButton } from "../sign-out.button";
import { Skeleton } from "../ui-kit/skeleton";
import { ModeToggle } from "../theme-toggle";
export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-border">
      <SidebarMyHeader />

      <SidebarContent>
        {/* <Suspense fallback={
            <SidebarGroup>
            <SidebarGroupLabel>Меню</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {new Array().fill({length: 10}).map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        variant={"default"}
                        asChild
                      >
                        <Skeleton className="rounded-full size-5" />
                        <Skeleton className="w-full h-6 rounded-full" />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        }> */}

        {/*  NEXT WHY U ARUGUING ME FOR SUSPENSE ???? */}

        <SidebarNav />
        {/* </Suspense> */}
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

            <ModeToggle asChild>
              <SidebarMenuButton variant={"outline"}>
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                Переключить тему
              </SidebarMenuButton>
            </ModeToggle>

            <SidebarMenuItem>
              <SignOutButton />
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
