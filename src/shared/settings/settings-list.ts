import {
  UploadOutput,
  fromRequest,
  getLocalized,
  requestContext,
} from "@warlock.js/core";
import { Setting } from "app/settings/models/setting";
import { settingsModels } from "./utils/flags";
import { ParsedSettings, SettingList } from "./utils/types";

/**
 * Settings list: This Class manage all listing of settings as get by group or key or else.
 */
export class SettingsList {
  /**
   * Settings key
   */
  protected cachedSettingsList = new Map<string, SettingList[]>();

  /**
   * private request
   */
  protected get request() {
    return requestContext().request;
  }

  /**
   * Get all settings list
   * Should be used with admin
   */
  public async all() {
    if (!this.isCached()) {
      await this.refresh();
    }

    return this.cachedSettingsList.get(this.cacheKey) || [];
  }

  /**
   * Check if settings list is cached
   */
  public isCached() {
    return this.cachedSettingsList.has(this.cacheKey);
  }

  /**
   * List all settings from database and cache them
   */
  public async refresh() {
    const settings = await this.load();

    this.cachedSettingsList.set(this.cacheKey, settings);

    return settings;
  }

  /**
   * Load settings from database
   */
  protected async load() {
    const settings = await Setting.list();

    const data = settings.map(setting =>
      setting.only(["group", "key", "value", "type", "isPublic"]),
    );

    return data as SettingList[];
  }

  /**
   * Get settings values directly in this format: [group][key] = value
   */
  public values() {
    return fromRequest("settings", () => this.parse());
  }

  /**
   * Get public settings only
   */
  public async public() {
    return fromRequest("settings.public", () => this.parse(true));
  }

  /**
   * Get single setting
   * The key must contain the group name
   */
  public async get(setting: string, defaultValue?: any) {
    const [group, key] = setting.split(".");

    const values = await this.values();

    return values?.[group]?.[key] || defaultValue;
  }

  /**
   * Get group settings
   */
  public async group(groupName: string, defaultValue: any = {}) {
    const values = await this.values();

    return values[groupName] || defaultValue;
  }

  /**
   * Get groups settings
   */
  public async groups(...groupNames: string[]) {
    const values = await this.values();

    const groups: ParsedSettings = {};

    for (const groupName of groupNames) {
      groups[groupName] = values[groupName];
    }

    return groups;
  }

  /**
   * Parse settings to directly return all values
   * It should return settings in this format: [group][key] = value
   */
  protected async parse(returnPublicOnly = false) {
    const request = this.request;

    const localeCode = request?.localized;

    const settingsList: ParsedSettings = {};
    const settings = await this.all();

    for (const setting of settings) {
      const { group, isPublic, key, value, type } = setting;

      if (returnPublicOnly && !isPublic) {
        continue;
      }

      if (!settingsList[group]) {
        settingsList[group] = {};
      }

      const Model = (settingsModels as any)[`${group}.${key}`];

      if (type === "file") {
        settingsList[group][key] = await new UploadOutput(value).toJSON();
      } else if (type === "localization" && localeCode) {
        settingsList[group][key] = getLocalized(value, localeCode);
      } else if (Model) {
        settingsList[group][key] = await new Model(value).toJSON();
      } else {
        settingsList[group][key] = value;
      }
    }

    return settingsList;
  }

  /**
   * Get cache settings key
   */
  public get cacheKey() {
    return `settings.${requestContext().request?.client?.id}`;
  }
}
