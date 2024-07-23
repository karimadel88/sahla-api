import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import restfulWalletTransactions from "./controllers/restful-wallet-transactions";

guardedAdmin(() => {
  router.restfulResource("/wallet-transactions", restfulWalletTransactions);
});
