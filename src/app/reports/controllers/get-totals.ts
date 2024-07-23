import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import { getTotalsService } from "../services/get-totals";

const getTotals: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  // your code here
  const totals = await getTotalsService();

  return response.success({
    totals,
  });
};

getTotals.description = "Get Totals";

export default getTotals;
