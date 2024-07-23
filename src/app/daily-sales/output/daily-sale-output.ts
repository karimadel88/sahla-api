import { FinalOutput, Output } from "@warlock.js/core";
import { withBaseOutputDetails } from "app/utils/output";

export class DailySaleOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    wallets: "number",
    liquidity: "number",
    ePayments: "number",
    remaining: "number",
    dept: "number",
    total: "number",
    difference: "number",
    expenses: "number",
  });

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
