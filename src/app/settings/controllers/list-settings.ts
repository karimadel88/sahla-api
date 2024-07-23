import { Request, Response } from "@warlock.js/core";
import { settings } from "src/shared/settings/settings-manager";

export default async function getSettingsHandler(
  _request: Request,
  response: Response,
) {
  return response.send({
    settings: await settings.all(),
  });
}
