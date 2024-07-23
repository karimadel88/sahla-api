import { Restful, RouteResource } from "@warlock.js/core";
import { MoneyTransactionType } from "../utils/flags";
import { MoneyTransaction } from "./../models/money-transaction";
import moneyTransactionsRepository from "./../repositories/money-transactions-repository";

class RestfulMoneyTransactions
  extends Restful<MoneyTransaction>
  implements RouteResource
{
  cache: boolean = false;
  /**
   * {@inheritDoc}
   */
  protected repository = moneyTransactionsRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        user: ["int", "required"],
        amount: ["number", "required"],
        type: [
          "required",
          "in:" + Object.values(MoneyTransactionType).join(","),
        ],
      },
    },
  };
}

const restfulMoneyTransactions = new RestfulMoneyTransactions();
export default restfulMoneyTransactions;
