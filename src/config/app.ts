import { env } from "@mongez/dotenv";
import { AppConfigurations } from "@warlock.js/core";

const appConfigurations: AppConfigurations = {
  appName: env("APP_NAME", "Warlock"),
  timezone: env("TIMEZONE", "UTC"),
  baseUrl: env("BASE_URL"),
  localeCode: env("LOCALE_CODE", "en"),
  localeCodes: ["en", "ar"],
};

export default appConfigurations;
