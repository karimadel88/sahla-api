import { router } from "@warlock.js/core";
import { guardedAdmin, publicRoutes } from "app/utils/router";
import getPublicSettingsHandler from "./controllers/get-public-settings-handler";
import getSettings from "./controllers/list-settings";
import setSettings from "./controllers/set-settings";

guardedAdmin(() => {
  router.prefix("/settings", () => {
    router.get("/", getSettings);
    router.post("/", setSettings);
  });
});

publicRoutes(() => {
  router.get("/settings", getPublicSettingsHandler);
});
