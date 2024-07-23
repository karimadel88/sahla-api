import { migrationOffice, type Blueprint } from "@warlock.js/cascade";
import { Wallet } from "../wallet";

export default migrationOffice.register({
  name: "walletMigrationMigration",
  blueprint: Wallet.blueprint(),
  createdAt: "19-06-2024_16-31-39",
  up: (blueprint: Blueprint) => {
    blueprint.unique("id");
  },
  down: (blueprint: Blueprint) => {
    blueprint.dropUniqueIndex("id");
  },
});
