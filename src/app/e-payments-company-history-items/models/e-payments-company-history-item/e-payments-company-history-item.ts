import {
  Model,
  type Casts,
  type Document,
  type ModelSync,
} from "@warlock.js/cascade";
import { EPayment } from "app/e-payments/models/e-payment";
import { PaymentCompany } from "app/payment-companies/models/payment-company";
import { EPaymentsCompanyHistoryItemOutput } from "./../../output/e-payments-company-history-item-output";

export class EPaymentsCompanyHistoryItem extends Model {
  /**
   * Collection name
   */
  public static collection = "ePaymentsCompanyHistoryItems";

  /**
   * Output class
   */
  public static output = EPaymentsCompanyHistoryItemOutput;

  /**
   * List of models to sync with
   * To sync with a single embedded document use: [User.sync("city")],
   * this will update the city sub-document to all users when city model is updated.
   * To sync with multiple embedded documents use: [Post.syncMany("keywords")],
   * This will update the keywords sub-document to all posts when keywords model is updated.
   */
  public syncWith: ModelSync[] = [
    EPayment.syncMany("ePaymentsCompanyHistoryItems"),
  ];

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
    ePayment: EPayment.embedOnlyId,
    company: PaymentCompany,
    amount: "number",
    date: "date",
  };

  /**
   * Define what columns should be used when model document is embedded in another document.
   * Make sure to set only the needed columns to reduce the document size.
   * This is useful for better performance when fetching data from database.
   */
  public embedded = ["id", "amount", "date", "ePayment", "company"];
}
