import { Restful, RouteResource } from "@warlock.js/core";
import { EPayment } from "./../models/e-payment";
import ePaymentsRepository from "./../repositories/e-payments-repository";

class RestfulEPayments extends Restful<EPayment> implements RouteResource {
  /**
   * {@inheritDoc}
   */
  protected repository = ePaymentsRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {},
    },
  };
}

const restfulEPayments = new RestfulEPayments();
export default restfulEPayments;
