import terminalKit from "terminal-kit";
import {
  dispenseCoffee,
  getAllCoffees,
  getCoffeeByName,
} from "./src/service/coffeeService.ts";
import db from "./src/repository/db.ts";
import { coffeeStoredToString } from "./src/repository/model/Coffee.ts";
import { InsufficientFundsError } from "./src/exception.ts";

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

term.green(`Enter the your money`);

term.inputField({}, (err, data) => {
  if (err) {
    console.error(err);
    term.processExit(1);
  }

  if (Number(data) <= 10) throw new InsufficientFundsError();

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
});
