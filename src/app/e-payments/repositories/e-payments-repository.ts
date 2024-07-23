import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { EPayment } from "./../models/e-payment";

export class EPaymentsRepository extends RepositoryManager<EPayment> {
  /**
   * {@inheritDoc}
   */
  public model = EPayment;

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
    paymentCompany: ["int", "paymentCompany.id"],
    ePaymentsCompanyHistoryItems: ["inInt", "ePaymentsCompanyHistoryItems.id"],
  });
}

const ePaymentsRepository = new EPaymentsRepository();

export default ePaymentsRepository;
