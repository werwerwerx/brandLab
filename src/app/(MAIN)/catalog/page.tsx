import { Container } from "@/shared/components/container";
import { AspectRatio } from "@/shared/components/ui-kit/aspect-ratio";
import { Badge } from "@/shared/components/ui-kit/badge";
import { Button } from "@/shared/components/ui-kit/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/shared/components/ui-kit/card";
import { ShoppingBag } from "lucide-react"
import Image from "next/image";
export default function Page() {
  return (
    <Container className="flex flex-col pt-20">
      <div className=""></div>
      <div className="w-full gap-1 grid grid-cols-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <BaseCard key={index} />
        ))}
      </div>
    </Container>
  );
}

const BaseCard = () => {
  return (
    <Card className="p-0 py-0 gap-0 shadow-md">
      <AspectRatio ratio={10 /11} className="bg-muted rounded-lg shadow-sm">
        <Image
          src="https://cdn.sportmaster.ru/upload/mdm/media_content/resize/e73/352_464_f818/164381160299.jpg"
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-t-md object-cover"
        />
      </AspectRatio>
      <CardContent className="py-2 px-2 gap-2 flex flex-col border-t border-border">

      <div className="flex flex-row w-full gap-0.5">
        <Badge variant={"outline"} className="shadow-sm">
        🔥 Горячее
        </Badge>
        <Badge variant={"outline"} className="shadow-sm">
        🏷️ Распродажа
        </Badge>
      </div>

        <p className="text-md font-semibold">
          Легинсы женские sensana
        </p>
        <div className="flex flex-row gap-1 items-center">

        <p className="text-sm">
          1049 ₽
        </p>

        <p className="text-xs text-muted-foreground">
          3049 ₽
        </p>

        </div>


        <Button className="max-w-xs" size={"sm"}>
          <ShoppingBag/> В корзину
        </Button>
      </CardContent>
    </Card>
  );
};
