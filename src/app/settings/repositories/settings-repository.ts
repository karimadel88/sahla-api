import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { Setting } from "./../models/setting";

export class SettingsRepository extends RepositoryManager<Setting> {
  /**
   * {@inheritDoc}
   */
  public model = Setting;

  /**
   * List default options
   */
  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  /**
   * Filter By options
   */
  protected filterBy: FilterByOptions = {
    group: "=",
    key: "=",
  };
}

export const settingsRepository = new SettingsRepository();
