import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import restfulWallets from "./controllers/restful-wallets";

guardedAdmin(() => {
  router.restfulResource("/wallets", restfulWallets);
});
