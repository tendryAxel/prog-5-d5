export type CoffeeTemplate = {
  id: string;
  name: string;
};

export type CoffeeStored = {
  coffee: CoffeeTemplate;
  quantity: number;
};
