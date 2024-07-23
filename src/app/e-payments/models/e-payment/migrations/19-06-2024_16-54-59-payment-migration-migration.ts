import { migrationOffice, type Blueprint } from "@warlock.js/cascade";
import { EPayment } from "../e-payment";

export default migrationOffice.register({
  name: "ePaymentMigrationMigration",
  blueprint: EPayment.blueprint(),
  createdAt: "19-06-2024_16-54-59",
  up: (blueprint: Blueprint) => {
    blueprint.unique("id");
  },
  down: (blueprint: Blueprint) => {
    blueprint.dropUniqueIndex("id");
  },
});
