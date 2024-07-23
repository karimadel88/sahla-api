import { Restful, RouteResource } from "@warlock.js/core";
import { Expense } from "./../models/expense";
import expensesRepository from "./../repositories/expenses-repository";

class RestfulExpenses extends Restful<Expense> implements RouteResource {
  /**
   * {@inheritDoc}
   */
  protected repository = expensesRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        expense: ["string", "required"],
        amount: ["number", "required"],
      },
    },
  };
}

const restfulExpenses = new RestfulExpenses();
export default restfulExpenses;
