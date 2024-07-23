import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { MoneyTransaction } from "./../models/money-transaction";

export class MoneyTransactionsRepository extends RepositoryManager<MoneyTransaction> {
  /**
   * {@inheritDoc}
   */
  public model = MoneyTransaction;

  /**
   * Simple columns selections
   * Set the columns that need to be selected when passing 'simple' option with 'true'
   */
  public simpleSelectColumns = ["id"];

  /**
   * List default options
   */
  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  /**
   * Filter By options
   */
  protected filterBy: FilterByOptions = this.withDefaultFilters({
    user: ["int", "user.id"],
    date: "date",
    amount: "number",
    type: "=",
    moneyTransactionUser: ["int", "moneyTransactionUser.id"],
  });
}

const moneyTransactionsRepository = new MoneyTransactionsRepository();

export default moneyTransactionsRepository;
