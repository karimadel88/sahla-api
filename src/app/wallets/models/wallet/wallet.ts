import {
  Model,
  type Casts,
  type Document,
  type ModelSync,
} from "@warlock.js/cascade";
import { User } from "app/users/models/user";
import { WalletTransaction } from "app/wallet-transactions/models/wallet-transaction";
import { WalletOutput } from "./../../output/wallet-output";

export class Wallet extends Model {
  /**
   * Collection name
   */
  public static collection = "wallets";

  /**
   * Output class
   */
  public static output = WalletOutput;

  /**
   * List of models to sync with
   * To sync with a single embedded document use: [User.sync("city")],
   * this will update the city sub-document to all users when city model is updated.
   * To sync with multiple embedded documents use: [Post.syncMany("keywords")],
   * This will update the keywords sub-document to all posts when keywords model is updated.
   */
  public syncWith: ModelSync[] = [WalletTransaction.sync("wallet")];

  /**
   * Default value for model data
   * Works only when creating new records
   */
  public defaultValue: Document = {
    isActive: true,
  };

  /**
   * Cast data types before saving documents into database
   */
  protected casts: Casts = {
    isActive: "boolean",
    wallet: "string",
    withdrawalAmount: "number",
    depositAmount: "number",
    balance: "number",
    remainingDeposit: "number",
    remainingWithdrawal: "number",
    owner: User.embedOnly("id", "name"),
    walletTransactions: WalletTransaction,
  };

  /**
   * Define what columns should be used when model document is embedded in another document.
   * Make sure to set only the needed columns to reduce the document size.
   * This is useful for better performance when fetching data from database.
   */
  public embedded = [
    "id",
    "wallet",
    "balance",
    "remainingDeposit",
    "remainingWithdrawal",
    "owner",
  ];
}
