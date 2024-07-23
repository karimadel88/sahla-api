import { migrationOffice, type Blueprint } from "@warlock.js/cascade";
import { Expense } from "../expense";

export default migrationOffice.register({
  name: "expenseMigrationMigration",
  blueprint: Expense.blueprint(),
  createdAt: "13-07-2024_19-38-37",
  up: (blueprint: Blueprint) => {
    blueprint.unique("id");
  },
  down: (blueprint: Blueprint) => {
    blueprint.dropUniqueIndex("id");
  },
});
