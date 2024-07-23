import {
  Model,
  type Casts,
  type Document,
  type ModelSync,
} from "@warlock.js/cascade";
import { WalletTransactionType } from "app/wallet-transactions/utils/types";
import { Wallet } from "app/wallets/models/wallet";
import { WalletTransactionOutput } from "./../../output/wallet-transaction-output";

export class WalletTransaction extends Model {
  /**
   * Collection name
   */
  public static collection = "walletTransactions";

  /**
   * Output class
   */
  public static output = WalletTransactionOutput;

  /**
   * List of models to sync with
   * To sync with a single embedded document use: [User.sync("city")],
   * this will update the city sub-document to all users when city model is updated.
   * To sync with multiple embedded documents use: [Post.syncMany("keywords")],
   * This will update the keywords sub-document to all posts when keywords model is updated.
   */
  public syncWith: ModelSync[] = [Wallet.syncMany("walletTransactions")];

  /**
   * Default value for model data
   * Works only when creating new records
   */
  public defaultValue: Document = {
    date: new Date(),
  };

  /**
   * Cast data types before saving documents into database
   */
  protected casts: Casts = {
    wallet: Wallet.embed(["id", "wallet"]),
    date: "date",
    amount: "number",
    type: WalletTransactionType,
    comment: "string",
  };

  /**
   * Define what columns should be used when model document is embedded in another document.
   * Make sure to set only the needed columns to reduce the document size.
   * This is useful for better performance when fetching data from database.
   */
  public embedded = ["id", "wallet", "date", "amount", "type", "comment"];
}
