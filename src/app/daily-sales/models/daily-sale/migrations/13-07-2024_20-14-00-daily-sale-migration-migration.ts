import { migrationOffice, type Blueprint } from "@warlock.js/cascade";
import { DailySale } from "../daily-sale";

export default migrationOffice.register({
  name: "dailySaleMigrationMigration",
  blueprint: DailySale.blueprint(),
  createdAt: "13-07-2024_20-14-00",
  up: (blueprint: Blueprint) => {
    blueprint.unique("id");
  },
  down: (blueprint: Blueprint) => {
    blueprint.dropUniqueIndex("id");
  },
});
