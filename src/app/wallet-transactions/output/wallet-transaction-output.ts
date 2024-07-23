import { FinalOutput, Output, dateOutput } from "@warlock.js/core";
import { withBaseOutputDetails } from "app/utils/output";
import { WalletOutput } from "app/wallets/output/wallet-output";

export class WalletTransactionOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    wallet: WalletOutput,
    date: dateOutput,
    amount: "number",
    type: "string",
    comment: "string",
  });

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
