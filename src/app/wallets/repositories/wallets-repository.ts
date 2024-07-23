import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { Wallet } from "./../models/wallet";

export class WalletsRepository extends RepositoryManager<Wallet> {
  /**
   * {@inheritDoc}
   */
  public model = Wallet;

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
    wallet: "like",
    owner: ["int", "owner.id"],
    isActive: "boolean",
  });
}

const walletsRepository = new WalletsRepository();

export default walletsRepository;
