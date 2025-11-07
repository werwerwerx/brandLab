"use client";
import { navItems } from "./config/nav-items";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui-kit/sidebar";
import { Collapsible, CollapsibleTrigger } from "../ui-kit/collapsible";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { icons } from "./config/icons";

export const SidebarNav = () => {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Меню</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  variant={"default"}
                  asChild
                  isActive={item.url === pathname}
                >
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
  );
};
