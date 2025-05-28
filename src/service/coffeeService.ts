import db from "../repository/db.ts";
import { MissingCoffeePodError } from "../exception.ts";

export const getAllCoffees = () => {
  return db.data.coffees;
};

export const getCoffeeByName = (name: string) => {
  return db.data.coffees.filter((coffee) => coffee.coffee.name === name)[0];
};

export const dispenseCoffee = (name: string, litreQuantity: number) => {
  const currentCoffee = getCoffeeByName(name);

  if (currentCoffee.litreQuantity < litreQuantity) {
    throw new MissingCoffeePodError(currentCoffee);
  }

  currentCoffee.litreQuantity -= litreQuantity;

  db.update({
    coffees: [...getAllCoffees(), currentCoffee],
  });

  db.commit();
};
