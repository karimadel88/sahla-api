import { Response, useRequestStore } from "@warlock.js/core";
import { settings } from "src/shared/settings/settings-manager";

const withSettings = "ws";

Response.on("sending", async (response: Response) => {
  const { request } = useRequestStore();

  if (!response.isOk) return;

  if (request.header(withSettings) && !response.body.settings) {
    response.body.settings = await settings.list.public();
  }
});
