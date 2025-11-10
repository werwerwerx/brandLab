import { Container } from "@/shared/components/container";
import { Button } from "@/shared/components/ui-kit/button";
import { coatHanger } from "@lucide/lab";
import {
  Icon,
  Loader2,
  LucideAlignStartVertical,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui-kit/card";
import { Separator } from "@/shared/components/ui-kit/separator";
export default function Home() {
  return (
    <>
      <Container className="flex flex-col gap-2 mt-5">
        <Card className="min-h-[60vh] relative rounded-xl overflow-hidden flex items-start">
          <div className="absolute bottom-[-20%] right-[-20%] h-[130%] w-[80%]">
            <Image
              fill
              src={"/images/header-banner-cropped.png"}
              alt="баннер"
              objectPosition="cover"
              className="object-cover rounded-xl"
            />
          </div>
          <div className="w-[50%] h-full justify-between flex flex-col gap-3">
            <CardHeader>
              <h1 className="font-semibold text-4xl tracking-tighter">
                BrandLub
              </h1>
              <CardTitle>Точка вашего стиля начинается здесь.</CardTitle>
              <CardDescription>
                Наслаждайтесь шопингом, не выходя из дома! BrandLab привозит
                лучшие образцы современной моды прямо к вашей двери. Ваш стиль –
                наша забота
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-3 flex flex-col">
              <Separator />
              <p className="text-xs text-muted-foreground">
                Данный сайт является исключительно учебным проектом, созданным в
                рамках образовательного процесса. Он не является реальным
                интернет-магазином или коммерческой организацией.
              </p>
              <div className="flex flex-row gap-2">
                <Button variant={"outline"}>
                  <LucideAlignStartVertical />В каталог{" "}
                </Button>
                <Button variant="outline" type="button" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-5"
                  >
                    <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        <div className="grid gap-2 grid-cols-2 grid-rows-6">
          <div className="h-full col-span-2 row-span-3 bg-card rounded-md border relative items-start shadow-xl flex p-6  border-border">
            <p className="z-10 text-2xl bg-card tracking-tighter font-semibold items-center px-2">
              НОВИНКИ
            </p>

            <Image
              src={"/images/tag-new.webp"}
              loading="eager"
              alt="покупки"
              className="rounded-md"
              objectFit="cover"
              fill
            />
          </div>

          <div className="h-full col-span-2 bg-card rounded-md relative shadow-xl flex items-end justify-end p-6 border border-border">
            <p className="z-10 text-2xl bg-card tracking-tighter font-semibold items-center px-2">
              ЖЕНСКИЙ РАЗДЕЛ
            </p>
            <Image
              src={"/images/girls-collection.webp"}
              className="rounded-md"
              alt="женский раздел"
              fill
              objectFit="cover"
            />
          </div>

          <div className="aspect-2/1 col-span-2 bg-card rounded-md relative shadow-xl flex items-end justify-end p-6 border border-border">
            <p className="z-10 text-2xl bg-card tracking-tighter font-semibold items-center px-2">
              МУЖСКОЙ РАЗДЕЛ
            </p>
            <Image
              src={"/images/mans-collection.webp"}
              className="rounded-md"
              alt="мужской раздел картинка"
              fill
              objectFit="cover"
            />
          </div>

          <div className="aspect-square overflow-hidden bg-card rounded-md relative shadow-xl flex items-start p-6 border border-border">
            <div className="flex flex-col gap-1 w-full leading-tight">
              <p className="z-10 text-xl tracking-tighter font-semibold items-center px-1">
                Сегодня день скидок!
              </p>
              <p className="z-10 text-sx tracking-tighter font-semibold items-center px-1">
                Получите 20% скидки на ряд товаров!
              </p>
            </div>

            <div className="absolute w-40 h-30 -right-5 bottom-0">
              <Image
                src={"/images/tag-installment.png"}
                fill
                alt="картиника рассрочка"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="aspect-square overflow-hidden bg-card rounded-md relative shadow-xl flex items-end justify-end p-6 border border-border">
            <div className="absolute w-40 h-40 -right-5 bottom-0">
              <Image
                src={"/images/tag-installment.png"}
                fill
                alt="картиника рассрочка"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
