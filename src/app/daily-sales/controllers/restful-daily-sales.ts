import { Restful, RouteResource } from "@warlock.js/core";
import { DailySale } from "./../models/daily-sale";
import dailySalesRepository from "./../repositories/daily-sales-repository";

class RestfulDailySales extends Restful<DailySale> implements RouteResource {
  /**
   * {@inheritDoc}
   */
  protected repository = dailySalesRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        wallets: ["number", "required"],
        liquidity: ["number", "required"],
      },
    },
  };
}

const restfulDailySales = new RestfulDailySales();
export default restfulDailySales;
