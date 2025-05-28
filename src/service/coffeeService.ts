import db from "../repository/db.ts";
import { MissingCoffeePodError } from "../exception.ts";

const getAllCoffees = () => {
  return db.data.coffees;
};

const getCoffeeById = (id: string) => {
  return db.data.coffees.filter((coffee) => coffee.coffee.id === id)[0];
};

const dispenseCoffee = (id: string, litreQuantity: number) => {
  const currentCoffee = getCoffeeById(id);

  if (currentCoffee.litreQuantity < litreQuantity) {
    throw new MissingCoffeePodError(currentCoffee);
  }

  currentCoffee.litreQuantity -= litreQuantity;

  db.update({
    coffees: [...getAllCoffees(), currentCoffee],
  });
};
