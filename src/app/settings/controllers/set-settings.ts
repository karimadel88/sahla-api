import { GenericObject } from "@mongez/reinforcements";
import { isEmpty } from "@mongez/supportive-is";
import { Request, Response } from "@warlock.js/core";
import { SettingsEvents } from "src/shared/settings/settings-events";
import { settings } from "src/shared/settings/settings-manager";
import { privateSettingsGroups } from "src/shared/settings/utils/flags";
import { Setting } from "../models/setting";

export default async function setSettings(
  request: Request,
  response: Response,
) {
  const settingsInputs: GenericObject = request.input("settings");

  const creations: Promise<Setting>[] = [];

  for (const group in settingsInputs) {
    for (const key in settingsInputs[group]) {
      const { type, value } = settingsInputs[group][key];

      if (isEmpty(value)) {
        settings.delete(group, key);
        continue;
      }

      creations.push(
        settings.set({
          group,
          key,
          type,
          value,
          isPublic: !privateSettingsGroups.includes(group),
        }),
      );
    }
  }

  await Promise.all(creations);

  await settings.list.refresh();

  SettingsEvents.triggerUpdate();

  response.success({
    settings: await settings.list.values(),
  });
}

setSettings.validation = {
  rules: {
    settings: ["required", "object"],
  },
};
