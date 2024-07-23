import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { WalletTransaction } from "./../models/wallet-transaction";

export class WalletTransactionsRepository extends RepositoryManager<WalletTransaction> {
  /**
   * {@inheritDoc}
   */
  public model = WalletTransaction;

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
    wallet: ["int", "wallet.id"],
    date: "date",
    amount: "number",
    type: "=",
  });
}

const walletTransactionsRepository = new WalletTransactionsRepository();

export default walletTransactionsRepository;
