import { Casts, Document, Model } from "@warlock.js/cascade";
import { SettingOutput } from "./../../output/setting-output";

export class Setting extends Model {
  /**
   * Collection name
   */
  public static collection = "settings";

  /**
   * Output class
   */
  public static output = SettingOutput;

  /**
   * Default value for model data
   * Works only when creating new records
   */
  public defaultValue: Document = {
    isPublic: true,
  };

  /**
   * Cast data types before saving documents into database
   */
  protected casts: Casts = {
    group: "string",
    type: "string",
    key: "string",
    value: "any",
    isPublic: "boolean",
  };
}
