import { Restful, RouteResource } from "@warlock.js/core";
import { EPaymentsCompanyHistoryItem } from "./../models/e-payments-company-history-item";
import ePaymentsCompanyHistoryItemsRepository from "./../repositories/e-payments-company-history-items-repository";

class RestfulEPaymentsCompanyHistoryItems
  extends Restful<EPaymentsCompanyHistoryItem>
  implements RouteResource
{
  /**
   * {@inheritDoc}
   */
  protected repository = ePaymentsCompanyHistoryItemsRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        ePayment: ["int", "required"],
        amount: ["number", "required"],
      },
    },
  };
}

const restfulEPaymentsCompanyHistoryItems =
  new RestfulEPaymentsCompanyHistoryItems();
export default restfulEPaymentsCompanyHistoryItems;
