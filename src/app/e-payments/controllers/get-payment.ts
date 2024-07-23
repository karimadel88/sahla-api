import {
  type RequestHandler,
  type Request,
  type Response,
} from "@warlock.js/core";
import ePaymentsRepository from "../repositories/e-payments-repository";

const getEPayment: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const ePayment = await ePaymentsRepository.get(request.int("id"));

  if (!ePayment) {
    return response.notFound();
  }

  return response.success({
    ePayment,
  });
};

getEPayment.description = "Get Payment";

export default getEPayment;
