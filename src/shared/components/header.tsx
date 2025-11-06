import Link from "next/link";
import { Container } from "./container";
import { NavItem } from "./header-nav";
import { Logo } from "./logo";
import { Button } from "./ui-kit/button";
import { SidebarTrigger } from "./ui-kit/sidebar";
import { SearchInput } from "./search-input";
import React from "react";
import { cn } from "../lib/utils";
import { navItems } from "../config/nav-items";
import { icons } from "../config/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui-kit/tooltip";
import { ModeToggle } from "@/shared/components/theme-toggle";
import { Moon, Sun } from "lucide-react";

export const Header = () => (
  <header className="sticky top-0 left-0 right-0 z-50 shrink-0 mt-2 px-2 h-12">
    <div className="xl:container h-full xl:mx-auto  w-full flex flex-row gap-1.5 xl:gap-2">

      <HeaderSection className="xl:hidden">
        <SidebarTrigger className="px-4" />
      </HeaderSection>

      <SearchInput className="h-full shadow-sm bg-card! border-border flex-1" />

      <ModeToggle asChild>
        <HeaderSection>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </HeaderSection>
      </ModeToggle>

      <nav className="h-full gap-2 xl:flex flex-row hidden justify-end flex-1">
        {navItems.map((i) => (
          <HeaderSection>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={i.url}>
                  {(() => {
                    const Icon = icons[i.icon];
                    return <Icon className="size-4" />;
                  })()}
                </Link>
              </TooltipTrigger>

              <TooltipContent>
                <p>{i.title}</p>
              </TooltipContent>
            </Tooltip>
          </HeaderSection>
        ))}
      </nav>
      
    </div>
  </header>
);

const HeaderSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-card border-border border rounded-md shadow-sm px-1 flex items-center justify-center h-full min-w-12",
      className
    )}
  >
    {children}
  </div>
);
