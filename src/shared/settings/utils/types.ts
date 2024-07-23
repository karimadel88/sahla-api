/**
 * Settings filter
 */
export type SettingsFilter = {
  type?: string;
  group?: string;
  key?: string;
  value?: any;
  isPublic?: boolean;
};

/**
 * Setting list
 */
export type SettingList = Required<SettingsFilter>;

/**
 * Settings list
 */
export type SettingsList = Promise<SettingList[]>;

/**
 * Parsed Settings
 */
export type ParsedSettings = {
  [group: string]: {
    [key: string]: any;
  };
};
