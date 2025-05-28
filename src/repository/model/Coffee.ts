export type CoffeeTemplate = {
  name: string;
  pricePerLitre: number;
};

export type CoffeeStored = {
  coffee: CoffeeTemplate;
  litreQuantity: number;
};

export const coffeeStoredToString = (coffee: CoffeeStored) => {
  return `Coffee Stored ${coffee.coffee.name}, ${coffee.coffee.pricePerLitre}$/L, ${coffee.litreQuantity}L`;
};
