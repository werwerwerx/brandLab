"use client";
import Link from "next/link";
import { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "../lib/utils";

export const NavItem = ({
  children,
  href,
  className,
  onActiveClassName,
  ...props
}: {
  children: React.ReactNode | string;
  className?: string;
  onActiveClassName?: string;
  href: string;
  props?: LinkProps;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(className, isActive && onActiveClassName)}
      {...props}
    >
      {children}
    </Link>
  );
};
