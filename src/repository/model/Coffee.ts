export type CoffeeTemplate = {
  id: string;
  name: string;
  pricePerLitre: number;
};

export type CoffeeStored = {
  coffee: CoffeeTemplate;
  litreQuantity: number;
};
