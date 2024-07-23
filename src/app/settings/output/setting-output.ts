import { FinalOutput, Output } from "@warlock.js/core";

export class SettingOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = {
    type: "string",
    group: "string",
    key: "string",
    value: "any",
  };

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
