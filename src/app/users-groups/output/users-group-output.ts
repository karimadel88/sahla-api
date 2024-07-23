import { FinalOutput, Output } from "@warlock.js/core";
import { withBaseOutputDetails } from "app/utils/output";

export class UsersGroupOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    name: "string",
    permissions: "array",
    isActive: "boolean",
  });
}
