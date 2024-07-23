import {
  type RequestHandler,
  type Request,
  type Response,
} from "@warlock.js/core";
import ePaymentsRepository from "../repositories/e-payments-repository";

const getEPayments: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const { documents: ePayments, paginationInfo } =
    await ePaymentsRepository.listActive(request.all());

  return response.success({
    ePayments,
    paginationInfo,
  });
};

getEPayments.description = "Get Payments";

export default getEPayments;
