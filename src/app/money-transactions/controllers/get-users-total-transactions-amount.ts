import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import { getUsersTotalTransactionsAmountService } from "../services/get-users-total-transactions-amount-service";

const getUsersTotalTransactionsAmount: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const { documents: records, paginationInfo } =
    await getUsersTotalTransactionsAmountService();

  return response.success({
    records,
    paginationInfo,
  });
};

getUsersTotalTransactionsAmount.description =
  "Get Users Total Transactions Amount";

export default getUsersTotalTransactionsAmount;
