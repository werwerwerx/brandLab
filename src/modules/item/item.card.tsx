import { AspectRatio } from "@/shared/components/ui-kit/aspect-ratio";
import { Badge } from "@/shared/components/ui-kit/badge";
import { Button } from "@/shared/components/ui-kit/button";
import { Card, CardContent } from "@/shared/components/ui-kit/card";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Item, ItemTag } from "./item.model";
import React from "react";

export const ItemCard = ({
  item,
  ...props
}: { item: Item } & React.ComponentProps<"div">) => {
  return (
    <Card className="p-0 py-0 gap-0 shadow-md" {...props}>
      <AspectRatio
        ratio={10 / 11}
        className="bg-muted rounded-lg shadow-sm relative"
      >
        <Button
          size={"icon"}
          variant={"outline"}
          className="rounded-full  absolute top-2 right-2 z-10"
        >
          <Heart />
        </Button>
        {/* todo add slider */}
        <Image
          src={item.imgSrc[0]}
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-t-md object-cover"
        />
      </AspectRatio>
      <CardContent className="py-1 px-1 md:p-2 gap-1 sm:gap-2 flex flex-col border-t border-border">
        <div className="flex flex-row w-full gap-0.5 flex-wrap min-w-0">
          {item.tags.map((tag, index) => Tag(tag, index))}
        </div>

        <p className="text-sm sm:text-md md:text-lg font-semibold tracking-tighter leading-tight">
          {item.name}
        </p>

        <div className="flex flex-row gap-1 items-center">
          <p className="text-[13px] md:text-md">{item.price}₽</p>
          {item.oldPrice && (
            <p className="text-[10px] md:text-sm text-muted-foreground line-through">
              {item.oldPrice} ₽
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
const Tag = (f: ItemTag, index: number) => {
  const contentMap: Record<ItemTag, { icon: string; text: string }> = {
    hot: { icon: "🔥", text: "Горячее" },
    installment: { icon: "👜", text: "Рассрочка" },
    sale: { icon: "🏷️", text: "Распродажа" },
  };

  const { icon, text } = contentMap[f];

  return (
    <Badge key={index} variant={"outline"} className="shadow-sm flex-shrink-0">
      <span>{icon}</span>
      <span className="hidden sm:inline ml-1">{text}</span>
    </Badge>
  );
};
