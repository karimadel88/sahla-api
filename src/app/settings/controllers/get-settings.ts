import { Request, Response } from "@warlock.js/core";
import { settingsRepository } from "../repositories/settings-repository";

export default async function getSettings(
  request: Request,
  response: Response,
) {
  const { documents: settings, paginationInfo } =
    await settingsRepository.listActive(request.all());

  return response.success({
    settings,
    paginationInfo,
  });
}
