import { ItemCard } from "@/modules/item/item.card";
import { Container } from "@/shared/components/container";
export default function Page() {
  return (
    <Container className="flex flex-col pt-20">
      <div className=""></div>
      <div className="w-full gap-1 sm:gap-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <ItemCard
            item={{
              id: String(index),
              imgSrc: [
                "https://img.ostin.com/upload/mdm/media_content/resize/bf0/686_950_a12f/168581490299.jpg",
              ],
              name: "Утеплённая куртка с капюшоном",
              price: 8999,
              oldPrice: 16000,
              tags: ["hot", "installment", "sale"],
            }}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
}
