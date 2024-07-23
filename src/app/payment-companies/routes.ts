import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import restfulPaymentCompanies from "./controllers/restful-payment-companies";

guardedAdmin(() => {
  router.restfulResource("/payment-companies", restfulPaymentCompanies);
});
