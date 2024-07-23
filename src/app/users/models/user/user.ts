import { Auth, castPassword } from "@warlock.js/auth";
import { Casts, Document, castEmail, expiresAfter } from "@warlock.js/cascade";
import { uploadable } from "@warlock.js/core";
import { PaymentCompany } from "app/payment-companies/models/payment-company";
import { UsersGroup } from "app/users-groups/models/users-group";
import UserOutput from "../../output/user-output";

export class User extends Auth {
  /**
   * Collection name
   */
  public static collection = "users";

  /**
   * Output
   */
  public static output = UserOutput;

  /**
   * {@inheritdoc}
   */
  public syncWith = [PaymentCompany.sync("supplier")];

  /**
   * Get user type
   */
  public get userType(): string {
    return "user";
  }

  /**
   * {@inheritDoc}
   */
  public defaultValue: Document = {
    isActive: false,
  };

  /**
   * {@inheritDoc}
   */
  protected casts: Casts = {
    name: "string",
    isActive: "boolean",
    image: uploadable,
    email: castEmail,
    isSupplier: "boolean",
    isClient: "boolean",
    isWalletOwner: "boolean",
    password: castPassword,
    group: UsersGroup,
    activationCode: "int",
    codeExpiresAt: expiresAfter(30, "minutes"),
  };

  /**
   * {@inheritdoc}
   */
  public embedded = ["id", "name", "email", "group"];
}
