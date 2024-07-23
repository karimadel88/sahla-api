import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import getTotals from "./controllers/get-totals";

guardedAdmin(() => {
  router.get("/totals", getTotals);
});
