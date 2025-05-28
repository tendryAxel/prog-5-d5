import type { CoffeeStored } from "./repository/model/Coffee.ts";

export class MissingCoffeePodError extends Error {
  constructor(coffeeStorage: CoffeeStored) {
    super(
      `Not enough coffee in the machine, remaining ${coffeeStorage.litreQuantity} L coffees`,
    );
  }
}

export class InsufficientFundsError extends Error {
  constructor() {
    super();
  }
}
