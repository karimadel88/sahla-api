import { RepositoryOptions } from "@warlock.js/core";
import { UsersRepository } from "./users-repository";

export class SuppliersRepository extends UsersRepository {
  /**
   * List default options
   */
  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({
    perform(query, options) {
      query.where("isSupplier", "=", true);
    },
  });
}

const suppliersRepository = new SuppliersRepository();

export default suppliersRepository;
