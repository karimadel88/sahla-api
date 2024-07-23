import { migrationOffice, type Blueprint } from "@warlock.js/cascade";
import { MoneyTransactionsUser } from "../money-transactions-user";

export default migrationOffice.register({
  name: "moneyTransactionsUserMigrationMigration",
  blueprint: MoneyTransactionsUser.blueprint(),
  createdAt: "13-07-2024_17-55-41",
  up: (blueprint: Blueprint) => {
    blueprint.unique("id");
  },
  down: (blueprint: Blueprint) => {
    blueprint.dropUniqueIndex("id");
  },
});
