"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/shared/components/ui-kit/button";
import { Slot } from "@radix-ui/react-slot";



export const ModeToggle = ({ asChild = false, className, children, ...props }: React.ComponentProps<"button"> & { asChild?: boolean })  => {
  const { setTheme, resolvedTheme } = useTheme();
  const Comp = asChild ? Slot : Button;
  return (
    <Comp
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >

      {children}
    </Comp>
  );
}
