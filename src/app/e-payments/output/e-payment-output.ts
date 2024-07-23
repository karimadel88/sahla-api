import { FinalOutput, Output } from "@warlock.js/core";
import { EPaymentsCompanyHistoryItemOutput } from "app/e-payments-company-history-items/output/e-payments-company-history-item-output";
import { withBaseOutputDetails } from "app/utils/output";

export class EPaymentOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    ePaymentsCompanyHistoryItems: EPaymentsCompanyHistoryItemOutput,
    date: "date",
    total: "number",
  });

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
