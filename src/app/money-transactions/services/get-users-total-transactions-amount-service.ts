import { GenericObject } from "@mongez/reinforcements";
import { $agg } from "@warlock.js/cascade";
import moneyTransactionsRepository from "../repositories/money-transactions-repository";

export async function getUsersTotalTransactionsAmountService(
  options: GenericObject = {},
) {
  const transactions = await moneyTransactionsRepository.list({
    perform(query) {
      query
        .groupBy("user.id", {
          user: $agg.first("user"),
          totalRemaining: {
            $sum: {
              $cond: [{ $eq: ["$type", "remaining"] }, "$amount", 0],
            },
          },
          totalDept: {
            $sum: {
              $cond: [{ $eq: ["$type", "dept"] }, "$amount", 0],
            },
          },
        })
        .project({
          user: 1,
          totalRemaining: 1,
          totalDept: 1,
        });
    },
    ...options,
  });

  return transactions;
}
