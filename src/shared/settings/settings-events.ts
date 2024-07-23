import events from "@mongez/events";
import { SettingsManager, settings } from "./settings-manager";

export const SettingsEvents = {
  onUpdate(callback: (settings: SettingsManager) => void) {
    return events.subscribe("settings.update", callback);
  },
  triggerUpdate(settingsManager = settings) {
    return events.trigger("settings.update", settingsManager);
  },
};
