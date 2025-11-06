export type IconName =
  | "LucideAlignStartVertical"
  | "LucideShoppingBag"
  | "CircleUserRoundIcon"
  | "HeartIcon"
  | "ScaleIcon"
  | "Settings";

export interface NavItem {
  title: string;
  url: string;
  icon: IconName;
}

export const navItems: NavItem[] = [
  {
    title: "Каталог",
    url: "/catalog",
    icon: "LucideAlignStartVertical",
  },
  {
    title: "Корзина",
    url: "/cart",
    icon: "LucideShoppingBag",
  },
  {
    title: "Профиль",
    url: "#",
    icon: "CircleUserRoundIcon",
  },
  {
    title: "Любимое",
    url: "#",
    icon: "HeartIcon",
  },
  {
    title: "Весы",
    url: "#",
    icon: "ScaleIcon",
  },
  {
    title: "Настройки",
    url: "#",
    icon: "Settings",
  },
];
