import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import createDailySale from "./controllers/create-daily-sale";
import restfulDailySales from "./controllers/restful-daily-sales";

guardedAdmin(() => {
  router.restfulResource("/daily-sales", restfulDailySales, {
    replace: {
      create: createDailySale,
    },
  });
});
