import { FinalOutput, Output } from "@warlock.js/core";
import { UsersGroupOutput } from "app/users-groups/output/users-group-output";
import { withBaseOutputDetails } from "app/utils/output";

export default class UserOutput extends Output {
  /**
   * Output data
   */
  protected output: FinalOutput = withBaseOutputDetails({
    name: "string",
    email: "string",
    group: UsersGroupOutput,
    isSupplier: "boolean",
    isClient: "boolean",
    isWalletOwner: "boolean",
  });
}
