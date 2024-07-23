import { FinalOutput, Output } from "@warlock.js/core";
import UserOutput from "app/users/output/user-output";
import { withBaseOutputDetails } from "app/utils/output";

export class PaymentCompanyOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    name: "string",
    supplier: UserOutput,
  });

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
