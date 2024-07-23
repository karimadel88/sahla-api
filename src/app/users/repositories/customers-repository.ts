import { RepositoryOptions } from "@warlock.js/core";
import { UsersRepository } from "./users-repository";

export class CustomersRepository extends UsersRepository {
  /**
   * List default options
   */
  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({
    perform(query, options) {
      query.where("isClient", "=", true);
    },
  });
}

const customersRepository = new CustomersRepository();

export default customersRepository;
