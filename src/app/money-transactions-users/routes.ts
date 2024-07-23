import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import restfulMoneyTransactionsUsers from "./controllers/restful-money-transactions-users";

guardedAdmin(() => {
  router.restfulResource(
    "/money-transactions-users",
    restfulMoneyTransactionsUsers,
    {
      only: ["list", "delete"],
    },
  );
});
