import {
  Model,
  type Casts,
  type Document,
  type ModelSync,
} from "@warlock.js/cascade";
import { DailySaleOutput } from "./../../output/daily-sale-output";

export class DailySale extends Model {
  /**
   * Collection name
   */
  public static collection = "dailySales";

  /**
   * Output class
   */
  public static output = DailySaleOutput;

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
    wallets: "number",
    liquidity: "number",
    ePayments: "number",
    remaining: "number",
    dept: "number",
    total: "number",
    difference: "number",
  };

  /**
   * Define what columns should be used when model document is embedded in another document.
   * Make sure to set only the needed columns to reduce the document size.
   * This is useful for better performance when fetching data from database.
   */
  public embedded = ["id"];
}
