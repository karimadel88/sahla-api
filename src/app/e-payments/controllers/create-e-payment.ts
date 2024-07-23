import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import ePaymentsCompanyHistoryItemsRepository from "app/e-payments-company-history-items/repositories/e-payments-company-history-items-repository";
import ePaymentsRepository from "../repositories/e-payments-repository";

const createEPayment: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const Items = request.get("ePaymentsCompanyHistoryItems", []);

  const ePaymentsCompanyHistoryItems = [];

  for (const ePaymentsCompanyHistoryItem of Items) {
    const item = await ePaymentsCompanyHistoryItemsRepository.create(
      ePaymentsCompanyHistoryItem,
    );

    ePaymentsCompanyHistoryItems.push(item.embeddedData);
  }

  console.log(ePaymentsCompanyHistoryItems);

  const ePayment = await ePaymentsRepository.create({
    ...request.only(["date"]),
    ePaymentsCompanyHistoryItems,
    total: ePaymentsCompanyHistoryItems
      .map(item => item.amount)
      .reduce((total, amount) => total + amount, 0),
  });

  return response.success({
    record: ePayment,
  });
};

createEPayment.description = "Create Payment";

export default createEPayment;
