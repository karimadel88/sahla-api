import {
  Model,
  type Casts,
  type Document,
  type ModelSync,
} from "@warlock.js/cascade";
import { MoneyTransactionType } from "app/money-transactions/utils/flags";
import { User } from "app/users/models/user";
import { MoneyTransactionsUserOutput } from "./../../output/money-transactions-user-output";

export class MoneyTransactionsUser extends Model {
  /**
   * Collection name
   */
  public static collection = "moneyTransactionsUsers";

  /**
   * Output class
   */
  public static output = MoneyTransactionsUserOutput;

  /**
   * List of models to sync with
   * To sync with a single embedded document use: [User.sync("city")],
   * this will update the city sub-document to all users when city model is updated.
   * To sync with multiple embedded documents use: [Post.syncMany("keywords")],
   * This will update the keywords sub-document to all posts when keywords model is updated.
   */
  public syncWith: ModelSync[] = [];

  /**
   * Default value for model data
   * Works only when creating new records
   */
  public defaultValue: Document = {};

  /**
   * Cast data types before saving documents into database
   */
  protected casts: Casts = {
    user: User,
    totalRemaining: "number",
    totalDept: "number",
    difference: "number",
    differenceType: MoneyTransactionType,
  };

  /**
   * Define what columns should be used when model document is embedded in another document.
   * Make sure to set only the needed columns to reduce the document size.
   * This is useful for better performance when fetching data from database.
   */
  public embedded = ["id"];
}
