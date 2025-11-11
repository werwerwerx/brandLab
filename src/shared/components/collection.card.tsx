import { Card, CardHeader, CardTitle } from "@/shared/components/ui-kit/card";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import React from "react";


const CollectionImage = ({ 
  className, 
  src, 
  alt, 
  ...props 
}: { 
  className?: string; 
  src: string; 
  alt: string; 
  props?: React.ComponentProps<typeof Image>;
}) => (
  <Image
    src={src}
    className={cn("rounded-md", className)}
    alt={alt}
    fill
    objectFit="cover"
    {...props}
  />
);

const CollectionCard = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
  props?: React.ComponentProps<"div">
}) => (
  <Card
    className={cn(
      "shadow-md relative rounded-xl overflow-hidden flex items-start p-6",
      className
    )}
    {...props}
  >
    {children}
  </Card>
);

export {  CollectionImage, CollectionCard };