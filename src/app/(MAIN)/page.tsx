import { Container } from "@/shared/components/container";
import { HomeHeadingCard } from "./_home-heading.card";
import { cn } from "@/shared/lib/utils";
import {
  CollectionCard,
  CollectionImage,
} from "@/shared/components/collection.card";
import { CardHeader, CardTitle } from "@/shared/components/ui-kit/card";

export default function Home() {
  return (
    <Container className="gap-2 grid grid-cols-2 lg:grid-cols-4 grid-rows-7 xl:grid-rows-5 min-h-screen">
      <HomeHeadingCard className="min-h-[60vh] xl:min-h-[70vh]  col-span-2 md:row-span-1 lg:col-span-3 row-span-2 xl:col-span-2" />

      <CollectionCard className="items-end justify-end col-span-1 xl:hidden">
        <div className="bg-card z-10 p-1">
          <CardTitle>РАССРОЧКА</CardTitle>
        </div>
        <CollectionImage
          src={"/images/mans-collection.webp"}
          alt="мужской раздел картинка"
        />
      </CollectionCard>

      <CollectionCard className="xl:col-span-2 xl:row-span-2">
        <div className="bg-card z-10 p-1">
          <CardTitle>НОВИНКИ</CardTitle>
        </div>
        <CollectionImage src={"/images/tag-new.webp"} alt="покупки" />
      </CollectionCard>

      <CollectionCard className="items-end justify-end  col-span-2 lg:col-span-3 xl:col-span-2 xl:row-span-1">
        <div className="bg-card z-10 p-1">
          <CardTitle>РАСПРОДАЖА</CardTitle>
        </div>
        <CollectionImage
          src={"/images/girls-collection.webp"}
          alt="женский раздел"
        />
      </CollectionCard>

      <CollectionCard className="items-end justify-end col-span-4 hidden xl:flex">
        <div className="bg-card z-10 p-1">
          <CardTitle>РАССРОЧКА</CardTitle>
        </div>
        <CollectionImage
          src={"/images/mans-collection.webp"}
          alt="мужской раздел картинка"
        />
      </CollectionCard>

      <CollectionCard className=" col-span-2 lg:col-span-2 justify-end">
        <div className="bg-card z-10 p-1">
          <CardTitle>МУЖСКОЙ РАЗДЕЛ</CardTitle>
        </div>
        <CollectionImage
          src={
            "https://img.ostin.com/upload/content/contentgate/prod/ru_ostin/clp/desk__m__new__051125(3).webp"
          }
          alt="мужской раздел картинка"
        />
      </CollectionCard>

      <CollectionCard className="items-end lg:col-span-2  justify-end col-span-2">
        <div className="bg-card z-10 p-1">
          <CardTitle>ЖЕНСКИЙ РАЗДЕЛ</CardTitle>
        </div>
        <CollectionImage
          src={
            "https://img.ostin.com/upload/content/contentgate/prod/ru_ostin/clp/desk__main__w__vo__29102025.webp"
          }
          alt="женский раздел картинка"
        />
      </CollectionCard>

      <CollectionCard className=" col-span-2 lg:col-span-2 justify-end">
        <div className="bg-card z-10 p-1">
          <CardTitle>ДЕВОЧКИ</CardTitle>
        </div>
        <CollectionImage
          src={
            "https://img.ostin.com/upload/content/contentgate/prod/ru_ostin/clp/desk__g__new__28102025(2).webp"
          }
          alt="девочки картинка"
        />
      </CollectionCard>

      <CollectionCard className="items-end lg:col-span-2  justify-end col-span-2">
        <div className="bg-card z-10 p-1">
          <CardTitle>МАЛЬЧИКИ</CardTitle>
        </div>
        <CollectionImage
          src={
            "https://img.ostin.com/upload/content/contentgate/prod/ru_ostin/clp/desk__b__new__28102025(2).webp"
          }
          alt="мальчики картинка"
        />
      </CollectionCard>
    </Container>
  );
}
