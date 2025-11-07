

export type Item = {
  id: string;
  name: string;
  imgSrc: string[];
  price: number;
  oldPrice?: number;
  tags: ItemTag[]
}

export type ItemTag = "hot" | "sale" | "installment"