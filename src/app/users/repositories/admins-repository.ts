import { RepositoryOptions } from "@warlock.js/core";
import { UsersRepository } from "./users-repository";

export class AdminsRepository extends UsersRepository {
  /**
   * List default options
   */
  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({
    perform(query, options) {
      query.where("isAdmin", true);
    },
  });
}

const adminsRepository = new AdminsRepository();

export default adminsRepository;
