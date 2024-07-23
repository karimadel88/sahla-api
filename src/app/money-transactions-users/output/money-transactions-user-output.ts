import { FinalOutput, Output } from "@warlock.js/core";
import UserOutput from "app/users/output/user-output";
import { withBaseOutputDetails } from "app/utils/output";

export class MoneyTransactionsUserOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    user: UserOutput,
    totalRemaining: "number",
    totalDept: "number",
    difference: "number",
    differenceType: "string",
  });

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
