import { migrationOffice, type Blueprint } from "@warlock.js/cascade";
import { EPaymentsCompanyHistoryItem } from "../e-payments-company-history-item";

export default migrationOffice.register({
  name: "ePaymentsCompanyHistoryItemMigrationMigration",
  blueprint: EPaymentsCompanyHistoryItem.blueprint(),
  createdAt: "19-06-2024_16-58-59",
  up: (blueprint: Blueprint) => {
    blueprint.unique("id");
  },
  down: (blueprint: Blueprint) => {
    blueprint.dropUniqueIndex("id");
  },
});
