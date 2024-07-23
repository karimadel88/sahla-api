import { Restful, RouteResource, UniqueRule } from "@warlock.js/core";
import { User } from "../models/user";
import adminsRepository from "../repositories/admins-repository";
import customersRepository from "../repositories/customers-repository";
import suppliersRepository from "../repositories/suppliers-repository";
import usersRepository from "../repositories/users-repository";
import walletsOwnersRepository from "../repositories/wallet-owners-repository";

/**
 * Restful users
 */
class RestfulUsers extends Restful<User> implements RouteResource {
  /**
   * {@inheritDoc}
   */
  protected repository = usersRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    create: {
      rules: {
        name: ["required", "minLength:2"],
        email: ["email", new UniqueRule(User).exceptCurrentUser()],
        phoneNumber: [new UniqueRule(User).exceptCurrentUser()],
      },
    },
  };
}

export const restfulUsers = new RestfulUsers();

/**
 * Restful admins
 */
class RestfulAdmins extends RestfulUsers {
  /**
   * {@inheritDoc}
   */
  protected repository = adminsRepository;
}

export const restfulAdmins = new RestfulAdmins();

/**
 * Restful suppliers
 */
class RestfulSuppliers extends RestfulUsers {
  /**
   * {@inheritDoc}
   */
  protected repository = suppliersRepository;
}

export const restfulSuppliers = new RestfulSuppliers();

/**
 * Restful customers
 */
class RestfulCustomers extends RestfulUsers {
  cache: boolean = false;
  /**
   * {@inheritDoc}
   */
  protected repository = customersRepository;
}

export const restfulCustomers = new RestfulCustomers();

/**
 * Restful wallets owners
 */
class RestfulWalletsOwners extends RestfulUsers {
  /**
   * {@inheritDoc}
   */
  protected repository = walletsOwnersRepository;
}

export const restfulWalletsOwners = new RestfulWalletsOwners();
