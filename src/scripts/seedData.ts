import { InsertType } from "./utils";

export const GendersCollections = [
  {
    name: "Женское",
    image_src:
      "https://img.ostin.com/upload/content/contentgate/prod/ru_ostin/clp/desk__w__1111__061125.webp",
  },
  {
    name: "Мужское",
    image_src:
      "https://img.ostin.com/upload/content/contentgate/prod/ru_ostin/clp/desk__m__1111__061125.webp",
  },
];

export const ClothesTypesMap: Record<string, InsertType<"collection_nodes">[]> = {
  Женское: [
    {
      name: "Верхняя одежда",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__w__vo__250925.jpg",
    },
    {
      name: "Комплекты и сеты",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__w__set__250925.jpg",
    },
    {
      name: "Одежда из трикотажа",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__w__trikotazh__250925.jpg",
    },
    {
      name: "Джемперы и кардиганы",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__w__djemper__250925.jpg",
    },
    {
      name: "Рубашки и блузки",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__w__bluzki__250925.jpg",
    },
    {
      name: "Футболки и топы",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__w__futbolki__250925.jpg",
    },
    {
      name: "Платья и сарафаны",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__w__platye__250925.jpg",
    },
    {
      name: "Пиджаки и жакеты",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__w__jaket__250925.jpg",
    },
  ],
  Мужское: [
    {
      name: "Верхняя одежда",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__m__vo__091025.jpg",
    },
    {
      name: "Джемперы и кардиганы",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__m__vo__091025.jpg",
    },
    {
      name: "Рубашки",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__m__rubashki__091025.jpg",
    },
    {
      name: "Футболки",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__m__polo__091025.jpg",
    },
    {
      name: "Брюки",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__m__bruki__091025.jpg",
    },
    {
      name: "Джинсы",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__m__jeans__091025.jpg",
    },
    {
      name: "Толстовки и худи",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__m__hudi__091025.jpg",
    },
    {
      name: "Пиджаки и жакеты",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__m__jaket__091025.jpg",
    },
    {
      name: "Обувь",
      image_src:
        "https://img.ostin.com/upload/content/cmsgate/ru_ostin/ost/banners/cms_auto_upload/desk__subslider__m__obuv__091025.jpg",
    },
  ],
};
