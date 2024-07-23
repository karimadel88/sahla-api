import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import getUsersTotalTransactionsAmount from "./controllers/get-users-total-transactions-amount";
import restfulMoneyTransactions from "./controllers/restful-money-transactions";

guardedAdmin(() => {
  router.restfulResource("/money-transactions", restfulMoneyTransactions);
  router.get("/get-total-amount-transactions", getUsersTotalTransactionsAmount);
});
