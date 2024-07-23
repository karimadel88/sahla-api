import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { Expense } from "./../models/expense";

export class ExpensesRepository extends RepositoryManager<Expense> {
  /**
   * {@inheritDoc}
   */
  public model = Expense;

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
    expense: "like",
    amount: "number",
  });
}

const expensesRepository = new ExpensesRepository();

export default expensesRepository;
