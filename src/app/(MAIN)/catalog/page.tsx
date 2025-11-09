"use cache"
import { ItemCard } from "@/modules/item/item.card";
import { Item } from "@/modules/item/item.model";
import { ItemRepository } from "@/modules/item/items.repository";
import { Container } from "@/shared/components/container";
export default async function Page() {
  const items = await ItemRepository.getAll();
  return (
    <Container className="flex flex-col pt-20">
      <div className=""></div>
      <div className="w-full gap-1 sm:gap-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 10 })
          .fill(items[0])
          .map((i, index) => (
            <ItemCard item={i as Item} key={index} />
          ))}
      </div>
    </Container>
  );
}
// Женское: [{
//   name: "Верхняя одежда",
//   image_src: "https://img.ostin.com/upload/content/contentgate/prod/ru_ostin/clp/desk__main__w__vo__29102025.webp",
//   parent_id: col.id
// }],
// Мужское: [{
//   name: "Верхняя одежда",
//   image_src: "https://img.ostin.com/upload/content/contentgate/prod/ru_ostin/clp/desk__main__m__vo__051125.webp",
//   parent_id: col.id
// }],