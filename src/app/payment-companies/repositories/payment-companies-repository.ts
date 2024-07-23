import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { PaymentCompany } from "./../models/payment-company";

export class PaymentCompaniesRepository extends RepositoryManager<PaymentCompany> {
  /**
   * {@inheritDoc}
   */
  public model = PaymentCompany;

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
    name: "like",
    supplier: ["int", "supplier.id"],
  });
}

const paymentCompaniesRepository = new PaymentCompaniesRepository();

export default paymentCompaniesRepository;
