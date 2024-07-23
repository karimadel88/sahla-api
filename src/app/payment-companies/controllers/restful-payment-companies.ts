import { Restful, RouteResource } from "@warlock.js/core";
import { PaymentCompany } from "./../models/payment-company";
import paymentCompaniesRepository from "./../repositories/payment-companies-repository";

class RestfulPaymentCompanies
  extends Restful<PaymentCompany>
  implements RouteResource
{
  /**
   * {@inheritDoc}
   */
  protected repository = paymentCompaniesRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        name: ["required", "string"],
        supplier: ["int"],
      },
    },
  };
}

const restfulPaymentCompanies = new RestfulPaymentCompanies();
export default restfulPaymentCompanies;
