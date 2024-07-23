import { Restful, RouteResource } from "@warlock.js/core";
import { UsersGroup } from "../models/users-group";
import { usersGroupsRepository } from "./../repositories/users-groups-repository";

class RestfulUsersGroups extends Restful<UsersGroup> implements RouteResource {
  /**
   * {@inheritDoc}
   */
  protected repository = usersGroupsRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        name: ["required", "string"],
        permissions: ["array"],
        isActive: ["boolean"],
        notifications: ["object"],
      },
    },
  };
}

export const restfulUsersGroups = new RestfulUsersGroups();
