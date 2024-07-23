import { Request, Response } from "@warlock.js/core";
import { settings } from "src/shared/settings/settings-manager";

export default async function getPublicSettingsHandler(
  _request: Request,
  response: Response,
) {
  return response.success({
    settings: await settings.public(),
  });
}
