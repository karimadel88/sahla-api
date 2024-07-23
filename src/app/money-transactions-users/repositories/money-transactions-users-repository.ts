import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { MoneyTransactionsUser } from "./../models/money-transactions-user";

export class MoneyTransactionsUsersRepository extends RepositoryManager<MoneyTransactionsUser> {
  /**
   * {@inheritDoc}
   */
  public model = MoneyTransactionsUser;

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
    totalRemaining: "number",
    totalDept: "number",
    difference: "number",
    differenceType: "=",
  });
}

const moneyTransactionsUsersRepository = new MoneyTransactionsUsersRepository();

export default moneyTransactionsUsersRepository;
