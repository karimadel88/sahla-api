import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { DailySale } from "./../models/daily-sale";

export class DailySalesRepository extends RepositoryManager<DailySale> {
  /**
   * {@inheritDoc}
   */
  public model = DailySale;

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
    difference: "number",
  });
}

const dailySalesRepository = new DailySalesRepository();

export default dailySalesRepository;
