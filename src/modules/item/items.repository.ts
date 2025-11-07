import { Item } from "./item.model";

export const ItemRepository = {
  getAll: (): Promise<Item[]> => {
    return Promise.resolve( [
      {
        id: "1",
        imgs: [
          "https://img.ostin.com/upload/mdm/media_content/resize/bf0/686_950_a12f/168581490299.jpg",
          "https://img.ostin.com/upload/mdm/media_content/resize/cba/686_950_786d/168581480299.jpg",
          "https://img.ostin.com/upload/mdm/media_content/resize/b06/332_460_62d3/168581500299.jpg",
          "https://img.ostin.com/upload/mdm/media_content/resize/555/332_460_8a97/168581510299.jpg",
          "https://img.ostin.com/upload/mdm/media_content/resize/967/332_460_3864/168581530299.jpg",
        ],
        name: "Утеплённая куртка с капюшоном",
        price: 8999,
        oldPrice: 16000,
        tags: ["hot", "installment", "sale"],
        sizes: `S М L XL XXL`.split(" "),
        colorsHex: ["#0b2738", "#2d2112", "#231917"],
        characteristics: `Утеплённая куртка с капюшоном

- Линеарная стёжка
- Несъёмный капюшон с утяжкой
- Рукава с манжетами на резинке
- Застёжка на крупную пластиковую молнию с внутренней ветрозащитной планкой и внешней планкой на кнопках
- Утяжка по низу изделия
- 2 боковых кармана на невидимых кнопках
- Внутренний карман на молнии и карман без молнии

Размер модели на фото: L
Рост модели на фото: 182 см
Параметры модели на фото:
грудь: 95
талия: 75
бёдра: 95

Страна производства: Китай`,
        description: `Состав: Основная ткань: 100% Полиэстер; Подкл: 100% Полиэстер; Утеплитель: 100% Полиэстер
Температурный режим: от -10 до -20`,
      },
    ]);
  },
  getById: (id: string): Promise<Item[]> => {
    return Promise.resolve( [
      {
        id: "1",
        imgs: [
          "https://img.ostin.com/upload/mdm/media_content/resize/bf0/686_950_a12f/168581490299.jpg",
          "https://img.ostin.com/upload/mdm/media_content/resize/cba/686_950_786d/168581480299.jpg",
          "https://img.ostin.com/upload/mdm/media_content/resize/b06/332_460_62d3/168581500299.jpg",
          "https://img.ostin.com/upload/mdm/media_content/resize/555/332_460_8a97/168581510299.jpg",
          "https://img.ostin.com/upload/mdm/media_content/resize/967/332_460_3864/168581530299.jpg",
        ],
        name: "Утеплённая куртка с капюшоном",
        price: 8999,
        oldPrice: 16000,
        tags: ["hot", "installment", "sale"],
        sizes: `S М L XL XXL`.split(" "),
        colorsHex: ["#0b2738", "#2d2112", "#231917"],
        characteristics: `Утеплённая куртка с капюшоном

- Линеарная стёжка
- Несъёмный капюшон с утяжкой
- Рукава с манжетами на резинке
- Застёжка на крупную пластиковую молнию с внутренней ветрозащитной планкой и внешней планкой на кнопках
- Утяжка по низу изделия
- 2 боковых кармана на невидимых кнопках
- Внутренний карман на молнии и карман без молнии

Размер модели на фото: L
Рост модели на фото: 182 см
Параметры модели на фото:
грудь: 95
талия: 75
бёдра: 95

Страна производства: Китай`,
        description: `Состав: Основная ткань: 100% Полиэстер; Подкл: 100% Полиэстер; Утеплитель: 100% Полиэстер
Температурный режим: от -10 до -20`,
      },
    ]);
  },
};
