import { GenericObject } from "@mongez/reinforcements";

import { Setting } from "app/settings/models/setting";
import { SettingsList } from "./settings-list";
import { settingsParser } from "./settings-parser";
import { privateSettingsGroups } from "./utils/flags";

/**
 * Settings manager
 */
export class SettingsManager {
  /**
   * Check if setting public
   */
  public isPublic(groupName: string) {
    return !privateSettingsGroups.includes(groupName);
  }

  /**
   * Get settings list instance
   */
  public list = new SettingsList();

  /**
   * set setting
   */
  public async set(data: GenericObject) {
    const { group } = data;

    data.value = await settingsParser.parse(data);
    data.isPublic = this.isPublic(group);

    return await this.save(data);
  }

  /**
   * Save setting
   */
  protected async save(data: GenericObject) {
    const { group, key } = data;
    const settings =
      (await Setting.first({
        group,
        key,
      })) || new Setting();

    return await settings.save(data);
  }

  /**
   * Delete setting
   */
  public delete(group: string, key: string) {
    return Setting.aggregate()
      .where({
        group,
        key,
      })
      .delete();
  }

  /**
   * get public settings
   */
  public async public() {
    return this.list.public();
  }

  /**
   * Get all settings
   */
  public async all() {
    return this.list.values();
  }
}

export const settings = new SettingsManager();

export function getSetting(groupKey: string, defaultValue?: any) {
  return settings.list.get(groupKey, defaultValue);
}

/**
 * set setting
 */
export async function setSetting(data: GenericObject) {
  return settings.set(data);
}

/**
 * export getSetting
 */
export function getSettings() {
  return settings.all();
}

export function getSettingGroup(group: string, defaultValue?: any) {
  return settings.list.group(group, defaultValue);
}
