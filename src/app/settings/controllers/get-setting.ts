import { Request, Response } from "@warlock.js/core";
import { settingsRepository } from "../repositories/settings-repository";

export default async function getSetting(request: Request, response: Response) {
  const setting = await settingsRepository.get(request.int("id"));

  if (!setting) {
    return response.notFound();
  }

  return response.success({
    setting,
  });
}
