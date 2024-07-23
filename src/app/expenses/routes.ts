import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import restfulExpenses from "./controllers/restful-expenses";

guardedAdmin(() => {
  router.restfulResource("/expenses", restfulExpenses);
});
