import { migrationOffice, type Blueprint } from "@warlock.js/cascade";
import { WalletTransaction } from "../wallet-transaction";

export default migrationOffice.register({
  name: "walletTransactionMigrationMigration",
  blueprint: WalletTransaction.blueprint(),
  createdAt: "19-06-2024_16-35-41",
  up: (blueprint: Blueprint) => {
    blueprint.unique("id");
  },
  down: (blueprint: Blueprint) => {
    blueprint.dropUniqueIndex("id");
  },
});
