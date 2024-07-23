import { Setting } from "./setting";

export const SettingBlueprint = Setting.blueprint();

export async function settingMigration() {
  SettingBlueprint.unique("id");
  SettingBlueprint.index("group");
}

settingMigration.blueprint = SettingBlueprint;

settingMigration.down = async () => {
  SettingBlueprint.dropUniqueIndex("id");
  SettingBlueprint.dropIndex("group");
};
