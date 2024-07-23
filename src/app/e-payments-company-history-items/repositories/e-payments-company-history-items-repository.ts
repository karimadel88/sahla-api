import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { EPaymentsCompanyHistoryItem } from "./../models/e-payments-company-history-item";

export class EPaymentsCompanyHistoryItemsRepository extends RepositoryManager<EPaymentsCompanyHistoryItem> {
  /**
   * {@inheritDoc}
   */
  public model = EPaymentsCompanyHistoryItem;

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
    ePayment: ["int", "ePayment.id"],
    amount: "number",
    date: "date",
  });
}

const ePaymentsCompanyHistoryItemsRepository =
  new EPaymentsCompanyHistoryItemsRepository();

export default ePaymentsCompanyHistoryItemsRepository;
