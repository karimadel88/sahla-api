import { router } from "@warlock.js/core";
import adminHome from "app/home/controllers/admin-home";
import userHome from "app/home/controllers/user-home";
import { guardedAdmin } from "app/utils/router";

guardedAdmin(() => {
  router.get("/home", adminHome);
});

router.get("/home", userHome);
