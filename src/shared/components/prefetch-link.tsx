import Link from "next/link";
import React from "react";

export const PrefetchLink = ({children, href, ...props}: {
  children: React.ReactNode | string,
  href: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link href={href} {...props}>
    {children}
  </Link>
)