import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import usersRepository from "app/users/repositories/users-repository";
import { UsersGroup } from "../models/users-group";

export class UsersGroupsRepository extends RepositoryManager<UsersGroup> {
  /**
   * {@inheritDoc}
   */
  public model = UsersGroup;

  /**
   * List default options
   */
  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  /**
   * Filter By options
   */
  protected filterBy: FilterByOptions = {
    id: "int",
    name: "=",
    isActive: "bool",
  };

  /**
   * {@inheritdoc}
   */
  protected clearCacheOnUpdate = [usersRepository];
}

export const usersGroupsRepository = new UsersGroupsRepository();
