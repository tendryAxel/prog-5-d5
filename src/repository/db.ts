import { Database } from "./jsonDataBaseStorage.ts";
import type { CoffeeStored } from "./model/Coffee.ts";

interface dbStructure {
  coffees: CoffeeStored[];
}

const db = new Database<dbStructure>("db.json", {
  coffees: [],
});

export default db;
