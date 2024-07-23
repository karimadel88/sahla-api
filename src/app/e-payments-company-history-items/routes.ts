import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import restfulEPaymentsCompanyHistoryItems from "./controllers/restful-e-payments-company-history-items";

guardedAdmin(() => {
  router.restfulResource(
    "/e-payments-company-history-items",
    restfulEPaymentsCompanyHistoryItems,
  );
});
