import { RepositoryOptions } from "@warlock.js/core";
import { UsersRepository } from "./users-repository";

export class WalletOwnersRepository extends UsersRepository {
  /**
   * List default options
   */
  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({
    perform(query, options) {
      query.where("isWalletOwner", "=", true);
    },
  });
}

const walletsOwnersRepository = new WalletOwnersRepository();

export default walletsOwnersRepository;
