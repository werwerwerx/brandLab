import { Button } from "@/shared/components/ui-kit/button";
import { LucideAlignStartVertical } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui-kit/card";
import { Separator } from "@/shared/components/ui-kit/separator";
import { cn } from "@/shared/lib/utils";

export const HomeHeadingCard = ({className} : {className?: string}) => (
  <Card className={cn("shadow-md relative rounded-xl overflow-hidden flex items-start", className)}>
    <div className="absolute  bottom-[-30%] sm:bottom-[-30%] lg:bottom-[-50%] xl:bottom-[-120%] right-[-10%] sm:right-[-5%] aspect-1/2 h-100 sm:h-[140%] lg:h-[170%] xl:h-[250%]">
      <Image
        fill
        src={"/images/header-banner-cropped.png"}
        alt="баннер"
        className="object-cover rounded-xl opacity-25 sm:opacity-100"
      />
    </div>
    <div className=" z-10 sm:max-w-[50%] md:max-w-[40%] h-full justify-between flex flex-col gap-3">
      <CardHeader>
        <h1 className="font-semibold text-4xl tracking-tighter">BrandLub</h1>
        <CardTitle className="leading-snug">
          Ваш стиль начинается здесь.
        </CardTitle>
        <CardDescription>
          Наслаждайтесь шопингом, не выходя из дома! BrandLab привозит лучшие
          образцы современной моды прямо к вашей двери. Ваш стиль – наша забота
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
);
