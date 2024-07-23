// types list

export type SettingsFilter = {
  type?: string;
  group?: string;
  key?: string;
  value?: any;
  isPublic?: boolean;
};

export type SettingList = Required<SettingsFilter>;

export type SettingsList = Promise<SettingList[]>;

export type ParsedSettings = {
  [group: string]: {
    [key: string]: any;
  };
};
