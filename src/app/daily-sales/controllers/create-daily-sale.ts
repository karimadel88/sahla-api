import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import ePaymentsRepository from "app/e-payments/repositories/e-payments-repository";
import { Expense } from "app/expenses/models/expense";
import { MoneyTransactionsUser } from "app/money-transactions-users/models/money-transactions-user";
import dayjs from "dayjs";
import dailySalesRepository from "../repositories/daily-sales-repository";

const createDailySale: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const today = new Date();
  const ePaymentsDocument = (
    await ePaymentsRepository.latest({
      perform(query) {
        query.whereDateBetween("date", [
          dayjs(today).startOf("day").toDate(),
          dayjs(today).endOf("day").toDate(),
        ]);
      },
    })
  ).documents[0];

  if (!ePaymentsDocument) {
    return response.badRequest({
      error: "تأكد من تقفيل رصيد المكن المتبقي أولًا",
    });
  }

  const ePayments = ePaymentsDocument.number("total", 0);

  const remaining =
    await MoneyTransactionsUser.aggregate().sum("totalRemaining");

  const dept = await MoneyTransactionsUser.aggregate().sum("totalDept");

  const expenses = await Expense.aggregate()
    .whereDateBetween("createdAt", [
      dayjs(today).startOf("day").toDate(),
      dayjs(today).endOf("day").toDate(),
    ])
    .sum("amount");

  const liquidity = request.number("liquidity");
  const wallets = request.number("wallets");

  const total = ePayments + liquidity + wallets + remaining - dept - expenses;

  const lastDailySale = (await dailySalesRepository.latest()).documents[0];

  const dailySale = await dailySalesRepository.create({
    wallets,
    liquidity,
    ePayments,
    remaining,
    expenses,
    dept,
    total,
    difference: total - (lastDailySale?.number("total", 0) || 0),
  });

  return response.success({
    record: dailySale,
  });
};

createDailySale.description = "Create Daily Sale";

export default createDailySale;
