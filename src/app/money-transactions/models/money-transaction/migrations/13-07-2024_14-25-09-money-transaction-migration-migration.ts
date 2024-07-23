import { migrationOffice, type Blueprint } from "@warlock.js/cascade";
import { MoneyTransaction } from "../money-transaction";

export default migrationOffice.register({
  name: "moneyTransactionMigrationMigration",
  blueprint: MoneyTransaction.blueprint(),
  createdAt: "13-07-2024_14-25-09",
  up: (blueprint: Blueprint) => {
    blueprint.unique("id");
  },
  down: (blueprint: Blueprint) => {
    blueprint.dropUniqueIndex("id");
  },
});
