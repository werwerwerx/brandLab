import { Container } from "@/shared/components/container";
import { Button } from "@/shared/components/ui-kit/button";
import Image from "next/image";
import { ArrowDownRightIcon } from "lucide-react";
export default function Home() {
  return (
    <>
      <Container className="flex justify-center items-center min-h-[80vh] flex-col gap-4 text-center max-w-lg">
        <h1 className="text-6xl font-medium">
          Отправная точка для вашего <span className="text-primary">Стиля</span>
        </h1>
        <p className="text-md font-medium">
          Мы тщательно отбираем каждый бренд в нашем ассортименте, чтобы
          предложить вам только лучшее. Одевайтесь так, чтобы вас хотели купить.
        </p>

        <div className="flex flex-row gap-2">
          <Button>
            Перейти в каталог <ArrowDownRightIcon className="rotate-[-90deg]" />
          </Button>
        </div>
      </Container>

      <Container className="h-[10vh] text-2xl font-medium items-center justify-center">
        НАШИ ОСНОВНЫЕ БРЕНДЫ
      </Container>

      <div className="grid grid-cols-2 grid-rows-[1fr_2fr] w-full gap-2 h-[200vh]">
        <div className="relative h-full">
          <Image src={"/images/promo1.avif"} fill objectFit="cover" alt="основной бренд картинка"/>
        </div>
        <div className="relative h-full">
          <Image src={"/images/promo2.avif"} fill objectFit="cover" alt="основной бренд картинка"/>
        </div>
        <div className="relative col-span-1 h-full">
          <Image src={"/images/promo3.avif"} fill objectFit="cover" alt="основной бренд картинка"/>
        </div>
        <div className="relative col-span-1 h-full">
          <Image src={"/images/promo4.avif"} fill objectFit="cover" alt="основной бренд картинка"/>
        </div>
      </div>
    </>
  );
}
