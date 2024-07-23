import { migrationOffice, type Blueprint } from "@warlock.js/cascade";
import { PaymentCompany } from "../payment-company";

export default migrationOffice.register({
  name: "paymentCompanyMigrationMigration",
  blueprint: PaymentCompany.blueprint(),
  createdAt: "19-06-2024_16-51-50",
  up: (blueprint: Blueprint) => {
    blueprint.unique("id");
  },
  down: (blueprint: Blueprint) => {
    blueprint.dropUniqueIndex("id");
  },
});
