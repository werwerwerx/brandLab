"use cache";
import { ItemTag } from "@/modules/item/item.model";
import { ItemRepository } from "@/modules/item/items.repository";
import { Container } from "@/shared/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui-kit/accordion";
import { AspectRatio } from "@/shared/components/ui-kit/aspect-ratio";
import { Badge } from "@/shared/components/ui-kit/badge";
import { Button } from "@/shared/components/ui-kit/button";
import { Card, CardContent } from "@/shared/components/ui-kit/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shared/components/ui-kit/carousel";
import { Separator } from "@/shared/components/ui-kit/separator";
import Image from "next/image";
import { ImagesGrid } from "./_images";
export default async function Page(params: Promise<{ id: string }>) {
  const { id } = await params;

  const [item] = await ItemRepository.getById(id);

  return (
    <Container className="min-h-screen mt-4 flex flex-col lg:flex-row gap-4">
      <Carousel className="w-full max-w-full border-border border-b sm:hidden">
        <CarouselContent className="w-full">
          {item.imgs.map((img, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={5 / 7} className="shadow-xl">
                <Image
                  src={img}
                  alt="картинка товара"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
      <ImagesGrid imgUrls={item.imgs} />

      <div className="flex flex-col gap-2 lg:w-[100%]">
        {item.tags.length && (
          <div className="flex flex-row w-full gap-0.5 flex-wrap min-w-0">
            {item.tags.map((tag, index) => Tag(tag, index))}
          </div>
        )}

        <div className="flex flex-col gap-1 mt-2">
          <h1 className="text-2xl font-medium leading-tight text-balance">
            {item.name}
          </h1>

          <div className="flex flex-row gap-1 items-center">
            <p className="text-lg md:text-md">{item.price}₽</p>
            {item.oldPrice && (
              <p className="text-md md:text-sm text-muted-foreground line-through">
                {item.oldPrice} ₽
              </p>
            )}
          </div>
        </div>

        <Accordion type="multiple">
          {item.colorsHex.length && (
            <AccordionItem value="Цвет">
              <AccordionTrigger>Цвет</AccordionTrigger>
              <AccordionContent className="gap-2 flex flex-row flex-wrap">
                {item.colorsHex.map((color, i) => (
                  <Button
                    size={"icon-sm"}
                    key={i}
                    variant={"outline"}
                    className="shadow-md rounded-full"
                    style={{ backgroundColor: color }}
                  ></Button>
                ))}
              </AccordionContent>
            </AccordionItem>
          )}

          {item.sizes.length && (
            <AccordionItem value="Размер">
              <AccordionTrigger>Размер</AccordionTrigger>
              <AccordionContent className="gap-2 flex flex-row flex-wrap">
                {item.sizes.map((size, i) => (
                  <Button
                    size={"icon-sm"}
                    key={i}
                    variant={"outline"}
                    className="shadow-md"
                  >
                    {size}
                  </Button>
                ))}
              </AccordionContent>
            </AccordionItem>
          )}

          <AccordionItem value="Описание">
            <AccordionTrigger>Описание</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="Характеристики">
            <AccordionTrigger>Характеристики</AccordionTrigger>
            <AccordionContent>{item.characteristics}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Container>
  );
}

const Tag = (f: ItemTag, index: number) => {
  const contentMap: Record<ItemTag, { icon: string; text: string }> = {
    hot: { icon: "🔥", text: "Горячее" },
    installment: { icon: "👜", text: "Рассрочка" },
    sale: { icon: "🏷️", text: "Распродажа" },
  };

  const { icon, text } = contentMap[f];

  return (
    <Badge
      key={index}
      variant={"outline"}
      className="shadow-sm flex-shrink-0 px-2!"
    >
      <span>{icon}</span>
      <span className="ml-1">{text}</span>
    </Badge>
  );
};
