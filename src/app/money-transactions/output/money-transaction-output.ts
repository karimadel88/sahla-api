import { FinalOutput, Output, dateOutput } from "@warlock.js/core";
import { MoneyTransactionsUserOutput } from "app/money-transactions-users/output/money-transactions-user-output";
import UserOutput from "app/users/output/user-output";
import { withBaseOutputDetails } from "app/utils/output";

export class MoneyTransactionOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    user: UserOutput,
    date: dateOutput,
    totalRemaining: "number",
    totalDept: "number",
    difference: "number",
    amount: "number",
    type: "string",
    moneyTransactionUser: MoneyTransactionsUserOutput,
  });

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
