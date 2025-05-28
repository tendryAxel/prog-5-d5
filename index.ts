import terminalKit from "terminal-kit";
import {
  dispenseCoffee,
  getAllCoffees,
  getCoffeeByName,
} from "./src/service/coffeeService.ts";
import db from "./src/repository/db.ts";
import { coffeeStoredToString } from "./src/repository/model/Coffee.ts";

const term = terminalKit.terminal;

// juste for the test
db.update({
  coffees: [
    {
      coffee: {
        name: "Le Petit Bistro",
        pricePerLitre: 10,
      },
      litreQuantity: 10,
    },
  ],
});

term.singleColumnMenu(
  getAllCoffees().map((coffee) => coffee.coffee.name),
  { cancelable: true },
  (error, response) => {
    if (error) {
      console.error(error);
    }

    term("\n Your choice is: " + response.selectedText);

    dispenseCoffee(response.selectedText, 1);

    term(
      "\n The current coffee is " +
        coffeeStoredToString(getCoffeeByName(response.selectedText)),
    );

    term.processExit(0);
  },
);
