import { Setting } from "./setting";

export const SettingBluePrint = Setting.blueprint();

export async function settingMigration() {
  await SettingBluePrint.unique("id");
}

settingMigration.blueprint = SettingBluePrint;

settingMigration.down = async () => {
  await SettingBluePrint.dropUniqueIndex("id");
};
