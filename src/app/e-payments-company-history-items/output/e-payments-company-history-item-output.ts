import { FinalOutput, Output, dateOutput } from "@warlock.js/core";
import { EPaymentOutput } from "app/e-payments/output/e-payment-output";
import { PaymentCompanyOutput } from "app/payment-companies/output/payment-company-output";
import { withBaseOutputDetails } from "app/utils/output";

export class EPaymentsCompanyHistoryItemOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    ePayment: EPaymentOutput,
    company: PaymentCompanyOutput,
    amount: "number",
    date: dateOutput,
  });

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
