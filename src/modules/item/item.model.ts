

export type Item = {
  colorsHex: string[];
  id: string;
  name: string;
  imgs: string[];
  price: number;
  oldPrice?: number;
  description: string;
  characteristics: string;
  sizes: string[];
  tags: ItemTag[]
}

export type ItemTag = "hot" | "sale" | "installment"