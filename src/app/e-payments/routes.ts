import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import createEPayment from "./controllers/create-e-payment";
import restfulEPayments from "./controllers/restful-e-payments";

guardedAdmin(() => {
  router.restfulResource("/e-payments", restfulEPayments, {
    except: ["create", "update"],
  });
  router.post("/e-payments", createEPayment);
});
