import { FinalOutput, Output } from "@warlock.js/core";
import { withBaseOutputDetails } from "app/utils/output";

export class ExpenseOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    expense: "string",
    amount: "number",
  });

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
