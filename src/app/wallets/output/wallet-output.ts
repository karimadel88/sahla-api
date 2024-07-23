import { FinalOutput, Output } from "@warlock.js/core";
import UserOutput from "app/users/output/user-output";
import { withBaseOutputDetails } from "app/utils/output";
import { WalletTransactionOutput } from "app/wallet-transactions/output/wallet-transaction-output";

export class WalletOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    isActive: "boolean",
    wallet: "string",
    withdrawalAmount: "number",
    depositAmount: "number",
    balance: "number",
    remainingDeposit: "number",
    remainingWithdrawal: "number",
    owner: UserOutput,
    walletTransactions: WalletTransactionOutput,
  });

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
