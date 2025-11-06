import { SidebarTrigger } from "./ui-kit/sidebar";
import { SearchInput } from "./search-input";
import React from "react";
import { cn } from "../lib/utils";
import { ModeToggle } from "@/shared/components/theme-toggle";
import { Moon, Sun } from "lucide-react";

export const Header = () => (
  <header className="sticky top-2 left-0 right-0 z-50 shrink-0 mt-2 h-12 flex flex-row">
      <HeaderSection >
        <SidebarTrigger className="px-4" />
      </HeaderSection>
    <div className="xl:container h-full xl:mx-auto  w-full flex flex-row gap-1.5 xl:gap-2 justify-between">
      <div className=""></div>


      <SearchInput className="h-full shadow-sm bg-card! border-border flex-1 max-w-2xl! w-full"  />

      <ModeToggle asChild>
        <HeaderSection>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </HeaderSection>
      </ModeToggle>

      
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
