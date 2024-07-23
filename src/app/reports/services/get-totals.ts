import { Expense } from "app/expenses/models/expense";
import { MoneyTransactionsUser } from "app/money-transactions-users/models/money-transactions-user";
import { Wallet } from "app/wallets/models/wallet";
import dayjs from "dayjs";

export async function getTotalsService() {
  const [
    remaining,
    dept,
    thisDayExpenses,
    thisWeekExpenses,
    thisMonthExpenses,
    totalWalletsBalance,
  ] = await Promise.all([
    MoneyTransactionsUser.aggregate().sum("totalRemaining"),
    MoneyTransactionsUser.aggregate().sum("totalDept"),
    Expense.aggregate()
      .whereDateBetween("createdAt", [
        dayjs().startOf("day").toDate(),
        dayjs().endOf("day").toDate(),
      ])
      .sum("amount"),
    Expense.aggregate()
      .whereDateBetween("createdAt", [
        dayjs().startOf("week").toDate(),
        dayjs().endOf("week").toDate(),
      ])
      .sum("amount"),
    Expense.aggregate()
      .whereDateBetween("createdAt", [
        dayjs().startOf("month").toDate(),
        dayjs().endOf("month").toDate(),
      ])
      .sum("amount"),
    Wallet.aggregate().sum("balance"),
  ]);

  return {
    remaining,
    dept,
    thisDayExpenses,
    thisWeekExpenses,
    thisMonthExpenses,
    totalWalletsBalance,
  };
}
