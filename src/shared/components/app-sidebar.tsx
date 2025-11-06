"use client";
import { Atom } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/shared/components/ui-kit/sidebar";
import Link from "next/link";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { navItems } from "../config/nav-items";
import { icons } from "../config/icons";
import React from "react";

export function AppSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();
  return (
    <Sidebar variant="floating" collapsible="icon" className="border-border">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className={
            cn(
              {
                "py-1 flex flex-center": true,
                "pl-2": open,
                "pl-1": !open,

              }
            )
          }>
            <h1
              aria-label="Electra"
              className="items-center gap-1 flex flex-row "
            >
              <Atom className="size-6" />
              <span
                className={cn({
                  "hidden!": !open,
                  "fade-in-translate-full fade-out-translate-full text-xl font-semibold":
                    true,
                })}
              >
                Electra
              </span>
            </h1>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      {(() => {
                        const Icon = icons[item.icon];
                        return <Icon />;
                      })()}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>ПОШЕЕЕЛ НАУХЙФ</SidebarFooter>
    </Sidebar>
  );
}
