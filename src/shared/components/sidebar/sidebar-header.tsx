"use client";
import { cn } from "@/shared/lib/utils";
import { coatHanger } from "@lucide/lab";
import { Icon } from "lucide-react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui-kit/sidebar";
import Link from "next/link";

export const SidebarMyHeader = () => {
  const { open } = useSidebar();
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem className={cn()}>
          <SidebarMenuButton size={"lg"} asChild className="text-primary">
            <Link href={"/"}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                <Icon iconNode={coatHanger} className="size-7!" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate text-xl font-semibold! leading-tight">
                  Brand Lab
                </span>
                <span className="truncate text-xs text-muted-foreground font-mediums! tracking-tighter">
                  Интернет магазин одежды
                </span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
